import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import AsBuilt from "./AsBuilt";
import Permits from "./Permits";
import CodeViolations from "./CodeViolations";
import About from "./About";
import PlaceholderPage from "./PlaceholderPage";

/**
 * BigFoot Drafting — App routes
 *
 * SETUP
 *   npm install react-router-dom
 *
 * Each route currently not fully built (As-Built, Permits, Code Violations,
 * Stock Plans) renders a lightweight PlaceholderPage so the nav/footer links
 * work end-to-end today. Swap those in for real page components as each
 * gets designed — the routing structure itself won't need to change.
 */
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/as-built" element={<AsBuilt />} />
            <Route path="/permits" element={<Permits />} />
            <Route path="/code-violations" element={<CodeViolations />} />
            <Route
              path="/stock-plans"
              element={
                <PlaceholderPage
                  title="Stock Plans"
                  description="Our library of ready-made residential plans is coming soon."
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
