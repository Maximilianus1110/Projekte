import React from "react";
import { Link } from "react-router-dom";
import DocLayout from "../components/DocLayout.jsx";

const TOC = [
  { id: "warum", label: "Warum dieses Projekt?" },
  { id: "kernbereiche", label: "Die drei Kernbereiche" },
  { id: "architektur", label: "Architektur" },
  { id: "datenbank", label: "Datenbank" },
  { id: "datenschutz", label: "Datenschutz & Backup" },
  { id: "erkenntnisse", label: "Was das Projekt zeigt" },
];

export default function ProjectTagebuch() {
  return (
    <DocLayout
      eyebrow="Eigenprojekt · privat"
      title="Tagebuch App"
      subtitle="Eine selbst konzipierte und entwickelte Android/iOS-App, die Tagebuch, Gym-Tracking und Küchenverwaltung unter einem Dach vereint — komplett offline, ohne Cloud-Anbindung."
      meta={[
        { label: "Plattform", value: "Android & iOS" },
        { label: "Framework", value: "Flutter / Dart" },
        { label: "Datenhaltung", value: "SQLite, lokal" },
        { label: "DB-Version", value: "v11, iterativ gewachsen" },
      ]}
      toc={TOC}
      bannerClass="banner-tagebuch"
      banner={
        <>
          <span className="banner-badge">Eigenprojekt</span>
          <div className="mock-phone">
            <div className="mock-phone-row" style={{ width: "70%" }} />
            <div className="mock-phone-row accent" style={{ width: "45%" }} />
            <div className="mock-phone-row" style={{ width: "60%" }} />
          </div>
          <span className="banner-icon">📓</span>
        </>
      }
    >
      <h2 id="warum">Warum dieses Projekt?</h2>
      <p>
        Die Tagebuch App ist kein Kundenauftrag, sondern ein persönliches Werkzeug — und genau deshalb ein guter
        Beleg dafür, wie ich arbeite, wenn niemand einen Anforderungskatalog vorgibt. Umfang, Datenmodell und
        Priorität jeder Funktion mussten selbst festgelegt und über viele Monate hinweg konsistent
        weiterentwickelt werden, ohne dass das Projekt in unzusammenhängende Einzelfeatures zerfällt.
      </p>
      <p>
        Der Leitgedanke: <strong>maximaler Datenschutz durch bewussten Verzicht auf eine Cloud.</strong> Alle Daten
        liegen ausschließlich lokal in einer SQLite-Datenbank auf dem Gerät — für Themen wie ein persönliches
        Tagebuch oder Gesundheitsdaten aus dem Gym-Tracking eine bewusste Architekturentscheidung, keine
        Standardlösung von der Stange.
      </p>

      <h2 id="kernbereiche">Die drei Kernbereiche</h2>

      <h3>1. Tagebuch</h3>
      <p>
        Chronologisches Festhalten von Gedanken und Notizen mit Datum, optionalem Titel und Haupttext. Ein
        interaktiver Kalender (<code>table_calendar</code>) erlaubt gezieltes Springen zu einem bestimmten Tag — die
        Liste scrollt automatisch zum passenden Eintrag. Gelöschte Einträge landen in einem Papierkorb und werden
        erst nach 30 Tagen automatisch endgültig entfernt (Soft-Delete mit Cleanup-Job beim App-Start).
      </p>

      <h3>2. Gym — Fitness-Tracking</h3>
      <p>
        Verwaltung von Übungen und Trainingsplänen mit Zielsätzen, Zielwiederholungen und Sortierreihenfolge.
        Während eines aktiven Trainings läuft ein Satz-Timer mit Vibrationsfeedback. Besonders praxisnah:{" "}
        <strong>Progressive Overload</strong> — Sätze, Wiederholungen und Gewichte werden automatisch aus dem
        letzten passenden Training vorbefüllt. Statistiken zu Frequenz, Volumen und Maximalgewichten werden über{" "}
        <code>fl_chart</code> visualisiert.
      </p>

      <h3>3. Küche &amp; Rezepte</h3>
      <p>
        Der komplexeste Bereich: Vorratsverwaltung mit Mindesthaltbarkeitsdatum (MHD) und einer Status-Ampel (Rot
        &lt; 4 Tage, Gelb &lt; 10 Tage, Grün ≥ 10 Tage). Ein selbstlernendes Autocomplete merkt sich Produktdaten wie
        Marke, Standard-Einheit und durchschnittliche Haltbarkeit für künftige Eingaben. Rezepte werden nach{" "}
        <strong>„Kochbarkeit“</strong> sortiert — die App gleicht Zutatenlisten automatisch mit dem aktuellen Vorrat
        ab und zeigt an, wie viele Zutaten fehlen. Die „Jetzt kochen“-Funktion zieht die benötigten Mengen automatisch
        nach dem <strong>FIFO-Prinzip</strong> vom Vorrat ab, um zuerst Artikel mit kürzestem MHD zu verbrauchen.
      </p>

      <h2 id="architektur">Architektur</h2>
      <p>
        Die App folgt einer klassischen dreischichtigen Architektur — bewusst gewählt, um UI, Geschäftslogik und
        Datenzugriff sauber zu trennen und die drei Module unabhängig voneinander erweitern zu können.
      </p>
      <div className="arch-diagram">
        <div className="arch-row arch-row-3">
          <div className="arch-node"><strong>UI-Layer</strong><p>Screens &amp; Widgets, State über <code>Provider</code>, Material Design 3</p></div>
          <div className="arch-node"><strong>Service-Layer</strong><p><code>GymService</code>, <code>KitchenService</code>, <code>RecipeService</code>, <code>BackupService</code></p></div>
          <div className="arch-node"><strong>Data-Layer</strong><p><code>DatabaseHelper</code> (Singleton) + Models mit JSON-Serialisierung</p></div>
        </div>
      </div>
      <div className="tag-row">
        <span className="tag tag-mono">Flutter &amp; Dart</span>
        <span className="tag tag-mono">SQLite (sqflite)</span>
        <span className="tag tag-mono">Provider</span>
        <span className="tag tag-mono">Material Design 3</span>
        <span className="tag tag-mono">fl_chart</span>
        <span className="tag tag-mono">file_picker · archive · share_plus</span>
      </div>

      <h2 id="datenbank">Datenbank: iteratives Wachstum über 11 Versionen</h2>
      <p>
        Statt alles im Voraus zu planen, ist das Datenmodell Schritt für Schritt mit neuen Anforderungen
        mitgewachsen — ein realistisches Abbild davon, wie Software in der Praxis tatsächlich entsteht:
      </p>
      <table className="data-table">
        <thead><tr><th>Version</th><th>Ausbaustufe</th></tr></thead>
        <tbody>
          <tr><td>v1 – v3</td><td>Tagebuch-Einträge und Soft-Delete-Mechanismus</td></tr>
          <tr><td>v4 – v7</td><td>Gym-Features: Übungen, Pläne, Trainings, Sätze, Bewertungen</td></tr>
          <tr><td>v8 – v9</td><td>Küchen-Features: Vorrat, Tags, Historie</td></tr>
          <tr><td>v10</td><td>Rezept-Features: Rezepte und Zutaten</td></tr>
          <tr><td>v11</td><td>Produkt-Stammdaten (<code>kitchen_products</code>) für Autocomplete + automatische Migration</td></tr>
        </tbody>
      </table>

      <h2 id="datenschutz">Datenschutz &amp; Datensicherung ohne Cloud</h2>
      <p>
        Weil bewusst auf eine Cloud-Synchronisation verzichtet wird, bietet die App zwei lokale Sicherungswege:
        einen lesbaren <strong>Textexport</strong> für Tagebuch- und Trainingsdaten sowie ein vollständiges{" "}
        <strong>ZIP-Backup</strong> mit separaten JSON-Dateien je Kategorie (Tagebuch, Gym, Küche, Rezepte), das über
        die App selbst wiederhergestellt werden kann. Große Importe und Wiederherstellungen laufen über die{" "}
        <code>Batch</code>-API von SQLite, um N+1-Query-Probleme zu vermeiden.
      </p>

      <h2 id="erkenntnisse">Was dieses Projekt zeigt</h2>
      <ul>
        <li><strong>Produktdenken über mehrere Domänen hinweg</strong> — drei fachlich unterschiedliche Bereiche in einem konsistenten Datenmodell und einer gemeinsamen UI zusammengeführt.</li>
        <li><strong>Eigenständige technische Entscheidungen</strong> — von der Wahl des Frameworks bis zur Backup-Strategie, ohne Vorgaben von außen.</li>
        <li><strong>Sauber gepflegte Dokumentation</strong> — Architektur, Features, Datenbankschema und Setup sind in eigenen Markdown-Dokumenten festgehalten, nicht nur „im Kopf“.</li>
        <li><strong>Sensibilität für Datenschutz</strong> — bewusste Offline-First-Entscheidung bei persönlichen und gesundheitsbezogenen Daten.</li>
      </ul>

      <div className="doc-pagenav">
        <Link to="/projekte/backstage-validator" className="btn btn-outline">← Vorheriges Projekt: Backstage Validator</Link>
        <Link to="/#kontakt" className="btn btn-primary">Kontakt aufnehmen →</Link>
      </div>
    </DocLayout>
  );
}
