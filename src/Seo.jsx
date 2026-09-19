import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

/**
 * BigFoot Drafting — Per-page SEO tags
 *
 * SETUP
 *   npm install react-helmet-async
 *
 * Drop <Seo title="..." description="..." /> near the top of any page
 * component. It reads the current route automatically, so you don't need
 * to pass a path.
 *
 * TODO: Replace SITE_URL below with your real domain once you have one.
 * TODO: Once you have a real Open Graph image (1200x630px works best),
 * add it to /public and uncomment the og:image / twitter:image lines.
 */
const SITE_NAME = "BigFoot Drafting";
const SITE_URL = "https://www.bigfootdrafting.com"; // TODO: replace with real domain

export default function Seo({ title, description }) {
  const location = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph (social link previews) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {/* <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} /> */}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} /> */}
    </Helmet>
  );
}
