import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Using a nice shade of dark green for the primary background
const PRIMARY_GREEN = 'bg-green-800'; 
const ACCENT_GREEN = 'text-green-400';
const WHITE_TEXT = 'text-white';
const WHITE_BG = 'bg-white';
const BORDER_COLOR = 'border-green-600';

// --- Icon Components (Inline SVGs) ---
const InstagramIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
);

const FacebookIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
);

const LinkedinIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
    </svg>
);
// --- End Icon Components ---


const Footer = () => {
    // State for managing the subscription success notification
    const [subscriptionMessage, setSubscriptionMessage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        
        setIsSubmitting(true);
        setSubscriptionMessage(null);

        // Mock API call delay
        await new Promise(resolve => setTimeout(resolve, 800)); 

        // In a real application, you would send data to an API here
        setSubscriptionMessage('Thank you for subscribing! Check your email for confirmation.');
        
        // Clear the message after a few seconds
        setTimeout(() => setSubscriptionMessage(null), 5000);
        setIsSubmitting(false);

        // Optionally clear the form input if needed
        e.target.reset();
    };

    const socialLinks = [
        { icon: FacebookIcon, href: "https://www.facebook.com/aadona.communication", name: "Facebook" },
        { icon: InstagramIcon, href: "https://www.instagram.com/aadona.communication", name: "Instagram" },
        { icon: LinkedinIcon, href: "https://www.linkedin.com/company/aadona-communication", name: "LinkedIn" },
    ];

    return (
        <footer className={`w-full mt-auto ${PRIMARY_GREEN} ${WHITE_TEXT} py-12`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    
                    {/* Column 1: AADONA Communication Info & Social Links */}
                    <div className="md:col-span-2">
                        <h4 className="text-2xl font-extrabold mb-4">
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

                        {/* Social Media Links */}
                        <div className="mt-6">
                            <h5 className="text-lg font-semibold mb-3">Connect With Us</h5>
                            <div className="flex space-x-4">
                                {socialLinks.map((link) => (
                                    <a 
                                        key={link.name}
                                        href={link.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={`p-2 rounded-full border border-green-600 ${ACCENT_GREEN} hover:bg-green-700 transition duration-300`}
                                        aria-label={link.name}
                                    >
                                        <link.icon className="w-6 h-6"/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="mt-4 md:mt-0">
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <Link
                              to="/active"
                              className={`transition duration-300 hover:${ACCENT_GREEN}`}
                            >
                              Products
                            </Link>                           
                            <li><a href="#" className={`hover:${ACCENT_GREEN} transition duration-300`}>Partners</a></li>
                            <li><a href="#" className={`hover:${ACCENT_GREEN} transition duration-300`}>Support</a></li>
                            <li><a href="#" className={`hover:${ACCENT_GREEN} transition duration-300`}>About Us</a></li>
                            <li><a href="#" className={`hover:${ACCENT_GREEN} transition duration-300`}>Blog</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Newsletter Subscription */}
                    <div className="mt-4 md:mt-0">
                        <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
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
                                disabled={isSubmitting}
                                className={`w-full p-3 rounded-md font-semibold text-white bg-green-600 hover:bg-green-500 transition duration-300 disabled:bg-green-700 disabled:cursor-not-allowed`}
                            >
                                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                            </button>
                        </form>

                        {/* Subscription Success Message */}
                        {subscriptionMessage && (
                            <div className="mt-4 p-3 rounded-md bg-green-600 text-white text-sm animate-pulse">
                                {subscriptionMessage}
                            </div>
                        )}
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

// Main App component to render the Footer
const App = () => (
    <div className="min-h-screen flex flex-col font-inter">
        {/* Mock content to push the footer down */}
        <header className="p-4 bg-green-700 text-white text-center">Header Placeholder</header>
        <main className="flex-grow p-8 text-gray-800">
            <h1 className="text-3xl font-bold mb-4">Welcome to the AADONA Site Mockup</h1>
            <p className="text-lg">Scroll down to view the responsive footer component.</p>
        </main>
        <Footer />
    </div>
);

export default App;