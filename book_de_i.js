'use strict';
// Deutsche Version des Buchs (Teil I).
window.BOOK_DE = window.BOOK_DE || {};
BOOK_DE.pitch = { title: 'Equity Research und der Stock Pitch', tag: 'Märkte',
  intro: "Ein Equity-Research-Analyst untersucht Unternehmen und empfiehlt Aktien: kaufen, halten oder verkaufen. Die Fähigkeit, eine Investmentidee (einen Stock Pitch) schnell und klar darzulegen, wird in Interviews für Research, Asset Management und manchmal IB geprüft.",
  blocks: [
    ['h', 'Woraus eine Investmentidee besteht'],
    ['ol', [
      "**These (thesis).** In zwei bis drei Sätzen: warum der Markt falsch liegt und die Aktie falsch bewertet ist.",
      "**Bewertung.** Womit du die Aktie bewertest und nach welcher Methode.",
      "**Katalysatoren.** Ereignisse, die die Unterbewertung offenlegen: Zahlen, ein neues Produkt, Regulierung, ein Deal.",
      "**Risiken.** Was die These zerstören könnte und wie du es beobachtest.",
      "**Empfehlung.** Kaufen, halten oder verkaufen, mit Kursziel und Zeitrahmen."
    ]],
    ['h', 'Wie man ein Kursziel erhält'],
    ['p', "Der häufigste Weg: prognostizierter Gewinn je Aktie mal ein Ziel-P/E. Andere Varianten: DCF je Aktie, ein Ziel-EV/EBITDA, Sum-of-the-Parts."],
    ['ex', 'Berechnung eines Kursziels', "Prognostiziertes EPS für das nächste Jahr 2,5 €. Ziel-P/E 18 (aus Peers, wachstumsbereinigt).\nKursziel = 2,5 × 18 = 45 €.\nDer aktuelle Kurs beträgt 36 €, also Upside = 45 / 36 − 1 = 25 %."],
    ['p', "Jede Bank hat eigene Schwellen für Empfehlungen: zum Beispiel „kaufen“, wenn das Potenzial über einer bestimmten Höhe liegt. Klär immer die Definition, die eine bestimmte Firma verwendet."],
    ['h', 'Wie man eine Idee vorbereitet'],
    ['ul', [
      "Lies den Geschäftsbericht, Investorenpräsentationen und Transkripte von Analystenanrufen.",
      "Verstehe das Geschäftsmodell: wie das Unternehmen verdient, wer seine Kunden und Wettbewerber sind, welche Kosten es hat.",
      "Prüfe die Qualität des Gewinns: ob er sich in Cashflow umsetzt (FCF / Net Income), ob Forderungen schneller wachsen als der Umsatz.",
      "Baue ein einfaches Modell und vergleiche die Bewertung mit Peers.",
      "Bestimme, was der Markt bereits eingepreist hat und warum du es anders siehst."
    ]],
    ['h', 'Die Struktur eines Zwei-Minuten-Pitches'],
    ['ol', [
      "**Was für ein Unternehmen** (20 Sekunden): was es macht, Größe, wer die Kunden sind.",
      "**Warum die Aktie unterbewertet ist** (30 Sekunden): ein konkretes Argument, untermauert durch eine Zahl.",
      "**Bewertung** (30 Sekunden): Methode, Multiple, Kursziel und Potenzial.",
      "**Katalysatoren** (15 Sekunden): was wann passiert.",
      "**Risiken** (15 Sekunden): die wichtigsten und was dich umstimmen würde.",
      "**Empfehlung** (10 Sekunden)."
    ]],
    ['h', 'Typische Fehler'],
    ['ul', [
      "Die Unternehmensbeschreibung nacherzählen, statt zu argumentieren, warum der Markt falsch liegt.",
      "Ein „Lieblingsunternehmen“ ohne Analyse des Preises wählen: Ein gutes Geschäft ist keine gute Investition.",
      "Keine Risiken nennen oder nur die offensichtlichen.",
      "Nicht erklären können, was bereits eingepreist ist.",
      "Zahlen ohne Prüfung und ohne Quellen nennen."
    ]],
    ['h', 'Wie man Fragen zur Idee beantwortet'],
    ['p', "Die Fragen werden scharf sein: „Und wenn der Markt fällt?“, „Warum nicht den Wettbewerber kaufen?“, „Was ist eingepreist?“. Antworte zur Sache, räume Schwachstellen ein und zeige, wie du sie beobachtest. Ein ehrliches „Ich weiß es nicht, ich prüfe es“ ist besser als eine erfundene Zahl."],
    ['q', "Pitch me a stock.", "Beschreibe das Unternehmen in 20 Sekunden, erkläre, warum der Markt bei der Bewertung falsch liegt, nenne Bewertung und Kursziel, 2-3 Katalysatoren, die wichtigsten Risiken und die Bedingung, unter der du deine Meinung revidierst, dann gib die Empfehlung."],
    ['q', "Wie kommen Sie zu einem Kursziel?", "Zum Beispiel multipliziere ich das prognostizierte EPS mit einem Ziel-P/E, oder berechne einen DCF je Aktie, oder wende ein Ziel-EV/EBITDA auf das prognostizierte EBITDA an, ziehe Net Debt ab und teile durch die Anzahl der Diluted Shares."],
    ['key', "Ein guter Pitch besteht aus These, Bewertung, Katalysatoren, Risiken und einer Empfehlung, untermauert mit Zahlen. Die Unterbewertung muss erklärt werden: was der Markt übersieht und was ihn dazu bringt, es anzuerkennen."]
  ] };

BOOK_DE.interview = { title: 'So bestehst du ein Investmentbanking-Interview', tag: 'Karriere',
  intro: "Ein IB-Interview besteht aus einem technischen und einem Verhaltensteil, und beide werden nach Struktur, Tempo und Sicherheit beurteilt. Dieses Kapitel fasst typische Phasen, Fragen und Vorbereitungswege an einem Ort zusammen.",
  blocks: [
    ['h', 'Die Phasen der Auswahl'],
    ['ol', [
      "**Bewerbung und Lebenslauf.** Ein einseitiger Lebenslauf mit Zahlen und Ergebnissen.",
      "**Online-Tests.** Numerische (Tabellen lesen, Prozente, Proportionen), logische, manchmal Sprachtests. Sie werden schnell gelöst, auf Zeit.",
      "**Das erste Interview** mit einem Analyst oder Associate: Vorstellung, Motivation, technische Grundfragen.",
      "**Das zweite und finale** mit einem VP oder Director, manchmal mehrere hintereinander (Superday oder Assessment Centre): Technik, Cases, Verhaltensfragen, Gruppenaufgaben."
    ]],
    ['h', 'Technische Fragen nach Themen'],
    ['ul', [
      "**Rechnungswesen:** die drei Abschlüsse und ihr Zusammenhang, Wirkung von Vorgängen auf die Abschlüsse, DSO, Working Capital.",
      "**Bewertung:** EV und Equity Value, DCF, WACC, Multiples, Comps und Precedents.",
      "**M&A:** Accretion/Dilution, Verkaufsprozess, Synergien, Deal-Arten.",
      "**LBO:** Struktur, Rendite, Kandidaten.",
      "**Märkte:** aktuelle Ereignisse, Zinsen, eine Lieblingsaktie, ein aktueller Deal."
    ]],
    ['h', 'Wie man „Walk me through…“ beantwortet'],
    ['p', "Die Struktur: Definition, Schritte, Schlussfolgerung und Bedeutung. Zum Beispiel zum DCF: was es ist (Bewertung aus Zahlungsströmen), die Schritte (Prognose, Terminal Value, Abzinsung, EV), die Schlussfolgerung (wir ziehen Schulden ab und erhalten den Aktienkurs) und wann die Methode gut oder schwach ist. Sprich sicher und der Reihe nach, spring nicht."],
    ['h', 'Verhaltensfragen'],
    ['ul', [
      "**Walk me through your CV.** Zwei Minuten, eine Chronologie und zwei bis drei Fäden, die zum IB führen.",
      "**Why investment banking?** Konkrete Gründe: intellektuelle Arbeit, Lernen, Verantwortung, Märkte. Nicht „Geld“ und nicht „Prestige“.",
      "**Why this bank?** Zwei bis drei Gründe auf Basis realer Informationen (Deals, Team, Sektor).",
      "**Stärken und Schwächen.** Eine echte Schwäche, mit den Schritten zu ihrer Behebung.",
      "**Teamarbeit, Misserfolg, Stress.** Nutze die STAR-Struktur: Situation, Task, Action, Result."
    ]],
    ['h', 'Kopfrechnen und Tempo'],
    ['p', "Lerne, Prozente, Brüche, Multiplikation und Division im Kopf zu rechnen, besonders Operationen wie „30 % von 450“, „Wachstum von 120 auf 150“, „EV aus Multiple und EBITDA“. Gewöhne dich daran, die Antwort laut zu sagen und die Größenordnung zu prüfen."],
    ['h', 'Was tun, wenn du die Antwort nicht kennst'],
    ['ul', [
      "Schweige nicht: Denk laut, das zeigt deine Logik.",
      "Zerlege in Teile und kläre die Bedingungen.",
      "Erfinde keine Zahlen und Fakten. „Ich bin nicht sicher, aber die Logik ist…“ klingt besser als ein selbstbewusster Fehler.",
      "Wenn du dich geirrt hast, räume es ruhig ein und korrigiere dich."
    ]],
    ['h', 'Vorbereitung auf Märkte und Deals'],
    ['p', "Lies täglich die wichtigsten Nachrichten (Deals, Zinsen, Zahlen). Bereite zwei bis drei Deals vor, die du untersucht hast: die Parteien, Multiples, Logik, Zahlungsform, deine Meinung zum Preis. Eine Frage zu einem aktuellen Deal ist fast garantiert."],
    ['h', 'Besonderheiten für internationale Kandidaten'],
    ['p', "Wenn du im Ausland studierst und dein Deutsch auf B2-Niveau ist, sei darauf vorbereitet, offen über die Sprache zu sprechen: Nenne dein Niveau, erkläre, wie du es verbesserst, und zeige, dass dein Arbeitsenglisch stark ist. Viele internationale Teams in Deutschland arbeiten auf Englisch. Gehe mit Fragen zur Arbeitserlaubnis ruhig und ehrlich um: Es ist ein Standardverfahren, und Unternehmen, die internationale Studierende einstellen, kennen es."],
    ['h', 'Ein Vorbereitungsplan für vier Wochen'],
    ['ol', [
      "**Woche 1.** Rechnungswesen und die drei Abschlüsse, EV und Equity Value, Multiples. Der Tagesplan in Mandate.",
      "**Woche 2.** DCF, WACC, Comps. Interviewmodus einmal täglich.",
      "**Woche 3.** M&A, Accretion/Dilution, LBO. Zwei Deals zur Diskussion.",
      "**Woche 4.** Wiederholung schwacher Themen, Verhaltensantworten laut, ein Probeinterview mit einem Freund."
    ]],
    ['h', 'Fragen, die man dem Interviewer stellen sollte'],
    ['ul', [
      "Wie sieht ein typischer Tag eines Analysten in Ihrem Team aus?",
      "An welchen Deals hat das Team zuletzt gearbeitet (im Rahmen öffentlicher Informationen)?",
      "Wie ist die Einarbeitung neuer Mitarbeiter organisiert?",
      "Was zeichnet erfolgreiche Analysten im ersten Jahr aus?"
    ]],
    ['q', "Erzählen Sie etwas über sich.", "Zwei Minuten: Ausbildung und wichtigste Erfahrung, was zum Interesse am IB geführt hat (konkrete Fähigkeiten und Ereignisse), warum jetzt diese Rolle der nächste Schritt ist und warum diese Firma."],
    ['q', "Warum sollten wir gerade Sie einstellen?", "Nenne drei konkrete Stärken, untermauert durch Beispiele: analytische Ausbildung, Finanzwissen, Motivation und Lerngeschwindigkeit. Gibt es eine Schwachstelle (Sprache, Erfahrung), zeige, wie du sie schließt."],
    ['key', "Im Interview werden Struktur, Tempo und Ehrlichkeit geschätzt. Bereite die Technik nach Themen vor, Verhaltensantworten nach dem STAR-Schema, zwei bis drei untersuchte Deals und eigene Fragen. Wenn du eine Antwort nicht kennst, denke laut, statt etwas zu erfinden."]
  ] };
