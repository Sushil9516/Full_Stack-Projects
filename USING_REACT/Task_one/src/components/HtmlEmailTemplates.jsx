import React from "react";

const HtmlEmailTemplates = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        HTML Email Templates
      </h1>
      <p className="text-gray-700 leading-relaxed mb-8">
        Craft engaging email campaigns with our responsive and customizable HTML
        email templates.
      </p>
      <div className="p-6 bg-green-50 rounded-lg border border-green-200">
        <h2 className="text-xl font-semibold text-green-800 mb-3">
          Ready to use Email Templates
        </h2>
        <p className="text-green-700">
          Our email templates are tested across various clients and devices to
          ensure perfect rendering.
        </p>
      </div>
      {/* Add more specific content for email templates */}
    </div>
  );
};

export default HtmlEmailTemplates;
