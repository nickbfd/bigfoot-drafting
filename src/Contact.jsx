import React from "react";
import ContactForm from "./ContactForm";
import Seo from "./Seo";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with BigFoot Drafting to start your residential drafting, permit, or code violation project."
      />
      <ContactForm />
    </>
  );
}
