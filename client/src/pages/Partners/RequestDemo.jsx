import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    streetAddress2: '',
    phone: '',
    modelName: '',
    city: '',
    regionStateProvince: '',
    postalZipCode: '',
    country: '',
    customerType: [],
    comment: ''
  });

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        customerType: checked
          ? [...prev.customerType, value]
          : prev.customerType.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputClasses = "p-3 text-sm border border-gray-300 rounded-lg transition-all font-light bg-white w-full focus:outline-none focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(142,182,155,0.1)] placeholder:text-gray-400 placeholder:font-light";

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white mt-20">
       <div className="bg-green-400/10 pt-12 pb-12 shadow-inner mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-green-900 sm:text-6xl">
            Request a Demo
            </h1>
        </div>
    </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto mt-10 mb-16 px-5">
        <div className="relative bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-12">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-t-3xl"></div>
          
          <h2 className="text-3xl text-emerald-700 mb-3 font-normal text-center">Request a Demo</h2>
          <p className="text-center text-gray-600 text-base mb-10 leading-relaxed font-light">
            Fill out the form below and our team will contact you to schedule a personalized demonstration.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Personal Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-normal text-gray-600 mb-2 flex items-center">
                  First name <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm font-normal text-gray-600 mb-2">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-normal text-gray-600 mb-2 flex items-center">
                  Email <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-normal text-gray-600 mb-2 flex items-center">
                  Phone <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Address Section */}
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col">
                <label htmlFor="streetAddress" className="text-sm font-normal text-gray-600 mb-2 flex items-center">
                  Street Address <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  placeholder="Street Address"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col">
                <label htmlFor="streetAddress2" className="text-sm font-normal text-gray-600 mb-2">
                  Street Address Line 2
                </label>
                <input
                  type="text"
                  id="streetAddress2"
                  name="streetAddress2"
                  placeholder="Street Address Line 2"
                  value={formData.streetAddress2}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Company and Location Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="modelName" className="text-sm font-normal text-gray-600 mb-2 flex items-center">
                  Model Name <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="modelName"
                  name="modelName"
                  placeholder="Model Name"
                  value={formData.modelName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="text-sm font-normal text-gray-600 mb-2 flex items-center">
                  City <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="regionStateProvince" className="text-sm font-normal text-gray-600 mb-2 flex items-center">
                  Region/State/Province <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="regionStateProvince"
                  name="regionStateProvince"
                  placeholder="Region/State/Province"
                  value={formData.regionStateProvince}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="postalZipCode" className="text-sm font-normal text-gray-600 mb-2 flex items-center">
                  Postal / Zip code <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="postalZipCode"
                  name="postalZipCode"
                  placeholder="Postal / Zip code"
                  value={formData.postalZipCode}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="country" className="text-sm font-normal text-gray-600 mb-2 flex items-center">
                  Country <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className={inputClasses + " cursor-pointer text-gray-400"}
                >
                  <option value="">Select Country *</option>
                  {COUNTRIES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Customer Type Section */}
            <div className="flex flex-col">
              <div className="flex gap-6 flex-wrap py-4">
                <label className="flex items-center text-sm text-gray-600 cursor-pointer transition-colors hover:text-emerald-500 font-light">
                  <input
                    type="checkbox"
                    name="customerType"
                    value="endCustomer"
                    checked={formData.customerType.includes('endCustomer')}
                    onChange={handleChange}
                    className="w-4.5 h-4.5 mr-2.5 cursor-pointer accent-emerald-500"
                  />
                  <span className="select-none">End Customer</span>
                </label>

                <label className="flex items-center text-sm text-gray-600 cursor-pointer transition-colors hover:text-emerald-500 font-light">
                  <input
                    type="checkbox"
                    name="customerType"
                    value="siPartner"
                    checked={formData.customerType.includes('siPartner')}
                    onChange={handleChange}
                    className="w-4.5 h-4.5 mr-2.5 cursor-pointer accent-emerald-500"
                  />
                  <span className="select-none">SI Partner</span>
                </label>

                <label className="flex items-center text-sm text-gray-600 cursor-pointer transition-colors hover:text-emerald-500 font-light">
                  <input
                    type="checkbox"
                    name="customerType"
                    value="distributor"
                    checked={formData.customerType.includes('distributor')}
                    onChange={handleChange}
                    className="w-4.5 h-4.5 mr-2.5 cursor-pointer accent-emerald-500"
                  />
                  <span className="select-none">Distributor</span>
                </label>
              </div>
            </div>

            {/* Comment Section */}
            <div className="flex flex-col">
              <label htmlFor="comment" className="text-sm font-normal text-gray-600 mb-2">Comment Field</label>
              <textarea
                id="comment"
                name="comment"
                placeholder="Comment Field"
                rows="5"
                value={formData.comment}
                onChange={handleChange}
                className={inputClasses + " resize-y min-h-32"}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-5 flex justify-center">
              <button type="submit" className="bg-green-700 text-white text-base font-normal py-3.5 px-12 border-none rounded-lg cursor-pointer transition-all shadow-[0_4px_12px_rgba(142,182,155,0.3)] tracking-wide hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(142,182,155,0.4)] hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-700 active:translate-y-0">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default RequestDemo;

