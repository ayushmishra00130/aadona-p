import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import bg from '../../assets/bg.jpg';

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
    alert('Training request submitted (demo). Check console for data.');
    setFormData({
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
  };

  const inputClasses = "p-4 rounded-lg border border-blue-200 bg-white text-base transition-all focus:outline-none focus:border-emerald-500 placeholder:text-gray-400";

  return (
    <>
      <Navbar />

      {/* Full-page CSR-style background */}
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >

        {/* ✅ Header Section (exactly like CSR/WhistleBlower/Leadership) */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Request Training
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
              Fill out the form below and our training team will contact you to schedule a comprehensive session
            </p>
          </div>
        </div>

        {/* Page content directly on background — NO large white wrapper, only small translucent helper box */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
          <div className="max-w-4xl mx-auto">
            {/* Small helper box (optional, subtle) */}
            <div className="mb-6 bg-white/60 rounded-xl p-4 border border-white/30">
              <p className="text-slate-700">
                Provide accurate contact & participant details so our trainers can prepare the right material.
              </p>
            </div>

            {/* Form placed directly on the page (no big white card) */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">First name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Last name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Enter your last name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Company (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Number of Participants</label>
                  <input
                    type="number"
                    min="1"
                    name="numberOfParticipants"
                    value={formData.numberOfParticipants}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Type quantity"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Street Address <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Street Address"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Street Address Line 2</label>
                <input
                  type="text"
                  name="streetAddress2"
                  value={formData.streetAddress2}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Street Address Line 2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">City <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="City"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Region/State/Province <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="regionStateProvince"
                    value={formData.regionStateProvince}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Region / State / Province"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Postal / Zip code <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="postalZipCode"
                    value={formData.postalZipCode}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Postal / Zip code"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Country <span className="text-red-500">*</span></label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className={inputClasses + " bg-white cursor-pointer"}
                >
                  <option value="">Select Country *</option>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Customer Type</label>
                <div className="flex gap-6 flex-wrap">
                  <label className="flex items-center gap-2 text-sm text-gray-700">
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

                  <label className="flex items-center gap-2 text-sm text-gray-700">
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

                  <label className="flex items-center gap-2 text-sm text-gray-700">
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
                <label className="block text-sm text-gray-700 mb-2">Comment</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows="5"
                  className={inputClasses + " resize-y min-h-28"}
                  placeholder="Any additional information..."
                />
              </div>

              <div className="flex justify-center">
                <button type="submit" className="bg-green-700 text-white px-9 py-3.5 rounded-lg text-base shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-0.5">
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

export default RequestTraining;
