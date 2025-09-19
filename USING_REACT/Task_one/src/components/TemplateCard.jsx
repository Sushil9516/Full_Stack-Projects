import React from "react";
import { Link } from "react-router-dom";

const TemplateCard = ({ template }) => {
  if (!template || !template.id) {
    console.error("TemplateCard: Template data or ID is missing.", template);
    return null; // Don't render if essential data is missing
  }

  return (
    // The main container for the card, with all its styling
    <div className="rounded-lg shadow-2xl bg-white overflow-hidden relative">
      {/* The Link component now wraps the entire card content for navigation to the details page */}
      <Link to={`/template/${template.id}`} className="block">
        <div className="relative">
          <img
            src={
              template.image ||
              "https://placehold.co/400x300/E0F2F7/000000?text=No+Image"
            }
            alt={template.title}
            className="w-full h-auto object-cover hover:opacity-70 transition-opacity rounded-t-lg"
          />
          {template.isPremium && (
            // This is a visual badge; it's a span now as the whole card is clickable
            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-2xl transition-colors duration-300 z-10">
              PREMIUM TEMPLATE
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-sky-500">
            {template.title}
          </h3>
          <div className="flex justify-between items-center mt-3 mb-[-10px]">
            <p className="text-blue-600 font-bold text-sm ">
              $
              {typeof template.price === "number"
                ? template.price.toFixed(2)
                : parseFloat(String(template.price).replace("$", "")).toFixed(
                    2
                  )}
            </p>
            {/* The Live Preview link. Adding stopPropagation to prevent the parent Link from also triggering. */}
            <a
              href={template.link}
              className="inline-block px-2 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()} // Prevents the parent <Link> from navigating
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank"
            >
              Live Preview
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-2 flex items-center">
            {/* Using SVG for the icon as FontAwesome might not be loaded */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {template.purchases} Purchases
          </p>
        </div>
      </Link>
    </div>
  );
};

export default TemplateCard;
