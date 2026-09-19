import React from "react";
import Seo from "./Seo";

/**
 * BigFoot Drafting — Placeholder page section
 * A quick, on-brand stand-in for pages we haven't built out in detail yet
 * (As-Built, Permits, Code Violations, Stock Plans). Swap the content for
 * real page layouts as each one gets fleshed out. Styles live in
 * src/index.css.
 */
export default function PlaceholderPage({ title, description }) {
  return (
    <section className="bfd-placeholder">
      <div className="bfd-placeholder__inner">
        <Seo title={title} description={description} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
