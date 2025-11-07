import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const RequestTraining = () => {
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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    streetAddress2: '',
    phone: '',
    numberOfParticipants: '',
    city: '',
    regionStateProvince: '',
    company: '',
    postalZipCode: '',
    country: '',
    customerType: [],
    comment: ''
  });

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

  const inputClasses = "p-4 rounded-lg border border-blue-200 bg-white text-base transition-all shadow-[6px_6px_0_rgba(81,131,204,0.08)] focus:outline-none focus:border-emerald-500 focus:shadow-[0_6px_0_rgba(138,182,150,0.12),0_0_0_3px_rgba(142,182,155,0.06)] text-gray-800 w-full placeholder:text-gray-400 placeholder:font-light";

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white pb-16">
      {/* Hero Section */}

      <div className="bg-green-400/10 pt-12 pb-12 shadow-inner mt-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-bold tracking-tight text-green-900 sm:text-6xl">
               Request Training
            </h1>
            <p className="mt-4 text-xl text-green-600">
            Fill out the form below and our training team will contact you to schedule a comprehensive training session for your team.
            </p>
        </div>
    </div>
      {/* Content Section */}
      <main className="flex justify-center mt-10 px-5 pb-10">
        <div className="relative bg-white w-full max-w-6xl rounded-3xl p-12 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-t-3xl"></div>
          
          <h2 className="text-3xl text-emerald-700 text-center mb-6 font-normal">Request Training</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Row 1: First name, Last name, Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Row 2: Phone, Company, Number of Participants */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Number of Participants</label>
                <input
                  type="text"
                  name="numberOfParticipants"
                  placeholder="Type Quantity"
                  value={formData.numberOfParticipants}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Row 3: Street Address (full width) */}
            <div className="grid grid-cols-1 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  placeholder="Street Address"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Row 4: Street Address Line 2 (full width) */}
            <div className="grid grid-cols-1 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">Street Address Line 2</label>
                <input
                  type="text"
                  name="streetAddress2"
                  placeholder="Street Address Line 2"
                  value={formData.streetAddress2}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Row 5: City, Region/State/Province, Postal/Zip code */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">
                  Region/State/Province <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="regionStateProvince"
                  placeholder="Region/State/Province"
                  value={formData.regionStateProvince}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">
                  Postal / Zip code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="postalZipCode"
                  placeholder="Postal / Zip code"
                  value={formData.postalZipCode}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Row 6: Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-normal">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className={inputClasses + " cursor-pointer"}
                >
                  <option value="">Select Country *</option>
                  {COUNTRIES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Checkbox Section */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-3 block font-normal">Choose Any</label>
              <div className="flex gap-6 flex-wrap">
                <label className="flex items-center gap-2.5 font-light text-gray-600 text-sm cursor-pointer hover:text-emerald-500">
                  <input
                    type="checkbox"
                    name="customerType"
                    value="endCustomer"
                    checked={formData.customerType.includes('endCustomer')}
                    onChange={handleChange}
                    className="accent-emerald-500 w-4.5 h-4.5 cursor-pointer"
                  />
                  <span>End Customer</span>
                </label>

                <label className="flex items-center gap-2.5 font-light text-gray-600 text-sm cursor-pointer hover:text-emerald-500">
                  <input
                    type="checkbox"
                    name="customerType"
                    value="siPartner"
                    checked={formData.customerType.includes('siPartner')}
                    onChange={handleChange}
                    className="accent-emerald-500 w-4.5 h-4.5 cursor-pointer"
                  />
                  <span>SI Partner</span>
                </label>

                <label className="flex items-center gap-2.5 font-light text-gray-600 text-sm cursor-pointer hover:text-emerald-500">
                  <input
                    type="checkbox"
                    name="customerType"
                    value="distributor"
                    checked={formData.customerType.includes('distributor')}
                    onChange={handleChange}
                    className="accent-emerald-500 w-4.5 h-4.5 cursor-pointer"
                  />
                  <span>Distributor</span>
                </label>
              </div>
            </div>

            {/* Comment Field */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2 font-normal">Comment Field</label>
              <textarea
                name="comment"
                placeholder="Add comment"
                rows="5"
                value={formData.comment}
                onChange={handleChange}
                className={inputClasses + " resize-y min-h-28"}
              ></textarea>
            </div>

            {/* Submit Button */}
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
};

export default RequestTraining;

