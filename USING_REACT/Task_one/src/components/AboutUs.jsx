import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Us</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        HTML Codex is a leading provider of high-quality, free, and premium HTML
        website templates. Our mission is to empower developers and designers
        with modern, customizable, and developer-friendly code to build stunning
        web projects efficiently.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        We are passionate about web development and strive to create resources
        that are not only aesthetically pleasing but also robust and easy to
        use. Our team is dedicated to continuous improvement and providing
        excellent support to our community.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Thank you for being a part of our journey!
      </p>
      {/* Add more details about the company, mission, team etc. */}
    </div>
  );
};

export default AboutUs;
