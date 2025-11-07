import React from 'react';
import hero from '../assets/hero1.png'; // Local image used for all cards
import switches from '../assets/switches.png'
import industrial from '../assets/industrial.png'
import wireless from '../assets/wireless.png'
import cloud from '../assets/cloud.png'
import firewall from '../assets/firewall.png'
import fiber from '../assets/fiber.png'

// Product data
const products = [
  {
    id: 1,
    title: "Network Switches",
    description: "Reliable and scalable switching solutions for SMB to Enterprise networks.",
    imageUrl: switches,
  },
  {
    id: 2,
    title: "Industrial & Rugged Switches",
    description: "Durable, high-performance switches built for critical industrial environments.",
    imageUrl: industrial,
  },
  {
    id: 3,
    title: "Wireless Solutions",
    description: "Secure and fast wireless networking for enterprises and smart cities.",
    imageUrl: wireless,
  },
  {
    id: 4,
    title: "Cloud Management Platform",
    description: "Centralized management and monitoring for all your network devices globally.",
    imageUrl: cloud,
  },
  {
    id: 5,
    title: "Security & Firewall Appliances",
    description: "Next-generation security to protect your network from advanced threats and intrusions.",
    imageUrl: firewall,
  },
  {
    id: 6,
    title: "Fiber Optic Modules",
    description: "High-speed and reliable fiber transceivers for long-distance data transmission.",
    imageUrl: fiber,
  },
];

// Inline SVG for arrow icon
const RightArrowIcon = () => (
  <svg
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// Product card component
const ProductCard = ({ product }) => {
  const { title, description, imageUrl } = product;

  return (
    
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition duration-300 hover:scale-[1.02]"
        />
      </div>
      <div className="p-6 flex flex-col justify-between grow">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="text-green-600 hover:text-green-700 transition duration-150 text-sm font-semibold flex items-center group"
            onClick={(e) => e.preventDefault()}
          >
            {/* Learn Explore Product
            <RightArrowIcon /> */}
          </a>
        </div>
      </div>
    </div>
  );
};

// Main app component
const App = () => {
  return (
    <div className="min-h-screen  px-4 sm:px-6 lg:px-8 font-sans mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-green-700 sm:text-4xl inline-block pb-1">
            Our Product Portfolio
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;