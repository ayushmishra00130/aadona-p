import React from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';

const PRIMARY_GREEN = 'bg-green-800';
const ACCENT_GREEN = 'text-green-400';
const WHITE_TEXT = 'text-white';
const WHITE_BG = 'bg-white';
const BORDER_COLOR = 'border-green-600';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <footer className={`w-full mt-auto ${PRIMARY_GREEN} ${WHITE_TEXT} py-12`}>
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
                <strong>PHONE:</strong>{' '}
                <a href="tel:18002026599" className={`hover:${ACCENT_GREEN} transition duration-300`}>
                  1800-202-6599
                </a>
              </p>
              <p>
                <strong>EMAIL:</strong>{' '}
                <a href="mailto:contact@aadona.com" className={`hover:${ACCENT_GREEN} transition duration-300`}>
                  contact@aadona.com
                </a>
              </p>
              <p>
                <strong>BUSINESS HOURS:</strong>
                <br />
                Monday to Friday: 10:30 AM - 06:30 PM
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className={`hover:${ACCENT_GREEN} transition duration-300`}>About Us</Link></li>
              <li><Link to="/services" className={`hover:${ACCENT_GREEN} transition duration-300`}>Services</Link></li>
              <li><Link to="/privacy-policy" className={`hover:${ACCENT_GREEN} transition duration-300`}>Privacy Policy</Link></li>
              <li><Link to="/sitemap" className={`hover:${ACCENT_GREEN} transition duration-300`}>Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 3: Newsletter + Social Media */}
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

            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-6 items-center">
              <Link to="https://www.linkedin.com/company/aadona/" className="transition duration-300 hover:scale-110">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              </Link>
              <Link to="https://www.facebook.com/share/1ADx5DXXHC/" className="transition duration-300 hover:scale-110">
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </Link>
              <Link to="https://www.instagram.com/aadonacommunication?igsh=MTEweWJnb3Axc2RmOA==" className="transition duration-300 hover:scale-110">
                <img src={insta} alt="Instagram" className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Horizontal Rule Separator */}
        <div className={`mt-10 pt-6 border-t ${BORDER_COLOR}`}>
          <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} AADONA Communication Pvt Ltd. All rights reserved.</p>
            {/* <p className={`mt-1 ${ACCENT_GREEN}`}>Designed and developed for a cleaner look.</p> */}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;