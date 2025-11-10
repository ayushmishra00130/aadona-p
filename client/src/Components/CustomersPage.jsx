import React, { useEffect } from 'react'; // 1. Import useEffect
import hero from '../assets/hero6.jpg'
import Navbar from './Navbar';
import Footer from './Footer';
import bg from '../assets/bg.jpg'

// Array 1: 20 images for Government Companies
const governmentImages = [
  hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,
];

// Array 2: 20 images for Private Companies
const privateImages = [
    hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,hero,

];

// CustomerPage Component
const CustomerPage = () => {
  
  // 2. Add useEffect to scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); // The empty array [] ensures this runs only once after the initial render

  // Sub-component for a single logo item
  const LogoGridItem = ({ imageSrc }) => (
    // Only hover:shadow-xl and hover:scale-[1.05] are left for visual feedback
    <div className="flex items-center justify-center h-32 w-32 p-2 bg-white border border-green-600 rounded-lg shadow-md transition duration-300 hover:shadow-xl hover:scale-[1.05]">
      <img
        src={imageSrc}
        alt="Customer Logo"
        // Initial opacity is NOT set here. The image starts at full opacity, 
        // as the class name has been changed to remove the default opacity.
        className="max-h-full max-w-full object-contain hover:opacity-100 transition duration-300"
      />
    </div>
  );

  return (
    <>
    <Navbar/>

      {/* Main Heading Section */}
      <div className="bg-green-400/10 pt-12 pb-12 shadow-inner mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-green-900 sm:text-6xl">
              Our Customers
            </h1>
        </div>
      </div>

     <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >    <div className="min-h-screen">
      {/* --- */}

      {/* Government Companies Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center  p-4 mb-10  bg-white text-green-600  rounded-lg shadow-lg">
          Government Companies
        </h2>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {governmentImages.map((img, index) => (
            <LogoGridItem key={`gov-${index}`} imageSrc={img} />
          ))}
        </div>
      </section>

      {/* Separator */}

      {/* Private Companies Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center bg-white p-4 mb-10 text-green-600 rounded-lg  shadow-lg">
           Private Companies
        </h2>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {privateImages.map((img, index) => (
            <LogoGridItem key={`private-${index}`} imageSrc={img} />
          ))}
        </div>
      </section>
    </div>
    </div>
    <Footer/>
     </>
  );
};

export default CustomerPage;