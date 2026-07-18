import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

export default function AboutMe() {
  return (
    <>
      <section className="project-hero-simple">
        <div className="section section-narrow" style={{ paddingBottom: 0 }}>
          <div className="breadcrumb">
            <Link to="/">Start</Link>
            <span>/</span>
            <span>Über mich</span>
          </div>
          <p className="kicker">Über mich</p>
          <h1 className="about-h1">Mehr als ein Lebenslauf</h1>
          <p className="hero-lede" style={{ marginBottom: 0 }}>
            Hier steht ausführlicher, was sonst nur komprimiert im Lebenslauf steht — mein Werdegang im Detail,
            meine Kompetenzen und ein bisschen mehr darüber, wer ich neben der Arbeit bin.
          </p>
        </div>
      </section>

      <section className="section section-narrow">
        <Reveal as="div" className="about-quickfacts">
          <div>
            <span className="contact-label">Wohnort</span>
            <span>Nürnberg</span>
          </div>
          <div>
            <span className="contact-label">Jahrgang</span>
            <span>2005</span>
          </div>
          <div>
            <span className="contact-label">Sprachen</span>
            <span>Deutsch (Muttersprache), Englisch (Grundkenntnisse)</span>
          </div>
        </Reveal>

        <Reveal className="section-head" delay={60}>
          <p className="kicker">Werdegang</p>
          <h2>Bildungsweg im Detail</h2>
        </Reveal>
        <Reveal as="ol" className="timeline-full">
          <li>
            <span className="tl-date">09.2015 – 07.2021</span>
            <div>
              <h4>Robert-Bosch-Mittelschule</h4>
              <p>Qualifizierender Mittelschulabschluss (07.2020), Mittlerer Schulabschluss (07.2021).</p>
            </div>
          </li>
          <li>
            <span className="tl-date">09.2021 – 03.2022</span>
            <div>
              <h4>FOS II Nürnberg — Wirtschaftszweig</h4>
              <p>Vertiefung wirtschaftlicher Grundlagen als Zwischenschritt vor der Ausbildung.</p>
            </div>
          </li>
          <li>
            <span className="tl-date">09.2022 – 07.2025</span>
            <div>
              <h4>Ausbildung zum Fachinformatiker für Anwendungsentwicklung</h4>
              <p>IT-Systemhaus der Bundesagentur für Arbeit. Schwerpunkte: Projektplanung, Anforderungsanalyse,
                Jira &amp; Agile Methoden, User-Support.</p>
            </div>
          </li>
          <li>
            <span className="tl-date">Sommer 2025</span>
            <div>
              <h4>IHK-Abschlussprüfung</h4>
              <p>Prüfungsteil <strong>„Planen &amp; Umsetzung eines Softwareprojektes"</strong> — 79 von 100 Punkten.</p>
            </div>
          </li>
          <li className="is-current">
            <span className="tl-date">seit 08.2025</span>
            <div>
              <h4>McDonald's Deutschland LLC — Service &amp; Kundenkontakt</h4>
              <p>Fokus: Training von Stressresistenz und Multitasking in Hochlastphasen — Fähigkeiten, die auch
                im IT-Support und Projektalltag zählen.</p>
            </div>
          </li>
        </Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-head">
          <p className="kicker">EDV &amp; Kompetenzen</p>
          <h2>Was ich mitbringe</h2>
        </Reveal>
        <div className="expertise-grid">
          <Reveal as="div" className="expertise-card" delay={0}>
            <div className="expertise-num">IT</div>
            <h4>IT &amp; Tools</h4>
            <p>MS Office (Word, Excel, PowerPoint), Jira &amp; Confluence, schnelle Einarbeitung in neue
              Software-Systeme.</p>
          </Reveal>
          <Reveal as="div" className="expertise-card" delay={80}>
            <div className="expertise-num">★</div>
            <h4>Stärken</h4>
            <p>Eigenständiges, lösungsorientiertes Arbeiten, Belastbarkeit, Teamfähigkeit, Kundenorientierung.</p>
          </Reveal>
          <Reveal as="div" className="expertise-card" delay={160}>
            <div className="expertise-num">DE</div>
            <h4>Sprachen</h4>
            <p>Deutsch (Muttersprache), Englisch (Grundkenntnisse).</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-narrow">
        <Reveal className="section-head">
          <p className="kicker">Neben der Arbeit</p>
          <h2>Wer ich sonst noch bin</h2>
        </Reveal>
        <Reveal as="div" className="placeholder-box">
          <span className="placeholder-icon">✍️</span>
          <p>
            Dieser Abschnitt ist noch ein Platzhalter — hier sollen ein paar persönliche Zeilen zu Hobbys,
            Interessen oder was mich sonst noch ausmacht hin, statt nur trockener Lebenslauf-Fakten.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="section-head center">
          <p className="kicker">Mein Board</p>
          <h2>Meine Ziele — beruflich &amp; persönlich</h2>
        </Reveal>
        <Reveal as="div" className="board board-goals">
          <div className="board-header">
            <span className="board-dot dot-red" />
            <span className="board-dot dot-amber" />
            <span className="board-dot dot-green" />
            <span className="board-title">baron / ziele</span>
          </div>
          <div className="board-columns">
            <div className="board-col">
              <div className="board-col-head">Erreicht <span className="board-count">✓</span></div>
              <div className="board-card is-done">
                <span className="board-card-tag tag-blue">Ausbildung</span>
                <h4>Fachinformatiker-Abschluss</h4>
              </div>
              <div className="board-card is-done">
                <span className="board-card-tag tag-blue">Projekt</span>
                <h4>Erste eigene App gebaut</h4>
              </div>
            </div>
            <div className="board-col">
              <div className="board-col-head">In Arbeit <span className="board-count">2</span></div>
              <div className="board-card">
                <span className="board-card-tag tag-teal">Wachstum</span>
                <h4>Persönliche Weiterentwicklung</h4>
              </div>
              <div className="board-card">
                <span className="board-card-tag tag-teal">Karriere</span>
                <h4>Einstieg IT-Management</h4>
              </div>
            </div>
            <div className="board-col">
              <div className="board-col-head">Geplant <span className="board-count">2</span></div>
              <div className="board-card">
                <span className="board-card-tag tag-amber">Familie</span>
                <h4>Familie gründen</h4>
                <ul className="board-subtasks">
                  <li><span className="dep-arrow">↳</span> Heiraten <span className="dep-tag">Teilziel</span></li>
                </ul>
              </div>
              <div className="board-card">
                <span className="board-card-tag tag-amber">Führung</span>
                <h4>Verantwortung übernehmen</h4>
                <ul className="board-subtasks">
                  <li><span className="dep-arrow">↳</span> Erste Führungsrolle <span className="dep-tag">Teilziel</span></li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section section-narrow" style={{ paddingTop: 0 }}>
        <div className="doc-pagenav" style={{ border: "none", margin: 0, paddingTop: 0 }}>
          <Link to="/#projekte" className="btn btn-outline">← Zurück zu den Projekten</Link>
          <Link to="/#kontakt" className="btn btn-primary">Kontakt aufnehmen →</Link>
        </div>
      </section>
    </>
  );
}
