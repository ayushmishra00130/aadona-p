import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import bg from "../../assets/bg.jpg";

/* Reveal Animation */
const Reveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
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

/* Lift Card */
const liftCard =
  "rounded-2xl bg-white p-6 shadow-md hover:shadow-2xl hover:shadow-green-200/60 " +
  "border border-green-300 hover:border-green-500 transition-all duration-500 ease-out hover:-translate-y-1";

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
    console.log("Partner form:", form);
    alert("Partner application submitted!");
  };

  const inputClasses =
    "p-4 rounded-lg border border-blue-200 bg-white text-base transition-all " +
    "focus:outline-none focus:border-emerald-500 text-gray-800 w-full placeholder:text-gray-400";

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* HERO */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-16 text-center">
          <h1 className="text-5xl font-bold text-white">Become a Partner</h1>
          <p className="mt-4 text-xl text-green-100">
            Join our success story with a low risk and strong partnership
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-4 py-12 -mt-8">

          {/* ✅ ONE-BY-ONE CARDS */}
          <section className="py-6 mb-12">
            <div className="max-w-4xl mx-auto space-y-6">

              <Reveal>
                <div className={liftCard}>
                  <h3 className="text-xl font-bold text-teal-900 mb-2">Distributors</h3>
                  <p className="text-slate-700">
                    We Plan to work in Exclusive Regional Distribution Model, Will have exclusive distributor in each region. We don’t believe in dumping stocks, your risk will be kept low so that you can breathe easy with us. There are many more benefits working with us.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className={liftCard}>
                  <h3 className="text-xl font-bold text-teal-900 mb-2">System Integrators</h3>
                  <p className="text-slate-700">
                    We Plan to work in Exclusive Regional Distribution Model, Will have exclusive distributor in each region. We don’t believe in dumping stocks, your risk will be kept low so that you can breathe easy with us. There are many more benefits working with us.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className={liftCard}>
                  <h3 className="text-xl font-bold text-teal-900 mb-2">Solutions Consultant</h3>
                  <p className="text-slate-700">
                    We welcome and highly value solution consultants who are the influential lot to educate customer with unbiased right information, we highly value their knowledge and perseverance, we have special package to support consultants with knowledge on our products and solutions.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className={liftCard}>
                  <h3 className="text-xl font-bold text-teal-900 mb-2">Partner Training</h3>
                  <p className="text-slate-700">
                    We believe in sharing knowledge and taking customer feedback, we will provide in depth sales and technical training to our registered partners to make sure they can independently manage our products and offer solution. Education helps partners to evaluate our product against others and compare by themselves. We believe in giving power in the hands of our partners.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className={liftCard}>
                  <h3 className="text-xl font-bold text-teal-900 mb-2">Product Demonstration</h3>
                  <p className="text-slate-700">
                    
We help our partners with Demo Kit and train them to show successful POC or Demo to their customers. We provide free Demo kit to registered partners* to ensure they don’t have to waste time waiting for it or facing difficulty convincing customers.

                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className={liftCard}>
                  <h3 className="text-xl font-bold text-teal-900 mb-2">Benefits & Incentives</h3>
                  <p className="text-slate-700">
                    A touchy subject, we know many burned their hands, we are different being an Indian brand, we care about our customers and their emotions. Do contact us to know more about your benefits working with us.
                  </p>
                </div>
              </Reveal>

            </div>
          </section>

          {/* ✅ FORM STARTS */}
          <section>
            <h2 className="text-3xl text-emerald-700 text-center mb-6 font-semibold">
              Partner Application
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label>First name</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} className={inputClasses} required />
                </div>
                <div>
                  <label>Last name</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} className={inputClasses} required />
                </div>
                <div>
                  <label>Company Address</label>
                  <input name="companyAddress" value={form.companyAddress} onChange={handleChange} className={inputClasses} />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClasses} required />
                </div>
                <div>
                  <label>Primary area of Interest *</label>
                  <select name="primaryInterest" value={form.primaryInterest} onChange={handleChange} className={inputClasses} required>
                    <option value="">Select an option</option>
                    <option>Distributor</option>
                    <option>System Integrator</option>
                    <option>Solutions Consultant</option>
                    <option>Partner Training</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label>Company City</label>
                  <input name="companyCity" value={form.companyCity} onChange={handleChange} className={inputClasses} />
                </div>
              </div>

              {/* Continue all the remaining rows EXACTLY like your code… */}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-700 text-white px-9 py-3.5 rounded-lg text-base shadow-sm hover:shadow-md transition-all"
                >
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
