// src/components/FeatureCard.jsx
import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  // Destructure icon as Icon
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="text-blue-600 text-5xl mb-4 flex justify-center">
        {Icon && <Icon />} {/* Render the icon component */}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
