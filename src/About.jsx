import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

/**
 * BigFoot Drafting — About page
 * Reuses the .bfd-services styles (same layout pattern as the service
 * pages). Styles live in src/index.css.
 */
const STATS = [
  {
    title: "10+ Years",
    description:
      "Drafting experience across custom remodels, additions, and production work.",
  },
  {
    title: "Hundreds of Projects",
    description:
      "Delivered for individual homeowners and larger production builders alike.",
  },
  {
    title: "Custom & Production",
    description:
      "Comfortable moving between one-off custom homes and repeatable builder plan sets.",
  },
];

export default function About() {
  return (
    <section className="bfd-services">
      <div className="bfd-services__inner">
        <Seo
          title="About BigFoot Drafting | Vancouver, WA"
          description="Meet Nick, the drafter behind BigFoot Drafting — 10+ years creating custom and production plan sets for homeowners and builders in Vancouver, WA and Clark County."
        />
        <h1>About BigFoot Drafting</h1>
        <p className="bfd-services__lead">
          I'm Nick, the drafter behind BigFoot Drafting. For over 10 years,
          I've worked with homeowners and contractors — from one-off custom
          remodels to production plans for larger builders — creating
          complete, permit-ready plan sets for Vancouver, WA and Clark
          County.
        </p>

        <div className="bfd-services__list">
          {STATS.map((item) => (
            <div className="bfd-services__item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bfd-services__engineering">
          <h2>Why BigFoot</h2>
          <p>
            The name comes from wanting the business to feel rooted in the
            Pacific Northwest, and from wanting to make a big impact on the
            drafting and permitting experience here in Vancouver, WA and
            Clark County — plans that are accurate, thorough, and built to
            get through review.
          </p>
        </div>

        <Link className="bfd-services__cta" to="/contact">
          Start Your Project
        </Link>
      </div>
    </section>
  );
}
