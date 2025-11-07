import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pb-16 mt-20">
        {/* Hero Section */}
        <div className="bg-green-400/10 pt-12 pb-12 shadow-inner mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-green-900 sm:text-6xl">
                  Our Customers
             </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
