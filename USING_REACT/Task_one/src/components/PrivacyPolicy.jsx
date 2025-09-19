import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from
        htmlcodex.com (the “Site”).
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Personal Information We Collect
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you visit the Site, we automatically collect certain information
        about your device, including information about your web browser, IP
        address, time zone, and some of the cookies that are installed on your
        device. Additionally, as you browse the Site, we collect information
        about the individual web pages or products that you view, what websites
        or search terms referred you to the Site, and information about how you
        interact with the Site. We refer to this automatically-collected
        information as “Device Information.”
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        We collect Device Information using the following technologies:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
        <li>
          “Cookies” are data files that are placed on your device or computer
          and often include an anonymous unique identifier. For more information
          about cookies, and how to disable cookies, visit
          http://www.allaboutcookies.org.
        </li>
        <li>
          “Log files” track actions occurring on the Site, and collect data
          including your IP address, browser type, Internet service provider,
          referring/exit pages, and date/time stamps.
        </li>
        <li>
          “Web beacons,” “tags,” and “pixels” are electronic files used to
          record information about how you browse the Site.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        How We Use Your Personal Information
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        We use the Device Information that we collect to help us screen for
        potential risk and fraud (in particular, your IP address), and more
        generally to improve and optimize our Site (for example, by generating
        analytics about how our customers browse and interact with the Site, and
        to assess the success of our marketing and advertising campaigns).
      </p>
      <p className="text-gray-700 leading-relaxed">
        We may share your Personal Information to comply with applicable laws
        and regulations, to respond to a subpoena, search warrant or other
        lawful request for information we receive, or to otherwise protect our
        rights.
      </p>
      {/* Add more sections as per standard privacy policy */}
    </div>
  );
};

export default PrivacyPolicy;
