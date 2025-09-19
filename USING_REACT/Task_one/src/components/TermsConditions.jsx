import React from "react";

const TermsConditions = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Terms & Conditions
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to HTML Codex! These terms and conditions outline the rules and
        regulations for the use of HTML Codex's Website, located at
        htmlcodex.com.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Agreement to Terms
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use HTML Codex if you do not agree to
        take all of the terms and conditions stated on this page.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">License</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unless otherwise stated, HTML Codex and/or its licensors own the
        intellectual property rights for all material on HTML Codex. All
        intellectual property rights are reserved. You may access this from HTML
        Codex for your own personal use subjected to restrictions set in these
        terms and conditions.
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
        <li>Republish material from HTML Codex</li>
        <li>Sell, rent or sub-license material from HTML Codex</li>
        <li>Reproduce, duplicate or copy material from HTML Codex</li>
        <li>Redistribute content from HTML Codex</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This Agreement shall begin on the date hereof.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Content</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In these Standard Terms and Conditions, "Your Content" shall mean any
        audio, video text, images or other material you choose to display on
        this Website. By displaying Your Content, you grant HTML Codex a
        non-exclusive, worldwide irrevocable, sub licensable license to use,
        reproduce, adapt, publish, translate and distribute it in any and all
        media.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Your Content must be your own and must not be invading any third-party’s
        rights. HTML Codex reserves the right to remove any of Your Content from
        this Website at any time without notice.
      </p>
      {/* Add more sections as per standard terms and conditions */}
    </div>
  );
};

export default TermsConditions;
