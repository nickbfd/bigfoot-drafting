import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

/**
 * BigFoot Drafting — As-Built Drawings page
 * Reuses the .bfd-services styles (same layout pattern as Services.jsx)
 * since the two pages share the same visual template. Styles live in
 * src/index.css.
 */
const REASONS = [
  {
    title: "No plans on file",
    description:
      "Older homes were often built before jurisdictions kept digital records, or the plans on file don't match what was actually built.",
  },
  {
    title: "Starting a design",
    description:
      "Your contractor, architect, or designer needs an accurate base to design your remodel or addition against.",
  },
  {
    title: "Permit requirements",
    description:
      "Many jurisdictions require existing conditions to be documented alongside your proposed changes.",
  },
  {
    title: "Resolving unpermitted work",
    description:
      "Documenting what currently exists is often the first step in bringing unpermitted work into compliance.",
  },
];

const DRAWING_TYPES = [
  {
    title: "Floor Plans",
    description:
      "Existing room layout, wall locations, and dimensions as measured on site.",
  },
  {
    title: "Elevations",
    description:
      "Exterior views documenting the home's current height, massing, and features.",
  },
  {
    title: "Sections",
    description:
      "Vertical cross-sections showing existing floor-to-floor relationships and framing where visible or reasonably inferable from accessible areas.",
  },
];

export default function AsBuilt() {
  return (
    <section className="bfd-services">
      <div className="bfd-services__inner">
        <Seo
          title="As-Built Drawings"
          description="Accurate as-built drawings from an in-person field measure — the foundation for your remodel, addition, or permit application."
        />
        <h1>As-Built Drawings</h1>
        <p className="bfd-services__lead">
          Accurate documentation of your home as it exists today — the
          starting point for a remodel, addition, or any project that needs
          a reliable record of current conditions.
        </p>

        <h2 className="bfd-services__subhead">Why You Might Need One</h2>
        <div className="bfd-services__list">
          {REASONS.map((item) => (
            <div className="bfd-services__item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bfd-services__engineering">
          <h2>For Contractors &amp; Designers</h2>
          <p>
            If you're working on an older home, we can save you the
            fieldwork. Every as-built package starts with an in-person
            field measure — not assumptions from old plans or listing
            photos — so what you're designing against matches what's
            actually built.
          </p>
        </div>

        <h2 className="bfd-services__subhead">What's Included</h2>
        <div className="bfd-services__list">
          {DRAWING_TYPES.map((item) => (
            <div className="bfd-services__item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <Link className="bfd-services__cta" to="/contact">
          Start Your Project
        </Link>
      </div>
    </section>
  );
}
