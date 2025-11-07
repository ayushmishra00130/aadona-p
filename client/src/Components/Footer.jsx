import React from 'react';

// Using a nice shade of dark green for the primary background
const PRIMARY_GREEN = 'bg-green-800'; 
const ACCENT_GREEN = 'text-green-400';
const WHITE_TEXT = 'text-white';
const WHITE_BG = 'bg-white';
const BORDER_COLOR = 'border-green-600';

const Footer = () => {

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Logic to handle newsletter subscription (e.g., send data to an API)
    alert('Thank you for subscribing!'); 
  };

  return (
    <footer className={`w-full mt-auto bg-green-800 text-white py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1: AADONA Communication Info */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold mb-4">
                <span className={ACCENT_GREEN}>AADONA</span> Communication Pvt Ltd.
            </h4>
            <div className="space-y-3 text-sm">
                <p>
                    <strong>Headquarters:</strong>
                    <br />
                    1st Floor, Phoenix Tech Tower, Plot No. 14/46, IDA – Uppal, Hyderabad, Telangana 500039
                </p>
                <p>
                    <strong>PHONE:</strong> <a href="tel:18002026599" className={`hover:${ACCENT_GREEN} transition duration-300`}>1800-202-6599</a>
                </p>
                <p>
                    <strong>EMAIL:</strong> <a href="mailto:contact@aadona.com" className={`hover:${ACCENT_GREEN} transition duration-300`}>contact@aadona.com</a>
                </p>
                <p>
                    <strong>BUSINESS HOURS:</strong>
                    <br />
                    Monday to Friday: 10:30 AM - 06:30 PM
                </p>
            </div>
          </div>

          {/* Column 2: Quick Links (Keeping this for structure) */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className={`hover:${ACCENT_GREEN} transition duration-300`}>About Us</a></li>
              <li><a href="#" className={`hover:${ACCENT_GREEN} transition duration-300`}>Services</a></li>
              <li><a href="#" className={`hover:${ACCENT_GREEN} transition duration-300`}>Privacy Policy</a></li>
              <li><a href="#" className={`hover:${ACCENT_GREEN} transition duration-300`}>Sitemap</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter Subscription (News Latter) */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-4">News Letter</h4>
            <p className="text-sm mb-4">Subscribe for the latest updates and offers.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full p-3 rounded-md ${WHITE_BG} text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400`}
                required
              />
              <button
                type="submit"
                className={`w-full p-3 rounded-md font-semibold ${ACCENT_GREEN} border border-green-400 hover:bg-green-700 transition duration-300`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Horizontal Rule Separator */}
        <div className={`mt-10 pt-6 border-t ${BORDER_COLOR}`}>
             {/* Copyright Strip */}
            <div className="text-center text-sm">
                <p>&copy; {new Date().getFullYear()} AADONA Communication Pvt Ltd. All rights reserved.</p>
                <p className={`mt-1 ${ACCENT_GREEN}`}>Designed and developed for a cleaner look.</p>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;