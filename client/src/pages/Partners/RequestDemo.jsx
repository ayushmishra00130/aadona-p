import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import bg from "../../assets/bg.jpg";

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

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    streetAddress2: "",
    phone: "",
    modelName: "",
    city: "",
    regionStateProvince: "",
    postalZipCode: "",
    country: "",
    customerType: [],
    comment: ""
  });

  const inputClasses =
    "p-3 border border-gray-300 rounded-lg text-sm w-full transition-all font-light bg-white focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(142,182,155,0.08)] focus:outline-none placeholder:text-gray-400";

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "customerType") {
      setFormData((prev) => ({
        ...prev,
        customerType: checked
          ? [...prev.customerType, value]
          : prev.customerType.filter((v) => v !== value),
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Demo request submitted!");
  };

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header SAME AS PROJECT LOCKING */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Request a Demo
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
              Fill out the form and our team will contact you to schedule a personalized demonstration
            </p>
          </div>
        </div>

        {/* PAGE CONTENT SAME HEIGHT AS PROJECT LOCKING */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
          <div className="max-w-6xl mx-auto">

            {/* FORM — SAME STRUCTURE AS PROJECT LOCKING */}
            <form className="space-y-8" onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="firstName"
                  placeholder="First Name *"
                  required
                  className={inputClasses}
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  className={inputClasses}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* EMAIL PHONE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email *"
                  className={inputClasses}
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  name="phone"
                  required
                  placeholder="Phone *"
                  className={inputClasses}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* ADDRESS */}
              <input
                name="streetAddress"
                required
                placeholder="Street Address *"
                className={inputClasses}
                value={formData.streetAddress}
                onChange={handleChange}
              />

              <input
                name="streetAddress2"
                placeholder="Street Address Line 2"
                className={inputClasses}
                value={formData.streetAddress2}
                onChange={handleChange}
              />

              {/* MODEL NAME & CITY */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="modelName"
                  placeholder="Model Name *"
                  required
                  className={inputClasses}
                  value={formData.modelName}
                  onChange={handleChange}
                />
                <input
                  name="city"
                  required
                  placeholder="City *"
                  className={inputClasses}
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              {/* STATE / ZIP */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="regionStateProvince"
                  placeholder="Region / State / Province *"
                  required
                  className={inputClasses}
                  value={formData.regionStateProvince}
                  onChange={handleChange}
                />
                <input
                  name="postalZipCode"
                  placeholder="Postal / Zip Code *"
                  required
                  className={inputClasses}
                  value={formData.postalZipCode}
                  onChange={handleChange}
                />
              </div>

              {/* COUNTRY */}
              <select
                name="country"
                required
                className={inputClasses + " cursor-pointer bg-white"}
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select Country *</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              {/* CUSTOMER TYPE */}
              <div className="space-y-2">
                <label className="block text-sm text-gray-700">
                  Customer Type
                </label>
                <div className="flex gap-6 flex-wrap">
                  {["endCustomer", "siPartner", "distributor"].map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <input
                        type="checkbox"
                        name="customerType"
                        value={type}
                        checked={formData.customerType.includes(type)}
                        onChange={handleChange}
                        className="accent-emerald-500"
                      />
                      {type === "endCustomer"
                        ? "End Customer"
                        : type === "siPartner"
                        ? "SI Partner"
                        : "Distributor"}
                    </label>
                  ))}
                </div>
              </div>

              {/* COMMENT FIELD */}
              <textarea
                name="comment"
                placeholder="Comment Field"
                rows="6"
                className={inputClasses + " resize-y min-h-32"}
                value={formData.comment}
                onChange={handleChange}
              />

              {/* SUBMIT */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-700 text-white text-base py-3.5 px-12 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-px"
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
