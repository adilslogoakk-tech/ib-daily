'use strict';
// Deutsche Version des Buchs (Teil D).
window.BOOK_DE = window.BOOK_DE || {};
BOOK_DE.mult = { title: 'Multiples: welches wann', tag: 'Bewertung',
  intro: "Multiples sind der schnellste Weg, ein Unternehmen zu bewerten: Statt einer langen Prognose vergleichen wir es mit ähnlichen. Aber jedes Multiple hat seinen Anwendungsbereich, und eine falsche Wahl führt zu absurden Schlüssen.",
  blocks: [
    ['h', 'Die Idee eines Multiples'],
    ['p', "Ein Multiple ist das Verhältnis des Unternehmenswerts zu einer Kennzahl: Gewinn, Umsatz, Buchwert des Eigenkapitals. Es beantwortet die Frage „wie viel zahlt der Markt für eine Einheit dieser Kennzahl“. Handeln vergleichbare Unternehmen zu 8x EBITDA, lässt sich ein Unternehmen mit 100 Mio. € EBITDA auf etwa 800 Mio. € bewerten."],
    ['h', 'Zwei Familien von Multiples'],
    ['p', "Merke dir die Hauptregel: Zähler und Nenner müssen sich auf dieselben Investoren beziehen."],
    ['tbl', ['Familie', 'Multiples', 'Kennzahlen im Nenner'], [
      ['EV-Ebene (vor Schulden)', 'EV/Revenue, EV/EBITDA, EV/EBIT', 'Umsatz, EBITDA, EBIT'],
      ['Equity-Ebene (nach Schulden)', 'P/E, P/B, PEG, Dividenden- und FCF-Rendite', 'Net Income, EPS, Buchwert des Eigenkapitals']
    ]],
    ['h', 'Die wichtigsten Multiples mit Beispielen'],
    ['ul', [
      "**EV/EBITDA.** Das Arbeitstier von M&A. EV 1.200 und EBITDA 150 ergeben 8,0x. Unabhängig von Schulden, Steuern und Abschreibungen.",
      "**EV/EBIT.** Besser für kapitalintensive Geschäfte, weil es den Verschleiß berücksichtigt. EV 900 und EBIT 100 ergeben 9,0x.",
      "**EV/Revenue.** Für Unternehmen ohne Gewinn oder mit instabiler Marge. EV 600 und Umsatz 200 ergeben 3,0x.",
      "**P/E.** Aktienkurs zu Gewinn je Aktie. Kurs 45 und EPS 2,5 ergeben 18x. Der Kehrwert, die Earnings Yield, zeigt die „Rendite“ der Aktie: Bei P/E 25 beträgt sie 1/25 = 4 %.",
      "**P/B.** Marktkapitalisierung zu Buchwert des Eigenkapitals. 600 / 400 = 1,5x. Zentral für Banken.",
      "**PEG.** P/E geteilt durch die Gewinnwachstumsrate in Prozent. Bei P/E 20 und 10 % Wachstum ist PEG 2,0. Hilft, ein teures, schnell wachsendes mit einem günstigen, langsamen Unternehmen zu vergleichen.",
      "**Dividendenrendite und FCF Yield.** Dividende 3 bei Kurs 60 ergibt 5 %. FCF 50 bei Marktkapitalisierung 1.000 ebenfalls 5 %."
    ]],
    ['h', 'Was die Höhe eines Multiples bestimmt'],
    ['p', "Ein Multiple ist nicht zufällig. Es ist höher bei Unternehmen mit schnellem Wachstum, hoher Marge und hoher Rendite auf das Kapital (ROIC) sowie niedrigem Risiko (niedrigem WACC). Handelt ein Unternehmen zu 20x EBITDA, seine Peers aber zu 8x, erwartet der Markt von ihm deutlich mehr Wachstum oder hält es für deutlich zuverlässiger."],
    ['h', 'Wahl des Multiples nach Branche'],
    ['tbl', ['Branche', 'Typische Multiples', 'Warum'], [
      ['Banken, Versicherer', 'P/E, P/B, P/TBV', 'Schulden sind der Rohstoff einer Bank, EV ergibt keinen Sinn'],
      ['REITs (Immobilien)', 'P/FFO, P/AFFO, NAV', 'Das Net Income ist durch Immobilienabschreibungen verzerrt'],
      ['SaaS, Technologie', 'EV/ARR, EV/Revenue, Rule of 40', 'Oft kein Gewinn, das Abo-Wachstum ist wichtig'],
      ['Öl und Gas', 'EV/EBITDAX, NAV der Reserven', 'Explorationskosten werden zur Vergleichbarkeit getrennt'],
      ['Einzelhandel, Restaurants', 'EV/EBITDAR', 'Miete macht einen großen Teil der Kosten aus'],
      ['Versorger, Infrastruktur', 'EV/EBITDA, Dividendenrendite', 'Stabile Zahlungsströme, Ausschüttung wird geschätzt']
    ]],
    ['p', "**Die Rule of 40** für SaaS: Umsatzwachstum plus Marge (meist FCF-Marge) sollten mindestens 40 % ergeben. 25 % Wachstum und 10 % Marge ergeben 35 %: unter der Schwelle."],
    ['h', 'LTM und NTM'],
    ['p', "Ein Multiple lässt sich auf vergangene Kennzahlen (LTM, die letzten 12 Monate) oder prognostizierte (NTM oder 2027E) berechnen. Der Markt schaut nach vorn, daher sind Forward-Multiples bei schnell wachsenden Unternehmen deutlich niedriger als historische. Wichtig ist, gleiche Zeiträume zu vergleichen."],
    ['h', 'Typische Fallen'],
    ['ul', [
      "**Negativer oder einmaliger Gewinn.** P/E funktioniert nicht, man braucht Normalisierung oder ein anderes Multiple.",
      "**Der Höhepunkt des Zyklus.** Bei einem zyklischen Unternehmen ist am Höhepunkt der Gewinn hoch und das Multiple niedrig und täuschend billig. Man nimmt Mid-Cycle-Werte.",
      "**Unterschiedliche Bilanzierung.** Leasing nach IFRS 16 und US GAAP, aktivierte Entwicklungskosten. Ein Vergleich von „Äpfeln mit Birnen“.",
      "**Vermischung der Ebenen.** EV durch Net Income, Equity Value durch EBITDA."
    ]],
    ['q', "Warum nutzt man bei M&A häufiger EV/EBITDA als P/E?", "EV/EBITDA hängt nicht von Kapitalstruktur, Steuern und Abschreibungspolitik ab und vergleicht daher das operative Geschäft selbst. P/E hängt von den Schulden ab: Zwei gleiche Unternehmen mit unterschiedlichem Schuldenanteil haben ein unterschiedliches P/E."],
    ['q', "Wie bewertet man ein Unternehmen mit negativem EBITDA?", "Man nutzt Umsatz-Multiples (EV/Revenue, EV/ARR), Wachstums- und Unit-Economics-Kennzahlen oder einen DCF mit Erreichen einer Zielmarge. Gewinnbasierte Multiples funktionieren hier nicht."],
    ['key', "Wähle das Multiple nach Branche und Phase des Geschäfts, halte Zähler und Nenner konsistent und vergleiche gleiche Zeiträume. Ein Multiple erklärt sich durch Wachstum, Marge, Kapitalrendite und Risiko."]
  ] };

BOOK_DE.comps = { title: 'Comps, Precedents, SOTP und das Football Field', tag: 'Bewertung',
  intro: "Multiples bewerten für sich genommen nichts, solange keine passenden Vergleichsunternehmen gewählt sind. In einer Investmentbank wird eine Bewertung meist aus mehreren Methoden zusammengesetzt und in einem Diagramm gezeigt. In diesem Kapitel sehen wir, wie das geht.",
  blocks: [
    ['h', 'Trading Comps: Peers an der Börse'],
    ['p', "Die Methode vergleichbarer börsennotierter Unternehmen (Trading Comps) nimmt die Multiples ähnlicher Unternehmen, die heute an der Börse gehandelt werden, und wendet sie auf das zu bewertende an. Sie bewertet ein Minderheitspaket: Eine Kontrollprämie ist nicht enthalten."],
    ['ol', [
      "**Peer Group wählen:** derselbe Sektor und dasselbe Geschäftsmodell, vergleichbare Größe, Wachstumsraten, Marge, Geografie, Risiko.",
      "**Daten sammeln:** Aktienkurs, Anzahl der Diluted Shares, Debt, Cash, LTM- und NTM-Kennzahlen. Sie normalisieren (siehe Kapitel zur Normalisierung).",
      "**Die Multiples berechnen** für jedes Unternehmen.",
      "**Die Statistik wählen:** Median, Mittelwert, oberes und unteres Quartil. Der Median ist robust gegenüber Ausreißern.",
      "**Auf das Ziel anwenden:** Multiple × Kennzahl des Ziels = EV. Dann Net Debt abziehen, um Equity Value und Aktienkurs zu erhalten."
    ]],
    ['ex', 'Bewertung anhand von Peers', "Die Peers handeln zu EV/EBITDA von 7,5x, 8,0x, 8,5x, 9,5x und 10,0x. Der Median ist 8,5x.\nDas Ziel hat EBITDA von 75 Mio. € und Net Debt von 100 Mio. €.\nEV = 75 × 8,5 = 637,5 Mio. €.\nEquity Value = 637,5 − 100 = 537,5 Mio. €."],
    ['h', 'Precedent Transactions: frühere Deals'],
    ['p', "Die Methode vergleichbarer Transaktionen schaut, zu welchen Multiples ähnliche M&A-Deals abgeschlossen wurden. Diese Multiples enthalten eine **Kontrollprämie** und erwartete Synergien: Der Käufer zahlt mehr als den Marktpreis, um das gesamte Unternehmen zu erhalten. Daher liegen sie meist höher als Trading Comps."],
    ['p', "Wurden die Deals zu 10,5x EBITDA abgeschlossen, ist für unser Ziel EV = 75 × 10,5 = 787,5 Mio. €, deutlich höher als 637,5 aus den Peers. Vorsicht: Die Deals müssen aktuell und von vergleichbarer Größe sein, und die Marktbedingungen (Zinsen, Stimmung) ändern sich über die Jahre stark."],
    ['h', 'Welche Methode die höhere Bewertung liefert'],
    ['ul', [
      "**Precedent Transactions** liegen wegen der Kontrollprämie meist über den Comps.",
      "**Trading Comps** spiegeln den Minderheitspreis ohne Kontrolle wider.",
      "**DCF** hängt von Annahmen ab und kann alles Mögliche ergeben.",
      "**LBO-Analyse** zeigt, wie viel ein Finanzinvestor bei einer Zielrendite zahlen könnte. Oft ist das der „Boden“ der Bewertung."
    ]],
    ['h', 'SOTP: die Summe der Teile'],
    ['p', "Hat ein Unternehmen mehrere verschiedene Geschäfte (Konglomerat), lässt es sich nicht mit einem Multiple bewerten. Die Sum-of-the-Parts-Methode bewertet jedes Segment mit eigenen Peers, addiert dann, zieht Konzernkosten und Net Debt ab."],
    ['ex', 'SOTP', "Segment A: EBITDA 100 × 8x = 800.\nSegment B: EBITDA 50 × 12x = 600.\nKonzernkosten, kapitalisiert mit −100.\nEV = 800 + 600 − 100 = 1.300. Net Debt 400.\nEquity Value = 1.300 − 400 = 900."],
    ['p', "Oft ist die Summe der Teile höher als die Marktkapitalisierung. Diese Differenz heißt **Conglomerate Discount**: Der Markt zahlt für die Schwerfälligkeit des Konglomerats zu wenig, und das ist ein Grund, das Unternehmen aufzuspalten."],
    ['h', 'Das Football Field: Zusammenfassung der Methoden'],
    ['p', "Das Football Field ist ein Diagramm, in dem jede Methode einen horizontalen Balken ihrer Bewertungsspanne hat. Man sieht, wo sich die Spannen überschneiden und wo eine Methode ausreißt."],
    ['tbl', ['Methode', 'EV-Spanne, Mio. €', 'Kommentar'], [
      ['52-Wochen-Spanne', '1.450-1.850', 'Für ein börsennotiertes Unternehmen: frühere Kurse'],
      ['Trading Comps', '1.700-2.000', 'Ohne Kontrollprämie'],
      ['Precedents', '2.000-2.400', 'Mit Prämie und Synergien'],
      ['DCF (Sensitivitätstabelle)', '1.600-2.200', 'WACC 8-10 %, g 1-3 %'],
      ['LBO (IRR 20-25 %)', '1.500-1.800', 'Was ein Finanzinvestor zahlen könnte']
    ]],
    ['p', "Die Schlussfolgerung aus so einem Diagramm: Der faire Wert liegt bei etwa 1.800-2.000 Mio. €, wo sich die meisten Methoden überschneiden, und ein Angebot über 2.200 erfordert den Glauben an Synergien."],
    ['h', 'Typische Fragen bei der Auswahl von Peers'],
    ['ul', [
      "**Zu wenige Peers.** Die Kriterien erweitern: Geografie, Größe, angrenzende Branchen.",
      "**Ausreißer.** Unternehmen mit abnormalen Multiples ausschließen (Verluste, Einmalereignisse).",
      "**Unterschiedliche Geschäftsjahre.** Auf das Kalenderjahr umrechnen (Kalendarisierung).",
      "**Unterschiedliche Kapitalstrukturen.** Deshalb sind EV-Multiples besser."
    ]],
    ['q', "Wie wählt man Comparable Companies aus?", "Nach Branche und Geschäftsmodell, Größe, Wachstumsraten, Marge, Geografie und Risiko. Die Daten werden normalisiert (LTM, Adjusted EBITDA), die Multiples berechnet, und man betrachtet Median und Quartile."],
    ['q', "Warum liefern Precedent Transactions meist eine höhere Bewertung als Trading Comps?", "Weil der Preis in Deals eine Kontrollprämie und erwartete Synergien enthält, der Börsenkurs der Aktie dagegen nicht."],
    ['key', "Trading Comps zeigen den Preis von Minderheitsaktien, Precedents den Preis der Kontrolle mit Prämie, SOTP eignet sich für Konglomerate, DCF hängt von Annahmen ab. Das Football Field bringt alles in eine Spanne des fairen Werts."]
  ] };
