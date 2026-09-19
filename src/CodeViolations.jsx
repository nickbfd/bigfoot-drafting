import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

/**
 * BigFoot Drafting — Code Violation Response page
 * Reuses the .bfd-services styles (same layout pattern as the other
 * service pages). Styles live in src/index.css.
 */
const STEPS = [
  {
    title: "Field Measure",
    description:
      "In-person documentation of existing conditions, including the unpermitted work in question.",
  },
  {
    title: "Compliant Plans",
    description:
      "Drafting plans that bring the work up to code, coordinating with a structural engineer where seismic or wind loads apply.",
  },
  {
    title: "Submission & Tracking",
    description:
      "In Southwest Washington, we submit and track the permit application directly. Outside that area, we prepare a complete plan set ready for you or your permit contact to submit.",
  },
];

export default function CodeViolations() {
  return (
    <section className="bfd-services">
      <div className="bfd-services__inner">
        <Seo
          title="Code Violation Response"
          description="Fast-tracked plans for unpermitted work flagged by your jurisdiction — get compliant before fees add up."
        />
        <span className="bfd-hero__tag">Fast Turnaround</span>
        <h1>Code Violation Response</h1>
        <p className="bfd-services__lead">
          Got a notice for unpermitted work? We fast-track your plans so you
          can get compliant and close out the violation before fees add up.
        </p>

        <div className="bfd-services__engineering">
          <h2>Why Speed Matters</h2>
          <p>
            Many jurisdictions apply escalating fines the longer a violation
            stays open. Getting a compliant plan set submitted quickly is
            one of the most direct ways to limit what you end up owing —
            which is why we prioritize and fast-track these projects.
          </p>
        </div>

        <h2 className="bfd-services__subhead">How It Works</h2>
        <div className="bfd-services__list">
          {STEPS.map((item) => (
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
