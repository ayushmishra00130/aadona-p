import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import {
  Settings2,
  HardDrive,
  Server,
  Calculator,
  Info,
  AlertTriangle,
  Plus,
  Minus,
  Wand2,
  Percent,
  Table,
  RefreshCw,
  Check,
} from "lucide-react";

/* ---------- simple reveal animation ---------- */
const Reveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

const liftCard =
  "rounded-2xl bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-green-100/70 border border-green-200 hover:border-green-400 transition-all duration-500 ease-out hover:-translate-y-1";
const inputBase =
  "w-full border border-green-300 rounded-xl px-3.5 py-2.5 text-base focus:border-green-500 focus:ring-2 focus:ring-green-300 outline-none transition bg-white";
const clampNum = (v, min = 0, max = Number.MAX_SAFE_INTEGER) =>
  Math.min(max, Math.max(min, Number.isFinite(+v) ? +v : 0));

/* ---------- units ---------- */
const toBytes = (size, unit) => (unit === "TB" ? size * 1e12 : size * 1024 ** 4);
const fromBytes = (bytes, unit) =>
  unit === "TB" ? bytes / 1e12 : bytes / 1024 ** 4;

/* ---------- overhead model ---------- */
const OVERHEAD_MIN = 0.5; // %
const OVERHEAD_MAX = 6; // %

function estimateBlockOverhead({ recordSizeKiB, ashift, fastDraid }) {
  const sector = 2 ** ashift; // bytes
  const rsBytes = recordSizeKiB * 1024;
  const base =
    Math.max(0, Math.min(0.03, (sector / rsBytes) * 1.2)) * (fastDraid ? 0.6 : 1);
  return base; // fraction
}

function autoOpenZFSSlopFraction(poolUsableBefore) {
  return poolUsableBefore * 0.03;
}

function zfsCalc({
  totalDisks,
  minSpares,
  diskSize,
  unit,
  vdevType,
  vdevWidth,
  useOpenZFSSlop,
  manualSlopPct,
  reservePct,
  recordSizeKiB,
  ashift,
  diskSwapGiB,
  fastDraid,
  decimalPlaces,
}) {
  const usableDisks = Math.max(0, totalDisks - minSpares);
  const diskBytes = toBytes(diskSize, unit);
  const vdevs = vdevWidth > 0 ? Math.floor(usableDisks / vdevWidth) : 0;
  const disksUsed = vdevs * vdevWidth;
  const leftover = Math.max(0, usableDisks - disksUsed);

  const swapBytes = diskSwapGiB > 0 ? diskSwapGiB * 1024 ** 3 : 0;
  const rawBytes = Math.max(0, disksUsed * (diskBytes - swapBytes));

  let parityPerVdev = 0;
  if (vdevType === "raidz1") parityPerVdev = 1;
  if (vdevType === "raidz2") parityPerVdev = 2;
  if (vdevType === "raidz3") parityPerVdev = 3;

  const dataPerVdev =
    vdevType === "mirror" ? 1 : Math.max(0, vdevWidth - parityPerVdev);

  const usableBeforeOH = Math.max(0, vdevs * dataPerVdev * (diskBytes - swapBytes));

  const blockOverhead = estimateBlockOverhead({ recordSizeKiB, ashift, fastDraid });

  const slopBytes = useOpenZFSSlop
    ? autoOpenZFSSlopFraction(usableBeforeOH)
    : (usableBeforeOH * Math.max(OVERHEAD_MIN, Math.min(OVERHEAD_MAX, manualSlopPct))) /
      100;

  const reserveBytes = (usableBeforeOH * Math.max(0, reservePct)) / 100;
  const blockBytes = usableBeforeOH * blockOverhead;

  const usableAfterOH = Math.max(0, usableBeforeOH - slopBytes - reserveBytes - blockBytes);
  const efficiency = rawBytes > 0 ? usableAfterOH / rawBytes : 0;

  const parityTotal =
    vdevType === "mirror" ? 0 : vdevs * parityPerVdev * (diskBytes - swapBytes);

  const dataStripes = dataPerVdev;
  const parityStripes = vdevType === "mirror" ? vdevWidth - 1 : parityPerVdev;
  const deflateRatio =
    dataStripes + parityStripes > 0
      ? dataStripes / (dataStripes + parityStripes)
      : 0;

  const toU = (b) =>
    Number(fromBytes(b, unit).toFixed(Math.max(0, Math.min(6, decimalPlaces))));

  const details = {
    disks_in_pool: usableDisks,
    vdevs,
    vdev_width: vdevWidth,
    raid_type: vdevType,
    parity_per_vdev: parityPerVdev,
    data_disks_per_vdev: dataPerVdev,
    recordsize_kib: recordSizeKiB,
    ashift,
    swap_gib_per_disk: diskSwapGiB,
    pool_raw_capacity_b: Math.floor(rawBytes),
    pool_usable_before_overhead_b: Math.floor(usableBeforeOH),
    zfs_block_overhead_b: Math.floor(blockBytes),
    slop_b: Math.floor(slopBytes),
    reserve_b: Math.floor(reserveBytes),
    pool_usable_after_overhead_b: Math.floor(usableAfterOH),
    pool_efficiency_ratio: efficiency,
  };

  return {
    vdevs,
    disksUsed,
    leftover,
    raw: toU(rawBytes),
    usableBeforeOH: toU(usableBeforeOH),
    parityTotal: toU(parityTotal),
    slop: toU(slopBytes),
    reserved: toU(reserveBytes),
    blockOverheadU: toU(blockBytes),
    usable: toU(usableAfterOH),
    efficiency,
    deflateRatio,
    details,
  };
}

const widthsFor = (vdevType) =>
  vdevType === "mirror" ? [2, 3] : [4, 6, 8, 10, 12];

/* ---------- NEW: shelf planner helpers ---------- */
const HEAD_SIZES = [12, 24, 48];
const SHELF_SIZES = [
  { label: "24-Bay Shelf", bays: 24 },
  { label: "60-Bay Shelf", bays: 60 },
  { label: "102-Bay Shelf", bays: 102 },
];

function shelfPlanCells(totalDisks) {
  // returns { rows: [{name,bays}], cols: head sizes, matrix: cell[] }
  const rows = SHELF_SIZES.map((s) => ({ name: s.label, bays: s.bays }));
  const cols = HEAD_SIZES;
  const matrix = rows.map((row) =>
    cols.map((head) => {
      const base = head;
      if (totalDisks <= base) {
        // fits in head only
        const free = base - totalDisks;
        return { shelves: 0, free, cap: base };
      }
      const rem = totalDisks - base;
      const shelves = Math.ceil(rem / row.bays);
      const cap = base + shelves * row.bays;
      const free = cap - totalDisks;
      return { shelves, free, cap };
    })
  );
  return { rows, cols, matrix };
}

/* ---------- NEW: quick matrix presets ---------- */
const QUICK_DISK_SIZES_TB = [
  4, 8, 12, 18, 22, // HDD
  1.92, 3.84, 7.68, 15.36, 30.72, // SSD (TB-style labels)
];

const QUICK_COLS = [
  { key: "raw", label: "Raw", type: "raw" },
  { key: "mirror2", label: "2-Way Mirror", type: "mirror", width: 2 },
  { key: "z1w3", label: "3-Wide Z1", type: "raidz1", width: 3 },
  { key: "z1w5", label: "5-Wide Z1", type: "raidz1", width: 5 },
  { key: "z2w5", label: "5-Wide Z2", type: "raidz2", width: 5 },
  { key: "z2w6", label: "6-Wide Z2", type: "raidz2", width: 6 },
  { key: "z2w10", label: "10-Wide Z2", type: "raidz2", width: 10 },
  { key: "z2w11", label: "11-Wide Z2", type: "raidz2", width: 11 },
];

/* ---------- component ---------- */
const NetworkStorageCalculator = () => {
  const [cfg, setCfg] = useState({
    totalDisks: 24,
    minSpares: 2,
    diskSize: 16,
    unit: "TB",
    vdevType: "mirror",
    vdevWidth: 2,

    useOpenZFSSlop: true,
    manualSlopPct: 3,
    recordSizeKiB: 128,
    ashift: 12,
    diskSwapGiB: 0,

    decimalPlaces: 2,
    showAFR: false,
    afrPct: 2,
    fastDraid: true,

    tableData: "usableTiB",
    reservePct: 0,
  });

  const [pending, setPending] = useState(cfg);

  useEffect(() => {
    setPending(cfg);
  }, []); // init

  const patch = (obj) => setCfg((s) => ({ ...s, ...obj }));

  const [warn, setWarn] = useState("");
  useEffect(() => {
    let m = "";
    const usable = cfg.totalDisks - cfg.minSpares;
    if (usable < cfg.vdevWidth) {
      m = "Not enough usable disks to form a single vdev.";
    } else if (cfg.vdevType !== "mirror" && cfg.vdevWidth < 3) {
      m = "RAIDZ width should be ≥ 3 (typically 6–10).";
    } else if (cfg.vdevType === "mirror" && cfg.vdevWidth < 2) {
      m = "Mirror width should be 2 (two-way) or 3 (three-way).";
    }
    setWarn(m);
  }, [cfg.totalDisks, cfg.minSpares, cfg.vdevWidth, cfg.vdevType]);

  const res = useMemo(() => zfsCalc(cfg), [cfg]);

  const fmt = (v) =>
    Number(v).toLocaleString(undefined, {
      maximumFractionDigits: Math.max(0, Math.min(6, cfg.decimalPlaces)),
    });

  const tabs = [
    { key: "mirror", label: "2-Way / 3-Way Mirrors" },
    { key: "raidz1", label: "RAIDZ1" },
    { key: "raidz2", label: "RAIDZ2" },
    { key: "raidz3", label: "RAIDZ3" },
  ];
  const [activeTab, setActiveTab] = useState("mirror");

  const comparisonRows = useMemo(() => {
    const candidate = widthsFor(activeTab);
    return candidate.map((w) => {
      const c = zfsCalc({ ...cfg, vdevType: activeTab, vdevWidth: w });
      return { width: w, c };
    });
  }, [cfg, activeTab]);

  const expectedAnnualFailures =
    cfg.showAFR && cfg.afrPct >= 0
      ? ((cfg.totalDisks - cfg.minSpares) * cfg.afrPct) / 100
      : 0;

  const onUpdate = () => setCfg(pending);
  const onReset = () => {
    const d = {
      totalDisks: 24,
      minSpares: 2,
      diskSize: 16,
      unit: "TB",
      vdevType: "mirror",
      vdevWidth: 2,
      useOpenZFSSlop: true,
      manualSlopPct: 3,
      recordSizeKiB: 128,
      ashift: 12,
      diskSwapGiB: 0,
      decimalPlaces: 2,
      showAFR: false,
      afrPct: 2,
      fastDraid: true,
      tableData: "usableTiB",
      reservePct: 0,
    };
    setCfg(d);
    setPending(d);
  };

  const decimalPlacesControl = (
    <div>
      <label className="block text-slate-700 font-medium mb-1">
        Decimal Places
      </label>
      <input
        type="number"
        min={0}
        max={6}
        className={inputBase}
        value={pending.decimalPlaces}
        onChange={(e) =>
          setPending((s) => ({
            ...s,
            decimalPlaces: clampNum(e.target.value, 0, 6),
          }))
        }
      />
    </div>
  );

  /* ---------- NEW: quick matrix values (recomputed from pending) ---------- */
  const quickMatrix = useMemo(() => {
    return QUICK_DISK_SIZES_TB.map((sz) => {
      const row = { sizeTB: sz, cells: [] };
      QUICK_COLS.forEach((col) => {
        if (col.type === "raw") {
          // Raw usable == disksUsed * diskSize after spares & vdev packing. For a simple glance, show "raw before overhead".
          const tmp = zfsCalc({
            ...pending,
            diskSize: sz,
            vdevType: "mirror", // doesn’t matter; we'll compute vdevs with width=1 to reflect disksUsed
            vdevWidth: 1,
          });
          row.cells.push({ key: col.key, text: fromBytes(tmp.details.pool_usable_before_overhead_b, pending.unit) });
        } else {
          const tmp = zfsCalc({
            ...pending,
            diskSize: sz,
            vdevType: col.type,
            vdevWidth: col.width,
          });
          row.cells.push({ key: col.key, text: tmp.usable });
        }
      });
      return row;
    });
  }, [pending]);

  /* ---------- render ---------- */
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Banner */}
      <section className="mt-16 bg-green-50 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800">
            Network Storage Calculator
          </h1>
          <p className="mt-3 text-green-700 text-lg md:text-xl">
            Configure disks, vdevs and overhead to see your pool’s usable
            capacity and efficiency.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Quick Guide */}
        <Reveal>
          <section className={liftCard}>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Quick Configuration Guide
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>Mirror:</strong> best performance & resiliency, lowest
                capacity efficiency.
              </li>
              <li>
                <strong>RAIDZ2:</strong> popular balance of efficiency vs
                rebuild risk.
              </li>
              <li>
                <strong>RAIDZ3:</strong> better multi-disk failure tolerance
                with moderate efficiency.
              </li>
              <li>
                <strong>OpenZFS slop:</strong> keep some space free for stable
                operations; reservation further ensures performance margins.
              </li>
            </ul>
          </section>
        </Reveal>

        {/* ---------- NEW: Shelf Planner (like the screenshot’s top table) ---------- */}
        <Reveal>
          <section className={liftCard}>
            <div className="flex items-center gap-3 mb-4">
              <HardDrive className="w-6 h-6 text-green-700" />
              <h2 className="text-2xl font-bold text-slate-900">
                TrueNAS Hardware: Shelf Planner
              </h2>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Shows expansion shelf requirements for different head chassis. Click a
              cell to set pool capacity to that total.
            </p>

            {(() => {
              const { rows, cols, matrix } = shelfPlanCells(pending.totalDisks);
              return (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-600">
                        <th className="py-2 pr-4">Shelf Count</th>
                        {cols.map((c) => (
                          <th key={c} className="py-2 pr-4">{c}-Bay Head</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, rIdx) => (
                        <tr key={row.name} className="border-b last:border-0 border-slate-100">
                          <td className="py-2 pr-4 font-medium">{row.name}</td>
                          {cols.map((c, cIdx) => {
                            const cell = matrix[rIdx][cIdx];
                            const label = `${cell.shelves} (${cell.free} free)`;
                            return (
                              <td
                                key={`${rIdx}-${cIdx}`}
                                className="py-2 pr-4 hover:bg-green-50 cursor-pointer rounded"
                                onClick={() =>
                                  setPending((s) => ({ ...s, totalDisks: cell.cap }))
                                }
                              >
                                {label}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })()}
          </section>
        </Reveal>

        {/* Main Controls */}
        <Reveal>
          <section className={liftCard}>
            <div className="flex items-center gap-3 mb-4">
              <Settings2 className="w-6 h-6 text-green-700" />
              <h2 className="text-2xl font-bold text-slate-900">
                Configuration
              </h2>
            </div>

            {warn && (
              <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 mt-0.5" />
                <p className="text-sm">{warn}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Disks */}
              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  Total Disks in Pool
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setPending((s) => ({
                        ...s,
                        totalDisks: clampNum(s.totalDisks - 1, 0),
                      }))
                    }
                    className="px-3 rounded-lg border border-green-300 text-green-700 hover:bg-green-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    min={0}
                    className={inputBase}
                    value={pending.totalDisks}
                    onChange={(e) =>
                      setPending((s) => ({
                        ...s,
                        totalDisks: clampNum(e.target.value, 0),
                      }))
                    }
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setPending((s) => ({
                        ...s,
                        totalDisks: clampNum(s.totalDisks + 1, 0),
                      }))
                    }
                    className="px-3 rounded-lg border border-green-300 text-green-700 hover:bg-green-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  Minimum Spares
                </label>
                <input
                  type="number"
                  min={0}
                  className={inputBase}
                  value={pending.minSpares}
                  onChange={(e) =>
                    setPending((s) => ({
                      ...s,
                      minSpares: clampNum(e.target.value, 0),
                    }))
                  }
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  New Disk Size
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={0}
                    step="0.01"
                    className={inputBase}
                    value={pending.diskSize}
                    onChange={(e) =>
                      setPending((s) => ({
                        ...s,
                        diskSize: clampNum(e.target.value, 0),
                      }))
                    }
                  />
                  <select
                    className={`${inputBase} w-28`}
                    value={pending.unit}
                    onChange={(e) =>
                      setPending((s) => ({ ...s, unit: e.target.value }))
                    }
                  >
                    <option value="TB">TB/GB</option>
                    <option value="TiB">TiB/GiB</option>
                  </select>
                </div>
              </div>

              {/* VDEV */}
              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  New vdev Type
                </label>
                <select
                  className={inputBase}
                  value={pending.vdevType}
                  onChange={(e) =>
                    setPending((s) => ({ ...s, vdevType: e.target.value }))
                  }
                >
                  <option value="mirror">Mirror</option>
                  <option value="raidz1">RAIDZ1</option>
                  <option value="raidz2">RAIDZ2</option>
                  <option value="raidz3">RAIDZ3</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  New vdev Width
                </label>
                <input
                  type="number"
                  min={1}
                  className={inputBase}
                  value={pending.vdevWidth}
                  onChange={(e) =>
                    setPending((s) => ({
                      ...s,
                      vdevWidth: clampNum(e.target.value, 1),
                    }))
                  }
                />
              </div>

              {/* OpenZFS slop */}
              <div className="flex flex-col">
                <label className="block text-slate-700 font-medium mb-1">
                  OpenZFS 2.0.7 Slop
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-green-600"
                    checked={pending.useOpenZFSSlop}
                    onChange={(e) =>
                      setPending((s) => ({
                        ...s,
                        useOpenZFSSlop: e.target.checked,
                      }))
                    }
                  />
                  <span className="text-sm text-slate-700">Enabled</span>
                </label>
                {!pending.useOpenZFSSlop && (
                  <div className="mt-2">
                    <label className="block text-slate-600 text-sm">
                      Manual Slop (%)
                    </label>
                    <input
                      type="number"
                      min={0}
                      step="0.1"
                      className={inputBase}
                      value={pending.manualSlopPct}
                      onChange={(e) =>
                        setPending((s) => ({
                          ...s,
                          manualSlopPct: clampNum(e.target.value, 0, 50),
                        }))
                      }
                    />
                  </div>
                )}
              </div>

              {/* recordsize / ashift / swap */}
              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  ZFS recordsize value
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={4}
                    step="4"
                    className={inputBase}
                    value={pending.recordSizeKiB}
                    onChange={(e) =>
                      setPending((s) => ({
                        ...s,
                        recordSizeKiB: clampNum(e.target.value, 4, 1024),
                      }))
                    }
                  />
                  <span className="self-center text-slate-600">KiB</span>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  ZFS ashift value
                </label>
                <input
                  type="number"
                  min={9}
                  max={16}
                  className={inputBase}
                  value={pending.ashift}
                  onChange={(e) =>
                    setPending((s) => ({
                      ...s,
                      ashift: clampNum(e.target.value, 9, 16),
                    }))
                  }
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  Disk Swap Size
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={0}
                    className={inputBase}
                    value={pending.diskSwapGiB}
                    onChange={(e) =>
                      setPending((s) => ({
                        ...s,
                        diskSwapGiB: clampNum(e.target.value, 0, 1024),
                      }))
                    }
                  />
                  <span className="self-center text-slate-600">GiB</span>
                </div>
              </div>

              {/* decimal places */}
              {decimalPlacesControl}

              {/* table data radio */}
              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  Table Data
                </label>
                <div className="space-y-2">
                  {[
                    { key: "usableTiB", label: "Usable Capacity (TiB)" },
                    { key: "usableTB", label: "Usable Capacity (TB)" },
                    { key: "efficiency", label: "Capacity Efficiency" },
                    { key: "overhead", label: "ZFS Overhead" },
                    { key: "capReservation", label: "Cap. w/ Reservation" },
                  ].map((r) => (
                    <label key={r.key} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="tableData"
                        className="accent-green-600"
                        checked={pending.tableData === r.key}
                        onChange={() =>
                          setPending((s) => ({ ...s, tableData: r.key }))
                        }
                      />
                      <span className="text-sm text-slate-700">{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* deflate ratio */}
              <div className="flex items-center gap-3">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-green-600"
                    checked={cfg.showDeflate}
                    onChange={(e) => patch({ showDeflate: e.target.checked })}
                  />
                  <span className="text-sm text-slate-700">Show Deflate Ratio</span>
                </label>
              </div>

              {/* fast dRAID */}
              <div className="flex items-center gap-3">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-green-600"
                    checked={pending.fastDraid}
                    onChange={(e) =>
                      setPending((s) => ({ ...s, fastDraid: e.target.checked }))
                    }
                  />
                  <span className="text-sm text-slate-700">
                    Fast dRAID Calculation
                  </span>
                </label>
              </div>

              {/* AFR toggle */}
              <div className="flex flex-col">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-green-600"
                    checked={pending.showAFR}
                    onChange={(e) =>
                      setPending((s) => ({ ...s, showAFR: e.target.checked }))
                    }
                  />
                  <span className="text-sm text-slate-700">
                    Show Annual Failure Rate (AFR)
                  </span>
                </label>
                {pending.showAFR && (
                  <div className="mt-2">
                    <label className="block text-slate-600 text-sm">
                      AFR (%)
                    </label>
                    <input
                      type="number"
                      min={0}
                      step="0.1"
                      className={inputBase}
                      value={pending.afrPct}
                      onChange={(e) =>
                        setPending((s) => ({
                          ...s,
                          afrPct: clampNum(e.target.value, 0, 100),
                        }))
                      }
                    />
                  </div>
                )}
              </div>

              {/* Reservation */}
              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  Capacity Reservation (%)
                </label>
                <input
                  type="number"
                  min={0}
                  step="0.1"
                  className={inputBase}
                  value={pending.reservePct}
                  onChange={(e) =>
                    setPending((s) => ({
                      ...s,
                      reservePct: clampNum(e.target.value, 0, 80),
                    }))
                  }
                />
              </div>
            </div>

            {/* Update / Reset */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onUpdate}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                <Check className="w-4 h-4" />
                Update
              </button>
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-green-300 text-green-700 hover:bg-green-50 transition"
              >
                <RefreshCw className="w-4 h-4" />
                Reset
              </button>
              <div className="text-slate-500 text-sm flex items-center">
                <Info className="w-4 h-4 mr-1" />
                Click the help icons on the original for deeper background; this
                calculator mirrors the inputs with a practical model.
              </div>
            </div>
          </section>
        </Reveal>

        {/* Summary */}
        <Reveal>
          <section className={liftCard}>
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-6 h-6 text-green-700" />
              <h2 className="text-2xl font-bold text-slate-900">Summary</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Summary
                icon={<HardDrive className="w-5 h-5 text-green-700" />}
                label={`Raw Capacity (${cfg.unit})`}
                value={fmt(res.raw)}
              />
              <Summary
                icon={<Server className="w-5 h-5 text-green-700" />}
                label={`Usable (before OH) (${cfg.unit})`}
                value={fmt(res.usableBeforeOH)}
              />
              <Summary
                icon={<Table className="w-5 h-5 text-green-700" />}
                label={`Usable (after OH) (${cfg.unit})`}
                value={fmt(res.usable)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-6">
              <Summary label="VDEVs" value={res.vdevs} />
              <Summary
                label="Disks Used"
                value={`${res.disksUsed} (+${cfg.minSpares} spares)`}
              />
              <Summary label="Leftover Disks" value={res.leftover} />
              <Summary
                label="Efficiency"
                value={`${(res.efficiency * 100).toFixed(
                  Math.max(0, Math.min(6, cfg.decimalPlaces))
                )}%`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-6">
              {cfg.vdevType !== "mirror" && (
                <Summary
                  label={`Total Parity (${cfg.unit})`}
                  value={fmt(res.parityTotal)}
                />
              )}
              <Summary label={`Slop (${cfg.unit})`} value={fmt(res.slop)} />
              <Summary
                label={`Reservation (${cfg.unit})`}
                value={fmt(res.reserved)}
              />
              <Summary
                label={`Block Overhead (${cfg.unit})`}
                value={fmt(res.blockOverheadU)}
              />
            </div>

            {cfg.showAFR && (
              <div className="mt-6 rounded-xl border border-green-100 bg-green-50/70 p-4 text-slate-800">
                <Percent className="inline w-4 h-4 mr-2 text-green-700" />
                Expected failures/year ≈{" "}
                <strong>
                  {expectedAnnualFailures.toFixed(2)} disk
                  {expectedAnnualFailures >= 1 ? "s" : ""}
                </strong>
                .
              </div>
            )}

            {cfg.showDeflate && (
              <div className="mt-3 text-slate-600 text-sm">
                Deflate Ratio (data/(data+parity) approx):{" "}
                <strong>{(res.deflateRatio * 100).toFixed(1)}%</strong>
              </div>
            )}
          </section>
        </Reveal>

        {/* Common Layouts */}
        <Reveal>
          <section className={liftCard}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <HardDrive className="w-6 h-6 text-green-700" />
                <h2 className="text-2xl font-bold text-slate-900">
                  Common Layouts
                </h2>
              </div>
              <div className="text-sm text-slate-500">
                Click a row to apply that layout.
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={[
                    "px-3 py-2 rounded-full border transition",
                    activeTab === t.key
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-green-300 text-green-700 hover:bg-green-50",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-600">
                    <th className="py-3 pr-4">Width</th>
                    <th className="py-3 pr-4">VDEVs</th>
                    <th className="py-3 pr-4">Disks Used</th>
                    {cfg.tableData === "usableTB" && (
                      <th className="py-3 pr-4">Usable (TB)</th>
                    )}
                    {cfg.tableData === "usableTiB" && (
                      <th className="py-3 pr-4">Usable (TiB)</th>
                    )}
                    {cfg.tableData === "efficiency" && (
                      <th className="py-3 pr-4">Efficiency</th>
                    )}
                    {cfg.tableData === "overhead" && (
                      <th className="py-3 pr-4">ZFS Overhead ({cfg.unit})</th>
                    )}
                    {cfg.tableData === "capReservation" && (
                      <th className="py-3 pr-4">
                        Cap. w/ Reservation ({cfg.unit})
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => {
                    const usableTB = fromBytes(
                      row.c.details.pool_usable_after_overhead_b,
                      "TB"
                    );
                    const usableTiB = fromBytes(
                      row.c.details.pool_usable_after_overhead_b,
                      "TiB"
                    );
                    const overheadU =
                      fromBytes(
                        row.c.details.zfs_block_overhead_b +
                          row.c.details.slop_b +
                          row.c.details.reserve_b,
                        cfg.unit
                      ) || 0;
                    const capWithRes =
                      fromBytes(
                        row.c.details.pool_usable_before_overhead_b -
                          row.c.details.reserve_b,
                        cfg.unit
                      ) || 0;

                    return (
                      <tr
                        key={row.width}
                        className="border-b last:border-0 border-slate-100 hover:bg-green-50/50 cursor-pointer"
                        onClick={() =>
                          setPending((s) => ({
                            ...s,
                            vdevType: activeTab,
                            vdevWidth: row.width,
                          }))
                        }
                      >
                        <td className="py-3 pr-4 font-medium">{row.width}</td>
                        <td className="py-3 pr-4">{row.c.vdevs}</td>
                        <td className="py-3 pr-4">{row.c.disksUsed}</td>

                        {cfg.tableData === "usableTB" && (
                          <td className="py-3 pr-4">
                            {usableTB.toLocaleString(undefined, {
                              maximumFractionDigits: cfg.decimalPlaces,
                            })}
                          </td>
                        )}
                        {cfg.tableData === "usableTiB" && (
                          <td className="py-3 pr-4">
                            {usableTiB.toLocaleString(undefined, {
                              maximumFractionDigits: cfg.decimalPlaces,
                            })}
                          </td>
                        )}
                        {cfg.tableData === "efficiency" && (
                          <td className="py-3 pr-4">
                            {(row.c.efficiency * 100).toFixed(
                              cfg.decimalPlaces
                            )}
                            %
                          </td>
                        )}
                        {cfg.tableData === "overhead" && (
                          <td className="py-3 pr-4">
                            {overheadU.toLocaleString(undefined, {
                              maximumFractionDigits: cfg.decimalPlaces,
                            })}
                          </td>
                        )}
                        {cfg.tableData === "capReservation" && (
                          <td className="py-3 pr-4">
                            {capWithRes.toLocaleString(undefined, {
                              maximumFractionDigits: cfg.decimalPlaces,
                            })}
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Apply selected row */}
            <div className="mt-4">
              <button
                type="button"
                onClick={onUpdate}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                <Check className="w-4 h-4" />
                Apply Selection
              </button>
            </div>
          </section>
        </Reveal>

        {/* ---------- NEW: Quick Compare Matrix (like the big grid in screenshot) ---------- */}
        <Reveal>
          <section className={liftCard}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Table className="w-6 h-6 text-green-700" />
                <h2 className="text-2xl font-bold text-slate-900">
                  Quick Compare Matrix
                </h2>
              </div>
              <div className="text-sm text-slate-500">
                Click a cell to set disk size & layout, then hit <b>Update</b>.
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-600">
                    <th className="py-3 pr-4">Size</th>
                    {QUICK_COLS.map((c) => (
                      <th key={c.key} className="py-3 pr-4">{c.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {quickMatrix.map((row) => (
                    <tr key={row.sizeTB} className="border-b last:border-0 border-slate-100">
                      <td className="py-2 pr-4 font-medium">
                        {row.sizeTB.toString().replace(".00","")} {pending.unit === "TB" ? "TB" : "TiB"}
                      </td>
                      {row.cells.map((cell, idx) => (
                        <td
                          key={QUICK_COLS[idx].key}
                          className="py-2 pr-4 hover:bg-green-50 cursor-pointer"
                          onClick={() => {
                            const col = QUICK_COLS[idx];
                            if (col.type === "raw") {
                              // only change disk size
                              setPending((s) => ({ ...s, diskSize: row.sizeTB }));
                            } else {
                              setPending((s) => ({
                                ...s,
                                diskSize: row.sizeTB,
                                vdevType: col.type,
                                vdevWidth: col.width,
                              }));
                            }
                          }}
                        >
                          {Number(cell.text).toLocaleString(undefined, {
                            maximumFractionDigits: pending.decimalPlaces,
                          })}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={onUpdate}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                <Check className="w-4 h-4" />
                Apply Selection
              </button>
            </div>
          </section>
        </Reveal>

        {/* Calculation Values */}
        <Reveal>
          <section className={liftCard}>
            <div className="flex items-center gap-3 mb-4">
              <Table className="w-6 h-6 text-green-700" />
              <h2 className="text-2xl font-bold text-slate-900">
                Calculation Values
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-600">
                    <th className="py-2 pr-4">Key</th>
                    <th className="py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(res.details).map(([k, v]) => (
                    <tr
                      key={k}
                      className="border-b last:border-0 border-slate-100"
                    >
                      <td className="py-2 pr-4 font-mono text-slate-700">
                        {k}
                      </td>
                      <td className="py-2 font-mono text-slate-900">
                        {typeof v === "number"
                          ? Math.floor(v).toLocaleString()
                          : String(v)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};

const Summary = ({ icon, label, value }) => (
  <div className="rounded-xl border border-green-200 p-5 bg-white/80">
    <div className="text-sm text-slate-600 mb-1 flex items-center gap-2">
      {icon || null}
      {label}
    </div>
    <div className="text-2xl font-semibold text-slate-900">{value}</div>
  </div>
);

export default NetworkStorageCalculator;



