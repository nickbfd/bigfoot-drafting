import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * BigFoot Drafting — Structured data (JSON-LD)
 * Rendered once, site-wide, in Layout.jsx. This is what helps Google
 * understand "this is a local drafting business serving Southwest
 * Washington" for local search / map-pack results.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BigFoot Drafting",
    description:
      "Residential drafting services for remodels, additions, as-built drawings, permit services, and code violation response.",
    url: "https://www.bigfootdrafting.com/", // TODO: replace with real domain
    email: "Nick@bigfootdrafting.com",
    telephone: "+1-360-524-2793",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Southwest Washington",
    },
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
