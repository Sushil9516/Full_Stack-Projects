import React from "react";

const RemoveCredit = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-10">
      {/* Left Content */}
      <div className="lg:w-3/4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Author’s Credit Link Removal
        </h1>
        <p className="text-gray-700 mb-4 leading-relaxed">
          All of the Free HTML Templates by <strong>HTML Codex</strong> are
          licensed under a{" "}
          <a href="#" className="text-blue-600 underline">
            Creative Commons Attribution 4.0 International License
          </a>
          which means you are <strong>not allowed</strong> to remove the
          author’s credit link/attribution link/backlink (Designed by HTML
          Codex). Read more detail about our{" "}
          <a href="#" className="text-blue-600 underline">
            license
          </a>
          .
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          If you’d like to use our Free HTML Templates without the footer
          author’s credit link/backlink (Designed by HTML Codex), you can
          purchase the Credit Removal License. You{" "}
          <strong>don’t have the rights</strong> to remove the author’s credit
          link/attribution link/backlink (Designed by HTML Codex) without
          purchasing this license.
        </p>

        {/* Table */}
        <div className="overflow-x-auto shadow-md rounded-lg mb-8">
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-gray-100 text-sm font-medium text-gray-700">
              <tr>
                <th className="px-4 py-3 border-r border-gray-300">Terms</th>
                <th className="px-4 py-3 border-r border-gray-300">
                  Single Template
                </th>
                <th className="px-4 py-3">All Templates</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t">
                <td className="px-4 py-2 border-r">Number of templates</td>
                <td className="px-4 py-2 border-r">01</td>
                <td className="px-4 py-2">All templates</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 border-r">Number of end products</td>
                <td className="px-4 py-2 border-r">01</td>
                <td className="px-4 py-2">Unlimited</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 border-r">
                  Use for your personal or clients
                </td>
                <td className="px-4 py-2 border-r">✔️</td>
                <td className="px-4 py-2">✔️</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 border-r">
                  Remove author’s credit link/backlink
                </td>
                <td className="px-4 py-2 border-r">✔️</td>
                <td className="px-4 py-2">✔️</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 border-r">
                  Sell, resell, rent, lease, license, or sub-license
                </td>
                <td className="px-4 py-2 border-r">❌</td>
                <td className="px-4 py-2">❌</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* License Details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Single Template License
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Single Template License grants you an ongoing, non-exclusive,
            worldwide license to make use of our
            <strong> any single free template </strong> without the footer
            author’s credit link/attribution link/backlink.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">All Templates License</h2>
          <p className="text-gray-700 leading-relaxed">
            The All Templates License grants you an ongoing, non-exclusive,
            worldwide license to make use of our
            <strong> all free templates </strong> (all current templates + all
            templates releases for life) without the footer author’s credit
            link/attribution link/backlink.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            FREE Ajax Contact Form – SAVE $13
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <a href="#" className="text-blue-600 underline">
              Ajax and PHP contact form
            </a>{" "}
            is used to send contact information to the back end without page
            refresh. Get a FREE full functional Ajax and PHP contact form with
            your purchase and
            <strong> SAVE $13</strong>.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">
            6 Months Premium Support
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Need any support or have any query? No worries! We take seriously
            every issue that is reported to us, and we try our best to solve
            each one as quickly as possible. Please feel free to contact us.
          </p>
          <p className="text-sm text-gray-600">
            Note: Premium support includes only bugs fixing and installation
            issues. Template customization or adding sections is not included in
            the premium support.
            <br />
            If you have any query, please feel free to{" "}
            <a href="#" className="text-blue-600 underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>

      {/* Right Sticky Card */}
      <div className="lg:w-1/4">
        <div className="sticky top-24 bg-white shadow-lg border rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Author’s Credit Link Removal Licenses
          </h2>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
            <li>✔️ Future updates</li>
            <li>✔️ Remove author’s credit</li>
            <li>
              ✔️ <strong>FREE Ajax & PHP contact form</strong>
            </li>
            <li>✔️ 6 months premium support</li>
          </ul>

          <div>
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="license"
                  defaultChecked
                  className="accent-blue-600"
                />
                Single Template
              </label>
              <span className="font-semibold">$19.00</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="license"
                  className="accent-blue-600"
                />
                All Templates
              </label>
              <span className="font-semibold">$99.00</span>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold mt-4">
            PURCHASE NOW
          </button>

          <a
            href="#"
            className="text-blue-600 underline text-sm block text-center"
          >
            View License Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default RemoveCredit;
