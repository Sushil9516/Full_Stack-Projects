import React from "react";

const TemplateLicense = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-12 flex flex-col lg:flex-row gap-8">
      {/* Left Content */}
      <div className="lg:w-2/3">
        {/* Section 1: Title */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Template License
        </h1>
        <p className="mb-8 text-gray-700 leading-relaxed">
          When you download a free template or purchase a premium template from
          HTML Codex, you are actually being granted a license to use that
          template under certain conditions. All the templates in HTML Codex can
          be used for personal & commercial purposes. To understand our
          licenses, please read the following details.
        </p>

        {/* Section 2: Free License */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Free Template License
        </h2>
        <img
          src="https://licensebuttons.net/l/by/4.0/88x31.png"
          alt="Creative Commons"
          className="mb-4"
        />
        <p className="mb-4 text-gray-700 leading-relaxed">
          All free HTML templates by{" "}
          <a href="#" className="text-blue-600 hover:underline">
            HTML Codex
          </a>{" "}
          are licensed under a{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Creative Commons Attribution 4.0 International License
          </a>
          , which means you are <strong>not allowed</strong> to remove the
          author’s credit link/attribution link/backlink. When you download or
          use our free HTML templates, it will attribute the following
          conditions.
        </p>

        {/* Section 3: Allowed / Not Allowed */}
        <h3 className="text-xl font-bold mb-3 text-gray-800">
          You are allowed
        </h3>
        <ul className="list-decimal list-inside mb-6 text-gray-700 leading-relaxed">
          <li>You are allowed to use for personal and commercial purposes.</li>
          <li>You are allowed to modify/customize however you like.</li>
          <li>You are allowed to convert/port for use for any CMS.</li>
          <li>
            You are allowed to share/distribute under the HTML Codex brand name.
          </li>
        </ul>

        <h3 className="text-xl font-bold mb-3 text-gray-800">
          You are not allowed
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            You are not allowed to remove the author’s credit link/backlink{" "}
            <strong>without purchasing Credit Removal License</strong>.
          </li>
          <li>
            You are not allowed to sell, resale, rent, lease, license, or
            sub-license.
          </li>
          <li>
            You are not allowed to upload on your template websites or template
            collection websites or any other third party websites without our
            permission.
          </li>
        </ul>

        <p className="mb-6 text-gray-700 leading-relaxed italic">
          <strong>Note:</strong> If any template contains premium stock photos
          which are only for demo purposes and not distributed with the
          template. You need to purchase them separately from the corresponding
          stock photo website. You are responsible for adhering to the original
          license of them if necessary.
        </p>

        <p className="mb-10 text-gray-700">
          Want to remove the author’s credit link/backlink?{" "}
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Purchase Credit Removal License
          </a>
        </p>

        {/* Section 4: Premium License */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Premium Template License
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          When you purchase a premium item from us, you’re actually purchasing a
          license to use that item. The licenses authenticate purchasers to use
          our items under certain conditions. All of our premium items are
          covered by “Single” and “Multiple” licenses. Here is an overview of
          what each license allows for to make it easy to pick what you need.
        </p>

        {/* License Table */}
        <div className="overflow-x-auto mb-10 border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 font-semibold text-gray-600 uppercase tracking-wide">
                  Terms
                </th>
                <th className="px-6 py-3 font-semibold text-gray-600 uppercase tracking-wide">
                  Single License
                </th>
                <th className="px-6 py-3 font-semibold text-gray-600 uppercase tracking-wide">
                  Multiple License
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">Number of end products</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">Unlimited</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Use for personal or a client</td>
                <td className="px-6 py-4">✔</td>
                <td className="px-6 py-4">✔</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 5: License Conditions */}
        <h3 className="text-xl font-bold mb-3 text-gray-800">Single License</h3>
        <ul className="list-decimal list-inside mb-8 text-gray-700 leading-relaxed">
          <li>
            Create one End Product for a client, then transfer the license.
          </li>
          <li>Make unlimited copies as long as distributed for free.</li>
          <li>Modify the item and make derivative works under same license.</li>
          <li>
            You cannot sell, resell, distribute source, or allow customization
            by others.
          </li>
        </ul>

        <h3 className="text-xl font-bold mb-3 text-gray-800">
          Multiple License
        </h3>
        <ul className="list-decimal list-inside mb-8 text-gray-700 leading-relaxed">
          <li>
            Create multiple End Products for clients, and transfer licenses.
          </li>
          <li>Make unlimited free-distributed copies.</li>
          <li>Make derivative works under the same terms.</li>
          <li>You cannot resell or redistribute source files.</li>
        </ul>

        <h3 className="text-xl font-bold mb-3 text-gray-800">Definitions:</h3>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Item is the purchased digital work.</li>
          <li>End Product is a customized implementation of the Item.</li>
          <li>End User is a user of the End Product.</li>
          <li>Client is a contracted employer of the license holder.</li>
        </ul>
      </div>

      {/* Right Sidebar */}
      <div className="lg:w-1/3 lg:sticky lg:top-8 self-start flex flex-col gap-6">
        <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">
            Working Contact Form with Ajax & PHP
          </h3>
          <p className="mb-4 text-sm">
            Get a functional and working contact form with Ajax & PHP in a few
            minutes. Just copy and paste the files, add a little code and you’re
            done.
          </p>
          <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 font-semibold text-sm">
            DOWNLOAD NOW
          </button>
        </div>

        <div className="bg-black text-white p-6 rounded-lg shadow-md text-center">
          <p className="text-xl font-bold mb-1">BUNDLE OFFER</p>
          <p className="text-5xl font-extrabold text-white mb-4">60% OFF</p>
          <p className="mb-4 text-sm">
            One Bundle
            <br />4 HTML5 Templates
          </p>
          <button className="w-full bg-white text-black py-3 rounded-md font-semibold text-sm hover:bg-gray-200">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateLicense;
