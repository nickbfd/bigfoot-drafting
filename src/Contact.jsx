import React from "react";
import Seo from "./Seo";

/**
 * BigFoot Drafting — Contact page
 * Direct contact info (no form) for now, while the backend contact form
 * is being debugged separately. Swap back to <ContactForm /> once that's
 * sorted — the component still exists in ContactForm.jsx untouched.
 */
export default function Contact() {
  return (
    <section className="bfd-services">
      <div className="bfd-services__inner">
        <Seo
          title="Contact"
          description="Get in touch with BigFoot Drafting to start your residential drafting, permit, or code violation project."
        />
        <h1>Contact</h1>
        <p className="bfd-services__lead">
          Ready to start your project? Reach out directly — we usually
          respond within one business day.
        </p>

        <div className="bfd-services__list">
          <div className="bfd-services__item">
            <h3>Phone</h3>
            <p>
              <a href="tel:+13605242793">360-524-2793</a>
            </p>
          </div>
          <div className="bfd-services__item">
            <h3>Email</h3>
            <p>
              <a href="mailto:Nick@bigfootdrafting.com">
                Nick@bigfootdrafting.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
