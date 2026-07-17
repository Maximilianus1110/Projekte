import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-brand-mark">MB</span>
          Maximilian Baron
        </Link>

        <button
          className="nav-toggle"
          aria-label="Menü umschalten"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "is-open" : ""}`} onClick={() => setOpen(false)}>
          <Link to="/#projekte">Projekte</Link>
          <Link to="/#ueber-mich">Über mich</Link>
          <Link to="/#kontakt">Kontakt</Link>
          <a className="nav-cv" href="/Lebenslauf-Baron.pdf" target="_blank" rel="noreferrer">
            Lebenslauf ↓
          </a>
        </nav>
      </div>
    </header>
  );
}
