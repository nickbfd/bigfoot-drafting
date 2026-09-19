import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * BigFoot Drafting — Structured data (JSON-LD)
 * Rendered once, site-wide, in Layout.jsx. This is what helps Google
 * understand "this is a local drafting business serving Southwest
 * Washington" for local search / map-pack results.
 *
 * ⚠️ PLACEHOLDER CONTACT INFO — email and telephone below are fake.
 * Unlike the footer, this data can surface directly in Google search
 * results. Do NOT deploy this to production until you swap in real
 * contact info, or update it the moment you have it.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BigFoot Drafting",
    description:
      "Residential drafting services for remodels, additions, as-built drawings, permit services, and code violation response.",
    url: "https://www.bigfootdrafting.com/", // TODO: replace with real domain
    email: "hello@bigfootdrafting.com", // TODO: replace with real email
    telephone: "+1-555-555-5555", // TODO: replace with real phone
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
