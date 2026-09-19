import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/**
 * BigFoot Drafting — Plan Sheet Preview
 * A clickable thumbnail (3:2 ratio, matching a 36x24 sheet) that opens a
 * larger lightbox view on click. Currently a placeholder — swap in a real
 * image or PDF where marked below once you have a sample sheet ready.
 * Styles live in src/index.css (classes prefixed bfd-sheet-).
 *
 * Accessibility: focus moves to the close button when the modal opens,
 * Tab/Shift+Tab is trapped within the modal while it's open, and focus
 * returns to the trigger button when it closes.
 */
export default function PlanSheetPreview() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const modalRef = useRef(null);
  const closeRef = useRef(null);

  function close() {
    setOpen(false);
    // Return focus to the button that opened the modal.
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;

    // Move focus into the modal as soon as it opens.
    closeRef.current?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        close();
        return;
      }

      if (e.key !== "Tab" || !modalRef.current) return;

      // Trap Tab/Shift+Tab within the modal's focusable elements.
      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className="bfd-sheet-preview"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        {
          <img src="public/splans/samplePlan.png" className="bfd-sheet-preview__img" alt="Sample floor plan sheet showing room layout and dimensions"/>
        }
        {/* <svg className="bfd-sheet-preview__icon" viewBox="0 0 120 80" aria-hidden="true">
          <rect x="4" y="4" width="112" height="72" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="4" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="1.5" />
          <line x1="70" y1="4" x2="70" y2="76" stroke="currentColor" strokeWidth="1.5" />
          <line x1="70" y1="52" x2="116" y2="52" stroke="currentColor" strokeWidth="1.5" />
          <line x1="20" y1="4" x2="20" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </svg> */}
        <span className="bfd-sheet-preview__label">Sample Plan Sheet</span>
        <span className="bfd-sheet-preview__hint">Click to enlarge</span>
      </button>

      {open &&
        createPortal(
          <div
            className="bfd-sheet-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Sample plan sheet, enlarged view"
            onClick={close}
            ref={modalRef}
          >
            <div
              className="bfd-sheet-modal__content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                ref={closeRef}
                className="bfd-sheet-modal__close"
                onClick={close}
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </button>

              {
                // TODO: Replace with your real sheet at full size.
                <iframe src="public/plans/SamplePlan.pdf" title="Sample plan sheet" className="bfd-sheet-modal__pdf" />
              }
              {/* <svg className="bfd-sheet-modal__icon" viewBox="0 0 120 80" aria-hidden="true">
                <rect x="4" y="4" width="112" height="72" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="4" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="70" y1="4" x2="70" y2="76" stroke="currentColor" strokeWidth="1" />
                <line x1="70" y1="52" x2="116" y2="52" stroke="currentColor" strokeWidth="1" />
                <line x1="20" y1="4" x2="20" y2="40" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
              </svg> */}
              <p className="bfd-sheet-modal__caption">Sample plan sheet — placeholder</p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
