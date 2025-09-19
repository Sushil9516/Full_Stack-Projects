import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-40 py-12 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Who we are section */}
        <div>
          <h4 className="font-bold mb-4  text-lg">Who we are</h4>
          <p className="mb-4 leading-relaxed">
            HTML Codex is one of the top designers and publishers of FREE HTML
            Website Templates. Please support HTML Codex by mentioning and
            sharing it with your friends.
            <Link to="/about-us" className="text-blue-400 hover:underline ml-1">
              Read More
            </Link>
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-4">
            <a
              href="https://twitter.com/htmlcodex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-blue-300 bg-blue-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://www.facebook.com/htmlcodex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-blue-500 bg-blue-600 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.pinterest.com/htmlcodex/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-red-700 hover:bg-red-400 transition-colors duration-200"
              aria-label="Pinterest"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Learn about us section */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Learn about us</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about-us"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Our creative works section */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Our creative works</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/html-templates"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                HTML Templates
              </Link>
            </li>
            <li>
              <Link
                to="/html-landing-pages"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                HTML Landing Pages
              </Link>
            </li>
            <li>
              <Link
                to="/html-email-templates"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                HTML Email Templates
              </Link>
            </li>
            <li>
              <Link
                to="/html-snippets"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                HTML Snippets
              </Link>
            </li>
          </ul>
        </div>

        {/* Stay updated section */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Stay updated</h4>
          <p className="mb-4 leading-relaxed">
            If you want to get information about new template published please
            input your email below. Don't worry, your email address will be
            protected to us.
          </p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 mr-1 text-black bg-white flex-grow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal line and copyright */}
      <div className="container mx-auto mt-12 pt-8 border-t border-gray-700 text-center">
        <p className="text-gray-400 text-xs">
          &copy; Copyright 2025 HTML Codex. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
