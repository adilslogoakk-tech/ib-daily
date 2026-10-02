'use strict';
// Deutsche Version des Buchs (Teil G).
window.BOOK_DE = window.BOOK_DE || {};
BOOK_DE.accdil = { title: 'Accretion und Dilution: was ein Deal mit dem EPS macht', tag: 'Transaktionen',
  intro: "Wenn der Käufer einen Deal ankündigt, beantwortet er immer die Frage: Steigt oder sinkt der Gewinn je Aktie? Genau darauf reagiert der Markt. Das Accretion/Dilution-Modell zeigt die Wirkung eines Deals auf das EPS in Abhängigkeit von Preis, Zahlungsweise und Synergien.",
  blocks: [
    ['h', 'Die Idee'],
    ['p', "Ein Deal ist **accretive**, wenn das EPS des fusionierten Unternehmens höher ist als das EPS des Käufers vor dem Deal. Ist es niedriger, ist der Deal **dilutive**. Das ist nicht dasselbe wie Wertschöpfung, aber für den Markt und den Vorstand die Schlüsselkennzahl."],
    ['key', "Neues EPS = (NI des Käufers + NI des Ziels + Synergien nach Steuern − Finanzierungskosten nach Steuern − Abschreibung der Aufwertung) / (alte Aktien + neue Aktien)"],
    ['h', 'Beispiel: Aktien oder Geld'],
    ['p', "Der Käufer verdient 100 Mio. € bei 50 Mio. Aktien, EPS = 2,00 €, Aktienkurs 40 € (P/E = 20). Das Ziel verdient 30 Mio. €, der Kaufpreis beträgt 300 Mio. € (P/E des Ziels = 10)."],
    ['ul', [
      "**Zahlung in Aktien.** Es müssen 300 / 40 = 7,5 Mio. Aktien ausgegeben werden. EPS = (100 + 30) / (50 + 7,5) = 130 / 57,5 = 2,26 €. Wachstum 13 %: Der Deal ist accretive.",
      "**Zahlung in bar aus Schulden zu 6 %, Steuer 25 %.** Zinsen nach Steuern = 300 × 6 % × 0,75 = 13,5. EPS = (100 + 30 − 13,5) / 50 = 2,33 €. Wachstum 16,5 %: ebenfalls accretive, und stärker."
    ]],
    ['p', "Beide Varianten sind accretive, weil der Käufer das Ziel mit einem P/E von 10 bezahlt (Rendite 10 %), seine eigenen Aktien aber mit einem P/E von 20 bewertet sind (Rendite 5 %) und Schulden nach Steuern 4,5 % kosten. Der billige Gewinn des Ziels überwiegt den Preis der Finanzierung."],
    ['h', 'Die Wirkung von Synergien'],
    ['p', "Angenommen, es werden Synergien von 20 Mio. € vor Steuern erwartet, also 20 × 0,75 = 15 nach Steuern. EPS bei Zahlung in Aktien: (130 + 15) / 57,5 = 2,52. Bei Zahlung in bar: (130 + 15 − 13,5) / 50 = 2,63."],
    ['h', 'Die Wirkung der Aufwertung von Vermögenswerten'],
    ['p', "Werden die Vermögenswerte des Ziels um 50 aufgewertet und über 10 Jahre abgeschrieben, kommen 5 Mio. € Aufwand hinzu, nach Steuern 3,75. Das EPS bei Zahlung in Aktien sinkt auf (130 − 3,75) / 57,5 = 2,20. Goodwill wird nicht abgeschrieben, beeinflusst das EPS also nicht."],
    ['h', 'Schnelle Regeln'],
    ['ul', [
      "**Zahlung in Aktien:** Der Deal ist accretive, wenn das P/E des Käufers höher ist als das P/E, zu dem das Ziel gekauft wird. Der Käufer zahlt mit „teurer“ Währung für „billigen“ Gewinn.",
      "**Zahlung mit Schulden:** Der Deal ist accretive, wenn die „Gewinnrendite“ des Ziels (1 / P/E) höher ist als die Fremdkapitalkosten nach Steuern.",
      "**Zahlung in bar vom Konto:** Man vergleicht die Rendite des Ziels mit der entgangenen Rendite auf das Geld."
    ]],
    ['p', "Ein Beispiel zur Regel: Ein Käufer mit P/E 25 kauft ein Ziel mit P/E 10 gegen Aktien. Er erhält mehr Gewinn für jeden Euro ausgegebenes Kapital, also ist der Deal accretive."],
    ['h', 'Der Break-even-Punkt bei Synergien'],
    ['p', "Ist ein Deal dilutive, berechnet man, wie viele Synergien nötig sind, damit das EPS gleich bleibt. Dazu bildet man die Differenz zwischen dem EPS vor dem Deal × neuer Aktienanzahl und dem Gewinn des fusionierten Unternehmens ohne Synergien. Diese Differenz nach Steuern sind die nötigen Synergien."],
    ['h', 'Accretion ist nicht gleich Wertschöpfung'],
    ['p', "Ein Deal kann accretive sein und trotzdem Wert vernichten, wenn der Käufer zu viel gezahlt oder ein Geschäft mit niedriger Kapitalrendite gekauft hat. Zum Beispiel macht billiges Fremdkapital fast jeden Kauf accretive, aber riskant. Deshalb schaut man auch auf den ROIC des Ziels, den Preis und die strategische Logik."],
    ['warn', "Die Steuer auf Synergien und Zinsen vergessen oder die neuen Aktien nicht berücksichtigen. Ein weiterer Fehler: anzunehmen, dass accretive immer gut ist."],
    ['q', "Ein Käufer mit P/E 25 kauft ein Ziel mit P/E 10 gegen Aktien. Accretive oder dilutive?", "Accretive: Der Käufer gibt teure Aktien aus und erhält dafür billigen Gewinn, daher steigt das EPS."],
    ['q', "Walk me through a merger model.", "Wir nehmen die Gewinne von Käufer und Ziel, addieren Synergien und Finanzierungskosten nach Steuern, berücksichtigen die Abschreibung der Aufwertung und die neuen Aktien. Wir teilen durch die Pro-forma-Aktienanzahl und vergleichen mit dem ursprünglichen EPS des Käufers."],
    ['key', "Das neue EPS setzt sich aus den Gewinnen der zwei Unternehmen, Synergien, Finanzierungskosten und der Aktienanzahl zusammen. Bei Zahlung in Aktien ist das P/E des Käufers gegen das P/E des Ziels der Schlüssel, bei Zahlung mit Schulden die Rendite des Ziels gegen die Fremdkapitalkosten."]
  ] };

BOOK_DE.lbo = { title: 'LBO: Übernahme mit Fremdkapital', tag: 'Transaktionen',
  intro: "Ein Leveraged Buyout ist der Kauf eines Unternehmens mit überwiegend geliehenem Geld. Ein Finanzinvestor (der Sponsor) bringt einen kleinen Teil des Preises ein, den Rest liefern Schulden, die später aus dem Cashflow des Unternehmens selbst getilgt werden. Nach einigen Jahren wird das Unternehmen verkauft.",
  blocks: [
    ['h', 'Wie ein LBO aufgebaut ist'],
    ['ol', [
      "Der Sponsor kauft das Unternehmen für dessen EV und finanziert einen Teil mit Schulden, einen Teil mit eigenem Kapital (Equity).",
      "Über 3-7 Jahre tilgt das Unternehmen die Schulden aus dem Free Cashflow.",
      "Der Sponsor verkauft das Unternehmen (Exit) und erhält den Rest nach Tilgung der Schulden."
    ]],
    ['p', "Die Idee ist, dass Schulden die Rendite verstärken. Wächst das Geschäft und tilgt Schulden, steigt der Anteil des Eigenkapitals am Preis schnell, obwohl wenig eingesetzt wurde."],
    ['h', 'Ein Mini-Beispiel (Paper LBO)'],
    ['p', "Der Sponsor kauft ein Unternehmen mit EBITDA von 100 Mio. € zu 9x EBITDA und finanziert 5x EBITDA mit Schulden."],
    ['tbl', ['Einstieg', 'Mio. €'], [
      ['EBITDA', '100'],
      ['EV bei 9x', '900'],
      ['Schulden (5x EBITDA)', '500'],
      ['Equity des Sponsors', '400']
    ]],
    ['p', "Free Cashflow zur Schuldentilgung in 5 Jahren: 60, 70, 80, 85 und 90, insgesamt 385. Schulden beim Exit: 500 − 385 = 115. EBITDA im fünften Jahr 140, das Exit-Multiple ist dasselbe 9x."],
    ['tbl', ['Exit (Jahr 5)', 'Mio. €'], [
      ['EBITDA', '140'],
      ['EV bei 9x', '1.260'],
      ['Schulden', '115'],
      ['Equity beim Exit', '1.145']
    ]],
    ['key', "MOIC = 1.145 / 400 = 2,86x. IRR = 2,86^(1/5) − 1 ≈ 23,4 %."],
    ['h', 'Woher die Rendite kommt'],
    ['p', "Der Wertzuwachs des Eigenkapitals beträgt 1.145 − 400 = 745. Zerlegen wir ihn nach Quellen:"],
    ['ul', [
      "**EBITDA-Wachstum.** (140 − 100) × 9 = 360.",
      "**Multiple-Expansion.** Im Beispiel 0 (Einstieg und Exit je zu 9x).",
      "**Schuldentilgung (Deleveraging).** 385 des Cash des Unternehmens gingen in die Schuldenreduzierung."
    ]],
    ['p', "Die Summe 360 + 0 + 385 = 745, wie es sein soll."],
    ['h', 'Sensitivität gegenüber dem Exit-Preis'],
    ['tbl', ['Exit-Multiple', 'Equity beim Exit', 'MOIC', 'IRR'], [
      ['8x', '1.005', '2,51x', '20,2 %'],
      ['9x', '1.145', '2,86x', '23,4 %'],
      ['10x', '1.285', '3,21x', '26,3 %']
    ]],
    ['p', "Eine schnelle Merkhilfe für einen Fünfjahreszeitraum: MOIC 2,0x sind etwa 15 % im Jahr, 2,5x etwa 20 %, 3,0x etwa 25 %."],
    ['h', 'Was ein Unternehmen zu einem guten Kandidaten macht'],
    ['ul', [
      "Ein stabiler und planbarer Cashflow, um die Schulden zu bedienen.",
      "Niedrige Investitionsausgaben.",
      "Starkes Management und ein klarer Verbesserungsplan (Marge, Kosten).",
      "Ein vernünftiger Einstiegspreis und klare Exit-Wege.",
      "Möglichkeit, das Geschäft zu verbessern: operative Effizienz, Zukauf kleinerer Unternehmen (Buy-and-Build)."
    ]],
    ['h', 'Exit-Wege und zusätzliche Instrumente'],
    ['ul', [
      "**Verkauf an einen strategischen Käufer** (Trade Sale).",
      "**Verkauf an einen anderen Fonds** (Secondary Buyout).",
      "**IPO.**",
      "**Dividend Recap:** Das Unternehmen nimmt neue Schulden auf und zahlt dem Sponsor eine Dividende, um vor dem Exit einen Teil des Geldes zurückzugeben."
    ]],
    ['h', 'Leverage: ein zweischneidiges Schwert'],
    ['p', "Mehr Schulden bedeuten weniger eingesetztes Kapital und eine höhere Rendite bei Erfolg. Aber Zahlungen auf Schulden hängen nicht von den Ergebnissen ab, und bei Verschlechterung des Geschäfts kann das Unternehmen Covenants verletzen oder insolvent werden. Deshalb wird die Struktur vorsichtig gewählt."],
    ['warn', "Vergessen, beim Exit die Schulden abzuziehen, wenn man das Equity berechnet, oder MOIC und IRR verwechseln. IRR = MOIC^(1/n) − 1, nicht (MOIC − 1) / n."],
    ['q', "Walk me through an LBO.", "Wir bestimmen den Einstiegspreis (EBITDA × Multiple) und die Struktur: Schulden und Sponsor-Equity. Wir prognostizieren den Free Cashflow und lenken ihn in die Schuldentilgung. Beim Exit berechnen wir den EV über EBITDA und Multiple, ziehen die Schulden ab und erhalten das Equity. Die Rendite berechnen wir über MOIC und IRR."],
    ['q', "Was macht ein Unternehmen zu einem guten Kandidaten für einen LBO?", "Stabile Zahlungsströme, niedrige CapEx, starkes Management, Potenzial zur Margenverbesserung, ein vernünftiger Einstiegspreis und ein klarer Exit."],
    ['key', "Ein LBO verdient an EBITDA-Wachstum, Multiple-Expansion und Schuldentilgung. Schulden verringern das eingesetzte Kapital und erhöhen den IRR, aber auch das Risiko. Für eine schnelle Schätzung nutzt man einen Fünfjahres-Paper-LBO."]
  ] };
