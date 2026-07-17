import React from "react";
import { Link } from "react-router-dom";
import DocLayout from "../components/DocLayout.jsx";

const TOC = [
  { id: "ausgangslage", label: "Ausgangslage" },
  { id: "iterationen", label: "Iterationen" },
  { id: "technologie", label: "Technologie" },
  { id: "design", label: "Design-Entscheidungen" },
  { id: "komponenten", label: "Komponenten" },
];

export default function ProjectWebsite() {
  return (
    <DocLayout
      eyebrow="Meta-Projekt · diese Seite selbst"
      title="Diese Webseite"
      subtitle="Statt eines Baukastens: eine handgebaute React/Vite-Anwendung, die zeigt, wie ich mit Feedback umgehe — inklusive zwei kompletter Redesigns."
      meta={[
        { label: "Stack", value: "React + Vite" },
        { label: "Routing", value: "React Router" },
        { label: "Iterationen", value: "3 Versionen" },
        { label: "Status", value: "Laufend" },
      ]}
      toc={TOC}
      bannerClass="banner-webseite"
      banner={
        <>
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
        </>
      }
    >
      <h2 id="ausgangslage">Ausgangslage</h2>
      <p>
        Die Idee: statt eines einseitigen Anschreibens eine Webseite, die meine Projekte im Detail zeigt — für
        Bewerbungen im IT-Management, nicht als Entwickler. Genau das ist auch der Grund, warum diese Seite selbst
        als vierte „Projektkarte" auftaucht: Sie zeigt dieselbe Arbeitsweise wie die anderen beiden Projekte —
        nur diesmal live und öffentlich einsehbar.
      </p>

      <h2 id="iterationen">Drei Iterationen, ein roter Faden</h2>
      <p>
        Diese Seite ist selbst ein gutes Beispiel für iteratives Arbeiten mit Feedback-Schleifen:
      </p>
      <ul>
        <li><strong>Version 1:</strong> statisches HTML/CSS/JS mit auffälligem, marketing-lastigem Design — schnell umgesetzt, aber zu sehr „Produktseite" statt persönliches Portfolio.</li>
        <li><strong>Version 2:</strong> kompletter Rebuild mit React &amp; Vite, sehr reduziertes, minimalistisches Entwickler-Portfolio mit Doku-Stil-Unterseiten — technisch solide, aber zu nüchtern für eine persönliche Bewerbungsseite.</li>
        <li><strong>Version 3 (aktuell):</strong> dieselbe React/Vite-Basis und dieselben Doku-Unterseiten, aber mit mehr visueller Identität — Farbverläufen, kleinen Animationen, einem Bereich für ein persönliches Foto und einer geführten Tour über die Seite.</li>
      </ul>
      <div className="callout">
        Jede Iteration basiert auf konkretem Feedback statt auf Bauchgefühl — dieselbe Vorgehensweise, die auch in
        der Zielanalyse meines IHK-Projekts steckt: Plan machen, umsetzen, mit der Realität abgleichen, anpassen.
      </div>

      <h2 id="technologie">Technologie</h2>
      <p>
        Bewusst kein Website-Baukasten: <strong>React</strong> für die Struktur der Seite, <strong>Vite</strong>{" "}
        als schneller Build- und Dev-Server, <strong>React Router</strong> für echtes Routing zwischen Start- und
        Projektseiten. Kein UI-Framework von der Stange — das gesamte Styling ist handgeschriebenes CSS mit
        eigenen Design-Tokens (Farben, Radien, Schatten), damit die Seite konsistent bleibt, ohne unnötig
        aufgebläht zu sein.
      </p>
      <div className="tag-row">
        <span className="tag">React</span>
        <span className="tag">Vite</span>
        <span className="tag">React Router</span>
        <span className="tag">Vanilla CSS</span>
      </div>

      <h2 id="design">Design-Entscheidungen</h2>
      <p>
        Die Farbpalette ist direkt aus dem Blauton meines Lebenslaufs abgeleitet — ergänzt um ein analoges Türkis
        und ein warmes Amber als Akzentfarben für Badges, Illustrationen und den animierten Statuspunkt. Die
        Projektkarten bekommen kleine, selbst gebaute CSS-„Mockups" (YAML-Zeilen, Handy-Silhouette,
        Browser-Fenster, Wachstumskurve) statt echter Screenshots — jedes Projekt bekommt so eine eigene visuelle
        Identität, ohne auf Fotos oder externe Assets angewiesen zu sein.
      </p>

      <h2 id="komponenten">Wiederverwendbare Komponenten</h2>
      <ul>
        <li><strong>Tour-Komponente:</strong> ein selbst gebauter Spotlight-Guide (kein fertiges Tour-Paket), der Schritt für Schritt durch die wichtigsten Bereiche der Startseite führt.</li>
        <li><strong>DocLayout:</strong> die gemeinsame Grundlage aller Projekt-Unterseiten — Sidebar mit Scrollspy, Meta-Angaben, Banner-Grafik.</li>
        <li><strong>Reveal:</strong> eine kleine Wrapper-Komponente auf Basis der <code>IntersectionObserver</code>-API für sanfte Fade-in-Animationen beim Scrollen.</li>
      </ul>

      <div className="doc-pagenav">
        <Link to="/#projekte" className="btn btn-outline">← Zurück zu allen Projekten</Link>
        <Link to="/projekte/backstage-validator" className="btn btn-primary">Nächstes Projekt: Backstage Validator →</Link>
      </div>
    </DocLayout>
  );
}
