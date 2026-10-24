# Mathe entdecken

Deutschsprachige Mathelern-App mit Übungen, Wissensquiz und lokalem Lernfortschritt. Für Desktop und Smartphone, ohne Anmeldung und ohne externe Laufzeitabhängigkeiten.

## Einfach öffnen — ohne Installation

1. Das Repository über **Code → Download ZIP** herunterladen.
2. Die ZIP-Datei vollständig entpacken.
3. Die enthaltene **index.html** per Doppelklick in einem aktuellen Browser öffnen.

Die Datei enthält die komplette App einschließlich Gestaltung und Aufgaben. Kein Webserver, keine Internetverbindung und kein Node.js sind für diesen Weg erforderlich. Die Datei kann auch einzeln in einen anderen Ordner kopiert werden. JavaScript muss im Browser aktiviert sein.

Der Lernfortschritt wird im Browser gespeichert. Bei lokal geöffneten Dateien hängt die Speicherung vom Browser und Dateipfad ab. Beim Verschieben der Datei kann der bisherige Fortschritt daher fehlen. Falls der Browser die Speicherung verweigert, funktioniert die App für die aktuelle Sitzung weiter.

### Entwicklung mit optionalem Webserver

Für Codeänderungen Node.js 22 oder neuer verwenden (geprüft mit Node 24.19.0):

```bash
cd /workspace/mathe
# Nach Änderungen an src/ die eigenständige HTML-Datei aktualisieren:
npm run build
npm start
```

Der Entwicklungsserver lauscht auf Port **3000**. Ein anderer Port lässt sich mit `PORT=3001 npm start` wählen. Kein `npm install`, kein API-Schlüssel und keine Datenbank erforderlich. `index.html` kann auch allein auf einem statischen Webhost bereitgestellt werden. Keine Website wurde veröffentlicht.

## Enthalten

- **123 Themenbereiche**, davon **102 in Klasse 1 bis 10**, ergänzend 21 Grundlagen- und Wiederholungsbereiche für die Oberstufe.
- Parametrisierte Aufgabengeneratoren mit wechselnden Zahlen; die Aufgaben sind nicht nur eine feste Liste. Manche begrifflichen Themen verwenden einen kleineren Pool fester Fragen.
- Zahlen- und Brucheingaben, Antwortauswahl, Richtig/Falsch, Lücken mit mehreren Antworten, Zahlen ordnen und Zuordnungen. Nicht jedes Thema unterstützt jedes Format.
- Runden mit 10, 20 oder 30 Aufgaben und anpassbarem Antwortformat. Die Einstellung für den Zahlenumfang wirkt bei den dafür geeigneten Generatoren; sie stellt keine vollständige didaktische Schwierigkeitsstaffelung dar.
- Erklärungen nach jeder Antwort, geometrische Abbildungen, analoge Uhr und Balkendiagramme bei passenden Aufgaben.
- Themen-Merkkarten, Themenfilter und Suche.
- Gezieltes Wiederholen **derselben falsch beantworteten oder übersprungenen Aufgabe**. Erst die richtige Wiederholung entfernt diese Aufgabe aus der Liste.
- Fortschritt je Thema und Klassenstufe, Trefferquote, Lerntage und JSON-Export zur Dokumentation. Der Export kann aktuell nicht wieder importiert werden.
- Speicherung nur in `localStorage` des jeweiligen Browsers. Andere Geräte oder Browser teilen den Fortschritt nicht. Browserdaten zu löschen entfernt auch die Lerndaten. Ohne verfügbaren Browserspeicher ist nur der aktuelle Sitzungsfortschritt möglich.

### Themenübersicht

| Klasse | Schwerpunkte und ergänzte Themen |
|---|---|
| 1 | Zahlen bis 20, Stellenwert, Plus/Minus, Lücken, Muster, Formen, Sachaufgaben, Zahlenstrahl |
| 2 | Zahlen bis 100, Einmaleins, Division, Geld, Uhr, Sachaufgaben, Zahlenmuster |
| 3 | Zahlen bis 1.000, Rechnen, Restdivision, Zeit/Kalender, Einheiten, Geld, Umfang |
| 4 | Zahlen bis 1.000.000, Runden, Grundrechenarten, Brüche, Fläche, Zufall, Diagramme, Körper |
| 5 | Rechenregeln, Teilbarkeit, Primzahlen, ggT/kgV, Brüche, Einheiten, Fläche, Volumen, Symmetrie, Winkel |
| 6 | Negative Zahlen, Bruchrechnung, Dezimalzahlen, Prozent, Dreisatz, Antiproportionalität, Kreis, Statistik, Dreiecksfläche |
| 7 | Terme, Gleichungen/Ungleichungen, Klammern, lineare Funktionen, Dreiecke, Kongruenz/Thales, Konstruktionswissen, Statistik |
| 8 | LGS, Pythagoras, Wurzeln, rationale Funktionen, Zinseszins, mehrstufiger Zufall, binomische Formeln, Oberfläche, Steigung |
| 9 | Quadratische Gleichungen, Potenzen/Wurzeln, Trigonometrie, Ähnlichkeit, Parabeln, Zylinder/Kegel, bedingte Wahrscheinlichkeit, Faktorisieren |
| 10 | Polynome, Wachstum, Logarithmen, Bogenmaß, Ableitung/Änderungsrate, Kombinatorik, Binomialverteilung, Statistik, Kugel |
| 11–13 | Grundlagen und Wiederholungen zu Ableitung, Extrema, Integral, Vektoren, Skalarprodukt, Geraden, Abstand, Matrizen, Binomialverteilung und Hypothesentests |

**Fachlicher Umfang:** Die Zuordnung orientiert sich an der gewünschten Themenliste und typischen deutschen Lehrplänen. Reihenfolge und Anforderungen unterscheiden sich nach Bundesland und Schulform. Die App ist ein Übungseinstieg und kein vollständiger Lehrplan oder vollständiger Abiturkurs. Beispielsweise werden bei Geraden/Ebenen bisher Punkte auf Geraden geübt; umfassende Ebenen- und Lageberechnungen sowie vollständige Kurvendiskussionen und numerische Hypothesentests sind noch nicht enthalten. Konstruktionen werden begrifflich abgefragt, nicht mit einem interaktiven Zirkel ausgeführt. Schriftliche Rechenarten werden als Ergebnisaufgaben mit Hinweisen geübt, nicht als interaktives Stellenschema.

Die hochgeladene Referenz „Vokabeltrainer-modern (21).zip“ ließ sich wegen der Importgrenze von 32 MiB nicht öffnen. Die App wurde deshalb eigenständig auf Basis der gewünschten Funktionen **Übungen, Quiz und Lernfortschritt** gestaltet; eine Übernahme oder Übereinstimmung mit dem Referenzcode wird nicht behauptet.

## Prüfen

```bash
npm run build
npm run check
npm test
```

Die Node-Tests prüfen alle Themen über reproduzierbare Zufallsfolgen mit verschiedenen Formaten und Zahleneinstellungen, akzeptierte Lösungen, eindeutige Auswahlantworten, falsche Antworten und Zahlen-/Bruchparsing. Zusätzliche unabhängige Kontrollen prüfen die Grundrechenarten sowie Lösungen quadratischer Gleichungen und Gleichungssysteme. Ein Generator-Selbsttest allein wäre kein fachlicher Vollständigkeitsnachweis.

### Browserprüfung (optional, Entwicklungswerkzeug)

In der Cloud-Umgebung ist Chromium vorhanden. Für die wiederholbare Browserprüfung Playwright Core separat außerhalb des Projekts installieren:

```bash
npm install --prefix /tmp/mathe-browser --cache /tmp/mathe-npm-cache --no-audit --no-fund --package-lock=false playwright-core@1.64.1
# In einem zweiten Terminal muss npm start laufen.
node scripts/browser-check.mjs
```

Falls eine andere Version oder ein anderer Installationsort verwendet wird, `PLAYWRIGHT_MODULE` auf die Datei `playwright-core/index.mjs` setzen. `CHROMIUM_PATH` und `BASE_URL` lassen sich ebenfalls überschreiben. Das Prüfskript verwendet einen frischen Browserkontext und keine vorhandenen Lerndaten.

Für eine zusätzliche Prüfung der einzelnen HTML-Datei ohne Quellordner:

```bash
node scripts/standalone-check.mjs
```

Dieser Test kopiert nur die fertige `index.html` in einen temporären Ordner und lädt ihren Inhalt in den Browser. Er prüft eingebettete Gestaltung, Quiz, Erklärungen, Sitzungsfortschritt bei gesperrtem Browserspeicher und null zusätzliche Netzwerkanfragen. Der Cloud-Testbrowser verbietet `file:`-Navigation per Verwaltungsrichtlinie; ein tatsächlicher Doppelklick konnte in dieser Umgebung deshalb nicht getestet werden. In einer Browserumgebung, die lokale Dateien erlaubt, lässt sich der vollständige Browserablauf zusätzlich mit `BASE_URL=file:///absoluter/pfad/index.html node scripts/browser-check.mjs` ausführen.

Die Browserprüfung kontrolliert Navigation, Pflichtantwort, Überspringen, richtige Wiederholung und Entfernen eines Fehlers, Persistenz nach Neuladen, Suche, Merkkarten, eine vollständige 10-Aufgaben-Runde, Abbrechen des Zurücksetzens und mobile Darstellung ohne horizontales Überlaufen. Screenshots entstehen in `/tmp/mathe-*.png`.

## Aufbau

- `src/curriculum.js`: Klassen, Themen, Beschreibungen und Merksätze
- `src/questions.js`: Generatoren, Antwortprüfung und Darstellung von Lösungen
- `src/app.js`: Navigation, Übungen, Quiz und Lernfortschritt
- `src/index.template.html`: HTML-Vorlage
- `scripts/build.mjs`: erzeugt die eigenständig öffnende `index.html` ohne zusätzliche Pakete
- `index.html`: mitgelieferte fertige App; nach Quelländerungen mit `npm run build` neu erzeugen
- `src/style.css`: responsive Gestaltung ohne externe Schriften
- `server.mjs`: schlanker Entwicklungsserver mit explizit erlaubten öffentlichen Dateien
- `tests/questions.test.js`: automatisierte Funktions- und Mathematikprüfungen

Keine KI-Anfragen, Analyse-Dienste, externen Schriftdateien oder kostenpflichtigen Dienste zur Laufzeit. Aufgabengeneratoren lassen sich durch neue Themen und passende `case`-Zweige erweitern; neue Themen werden automatisch in die Generatortests aufgenommen.
