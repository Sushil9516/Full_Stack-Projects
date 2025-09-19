import React from "react";
import TemplateSection from "./TemplateSection"; // Assuming TemplateSection is in the same directory or adjust path
import allTemplatesData from "../data/templates.json"; // Adjust path as needed

const HtmlLandingPages = () => {
  // Example: using premium templates as a stand-in for landing pages
  const landingPages = allTemplatesData.premium;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        HTML Landing Pages
      </h1>
      <p className="text-gray-700 leading-relaxed mb-8">
        Create high-converting landing pages with our professionally designed
        HTML templates.
      </p>
      <TemplateSection
        title="Our Best Landing Pages"
        templates={landingPages}
      />
      {/* Add more specific content for landing pages */}
    </div>
  );
};

export default HtmlLandingPages;
