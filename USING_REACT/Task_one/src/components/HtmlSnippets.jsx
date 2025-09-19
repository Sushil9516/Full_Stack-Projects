import React from "react";

const HtmlSnippets = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">HTML Snippets</h1>
      <p className="text-gray-700 leading-relaxed mb-8">
        A collection of useful HTML snippets and code examples to help you build
        faster.
      </p>
      <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-semibold text-yellow-800 mb-3">
          Code Examples
        </h2>
        <p className="text-yellow-700">
          Find ready-to-use code for various UI elements, animations, and
          functionalities.
        </p>
      </div>
      {/* Add more specific content for snippets, maybe code blocks */}
    </div>
  );
};

export default HtmlSnippets;
