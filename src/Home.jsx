import React from "react";
import Hero from "./Hero";
import Seo from "./Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Residential Drafting & Home Design in Vancouver, WA"
        description="Residential drafting and home design in Vancouver, WA and Clark County — permit-ready plans, as-built drawings, and fast code violation response for Camas, Battle Ground, Ridgefield, Washougal, La Center, and Brush Prairie."
      />
      <Hero />
    </>
  );
}
