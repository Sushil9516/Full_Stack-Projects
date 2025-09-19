import React from "react";
import TemplateSection from "./TemplateSection"; // Assuming TemplateSection is in the same directory or adjust path
import allTemplatesData from "../data/templates.json"; // Adjust path as needed

const HtmlTemplates = () => {
  // You might want to filter allTemplatesData for specific HTML templates here
  // For now, I'll just show popular templates as an example.
  // In a real app, you'd have a specific 'htmlTemplates' array in your JSON or a more complex filter.
  const htmlTemplates = allTemplatesData.popular; // Example: using popular as a stand-in

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Our HTML Templates
      </h1>
      <p className="text-gray-700 leading-relaxed mb-8">
        Explore our wide range of high-quality HTML templates, perfect for
        various industries and purposes.
      </p>
      <TemplateSection
        title="Featured HTML Templates"
        templates={htmlTemplates}
      />
      {/* You can add more sections or content specific to HTML templates here */}
    </div>
  );
};

export default HtmlTemplates;
