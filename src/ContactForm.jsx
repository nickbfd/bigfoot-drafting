import React, { useState } from "react";

/**
 * BigFoot Drafting — Contact Form
 * POSTs to /api/contact (see server.js). Update API_URL if your Express
 * server runs on a different origin during development. Styles live in
 * src/index.css.
 */
const API_URL = "/api/contact";

const PROJECT_TYPES = [
  "Remodel / Addition",
  "As-Built Drawings",
  "Permit Services",
  "Code Violation Response",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    message: "",
    company: "", // honeypot — real users never see or fill this
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.company) {
      // Honeypot tripped — silently pretend success, don't hit the API.
      setStatus("success");
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and a short message.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: PROJECT_TYPES[0],
        message: "",
        company: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section className="bfd-contact">
      <div className="bfd-contact__inner">
        <h2>Start Your Project</h2>
        <p className="bfd-contact__lead">
          Tell us a bit about your project and we'll get back to you —
          usually within one business day. If this is regarding a code
          violation notice, mention it and we'll prioritize accordingly.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot — bots tend to fill every field they find */}
          <div className="bfd-contact__hp" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <div className="bfd-contact__row">
            <div className="bfd-contact__field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="bfd-contact__field bfd-contact__field--optional">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(555) 555-5555"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="bfd-contact__field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="bfd-contact__field">
            <label htmlFor="projectType">Project Type</label>
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
            >
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="bfd-contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project, timeline, and jurisdiction."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bfd-contact__submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="bfd-contact__status bfd-contact__status--success">
              Thanks — your message is on its way. We'll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="bfd-contact__status bfd-contact__status--error">
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
