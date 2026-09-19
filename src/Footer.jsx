import React from "react";
import { Link } from "react-router-dom";

/**
 * BigFoot Drafting — Footer
 * Placeholder contact details and links are marked clearly below —
 * swap them for real values before launch. Styles live in src/index.css.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bfd-footer">
      <div className="bfd-footer__inner">
        <div>
          <div className="bfd-footer__brand">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5c2.5 0 4.5 1.1 4.5 3.2 0 1.3-.5 2.6-.3 4.1.2 1.7 1.1 3.2 1.3 5.1.3 2.7-1.5 5-4.2 5.2h-1.6c-2.7-.2-4.5-2.5-4.2-5.2.2-1.9 1.1-3.4 1.3-5.1.2-1.5-.3-2.8-.3-4.1C7.5 6.1 9.5 5 12 5z" />
              <circle cx="7.3" cy="4.6" r="1" />
              <circle cx="9.1" cy="3.1" r="1.15" />
              <circle cx="11.3" cy="2.3" r="1.3" />
              <circle cx="13.5" cy="2.2" r="1.45" />
              <circle cx="15.7" cy="3" r="1.75" />
            </svg>
            <span>BigFoot Drafting</span>
          </div>
          <p className="bfd-footer__tagline">
            Residential drafting and home design for remodels, additions,
            and permit-ready plans in Vancouver, WA and Clark County.
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Drafting</Link></li>
            <li><Link to="/as-built">As-Built Drawings</Link></li>
            <li><Link to="/permits">Permit Services</Link></li>
            <li><Link to="/code-violations">Code Violation Response</Link></li>
            <li><Link to="/stock-plans">Stock Plans</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:Nick@bigfootdrafting.com">Nick@bigfootdrafting.com</a></li>
            <li><a href="tel:+13605242793">360-524-2793</a></li>
            <li>Serving Vancouver, Camas, Battle Ground, Ridgefield, Washougal, La Center, Brush Prairie & Clark County, WA</li>
          </ul>
        </div>
      </div>

      <div className="bfd-footer__bottom">
        <div className="bfd-footer__bottom-inner">
          <p>&copy; {year} BigFoot Drafting. All rights reserved.</p>
          <p>Licensed drafting services — Vancouver, WA & Clark County</p>
        </div>
      </div>
    </footer>
  );
}
