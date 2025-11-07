import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const WhistleBlower = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              WHISTLE BLOWER
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8 mt-16 text-gray-700 leading-relaxed">
          <p className="mb-6">
            As per AADONA top management, the final ruling regarding standards relating to regular internal audit requires that AADONA COMMUNICATION provide a facility for the receipt, retention, and treatment of complaints received regarding accounting, misconducts, ethical, and integrity issues, internal accounting controls, or auditing matters. 
            Please feel free to contribute any comments through this interface regarding such accounting matters. 
            Your message is encrypted and will be delivered directly to the CEO.
          </p>

          <p className="mb-6">
            Understanding and acting upon any issues that exist regarding financial, accounting, and/or audit matters is an essential component of AADONA COMMUNICATION’s ability to take action and ensure the highest levels of ethics, integrity, and transparency to keep systems clean.
          </p>

          <p className="mb-10">
            We love our customers. If you have seen any unethical practice or behavior in AADONA by any of our team members or partners related to our business, feel free to drop us a mail through the secure form below or give us a direct call and speak to the CEO during normal business hours. 
            We are committed to keeping things clean here.
          </p>

          {/* Button */}
          <div className="text-center">
            <button
              onClick={() => navigate('/whistleBlowerForm')}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
            >
              Whistle Blower
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WhistleBlower;
