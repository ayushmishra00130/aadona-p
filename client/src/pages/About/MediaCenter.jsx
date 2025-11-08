import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import bg from '../../assets/bg.jpg';

// Dynamically import all images from Media-Center and subfolders
const imageModules = import.meta.glob('../../assets/Media-Center/**/*.{png,jpg,jpeg,gif}', { eager: true });

// --- Asset Mapping Logic ---
const buildCategoryData = (modules) => {
  const categoryMap = new Map();

  for (const path in modules) {
    const imageUrl = modules[path].default || modules[path];
    const pathParts = path.split('/');
    const mediaCenterIndex = pathParts.findIndex(part => part === 'Media-Center');
    if (mediaCenterIndex === -1 || pathParts.length <= mediaCenterIndex + 1) continue;

    const categoryTitle = pathParts[mediaCenterIndex + 1];
    if (!categoryMap.has(categoryTitle)) {
      categoryMap.set(categoryTitle, []);
    }
    categoryMap.get(categoryTitle).push(imageUrl);
  }

  return Array.from(categoryMap.entries()).map(([title, images]) => ({
    title,
    images,
  }));
};

const initialCategories = buildCategoryData(imageModules);

// --- React Component ---
const MediaCenter = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [categories] = useState(initialCategories);

  const downloadImage = (imageUrl) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = imageUrl.split('/').pop().split('?')[0];
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => console.error('Error downloading image:', error));
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Hero Section */}
        <div className="bg-green-400/10 pt-12 pb-12 shadow-inner mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-green-900 sm:text-6xl">
              Media Center
            </h1>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-16">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-semibold text-green-800 mb-6 border-b-2 border-green-300 pb-2">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-video rounded-lg overflow-hidden shadow-xl group cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`${category.title} ${i + 1}`}
                      loading="lazy"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadImage(img);
                      }}
                      className="absolute bottom-3 right-3 bg-green-700 text-white text-sm px-3 py-1 rounded hover:bg-green-800 opacity-80 hover:opacity-100 transition-opacity"
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedImage(null)}
          >
            <img
              onClick={(e) => e.stopPropagation()}
              src={selectedImage}
              alt="Full view"
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                downloadImage(selectedImage);
              }}
              className="absolute bottom-10 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Download Image
            </button>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-green-400"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MediaCenter;