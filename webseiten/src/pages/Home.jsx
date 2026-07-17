import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Tour from "../components/Tour.jsx";
import Reveal from "../components/Reveal.jsx";

const TOUR_STEPS = [
  {
    selector: "#hero-heading",
    title: "Worum es hier geht",
    text: "Statt eines einseitigen Anschreibens zeige ich hier meine Projekte im Detail — inklusive Planung, Wirtschaftlichkeit und technischer Umsetzung.",
  },
  {
    selector: "#projekte-grid",
    title: "Die Projekte",
    text: "Jede Karte führt auf eine eigene, ausführliche Unterseite im Doku-Stil — mit Architektur, Code-Beispielen, Zahlen und Ergebnissen.",
  },
  {
    selector: "#ueber-mich-heading",
    title: "Werdegang & Kompetenzen",
    text: "Hier findest du kompakt meinen Bildungsweg und die Fähigkeiten, die in beiden Projekten stecken — von Projektplanung bis Go & Flutter.",
  },
  {
    selector: "#kontakt-box",
    title: "Kontakt",
    text: "Und hier erreichst du mich direkt — per Mail oder mit dem Lebenslauf zum Download.",
  },
];

export default function Home() {
  const tourRef = useRef(null);

  return (
    <>
      <Tour ref={tourRef} steps={TOUR_STEPS} />

      <section className="hero" id="hero">
        <span className="blob blob-a" aria-hidden="true" />
        <span className="blob blob-b" aria-hidden="true" />
        <span className="blob blob-c" aria-hidden="true" />
        <div className="hero-inner">
          <div>
            <span className="eyebrow">Fachinformatiker für Anwendungsentwicklung</span>
            <h1 id="hero-heading">
              Maximilian Baron —<br />
              <span className="accent-text">IT-Projekte, die halten was sie versprechen.</span>
            </h1>
            <p className="hero-lede">
              Ich plane, baue und dokumentiere IT-Projekte — vom Anforderungsgespräch bis zur
              Wirtschaftlichkeitsrechnung. Diese Seite ersetzt kein Anschreiben, sondern zeigt, wie ich tatsächlich
              arbeite.
            </p>
            <div className="hero-actions">
              <Link to="/#projekte" className="btn btn-primary">
                Projekte ansehen
              </Link>
              <button className="btn btn-outline" onClick={() => tourRef.current?.start()}>
                ▶ Tour starten
              </button>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>IHK-Abschlussprojekt</dt>
                <dd>79 / 100 Punkte</dd>
              </div>
              <div>
                <dt>Ausbildung</dt>
                <dd>IT-Systemhaus der Bundesagentur für Arbeit, 2022–2025</dd>
              </div>
              <div>
                <dt>Aktuell</dt>
                <dd>Service &amp; Kundenkontakt, McDonald's Deutschland</dd>
              </div>
            </dl>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              <div className="hero-photo">
                {/* Platzhalter — echtes Foto folgt, dann hier <img src="/profile.jpg"> einsetzen */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <circle cx="12" cy="8.2" r="3.6" />
                  <path d="M4.5 20c1.2-4 4-6 7.5-6s6.3 2 7.5 6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <span className="hero-photo-note">Foto folgt</span>
            <div className="hero-photo-badge">
              <span className="status-dot" />
              Offen für neue Herausforderungen
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projekte">
        <Reveal className="section-head">
          <p className="kicker">Projekte</p>
          <h2>Vier Projekte, im Detail dokumentiert</h2>
          <p>
            Zwei Softwareprojekte, dazu diese Webseite selbst und ein Blick auf mich als fortlaufendes
            „Projekt in Entwicklung".
          </p>
        </Reveal>

        <div className="project-grid" id="projekte-grid">
          <Reveal as={Link} to="/projekte/backstage-validator" className="project-card" delay={0}>
            <div className="project-banner banner-backstage">
              <span className="banner-badge">IHK · 79 Punkte</span>
              <div className="mock-yaml">
                <span className="k">kind:</span> Component
                <span className="k">spec.owner:</span> team-k35
                <span className="k">spec.lifecycle:</span> production
              </div>
              <span className="banner-icon">⚙️</span>
            </div>
            <div className="project-body">
              <h3>Backstage Softwarekatalog — Validierungssystem</h3>
              <p>Go-Microservice, der 120+ Entwicklerteams automatisiert vor fehlerhaften Katalog-Einträgen warnt.</p>
              <div className="tag-row">
                <span className="tag">Go</span>
                <span className="tag">Backend</span>
                <span className="tag">IHK-Projekt</span>
              </div>
              <span className="project-link">Case Study lesen <span className="arrow">→</span></span>
            </div>
          </Reveal>

          <Reveal as={Link} to="/projekte/tagebuch-app" className="project-card" delay={80}>
            <div className="project-banner banner-tagebuch">
              <span className="banner-badge">Eigenprojekt</span>
              <div className="mock-phone">
                <div className="mock-phone-row" style={{ width: "70%" }} />
                <div className="mock-phone-row accent" style={{ width: "45%" }} />
                <div className="mock-phone-row" style={{ width: "60%" }} />
              </div>
              <span className="banner-icon">📓</span>
            </div>
            <div className="project-body">
              <h3>Tagebuch App</h3>
              <p>Offline-First Flutter-App mit Tagebuch, Gym-Tracking und Küchenverwaltung — alle Daten lokal.</p>
              <div className="tag-row">
                <span className="tag">Flutter</span>
                <span className="tag">Dart</span>
                <span className="tag">SQLite</span>
              </div>
              <span className="project-link">Case Study lesen <span className="arrow">→</span></span>
            </div>
          </Reveal>

          <Reveal as={Link} to="/projekte/diese-webseite" className="project-card" delay={140}>
            <div className="project-banner banner-webseite">
              <span className="banner-badge">Webseite</span>
              <div className="mock-browser">
                <div className="mock-browser-bar"><span /><span /><span /></div>
                <div className="mock-browser-body">
                  <div className="ln" style={{ width: "80%" }} />
                  <div className="ln" style={{ width: "55%" }} />
                  <div className="ln" style={{ width: "65%" }} />
                </div>
              </div>
              <span className="banner-icon">🧩</span>
            </div>
            <div className="project-body">
              <h3>Diese Webseite</h3>
              <p>React &amp; Vite statt Baukasten — inklusive zwei kompletter Redesigns aufgrund von Feedback.</p>
              <div className="tag-row">
                <span className="tag">React</span>
                <span className="tag">Vite</span>
                <span className="tag">Meta</span>
              </div>
              <span className="project-link">Case Study lesen <span className="arrow">→</span></span>
            </div>
          </Reveal>

          <Reveal as={Link} to="/#ueber-mich" className="project-card" delay={200}>
            <div className="project-banner banner-ich">
              <span className="banner-badge">Laufend</span>
              <div className="mock-chart">
                <span style={{ height: "30%" }} />
                <span style={{ height: "50%" }} />
                <span style={{ height: "70%" }} />
                <span style={{ height: "95%" }} />
              </div>
              <span className="banner-icon">🚀</span>
            </div>
            <div className="project-body">
              <h3>Ich — Baron</h3>
              <p>Mein wichtigstes Projekt: von der Mittelschule über die Ausbildung bis zum IHK-Projekt mit 79 Punkten.</p>
              <div className="tag-row">
                <span className="tag">Lernen</span>
                <span className="tag">Wachstum</span>
              </div>
              <span className="project-link">Werdegang ansehen <span className="arrow">→</span></span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <Reveal className="section-head center">
          <p className="kicker">Arbeitsweise</p>
          <h2>Worauf es bei mir ankommt</h2>
        </Reveal>
        <div className="expertise-grid">
          <Reveal as="div" className="expertise-card" delay={0}>
            <div className="expertise-num">01</div>
            <h4>Planung vor Code</h4>
            <p>Anforderungen, Zeitplan und Wirtschaftlichkeit zuerst klären — genau das habe ich in meinem
              IHK-Projekt vollständig durchgerechnet, bevor eine Zeile Go geschrieben wurde.</p>
          </Reveal>
          <Reveal as="div" className="expertise-card" delay={80}>
            <div className="expertise-num">02</div>
            <h4>Eigenverantwortung</h4>
            <p>Beide Projekte habe ich eigenständig von der Idee bis zur Übergabe verantwortet — inklusive
              Entscheidungen, die ich auch begründen und dokumentieren kann.</p>
          </Reveal>
          <Reveal as="div" className="expertise-card" delay={160}>
            <div className="expertise-num">03</div>
            <h4>Belastbarkeit</h4>
            <p>Trainiert im direkten Kundenkontakt bei McDonald's — Multitasking und Priorisierung unter
              Zeitdruck gehören zum Alltag.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" id="ueber-mich">
        <Reveal className="section-head">
          <p className="kicker">Über mich</p>
          <h2 id="ueber-mich-heading">Werdegang &amp; Kompetenzen</h2>
        </Reveal>
        <div className="about-grid" id="ueber-mich-content">
          <Reveal as="div" className="about-text">
            <p>
              Meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung habe ich von 09.2022 bis 07.2025 im
              IT-Systemhaus der Bundesagentur für Arbeit absolviert — im Team K35 „Technische Plattform". Seit
              08.2025 arbeite ich zusätzlich bei McDonald's Deutschland im Service- und Kundenkontakt, was
              Stressresistenz und Priorisierung unter Zeitdruck trainiert.
            </p>
            <p>
              Am meisten interessiert mich der Teil der Projektarbeit, der vor dem eigentlichen Code passiert:
              Anforderungen strukturieren, Zeit und Kosten realistisch einschätzen, Prioritäten setzen und den
              Überblick behalten — genau das habe ich in meinem IHK-Projekt mit einer vollständigen
              Wirtschaftlichkeitsanalyse belegt.
            </p>
            <div className="tag-row">
              <span className="tag">MS Office</span>
              <span className="tag">Jira &amp; Confluence</span>
              <span className="tag">Agile Methoden</span>
              <span className="tag">Go</span>
              <span className="tag">Flutter / Dart</span>
              <span className="tag">SQLite</span>
              <span className="tag">Git</span>
            </div>
          </Reveal>
          <Reveal as="ol" className="timeline-compact" delay={100}>
            <li>
              <span className="tl-date">2015–2021</span>
              <span>Robert-Bosch-Mittelschule, Mittlerer Schulabschluss</span>
            </li>
            <li>
              <span className="tl-date">2021–2022</span>
              <span>FOS II Nürnberg, Wirtschaftszweig</span>
            </li>
            <li>
              <span className="tl-date">2022–2025</span>
              <span>Ausbildung Fachinformatiker Anwendungsentwicklung, IT-Systemhaus der BA — IHK-Projekt mit 79 Punkten</span>
            </li>
            <li className="is-current">
              <span className="tl-date">seit 2025</span>
              <span>McDonald's Deutschland — Service &amp; Kundenkontakt</span>
            </li>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal as="div" className="cta-block">
          <h2>Lassen Sie uns sprechen.</h2>
          <p>Ich freue mich über jede Gelegenheit, mehr über den Umgang mit IT-Projekten in Ihrem Unternehmen zu
            erfahren — und zu zeigen, wie ich arbeite, wenn es über ein Anschreiben hinausgeht.</p>
          <div className="cta-actions">
            <a href="mailto:maximilianbaron05@gmx.de" className="btn btn-light">E-Mail schreiben</a>
            <a href="/Lebenslauf-Baron.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost-dark">
              Lebenslauf (PDF)
            </a>
          </div>
        </Reveal>
      </section>

      <section className="section" id="kontakt">
        <Reveal className="section-head">
          <p className="kicker">Kontakt</p>
          <h2>Direkt erreichbar</h2>
        </Reveal>
        <Reveal as="div" className="contact-box" id="kontakt-box">
          <ul className="contact-list">
            <li>
              <span className="contact-label">Mail</span>
              <a href="mailto:maximilianbaron05@gmx.de">maximilianbaron05@gmx.de</a>
            </li>
            <li>
              <span className="contact-label">Telefon</span>
              <a href="tel:+491792224063">+49 179 2224063</a>
            </li>
            <li>
              <span className="contact-label">Ort</span>
              <span>Bleichstraße 21, 90429 Nürnberg</span>
            </li>
          </ul>
          <div className="contact-actions">
            <a href="mailto:maximilianbaron05@gmx.de" className="btn btn-primary">
              E-Mail schreiben
            </a>
            <a href="/Lebenslauf-Baron.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
              Lebenslauf (PDF)
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
