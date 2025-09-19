import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import TemplateCard from "./TemplateCard.jsx"; // IMPORTANT: Ensure TemplateCard.jsx is in the same directory as this file (src/components/)

const TemplateSection = ({ title, templates }) => {
  // Determine initial visible count based on the section title
  // For Premium and Popular, show all available templates. For Latest, show 4 and allow loading more.
  const initialVisibleCount =
    title === "Latest Templates" ? 4 : templates.length;

  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [showScrollButton, setShowScrollButton] = useState(false); // New state for scroll button visibility

  // Reset visibleCount if templates or title changes (e.g., if a search query changes templates)
  useEffect(() => {
    setVisibleCount(initialVisibleCount);
  }, [templates, title]);

  // Effect for handling scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Show button if scrolled down more than 200px
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const showScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="px-40 py-12 relative bg-neutral-100">
      <div className="flex justify-between items-center mb-6">
        {title && <h2 className="text-2xl font-bold">{title}</h2>}

        {/* Conditionally render the "All Premium Templates" button */}
        {title === "Premium Templates" && (
          <Link
            to="/premium-templates"
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            ALL PREMIUM TEMPLATES
          </Link>
        )}

        {/* Conditionally render the "All Popular Templates" button */}
        {title === "Popular Templates" && (
          <Link
            to="/popular-templates"
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            ALL POPULAR TEMPLATES
          </Link>
        )}

        {/* Conditionally render the "All Latest Templates" button, linking to /free-templates */}
        {title === "Latest Templates" && (
          <Link
            to="/free-templates" // Navigate to the free templates route as requested
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            ALL LATEST TEMPLATES
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {templates.slice(0, visibleCount).map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>

      {/* Conditionally render Load More button ONLY for "Latest Templates" */}
      {title === "Latest Templates" && visibleCount < templates.length && (
        <div className="text-center mt-10">
          <button
            onClick={loadMore}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}

      {/* Conditionally render the scroll to top button based on showScrollButton state */}
      {showScrollButton && (
        <button
          onClick={showScrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-3xl text-white px-5 py-3 rounded-full shadow-md hover:bg-blue-700"
        >
          ↑
        </button>
      )}
    </section>
  );
};

export default TemplateSection;
