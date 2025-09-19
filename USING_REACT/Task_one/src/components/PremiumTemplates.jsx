import React, { useState, useEffect } from "react";
import TemplateSection from "./TemplateSection.jsx"; // Assuming TemplateSection is in the same components folder
import allTemplatesData from "../data/templates.json"; // Adjust path as necessary

const PremiumTemplates = () => {
  const [filteredPremiumTemplates, setFilteredPremiumTemplates] = useState([]);

  // This useEffect will filter premium templates when the component mounts
  // or if allTemplatesData changes (though it's static here).
  useEffect(() => {
    // Ensure allTemplatesData.premium exists and is an array
    const premiumTemplates = allTemplatesData.premium || [];
    setFilteredPremiumTemplates(premiumTemplates);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Page Title and Description */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Category - Premium Template
      </h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Discover our exclusive collection of premium HTML templates. These
        templates are meticulously crafted with advanced features, clean code,
        and dedicated support to help you build professional and high-performing
        websites.
      </p>

      {/* Display Premium Templates using TemplateSection */}
      {filteredPremiumTemplates.length > 0 ? (
        <TemplateSection
          title="Our Premium Templates" // You can customize this title if needed
          templates={filteredPremiumTemplates}
        />
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No premium templates found.
        </p>
      )}
    </div>
  );
};

export default PremiumTemplates;
