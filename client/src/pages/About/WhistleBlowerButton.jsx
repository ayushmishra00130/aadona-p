import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const WhistleBlowerButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-5 mb-8">
            <h2 className="text-3xl font-semibold text-green-800">Whistle Blower Form</h2>
            <button
              onClick={() => navigate(-1)}
              className="text-gray-500 hover:text-green-600 transition"
            >
              ← Back
            </button>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Product Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Details Of Your Product
              </label>
              <input
                type="text"
                placeholder="Enter product details"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Serial Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Serial Number
              </label>
              <input
                type="text"
                placeholder="Enter serial number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Numbers */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Numbers
              </label>
              <input
                type="text"
                placeholder="Enter relevant numbers"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Invoice Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Invoice
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-green-500">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    Upload supported file (Max 15MB)
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WhistleBlowerButton;
