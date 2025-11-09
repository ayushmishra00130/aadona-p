import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import bg from '../../assets/bg.jpg';

const WhistleBlower = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* Background with same CSR style */}
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* ✅ CSR-style Hero Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Whistle Blower
              </h1>
              <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
                Ensuring Ethics, Integrity & Transparency
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8 mt-16 text-gray-700 leading-relaxed pb-20">
          <p className="mb-6 text-lg">
            As per AADONA top management, the final ruling regarding standards relating to regular internal audit requires that AADONA COMMUNICATION provide a facility for the receipt, retention, and treatment of complaints received regarding accounting, misconducts, ethical, and integrity issues, internal accounting controls, or auditing matters.
            Please feel free to contribute any comments through this interface regarding such accounting matters.
            Your message is encrypted and will be delivered directly to the CEO.
          </p>

          <p className="mb-6 text-lg">
            Understanding and acting upon any issues that exist regarding financial, accounting, and/or audit matters is an essential component of AADONA COMMUNICATION’s ability to take action and ensure the highest levels of ethics, integrity, and transparency to keep systems clean.
          </p>

          <p className="mb-10 text-lg">
            We love our customers. If you have seen any unethical practice or behavior in AADONA by any of our team members or partners related to our business, feel free to drop us a mail through the secure form below or give us a direct call and speak to the CEO during normal business hours.
            We are committed to keeping things clean here.
          </p>

          {/* Button */}
          <div className="text-center">
            <Link to="/whistleButton">
              <button
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
              >
                Whistle Blower Form
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WhistleBlower;
