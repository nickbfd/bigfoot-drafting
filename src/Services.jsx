import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

/**
 * BigFoot Drafting — Services page (Drafting)
 * Styles live in src/index.css (classes prefixed bfd-services).
 */
const DRAWING_TYPES = [
  {
    title: "Floor Plans",
    description:
      "Room layouts, dimensions, wall locations, and door and window placement for both existing and proposed conditions.",
  },
  {
    title: "Elevations",
    description:
      "Exterior views showing height, materials, and finishes exactly as jurisdictions expect for permit review.",
  },
  {
    title: "Sections",
    description:
      "Cross-sections showing how the structure is built vertically — framing, insulation, and finish assemblies from foundation to roof.",
  },
  {
    title: "Foundation Plans",
    description:
      "Footing and foundation wall layout, sized to match your framing plan and site conditions.",
  },
  {
    title: "Floor Framing Plans",
    description:
      "Joist and beam layouts with member sizes and spans called out for each floor level.",
  },
];

export default function Services() {
  return (
    <section className="bfd-services">
      <div className="bfd-services__inner">
        <Seo
          title="Drafting Services in Vancouver, WA & Clark County"
          description="Full construction drawing sets — floor plans, elevations, sections, foundation and framing plans — for residential remodels, additions, and home design in Vancouver, WA and Clark County."
        />
        <h1>Drafting Services</h1>
        <p className="bfd-services__lead">
          Full construction drawing sets for remodels, additions, and
          single-family residential projects — prepared to meet what your
          local jurisdiction actually asks for at permit review.
        </p>

        <h2 className="bfd-services__subhead">What's in Your Plan Set</h2>
        <div className="bfd-services__list">
          {DRAWING_TYPES.map((item) => (
            <div className="bfd-services__item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bfd-services__engineering">
          <h2>Structural Engineering</h2>
          <p>
            For straightforward gravity loads, we provide beam sizing and
            calculations as part of your plan set. Because we're in an
            active seismic zone, lateral engineering — wind and earthquake —
            requires a licensed structural engineer's stamp in most Pacific
            Northwest jurisdictions, regardless of who prepares the base
            drawings. We work with a network of licensed structural
            engineers and coordinate that piece for you, so your plan set
            arrives at the building department complete and ready for
            review.
          </p>
        </div>

        <Link className="bfd-services__cta" to="/contact">
          Start Your Project
        </Link>
      </div>
    </section>
  );
}
