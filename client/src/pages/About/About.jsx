import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
              Building India’s premium networking technology brand
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-gray-700">
          <p>
            AADONA was founded in 2018 under the Start-up India Initiative by three passionate technology enthusiasts who believe India has great potential and must have a premium networking technology brand of its own. AADONA is registered under the Department of Industrial Policy and Promotion, Govt. of India, MSME, Udyam Akanksha, GeM Market Place and is ISO9001, ISO-10002, ISO-14001, ISO-27001 certified with a registered trademark.
          </p>
          <p>
            Until now, most IT infrastructure projects used popular MNC brands or cheap imports. At AADONA, we are determined to change that. We work hard to create an Indian brand delivering smart and cost-efficient solutions for IT infrastructure requirements of SMBs and Enterprises. We are an Indian MNC in the making.
          </p>
          <p>
            Our core team consists of domain experts with years of national and international experience in some of the world’s best institutions. We currently have a PAN India presence and are consistently growing. Inspired by Start-up India and Make in India, we believe an Indian IT brand can unlock value and drive business growth.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
