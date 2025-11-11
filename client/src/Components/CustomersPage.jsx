import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../assets/bg.jpg";

/* ✅ Dynamic Import With Correct CASE-SENSITIVE PATH */
const imageModules = import.meta.glob(
  "../assets/Companies/**/*.{png,jpg,jpeg,avif}",
  { eager: true }
);

/* ✅ Combine Famous + Less_Famous into Govt & Private and extract Name */
const sortImages = (modules) => {
  const govt = [];
  const privateCo = [];

  for (const path in modules) {
    const img = modules[path].default;

    const parts = path.split("/");
    const idx = parts.indexOf("Companies");
    const category = parts[idx + 1]; // Government / Private

    // Extract filename and format it as the company name
    const fileNameWithExtension = parts[parts.length - 1];
    const nameWithoutExtension = fileNameWithExtension.split(".")[0];
    const companyName = nameWithoutExtension
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize first letter of each word

    const companyData = {
      src: img,
      name: companyName,
    };

    if (category === "Government") govt.push(companyData);
    if (category === "Private") privateCo.push(companyData);
  }

  return { govt, privateCo };
};

const images = sortImages(imageModules);

/* ✅ Card Component - UPDATED to allow full name visibility 
(Removed max-w-[120px] and truncate from the <p> tag)
*/
const LogoCard = ({ data }) => (
  <div className="flex flex-col items-center justify-start p-2">
    {/* Logo Container */}
    <div className="flex items-center justify-center h-32 w-32 p-2 bg-white border border-green-600 rounded-lg shadow-md transition duration-300 hover:shadow-xl hover:scale-[1.05]">
      <img
        src={data.src}
        alt={data.name}
        className="max-h-full max-w-full object-contain transition duration-300"
      />
    </div>
    {/* Company Name Display - Full name is now visible */}
    <p className="mt-2 text-sm text-center font-medium text-gray-700"> 
      {data.name}
    </p>
  </div>
);

export default function CustomerPage() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Our Customers
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Building Trust, Delivering Excellence
          </p>
        </div>
      </div>

      {/* Background */}
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="min-h-screen">
          {/* ✅ GOVERNMENT COMPANIES */}
          <section className="max-w-7xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center bg-white p-4 mb-10 text-green-600 rounded-lg shadow-lg">
              Government Enterprises
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
              {images.govt.map((data, i) => (
                <LogoCard data={data} key={`gov-${i}`} />
              ))}
            </div>
          </section>

          {/* ✅ PRIVATE COMPANIES */}
          <section className="max-w-7xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center bg-white p-4 mb-10 text-green-600 rounded-lg shadow-lg">
              Private Enterprises
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
              {images.privateCo.map((data, i) => (
                <LogoCard data={data} key={`private-${i}`} />
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}