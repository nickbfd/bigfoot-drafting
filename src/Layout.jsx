import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StructuredData from "./StructuredData";

/**
 * BigFoot Drafting — Shared layout
 * Wraps every route with the Header and Footer so they don't need to be
 * repeated on each page. The matched route's content renders via <Outlet />.
 * StructuredData renders the site-wide JSON-LD once here rather than
 * per-page.
 */
export default function Layout() {
  return (
    <>
      <a href="#main-content" className="bfd-skip-link">
        Skip to main content
      </a>
      <StructuredData />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
