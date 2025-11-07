import React, { useState } from "react";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

// --- Icon Replacements (Custom SVGs) ---
// Replacement for Search icon
const SearchIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

// Replacement for ArrowRight icon
const ArrowRightIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// Replacement for User icon
const UserIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

// Replacement for Calendar icon
const CalendarIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

// Replacement for Clock icon
const ClockIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
// ---------------------------------------------------


const BlogPage = () => {
  // Only local state for card hover
  const [hoveredCard, setHoveredCard] = useState(null);
  // State for the search query, driving the filtering
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Why Choose Aadona as Your Tech Partner",
      excerpt:
        "In today's fast-paced digital world, selecting the right technology partner is crucial for businesses aiming to build robust IT and networking infrastructure. As an Indian networking company...",
      author: "Pinakii Chatterje",
      date: "Oct 12",
      readTime: "4 min read",
      views: "2 views",
      comments: "0 comments",
      image:
        "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=500&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Understanding Business Working Hours",
      excerpt:
        "In today's fast-paced world, understanding typical working hours is crucial for businesses and organizations aiming to optimize...",
      author: "Pinakii Chatterje",
      date: "Oct 10",
      readTime: "4 min read",
      views: "2 views",
      comments: "0 comments",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title:
        "Building India's Digital Future: Why Government and Enterprises Should Choose Made-in-India Networking Solutions",
      excerpt:
        "Excellent ✅ — Introduction: A Paradigm Shift in India's Tech Infrastructure India stands at a decisive moment in its digital journey. As...",
      author: "Pinakii Chatterje",
      date: "Oct 8",
      readTime: "3 min read",
      views: "5 views",
      comments: "0 comments",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&q=80",
    },
    {
      id: 4,
      title: "The Future of Network Security",
      excerpt:
        "Cybersecurity threats are evolving rapidly. Learn how Aadona's advanced networking solutions provide robust protection for your business infrastructure...",
      author: "Pinakii Chatterje",
      date: "Oct 5",
      readTime: "5 min read",
      views: "8 views",
      comments: "2 comments",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&q=80",
    },
    {
      id: 5,
      title: "Cloud Infrastructure Best Practices",
      excerpt:
        "Discover the essential strategies for building and maintaining a scalable cloud infrastructure that grows with your business needs...",
      author: "Pinakii Chatterje",
      date: "Oct 3",
      readTime: "6 min read",
      views: "12 views",
      comments: "3 comments",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800&h=500",
    },
    {
      id: 6,
      title: "5G Networks and Enterprise Connectivity",
      excerpt:
        "Explore how 5G technology is revolutionizing enterprise connectivity and what it means for your business operations and digital transformation...",
      author: "Pinakii Chatterje",
      date: "Sep 28",
      readTime: "4 min read",
      views: "15 views",
      comments: "5 comments",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop&q=80",
    },
  ];

  // Logic to filter blog posts based on searchQuery (case-insensitive search across title, excerpt, and author)
  const filteredBlogPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 font-sans">
      {/* Shared Navbar (site-wide) */}
      <Navbar />

      {/* Hero Section — light mint style */}
      <div className="bg-green-50 py-20 px-4 mt-16 shadow-inner">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-4">
            Our Blog
          </h1>

          <p className="text-lg md:text-xl text-green-600 mb-10">
            Insights, stories, and expertise from the world of networking.
          </p>

          {/* Search Bar with state handling */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 rounded-full bg-white border border-green-200 text-gray-700 shadow-md focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 placeholder-gray-400"
                aria-label="Search articles"
                value={searchQuery} // Bind value to state
                onChange={(e) => setSearchQuery(e.target.value)} // Update state on change
              />
              {/* Custom SearchIcon component */}
              <SearchIcon className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-green-500" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-12">
          {/* Display title based on search state */}
          <h2 className="text-3xl font-bold text-gray-800">
            {searchQuery ? `Search Results for "${searchQuery}"` : "Latest Posts"}
          </h2>
          <button
            type="button"
            className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 transition-all duration-300 hover:gap-3"
          >
            View All
            {/* Custom ArrowRightIcon component */}
            <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogPosts.length > 0 ? (
            filteredBlogPosts.map((post) => (
              <div
                key={post.id}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredCard === post.id ? "scale-110" : "scale-100"
                    }`}
                    loading="lazy"
                    // Placeholder fallback in case the image URLs fail
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src="https://placehold.co/800x500/A7F3D0/065F46?text=Blog+Placeholder";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {/* Custom UserIcon component */}
                      <UserIcon className="w-5 h-5 text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{post.author}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          {/* Custom CalendarIcon component */}
                          <CalendarIcon className="w-3 h-3" aria-hidden="true" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          {/* Custom ClockIcon component */}
                          <ClockIcon className="w-3 h-3" aria-hidden="true" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-green-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{post.views}</span>
                      <span>{post.comments}</span>
                    </div>
                    <button
                      type="button"
                      className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1 transition-all duration-300 group"
                    >
                      Read More
                      {/* Custom ArrowRightIcon component */}
                      <ArrowRightIcon
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Message for no search results
            <div className="lg:col-span-3 text-center py-10 bg-white rounded-xl shadow-lg border-2 border-dashed border-gray-200">
              <p className="text-xl text-gray-600">No blog posts found matching your search: **"{searchQuery}"**.</p>
              <p className="text-sm text-gray-500 mt-2">Try a different search term or check for typos.</p>
            </div>
          )}
        </div>
      </div>

      {/* Shared Footer (site-wide) */}
      <Footer/>
    </div>
  );
};

export default BlogPage;