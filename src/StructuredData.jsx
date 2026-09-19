import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * BigFoot Drafting — Structured data (JSON-LD)
 * Rendered once, site-wide, in Layout.jsx. This is what helps Google
 * understand "this is a local drafting business serving Vancouver WA,
 * Clark County, and surrounding cities" for local search / map-pack
 * results — naming specific cities here (not just a general region) is
 * what actually helps for searches like "Vancouver WA drafting" or
 * "Clark County home design".
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BigFoot Drafting",
    description:
      "Residential drafting and home design services for remodels, additions, as-built drawings, permit services, and code violation response in Vancouver, WA and Clark County.",
    url: "https://www.bigfootdrafting.com/", // TODO: replace with real domain
    email: "Nick@bigfootdrafting.com",
    telephone: "+1-360-524-2793",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Clark County, WA" },
      { "@type": "City", name: "Vancouver, WA" },
      { "@type": "City", name: "Camas, WA" },
      { "@type": "City", name: "Battle Ground, WA" },
      { "@type": "City", name: "Ridgefield, WA" },
      { "@type": "City", name: "Washougal, WA" },
      { "@type": "City", name: "La Center, WA" },
      { "@type": "City", name: "Brush Prairie, WA" },
    ],
    serviceType: [
      "Residential Drafting",
      "Home Design",
      "As-Built Drawings",
      "Permit Services",
      "Code Violation Response",
    ],
    founder: {
      "@type": "Person",
      name: "Nick",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
