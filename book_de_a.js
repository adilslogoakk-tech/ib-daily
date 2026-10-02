'use strict';
// Deutsche Version des Buchs (Teil A). Gleiches Blockformat wie book1-3.js.
window.BOOK_DE = window.BOOK_DE || {};
BOOK_DE.ev = { title: 'Enterprise Value und Equity Value: der Preis des Unternehmens und der Preis der Aktien', tag: 'Bewertung',
  intro: "Fast jedes Gespräch über Bewertung in einer Investmentbank beginnt mit zwei Zahlen: Equity Value und Enterprise Value. Wenn du sicher verstehst, worin sie sich unterscheiden und wie man von einer zur anderen kommt, verstehst du bereits die Hälfte des Interviewstoffs.",
  blocks: [
    ['h', 'Warum wir zwei Zahlen brauchen'],
    ['p', "Wenn jemand sagt „das Unternehmen ist 2 Milliarden wert“, ist unklar, was gemeint ist. Der Preis aller Aktien? Oder der Preis des gesamten Geschäfts samt Schulden? Das sind verschiedene Beträge. Deshalb arbeitet man in der Finanzwelt mit zwei Begriffen."],
    ['p', "**Equity Value** (Wert des Eigenkapitals) beantwortet die Frage: Wie viel sind alle Aktien des Unternehmens wert? Bei einem börsennotierten Unternehmen ist das die Marktkapitalisierung, also der Preis einer Aktie mal die Anzahl der Aktien."],
    ['p', "**Enterprise Value** (Unternehmenswert, EV) beantwortet eine andere Frage: Wie viel ist das Geschäft selbst für alle wert, die darin investiert haben, Aktionäre und Kreditgeber? Es ist der Preis, den man zahlen müsste, um das gesamte Unternehmen zu kaufen und seinen operativen Betrieb zu erhalten."],
    ['h', 'Equity Value: ausgehend vom Aktienkurs'],
    ['p', "Die Formel ist einfach: Aktienkurs × Anzahl der Aktien. Die Aktienanzahl muss aber **diluted** sein, also alle Instrumente enthalten, die zu Aktien werden können: Mitarbeiteroptionen, Wandelanleihen, RSUs. Mehr dazu im Kapitel über Verwässerung."],
    ['ex', 'Mandate Retail', "Die Ladenkette Mandate Retail hat 50 Mio. Aktien, eine Aktie kostet 40 Euro.\nEquity Value = 50 Mio. × 40 € = 2.000 Mio. €.\nDas Unternehmen hat Kredite und Anleihen von 700 Mio. € und Cash auf den Konten von 200 Mio. €."],
    ['h', 'Die Brücke vom Equity Value zum EV'],
    ['p', "Um den Wert des Geschäfts zu erhalten, addiert man zum Preis der Aktien alles, was das Unternehmen anderen Investoren schuldet, und zieht das Cash ab, das es besitzt."],
    ['ul', [
      "**+ Debt (Schulden).** Bankkredite, Anleihen. Auch die Kreditgeber haben in das Geschäft investiert, und ihre Ansprüche müssen berücksichtigt werden. Nach IFRS 16 landet hier häufig auch Leasing (lease liabilities).",
      "**+ Preferred (Vorzugsaktien).** Sie stehen bei Ausschüttungen vor den Stammaktien und verhalten sich wie Schulden.",
      "**+ Minority Interest (Minderheitsanteile).** Konsolidiert das Unternehmen eine Tochter, die ihm nicht vollständig gehört, enthält sein EBITDA 100 % des Ergebnisses der Tochter. Also muss auch der EV 100 % abbilden, das heißt, der Anteil der fremden Aktionäre wird addiert.",
      "**− Cash.** Zahlungsmittel und Äquivalente werden abgezogen. Dazu unten mehr: Es ist das häufigste Interviewthema."
    ]],
    ['key', "EV = Equity Value + Debt + Preferred + Minority Interest − Cash"],
    ['ex', 'Fortsetzung', "Für Mandate Retail:\nEV = 2.000 + 700 − 200 = 2.500 Mio. €.\nNet Debt = Debt − Cash = 700 − 200 = 500 Mio. €. Deshalb schreibt man oft: EV = Equity Value + Net Debt."],
    ['h', 'Warum wir Cash abziehen'],
    ['p', "Stell dir vor, du kaufst ein Haus für 500.000 €, und im Tresor des Hauses liegen 100.000 €, die mit dem Haus an dich gehen. Der reale Preis des Hauses selbst beträgt für dich 400.000 €. Bei einem Unternehmen ist es genauso: Der Käufer erhält das Cash mit dem Geschäft und kann damit sofort einen Teil der Schulden tilgen. Daher ist der Wert des operativen Geschäfts um den Cash-Betrag niedriger."],
    ['p', "Die Logik ist bei Schulden spiegelbildlich. Übernimmt der Käufer das Unternehmen samt Schulden, übernimmt er die Verpflichtungen, und der „wahre Preis“ des Geschäfts steigt um die Höhe der Schulden."],
    ['q', "Warum zieht man bei der Berechnung des EV aus dem Equity Value das Cash ab?", "Weil Cash nicht zum operativen Geschäft gehört: Der Käufer erhält es mit dem Unternehmen und kann es sofort zur Schuldentilgung nutzen. Der EV soll den Preis des Geschäfts selbst zeigen, nicht des Geschäfts plus Geld im Tresor."],
    ['h', 'Wozu man den EV braucht'],
    ['p', "Der Hauptgrund: Der EV erlaubt es, Unternehmen mit unterschiedlicher Kapitalstruktur zu vergleichen. Nehmen wir zwei gleiche Geschäfte. Beide erzielen einen operativen Gewinn (EBIT) von 70 Mio. €, aber das eine wird nur mit Eigenkapital finanziert, das andere teilweise mit Schulden."],
    ['tbl', ['', 'Unternehmen A (ohne Schulden)', 'Unternehmen B (mit Schulden)'], [
      ['Equity Value', '1.000', '600'],
      ['Net Debt', '0', '400'],
      ['EV', '1.000', '1.000'],
      ['EBIT', '70', '70'],
      ['Zinsen (5 % der Schulden)', '0', '20'],
      ['Net Income (Steuer 30 %)', '49', '35'],
      ['P/E', '20,4x', '17,1x'],
      ['EV/EBIT', '14,3x', '14,3x']
    ]],
    ['p', "Das P/E der Unternehmen ist verschieden, obwohl das Geschäft gleich ist: Die Schulden beeinflussen es. Das EV/EBIT ist dagegen gleich, weil sich EV und EBIT auf das gesamte Geschäft beziehen, unabhängig davon, wie es finanziert wird. Genau das ist der Sinn des EV."],
    ['h', 'Die Konsistenzregel'],
    ['p', "Zähler und Nenner eines Multiples müssen sich auf dieselbe Investorengruppe beziehen."],
    ['ul', [
      "Der EV bezieht sich auf alle Investoren, daher wird er durch Kennzahlen **vor** Zinsen geteilt: Revenue, EBITDA, EBIT.",
      "Der Equity Value bezieht sich nur auf die Aktionäre, daher wird er durch Kennzahlen **nach** Zinsen geteilt: Net Income, Book Value."
    ]],
    ['warn', "Man darf Equity Value nicht durch EBITDA oder EV nicht durch Net Income teilen: Zähler und Nenner beziehen sich auf verschiedene Investorengruppen, und das Multiple verliert seinen Sinn."],
    ['h', 'Der Rückweg: vom EV zum Aktienkurs'],
    ['p', "Nach einem DCF oder dem Vergleich mit Peers erhältst du einen EV. Um den Aktienkurs zu finden, gehst du die Brücke in die Gegenrichtung: Vom EV werden Schulden und Vorzugsaktien abgezogen, Cash wird addiert, und man teilt durch die Anzahl der Diluted Shares."],
    ['ex', 'Aktienkurs aus dem EV', "EV aus dem DCF = 2.000 Mio. €. Debt 700, Cash 200, Preferred 100.\nEquity Value = 2.000 − 700 + 200 − 100 = 1.400 Mio. €.\nDie Anzahl der Diluted Shares beträgt 100 Mio., also Aktienkurs = 1.400 / 100 = 14 € je Aktie."],
    ['h', 'Feinheiten, nach denen gefragt wird'],
    ['ul', [
      "**Leasing.** Nach IFRS 16 werden Leasingverbindlichkeiten als Schulden ausgewiesen. Hast du sie in den EV einbezogen, muss das EBITDA vor Leasingaufwand stehen. Hast du sie nicht einbezogen, wird das EBITDA nach Leasing genommen. Mischen darf man nicht.",
      "**Pensionsverpflichtungen.** Unterdeckte Pensionspläne werden oft ebenfalls als Schulden behandelt.",
      "**Assoziierte Unternehmen** (Anteil 20-50 %, nicht konsolidiert). Ihr Ergebnis ist nicht im EBITDA enthalten, daher wird ihr Wert vom EV abgezogen, damit das Multiple nicht verzerrt wird.",
      "**Negativer EV.** Kommt vor, wenn mehr Cash vorhanden ist als Marktkapitalisierung und Schulden zusammen. Der Markt bewertet das Geschäft kaum, und das Cash ist mehr wert als das ganze Unternehmen."
    ]],
    ['q', "Kann der EV kleiner sein als der Equity Value?", "Ja, wenn das Unternehmen Netto-Cash hat (Cash übersteigt die Schulden), also Net Debt negativ ist. Dann ist EV = Equity Value + Net Debt kleiner als der Equity Value. Das kommt bei Technologieunternehmen mit großen Cash-Reserven vor."],
    ['key', "Der Equity Value beantwortet „wie viel sind die Aktien wert“, der EV „wie viel ist das Geschäft wert“. Zwischen beiden liegt eine Brücke aus Schulden, Vorzugsaktien, Minderheitsanteilen und Cash. Multiples auf den EV werden durch den Gewinn vor Zinsen geteilt, Multiples auf den Equity Value durch den Gewinn nach Zinsen."]
  ] };

BOOK_DE.profit = { title: 'Drei Gewinne: EBITDA, EBIT und Net Income', tag: 'Berichtswesen',
  intro: "In einer Gewinn- und Verlustrechnung steckt eigentlich nicht ein Gewinn, sondern eine ganze Treppe. Jede Stufe beantwortet ihre eigene Frage, und ein Profi weiß immer genau, von welchem Gewinn die Rede ist.",
  blocks: [
    ['h', 'Die Treppe vom Umsatz zum Jahresüberschuss'],
    ['p', "Nehmen wir eine vereinfachte GuV eines Unternehmens. Schritt für Schritt sieht man, wie aus dem Umsatz verschiedene Arten von Gewinn entstehen."],
    ['tbl', ['Position', 'Mio. €', 'Was sie zeigt'], [
      ['Revenue (Umsatz)', '1.000', 'Alles, was durch Verkäufe verdient wurde'],
      ['− COGS (Herstellungskosten)', '−550', 'Direkte Produktionskosten'],
      ['= Gross Profit (Rohertrag)', '450', 'Marge auf Produktebene (45 %)'],
      ['− SG&A (Vertrieb und Verwaltung)', '−200', 'Kosten für Vertrieb und Management'],
      ['= EBITDA', '250', 'Operativer Gewinn vor Verschleiß (25 %)'],
      ['− D&A (Abschreibungen)', '−50', 'Nicht zahlungswirksamer Aufwand für den Verschleiß von Vermögenswerten'],
      ['= EBIT', '200', 'Operativer Gewinn (20 %)'],
      ['− Zinsen auf Schulden', '−40', 'Der Preis des Fremdkapitals'],
      ['= EBT (Gewinn vor Steuern)', '160', ''],
      ['− Steuer (25 %)', '−40', ''],
      ['= Net Income (Jahresüberschuss)', '120', 'Gewinn der Aktionäre (12 %)']
    ]],
    ['h', 'EBITDA: Gewinn vor Zinsen, Steuern und Abschreibungen'],
    ['p', "EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) zeigt, wie viel das Geschäft aus seiner Kerntätigkeit verdient, vor dem Einfluss von Kapitalstruktur, Steuern und Verschleiß. Genau deshalb wird es bei M&A geschätzt: Zwei Geschäfte lassen sich vergleichen, ohne darauf zu achten, wie sie finanziert sind und wie sie abschreiben."],
    ['p', "Das EBITDA hat ernste Einschränkungen. Es ist **nicht gleich dem Cashflow**: CapEx (Investitionen in Anlagen), die Veränderung des Working Capital und Steuern sind nicht abgezogen. Ein Unternehmen mit hohen Investitionen kann ein schönes EBITDA zeigen und trotzdem Geld verbrennen."],
    ['h', 'EBIT: operativer Gewinn'],
    ['p', "Zieht man vom EBITDA die Abschreibungen ab, erhält man das EBIT. Abschreibung ist eine Methode, die Kosten der Anlagen auf die Jahre ihrer Nutzung zu verteilen. Sie ist nicht zahlungswirksam (das Geld wurde früher beim Kauf ausgegeben), bildet aber den realen Verschleiß ab. Deshalb zeigt das EBIT die Ökonomie eines kapitalintensiven Geschäfts besser: einer Fabrik, von Straßen, Netzen."],
    ['p', "Das EBIT hängt nicht von Schulden ab: Zinsen werden erst danach abgezogen. Daher passt das Multiple EV/EBIT logisch ebenfalls zum EV."],
    ['h', 'Net Income: was für die Aktionäre bleibt'],
    ['p', "Nach Abzug von Zinsen und Steuern bleibt der Jahresüberschuss. Er wird durch die Aktienanzahl geteilt, um das EPS (Gewinn je Aktie) zu erhalten, und der Aktienkurs wird durch das EPS geteilt, um das P/E zu erhalten."],
    ['h', 'Marge: Gewinn als Anteil am Umsatz'],
    ['p', "Die Marge zeigt, wie viel Gewinn auf je 100 Euro Umsatz entfällt. Im Beispiel: Rohertragsmarge 45 %, EBITDA-Marge 25 %, EBIT-Marge 20 %, Nettomarge 12 %. Beim Vergleich von Margen zwischen Unternehmen und Jahren sieht man, wessen Geschäft effizienter ist."],
    ['h', 'Adjusted EBITDA: ohne Einmalposten'],
    ['p', "In der realen Berichterstattung gibt es Einmalereignisse: Restrukturierungskosten, Bußgelder, Abschreibungen auf Vermögenswerte. Sie verzerren das Bild der wiederkehrenden Profitabilität, daher berechnen Analysten das EBITDA ohne sie neu. Das ist das Adjusted EBITDA. Jede Anpassung muss begründet sein: Unseriöse Unternehmen „frisieren“ das EBITDA, indem sie regelmäßige Kosten als „einmalig“ deklarieren."],
    ['h', 'Rendite auf das Kapital: ROIC und ROE'],
    ['ul', [
      "**ROE** = Net Income / Equity. Wie viel Gewinn je Euro Eigenkapital. Hängt von den Schulden ab: mehr Schulden, höheres ROE.",
      "**ROIC** = NOPAT / Invested Capital, wobei NOPAT = EBIT × (1 − Steuer). Wie viel Gewinn je Euro des gesamten investierten Kapitals, unabhängig von der Finanzierungsstruktur. Ein gutes Geschäft verdient einen ROIC über den Kapitalkosten (WACC)."
    ]],
    ['warn', "Man darf das EBITDA nicht „Cashflow“ nennen. Zwischen beiden liegen Steuern, CapEx und die Veränderung des Working Capital."],
    ['q', "Warum gilt das EBITDA als unvollkommene Kennzahl?", "Weil es CapEx, Steuern und Veränderungen des Working Capital ignoriert, also reale Zahlungsausgänge. Bei kapitalintensiven Geschäften überschätzt das EBITDA das reale Cash-Potenzial stark. Deshalb wird es durch EBIT und Free Cashflow ergänzt."],
    ['key', "Revenue → Gross Profit → EBITDA → EBIT → EBT → Net Income. EBITDA und EBIT hängen nicht von Schulden ab, daher stützen sich EV-Multiples auf sie. Das Net Income berücksichtigt Zinsen, deshalb wird es für P/E gebraucht."]
  ] };
