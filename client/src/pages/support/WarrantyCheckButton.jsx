import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const WarrantyCheckButton = () => {
  const [fileName, setFileName] = useState("Choose file");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* SAME banner as Contact Us */}
      <section className="mt-16 bg-green-50 shadow-inner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800">
            Enter Details Of Your Product
          </h1>
          <p className="mt-3 text-green-600 text-lg md:text-xl">
            Please provide serial number & invoice to check warranty status.
          </p>
        </div>
      </section>

      {/* FORM CARD WRAPPER */}
      <div className="max-w-4xl mx-auto px-4 mt-10 pb-12">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-200
        hover:shadow-2xl hover:border-green-400 transition-all duration-500">

          {/* Serial Number */}
          <label className="text-green-700 font-semibold">Enter Serial Number</label>
          <input
            type="text"
            placeholder="Enter numbers"
            className="w-full mt-2 mb-6 border border-green-300 rounded-xl
            focus:border-green-500 focus:ring-2 focus:ring-green-300 outline-none
            px-4 py-3 text-lg transition duration-300"
          />

          {/* Invoice Upload */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-green-700 font-semibold">
                Upload Invoice (Max 15MB)
              </label>

              <div className="relative flex items-center justify-between border border-green-300 rounded-xl px-4 py-3 mt-2
                hover:border-green-500 cursor-pointer transition-all">
                <span className="text-slate-600">{fileName}</span>
                {/* Replace UploadCloud icon with SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 16l-4-4m0 0l-4 4m4-4v12M20 16a4 4 0 00-4-4H8a4 4 0 00-4 4" />
                </svg>
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) =>
                    setFileName(e.target.files[0]?.name || "Choose file")
                  }
                />
              </div>

              <p className="text-sm mt-1 text-slate-500">
                Upload supported file (PDF/JPG/PNG)
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="mt-6">
            <label className="text-green-700 font-semibold">Email *</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 border border-green-300 rounded-xl
              focus:border-green-500 focus:ring-2 focus:ring-green-300 outline-none
              px-4 py-3 text-lg transition duration-300"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-10">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white
              px-10 py-4 font-semibold shadow-xl hover:shadow-2xl hover:shadow-green-300/50
              hover:bg-green-700 transition-all duration-500 ease-out hover:-translate-y-1"
            >
              {/* Replace Send icon with SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
              Submit Application
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WarrantyCheckButton;