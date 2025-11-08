import React, { useRef, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import bg from '../../assets/bg.jpg';

// Import images
const imageModules = import.meta.glob(
  '../../assets/Media-Center/Media-Center/**/*.{png,jpg,jpeg}',
  { eager: true }
);

// Build categories from folder structure
const buildCategoryData = (modules) => {
  const map = new Map();

  for (const path in modules) {
    const img = modules[path].default;
    const parts = path.split('/');
    const idx = parts.lastIndexOf('Media-Center');
    const category = parts[idx + 1];
    if (!category) continue;

    if (!map.has(category)) map.set(category, []);
    map.get(category).push(img);
  }

  return Array.from(map.entries()).map(([title, images]) => ({
    title,
    images
  }));
};

const categories = buildCategoryData(imageModules);

export default function MediaCenter() {
  const [selectedImage, setSelectedImage] = useState(null);

  // safe hook: single ref storage for all scroll containers
  const scrollRefs = useRef({});

  const downloadImage = (url) => {
    fetch(url)
      .then((r) => r.blob())
      .then((blob) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = url.split('/').pop();
        a.click();
      });
  };

  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="bg-green-400/10 pt-12 pb-12 shadow-inner mt-20">
        <h1 className="text-5xl font-bold text-green-900 text-center">Media Center</h1>
      </div>

      {/* Background */}
      <div
        className="min-h-screen w-full py-16"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-white/40 py-10 rounded-2xl shadow-lg space-y-24">

          {categories.map((cat, i) => {
            // create scroll ref for this category if not exists
            if (!scrollRefs.current[cat.title]) {
              scrollRefs.current[cat.title] = React.createRef();
            }

            return (
              <section key={i}>
                <h2 className="text-4xl font-bold text-green-800 text-center mb-10">
                  {cat.title}
                </h2>

                {/* Horizontal scroll with transparent arrows */}
                <div className="relative group">

                  {/* LEFT ARROW */}
                  <button
                    onClick={() =>
                      scrollRefs.current[cat.title].current.scrollBy({
                        left: -350,
                        behavior: "smooth"
                      })
                    }
                    className="
                      hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 
                      text-white text-6xl font-bold
                      px-2 py-6
                      opacity-0 group-hover:opacity-100 
                      hover:text-green-200 
                      transition-all z-20
                    "
                  >
                    ‹
                  </button>

                  {/* Scroll container */}
                  <div
                    ref={scrollRefs.current[cat.title]}
                    className="overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory px-2 pb-4"
                  >
                    <div className="flex gap-8">

                      {cat.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="
                            min-w-[250px] bg-white/80 backdrop-blur rounded-xl shadow-md
                            transition-all duration-300 cursor-pointer p-4 snap-start
                            hover:scale-110 hover:z-20 hover:shadow-2xl hover:brightness-110
                          "
                          onClick={() => setSelectedImage(img)}
                        >
                          <img
                            src={img}
                            className="w-full h-48 object-cover rounded-lg"
                          />

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              downloadImage(img);
                            }}
                            className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                          >
                            Download
                          </button>
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* RIGHT ARROW */}
                  <button
                    onClick={() =>
                      scrollRefs.current[cat.title].current.scrollBy({
                        left: 350,
                        behavior: "smooth"
                      })
                    }
                    className="
                      hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 
                      text-white text-6xl font-bold
                      px-2 py-6
                      opacity-0 group-hover:opacity-100 
                      hover:text-green-200 
                      transition-all z-20
                    "
                  >
                    ›
                  </button>

                </div>
              </section>
            );
          })}

        </div>

        {/* Fullscreen preview modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        )}

      </div>

      <Footer />

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { scrollbar-width: none; }
      `}</style>
    </>
  );
}











