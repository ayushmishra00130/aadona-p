import React, { useState,useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import bg from "../../assets/bg.jpg";

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

  const inputClasses =
    "p-3 border border-gray-300 rounded-lg text-sm w-full transition-all font-light bg-white focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(142,182,155,0.08)] focus:outline-none placeholder:text-gray-400";

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
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

        {/* ✅ Header Section (exactly like CSR/WhistleBlower/Leadership) */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Project Locking
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
              Submit project details to lock inventory / create quotations — our team will contact you
            </p>
          </div>
        </div>

        {/* Page content directly on background (NO big white wrapper) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
          <div className="max-w-6xl mx-auto">


            {/* FORM — placed on background, no large card */}
            <form className="space-y-6" onSubmit={handleSubmit}>
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

              <input
                name="streetAddress"
                value={form.streetAddress}
                onChange={handleChange}
                placeholder="Street Address *"
                required
                className={inputClasses}
              />

              <input
                name="streetAddress2"
                value={form.streetAddress2}
                onChange={handleChange}
                placeholder="Street Address 2"
                className={inputClasses}
              />

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

              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                required
                className={inputClasses + " cursor-pointer bg-white"}
              >
                <option value="">Select Country *</option>
                {COUNTRIES.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company"
                className={inputClasses}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select
                  name="modelName"
                  value={form.modelName}
                  onChange={handleChange}
                  required
                  className={inputClasses + " cursor-pointer bg-white"}
                >
                  <option value="">Select Model *</option>
                  {MODEL_NAMES.map(m => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
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

              <select
                name="aadonaSales"
                value={form.aadonaSales}
                onChange={handleChange}
                required
                className={inputClasses + " cursor-pointer bg-white"}
              >
                <option value="">Select AADONA Sales *</option>
                {AADONA_SALES_REPS.map(rep => (
                  <option key={rep} value={rep}>
                    {rep}
                  </option>
                ))}
              </select>

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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <input
                  name="expectedClosure"
                  type="date"
                  value={form.expectedClosure}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
                <label className="flex items-center gap-3 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="siPartner"
                    checked={form.siPartner}
                    onChange={handleChange}
                    className="accent-emerald-500"
                  />
                  SI Partner Involved
                </label>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-700 text-white text-sm font-normal py-3 px-8 rounded-lg cursor-pointer transition-all shadow-sm hover:shadow-md hover:-translate-y-px"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
