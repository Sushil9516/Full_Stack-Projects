import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social icons

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Contact Form */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
          <p className="text-gray-700 leading-relaxed mb-8">
            If you have any queries, please feel free to contact us. HTML Codex
            is always ready to reply.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              What can we help you with? <span className="text-red-500">*</span>
            </h2>
            <form className="space-y-6">
              {/* Radio Buttons for Query Type */}
              <div className="flex flex-wrap gap-4 mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-600 h-4 w-4"
                    name="queryType"
                    value="general"
                    defaultChecked
                  />
                  <span className="ml-2 text-gray-700">General query</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-600 h-4 w-4"
                    name="queryType"
                    value="preSale"
                  />
                  <span className="ml-2 text-gray-700">Pre-sale question</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-600 h-4 w-4"
                    name="queryType"
                    value="afterSale"
                  />
                  <span className="ml-2 text-gray-700">After sale support</span>
                </label>
              </div>

              {/* Form Fields */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              {/* Subscribe to newsletter checkbox */}
              <div className="flex items-center">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="newsletter"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Subscribe me for the newsletter.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Right Section: Sticky Cards */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 flex flex-col gap-8 self-start">
            {/* Working Contact Form Box */}
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">
                Working Contact Form with Ajax & PHP
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Get a functional and working contact form with Ajax & PHP in a
                few minutes. Just copy and paste the files, add a little code
                and you're done.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold">
                DOWNLOAD NOW
              </button>
            </div>

            {/* Bundle Offer Box */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                BUNDLE OFFER
              </h3>
              <p className="text-5xl font-extrabold text-blue-600 mb-4">
                60% OFF
              </p>
              <p className="text-gray-700 mb-4">One Bundle 4 HTML5 Templates</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold">
                DOWNLOAD NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
