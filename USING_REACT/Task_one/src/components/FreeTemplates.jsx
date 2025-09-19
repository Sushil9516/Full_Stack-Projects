import React, { useState, useEffect } from "react";
import TemplateSection from "./TemplateSection.jsx"; // Assuming TemplateSection is in the same components folder
import allTemplatesData from "../data/templates.json"; // Adjust path as necessary

const FreeTemplates = () => {
  // Define categories based on the design image
  const categories = [
    "All",
    "Agency",
    "Beauty & Hair",
    "Business",
    "Corporate",
    "Ecommerce",
    "Education",
    "Industrial",
    "Maintenance & Service",
    "Medical & Hospital",
    "News & Magazine",
    "Nonprofit",
    "Restaurants & Food",
    "Travel & Tourism",
    "Weddings",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredFreeTemplates, setFilteredFreeTemplates] = useState([]);

  // Effect to filter templates whenever the selected category changes
  useEffect(() => {
    // Ensure allTemplatesData.free exists and is an array
    let templatesToFilter = allTemplatesData.free || [];

    if (selectedCategory === "All") {
      // If "All" is selected, show all free templates
      setFilteredFreeTemplates(templatesToFilter);
    } else {
      // Filter templates by checking if their category array includes the selected category
      const filtered = templatesToFilter.filter(
        (template) =>
          template.category &&
          Array.isArray(template.category) &&
          template.category.includes(selectedCategory)
      );
      setFilteredFreeTemplates(filtered);
    }
  }, [selectedCategory]); // Re-run effect when selectedCategory changes

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Page Title and Description */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Category - Template
      </h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Why spend time, effort, and money designing a website from scratch when
        you can choose a lot of premium-quality but completely free website
        templates from our extensive template library? Whether you want a
        template for an agency, a restaurant, an e-commerce, a corporate, or a
        personal website, our library has got you covered. All of our templates
        are built using the latest web technologies including HTML5, CSS3, and
        Bootstrap framework that provide a strong foundation for any website.
      </p>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
              ${
                selectedCategory === category
                  ? "bg-sky-500 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Filtered Templates */}
      {filteredFreeTemplates.length > 0 ? (
        <TemplateSection
          title={`Free Templates - ${selectedCategory}`}
          templates={filteredFreeTemplates}
        />
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No templates found for this category.
        </p>
      )}
    </div>
  );
};

export default FreeTemplates;
