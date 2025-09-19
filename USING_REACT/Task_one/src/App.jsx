import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter import
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import FeatureCard from "./components/FeatureCard.jsx";
import TemplateSection from "./components/TemplateSection.jsx";
import Footer from "./components/Footer.jsx";
import TemplateLicense from "./components/TemplateLicense.jsx";
import RemoveCredit from "./components/RemoveCredit.jsx";
import ContactUs from "./components/ContactUs.jsx";
import HtmlTemplates from "./components/HtmlTemplates.jsx";
import HtmlLandingPages from "./components/HtmlLandingPages.jsx";
import HtmlEmailTemplates from "./components/HtmlEmailTemplates.jsx";
import HtmlSnippets from "./components/HtmlSnippets.jsx";
import AboutUs from "./components/AboutUs.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TermsConditions from "./components/TermsConditions.jsx";
import FreeTemplates from "./components/FreeTemplates.jsx"; // Import FreeTemplates component
import TemplateDetails from "./components/TemplateDetails.jsx"; // Import TemplateDetails component
import PremiumTemplates from "./components/PremiumTemplates.jsx"; // Import the PremiumTemplates component

import allTemplatesData from "./data/templates.json";
import { FiSettings, FiCode, FiFileText } from "react-icons/fi";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPremiumTemplates, setFilteredPremiumTemplates] = useState([]);
  const [filteredPopularTemplates, setFilteredPopularTemplates] = useState([]);
  const [filteredLatestTemplates, setFilteredLatestTemplates] = useState([]);

  useEffect(() => {
    const filterTemplates = (templates, query, categoryName) => {
      if (!templates || !Array.isArray(templates)) {
        console.error(
          `App.js: ${categoryName} templates are not an array or are undefined.`
        );
        return [];
      }

      if (!query) {
        return templates;
      }

      const lowercasedQuery = query.toLowerCase();
      const filtered = templates.filter((template) => {
        if (!template || typeof template.title !== "string") {
          console.warn(
            `App.js: ${categoryName} - Skipping template due to missing or non-string title:`,
            template
          );
          return false;
        }
        const match = template.title.toLowerCase().includes(lowercasedQuery);
        return match;
      });

      return filtered;
    };

    const newFilteredPremium = filterTemplates(
      allTemplatesData.premium,
      searchQuery,
      "Premium"
    );
    const newFilteredPopular = filterTemplates(
      allTemplatesData.popular,
      searchQuery,
      "Popular"
    );
    const newFilteredLatest = filterTemplates(
      allTemplatesData.latest,
      searchQuery,
      "Latest"
    );

    setFilteredPremiumTemplates(newFilteredPremium);
    setFilteredPopularTemplates(newFilteredPopular);
    setFilteredLatestTemplates(newFilteredLatest);
  }, [searchQuery]);

  return (
    // Removed <Router> wrapper from here. It should only be in main.jsx.
    <div className="font-sans">
      <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section className="grid bg-neutral-100 grid-cols-1 md:grid-cols-3 gap-6 px-40 py-12">
                <FeatureCard
                  icon={FiSettings}
                  title="Highly Customizable"
                  description="Our HTML website templates are highly customizable and very easy to use. You can easily customize and edit as your need."
                />
                <FeatureCard
                  icon={FiCode}
                  title="Developer Friendly Code"
                  description="Our free & premium HTML templates have the best coding standards and come with clean and developer-friendly code."
                />
                <FeatureCard
                  icon={FiFileText}
                  title="Well Documented"
                  description="Our premium website templates come with detailed documentation that will get you started in no time and no hassle."
                />
              </section>
              <TemplateSection
                title="Premium Templates"
                templates={filteredPremiumTemplates}
              />
              <TemplateSection
                title="Popular Templates"
                templates={filteredPopularTemplates}
              />
              <TemplateSection
                title="Latest Templates"
                templates={filteredLatestTemplates}
              />
            </>
          }
        />

        <Route path="/free-templates" element={<FreeTemplates />} />
        <Route path="/template/:templateId" element={<TemplateDetails />} />

        <Route path="/premium-templates" element={<PremiumTemplates />} />

        <Route path="/template-license" element={<TemplateLicense />} />
        <Route path="/remove-credit" element={<RemoveCredit />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/html-templates" element={<HtmlTemplates />} />
        <Route path="/html-landing-pages" element={<HtmlLandingPages />} />
        <Route path="/html-email-templates" element={<HtmlEmailTemplates />} />
        <Route path="/html-snippets" element={<HtmlSnippets />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
