import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

/**
 * BigFoot Drafting — Permit Services page
 * Reuses the .bfd-services styles (same layout pattern as Services.jsx
 * and AsBuilt.jsx). Styles live in src/index.css.
 */
const INCLUDED = [
  {
    title: "Application Preparation",
    description:
      "Completing and organizing all required permit application forms for your project.",
  },
  {
    title: "Document Submission",
    description:
      "Submitting your plan set and supporting documents directly to the jurisdiction.",
  },
  {
    title: "Process Coordination",
    description:
      "Tracking your application through review and responding to jurisdiction requests on your behalf.",
  },
];

export default function Permits() {
  return (
    <section className="bfd-services">
      <div className="bfd-services__inner">
        <Seo
          title="Permit Services"
          description="Permit application preparation and submission for jurisdictions in Southwest Washington."
        />
        <h1>Permit Services</h1>
        <p className="bfd-services__lead">
          We prepare, submit, and track your permit application with your
          local jurisdiction, currently serving Southwest Washington.
        </p>

        <h2 className="bfd-services__subhead">What's Included</h2>
        <div className="bfd-services__list">
          {INCLUDED.map((item) => (
            <div className="bfd-services__item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bfd-services__engineering">
          <h2>What's Not Included</h2>
          <p>
            Permit services cover the preparation, application, and
            submission process. Permit fees charged by your jurisdiction are
            separate and paid directly by you as part of the permit
            process.
          </p>
        </div>

        <div className="bfd-services__engineering">
          <h2>Service Area</h2>
          <p>
            We currently provide permit services for jurisdictions in
            Southwest Washington.
          </p>
        </div>

        <Link className="bfd-services__cta" to="/contact">
          Start Your Project
        </Link>
      </div>
    </section>
  );
}
