import React, { useState } from 'react';
import Navbar from '../../Components/Navbar'; 
import Footer from '../../Components/Footer';

// Use a Glob Import to load all assets in the Media-Center directory and its subfolders.
// The key is the path, and the value is a function to dynamically import the asset.
const imageModules = import.meta.glob('../../assets/Media-Center/**/*.+(png|jpg|jpeg|gif)', { eager: true });

// --- Asset Mapping Logic ---

/**
 * Transforms the imported modules into a structured array matching the component's state structure.
 */
const buildCategoryData = (modules) => {
    const categoryMap = new Map();

    for (const path in modules) {
        // Get the final, accessible URL/path for the image
        const imageUrl = modules[path].default || modules[path]; 

        // Extract the category folder name (the directory immediately after 'Media-Center')
        const pathParts = path.split('/');
        const mediaCenterIndex = pathParts.findIndex(part => part === 'Media-Center');
        
        if (mediaCenterIndex === -1 || pathParts.length <= mediaCenterIndex + 1) continue;

        const categoryTitle = pathParts[mediaCenterIndex + 1];

        // Initialize or push to the category map
        if (!categoryMap.has(categoryTitle)) {
            categoryMap.set(categoryTitle, []);
        }
        categoryMap.get(categoryTitle).push(imageUrl);
    }

    // Convert the Map into the final array format
    return Array.from(categoryMap.entries()).map(([title, images]) => ({
        title: title,
        images: images,
    }));
};

// Initialize the categories data using the dynamic imports
const initialCategories = buildCategoryData(imageModules);

// --- React Component ---

const MediaCenter = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [categories] = useState(initialCategories);

    /**
     * Robust function to download an image using the fetch API and Blob URLs.
     * @param {string} imageUrl - The URL or path of the image to download.
     */
    const downloadImage = (imageUrl) => {
        fetch(imageUrl)
            .then((response) => response.blob())
            .then((blob) => {
                const blobUrl = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = blobUrl;
                
                const filename = imageUrl.split('/').pop().split('?')[0]; 
                link.download = filename; 
                
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
            <div className='min-h-screen bg-white pb-16 mt-20'>
                {/* Hero Section */}
                <div className='bg-green-400/10 pt-12 pb-12 shadow-inner mt-20'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                        <h1 className='text-5xl font-bold tracking-tight text-green-900 sm:text-6xl'>
                            Media Center
                        </h1>
                    </div>
                </div>

                {/* Categories - Large Grid Layout */}
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-16'>
                    {categories.map((category, idx) => (
                        <div key={idx}>
                            <h2 className='text-3xl font-semibold text-green-800 mb-6 border-b-2 border-green-300 pb-2'>
                                {category.title}
                            </h2>

                            {/* Responsive Grid Container: 1 column on mobile, 2 on tablet/small, 3 on large screens */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {category.images.map((img, i) => (
                                    <div
                                        key={i}
                                        // Aspect ratio helps maintain consistency
                                        className='relative aspect-video rounded-lg overflow-hidden shadow-xl group cursor-pointer' 
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img
                                            src={img}
                                            alt={`${category.title} ${i + 1}`}
                                            loading="lazy"
                                            className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
                                        />
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent modal opening
                                                downloadImage(img);
                                            }}
                                            className='absolute bottom-3 right-3 bg-green-700 text-white text-sm px-3 py-1 rounded hover:bg-green-800 opacity-80 hover:opacity-100 transition-opacity'
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
                        className='fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4'
                        onClick={() => setSelectedImage(null)}
                    >
                        <img
                            onClick={(e) => e.stopPropagation()} 
                            src={selectedImage}
                            alt='Full view'
                            className='max-h-[90vh] max-w-[90vw] rounded-lg object-contain'
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                downloadImage(selectedImage)
                            }}
                            className='absolute bottom-10 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
                        >
                            Download Image
                        </button>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className='absolute top-6 right-6 text-white text-3xl font-bold hover:text-green-400'
                        >
                            ✕
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default MediaCenter;