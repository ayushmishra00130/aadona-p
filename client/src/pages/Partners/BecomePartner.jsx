import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import bg from "../../assets/bg.jpg";

const COUNTRIES = [
  "Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla",
  "Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan",
  "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan",
  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Cambodia","Cameroon","Canada",
  "Chile","China","Colombia","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Dominican Republic",
  "Ecuador","Egypt","El Salvador","Estonia","Ethiopia","Finland","France","Germany","Ghana","Greece","Greenland",
  "Guatemala","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Latvia","Lebanon","Lesotho","Liberia","Libya",
  "Lithuania","Luxembourg","Madagascar","Malaysia","Maldives","Mali","Malta","Mexico","Monaco","Mongolia",
  "Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Zealand","Nicaragua",
  "Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Panama","Paraguay","Peru","Philippines","Poland",
  "Portugal","Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Seychelles","Singapore",
  "Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland",
  "Syria","Taiwan","Tanzania","Thailand","Togo","Trinidad and Tobago","Tunisia","Turkey","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen",
  "Zambia","Zimbabwe","Other"
];

const REVENUE_RANGES = [
  "Select an option",
  "Less than ₹10 Lakh",
  "₹10 Lakh – ₹50 Lakh",
  "₹50 Lakh – ₹1 Crore",
  "₹1 Crore – ₹5 Crore",
  "₹5 Crore – ₹20 Crore",
  "Above ₹20 Crore"
];

const VERTICALS = [
  "Select an option",
  "Retail / eCommerce",
  "Enterprise (Large Business)",
  "SMB (Small & Medium Business)",
  "Government / Public Sector",
  "Education",
  "Healthcare",
  "Hospitality",
  "Telecom / ISP",
  "Manufacturing",
  "Banking & Finance",
  "Transportation & Logistics",
  "Security / Surveillance",
  "Other"
];

const MARKET_SEGMENTS = [
  "Select an option",
  "Retail",
  "Enterprise",
  "SMB",
  "Public Sector / Government",
  "Education",
  "Healthcare",
  "Hospitality",
  "Telecom",
  "Industrial / Manufacturing",
  "Other"
];

const STRENGTH_OPTIONS = [
  "Select an option",
  "None",
  "1-3",
  "4-10",
  "11-25",
  "26-50",
  "50+"
];

const YES_NO_PARTIAL = [
  "Select an option",
  "None",
  "Partial / Some",
  "Full / Extensive"
];

export default function BecomePartner() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyAddress: "",
    email: "",
    primaryInterest: "",
    companyCity: "",
    regionStateProvince: "",
    phone: "",
    geographiesServed: "",
    postalZip: "",
    country: "",
    companyName: "",
    websiteAddress: "",
    revenueAnnual: "",
    verticals: "",
    revenuePrivateProjects: "",
    revenueFromGovt: "",
    revenueFromDirectEnd: "",
    strengthSalesTeam: "",
    strengthTechnicalSalesTeam: "",
    revenueRetailTrading: "",
    marketSegmentExpertise: "",
    wlanLanExpertise: "",
    brandsYouSell: "",
    otherComments: "",
    additionalNotes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("BecomePartner form submission:", form);
    alert("Partner application submitted. Check console for data.");
  };

  const inputClasses = "p-4 rounded-lg border border-blue-200 bg-white text-base transition-all focus:outline-none focus:border-emerald-500 text-gray-800 w-full placeholder:text-gray-400";

  return (
    <>
      <Navbar />

      {/* Full background (CSR style) */}
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* CSR-style Hero Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white sm:text-6xl">
              Become a Partner
            </h1>
            <p className="mt-4 text-xl text-green-100 max-w-3xl mx-auto">
              Join our partner ecosystem — distributors, system integrators, consultants and trainers. Fill the form and our team will contact you.
            </p>
          </div>
        </div>

        {/* Page content directly on background (NO big white wrapper) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
          {/* Info Section */}
          <section className="py-6 mb-8">
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-6">
                <li className="text-teal-900">
                  <h3 className="text-lg text-teal-800 font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl leading-none mr-1.5">•</span> Distributors
                  </h3>
                  <p className="text-teal-700">Join our success story with a low-risk, rapidly expanding business. We operate an exclusive regional distribution model — one exclusive distributor per region.</p>
                </li>

                <li className="text-teal-900">
                  <h3 className="text-lg text-teal-800 font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl leading-none mr-1.5">•</span> System Integrators
                  </h3>
                  <p className="text-teal-700">We provide technical support, demo kits, and training so integrators can deploy solutions confidently and quickly.</p>
                </li>

                <li className="text-teal-900">
                  <h3 className="text-lg text-teal-800 font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl leading-none mr-1.5">•</span> Solutions Consultant
                  </h3>
                  <p className="text-teal-700">We offer special packages and resources to help consultants guide customers to the right solution.</p>
                </li>

                <li className="text-teal-900">
                  <h3 className="text-lg text-teal-800 font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl leading-none mr-1.5">•</span> Partner Training
                  </h3>
                  <p className="text-teal-700">In-depth sales & technical training to partners so they can manage products and deliver solutions independently.</p>
                </li>

                <li className="text-teal-900">
                  <h3 className="text-lg text-teal-800 font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl leading-none mr-1.5">•</span> Product Demonstration
                  </h3>
                  <p className="text-teal-700">Registered partners can receive demo kits for POCs and demos.</p>
                </li>

                <li className="text-teal-900">
                  <h3 className="text-lg text-teal-800 font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl leading-none mr-1.5">•</span> Benefits and Incentives
                  </h3>
                  <p className="text-teal-700">Contact us to learn about tailored benefits and incentive programs available to partners.</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Partner Application Form (no big white background) */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-emerald-700 text-center mb-6 font-semibold">Partner Application</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">First name</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Enter your first name" required className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Last name</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Enter your last name" required className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Company Address</label>
                  <input name="companyAddress" value={form.companyAddress} onChange={handleChange} placeholder="Street Address" className={inputClasses} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Primary area of Interest *</label>
                  <select name="primaryInterest" value={form.primaryInterest} onChange={handleChange} required className={inputClasses}>
                    <option value="">Select an option</option>
                    <option value="Distributor">Distributor</option>
                    <option value="System Integrator">System Integrator</option>
                    <option value="Solutions Consultant">Solutions Consultant</option>
                    <option value="Partner Training">Partner Training</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Company City</label>
                  <input name="companyCity" value={form.companyCity} onChange={handleChange} placeholder="City" className={inputClasses} />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Region/State/Province</label>
                  <input name="regionStateProvince" value={form.regionStateProvince} onChange={handleChange} placeholder="Region/State/Province" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Geographies served</label>
                  <input name="geographiesServed" value={form.geographiesServed} onChange={handleChange} placeholder="Please mention markets you cover" className={inputClasses} />
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Postal / Zip code</label>
                  <input name="postalZip" value={form.postalZip} onChange={handleChange} placeholder="Postal / Zip code" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Country *</label>
                  <select name="country" value={form.country} onChange={handleChange} required className={inputClasses}>
                    <option value="">Country</option>
                    {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Company</label>
                  <input name="companyName" value={form.companyName} onChange={handleChange} placeholder="Company" className={inputClasses} />
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Website Address</label>
                  <input name="websiteAddress" value={form.websiteAddress} onChange={handleChange} placeholder="Leave empty if you don't have" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Annual revenue *</label>
                  <select name="revenueAnnual" value={form.revenueAnnual} onChange={handleChange} required className={inputClasses}>
                    {REVENUE_RANGES.map(r => <option key={r} value={r === "Select an option" ? "" : r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Verticals *</label>
                  <select name="verticals" value={form.verticals} onChange={handleChange} required className={inputClasses}>
                    {VERTICALS.map(v => <option key={v} value={v === "Select an option" ? "" : v}>{v}</option>)}
                  </select>
                </div>
              </div>

              {/* Row 6 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Revenue From Private Projects</label>
                  <select name="revenuePrivateProjects" value={form.revenuePrivateProjects} onChange={handleChange} className={inputClasses}>
                    {REVENUE_RANGES.map(r => <option key={r} value={r === "Select an option" ? "" : r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Revenue from Government *</label>
                  <select name="revenueFromGovt" value={form.revenueFromGovt} onChange={handleChange} required className={inputClasses}>
                    {REVENUE_RANGES.map(r => <option key={r} value={r === "Select an option" ? "" : r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Revenue From Direct End Customer *</label>
                  <select name="revenueFromDirectEnd" value={form.revenueFromDirectEnd} onChange={handleChange} required className={inputClasses}>
                    {REVENUE_RANGES.map(r => <option key={r} value={r === "Select an option" ? "" : r}>{r}</option>)}
                  </select>
                </div>
              </div>

              {/* Row 7 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Sales team strength *</label>
                  <select name="strengthSalesTeam" value={form.strengthSalesTeam} onChange={handleChange} required className={inputClasses}>
                    {STRENGTH_OPTIONS.map(s => <option key={s} value={s === "Select an option" ? "" : s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Technical sales team strength</label>
                  <select name="strengthTechnicalSalesTeam" value={form.strengthTechnicalSalesTeam} onChange={handleChange} className={inputClasses}>
                    {STRENGTH_OPTIONS.map(s => <option key={s} value={s === "Select an option" ? "" : s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Revenue From Retail / Trading *</label>
                  <select name="revenueRetailTrading" value={form.revenueRetailTrading} onChange={handleChange} required className={inputClasses}>
                    {REVENUE_RANGES.map(r => <option key={r} value={r === "Select an option" ? "" : r}>{r}</option>)}
                  </select>
                </div>
              </div>

              {/* Row 8 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Market segment expertise *</label>
                  <select name="marketSegmentExpertise" value={form.marketSegmentExpertise} onChange={handleChange} required className={inputClasses}>
                    {MARKET_SEGMENTS.map(m => <option key={m} value={m === "Select an option" ? "" : m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">WLAN & LAN expertise</label>
                  <select name="wlanLanExpertise" value={form.wlanLanExpertise} onChange={handleChange} className={inputClasses}>
                    {YES_NO_PARTIAL.map(y => <option key={y} value={y === "Select an option" ? "" : y}>{y}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Brands you sell</label>
                  <input name="brandsYouSell" value={form.brandsYouSell} onChange={handleChange} placeholder="Which brands do you sell..." className={inputClasses} />
                </div>
              </div>

              {/* Final rows */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Any other comments</label>
                  <textarea name="otherComments" value={form.otherComments} onChange={handleChange} placeholder="Any other comments" className={inputClasses + " min-h-28 resize-y"} />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Additional notes / attachments (URL)</label>
                  <input name="additionalNotes" value={form.additionalNotes} onChange={handleChange} placeholder="Paste Drive / doc link (optional)" className={inputClasses} />
                </div>
              </div>

              <div className="flex justify-center">
                <button type="submit" className="bg-green-700 text-white px-9 py-3.5 rounded-lg text-base shadow-sm hover:shadow-md transition-all">
                  Submit Application
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
