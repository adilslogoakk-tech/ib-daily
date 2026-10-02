'use strict';
// Deutsche Version des Buchs (Teil B).
window.BOOK_DE = window.BOOK_DE || {};
BOOK_DE.statements = { title: 'Die drei Abschlüsse und wie sie zusammenhängen', tag: 'Berichtswesen',
  intro: "Die Finanzberichterstattung eines Unternehmens besteht aus drei Dokumenten: Gewinn- und Verlustrechnung, Bilanz und Kapitalflussrechnung. Sie im Kopf miteinander verknüpfen zu können, ist eine Grundfertigkeit, die in fast jedem Interview geprüft wird.",
  blocks: [
    ['h', 'Was jeder Abschluss zeigt'],
    ['ul', [
      "**Income Statement (GuV).** Das Ergebnis einer Periode: Umsatz, Kosten, Gewinn. Beantwortet die Frage „wie viel haben wir verdient“.",
      "**Balance Sheet (Bilanz).** Eine Momentaufnahme zu einem Stichtag: was das Unternehmen hat (Aktiva), was es schuldet (Verbindlichkeiten) und was den Aktionären bleibt (Eigenkapital). Immer gilt die Identität: Assets = Liabilities + Equity.",
      "**Cash Flow Statement (Kapitalflussrechnung).** Woher Geld kam und wohin es in der Periode floss. Beantwortet die Frage „wohin ist das Geld gegangen“."
    ]],
    ['h', 'Woraus die Bilanz besteht'],
    ['ul', [
      "**Umlaufvermögen:** Cash, Accounts Receivable (Forderungen, was Kunden schulden), Inventory (Vorräte).",
      "**Langfristiges Vermögen:** PP&E (Gebäude, Ausrüstung), immaterielle Vermögenswerte, Goodwill.",
      "**Verbindlichkeiten:** Accounts Payable (Lieferantenschulden), abgegrenzte Aufwendungen, Debt, Deferred Revenue.",
      "**Eigenkapital:** gezeichnetes Kapital, Kapitalrücklage (APIC), Retained Earnings (Gewinnrücklagen)."
    ]],
    ['h', 'Wie die Abschlüsse zusammenhängen'],
    ['ol', [
      "**Net Income** aus der GuV steht am Anfang der Kapitalflussrechnung und erhöht die Retained Earnings in der Bilanz.",
      "**Abschreibung** mindert das Net Income, wird in der Kapitalflussrechnung aber wieder addiert (sie ist nicht zahlungswirksam). In der Bilanz verringert sie das PP&E.",
      "**Veränderungen des Working Capital** (Forderungen, Vorräte, Lieferantenschulden) gehen in die Kapitalflussrechnung ein und verändern die entsprechenden Bilanzpositionen.",
      "**CapEx** erhöht das PP&E in der Bilanz und senkt das Cash in der Kapitalflussrechnung (Investitionsteil).",
      "**Schulden und Dividenden** verändern Debt und Retained Earnings in der Bilanz und erscheinen im Finanzierungsteil der Kapitalflussrechnung.",
      "**Das Cash-Ergebnis** aus der Kapitalflussrechnung (Cash am Ende der Periode) geht in die Zeile Cash der Bilanz. Deshalb geht die Bilanz auf."
    ]],
    ['h', 'Die drei Teile der Kapitalflussrechnung'],
    ['ul', [
      "**CFO (operativ):** Net Income + nicht zahlungswirksame Aufwendungen (D&A, SBC) ± Veränderung des Working Capital.",
      "**CFI (Investition):** CapEx, Käufe und Verkäufe von Unternehmen und Vermögenswerten.",
      "**CFF (Finanzierung):** Aufnahme und Tilgung von Schulden, Ausgabe von Aktien, Dividenden, Aktienrückkäufe (Buybacks)."
    ]],
    ['ex', 'Ein Mini-Modell für ein Jahr', "Net Income 120, Abschreibung 50, CapEx 80, Working Capital stieg um 10 (Geld gebunden), Schulden getilgt 20, Dividenden gezahlt 30.\nCFO = 120 + 50 − 10 = 160.\nCFI = −80.\nCFF = −20 − 30 = −50.\nVeränderung des Cash = 160 − 80 − 50 = +30. Diese 30 werden zum Cash in der Bilanz addiert."],
    ['h', 'Eine klassische Frage: Was, wenn die Abschreibung um 10 steigt'],
    ['p', "Angenommen, der Steuersatz beträgt 25 %. Verfolgen wir die Wirkung durch alle drei Abschlüsse."],
    ['ul', [
      "**GuV:** Das EBIT sinkt um 10, die Steuer sinkt um 2,5, das Net Income sinkt um 7,5.",
      "**Kapitalflussrechnung:** Das Net Income ist um 7,5 niedriger, aber die Abschreibung wird mit +10 wieder addiert. Ergebnis: Das Cash stieg um 2,5. Das ist die Steuerersparnis.",
      "**Bilanz:** Die Aktiva änderten sich um −10 (PP&E) + 2,5 (Cash) = −7,5. Das Eigenkapital änderte sich um −7,5 (Retained Earnings). Die Bilanz geht auf."
    ]],
    ['q', "Wie kann ein Unternehmen mit positivem Jahresüberschuss insolvent werden?", "Net Income ist nicht Cash. Wachsende Forderungen und Vorräte, hohe Investitionen oder Schuldentilgung können das gesamte Cash aufzehren, während der Gewinn auf dem Papier positiv ist. Eine Insolvenz entsteht durch Geldmangel, nicht durch Gewinnmangel."],
    ['warn', "Dividenden sind kein Aufwand und erscheinen nicht in der GuV. Sie mindern die Retained Earnings direkt in der Bilanz und erscheinen im Finanzierungsteil der Kapitalflussrechnung."],
    ['key', "Das Net Income verbindet alle drei Abschlüsse. Die Bilanz geht auf, weil das Endcash aus der Kapitalflussrechnung in die Aktiva fließt und jede Veränderung von zwei Seiten erfasst wird."]
  ] };

BOOK_DE.fcf = { title: 'Free Cashflow und Working Capital', tag: 'Bewertung',
  intro: "Gewinn lässt sich malen, Geld nicht. Deshalb beruht ein DCF nicht auf dem Gewinn, sondern auf dem Free Cashflow (FCF): dem Geld, das das Geschäft tatsächlich an Investoren auszahlen kann. In diesem Kapitel sehen wir, wie er berechnet wird und warum er sich vom Gewinn unterscheidet.",
  blocks: [
    ['h', 'Was der FCF ist'],
    ['p', "Free Cashflow ist das Geld, das dem Unternehmen nach allen operativen Kosten, Steuern und den Investitionen zum Erhalt und Ausbau des Geschäfts bleibt. Genau dieses Geld kann an Kreditgeber und Aktionäre fließen."],
    ['p', "Man unterscheidet zwei Arten des Cashflows. **Unlevered FCF** (UFCF) wird vor dem Schuldendienst berechnet und steht allen Investoren zur Verfügung. Er wird im DCF verwendet. **Levered FCF** (LFCF) wird nach Zinsen und verpflichtenden Zahlungen auf Schulden berechnet und gehört den Aktionären."],
    ['h', 'Die Formel des Unlevered FCF'],
    ['key', "UFCF = EBIT × (1 − Steuer) + D&A − CapEx − ΔNWC"],
    ['ul', [
      "**EBIT × (1 − Steuer)** ist der NOPAT, der operative Gewinn nach Steuern, aber vor Zinsen.",
      "**+ D&A:** Die Abschreibung wurde vom Gewinn abgezogen, aber dafür wurde kein Geld ausgegeben. Wir addieren sie zurück.",
      "**− CapEx:** Geld, das für Anlagen und Gebäude ausgegeben wurde. Im Gewinn zeigt es sich nur allmählich über die Abschreibung, im Cashflow sofort.",
      "**− ΔNWC:** Ein Anstieg des Working Capital bindet Geld in Forderungen und Vorräten."
    ]],
    ['ex', 'Berechnung des UFCF', "EBIT = 200, Steuer 25 %, D&A = 50, CapEx = 80, Working Capital stieg um 10.\nNOPAT = 200 × 0,75 = 150.\nUFCF = 150 + 50 − 80 − 10 = 110.\nDas EBITDA des Unternehmens wäre 250: Es bleibt deutlich hinter dem realen Cashflow zurück."],
    ['h', 'Levered FCF: nach Schulden'],
    ['p', "Um den Zahlungsstrom für die Aktionäre zu erhalten, zieht man vom UFCF die Zinsen nach Steuern ab und addiert die Netto-Neuaufnahme von Schulden. Weiter im Beispiel: Zinsen 40, Steuer 25 %. Zinsen nach Steuern 40 × 0,75 = 30. Wurde keine neue Schuld aufgenommen, ist LFCF = 110 − 30 = 80."],
    ['h', 'Working Capital (NWC)'],
    ['p', "NWC ist das operative Umlaufvermögen minus die operativen kurzfristigen Verbindlichkeiten. Cash und Schulden gehören nicht dazu."],
    ['ul', [
      "**Forderungen (AR).** Kunden haben gekauft, aber noch nicht gezahlt. Wachsende Forderungen binden Geld.",
      "**Vorräte (Inventory).** Ware im Lager ist bereits ausgegebenes, aber noch nicht zurückgeflossenes Geld.",
      "**Lieferantenschulden (AP).** Wir haben die Ware erhalten, aber den Lieferanten noch nicht bezahlt. Das ist ein kostenloser Kredit: Wachsende Verbindlichkeiten setzen Geld frei."
    ]],
    ['p', "Die Regel für die Berechnung: Ein **Anstieg** der Aktiva im NWC verringert den Cashflow, ein **Anstieg** der Verbindlichkeiten erhöht ihn. Die Umschlagsgeschwindigkeit misst man in Tagen. Zum Beispiel DSO (Days Sales Outstanding) = Forderungen / Umsatz × 365. Bei einem Umsatz von 3.650 und Forderungen von 300 beträgt DSO = 30 Tage: Kunden zahlen im Schnitt nach einem Monat."],
    ['h', 'CapEx: Erhaltung und Wachstum'],
    ['p', "Ein Teil der Investitionen ist nur nötig, damit das Geschäft nicht verfällt (Ersatz von Anlagen), ein Teil dient dem Wachstum (neue Fabriken). Prognostizierst du im terminalen Stadium des DCF einen nachhaltigen Zahlungsstrom, muss CapEx mindestens so hoch sein wie die Abschreibung: Sonst nimmst du an, dass das Unternehmen ewig ohne Erneuerung seiner Anlagen lebt."],
    ['h', 'Aktienoptionen für Mitarbeiter (SBC)'],
    ['p', "Manche Unternehmen bezahlen Mitarbeiter mit Aktien. Der Aufwand wird im Gewinn erfasst, aber es wird kein Geld ausgegeben, und in der Kapitalflussrechnung wird er wieder addiert. Konservative Analysten behandeln SBC als realen Aufwand (er verwässert die Aktionäre) und addieren ihn im FCF nicht zurück."],
    ['warn', "Vergessen, den Anstieg des Working Capital abzuziehen, oder sein Vorzeichen verwechseln. Wachsende Forderungen und Vorräte senken den FCF immer, wachsende Lieferantenschulden erhöhen ihn."],
    ['q', "Wie unterscheidet sich der FCF vom Net Income?", "Das Net Income enthält nicht zahlungswirksame Posten (Abschreibung) und ignoriert CapEx und die Veränderung des Working Capital. Der FCF zeigt dagegen reales Geld: Er addiert die Abschreibung zurück und zieht Investitionen und das Wachstum des Working Capital ab. Deshalb liegt der FCF bei einem wachsenden Unternehmen meist unter dem Gewinn."],
    ['key', "FCF ist das Geld, das an Investoren gegeben werden kann. UFCF, vor Schulden, wird im DCF verwendet, LFCF, nach Schulden, gehört den Aktionären. Vom Gewinn unterscheidet er sich durch Abschreibung, CapEx und Working Capital."]
  ] };

BOOK_DE.tvm = { title: 'Geld über die Zeit: PV, NPV, IRR', tag: 'Grundlagen',
  intro: "Ein Euro heute ist mehr wert als ein Euro morgen: Man kann ihn investieren und verdienen. Auf dieser einfachen Idee beruht fast die gesamte Bewertung. In diesem Kapitel behandeln wir Barwert, NPV und IRR.",
  blocks: [
    ['h', 'Barwert und Endwert'],
    ['p', "Legst du 100 € zu 10 % im Jahr an, hast du nach einem Jahr 110 €, nach zwei Jahren 121 €. So funktioniert der Zinseszins: Zinsen werden auch auf Zinsen berechnet."],
    ['key', "FV = PV × (1 + r)^n   ⇔   PV = FV / (1 + r)^n"],
    ['p', "PV (present value, Barwert) zeigt, wie viel ein künftiger Betrag heute wert ist. Der Rechenvorgang heißt Abzinsung (Diskontierung), und der Satz r ist der Diskontierungssatz. Die 121 €, die wir in 2 Jahren bei einem Satz von 10 % erhalten, sind heute 121 / 1,21 = 100 € wert."],
    ['p', "Je höher der Satz und je weiter die Laufzeit, desto niedriger der heutige Wert. Genau deshalb senken steigende Zinsen die Unternehmensbewertungen, besonders bei Unternehmen, deren wesentliche Zahlungen weit in der Zukunft liegen."],
    ['h', 'NPV: lohnt sich das Projekt'],
    ['p', "NPV (net present value, Kapitalwert) ist die Summe aller künftigen Zahlungen, auf heute abgezinst, minus die Anfangsinvestition. Ein NPV über null bedeutet, dass das Projekt Wert über die geforderte Rendite hinaus schafft."],
    ['ex', 'Eine Investitionsentscheidung', "Heute 1.000 € investieren. Wir erhalten 400 € nach einem Jahr, 500 € nach zwei und 600 € nach drei Jahren. Der Satz beträgt 10 %.\nPV = 400/1,10 + 500/1,21 + 600/1,331 = 363,6 + 413,2 + 450,8 = 1.227,6.\nNPV = 1.227,6 − 1.000 = +227,6 €. Das Projekt lohnt sich."],
    ['h', 'IRR: die Rendite eines Projekts'],
    ['p', "IRR (internal rate of return, interner Zinsfuß) ist der Satz, bei dem der NPV des Projekts null ist. Anders gesagt, die durchschnittliche jährliche Rendite der Investition. Für unser Beispiel beträgt der IRR etwa 21,6 %: Bei diesem Satz ist die Summe der abgezinsten Zahlungen genau 1.000 €. Ein Projekt wird angenommen, wenn der IRR über der geforderten Rendite liegt (im Beispiel 10 %)."],
    ['p', "Der IRR wird durch Probieren auf dem Taschenrechner oder in Excel (Funktion IRR) berechnet. Im Kopf nähert man ihn über den MOIC an: IRR ≈ MOIC^(1/Jahre) − 1. Hat sich das Geld in 5 Jahren verdoppelt, ist IRR ≈ 2^0,2 − 1 ≈ 14,9 %."],
    ['h', 'CAGR: durchschnittliches Wachstum über mehrere Jahre'],
    ['p', "Wuchs der Umsatz in 7 Jahren von 100 auf 200, sind das nicht 100 % / 7 = 14,3 % pro Jahr. Richtig nach der Zinseszinsformel: CAGR = (Ende / Anfang)^(1/n) − 1 = 2^(1/7) − 1 ≈ 10,4 %."],
    ['h', 'Die Rule of 72'],
    ['p', "Ein schneller Weg, die Verdopplungszeit zu schätzen: 72 durch den Satz in Prozent teilen. Bei 8 % verdoppelt sich Geld in etwa 9 Jahren, bei 12 % in 6 Jahren."],
    ['h', 'Nominale und reale Rendite'],
    ['p', "Eine nominale Rendite von 7 % bei 3 % Inflation ergibt eine reale Rendite von etwa (1,07 / 1,03) − 1 ≈ 3,9 %, nicht einfach 7 % − 3 % = 4 %. Bei langen Rechnungen wird der Unterschied spürbar."],
    ['warn', "Zahlungen aus verschiedenen Jahren ohne Abzinsung addieren. 100 € in fünf Jahren sind nicht gleich 100 € heute."],
    ['q', "Warum kann der IRR manchmal in die Irre führen?", "Der IRR ignoriert die Größe des Projekts: Ein Projekt über 1.000 € mit 30 % IRR kann weniger Wert schaffen als ein Projekt über 100.000 € mit 15 % IRR. Außerdem kann es bei unkonventionellen Zahlungsströmen (mit wechselnden Plus und Minus) mehrere IRR-Werte geben. Deshalb betrachtet man den IRR zusammen mit dem NPV."],
    ['key', "PV = FV/(1+r)^n. NPV > 0 bedeutet, dass das Projekt Wert schafft. IRR ist der Satz, bei dem der NPV null ist. Zur Annäherung des Wachstums über mehrere Jahre nutze den Zinseszins, nicht die Teilung durch die Jahreszahl."]
  ] };
