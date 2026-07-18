import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-brand">Maximilian Baron</span>
        <div className="footer-links">
          <a href="mailto:maximilianbaron05@gmx.de">Mail</a>
          <a href="tel:+491792224063">Telefon</a>
          <a href="/Lebenslauf-Baron.pdf" target="_blank" rel="noreferrer">Lebenslauf</a>
        </div>
        <span className="footer-status">
          <span className="status-dot" />
          Offen für neue Herausforderungen
        </span>
        <div className="footer-copy">© 2026 Maximilian Baron — gebaut mit React &amp; Vite.</div>
      </div>
    </footer>
  );
}
