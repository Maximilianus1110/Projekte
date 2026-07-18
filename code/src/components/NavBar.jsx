import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem("theme") === "dark" ? "dark" : "light";
}

function ThemeToggle({ theme, onToggle, className = "" }) {
  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={onToggle}
      aria-label={theme === "dark" ? "Helles Design aktivieren" : "Dunkles Design aktivieren"}
      title={theme === "dark" ? "Helles Design" : "Dunkles Design"}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
          <path d="M20.2 15.2A8.6 8.6 0 019 3.8a.7.7 0 00-.9-.8A9.3 9.3 0 1021 16.1a.7.7 0 00-.8-.9z" />
        </svg>
      )}
    </button>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

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
          <Link to="/ueber-mich">Über mich</Link>
          <Link to="/#kontakt">Kontakt</Link>
          <a className="nav-cv nav-cv-mobile" href="/Lebenslauf-Baron.pdf" target="_blank" rel="noreferrer">
            Lebenslauf ↓
          </a>
          <ThemeToggle theme={theme} onToggle={toggleTheme} className="theme-toggle-mobile" />
        </nav>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a className="nav-cv" href="/Lebenslauf-Baron.pdf" target="_blank" rel="noreferrer">
            Lebenslauf ↓
          </a>
        </div>
      </div>
    </header>
  );
}
