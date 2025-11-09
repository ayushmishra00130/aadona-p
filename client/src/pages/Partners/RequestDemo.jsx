import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import bg from '../../assets/bg.jpg';

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

    if (type === 'checkbox' && name === 'customerType') {
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
    alert('Demo request submitted (demo). Check console for data.');
    setFormData({
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
  };

  const inputClasses = "p-3 text-sm border border-gray-300 rounded-lg transition-all font-light bg-white w-full focus:outline-none focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(142,182,155,0.1)] placeholder:text-gray-400 placeholder:font-light";

  return (
    <>
      <Navbar />

      {/* Full background (CSR style) */}
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* CSR-style Hero Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white sm:text-6xl">
              Request a Demo
            </h1>
            <p className="mt-3 text-green-100 text-lg md:text-xl max-w-3xl mx-auto">
              Fill out the form and our team will contact you to schedule a personalized demonstration.
            </p>
          </div>
        </div>

        {/* Page content placed directly on background (NO large white wrapper) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
          <div className="max-w-4xl mx-auto">
            {/* Small subtle white intro box for readability */}
            <div className="mb-8 bg-white/60 p-4 rounded-xl border border-white/30">
              <p className="text-slate-700">
                Provide accurate contact details and preferred model. Inputs stay white for legibility on the background.
              </p>
            </div>

            {/* Form (directly on background) */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">First name <span className="text-red-500">*</span></label>
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

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Last name</label>
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
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
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

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone <span className="text-red-500">*</span></label>
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

              <div>
                <label className="block text-sm text-gray-700 mb-2">Street Address <span className="text-red-500">*</span></label>
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

              <div>
                <label className="block text-sm text-gray-700 mb-2">Street Address Line 2</label>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Model Name <span className="text-red-500">*</span></label>
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

                <div>
                  <label className="block text-sm text-gray-700 mb-2">City <span className="text-red-500">*</span></label>
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
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Region/State/Province <span className="text-red-500">*</span></label>
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

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Postal / Zip code <span className="text-red-500">*</span></label>
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

              <div>
                <label className="block text-sm text-gray-700 mb-2">Country <span className="text-red-500">*</span></label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className={inputClasses + " cursor-pointer bg-white"}
                >
                  <option value="">Select Country *</option>
                  {COUNTRIES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Customer Type</label>
                <div className="flex gap-6 flex-wrap">
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="customerType"
                      value="endCustomer"
                      checked={formData.customerType.includes('endCustomer')}
                      onChange={handleChange}
                      className="accent-emerald-500"
                    />
                    End Customer
                  </label>

                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="customerType"
                      value="siPartner"
                      checked={formData.customerType.includes('siPartner')}
                      onChange={handleChange}
                      className="accent-emerald-500"
                    />
                    SI Partner
                  </label>

                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="customerType"
                      value="distributor"
                      checked={formData.customerType.includes('distributor')}
                      onChange={handleChange}
                      className="accent-emerald-500"
                    />
                    Distributor
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Comment Field</label>
                <textarea
                  id="comment"
                  name="comment"
                  placeholder="Comment Field"
                  rows="5"
                  value={formData.comment}
                  onChange={handleChange}
                  className={inputClasses + " resize-y min-h-32"}
                />
              </div>

              <div className="flex justify-center">
                <button type="submit" className="bg-green-700 text-white text-base font-normal py-3.5 px-12 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-px">
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
};

export default RequestDemo;
