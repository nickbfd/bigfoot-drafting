import React from "react";
import { Link } from "react-router-dom";
import PlanSheetPreview from "./PlanSheetPreview";

/**
 * BigFoot Drafting — Hero Section
 * Styles for this component live in src/index.css (classes prefixed bfd-hero).
 */
export default function Hero() {
  return (
    <section className="bfd-hero">
      {/* Topographic contour background */}
      <svg
        className="bfd-hero__topo"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M -50 ${120 + i * 90} C 200 ${40 + i * 90}, 400 ${200 + i * 90}, 650 ${90 + i * 90} S 1100 ${180 + i * 90}, 1300 ${70 + i * 90}`}
            fill="none"
            stroke="#4C6B54"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <div className="bfd-hero__inner">
        <div className="bfd-hero__main">
          <div className="bfd-hero__brand">
            {/* Footprint mark — left foot */}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5c2.5 0 4.5 1.1 4.5 3.2 0 1.3-.5 2.6-.3 4.1.2 1.7 1.1 3.2 1.3 5.1.3 2.7-1.5 5-4.2 5.2h-1.6c-2.7-.2-4.5-2.5-4.2-5.2.2-1.9 1.1-3.4 1.3-5.1.2-1.5-.3-2.8-.3-4.1C7.5 6.1 9.5 5 12 5z" />
              <circle cx="7.3" cy="4.6" r="1" />
              <circle cx="9.1" cy="3.1" r="1.15" />
              <circle cx="11.3" cy="2.3" r="1.3" />
              <circle cx="13.5" cy="2.2" r="1.45" />
              <circle cx="15.7" cy="3" r="1.75" />
            </svg>
            <span>BigFoot Drafting</span>
          </div>

          <div className="bfd-hero__content">
            <h1>Drafted for the Northwest</h1>
            <p className="bfd-hero__subhead">
              Residential drafting for remodels and additions — clear plans,
              permit-ready, built to fit how the Northwest actually lives.
            </p>

            <div className="bfd-hero__cta-row">
              <div className="bfd-hero__trail" aria-hidden="true">
                <svg viewBox="0 0 70 28" fill="#B9682F">
                  <ellipse cx="8" cy="20" rx="4" ry="5.5" opacity="0.5" />
                  <ellipse cx="26" cy="10" rx="4.4" ry="6" opacity="0.7" />
                  <ellipse cx="46" cy="17" rx="4.8" ry="6.5" opacity="0.85" />
                </svg>
              </div>
              <Link className="bfd-hero__cta" to="/contact">Start Your Project</Link>
            </div>
          </div>
        </div>

        <div className="bfd-hero__visual">
          <PlanSheetPreview />
        </div>
      </div>

      <div className="bfd-hero__services">
        <div className="bfd-hero__service bfd-hero__service--primary">
          <h3>Drafting</h3>
          <p>
            Full construction drawings for remodels, additions, and new
            single-family layouts.
          </p>
        </div>
        <div className="bfd-hero__service">
          <h3>As-Built Drawings</h3>
          <p>Accurate documentation of your home as it stands today.</p>
        </div>
        <div className="bfd-hero__service">
          <h3>Permit Services</h3>
          <p>Plans prepared and submitted to meet your local jurisdiction.</p>
        </div>
        <div className="bfd-hero__service">
          <span className="bfd-hero__tag">Fast Turnaround</span>
          <h3>Code Violation Response</h3>
          <p>
            Fast plans for unpermitted work flagged by your jurisdiction —
            get compliant before fees add up.
          </p>
        </div>
      </div>
    </section>
  );
}
