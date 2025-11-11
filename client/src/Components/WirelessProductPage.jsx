import React, { useState } from 'react';
import ProductCard from './ProductCard';
import hero from '../assets/hero6.jpg';


const wirelessProducts = [
  // Indoor Products
  {
    id: 1,
    model: 'APOLLO: ASW-1200',
    category: 'Indoor',
    description: 'Compact indoor access point with Ethernet ports, ideal for small office setups.',
    imageUrl: hero,
    features: ['802.11ac Wave 2', 'Gigabit Ethernet', 'Wall Mountable'],
  },
  {
    id: 2,
    model: 'APOLLO: ASC-1200L V2',
    category: 'Indoor',
    description: 'Square-shaped indoor AP with upgraded firmware and guest portal support.',
    imageUrl: hero,
    features: ['Dual-Band Wi-Fi', 'Guest Portal', 'Real-Time Monitoring'],
  },
  {
    id: 3,
    model: 'APOLLO: ASC-1200L',
    category: 'Indoor',
    description: 'Reliable indoor AP with centralized control and seamless roaming.',
    imageUrl: hero,
    features: ['Centralized Management', 'Seamless Roaming', '802.11ax Support'],
  },
  {
    id: 4,
    model: 'APOLLO: ASC-1200',
    category: 'Indoor',
    description: 'Legacy indoor AP with robust performance for budget deployments.',
    imageUrl: hero,
    features: ['802.11ac Standard', 'Compact Design', 'Easy Setup'],
  },
  {
    id: 5,
    model: 'APOLLO: AXC-1800L',
    category: 'Indoor',
    description: 'Indoor AP with LED indicators and dual-radio support.',
    imageUrl: hero,
    features: ['Dual-Radio', 'LED Status Indicator', 'PoE+ Ready'],
  },
  {
    id: 6,
    model: 'APOLLO: AXC-1200L',
    category: 'Indoor',
    description: 'Entry-level indoor AP with reliable coverage and simple configuration.',
    imageUrl: hero,
    features: ['802.11ac', 'Simple Configuration', 'Wall/Ceiling Mount'],
  },
  {
    id: 7,
    model: 'APOLLO: AXC-3000L',
    category: 'Indoor',
    description: 'Mid-tier indoor AP with enhanced throughput and multi-user support.',
    imageUrl: hero,
    features: ['MU-MIMO', 'High Throughput', 'Secure Access'],
  },
  {
    id: 8,
    model: 'APOLLO: AXC-3600',
    category: 'Indoor',
    description: 'Advanced indoor AP with tri-band support and smart antenna technology.',
    imageUrl: hero,
    features: ['Tri-Band Wi-Fi', 'Smart Antenna', 'Cloud Monitoring'],
  },
  {
    id: 9,
    model: 'APOLLO: AXC-7800',
    category: 'Indoor',
    description: 'Premium circular indoor AP designed for high-density environments.',
    imageUrl: hero,
    features: ['Wi-Fi 6E', 'Circular Form Factor', 'Multi-Gigabit Port'],
  },

  // Outdoor Products
  {
    id: 10,
    model: 'APOLLO: AOS-1200',
    category: 'Outdoor',
    description: 'Vertically mounted outdoor AP with ribbed surface for heat dissipation and durability.',
    imageUrl: hero,
    features: ['IP67 Rated Enclosure', 'High-Gain Antenna Support', 'Ruggedized Design'],
  },
  {
    id: 11,
    model: 'APOLLO: AXO-1800L',
    category: 'Outdoor',
    description: 'Horizontally mounted outdoor AP with ribbed casing and multiple connector ports.',
    imageUrl: hero,
    features: ['Dual-Band Wi-Fi 6', 'Mesh Networking', 'Weatherproof Connectors'],
  },
  {
    id: 12,
    model: 'APOLLO: AXO-3600',
    category: 'Outdoor',
    description: 'High-performance outdoor AP with vertical ribbed design for extended range.',
    imageUrl: hero,
    features: ['Tri-Band Support', 'Beamforming Technology', 'Pole & Wall Mount Options'],
  },
  {
    id: 13,
    model: 'APOLLO: AXO-3000-AOM',
    category: 'Outdoor',
    description: 'Smooth-surfaced outdoor AP with APOLLO branding, optimized for urban deployments.',
    imageUrl: hero,
    features: ['Compact Form Factor', '6 GHz Band Support', 'Advanced Security Features'],
  },

  // Controller Products
  {
    id: 14,
    model: 'APOLLO: AWG-3000',
    category: 'Controller',
    description: 'Compact network controller for small deployments with essential routing and security features.',
    imageUrl: hero,
    features: ['Gigabit Ports', 'Firewall Protection', 'Remote Management'],
  },
  {
    id: 15,
    model: 'APOLLO: AWG-5000',
    category: 'Controller',
    description: 'Mid-range controller with enhanced throughput and multi-AP support.',
    imageUrl: hero,
    features: ['Multi-AP Management', 'Load Balancing', 'Secure VPN'],
  },
  {
    id: 16,
    model: 'APOLLO: AWG-7000',
    category: 'Controller',
    description: 'Advanced controller for enterprise-grade deployments with high-speed switching.',
    imageUrl: hero,
    features: ['10G Uplink', 'QoS Optimization', 'Redundant Power'],
  },
  {
    id: 17,
    model: 'APOLLO: AWG-9000',
    category: 'Controller',
    description: 'High-capacity controller for large networks with clustering and failover support.',
    imageUrl: hero,
    features: ['High-Availability Clustering', 'Multi-WAN Support', 'Real-Time Monitoring'],
  },
  {
    id: 18,
    model: 'APOLLO: AWG-9800',
    category: 'Controller',
    description: 'Flagship controller with maximum throughput and advanced analytics.',
    imageUrl: hero,
    features: ['AI-Powered Analytics', 'Multi-Gigabit Switching', 'Zero-Touch Provisioning'],
  },
  {
    id: 19,
    model: 'APOLLO: AXO-3000-AOM',
    category: 'Controller',
    description: 'AXO-3000-AOM 2x2 MIMO Dual-Radio 802.11ax Outdoor Access Point with centralized control capabilities.',
    imageUrl: hero,
    features: ['2x2 MIMO Dual-Radio', '802.11ax Wi-Fi Standard', 'Outdoor-Ready with Centralized Management'],
  },
  {
    id: 20,
    model: 'APOLLO: ASC-1200L V2',
    category: 'Controller',
    description: 'Dedicated appliance for centralized policy control, monitoring, and seamless firmware management.',
    imageUrl: hero,
    features: ['Manages up to 200 APs', 'Built-in Guest Portal', 'Real-Time Analytics'],
  },
  {
    id: 21,
    model: 'APOLLO: AWG-9000',
    category: 'Controller',
    description: 'Robust central management hub capable of handling large-scale deployments and traffic routing.',
    imageUrl: hero,
    features: ['Multi-WAN Load Balancing', 'Integrated Security Firewall', 'High-Availability Clustering'],
  },
];


const ProductCategoryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? wirelessProducts
      : wirelessProducts.filter((product) => product.category === activeCategory);

  return (
    <>
    <div className="min-h-screen mt-20 bg-gray-50">
      {/* Header & Filters */}
      <div className="bg-white py-12 shadow-md ">
          {/* Added text-center here */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4 border-b-4 border-green-500 inline-block pb-1">
              Wireless Solutions
            </h1>
            {/* Added mx-auto here to center the p element because it has a max-width */}
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the APOLLO Series — high-performance access points and controllers for scalable, secure wireless infrastructure.
                    </p>
          </div>
        </div>
         {/* Filter Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {['All', 'Indoor', 'Outdoor', 'Controller'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-md font-medium transition ${
                  activeCategory === category
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-green-600 border border-green-500 hover:bg-green-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured APOLLO Products
        </h2> */}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCategoryPage;