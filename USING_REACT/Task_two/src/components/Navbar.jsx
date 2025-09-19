import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p- shadow-md">
      <div className="container mx-auto p-5 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          {/* Ensure the path to your logo is correct. Place htmlcodex-logo.png in the 'public' folder. */}
          <img
            src="/htmlcodex.png"
            alt="HTML Codex Logo"
            className="h-35  mr-2"
          />
        </div>

        {/* Desktop Menu Links + Search Icon + Hamburger Icon (Visible on md and larger screens) */}
        <div className="hidden md:flex items-center flex-grow justify-end">
          {/* Desktop Navigation Links - Now with individual padding/margin for spread */}
          <a href="#" className="text-gray-700 hover:text-gray-900 px-4">
            Free Templates
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-4">
            Premium Templates
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-4">
            Template License
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-4">
            Remove Credit
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-4">
            Contact Us
          </a>

          {/* Desktop Search Icon */}
          <button className="text-gray-700 hover:text-gray-900 ml-8">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>

          {/* Desktop Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 ml-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path> // X icon when menu is open
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path> // Hamburger icon when menu is closed
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Icons (Search and Hamburger - Visible only on small screens) */}
        <div className="flex items-center md:hidden space-x-4">
          {/* Mobile Search Icon */}
          <button className="text-gray-700 hover:text-gray-900">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
          {/* Mobile Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path> // X icon when menu is open
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path> // Hamburger icon when menu is closed
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full Menu Content - Appears when isMenuOpen is true (on all screen sizes) */}
      {isMenuOpen && (
        // Removed background color and set pointer-events-none for the overlay
        <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
          {" "}
          {/* Overlay for background */}
          <div className="bg-white p-6 shadow-xl w-64 h-full overflow-y-auto relative pointer-events-auto">
            {" "}
            {/* Menu container as a right sidebar */}
            {/* Close Button at top right of the menu */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="flex flex-col items-start space-y-2 mt-4">
              {/* Primary navigation links - ONLY visible in mobile menu (below md breakpoint) */}
              <div className="md:hidden flex flex-col items-start w-full space-y-2">
                <a
                  href="#"
                  className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
                >
                  Free Templates
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
                >
                  Premium Templates
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
                >
                  Template License
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
                >
                  Remove Credit
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
                >
                  Contact Us
                </a>
                <hr className="w-full border-gray-200 my-2" /> {/* Separator */}
              </div>
              {/* "Less data" from image_abc9db.png */}
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
              >
                HTML Templates
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
              >
                HTML Landing Pages
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
              >
                HTML Email Templates
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
              >
                HTML Snippets
              </a>
              <hr className="w-full border-gray-200 my-2" /> {/* Separator */}
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-2 px-4 w-full rounded-md hover:bg-gray-100"
              >
                Terms & Conditions
              </a>
              <hr className="w-full border-gray-200 my-2" /> {/* Separator */}
              <div className="flex justify-center w-full mt-4 space-x-4">
                {/* Social Media Icons - Styled as buttons */}
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
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
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.25 6.049c-.77.343-1.6.574-2.476.678.885-.532 1.563-1.373 1.889-2.378-.83.49-1.756.845-2.73.923C18.257 3.864 17.067 3 15.6 3c-2.457 0-4.444 1.987-4.444 4.444 0 .348.04.686.118 1.011C7.75 8.167 4.098 6.136 1.684 3.125c-.42.723-.66 1.564-.66 2.463 0 1.536.78 2.89 1.968 3.682-.72-.023-1.4-.22-2.007-.556v.056c0 2.155 1.53 3.947 3.55 4.364-.37.1-.75.15-1.144.15-.28 0-.55-.027-.816-.078.568 1.777 2.227 3.075 4.195 3.109-1.523 1.192-3.447 1.905-5.545 1.905-.36 0-.71-.02-.996-.06C1.944 20.088 4.208 21 6.643 21c7.962 0 12.316-6.586 12.316-12.316 0-.188-.004-.376-.013-.563.85-.615 1.588-1.377 2.174-2.247z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.004 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c5.807 0 10.662-4.14 11.666-9.525-.008-.002-.016-.004-.024-.006L23.99 12c0-6.627-5.373-12-11.996-12zm-3.004 16.5c-.754 0-1.365-.611-1.365-1.365 0-.754.611-1.365 1.365-1.365s1.365.611 1.365 1.365c0 .754-.611 1.365-1.365 1.365zm3.004-3c-.754 0-1.365-.611-1.365-1.365 0-.754.611-1.365 1.365-1.365s1.365.611 1.365 1.365c0 .754-.611 1.365-1.365 1.365zm3.004-3c-.754 0-1.365-.611-1.365-1.365 0-.754.611-1.365 1.365-1.365s1.365.611 1.365 1.365c0 .754-.611 1.365-1.365 1.365zm3.004-3c-.754 0-1.365-.611-1.365-1.365 0-.754.611-1.365 1.365-1.365s1.365.611 1.365 1.365c0 .754-.611 1.365-1.365 1.365zm-12.016 9.5c0 1.254.912 2.274 2.036 2.274s2.036-1.02 2.036-2.274c0-1.254-.912-2.274-2.036-2.274s-2.036 1.02-2.036 2.274zm-3.004 0c0 1.254.912 2.274 2.036 2.274s2.036-1.02 2.036-2.274c0-1.254-.912-2.274-2.036-2.274s-2.036 1.02-2.036 2.274zm-3.004 0c0 1.254.912 2.274 2.036 2.274s2.036-1.02 2.036-2.274c0-1.254-.912-2.274-2.036-2.274s-2.036 1.02-2.036 2.274z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
