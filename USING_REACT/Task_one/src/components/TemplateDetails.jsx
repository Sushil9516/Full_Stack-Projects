import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import allTemplatesData from "../data/templates.json"; // Adjust path as necessary
import {
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

// Import social media icons (using inline SVG for simplicity)
const FacebookIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.502 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z"
      clipRule="evenodd"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M22.25 6.049c-.77.343-1.6.574-2.476.678.885-.532 1.563-1.373 1.889-2.378-.83.49-1.756.845-2.73.923C18.257 3.864 17.067 3 15.6 3c-2.457 0-4.444 1.987-4.444 4.444 0 .348.04.686.118 1.011C7.75 8.167 4.098 6.136 1.684 3.125c-.42.723-.66 1.564-.66 2.463 0 1.536.78 2.89 1.968 3.682-.72-.023-1.4-.22-2.007-.556v.056c0 2.155 1.53 3.947 3.55 4.364-.37.1-.75.15-1.144.15-.28 0-.55-.027-.816-.078.568 1.777 2.227 3.075 4.195 3.109-1.523 1.192-3.447 1.905-5.545 1.905-.36 0-.71-.02-.996-.06C1.944 20.088 4.208 21 6.643 21c7.962 0 12.316-6.586 12.316-12.316 0-.188-.004-.376-.013-.563.85-.615 1.588-1.377 2.174-2.247z" />
  </svg>
);

const PinterestIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12.004 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c5.807 0 10.662-4.14 11.666-9.525-.008-.002-.016-.004-.024-.006L23.99 12c0-6.627-5.373-12-11.996-12zm-3.004 16.5c-.754 0-1.365-.611-1.365-1.365 0-.754.611-1.365 1.365-1.365s1.365.611 1.365 1.365c0 .754-.611 1.365-1.365 1.365zm3.004-3c-.754 0-1.365-.611-1.365-1.365 0-.754.611-1.365 1.365-1.365s1.365.611 1.365 1.365c0 .754-.611 1.365-1.365 1.365zm3.004-3c-.754 0-1.365-.611-1.365-1.365 0-.754.611-1.365 1.365-1.365s1.365.611 1.365 1.365c0 .754-.611 1.365-1.365 1.365zm3.004-3c-.754 0-1.365-.611-1.365-1.365 0-.754.611-1.365 1.365-1.365s1.365.611 1.365 1.365c0 .754-.611 1.365-1.365 1.365zm-12.016 9.5c0 1.254.912 2.274 2.036 2.274s2.036-1.02 2.036-2.274c0-1.254-.912-2.274-2.036-2.274s-2.036 1.02-2.036 2.274zm-3.004 0c0 1.254.912 2.274 2.036 2.274s2.036-1.02 2.036-2.274c0-1.254-.912-2.274-2.036-2.274s-2.036 1.02-2.036 2.274zm-3.004 0c0 1.254.912 2.274 2.036 2.274s2.036-1.02 2.036-2.274c0-1.254-.912-2.274-2.036-2.274s-2.036 1.02-2.036 2.274z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19.615 3.184c-1.09-.296-2.38-.47-3.715-.47-1.334 0-2.625.174-3.715.47C10.875 3.48 9.584 3.654 8.25 3.654c-1.334 0-2.625-.174-3.715-.47C3.48 3.48 2.189 3.654.854 3.654c-.188 0-.377.009-.565.027-.188.018-.377.037-.565.055L0 3.736v16.528l.854.084c.188.018.377.037.565.055.188.018.377.027.565.027 1.334 0 2.625-.174 3.715-.47 1.09-.296 2.38-.47 3.715-.47 1.334 0 2.625.174 3.715.47 1.09.296 2.38.47 3.715.47 1.334 0 2.625-.174 3.715-.47.188-.018.377-.037.565-.055.188-.018.377-.027.565-.027.188 0 .377-.009.565-.027l.854-.084V3.736l-.854-.084zM9 12V7l5 2.5L9 12z" />
  </svg>
);

const TemplateDetails = () => {
  const { templateId } = useParams();
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Find the template across all categories
    let foundTemplate = null;
    for (const category in allTemplatesData) {
      if (Array.isArray(allTemplatesData[category])) {
        foundTemplate = allTemplatesData[category].find(
          (t) => t.id === templateId
        );
        if (foundTemplate) {
          break;
        }
      }
    }

    if (foundTemplate) {
      setTemplate(foundTemplate);
    } else {
      setError("Template not found.");
    }
    setLoading(false);
  }, [templateId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-700">Loading template details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">No template data available.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section: Social Buttons (Sticky) */}
        <div
          style={{ width: "60px" }}
          className="lg:w-1/12 flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-start gap-4 lg:gap-6 sticky top-24 self-start"
        >
          <a
            href="#"
            className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-colors"
          >
            <FacebookIcon />
          </a>
          <a
            href="#"
            className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition-colors"
          >
            <BsTwitterX className="text-lg" />
          </a>
          <a
            href="#"
            className="bg-red-600 text-white p-3 rounded-full shadow-md hover:bg-red-700 transition-colors"
          >
            <FaPinterestP className="text-lg" />
          </a>
          <a
            href="#"
            className="bg-blue-700 text-white p-3 rounded-full shadow-md hover:bg-blue-800 transition-colors"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
          <a
            href="#"
            className="bg-red-700 text-white p-3 rounded-full shadow-md hover:bg-red-800 transition-colors"
          >
            <FaYoutube className="text-lg" />
          </a>
        </div>

        {/* Middle Section: Main Content (Template Details) */}
        <div className="lg:w-7/12 flex-grow">
          {template.isPremium && (
            <span className="inline-block bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
              PREMIUM TEMPLATE
            </span>
          )}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {template.title}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {template.description}
          </p>

          {/* Template Images/Carousel */}
          <div className="mb-8">
            {template.previewImages && template.previewImages.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {template.previewImages.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`${template.title} preview ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                ))}
              </div>
            ) : (
              <img
                src={
                  template.image ||
                  "https://placehold.co/800x600/E0F2F7/000000?text=No+Preview+Available"
                }
                alt={`${template.title} main preview`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            )}
          </div>

          {/* Strong & Powerful Features Section */}
          {template.features && template.features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Strong & powerful features
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {template.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Section: License Options & Metadata (Sticky) */}
        <div className="lg:w-4/12 lg:pl-8 sticky top-24 self-start bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            License Options
          </h2>

          {template.licenseOptions && (
            <div className="space-y-4 mb-6">
              {template.licenseOptions.futureUpdates && (
                <div className="flex items-center text-green-600">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Future updates
                </div>
              )}
              {template.licenseOptions.wellDocumentation && (
                <div className="flex items-center text-green-600">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Well documentation
                </div>
              )}
              {template.licenseOptions.premiumSupport && (
                <div className="flex items-center text-green-600">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  6 months premium support
                </div>
              )}

              <div className="flex items-center justify-between py-2 border-t border-gray-200 pt-4">
                <label className="flex items-center text-gray-700">
                  <input
                    type="radio"
                    name="license"
                    value="single"
                    defaultChecked
                    className="mr-2"
                  />
                  Single License
                </label>
                <span className="font-bold text-gray-800">
                  $
                  {template.licenseOptions.single
                    ? template.licenseOptions.single.toFixed(2)
                    : "0.00"}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-200 pb-4">
                <label className="flex items-center text-gray-700">
                  <input
                    type="radio"
                    name="license"
                    value="multiple"
                    className="mr-2"
                  />
                  Multiple License
                </label>
                <span className="font-bold text-gray-800">
                  $
                  {template.licenseOptions.multiple
                    ? template.licenseOptions.multiple.toFixed(2)
                    : "0.00"}
                </span>
              </div>
            </div>
          )}

          <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 mb-3 shadow-md">
            PURCHASE NOW
          </button>
          <button className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200 mb-6 shadow-md">
            LIVE DEMO
          </button>

          {template.metadata && (
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span className="font-semibold">Released</span>
                <span>{template.metadata.released}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Updated</span>
                <span>{template.metadata.updated}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Version</span>
                <span>{template.metadata.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Bootstrap</span>
                <span>{template.metadata.bootstrap}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">License</span>
                <a href="#" className="text-sky-600 hover:underline">
                  {template.metadata.license}
                </a>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Author</span>
                <span className="text-sky-600">{template.metadata.author}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateDetails;
