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
    selector: "#ueber-mich-heading",
    title: "Wer ich bin",
    text: "Kurze Vorstellung, meine Motivation und mein Werdegang — mit allen Stationen von der Mittelschule bis zum IHK-Abschluss.",
  },
  {
    selector: "#projekte-grid",
    title: "Die Projekte",
    text: "Jede Karte führt auf eine eigene, ausführliche Unterseite im Doku-Stil — mit Architektur, Code-Beispielen, Zahlen und Ergebnissen.",
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

      <section className="hero hero-bold" id="hero">
        <div className="hero-bg" aria-hidden="true">
          <span className="hero-grid" />
          <span className="hero-sheen" />
          <span className="hero-blob hb-a" />
          <span className="hero-blob hb-b" />
          <span className="hero-blob hb-c" />
        </div>
        <div className="hero-inner hero-inner-center">
          <h1 id="hero-heading" className="hero-name">Maximilian Baron</h1>

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

          <div className="hero-actions">
            <Link to="/#projekte" className="btn btn-primary">
              Projekte ansehen
            </Link>
            <button className="btn btn-outline" onClick={() => tourRef.current?.start()}>
              ▶ Tour starten
            </button>
          </div>
        </div>
      </section>

      <section className="section" id="ueber-mich">
        <Reveal className="section-head">
          <p className="kicker">Über mich</p>
          <h2 id="ueber-mich-heading">Wer ich bin</h2>
          <span className="eyebrow">Fachinformatiker für Anwendungsentwicklung</span>
        </Reveal>

        <div className="about-grid" id="ueber-mich-content">
          <Reveal as="div" className="about-text">
            <p className="about-lede">
              Ich bin Maximilian, 19 Jahre alt und in Nürnberg zu Hause. Nach der Mittelschule und der FOS habe ich
              mich bewusst für den praktischen Weg entschieden — die Ausbildung zum Fachinformatiker im
              IT-Systemhaus der Bundesagentur für Arbeit, statt erst Jahre zu studieren, bevor ich echte Projekte
              anfasse.
            </p>
            <p className="about-motivation">
              Was mich antreibt: Ich will verstehen, <em>warum</em> ich etwas tue, nicht nur <em>wie</em>. Deshalb
              reizt mich an der IT weniger die einzelne Zeile Code als der Teil davor — Anforderungen, Zahlen,
              Verantwortung. Dass meine Ausbildung „nur" der praktische Weg war, sehe ich als Ansporn: Ich hole mir
              das große Bild selbst, zum Beispiel indem ich Projekte wie diese Webseite komplett eigenständig
              plane, baue und dokumentiere.
            </p>
            <Link to="/ueber-mich" className="project-link" style={{ marginTop: 8 }}>
              Mehr über mich <span className="arrow">→</span>
            </Link>
          </Reveal>
          <Reveal as="div" className="about-timeline-col" delay={100}>
            <h3 className="about-subhead">Werdegang</h3>
            <ol className="timeline-compact">
              <li>
                <span className="tl-date">2015–2021</span>
                <div className="tl-body">
                  <span className="tl-title">Robert-Bosch-Mittelschule, Mittlerer Schulabschluss</span>
                  <div className="tl-detail">
                    <span>Qualifizierender Mittelschulabschluss (07.2020)</span>
                    <span>Mittlerer Schulabschluss (07.2021)</span>
                  </div>
                </div>
              </li>
              <li>
                <span className="tl-date">2021–2022</span>
                <div className="tl-body">
                  <span className="tl-title">FOS II Nürnberg, Wirtschaftszweig</span>
                  <div className="tl-detail">
                    <span>Vertiefung wirtschaftlicher Grundlagen als Zwischenschritt vor der Ausbildung.</span>
                  </div>
                </div>
              </li>
              <li>
                <span className="tl-date">2022–2025</span>
                <div className="tl-body">
                  <span className="tl-title">Ausbildung Fachinformatiker Anwendungsentwicklung, IT-Systemhaus der BA</span>
                  <div className="tl-detail">
                    <span>Schwerpunkte: Projektplanung, Anforderungsanalyse, Jira &amp; Agile Methoden, User-Support</span>
                  </div>
                </div>
              </li>
              <li>
                <span className="tl-date">Sommer 2025</span>
                <div className="tl-body">
                  <span className="tl-title">IHK-Abschlussprüfung</span>
                  <div className="tl-detail">
                    <span>Prüfungsteil „Planen und Umsetzen eines Softwareprojektes" — 79/100 Punkte</span>
                  </div>
                </div>
              </li>
              <li className="is-current">
                <span className="tl-date">seit 08.2025</span>
                <div className="tl-body">
                  <span className="tl-title">McDonald's Deutschland — Service &amp; Kundenkontakt</span>
                  <div className="tl-detail">
                    <span>Fokus: Training von Stressresistenz und Multitasking in Hochlastphasen.</span>
                  </div>
                </div>
              </li>
            </ol>
          </Reveal>
        </div>

        <Reveal as="dl" className="about-facts-wide">
          <div>
            <dt>IHK-Prüfung</dt>
            <dd>Planen und Umsetzen eines Softwareprojektes — 79/100 Pkt.</dd>
          </div>
          <div>
            <dt>Ausbildung</dt>
            <dd>IT-Systemhaus der Bundesagentur für Arbeit, 2022–2025</dd>
          </div>
          <div>
            <dt>Aktuell</dt>
            <dd>Service &amp; Kundenkontakt, McDonald's Deutschland</dd>
          </div>
        </Reveal>

        <Reveal as="p" className="about-outro" delay={120}>
          Um dir einen besseren Einblick in meine Arbeitsweise und mein Können zu geben, zeige ich im Folgenden
          vier Projekte im Detail — von der ersten Anforderung bis zum fertigen Ergebnis.
        </Reveal>
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

          <Reveal as={Link} to="/ueber-mich" className="project-card" delay={200}>
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
          <p className="kicker">Mein Board</p>
          <h2>Wie ein Sprint bei mir aussieht</h2>
        </Reveal>
        <Reveal as="div" className="board">
          <div className="board-header">
            <span className="board-dot dot-red" />
            <span className="board-dot dot-amber" />
            <span className="board-dot dot-green" />
            <span className="board-title">baron / wie-ich-arbeite</span>
          </div>
          <div className="board-columns">
            <div className="board-col">
              <div className="board-col-head">To do <span className="board-count">1</span></div>
              <div className="board-card">
                <span className="board-card-tag tag-blue">Planung</span>
                <h4>Planung vor Code</h4>
                <p>Anforderungen, Zeitplan und Wirtschaftlichkeit zuerst klären — genau das habe ich in meinem
                  IHK-Projekt vollständig durchgerechnet, bevor eine Zeile Go geschrieben wurde.</p>
              </div>
            </div>
            <div className="board-col">
              <div className="board-col-head">In Arbeit <span className="board-count">1</span></div>
              <div className="board-card">
                <span className="board-card-tag tag-teal">Ownership</span>
                <h4>Eigenverantwortung</h4>
                <p>Beide Projekte habe ich eigenständig von der Idee bis zur Übergabe verantwortet — inklusive
                  Entscheidungen, die ich auch begründen und dokumentieren kann.</p>
              </div>
            </div>
            <div className="board-col">
              <div className="board-col-head">Erledigt <span className="board-count">1</span></div>
              <div className="board-card is-done">
                <span className="board-card-tag tag-amber">Belastbarkeit</span>
                <h4>Auch im Chaos liefern</h4>
                <p>Trainiert im direkten Kundenkontakt bei McDonald's — Multitasking und Priorisierung unter
                  Zeitdruck gehören zum Alltag.</p>
              </div>
            </div>
          </div>
        </Reveal>
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
