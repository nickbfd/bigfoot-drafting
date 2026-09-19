import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * BigFoot Drafting — Header / Nav
 * Sticky bar with the brand mark, a Services dropdown (Drafting, As-Built,
 * Permits), top-level links for Code Violations / Stock Plans / About, and
 * a CTA to the contact page. Uses react-router Links — this must render
 * inside a <BrowserRouter> (see App.jsx). Styles live in src/index.css.
 *
 * The Services dropdown uses the simple "disclosure" pattern (a button
 * with aria-expanded revealing a plain list of links) rather than the
 * ARIA menu/menuitem roles, since those require full arrow-key navigation
 * to be correctly implemented — a plain list of links is both simpler and
 * more accurate here.
 */
const SERVICE_LINKS = [
  { label: "Drafting", href: "/services" },
  { label: "As-Built Drawings", href: "/as-built" },
  { label: "Permits", href: "/permits" },
];

const NAV_LINKS = [
  { label: "Code Violations", href: "/code-violations" },
  { label: "Stock Plans", href: "/stock-plans" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownToggleRef = useRef(null);
  const mobileToggleRef = useRef(null);

  function closeServices() {
    setServicesOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    function handleEscape(e) {
      if (e.key !== "Escape") return;

      if (servicesOpen) {
        setServicesOpen(false);
        // Return focus to the toggle so keyboard users don't lose their place.
        dropdownToggleRef.current?.focus();
      }
      if (open) {
        setOpen(false);
        mobileToggleRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [servicesOpen, open]);

  return (
    <header className="bfd-header">
      <div className="bfd-header__inner">
        <Link className="bfd-header__brand" to="/">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5c2.5 0 4.5 1.1 4.5 3.2 0 1.3-.5 2.6-.3 4.1.2 1.7 1.1 3.2 1.3 5.1.3 2.7-1.5 5-4.2 5.2h-1.6c-2.7-.2-4.5-2.5-4.2-5.2.2-1.9 1.1-3.4 1.3-5.1.2-1.5-.3-2.8-.3-4.1C7.5 6.1 9.5 5 12 5z" />
            <circle cx="7.3" cy="4.6" r="1" />
            <circle cx="9.1" cy="3.1" r="1.15" />
            <circle cx="11.3" cy="2.3" r="1.3" />
            <circle cx="13.5" cy="2.2" r="1.45" />
            <circle cx="15.7" cy="3" r="1.75" />
          </svg>
          <span>BigFoot Drafting</span>
        </Link>

        <nav className="bfd-header__nav" aria-label="Primary">
          <div className="bfd-header__dropdown-wrap" ref={dropdownRef}>
            <button
              ref={dropdownToggleRef}
              className="bfd-header__dropdown-toggle"
              aria-expanded={servicesOpen}
              aria-controls="services-dropdown-menu"
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              Services
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                id="services-dropdown-menu"
                className="bfd-header__dropdown-menu"
              >
                {SERVICE_LINKS.map((link) => (
                  <Link key={link.href} to={link.href} onClick={closeServices}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="bfd-header__cta" to="/contact">
          Start Your Project
        </Link>

        <button
          ref={mobileToggleRef}
          className="bfd-header__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <div className={`bfd-header__mobile-menu ${open ? "bfd-header__mobile-menu--open" : ""}`}>
        <span className="bfd-header__mobile-label">Services</span>
        {SERVICE_LINKS.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="bfd-header__mobile-sublink"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        {NAV_LINKS.map((link) => (
          <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}

        <Link className="bfd-header__cta" to="/contact" onClick={() => setOpen(false)}>
          Start Your Project
        </Link>
      </div>
    </header>
  );
}
