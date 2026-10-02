'use strict';
// Deutsche Version des Buchs (Teil C).
window.BOOK_DE = window.BOOK_DE || {};
BOOK_DE.wacc = { title: 'WACC und CAPM: was Kapital kostet', tag: 'Bewertung',
  intro: "Jedes Geschäft wird mit dem Geld von Aktionären und Kreditgebern finanziert, und beide wollen verdienen. Der WACC zeigt den durchschnittlichen Preis dieses Geldes und dient als Diskontierungssatz im DCF. Sehen wir, woraus er sich zusammensetzt.",
  blocks: [
    ['h', 'Die Idee des WACC'],
    ['p', "WACC (weighted average cost of capital) sind die gewichteten durchschnittlichen Kapitalkosten. Verlangen die Aktionäre 9 % Rendite und die Kreditgeber erhalten 5 %, liegt der durchschnittliche Preis des Geldes des Unternehmens zwischen diesen Zahlen und hängt davon ab, welcher Anteil des Kapitals Fremdkapital ist."],
    ['key', "WACC = E/(D+E) × Re + D/(D+E) × Rd × (1 − t)"],
    ['ul', [
      "**E** und **D**: der Marktwert des Eigenkapitals der Aktionäre und der Schulden. Die Gewichte werden aus Markt-, nicht aus Buchwerten berechnet.",
      "**Re** (cost of equity): die Rendite, die Aktionäre verlangen.",
      "**Rd** (cost of debt): der Zinssatz auf die Schulden des Unternehmens.",
      "**t**: der Steuersatz. Zinsen mindern den steuerpflichtigen Gewinn, daher ist Fremdkapital für das Unternehmen günstiger: Es bringt einen Steuerschild (tax shield)."
    ]],
    ['h', 'Cost of Equity nach dem CAPM'],
    ['p', "Aktionäre erhalten keine feste Zahlung, daher wird ihre geforderte Rendite über das CAPM-Modell geschätzt: risikoloser Zins plus Risikoprämie."],
    ['key', "Re = Rf + β × (Rm − Rf)"],
    ['ul', [
      "**Rf** (risikoloser Zins): die Rendite von Staatsanleihen eines zuverlässigen Landes, zum Beispiel zehnjähriger deutscher Bunds.",
      "**β (Beta):** die Sensitivität einer Aktie gegenüber Marktschwankungen. β = 1 bedeutet, sie bewegt sich wie der Markt, β > 1 stärker als der Markt (riskanter), β < 1 schwächer.",
      "**(Rm − Rf)** (Marktrisikoprämie): die zusätzliche Rendite, die der Aktienmarkt über den risikolosen Zins hinaus bietet. Wird üblicherweise auf 4-6 % geschätzt."
    ]],
    ['ex', 'Berechnung des WACC', "Rf = 3 %, β = 1,2, Risikoprämie = 5 %.\nRe = 3 % + 1,2 × 5 % = 9 %.\nSchulden: Zins 5 %, Steuer 25 %, also Rd nach Steuern = 5 % × 0,75 = 3,75 %.\nKapitalstruktur: Eigenkapital 70 %, Schulden 30 %.\nWACC = 0,7 × 9 % + 0,3 × 3,75 % = 6,3 % + 1,125 % = 7,425 % ≈ 7,4 %."],
    ['h', 'Warum Fremdkapital günstiger ist als Eigenkapital'],
    ['p', "Zwei Gründe. Erstens: Kreditgeber werden vor den Aktionären bezahlt und tragen weniger Risiko, daher akzeptieren sie einen niedrigeren Zins. Zweitens: Zinsen senken die Steuern. Zu viele Schulden erhöhen jedoch das Insolvenzrisiko, und ab einem gewissen Punkt steigen sowohl der Zins auf die Schulden als auch die geforderte Rendite der Aktionäre, und der WACC sinkt nicht weiter."],
    ['h', 'Beta: wie man es erhält'],
    ['p', "Das Beta eines Unternehmens wird anhand von Peers geschätzt. Man nimmt die Betas ähnlicher börsennotierter Unternehmen (levered genannt, weil sie von deren Schulden abhängen), „bereinigt“ sie um die Schulden, bildet den Durchschnitt und „belastet“ sie dann mit den Schulden der Ziel-Kapitalstruktur."],
    ['key', "βLevered = βUnlevered × (1 + (1 − t) × D/E)"],
    ['ex', 'Relevering des Betas', "Das Beta des Peers ohne Schulden βU = 1,0. Ziel-Struktur D/E = 0,4, Steuer 25 %.\nβL = 1,0 × (1 + 0,75 × 0,4) = 1,0 × 1,3 = 1,3."],
    ['h', 'Was den WACC erhöht und was ihn senkt'],
    ['ul', [
      "Ein Anstieg des risikolosen Zinses oder des Betas erhöht Re und WACC.",
      "Eine höhere Risikoprämie erhöht Re.",
      "Ein größerer Schuldenanteil (in vernünftigem Rahmen) senkt den WACC dank des Steuerschilds.",
      "Ein höherer Steuersatz senkt die Fremdkapitalkosten nach Steuern und den WACC."
    ]],
    ['warn', "Den Buchwert des Kapitals statt des Marktwerts für die Gewichte verwenden. Oder die Schulden vor Steuern nehmen. Das sind die zwei häufigsten Fehler bei der WACC-Berechnung."],
    ['q', "Wie ändert sich der WACC, wenn ein Unternehmen einen Teil des Eigenkapitals durch Schulden ersetzt?", "Zuerst sinkt der WACC: Schulden sind günstiger als Eigenkapital und bringen einen Steuerschild. Mit wachsenden Schulden wächst aber das Risiko, daher springen sowohl Re als auch Rd. Es gibt eine optimale Struktur, ab der der WACC wieder steigt."],
    ['key', "Der WACC ist der durchschnittliche Preis des Kapitals, der Diskontierungssatz im DCF. Re wird nach CAPM berechnet (Rf + β × Prämie), Schulden werden nach Steuern angesetzt. Das Beta wird anhand von Peers geschätzt und an die Kapitalstruktur angepasst."]
  ] };

BOOK_DE.dcf = { title: 'DCF: Cashflows Schritt für Schritt bewerten', tag: 'Bewertung',
  intro: "Der DCF gilt in der Theorie als wichtigste Bewertungsmethode: Der Wert eines Unternehmens entspricht der Summe des Geldes, das es bringen wird, auf heute abgezinst. In der Praxis wird er mit Multiples kombiniert. In diesem Kapitel bauen wir eine vollständige Bewertung mit Zahlen und betrachten die Fallstricke.",
  blocks: [
    ['h', 'Die fünf Schritte eines DCF'],
    ['ol', [
      "Den Free Cashflow (UFCF) für 5-10 Jahre prognostizieren.",
      "Den Terminal Value berechnen: den Wert des Unternehmens jenseits der Prognose.",
      "Einen Diskontierungssatz wählen (WACC).",
      "Die Zahlungen und den Terminal Value auf heute abzinsen und addieren. Das Ergebnis ist der Enterprise Value.",
      "Vom EV zum Equity Value gehen (Net Debt abziehen) und zum Aktienkurs (durch die Anzahl der Diluted Shares teilen)."
    ]],
    ['h', 'Schritt 1. Prognose der Cashflows'],
    ['p', "Die Prognose wird vom Umsatz aus aufgebaut: Wachstumsraten, EBIT-Marge, Steuern, CapEx, Abschreibung, Veränderung des Working Capital. Der Prognosezeitraum muss so lang sein, dass das Unternehmen an seinem Ende einen stabilen Zustand erreicht. Bei schnell wachsenden Unternehmen sind es 10 Jahre, bei reifen 5."],
    ['h', 'Schritt 2. Terminal Value'],
    ['p', "Man kann nicht unendlich prognostizieren. Deshalb wird alles, was nach dem letzten Prognosejahr geschieht, in einer Zahl zusammengefasst. Es gibt zwei Wege."],
    ['ul', [
      "**Gordon Growth (Methode des ewigen Wachstums).** Wir nehmen an, dass der Zahlungsstrom nach der Prognose ewig mit einer kleinen konstanten Rate g wächst. TV = FCF × (1 + g) / (WACC − g). Die Formel funktioniert nur, wenn der WACC größer als g ist. Die Rate g liegt nahe am langfristigen Wachstum der Wirtschaft, meist bei 1-3 %.",
      "**Exit Multiple.** TV = EBITDA des letzten Jahres × das Multiple, zu dem das Unternehmen verkauft werden könnte, zum Beispiel das durchschnittliche EV/EBITDA der Peers."
    ]],
    ['p', "Gute Praxis: auf beide Arten rechnen und abgleichen. Aus Gordon lässt sich das implizite Multiple ableiten, aus dem Multiple das implizite Wachstum g. Ergibt sich g = 6 %, ist das Multiple unrealistisch hoch."],
    ['h', 'Ein vollständiges Beispiel'],
    ['p', "Angenommen, die UFCF-Prognose für fünf Jahre lautet: 100, 110, 121, 133,1 und 146,4 Mio. €. WACC 9 %, Wachstumsrate g = 2 %."],
    ['tbl', ['Jahr', 'UFCF', 'Faktor 1/(1,09)^n', 'PV'], [
      ['1', '100,0', '0,917', '91,7'],
      ['2', '110,0', '0,842', '92,6'],
      ['3', '121,0', '0,772', '93,4'],
      ['4', '133,1', '0,708', '94,3'],
      ['5', '146,4', '0,650', '95,2'],
      ['Summe der PV der Zahlungen', '', '', '467,2']
    ]],
    ['p', "Terminal Value = 146,4 × 1,02 / (0,09 − 0,02) = 149,3 / 0,07 = 2.133,4 Mio. €. Auf heute abgezinst: 2.133,4 × 0,650 = 1.386,6 Mio. €."],
    ['key', "EV = 467,2 + 1.386,6 = 1.853,8 Mio. €. Der Terminal Value macht 74,8 % des Gesamtwerts aus."],
    ['p', "Angenommen, Net Debt beträgt 400 Mio. € und es gibt 100 Mio. Aktien. Equity Value = 1.853,8 − 400 = 1.453,8 Mio. €, der Aktienkurs liegt bei 14,54 €."],
    ['h', 'Warum der Terminal Value so wichtig ist'],
    ['p', "In unserem Beispiel sind drei Viertel des Werts Terminal Value. Daher verändert eine winzige Änderung von WACC oder g das Ergebnis stark. Genau deshalb wird immer eine Sensitivitätstabelle erstellt."],
    ['tbl', ['EV, Mio. €', 'g = 1 %', 'g = 2 %', 'g = 3 %'], [
      ['WACC 8 %', '1.918', '2.174', '2.533'],
      ['WACC 9 %', '1.669', '1.854', '2.101'],
      ['WACC 10 %', '1.475', '1.614', '1.792']
    ]],
    ['p', "Eine Streuung von 1.475 bis 2.533 ist fast das Doppelte. Die ehrliche Schlussfolgerung aus einem DCF lautet nicht „das Unternehmen ist 1.854 wert“, sondern „das Unternehmen ist unter vernünftigen Annahmen etwa 1,6 bis 2,2 Milliarden wert“."],
    ['h', 'Mid-Year-Konvention'],
    ['p', "Die Zahlungen kommen über das Jahr verteilt und nicht am 31. Dezember. Daher wird oft über n − 0,5 Jahre abgezinst. Die Bewertung fällt etwas höher aus. Wichtig ist, überall dieselbe Regel zu verwenden."],
    ['h', 'Typische Fallen'],
    ['ul', [
      "**Ein optimistischer Terminal Value.** Wachstum g über dem Wirtschaftswachstum oder ein Multiple über den heutigen Marktwerten.",
      "**Inkonsistenz.** Zahlungen vor Schulden (UFCF) müssen mit dem WACC abgezinst werden, nicht mit den Eigenkapitalkosten; Zahlungen nach Schulden mit Re.",
      "**CapEx niedriger als Abschreibung** im terminalen Jahr: die Annahme, dass das Geschäft ewig ohne Erneuerung seiner Anlagen lebt.",
      "**Vergessene Posten der Brücke:** Vorzugsaktien, Minderheitsanteile, Pensionsverpflichtungen."
    ]],
    ['q', "Walk me through a DCF.", "Wir prognostizieren den Free Cashflow des Unternehmens für 5-10 Jahre, berechnen den Terminal Value (Gordon Growth oder Exit Multiple), zinsen alles mit dem WACC ab und addieren. Das Ergebnis ist der Enterprise Value. Dann ziehen wir Net Debt und andere Ansprüche ab, erhalten den Equity Value und teilen durch die Anzahl der Diluted Shares."],
    ['q', "Was passiert mit dem DCF-Wert, wenn der WACC steigt?", "Der Wert sinkt: Die Zahlungen werden stärker abgezinst, besonders der Terminal Value, der weit in der Zukunft liegt. Je mehr Wachstum im Geschäft steckt und je größer der Anteil des Terminal Value am Wert, desto stärker die Sensitivität gegenüber dem WACC."],
    ['key', "DCF = die Summe der abgezinsten Free Cashflows plus der abgezinste Terminal Value. Das Ergebnis hängt stark von WACC und g ab, daher wird es als Spanne gezeigt, nicht als einzelne Zahl."]
  ] };
