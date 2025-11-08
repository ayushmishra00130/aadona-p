import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
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

  const inputClasses = "p-4 rounded-lg border border-blue-200 bg-white text-base transition-all shadow-[6px_6px_0_rgba(81,131,204,0.08)] focus:outline-none focus:border-emerald-500 focus:shadow-[0_6px_0_rgba(138,182,150,0.12),0_0_0_3px_rgba(142,182,155,0.06)] text-gray-800 w-full placeholder:text-gray-400 placeholder:font-light";

  return (
    <>
 <Navbar/>
<div
  className="min-h-screen bg-cover bg-center bg-fixed text-gray-800 pb-16 mt-20 mb-20"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>




      {/* Hero Section */}
    
       <div className="bg-green-400/10 pt-12 pb-12 shadow-inner mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-green-900 sm:text-6xl">
                Become a Partner
            </h1>
            <p className="mt-4 text-xl text-green-600">
           Join our partner ecosystem – distributors, system integrators, consultants and training partners.
            Fill out the form and our partnership team will contact you with next steps.            </p>
        </div>
    </div>

      {/* Info Section */}
      <section className="py-10 px-5 max-w-6xl mx-auto">
        <ul className="space-y-7 list-none p-0 m-0">
          <li className="text-teal-900 mb-7">
            <h3 className="text-lg text-teal-800 font-semibold flex items-center gap-2 mb-2 mt-0">
              <span className="text-2xl leading-none mr-1.5">•</span> Distributors
            </h3>
            <p className="text-teal-700 font-normal my-1.5 mx-0">Join our success story with a low-risk, rapidly expanding business.</p>
            <p className="text-teal-800 leading-relaxed font-light m-0 mb-2.5">
              We plan to operate an exclusive regional distribution model – one exclusive distributor per region. We don't believe in stock-dumping; your risk will be kept low so you can breathe easy working with us. There are additional benefits for registered partners.
            </p>
          </li>

          <li className="text-teal-900 mb-7">
            <h3 className="text-lg text-teal-800 font-semibold flex items-center gap-2 mb-2 mt-0">
              <span className="text-2xl leading-none mr-1.5">•</span> System Integrators
            </h3>
            <p className="text-teal-700 font-normal my-1.5 mx-0">Join our success story with a low-risk, rapidly expanding business.</p>
            <p className="text-teal-800 leading-relaxed font-light m-0 mb-2.5">
              We welcome system integrators who can design and deliver end-to-end solutions. We provide technical support, demo kits, and training so integrators can deploy solutions confidently and quickly.
            </p>
          </li>

          <li className="text-teal-900 mb-7">
            <h3 className="text-lg text-teal-800 font-semibold flex items-center gap-2 mb-2 mt-0">
              <span className="text-2xl leading-none mr-1.5">•</span> Solutions Consultant
            </h3>
            <p className="text-teal-700 font-normal my-1.5 mx-0">Join our success story with a low-risk, rapidly expanding business.</p>
            <p className="text-teal-800 leading-relaxed font-light m-0 mb-2.5">
              We value consultants who educate customers with unbiased guidance. We offer special packages to support consultants with product knowledge and resources to help customers choose the right solution.
            </p>
          </li>

          <li className="text-teal-900 mb-7">
            <h3 className="text-lg text-teal-800 font-semibold flex items-center gap-2 mb-2 mt-0">
              <span className="text-2xl leading-none mr-1.5">•</span> Partner Training
            </h3>
            <p className="text-teal-700 font-normal my-1.5 mx-0">Join our success story with a low-risk, rapidly expanding business.</p>
            <p className="text-teal-800 leading-relaxed font-light m-0 mb-2.5">
              We share knowledge and take customer feedback seriously. We provide in-depth sales and technical training to partners so they can manage products and deliver solutions independently.
            </p>
          </li>

          <li className="text-teal-900 mb-7">
            <h3 className="text-lg text-teal-800 font-semibold flex items-center gap-2 mb-2 mt-0">
              <span className="text-2xl leading-none mr-1.5">•</span> Product Demonstration
            </h3>
            <p className="text-teal-700 font-normal my-1.5 mx-0">Ready when you need it.</p>
            <p className="text-teal-800 leading-relaxed font-light m-0 mb-2.5">
              We support partners with demo kits and training to show successful POCs and demos. Registered partners can receive demo kits so they don't waste time convincing customers.
            </p>
          </li>

          <li className="text-teal-900 mb-7">
            <h3 className="text-lg text-teal-800 font-semibold flex items-center gap-2 mb-2 mt-0">
              <span className="text-2xl leading-none mr-1.5">•</span> Benefits and Incentives
            </h3>
            <p className="text-teal-700 font-normal my-1.5 mx-0">Learn more about what's in it for you.</p>
            <p className="text-teal-800 leading-relaxed font-light m-0 mb-2.5">
              We understand pricing sensitivity. As an Indian brand, we care about our customers and partners. Contact us to learn more about tailored benefits and incentive programs available to partners.
            </p>
          </li>
        </ul>
      </section>

      {/* Form Section */}
      <main className="flex justify-center -mt-4 px-5 pb-10">
        <div className="relative bg-white w-full max-w-6xl rounded-3xl p-12 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-t-3xl"></div>
          
          <h2 className="text-3xl text-emerald-700 text-center mb-6 font-normal">Partner Application</h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">First name</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Enter your first name" required className={inputClasses} />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Last name</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Enter your last name" required className={inputClasses} />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Company Address</label>
                <input name="companyAddress" value={form.companyAddress} onChange={handleChange} placeholder="Street Address" className={inputClasses} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required className={inputClasses} />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Primary area of Interest *</label>
                <select name="primaryInterest" value={form.primaryInterest} onChange={handleChange} required className={inputClasses}>
                  <option value="">Select an option</option>
                  <option value="Distributor">Distributor</option>
                  <option value="System Integrator">System Integrator</option>
                  <option value="Solutions Consultant">Solutions Consultant</option>
                  <option value="Partner Training">Partner Training</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Company City</label>
                <input name="companyCity" value={form.companyCity} onChange={handleChange} placeholder="City" className={inputClasses} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Region/State/Province</label>
                <input name="regionStateProvince" value={form.regionStateProvince} onChange={handleChange} placeholder="Region/State/Province" className={inputClasses} />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number" className={inputClasses} />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Geographies served</label>
                <input name="geographiesServed" value={form.geographiesServed} onChange={handleChange} placeholder="Please mention markets you cover" className={inputClasses} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Postal / Zip code</label>
                <input name="postalZip" value={form.postalZip} onChange={handleChange} placeholder="Postal / Zip code" className={inputClasses} />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Country *</label>
                <select name="country" value={form.country} onChange={handleChange} required className={inputClasses}>
                  <option value="">Country</option>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Company</label>
                <input name="companyName" value={form.companyName} onChange={handleChange} placeholder="Company" className={inputClasses} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Website Address</label>
                <input name="websiteAddress" value={form.websiteAddress} onChange={handleChange} placeholder="Leave empty if you don't have" className={inputClasses} />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Annual revenue *</label>
                <select name="revenueAnnual" value={form.revenueAnnual} onChange={handleChange} required className={inputClasses}>
                  {REVENUE_RANGES.map(r => <option key={r} value={r === "Select an option" ? "" : r}>{r}</option>)}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Verticals *</label>
                <select name="verticals" value={form.verticals} onChange={handleChange} required className={inputClasses}>
                  {VERTICALS.map(v => <option key={v} value={v === "Select an option" ? "" : v}>{v}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Revenue From Private Projects</label>
                <select name="revenuePrivateProjects" value={form.revenuePrivateProjects} onChange={handleChange} className={inputClasses}>
                  {REVENUE_RANGES.map(r => <option key={r} value={r === "Select an option" ? "" : r}>{r}</option>)}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Revenue from Government *</label>
                <select name="revenueFromGovt" value={form.revenueFromGovt} onChange={handleChange} required className={inputClasses}>
                  {REVENUE_RANGES.map(r => <option key={r} value={r === "Select an option" ? "" : r}>{r}</option>)}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Revenue From Direct End Customer *</label>
                <select name="revenueFromDirectEnd" value={form.revenueFromDirectEnd} onChange={handleChange} required className={inputClasses}>
                  {REVENUE_RANGES.map(r => <option key={r} value={r === "Select an option" ? "" : r}>{r}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Sales team strength *</label>
                <select name="strengthSalesTeam" value={form.strengthSalesTeam} onChange={handleChange} required className={inputClasses}>
                  {STRENGTH_OPTIONS.map(s => <option key={s} value={s === "Select an option" ? "" : s}>{s}</option>)}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Technical sales team strength</label>
                <select name="strengthTechnicalSalesTeam" value={form.strengthTechnicalSalesTeam} onChange={handleChange} className={inputClasses}>
                  {STRENGTH_OPTIONS.map(s => <option key={s} value={s === "Select an option" ? "" : s}>{s}</option>)}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Revenue From Retail / Trading *</label>
                <select name="revenueRetailTrading" value={form.revenueRetailTrading} onChange={handleChange} required className={inputClasses}>
                  {REVENUE_RANGES.map(r => <option key={r} value={r === "Select an option" ? "" : r}>{r}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Market segment expertise *</label>
                <select name="marketSegmentExpertise" value={form.marketSegmentExpertise} onChange={handleChange} required className={inputClasses}>
                  {MARKET_SEGMENTS.map(m => <option key={m} value={m === "Select an option" ? "" : m}>{m}</option>)}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">WLAN & LAN expertise</label>
                <select name="wlanLanExpertise" value={form.wlanLanExpertise} onChange={handleChange} className={inputClasses}>
                  {YES_NO_PARTIAL.map(y => <option key={y} value={y === "Select an option" ? "" : y}>{y}</option>)}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Brands you sell</label>
                <input name="brandsYouSell" value={form.brandsYouSell} onChange={handleChange} placeholder="write which brands do you sell..." className={inputClasses} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Any other comments</label>
                <textarea name="otherComments" value={form.otherComments} onChange={handleChange} placeholder="Any other comments" className={inputClasses + " min-h-28 resize-y"}></textarea>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Additional notes / attachments (URL)</label>
                <input name="additionalNotes" value={form.additionalNotes} onChange={handleChange} placeholder="paste link to Drive / document (optional)" className={inputClasses} />
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <button type="submit" className="bg-green-700 text-white px-9 py-3.5 rounded-lg text-base cursor-pointer shadow-[0_8px_0_rgba(90,133,105,0.12)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_0_rgba(90,133,105,0.16)]">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
}


