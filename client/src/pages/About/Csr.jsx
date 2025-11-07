import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

const Csr = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Corporate Social Responsibility
              </h1>
              <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
                Supporting Our Heroes: AADONA's Commitment to Social Responsibility
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main Text Content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="prose prose-lg">
                <p className="text-lg leading-relaxed text-gray-700">
                  At AADONA, we hold a deep-seated belief in giving back to our nation and society. 
                  Recognizing the immense sacrifices and hardships endured by our Army Men, we pledge 
                  to support the families of fallen soldiers through "Bharat Ke Veer."
                </p>

                <div className="bg-white rounded-lg shadow-sm p-6 my-8 border-l-4 border-green-600">
                  <p className="text-lg font-medium text-gray-900">
                    "Bharat Ke Veer" provides a platform for ordinary citizens to contribute to the 
                    families of bravehearts who have sacrificed their lives defending our borders. 
                    We urge you to join us in this noble cause, a small gesture of gratitude towards 
                    our Defence Forces.
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-700">
                  Our commitment extends to directly contributing a portion of our net income to the 
                  Indian Army Veterans' fund. Please note that AADONA does not handle fund collections; 
                  rather, we allocate profits towards supporting our veterans.
                </p>

                <div className="mt-8 bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">
                    Make a Difference Today
                  </h3>
                  <p className="text-gray-700">
                    Visit the Bharat Ke Veer website at{' '}
                    <a 
                      href="https://bharatkeveer.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-700 hover:text-green-900 font-medium"
                    >
                      bharatkeveer.gov.in
                    </a>
                    {' '}to make your contribution today. Together, let's honor our heroes and ensure 
                    their families receive the support they deserve.
                  </p>
                </div>
              </div>
            </div>

            {/* Side Card */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Our Impact
                </h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <p className="text-3xl font-bold text-green-700">100%</p>
                    <p className="text-sm text-gray-600">Commitment to Supporting Veterans</p>
                  </div>
                  <div className="border-b pb-4">
                    <p className="text-sm text-gray-600">Join AADONA in making a difference</p>
                    <Link
                      to="/contactus"
                      className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Csr;