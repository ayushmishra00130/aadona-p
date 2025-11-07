import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const MODEL_NAMES = [
  "DMS-8GP-2F",
  "ODR-16F-16",
  "ODR-8F-14",
  "ODR-4F-14",
  "ONVR-16F1-6",
  "ONVR-08F1-6",
  "OFL-3T-A",
  "OHD-2T-A",
  "OHD-2B-A"
];

const AADONA_SALES_REPS = [
  "Senthil VP Kumar",
  "Subroto Karmoka",
  "Govind Madhav",
  "Pinaki Chatterjee",
  "Rashi Kher",
  "Jyotirmoy Paul"
];

const COUNTRIES = [
  "Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica",
  "Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
  "Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina",
  "Botswana","Brazil","Brunei","Bulgaria","Cambodia","Cameroon","Canada","Chile","China","Colombia","Costa Rica",
  "Croatia","Cuba","Cyprus","Czech Republic","Denmark","Dominican Republic","Ecuador","Egypt","El Salvador","Estonia",
  "Ethiopia","Finland","France","Germany","Ghana","Greece","Greenland","Guatemala","Hong Kong","Hungary","Iceland",
  "India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait",
  "Latvia","Lebanon","Lesotho","Liberia","Libya","Lithuania","Luxembourg","Madagascar","Malaysia","Maldives","Mali",
  "Malta","Mexico","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands",
  "New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Panama","Paraguay","Peru",
  "Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Seychelles",
  "Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","Sudan","Suriname","Sweden",
  "Switzerland","Syria","Taiwan","Tanzania","Thailand","Togo","Trinidad and Tobago","Tunisia","Turkey","Uganda",
  "Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam",
  "Yemen","Zambia","Zimbabwe"
];

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  streetAddress: "",
  streetAddress2: "",
  city: "",
  regionState: "",
  postalZip: "",
  country: "",
  company: "",
  modelName: "",
  quantity: "",
  aadonaSales: "",
  projectName: "",
  projectTenderName: "",
  siPartner: false,
  endCustomerContact: "",
  endCustomerName: "",
  expectedClosure: ""
};

export default function ProjectLocking() {
  const [form, setForm] = useState(emptyForm);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Form submitted! Check console for details.");
    setForm(emptyForm);
  };

  const inputClasses = "p-3 border border-gray-300 rounded-lg text-sm w-full transition-all font-light bg-white focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(142,182,155,0.1)] focus:outline-none placeholder:text-gray-400 placeholder:font-light";

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white pb-16 mt-20">
      {/* Hero Section */}
   <div className="bg-green-400/10 pt-12 pb-12 shadow-inner mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-green-900 sm:text-6xl">
                Project Locking
            </h1>
        </div>
    </div>

      {/* Form Section */}
      <section className="flex justify-center mt-10 max-w-6xl mx-auto my-0 px-5">
        <div className="relative bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full max-w-6xl p-12">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-t-3xl"></div>
          
          <h2 className="text-3xl mb-5 text-center text-emerald-700 font-normal">Project Locking Form</h2>
          
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Row 1: First Name, Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                name="firstName" 
                value={form.firstName} 
                onChange={handleChange} 
                placeholder="First Name *" 
                required 
                className={inputClasses}
              />
              <input 
                name="lastName" 
                value={form.lastName} 
                onChange={handleChange} 
                placeholder="Last Name *" 
                required 
                className={inputClasses}
              />
            </div>

            {/* Row 2: Email, Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                name="email" 
                type="email" 
                value={form.email} 
                onChange={handleChange} 
                placeholder="Email *" 
                required 
                className={inputClasses}
              />
              <input 
                name="phone" 
                type="tel" 
                value={form.phone} 
                onChange={handleChange} 
                placeholder="Phone *" 
                required 
                className={inputClasses}
              />
            </div>

            {/* Street Address */}
            <input 
              name="streetAddress" 
              value={form.streetAddress} 
              onChange={handleChange} 
              placeholder="Street Address *" 
              required 
              className={inputClasses}
            />
            
            {/* Street Address 2 */}
            <input 
              name="streetAddress2" 
              value={form.streetAddress2} 
              onChange={handleChange} 
              placeholder="Street Address 2" 
              className={inputClasses}
            />

            {/* Row 3: City, Region/State, Postal Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <input 
                name="city" 
                value={form.city} 
                onChange={handleChange} 
                placeholder="City *" 
                required 
                className={inputClasses}
              />
              <input 
                name="regionState" 
                value={form.regionState} 
                onChange={handleChange} 
                placeholder="State / Region *" 
                required 
                className={inputClasses}
              />
              <input 
                name="postalZip" 
                value={form.postalZip} 
                onChange={handleChange} 
                placeholder="Postal Code *" 
                required 
                className={inputClasses}
              />
            </div>

            {/* Country */}
            <select 
              name="country" 
              value={form.country} 
              onChange={handleChange} 
              required 
              className={inputClasses + " cursor-pointer"}
            >
              <option value="">Select Country *</option>
              {COUNTRIES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Company */}
            <input 
              name="company" 
              value={form.company} 
              onChange={handleChange} 
              placeholder="Company" 
              className={inputClasses}
            />

            {/* Row 4: Model Name, Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select 
                name="modelName" 
                value={form.modelName} 
                onChange={handleChange} 
                required 
                className={inputClasses + " cursor-pointer"}
              >
                <option value="">Select Model *</option>
                {MODEL_NAMES.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
              <input 
                name="quantity" 
                type="number" 
                min="1" 
                value={form.quantity} 
                onChange={handleChange} 
                placeholder="Quantity *" 
                required 
                className={inputClasses}
              />
            </div>

            {/* Aadona Sales */}
            <select 
              name="aadonaSales" 
              value={form.aadonaSales} 
              onChange={handleChange} 
              required 
              className={inputClasses + " cursor-pointer"}
            >
              <option value="">Select Aadona Sales *</option>
              {AADONA_SALES_REPS.map(rep => <option key={rep} value={rep}>{rep}</option>)}
            </select>

            {/* Row 5: Project Name, Project/Tender Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                name="projectName" 
                value={form.projectName} 
                onChange={handleChange} 
                placeholder="Project Name *" 
                required 
                className={inputClasses}
              />
              <input 
                name="projectTenderName" 
                value={form.projectTenderName} 
                onChange={handleChange} 
                placeholder="Project / Tender Name *" 
                required 
                className={inputClasses}
              />
            </div>

            {/* Row 6: End Customer Name, End Customer Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                name="endCustomerName" 
                value={form.endCustomerName} 
                onChange={handleChange} 
                placeholder="End Customer Name *" 
                required 
                className={inputClasses}
              />
              <input 
                name="endCustomerContact" 
                value={form.endCustomerContact} 
                onChange={handleChange} 
                placeholder="End Customer Contact *" 
                required 
                className={inputClasses}
              />
            </div>

            {/* Row 7: Expected Closure Date, SI Partner Checkbox */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                name="expectedClosure" 
                type="date" 
                value={form.expectedClosure} 
                onChange={handleChange} 
                required 
                className={inputClasses}
              />
              <label className="flex items-start justify-start gap-2.5 font-light text-gray-600 text-sm w-fit">
                <input 
                  type="checkbox" 
                  name="siPartner" 
                  checked={form.siPartner} 
                  onChange={handleChange} 
                  className="accent-emerald-500 w-4.5 h-4.5 cursor-pointer mt-0.5"
                />
                SI Partner Involved
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="bg-green-700 text-white text-sm font-normal py-3 px-8 border-none rounded-lg cursor-pointer transition-all shadow-[0_2px_8px_rgba(142,182,155,0.25)] tracking-wide self-center mt-5 hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(142,182,155,0.35)] hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-700 active:translate-y-0"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}



