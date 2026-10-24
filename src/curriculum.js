// Orientierung nach typischen deutschen Lehrplänen; Reihenfolgen variieren regional.
const t = (id, title, group, description, rule) => ({ id, title, group, description, rule });
export const curriculum = {
1: [
 t('count','Zahlen bis 20','Zahlen','Zählen, vergleichen und Zahlen entdecken.','Beim Zählen kommt immer genau 1 dazu. Die größere Zahl steht auf dem Zahlenstrahl weiter rechts.'),
 t('place','Zehner und Einer','Zahlen','Zahlen in ihre Bausteine zerlegen.','10 Einer ergeben 1 Zehner. Zum Beispiel: 14 = 1 Zehner + 4 Einer.'),
 t('add','Plusrechnen','Rechnen','Zusammenzählen im Zahlenraum bis 20.','Bei der Addition werden Mengen zusammengefügt. Das Zeichen dafür ist +.'),
 t('subtract','Minusrechnen','Rechnen','Wegnehmen und Unterschiede finden.','Bei der Subtraktion nimmst du etwas weg: 8 − 3 = 5.'),
 t('missing','Lückenaufgaben','Rechnen','Die fehlende Zahl finden.','Suche die Zahl, mit der die Rechnung stimmt. Bei □ + 3 = 8 rechnest du 8 − 3.'),
 t('sequence','Muster und Reihen','Entdecken','Zahlenfolgen fortsetzen.','Prüfe, um wie viel sich benachbarte Zahlen verändern. Setze diese Regel fort.'),
 t('shapes','Formen entdecken','Geometrie','Kreis, Dreieck, Quadrat und Rechteck.','Ein Dreieck hat 3 Ecken. Ein Quadrat hat 4 gleich lange Seiten und 4 rechte Winkel.'),
 t('story','Kleine Sachaufgaben','Alltag','Mit kurzen Geschichten rechnen.','Lies genau: Was ist gegeben? Was ist gesucht? Wähle eine passende Rechnung.')
],
2: [
 t('count','Zahlen bis 100','Zahlen','Zahlen ordnen und Nachbarn finden.','Der Vorgänger ist 1 kleiner, der Nachfolger 1 größer.'),
 t('place','Stellenwerte','Zahlen','Zehner und Einer sicher erkennen.','Die Position einer Ziffer bestimmt ihren Wert. 47 hat 4 Zehner und 7 Einer.'),
 t('add','Plus bis 100','Rechnen','Auch über den Zehner rechnen.','Zerlege die zweite Zahl: 38 + 7 = 38 + 2 + 5 = 45.'),
 t('subtract','Minus bis 100','Rechnen','Schrittweise zum Ergebnis.','Du kannst erst die Zehner und dann die Einer abziehen.'),
 t('multiply','Kleines Einmaleins','Rechnen','Die Reihen von 1 bis 10 üben.','Multiplikation ist wiederholte Addition: 4 · 3 = 3 + 3 + 3 + 3.'),
 t('divide','Teilen und Verteilen','Rechnen','Gleich große Gruppen bilden.','Division ist die Umkehrung der Multiplikation: 24 : 6 = 4, denn 4 · 6 = 24.'),
 t('money','Euro und Cent','Alltag','Mit Preisen und Wechselgeld rechnen.','1 Euro sind 100 Cent. Rechne am besten zuerst alles in Cent um.'),
 t('clock','Uhrzeit lesen','Alltag','Stunden und Minuten entdecken.','Eine Stunde hat 60 Minuten. Eine halbe Stunde sind 30 Minuten.'),
 t('story','Sachaufgaben','Alltag','Plus, Minus und Mal im Alltag.','Schreibe die gesuchte Größe auf und prüfe am Ende die Einheit.')
],
3: [
 t('count','Zahlen bis 1.000','Zahlen','Zahlen vergleichen und ordnen.','Vergleiche zuerst die Hunderter, dann die Zehner, zuletzt die Einer.'),
 t('place','Hunderter, Zehner, Einer','Zahlen','Große Zahlen zerlegen.','Zum Beispiel: 583 = 5 · 100 + 8 · 10 + 3.'),
 t('add','Addition bis 1.000','Rechnen','Schrittweise und schriftlich addieren.','Addiere stellenweise. Ein Übertrag wird zur nächsten Stelle hinzugezählt.'),
 t('subtract','Subtraktion bis 1.000','Rechnen','Schrittweise und schriftlich abziehen.','Achte bei der schriftlichen Subtraktion auf den Stellenwert und das Entbündeln.'),
 t('multiply','Großes Einmaleins','Rechnen','Auch zweistellige Faktoren meistern.','Nutze das Verteilungsgesetz: 12 · 7 = 10 · 7 + 2 · 7.'),
 t('divide','Division mit Rest','Rechnen','Aufteilen und Reste verstehen.','Der Rest muss kleiner als der Divisor sein: 23 : 5 = 4 Rest 3.'),
 t('time','Zeit und Kalender','Alltag','Zeitspannen und Wochentage.','1 Tag hat 24 Stunden, 1 Woche 7 Tage und 1 Stunde 60 Minuten.'),
 t('units','Längen und Gewichte','Alltag','Meter, Zentimeter und Kilogramm.','1 m = 100 cm, 1 km = 1.000 m und 1 kg = 1.000 g.'),
 t('money','Mit Geld rechnen','Alltag','Preise addieren und Rückgeld finden.','Rechne Geldbeträge in derselben Einheit. 2,50 € entsprechen 250 ct.'),
 t('perimeter','Umfang entdecken','Geometrie','Die Länge rund um eine Figur.','Der Umfang ist die Summe aller Seitenlängen. Beim Rechteck: U = 2a + 2b.')
],
4: [
 t('count','Zahlen bis 1.000.000','Zahlen','Große Zahlen lesen und vergleichen.','Vergleiche Zahlen von der höchsten Stelle aus.'),
 t('round','Runden und Überschlagen','Zahlen','Sinnvoll gerundete Ergebnisse.','Ist die nächste Ziffer 5 oder größer, wird aufgerundet; sonst abgerundet.'),
 t('add','Schriftlich addieren','Rechnen','Mit großen Zahlen rechnen.','Schreibe gleiche Stellen untereinander und addiere von rechts nach links.'),
 t('subtract','Schriftlich subtrahieren','Rechnen','Differenzen großer Zahlen finden.','Rechne von rechts nach links. Beachte nötiges Entbündeln.'),
 t('multiply','Schriftlich multiplizieren','Rechnen','Mehrstellige Faktoren üben.','Multipliziere mit jeder Stelle einzeln und addiere die Teilprodukte stellenrichtig.'),
 t('divide','Schriftlich dividieren','Rechnen','Teilen mit und ohne Rest.','Teile schrittweise von links nach rechts. Prüfe mit der Multiplikation.'),
 t('fraction','Brüche kennenlernen','Brüche','Teile eines Ganzen verstehen.','Der Nenner gibt an, in wie viele gleich große Teile geteilt wird. Der Zähler zählt die ausgewählten Teile.'),
 t('area','Fläche und Umfang','Geometrie','Rechtecke und Quadrate vermessen.','Rechteck: A = a · b und U = 2(a + b). Fläche in cm², Umfang in cm.'),
 t('probability','Zufall entdecken','Daten & Zufall','Sicher, möglich oder unmöglich?','Bei gleich wahrscheinlichen Ergebnissen gilt: Wahrscheinlichkeit = günstige / mögliche Ergebnisse.'),
 t('data','Tabellen und Diagramme','Daten & Zufall','Daten lesen und vergleichen.','Achte auf Beschriftung und Einheit. Die Höhe eines Balkens stellt einen Wert dar.'),
 t('story','Mehrschrittige Sachaufgaben','Alltag','Mit mehreren Rechenschritten ans Ziel.','Plane die Schritte und prüfe, ob das Ergebnis zur Frage passt.')
],
5: [
 t('operations','Rechnen und Klammern','Rechnen','Punkt vor Strich sicher anwenden.','Zuerst Klammern, dann Punktrechnung, dann Strichrechnung. Gleichrangiges von links nach rechts.'),
 t('divisibility','Teilbarkeit','Zahlen','Teilbarkeitsregeln entdecken.','Durch 3 teilbar: Die Quersumme ist durch 3 teilbar. Durch 5 teilbar: Endziffer 0 oder 5.'),
 t('prime','Primzahlen und Teiler','Zahlen','Die Bausteine natürlicher Zahlen.','Eine Primzahl ist größer als 1 und hat genau zwei positive Teiler: 1 und sich selbst.'),
 t('fraction','Brüche und Anteile','Brüche','Brüche lesen und kürzen.','Beim Kürzen teilst du Zähler und Nenner durch dieselbe Zahl ungleich 0.'),
 t('units','Größen umrechnen','Alltag','Längen, Gewichte und Zeiten.','Rechne die Einheiten vor dem Vergleichen um. 1 km = 1.000 m.'),
 t('area','Flächen berechnen','Geometrie','Rechtecke und zusammengesetzte Flächen.','Die Rechteckfläche ist Länge mal Breite. Achte auf quadratische Einheiten.'),
 t('volume','Körper und Volumen','Geometrie','Würfel und Quader kennenlernen.','Quader: V = Länge · Breite · Höhe. Ein Würfel hat 6 Flächen, 12 Kanten und 8 Ecken.'),
 t('symmetry','Symmetrie und Koordinaten','Geometrie','Spiegeln im Koordinatensystem.','An der y-Achse gespiegelt: (x | y) wird zu (−x | y).'),
 t('angles','Winkel entdecken','Geometrie','Spitze, rechte und stumpfe Winkel.','Spitz: kleiner als 90°. Recht: 90°. Stumpf: zwischen 90° und 180°.'),
 t('data','Daten und Diagramme','Daten & Zufall','Häufigkeiten lesen und auswerten.','Absolute Häufigkeiten zählen Ergebnisse. Addiere alle Häufigkeiten für die Gesamtzahl.')
],
6: [
 t('negative','Negative Zahlen','Zahlen','Rechnen unter null.','Minus plus Plus: Beachte die Beträge. Zwei negative Faktoren ergeben ein positives Produkt.'),
 t('fractions','Brüche addieren und subtrahieren','Brüche','Auf einen gemeinsamen Nenner bringen.','Mache die Nenner gleich. Addiere oder subtrahiere dann nur die Zähler.'),
 t('fractionProduct','Brüche mal und geteilt','Brüche','Multiplizieren und mit dem Kehrwert teilen.','Multipliziere Zähler mit Zähler und Nenner mit Nenner. Beim Teilen multiplizierst du mit dem Kehrwert.'),
 t('decimal','Dezimalzahlen','Zahlen','Kommazahlen sicher berechnen.','Bei Addition stehen die Kommas untereinander. Beim Multiplizieren zählst du die Nachkommastellen.'),
 t('percent','Prozentrechnung','Zuordnungen','Prozentwert und Grundwert.','p % bedeutet p von 100. Prozentwert W = G · p / 100.'),
 t('proportion','Proportional und Dreisatz','Zuordnungen','Vom Einzelpreis zur Gesamtmenge.','Bei proportionaler Zuordnung bleibt der Quotient gleich. Doppelte Menge kostet doppelt so viel.'),
 t('inverse','Antiproportionale Zuordnung','Zuordnungen','Mehr Helfer, weniger Zeit.','Bei antiproportionaler Zuordnung bleibt das Produkt gleich, wenn die Arbeitsleistung je Person gleich ist.'),
 t('circle','Kreis und Umfang','Geometrie','Radius und Durchmesser unterscheiden.','Durchmesser d = 2r. Umfang U = 2πr. Kreisfläche A = πr².'),
 t('mean','Mittelwert und Median','Daten & Zufall','Daten zusammenfassen.','Mittelwert = Summe / Anzahl. Für den Median werden die Werte zuerst sortiert.')
],
7: [
 t('terms','Terme und Variablen','Algebra','Gleichartige Terme zusammenfassen.','Nur gleichartige Terme lassen sich addieren: 3x + 2x = 5x.'),
 t('equation','Lineare Gleichungen','Algebra','Die unbekannte Zahl finden.','Führe auf beiden Seiten dieselbe Rechenoperation aus, bis x allein steht.'),
 t('distribute','Klammern auflösen','Algebra','Das Distributivgesetz anwenden.','a(b + c) = ab + ac. Ein Minus vor einer Klammer verändert alle Vorzeichen in ihr.'),
 t('linear','Lineare Funktionen','Funktionen','Steigung und Achsenabschnitt verstehen.','Eine lineare Funktion hat die Form f(x) = mx + b. m ist die Steigung, b der y-Achsenabschnitt.'),
 t('triangle','Dreiecke und Winkel','Geometrie','Winkelsumme und Dreiecksarten.','Die Innenwinkel eines Dreiecks ergeben zusammen 180°.'),
 t('congruence','Kongruenz und Thales','Geometrie','Wann Dreiecke eindeutig bestimmt sind.','SSS, SWS und WSW sind Kongruenzsätze. Nach Thales ist der Winkel über dem Halbkreisdurchmesser 90°.'),
 t('percent','Prozent im Alltag','Alltag','Rabatte und Erhöhungen verstehen.','Nach einem Rabatt von p % verbleiben (100 − p) % des ursprünglichen Preises.'),
 t('probability','Wahrscheinlichkeit','Daten & Zufall','Laplace-Experimente berechnen.','Sind alle Ergebnisse gleich wahrscheinlich, gilt P(E) = günstige Ergebnisse / alle Ergebnisse.'),
 t('mean','Statistische Kennwerte','Daten & Zufall','Mittelwert, Median und Spannweite.','Die Spannweite ist größter minus kleinster Wert.')
],
8: [
 t('systems','Lineare Gleichungssysteme','Algebra','Zwei Unbekannte gemeinsam bestimmen.','Löse zum Beispiel durch Einsetzen, Gleichsetzen oder Addieren. Prüfe beide Gleichungen.'),
 t('pythagoras','Satz des Pythagoras','Geometrie','Seiten im rechtwinkligen Dreieck.','a² + b² = c². Die Hypotenuse c liegt dem rechten Winkel gegenüber.'),
 t('roots','Quadratwurzeln','Zahlen','Quadratzahlen und Wurzeln.','√a ist die nichtnegative Zahl, deren Quadrat a ergibt. Für reelle Wurzeln muss a ≥ 0 sein.'),
 t('rational','Rationale Funktionen','Funktionen','Mit Brüchen als Funktion rechnen.','Bei f(x) = a/x ist x = 0 ausgeschlossen. Die Koordinatenachsen sind Asymptoten für a ≠ 0.'),
 t('interest','Zinsen und Zinseszins','Alltag','Wie Kapital wächst.','Ein Jahr: Z = K · p / 100. Mehrere Jahre mit Zinseszins: Kₙ = K₀ · (1 + p/100)ⁿ.'),
 t('compound','Mehrstufiger Zufall','Daten & Zufall','Baumdiagramme und Pfadregeln.','Entlang eines Pfades multiplizieren, bei mehreren günstigen Pfaden deren Wahrscheinlichkeiten addieren.'),
 t('binomialFormula','Binomische Formeln','Algebra','Quadratische Klammern ausrechnen.','(a + b)² = a² + 2ab + b². (a − b)² = a² − 2ab + b². (a + b)(a − b) = a² − b².'),
 t('surface','Oberfläche und Volumen','Geometrie','Quader und Prismen berechnen.','Quaderoberfläche O = 2(ab + ac + bc), Volumen V = abc.')
],
9: [
 t('quadratic','Quadratische Gleichungen','Algebra','Nullstellen und p-q-Formel.','Für x² + px + q = 0 gilt x = −p/2 ± √((p/2)² − q).'),
 t('powers','Potenzgesetze','Zahlen','Exponenten richtig verknüpfen.','aᵐ · aⁿ = aᵐ⁺ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1 für a ≠ 0.'),
 t('rootRules','Wurzelgesetze','Zahlen','Wurzeln vereinfachen.','Für a, b ≥ 0 gilt √(ab) = √a · √b. Die Wurzel einer Summe lässt sich so nicht zerlegen.'),
 t('trig','Sinus, Kosinus, Tangens','Geometrie','Seitenverhältnisse im rechtwinkligen Dreieck.','sin α = Gegenkathete/Hypotenuse; cos α = Ankathete/Hypotenuse; tan α = Gegenkathete/Ankathete.'),
 t('intercept','Strahlensätze','Geometrie','Ähnliche Dreiecke und Maßstäbe.','Bei ähnlichen Dreiecken stehen entsprechende Seiten im gleichen Verhältnis.'),
 t('parabola','Quadratische Funktionen','Funktionen','Scheitelpunkte und Funktionswerte.','f(x) = a(x − d)² + e hat den Scheitelpunkt S(d | e).'),
 t('cylinder','Kreis, Zylinder und Kegel','Geometrie','Runde Körper berechnen.','Zylinder: V = πr²h. Kegel: V = πr²h/3.'),
 t('conditional','Bedingte Wahrscheinlichkeit','Daten & Zufall','Mit Zusatzwissen neu rechnen.','P(A | B) = P(A ∩ B) / P(B), sofern P(B) > 0.')
],
10: [
 t('polynomial','Polynome und Nullstellen','Funktionen','Ganzrationale Funktionen untersuchen.','Eine Nullstelle x₀ erfüllt f(x₀) = 0. Ein Produkt ist 0, wenn mindestens ein Faktor 0 ist.'),
 t('exponential','Exponentielles Wachstum','Funktionen','Wachstumsfaktoren und Zerfall.','f(t) = a · qᵗ. Bei p % Wachstum gilt q = 1 + p/100; bei Abnahme q = 1 − p/100.'),
 t('log','Logarithmen','Funktionen','Den Exponenten bestimmen.','log_b(a) = x bedeutet bˣ = a. Es gilt a > 0, b > 0 und b ≠ 1.'),
 t('trigExtended','Erweiterte Trigonometrie','Geometrie','Winkel, Bogenmaß und Kosinussatz.','180° entsprechen π im Bogenmaß. Kosinussatz: c² = a² + b² − 2ab cos γ.'),
 t('derivative','Ableitung kennenlernen','Analysis','Änderungsraten und Tangenten.','Für f(x) = xⁿ gilt f′(x) = n · xⁿ⁻¹. Die Ableitung beschreibt die momentane Änderungsrate.'),
 t('combinations','Kombinatorik','Daten & Zufall','Möglichkeiten systematisch zählen.','n verschiedene Objekte lassen sich auf n! Arten anordnen. Ohne Reihenfolge: n über k.'),
 t('binomial','Binomialverteilung','Daten & Zufall','Wiederholte unabhängige Versuche.','P(X = k) = (n über k) · pᵏ · (1 − p)ⁿ⁻ᵏ bei unabhängigen Versuchen mit gleichbleibendem p.'),
 t('statistics','Statistik kritisch lesen','Daten & Zufall','Lage, Streuung und Stichproben.','Ein Mittelwert allein beschreibt eine Verteilung nicht vollständig. Beachte auch Streuung und Auswahl der Stichprobe.'),
 t('sphere','Kugel und Körper','Geometrie','Volumen und Oberfläche einer Kugel.','Kugel: V = 4πr³/3 und O = 4πr².')
],
11: [
 t('derivative','Ableitungsregeln','Analysis','Potenz-, Produkt- und Kettenregel.','Produkt: (uv)′ = u′v + uv′. Kette: (f(g(x)))′ = f′(g(x)) · g′(x).'),
 t('extrema','Extrem- und Wendepunkte','Analysis','Kurven systematisch untersuchen.','Extremstellen: f′ = 0 und Vorzeichenwechsel von f′. Hinreichend: f″ ≠ 0. Wendestellen: Vorzeichenwechsel von f″.'),
 t('integral','Stammfunktionen und Integrale','Analysis','Flächen und orientierte Integrale.','∫xⁿ dx = xⁿ⁺¹/(n+1) + C für n ≠ −1. Ein bestimmtes Integral ist F(b) − F(a).'),
 t('exponential','Exponentialfunktionen','Analysis','Wachstum und Zerfall modellieren.','f(t) = a · eᵏᵗ. Für k > 0 wächst die Funktion, für k < 0 fällt sie.'),
 t('vectors','Vektoren im Raum','Lineare Algebra','Vektoren addieren und skalieren.','Addiere Vektoren komponentenweise. Der Betrag ist √(x² + y² + z²).'),
 t('dot','Skalarprodukt und Winkel','Lineare Algebra','Orthogonalität erkennen.','a · b = a₁b₁ + a₂b₂ + a₃b₃. Für von null verschiedene Vektoren bedeutet a · b = 0: senkrecht.'),
 t('binomial','Bernoulli und Binomialverteilung','Stochastik','Erfolgszahlen berechnen.','Bei einer Binomialverteilung sind die Versuche unabhängig mit konstantem p. Erwartungswert E(X) = np.')
],
12: [
 t('integral','Integralrechnung','Analysis','Bestimmte Integrale und Flächen.','Teile für geometrische Flächen an Nullstellen auf und addiere die Beträge der Teilintegrale.'),
 t('extrema','Kurvendiskussion','Analysis','Extrema und Wendestellen bestimmen.','Untersuche Definitionsbereich, Nullstellen, Ableitungen und Grenzverhalten.'),
 t('lines','Geraden und Ebenen','Analytische Geometrie','Parameterdarstellungen verstehen.','Gerade: x = p + t · v. Ebene: x = p + s · u + t · v mit unabhängigen Richtungsvektoren.'),
 t('distance','Abstände und Lagebeziehungen','Analytische Geometrie','Punkte, Geraden und Ebenen.','Der Punktabstand ist die Länge des Differenzvektors. Prüfe Lagebeziehungen durch Gleichsetzen.'),
 t('matrices','Matrizen','Lineare Algebra','Matrizen multiplizieren.','Für einen Produkteintrag wird eine Zeile der ersten mit einer Spalte der zweiten Matrix verknüpft.'),
 t('conditional','Vierfeldertafeln und Bayes','Stochastik','Bedingte Wahrscheinlichkeiten verstehen.','Für P(A | B) ist B die Bezugsmenge. Bayes: P(A | B) = P(B | A)P(A)/P(B).'),
 t('hypothesis','Hypothesentests','Stochastik','Nullhypothesen und Fehlerarten.','Fehler 1. Art: Eine wahre Nullhypothese wird verworfen. Das Signifikanzniveau begrenzt diese Wahrscheinlichkeit.')
],
13: [
 t('integral','Analysis · Abiturtraining','Analysis','Integrale und Flächen wiederholen.','Eine Stammfunktion F erfüllt F′ = f. Für das bestimmte Integral gilt F(b) − F(a).'),
 t('extrema','Kurvendiskussion · Vertiefung','Analysis','Ableitungen sinnvoll deuten.','Ein notwendiges Kriterium allein reicht nicht: Prüfe den Vorzeichenwechsel oder ein hinreichendes Kriterium.'),
 t('lines','Geraden und Ebenen · Training','Analytische Geometrie','Mit Parametern im Raum rechnen.','Setze den Parameter ein und rechne jede Koordinate einzeln aus.'),
 t('dot','Vektoren und Winkel · Training','Analytische Geometrie','Skalarprodukte sicher berechnen.','cos α = (a · b) / (|a| · |b|) für von null verschiedene Vektoren.'),
 t('matrices','Matrizen · Training','Lineare Algebra','Produkte und Dimensionen.','Bei A mit m×n und B mit n×p hat AB die Größe m×p.'),
 t('binomial','Binomialverteilung · Training','Stochastik','Erwartungswerte und Ereignisse.','E(X) = np und Var(X) = np(1 − p).'),
 t('hypothesis','Hypothesentests · Training','Stochastik','Testentscheidungen einordnen.','Nichtverwerfen von H₀ beweist H₀ nicht. Ein Test kann Fehler 1. und 2. Art machen.')
]
};
// Ergänzende Grundlagen, die beim Übergang zwischen Klassen häufig gebraucht werden.
curriculum[1].push(t('numberLine','Zahlenstrahl und Abstände','Entdecken','Abstände auf dem Zahlenstrahl erkennen.','Der Abstand zwischen zwei Zahlen ist die größere minus die kleinere Zahl.'));
curriculum[2].push(t('sequence','Zahlenmuster','Entdecken','Regeln in Zahlenfolgen finden.','Berechne die Differenz benachbarter Zahlen. Bei einer gleichmäßigen Folge bleibt sie gleich.'));
curriculum[3].push(t('calendar','Kalender und Wochentage','Alltag','In Tagen und Wochen denken.','Nach 7 Tagen ist wieder derselbe Wochentag. Rechne vollständige Wochen zuerst ab.'));
curriculum[4].push(t('solids','Körper und Würfelnetze','Geometrie','Flächen, Kanten und Ecken unterscheiden.','Ein Würfel hat 6 quadratische Flächen, 12 Kanten und 8 Ecken. Gegenüberliegende Flächen sind parallel.'));
curriculum[5].push(t('gcd','ggT und kgV','Zahlen','Gemeinsame Teiler und Vielfache.','Der ggT ist der größte gemeinsame Teiler. Für positive ganze Zahlen gilt: kgV(a,b) = a · b / ggT(a,b).'));
curriculum[6].push(t('triangleArea','Dreieck und Parallelogramm','Geometrie','Grundseite und Höhe richtig einsetzen.','Dreieck: A = g · h / 2. Parallelogramm: A = g · h. Die Höhe steht senkrecht auf der Grundseite.'));
curriculum[7].push(t('inequality','Lineare Ungleichungen','Algebra','Lösungsbereiche bestimmen.','Beim Multiplizieren oder Dividieren mit einer negativen Zahl kehrt sich das Ungleichheitszeichen um.'));
curriculum[7].push(t('construction','Geometrisch konstruieren','Geometrie','Zirkel und Lineal gedanklich einsetzen.','Eine Mittelsenkrechte steht im rechten Winkel auf einer Strecke und geht durch deren Mittelpunkt. Jeder ihrer Punkte ist von beiden Endpunkten gleich weit entfernt.'));
curriculum[8].push(t('slope','Steigung und Schnittpunkte','Funktionen','Geraden aus Punkten bestimmen.','Zwischen zwei Punkten gilt m = (y₂ − y₁)/(x₂ − x₁), sofern x₂ ≠ x₁. Am Schnittpunkt haben beide Funktionen denselben y-Wert.'));
curriculum[9].push(t('factor','Faktorisieren','Algebra','Gemeinsame Faktoren ausklammern.','Beim Ausklammern wird ein gemeinsamer Faktor vor die Klammer gezogen: ax + ay = a(x + y).'));
curriculum[10].push(t('change','Mittlere Änderungsrate','Analysis','Vom Differenzenquotienten zur Ableitung.','Die mittlere Änderungsrate auf [a,b] ist (f(b) − f(a))/(b − a). Sie ist die Steigung der Sekante.'));
export const gradeLabel = n => n <= 4 ? 'Grundschule' : n <= 10 ? 'Sekundarstufe I' : 'Oberstufe / Abitur';
export const topicCount = Object.values(curriculum).reduce((n, a) => n + a.length, 0);
