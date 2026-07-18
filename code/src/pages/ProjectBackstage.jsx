import React from "react";
import { Link } from "react-router-dom";
import DocLayout from "../components/DocLayout.jsx";

const TOC = [
  { id: "ausgangssituation", label: "Ausgangssituation" },
  { id: "ziel", label: "Ziel & Abgrenzung" },
  { id: "zeitplanung", label: "Zeitplanung" },
  { id: "wirtschaftlichkeit", label: "Wirtschaftlichkeit" },
  { id: "technologie", label: "Technologieentscheidung" },
  { id: "felder", label: "Geprüfte Felder" },
  { id: "architektur", label: "Systemarchitektur" },
  { id: "herausforderungen", label: "Herausforderungen" },
  { id: "tests", label: "Testkonzept" },
  { id: "ergebnis", label: "Ergebnis & Ausblick" },
];

export default function ProjectBackstage() {
  return (
    <DocLayout
      eyebrow="IHK-Abschlussprojekt · Sommer 2025"
      title="Automatisiertes Testen von Entitäten im Backstage Softwarekatalog"
      subtitle="Ein Go-Microservice, der den internen Backstage Softwarekatalog des IT-Systemhauses der Bundesagentur für Arbeit automatisiert prüft und Verstöße per E-Mail an die zuständigen Teams meldet."
      meta={[
        { label: "Zeitraum", value: "11.04.–15.05.2025" },
        { label: "Aufwand", value: "80 Stunden" },
        { label: "Team", value: "K35 · Technische Plattform" },
        { label: "Bewertung", value: "79 / 100 Punkte" },
      ]}
      toc={TOC}
      bannerClass="banner-backstage"
      banner={
        <>
          <span className="banner-badge">IHK · 79 Punkte</span>
          <div className="mock-yaml">
            <span className="k">kind:</span> Component
            <span className="k">spec.owner:</span> team-k35
            <span className="k">spec.lifecycle:</span> production
          </div>
          <span className="banner-icon">⚙️</span>
        </>
      }
    >
      <h2 id="ausgangssituation">Ausgangssituation</h2>
      <p>
        Das IT-Systemhaus der Bundesagentur für Arbeit betreibt eine eigene <strong>Backstage</strong>-Instanz — ein
        Open-Source-Tool zur zentralen Verwaltung und Darstellung aller Softwarekomponenten (Microservices, APIs,
        Bibliotheken) als sogenannte <strong>Entitäten</strong> in YAML-Form. Rund 120 Entwicklerinnen und Entwickler
        nutzen diesen Katalog regelmäßig, um sich einen Überblick über Zuständigkeiten, Schnittstellen und
        Abhängigkeiten zu verschaffen.
      </p>
      <p>
        Das Problem: Es gab <strong>keine zentrale Prüflogik</strong>. Pflichtfelder wie <code>metadata.name</code>,{" "}
        <code>spec.owner</code> oder <code>spec.type</code> wurden manuell oder gar nicht validiert. Abhängigkeiten
        wie <code>spec.dependsOn</code> oder <code>spec.consumeApis</code> konnten ins Leere zeigen, ohne dass es
        jemand bemerkte. Das Ergebnis waren inkonsistente Einträge, die anderen Teams die Arbeit erschwerten und den
        Pflegeaufwand kontinuierlich erhöhten.
      </p>

      <h2 id="ziel">Ziel &amp; bewusste Abgrenzung</h2>
      <p>
        Ziel war ein automatisiertes Validierungssystem, das alle Entitäten regelmäßig prüft, Verstöße erkennt und
        die verantwortlichen Teams strukturiert per E-Mail informiert. Vier Projektziele waren maßgeblich:
      </p>
      <ul>
        <li><strong>Automatisierung</strong> — technische Grundlage für regelmäßige, automatisierte Prüfläufe</li>
        <li><strong>Qualitätssicherung</strong> — alle spezifizierten Prüfkriterien vollständig technisch abdecken</li>
        <li><strong>Fehlerminimierung</strong> — automatisierte, strukturierte Benachrichtigung der Entitätsverwalter</li>
        <li><strong>Testung</strong> — Zuverlässigkeit durch Unit- und manuelle Tests vor Produktivsetzung absichern</li>
      </ul>
      <div className="callout">
        Genauso wichtig wie das, was umgesetzt wurde, war das, was <strong>bewusst ausgelassen</strong> wurde: Eine
        Konfigurationsoberfläche für neue Regeln und eine direkte Anzeige der Ergebnisse im Backstage-Frontend hätten
        den vorgegebenen Zeitrahmen von 80 Stunden gesprengt. Sauber scoppen ist Teil guter Projektarbeit — nicht
        alles gleichzeitig lösen zu wollen.
      </div>

      <h2 id="zeitplanung">Zeitplanung</h2>
      <p>Der Zeitrahmen von 80 Stunden wurde in fünf Phasen mit klaren Arbeitspaketen unterteilt:</p>
      <table className="data-table">
        <thead>
          <tr>
            <th>Phase</th>
            <th>Arbeitspaket</th>
            <th className="num">Std.</th>
          </tr>
        </thead>
        <tbody>
          <tr><td rowSpan={4}>Projektplanung</td><td>Anforderungsanalyse &amp; Spezifikation</td><td className="num">3</td></tr>
          <tr><td>Analyse bestehender Prozesse</td><td className="num">2</td></tr>
          <tr><td>Analyse der Wirtschaftlichkeit</td><td className="num">1</td></tr>
          <tr><td>Projektziele festlegen</td><td className="num">4</td></tr>
          <tr><td rowSpan={2}>Design</td><td>Auswahl der Technologien</td><td className="num">4</td></tr>
          <tr><td>Technisches Konzept</td><td className="num">4</td></tr>
          <tr><td rowSpan={3}>Implementierung</td><td>Schnittstellen</td><td className="num">1</td></tr>
          <tr><td>Fehlererkennungs- &amp; Meldungssystem</td><td className="num">26</td></tr>
          <tr><td>Logging &amp; Monitoring</td><td className="num">13</td></tr>
          <tr><td rowSpan={3}>Test</td><td>Manuelle Tests</td><td className="num">3</td></tr>
          <tr><td>Unit-Tests</td><td className="num">7</td></tr>
          <tr><td>Optimierung &amp; Fehlerkorrektur</td><td className="num">4</td></tr>
          <tr><td rowSpan={2}>Abschluss</td><td>Dokumentation</td><td className="num">5</td></tr>
          <tr><td>Übergabe</td><td className="num">3</td></tr>
        </tbody>
      </table>
      <p>
        Im Soll-Ist-Vergleich am Projektende zeigte sich: die <strong>Gesamtzeit von 80 Stunden wurde punktgenau
        eingehalten</strong> — bei moderaten Verschiebungen zwischen den Phasen (Entwicklung 5h schneller, Test 2h
        länger als geplant), die sich innerhalb des Projekts selbst ausgeglichen haben.
      </p>

      <h2 id="wirtschaftlichkeit">Wirtschaftlichkeitsanalyse</h2>
      <p>
        Ein technisches Ergebnis allein überzeugt selten — deshalb wurde die Investition in Zahlen gefasst.
        Entwickler verbringen laut interner Schätzung des Teams K35 rund 4 Stunden pro Woche mit der Suche nach
        Informationen zu Softwarekomponenten. Eine verbesserte Datenqualität im Katalog senkt diesen Aufwand
        voraussichtlich um 80 %.
      </p>
      <table className="data-table">
        <tbody>
          <tr><td>Gesamte Entwicklungskosten</td><td className="num">798,56 €</td></tr>
          <tr><td>Geschätzte monatliche Einsparung</td><td className="num">54.146,56 €</td></tr>
          <tr><td>Realistische Amortisationszeit</td><td className="num">≈ 1 Woche</td></tr>
        </tbody>
      </table>
      <p>
        Die Rechnung: 120 Entwickler × 3,2 Std./Woche eingesparte Suchzeit ≈ 384 Std./Woche ≈ 1.664 Std./Monat. Bei
        einem kalkulierten Stundensatz von 32,54 € ergibt das die genannte Monatssumme. Selbst unter realistischen
        Annahmen (Teams brauchen ca. eine Woche, um gemeldete Fehler zu beheben) amortisiert sich das Projekt nach
        ungefähr einer Woche Betrieb.
      </p>

      <h2 id="technologie">Technologieentscheidung</h2>
      <p>
        Die Wahl fiel bewusst auf <strong>Go</strong> statt Java oder Node.js: schnell, minimalistisch, gut geeignet
        für parallele Netzwerkoperationen wie wiederholte REST-Aufrufe gegen die Backstage API — bei deutlich
        weniger Boilerplate als Java. Für Versionsverwaltung, Aufgabenmanagement und Dokumentation kamen die im
        Betrieb bereits etablierten Werkzeuge zum Einsatz.
      </p>
      <div className="tag-row">
        <span className="tag tag-mono">Go</span>
        <span className="tag tag-mono">IntelliJ IDEA Ultimate</span>
        <span className="tag tag-mono">Git</span>
        <span className="tag tag-mono">Jira &amp; Confluence</span>
        <span className="tag tag-mono">net/http · encoding/json · net/smtp · regexp</span>
        <span className="tag tag-mono">testify</span>
      </div>

      <h2 id="felder">Bewertung der zu prüfenden Felder</h2>
      <p>
        Statt alle denkbaren Felder gleich zu behandeln, wurden sie nach fachlicher Relevanz priorisiert — ein
        typischer Anforderungsanalyse-Schritt, der in der technischen Umsetzung direkt sichtbar wird:
      </p>
      <table className="data-table">
        <thead><tr><th>Feld</th><th>Prüfregel</th><th>Wichtigkeit</th></tr></thead>
        <tbody>
          <tr><td><code>metadata.name</code></td><td>Keine Sonderzeichen / Leerzeichen</td><td>hoch</td></tr>
          <tr><td><code>spec.owner</code></td><td>Muss existierendes Team/Nutzer sein</td><td>hoch</td></tr>
          <tr><td><code>kind</code></td><td>Muss aus gültiger Liste stammen</td><td>hoch</td></tr>
          <tr><td><code>apiVersion</code></td><td>Format <code>group/version</code></td><td>hoch</td></tr>
          <tr><td><code>spec.type</code></td><td>Muss aus vordefinierter Liste stammen</td><td>hoch</td></tr>
          <tr><td><code>spec.lifecycle</code></td><td>experimental / production / deprecated</td><td>mittel</td></tr>
          <tr><td><code>spec.dependsOn</code></td><td>Abhängigkeit muss gültig sein</td><td>mittel</td></tr>
          <tr><td><code>spec.consumeApis</code></td><td>API muss existieren</td><td>mittel</td></tr>
        </tbody>
      </table>

      <h2 id="architektur">Systemarchitektur</h2>
      <p>
        Das System ist als eigenständiger Microservice in einer modularen Schichtenarchitektur aufgebaut — klare
        Verantwortlichkeiten, leicht erweiterbar, einfach zu testen.
      </p>
      <div className="arch-diagram">
        <div className="arch-entry">cmd/microservice/main.go — Einstiegspunkt</div>
        <div className="arch-row">
          <div className="arch-node"><strong>backstage</strong><p>Lädt Entitäten paginiert über die Backstage API</p></div>
          <div className="arch-node"><strong>models</strong><p>Go-Structs, an die YAML/JSON-Struktur angelehnt</p></div>
          <div className="arch-node"><strong>validation</strong><p>Regelbasierte Prüflogik, <code>ValidateEntities()</code></p></div>
          <div className="arch-node"><strong>mailer</strong><p>SMTP-Versand via <code>SendErrorReport()</code></p></div>
        </div>
      </div>
      <p>
        Ablauf: Ein Zeitplan startet den Lauf automatisch → Entitäten werden über die Backstage API abgerufen → jede
        Entität wird gegen alle Regeln geprüft → bei Verstößen entsteht ein strukturierter Fehlerbericht, der per
        E-Mail an das verantwortliche Team (ermittelt aus <code>spec.owner</code>) geht → nach Abschluss aller
        Prüfungen entsteht zusätzlich ein Gesamtbericht.
      </p>
      <h3>Codebeispiel: Prüfregel für metadata.name</h3>
      <pre className="code-block">{`if entity.Metadata.Name == "" {
    errorCountPerRule["metadata.name fehlt"]++
    log.Printf("Entität %s: metadata.name fehlt", entity.Metadata.Name)
} else if matched, _ := regexp.MatchString("^[a-z0-9\\-]+$", entity.Metadata.Name); !matched {
    errorCountPerRule["metadata.name ungültig"]++
    log.Printf("Entität %s: metadata.name enthält ungültige Zeichen", entity.Metadata.Name)
}`}</pre>

      <h2 id="herausforderungen">Herausforderungen während der Entwicklung</h2>
      <ul>
        <li><strong>API-Kompatibilität:</strong> Die intern gehostete Backstage-Instanz lief nicht auf der neuesten Version — die tatsächliche API-Response wich von der offiziellen Dokumentation ab und wurde manuell analysiert.</li>
        <li><strong>Pagination:</strong> Die Backstage API liefert Entitäten seitenweise. Eine Schleife mit automatischer Weiterverfolgung und Fehlerbehandlung stellt sicher, dass wirklich alle Daten eingelesen werden.</li>
        <li><strong>Optionale Felder:</strong> Pointer-Felder mit <code>omitempty</code>-Tags verhindern Unmarshalling-Fehler bei fehlenden JSON-Feldern.</li>
        <li><strong>Nil-Werte:</strong> Ein Sonderfall trat auf, wenn <code>spec.owner</code> explizit auf <code>null</code> gesetzt war — die Prüfung wurde um eine explizite <code>nil</code>-Prüfung ergänzt.</li>
      </ul>

      <h2 id="tests">Testkonzept</h2>
      <p>
        Um unabhängig von der echten Backstage-Instanz und einem SMTP-Server testen zu können, wurde konsequent auf{" "}
        <strong>Mock-Objekte</strong> gesetzt. Getestet wurden unter anderem fehlende Pflichtfelder, ungültige Werte
        (z. B. leere Lifecycle-Strings) und fehlerhafte Referenzen bei Abhängigkeiten. Zusätzlich simulierten
        End-to-End-Tests mit realistischen YAML-Entitäten den kompletten Ablauf — von der Entität bis zur fertigen
        E-Mail. Alle Unit-Tests laufen automatisiert über <code>go test ./...</code>.
      </p>

      <h2 id="ergebnis">Ergebnis &amp; Ausblick</h2>
      <p>
        Alle vier definierten Projektziele wurden vollständig erreicht: ein lauffähiges Validierungssystem,
        vollständige Abdeckung der spezifizierten Prüfregeln, ein funktionierender E-Mail-Benachrichtigungsmechanismus
        und eine durch Unit- sowie End-to-End-Tests abgesicherte Kernlogik. Das Projekt wurde mit{" "}
        <strong>79 von 100 Punkten</strong> bewertet.
      </p>
      <div className="callout callout-muted">
        <strong>Ausblick:</strong> Denkbare nächste Schritte sind eine Konfigurationsoberfläche für neue Regeln, die
        Integration in CI/CD-Pipelines (Prüfung schon vor dem Commit), weitere Benachrichtigungskanäle und eine
        Performance-Optimierung für sehr große Entitätsmengen.
      </div>

      <div className="doc-pagenav">
        <Link to="/#projekte" className="btn btn-outline">← Zurück zu allen Projekten</Link>
        <Link to="/projekte/tagebuch-app" className="btn btn-primary">Nächstes Projekt: Tagebuch App →</Link>
      </div>
    </DocLayout>
  );
}
