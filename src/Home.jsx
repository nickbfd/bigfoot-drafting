import React from "react";
import Hero from "./Hero";
import Seo from "./Seo";

export default function Home() {
  return (
    <>
      <Seo
        title={null}
        description="Residential drafting for remodels and additions across the Pacific Northwest — permit-ready plans, as-built drawings, and fast code violation response."
      />
      <Hero />
    </>
  );
}
