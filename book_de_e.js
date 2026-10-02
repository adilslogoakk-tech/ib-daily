'use strict';
// Deutsche Version des Buchs (Teil E).
window.BOOK_DE = window.BOOK_DE || {};
BOOK_DE.norm = { title: 'LTM, NTM und Normalisierung von Kennzahlen', tag: 'Bewertung',
  intro: "Multiples sind nur ehrlich, wenn wir vergleichbare Zahlen vergleichen. Berichte von Unternehmen erscheinen zu verschiedenen Zeiten, enthalten Einmalposten und folgen unterschiedlichen Kalendern. Die Normalisierung bringt alles auf einen gemeinsamen Nenner.",
  blocks: [
    ['h', 'Warum Normalisierung nötig ist'],
    ['p', "Angenommen, wir bewerten ein Unternehmen im Oktober. Der letzte Jahresbericht erschien im März, ein Zwischenbericht für ein Quartal kam kürzlich heraus. Welche Zahl nehmen wir für das Multiple? Die Jahreszahl, die schon ein halbes Jahr alt ist? Oder die Quartalszahl, die nur einen Ausschnitt des Jahres zeigt? Wir brauchen einen Weg, den „heutigen Jahreswert“ zu erhalten."],
    ['h', 'LTM: die letzten zwölf Monate'],
    ['p', "LTM (last twelve months) setzt eine Kennzahl für die letzten 12 Monate aus dem letzten Jahresbericht und den Zwischendaten zusammen."],
    ['key', "LTM = letztes Geschäftsjahr + aktuelles YTD − YTD des Vorjahres"],
    ['ex', 'Berechnung von LTM', "EBITDA für das letzte Geschäftsjahr 400. Aktuelles YTD (9 Monate) 120, derselbe Zeitraum des Vorjahres 100.\nLTM = 400 + 120 − 100 = 420.\nWir haben die alten 9 Monate des Vorjahres durch die neuen 9 Monate ersetzt und einen aktuellen Jahreswert erhalten."],
    ['h', 'NTM und Forward-Multiples'],
    ['p', "Der Markt bewertet die Zukunft, daher schaut man oft auf Prognosezahlen: NTM (die nächsten 12 Monate) oder jährliche Analystenprognosen (2027E). Bei schnell wachsenden Unternehmen ist das Forward-Multiple niedriger als das historische, weil der Nenner wächst. Deshalb darf man nicht das LTM eines Unternehmens mit dem NTM eines anderen vergleichen."],
    ['h', 'Kalendarisierung: Angleichung auf ein gemeinsames Jahr'],
    ['p', "Bei verschiedenen Unternehmen endet das Geschäftsjahr zu unterschiedlichen Zeiten: bei manchen im Dezember, bei anderen im März oder September. Um sie zu vergleichen, werden die Kennzahlen auf ein Kalenderjahr umgerechnet."],
    ['ex', 'Kalendarisierung', "Das Geschäftsjahr eines Unternehmens endet im März. Das EBITDA für das im März 2026 endende Jahr (FY2026) beträgt 100, für FY2027 beträgt es 120.\nDas Kalenderjahr 2026 besteht aus 3 Monaten FY2026 (Januar-März) und 9 Monaten FY2027 (April-Dezember).\nEBITDA für das Kalenderjahr 2026 = 0,25 × 100 + 0,75 × 120 = 115."],
    ['h', 'Adjusted EBITDA: Einmaliges herausnehmen'],
    ['p', "Einmalposten verzerren das Bild. Um die wiederkehrende Profitabilität zu zeigen, werden sie ausgeschlossen."],
    ['tbl', ['Position', 'Mio. €'], [
      ['Reported EBITDA', '90'],
      ['+ Restrukturierungskosten (einmalig)', '+12'],
      ['+ Rechtskosten eines abgeschlossenen Verfahrens', '+8'],
      ['− Gewinn aus dem Verkauf eines Gebäudes (einmalig)', '−5'],
      ['Adjusted EBITDA', '105']
    ]],
    ['p', "Beachte: Die Normalisierung wirkt in beide Richtungen. Einmalige Kosten werden zurückaddiert, einmalige Erträge abgezogen."],
    ['h', 'Weitere Arten der Normalisierung'],
    ['ul', [
      "**Pro forma.** Hat ein Unternehmen kürzlich ein anderes gekauft, erscheint dessen Ergebnis nur für einen Teil des Jahres im Abschluss. Man rechnet so um, als wäre der Kauf zu Beginn der Periode erfolgt.",
      "**Run-rate.** Sind Kosteneinsparungen bereits angestoßen, zeigt man ihre Jahreswirkung. Das ist die umstrittenste Anpassung: Versprochene, aber nicht realisierte Synergien dürfen nicht ohne Kennzeichnung einbezogen werden.",
      "**Mid-Cycle-Kennzahlen.** Bei zyklischen Unternehmen (Chemie, Metalle) nimmt man das durchschnittliche Margenniveau über den Zyklus, nicht den Höhepunkt.",
      "**SBC (aktienbasierte Vergütung).** Eine umstrittene Frage: ob man sie als realen Aufwand betrachtet. Die konservative Antwort: ja."
    ]],
    ['warn', "Unseriöse Normalisierung. Ein Unternehmen kann Kosten „einmalig“ nennen, die jedes Jahr wiederkehren. Prüfe jede Anpassung an der Historie: Wenn die „einmaligen“ Kosten auch letztes Jahr anfielen, sind sie nicht einmalig."],
    ['q', "Wie berechnet man LTM?", "Man nimmt das letzte Geschäftsjahr, addiert die aktuelle aufgelaufene Periode (YTD) und zieht dieselbe Periode des Vorjahres ab."],
    ['q', "Welche Posten würden Sie bei der Berechnung des Adjusted EBITDA ausschließen?", "Einmalige und unregelmäßige: Restrukturierungskosten, Bußgelder, Wertminderungen, Gewinne oder Verluste aus Anlagenverkäufen. Jede Anpassung muss begründet und durch die Historie gestützt sein."],
    ['key', "LTM liefert einen aktuellen Jahreswert, die Kalendarisierung bringt Unternehmen auf ein gemeinsames Jahr, und Adjusted EBITDA entfernt Einmalposten in beide Richtungen. Jede Anpassung erfordert eine Begründung."]
  ] };

BOOK_DE.goodwill = { title: 'Goodwill, Transaktionsbilanzierung und latente Steuern', tag: 'Berichtswesen',
  intro: "Kauft ein Unternehmen ein anderes, erscheint in der Berichterstattung eine neue Position: der Goodwill. Mit ihm kommen die Neubewertung von Vermögenswerten und latente Steuern. Dieses Thema gehört oft zum Fusionsmodell, daher ist es wichtig zu verstehen, woher diese Zahlen kommen.",
  blocks: [
    ['h', 'Was Goodwill ist'],
    ['p', "Ein Käufer zahlt selten genau so viel, wie die Vermögenswerte des Ziels wert sind. Er zahlt für die Marke, Kunden, das Team, künftiges Wachstum. Diese Mehrzahlung über den beizulegenden Zeitwert der identifizierbaren Nettovermögenswerte heißt Goodwill."],
    ['key', "Goodwill = Kaufpreis − beizulegender Zeitwert (FV) der identifizierbaren Nettovermögenswerte"],
    ['h', 'Wie er berechnet wird: Purchase Accounting'],
    ['ol', [
      "Den Kaufpreis bestimmen (Equity Value, wenn Aktien gekauft werden).",
      "Den beizulegenden Zeitwert der Vermögenswerte und Verbindlichkeiten des Ziels schätzen. Oft sind Vermögenswerte mehr wert als ihr Buchwert, sie werden **nach oben aufgewertet (Write-up)**.",
      "Die latente Steuerverbindlichkeit (DTL) auf die Aufwertung berücksichtigen.",
      "Die Differenz zwischen dem Preis und dem beizulegenden Zeitwert des Nettovermögens ist der Goodwill."
    ]],
    ['ex', 'Berechnung des Goodwill', "Kaufpreis 500. Buchwert des Eigenkapitals des Ziels 300. Vermögenswerte um 50 aufgewertet. Steuer 25 %.\nDTL = 50 × 25 % = 12,5.\nBeizulegender Zeitwert des Nettovermögens = 300 + 50 − 12,5 = 337,5.\nGoodwill = 500 − 337,5 = 162,5."],
    ['p', "Gibt es keine Aufwertung, ist die Rechnung einfacher: Bei einem Preis von 500 und einem beizulegenden Zeitwert des Nettovermögens von 350 beträgt der Goodwill 150."],
    ['h', 'Was danach mit dem Goodwill passiert'],
    ['ul', [
      "**Goodwill wird nicht abgeschrieben**, weder nach IFRS noch nach US GAAP.",
      "Stattdessen wird er **mindestens einmal jährlich auf Wertminderung geprüft** (Impairment Test). Ist das Geschäft weniger wert als erfasst, wird die Differenz abgeschrieben.",
      "Eine Wertminderung ist ein **nicht zahlungswirksamer Aufwand**: Sie mindert das Net Income, aber es fließt kein Geld ab. Daher wird sie in der Kapitalflussrechnung wieder addiert.",
      "Aufgewertete materielle Vermögenswerte werden abgeschrieben, daher steigen nach dem Deal die Abschreibung (und die Kosten), und der Gewinn sinkt."
    ]],
    ['h', 'Latente Steuern: DTL und DTA'],
    ['p', "Steuer- und Handelsbilanz berechnen den Gewinn unterschiedlich. Dadurch ist die Steuer im Abschluss (Book Tax) nicht gleich der tatsächlich gezahlten Steuer (Cash Tax). Die Differenz wird abgegrenzt."],
    ['ul', [
      "**DTL (latente Steuerverbindlichkeit):** Die Steuer im Abschluss ist höher als die zu zahlende Steuer. Typische Ursache: Die steuerliche Abschreibung läuft schneller als die handelsrechtliche. Beispiel: Book Tax 30, zu zahlende Steuer 20, also stieg die DTL um 10. Das Unternehmen zahlt dieses Geld später.",
      "**DTA (latenter Steueranspruch):** Die zu zahlende Steuer ist höher als die Steuer im Abschluss, oder es gibt steuerliche Verlustvorträge aus Vorjahren (NOLs), die künftig die Steuern senken. Beispiel: Ein Verlust von 100 bei 25 % Satz ergibt eine DTA von 25."
    ]],
    ['p', "Bei Deals entsteht eine DTL durch die Aufwertung von Vermögenswerten: Der Buchwert ist gestiegen, die steuerliche Basis aber gleich geblieben. Deshalb haben wir bei der Goodwill-Berechnung die DTL abgezogen."],
    ['h', 'Asset Deal und Share Deal: die steuerliche Wirkung'],
    ['p', "Bei einem **Share Deal** (Kauf von Aktien) bleibt die steuerliche Basis der Vermögenswerte gleich, daher erzeugt eine Aufwertung eine DTL. Bei einem **Asset Deal** (Kauf von Vermögenswerten) erhält der Käufer einen **steuerlichen Step-up**: Die Basis der Vermögenswerte wird auf den Kaufpreis angehoben, die Abschreibung kann steuerlich geltend gemacht werden, und der Käufer spart real Geld. Daher ist ein Asset Deal steuerlich für den Käufer vorteilhafter, rechtlich aber komplizierter."],
    ['h', 'Was im Fusionsmodell zu ändern ist'],
    ['ul', [
      "Goodwill und die Aufwertung der Vermögenswerte in die Bilanz nach dem Deal aufnehmen.",
      "Die Abschreibung der aufgewerteten Vermögenswerte in die GuV aufnehmen.",
      "Die DTL im Maß der Abschreibung der Aufwertung verringern.",
      "Das alte Eigenkapital des Ziels eliminieren und die neuen Aktien und Schulden des Käufers berücksichtigen."
    ]],
    ['q', "Was passiert, wenn der Goodwill wertgemindert wird?", "Es ist ein nicht zahlungswirksamer Aufwand: Das Net Income sinkt um den Betrag der Wertminderung, in der Kapitalflussrechnung wird sie wieder addiert, in der Bilanz verringert sich der Goodwill. Das Cash des Unternehmens ändert sich nicht."],
    ['q', "Woher kommt die DTL beim Kauf eines Unternehmens?", "Bei einer Aufwertung von Vermögenswerten wird der Buchwert höher als die steuerliche Basis. Die künftigen Steuern werden höher sein, als der Abschluss zeigt, und diese Differenz wird als DTL erfasst."],
    ['key', "Goodwill ist die Mehrzahlung über den beizulegenden Zeitwert des Nettovermögens. Er wird nicht abgeschrieben, aber auf Wertminderung geprüft. Die Aufwertung von Vermögenswerten erzeugt eine DTL, und bei einem Asset Deal erhält der Käufer einen steuerlichen Step-up."]
  ] };

BOOK_DE.ifrs = { title: 'IFRS und US GAAP, Leasing und IFRS 16', tag: 'Berichtswesen',
  intro: "In Europa richtet sich die Rechnungslegung nach IFRS, in den USA nach US GAAP. Im Interview wird selten verlangt, Standards zu zitieren, aber man muss den Unterschied bei den Kernfragen kennen. Besondere Aufmerksamkeit gilt dem Leasing: Nach Einführung von IFRS 16 hat es die Kennzahlen der Unternehmen stark verändert.",
  blocks: [
    ['h', 'Das Gesamtbild'],
    ['p', "IFRS (internationale Standards) beruht auf Prinzipien und lässt mehr professionellen Ermessensspielraum. US GAAP ist detaillierter und strenger geschrieben. Für börsennotierte Unternehmen der EU ist IFRS im Konzernabschluss verpflichtend. Der Unterschied wird Ihre Schlussfolgerung zur Bewertung kaum ändern, beeinflusst aber die Vergleichbarkeit."],
    ['h', 'Die wichtigsten Unterschiede'],
    ['tbl', ['Frage', 'IFRS', 'US GAAP'], [
      ['LIFO-Methode für Vorräte', 'Verboten', 'Erlaubt'],
      ['Entwicklungskosten (R&D)', 'Werden bei Erfüllung der Bedingungen aktiviert', 'Werden meist als Aufwand erfasst'],
      ['Aufwertung von Sachanlagen nach oben', 'Erlaubt (Neubewertungsmodell)', 'Nicht erlaubt'],
      ['Wertaufholung bei Wertminderung', 'Erlaubt (außer Goodwill)', 'Verboten'],
      ['Zinsen in der Kapitalflussrechnung', 'Im operativen oder im Finanzierungsteil zulässig', 'Operativer Teil'],
      ['Leasing beim Leasingnehmer', 'Fast alles in der Bilanz', 'Operating Leases bleiben im Aufwand']
    ]],
    ['h', 'Was IFRS 16 geändert hat'],
    ['p', "Vor IFRS 16 erschien Operating Leasing nicht in der Bilanz: Zahlungen liefen einfach als Aufwand. Nach IFRS 16 erfasst der Leasingnehmer in der Bilanz ein **Nutzungsrecht** (right-of-use asset) und eine **Leasingverbindlichkeit** (lease liability) in Höhe des Barwerts der Leasingzahlungen. Der Aufwand wird durch zwei Posten ersetzt: Abschreibung des Vermögenswerts und Zinsen auf die Verbindlichkeit."],
    ['ex', 'Ein Leasing über 5 Jahre', "Zahlung von 20 Mio. € pro Jahr über 5 Jahre, Zins 5 %.\nLeasingverbindlichkeit = 20 × 4,3295 = 86,6 Mio. € (Annuitätenfaktor für 5 % und 5 Jahre).\nJahr 1: Zinsen 86,6 × 5 % = 4,3; Abschreibung 86,6 / 5 = 17,3. Gesamtaufwand 21,6, früher waren es 20."],
    ['tbl', ['Kennzahl', 'Vor IFRS 16', 'Nach IFRS 16'], [
      ['Leasingaufwand im EBITDA', '−20', '0 (der Aufwand ging nach unten)'],
      ['EBITDA', 'X', 'X + 20'],
      ['EBIT', 'X − 20', 'X − 17,3 (um 2,7 höher)'],
      ['Zinsen', '0', '4,3 (unter dem EBIT)'],
      ['Schulden in der Bilanz', 'ohne Leasing', '+ 86,6']
    ]],
    ['p', "Das Ergebnis: Das EBITDA stieg um den vollen Leasingbetrag, die Schulden stiegen um den Barwert der Zahlungen. Besonders spürbar ist das im Einzelhandel, bei Restaurants und Fluggesellschaften, wo Leasing groß ist."],
    ['h', 'Konsistenz bei Multiples'],
    ['p', "Berechnest du den EV einschließlich der Leasingschulden, muss das EBITDA **vor** Leasing stehen (wie nach IFRS 16). Ist der EV ohne Leasing, muss das EBITDA **nach** Abzug des Leasings stehen. Mischen darf man nicht."],
    ['ex', 'EV/EBITDA mit Leasing', "EBITDA vor IFRS 16 beträgt 120, Leasingzahlungen 20, also beträgt das EBITDA nach IFRS 16 140. EV ohne Leasing 1.000.\nAnsatz ohne Leasing: 1.000 / 120 = 8,3x.\nAnsatz mit Leasing: (1.000 + 86,6) / 140 = 7,8x.\nBeide Ansätze sind korrekt, wenn sie konsistent sind. Der Fehler: den EV ohne Leasing (1.000) mit dem EBITDA nach IFRS 16 (140) zu kombinieren, was 7,1x ergibt und das Multiple zu niedrig ansetzt."],
    ['h', 'Vergleich von IFRS- und US-GAAP-Unternehmen'],
    ['p', "Bei einem amerikanischen Unternehmen bleibt Operating Leasing im Aufwand (das EBITDA ist niedriger), bei einem europäischen nach IFRS 16 verlässt der Aufwand das EBITDA. Um sie zu vergleichen, bringt man beide in dieselbe Form: Meist nutzt man das EBITDA nach Abzug von Leasing (EBITDAR minus Miete) und den EV ohne Leasingschulden."],
    ['q', "Wie hat IFRS 16 das EBITDA des Leasingnehmers beeinflusst?", "Das EBITDA stieg: Der Leasingaufwand wurde durch Abschreibung und Zinsen ersetzt, die unter dem EBITDA liegen. Gleichzeitig erschienen in der Bilanz ein Vermögenswert und eine Verbindlichkeit, und die Schulden des Unternehmens stiegen."],
    ['q', "Welche Methode der Vorratsbewertung ist nach US GAAP erlaubt, nach IFRS aber nicht?", "LIFO (last in, first out)."],
    ['key', "IFRS und US GAAP unterscheiden sich im Detail, aber die Hauptsache: Nach IFRS 16 wird Leasing zu Schulden, und das EBITDA steigt. Bei Multiples muss man konsistent bleiben: EV mit Leasing und EBITDA vor Leasing oder EV ohne Leasing und EBITDA nach Leasing."]
  ] };

BOOK_DE.dilution = { title: 'Aktienverwässerung: Optionen, RSUs und Wandelanleihen', tag: 'Bewertung',
  intro: "Der Aktienkurs mal Aktienanzahl ergibt die Marktkapitalisierung nur dann, wenn die Aktienanzahl richtig berechnet ist. Die meisten Unternehmen haben Instrumente, die zu neuen Aktien werden können. Sie müssen berücksichtigt werden: Das ist die Verwässerung.",
  blocks: [
    ['h', 'Basic und Diluted Shares'],
    ['p', "**Basic Shares** sind die Aktien, die ausgegeben wurden und derzeit im Umlauf sind. **Diluted Shares** addieren dazu die Aktien, die bei Ausübung von Optionen, Vergabe von RSUs oder Wandlung von Anleihen entstehen können. Für die Bewertung nimmt man immer Diluted."],
    ['h', 'Instrumente, die verwässern'],
    ['ul', [
      "**Optionen (options).** Das Recht, eine Aktie zu einem festen Preis (Strike) zu kaufen. Liegt der Marktpreis über dem Strike, ist die Option „im Geld“ (in-the-money, ITM).",
      "**RSUs (restricted stock units).** Das Versprechen, einem Mitarbeiter Aktien zu geben. Sie werden voll gezählt, sie sind fast normale Aktien.",
      "**Warrants.** Ähnlich wie Optionen, vom Unternehmen für Investoren ausgegeben.",
      "**Wandelanleihen.** Schulden, die zu einem festgelegten Wandlungspreis in Aktien getauscht werden können."
    ]],
    ['h', 'Die Treasury Stock Method'],
    ['p', "Optionen im Geld erzeugen neue Aktien, aber der Inhaber zahlt dem Unternehmen den Strike. Man nimmt an, dass das Unternehmen das erhaltene Geld nutzt, um einen Teil der Aktien am Markt zurückzukaufen. Daher ist die Netto-Verwässerung geringer."],
    ['key', "Netto-Neuaktien = N Optionen × (1 − Strike / Aktienkurs), wenn der Kurs über dem Strike liegt"],
    ['ex', 'TSM', "10 Mio. Optionen mit Strike 20 €, Aktienkurs 40 €.\nDie Inhaber zahlen 10 × 20 = 200 Mio. €, davon kauft das Unternehmen 200 / 40 = 5 Mio. Aktien zurück.\nNetto-Zuwachs = 10 − 5 = 5 Mio. Aktien (nach der Formel: 10 × (1 − 20/40) = 5).\nBeträgt der Aktienkurs 15 €, ist die Option „aus dem Geld“ (out-of-the-money): Ausüben lohnt nicht, die Verwässerung ist 0."],
    ['h', 'Wandelanleihen: die If-converted-Methode'],
    ['p', "Wandelanleihen werden als Aktien gezählt, wenn der Aktienkurs über dem Wandlungspreis liegt, und als Schulden, wenn er darunter liegt. Zählen wir die Anleihen als Aktien, addieren wir die entsprechenden Aktien und **nehmen die Anleihen aus den Schulden heraus**, um nicht dasselbe doppelt zu zählen."],
    ['ex', 'Ein vollständiges Beispiel', "100 Mio. Basic Shares, Kurs 30 €. 10 Mio. Optionen mit Strike 20 €. Wandelanleihen mit Nennwert 200 Mio. €, Wandlungspreis 25 € (der Aktienkurs ist höher, also wandeln wir).\nNeue Aktien aus Optionen: 10 × (1 − 20/30) = 3,33 Mio.\nNeue Aktien aus Anleihen: 200 / 25 = 8 Mio.\nDiluted Shares = 100 + 3,33 + 8 = 111,33 Mio.\nEquity Value = 111,33 × 30 = 3.340 Mio. €.\nSonstige Schulden 500, Cash 150, die Anleihen sind bereits als Aktien erfasst.\nEV = 3.340 + 500 − 150 = 3.690 Mio. €."],
    ['h', 'Zirkularität bei M&A'],
    ['p', "Beim Kauf eines Unternehmens liegt der Angebotspreis über dem Markt, und je höher der Preis, desto mehr Optionen sind im Geld und desto größer die Verwässerung. Die Aktienanzahl hängt also vom Preis ab, und der Preis von der Aktienanzahl. In Modellen löst man das durch Iteration oder eine Formel mit Zirkelbezug."],
    ['h', 'Verwässerung und Prognose des Aktienkurses'],
    ['p', "Hat man aus einem DCF den Equity Value erhalten, berechnet man den Aktienkurs durch Teilung durch die Diluted Shares, aber die Anzahl der Diluted Shares hängt vom Kurs selbst ab. Die Lösung: iterieren, bis Kurs und Aktienanzahl übereinstimmen."],
    ['warn', "Basic Shares für die Marktkapitalisierung verwenden oder Optionen aus dem Geld einbeziehen. Ein weiterer häufiger Fehler: Wandelanleihen sowohl als Aktien als auch als Schulden zu zählen."],
    ['q', "Wie wird die Diluted Share Count berechnet?", "Zur Basisaktienanzahl addiert man die Netto-Verwässerung durch Optionen nach der Treasury Stock Method (nur Optionen im Geld), RSUs und Aktien aus Wandelanleihen, wenn sie im Geld sind."],
    ['key', "Für die Bewertung braucht man immer Diluted Shares. Optionen im Geld werden nach TSM gezählt, Wandelanleihen nach If-converted, und Aktienanzahl und Kurs hängen miteinander zusammen."]
  ] };

BOOK_DE.debt = { title: 'Schulden und Kapitalstruktur', tag: 'Bewertung',
  intro: "Ein Unternehmen finanziert seine Vermögenswerte mit Schulden und Eigenkapital. Das Gleichgewicht zwischen beiden heißt Kapitalstruktur. Sie bestimmt Risiko, Kapitalkosten und den Spielraum für Deals wie einen LBO. Wir betrachten die Schuldarten, ihre Prioritätsregeln und Kreditkennzahlen.",
  blocks: [
    ['h', 'Die Leiter der Ansprüche: wer zuerst bezahlt wird'],
    ['p', "Kreditgeber werden vor den Aktionären bezahlt, und unter den Kreditgebern gibt es eine Hierarchie. Je weiter vorn man in der Schlange steht, desto geringer das Risiko und desto niedriger der Zins."],
    ['ol', [
      "**Revolver (revolvierende Kreditlinie) und Term Loan A/B.** Bankkredite, meist durch Sicherheiten gedeckt (secured). Erster Rang.",
      "**Senior Secured Notes.** Anleihen mit Sicherheiten.",
      "**Senior Unsecured Notes.** Anleihen ohne Sicherheiten.",
      "**Subordinated / Mezzanine.** Nachrangige Schulden, oft mit Elementen der Eigenkapitalbeteiligung.",
      "**Preferred (Vorzugsaktien).** Die Zahlungen sind fest, kommen aber nach allen Kreditgebern.",
      "**Common Equity (Stammaktien).** Zuletzt in der Schlange und am riskantesten, aber sie erhalten das gesamte Restwachstum."
    ]],
    ['h', 'Was eine Schuld von der anderen unterscheidet'],
    ['ul', [
      "**Besicherung.** Secured Debt ist durch ein Pfandrecht an Vermögenswerten geschützt, Unsecured nicht.",
      "**Zins.** Variabel (Euribor plus Marge) oder fest.",
      "**Tilgung.** Amortizing (schrittweise) oder Bullet (eine Zahlung am Ende).",
      "**Rating.** Investment Grade (BBB-/Baa3 und höher) und High Yield (darunter). Je niedriger das Rating, desto höher der Spread.",
      "**PIK (payment in kind).** Zinsen werden nicht in bar gezahlt, sondern zur Schuld addiert."
    ]],
    ['h', 'Covenants'],
    ['p', "Covenants sind Bedingungen in einem Kreditvertrag, die den Kreditgeber schützen. **Maintenance Covenants** werden regelmäßig geprüft: zum Beispiel Net Debt/EBITDA nicht höher als 4,0x oder Zinsdeckung nicht niedriger als 3,0x. Ein Verstoß gibt dem Kreditgeber das Recht, vorzeitige Rückzahlung zu verlangen. **Incurrence Covenants** werden nur bei bestimmten Handlungen geprüft, zum Beispiel bei Aufnahme neuer Schulden oder Zahlung von Dividenden."],
    ['h', 'Kreditkennzahlen'],
    ['ul', [
      "**Net Debt / EBITDA.** Debt 500, Cash 100, EBITDA 100 ergeben (500 − 100) / 100 = 4,0x. Zeigt, in wie vielen Jahren das Unternehmen seine Schulden theoretisch tilgen könnte.",
      "**Interest Coverage = EBITDA / Zinsen.** EBITDA 200 bei Zinsen 40 ergibt 5,0x.",
      "**Debt / Capital = Debt / (Debt + Equity).** Schulden 300 und Eigenkapital 700 ergeben 30 %."
    ]],
    ['h', 'Was Schulden bringen und wo das Risiko liegt'],
    ['p', "Vorteile von Schulden: Sie sind günstiger als Eigenkapital, bringen einen Steuerschild und verwässern die Aktionäre nicht. Nachteile: feste Zahlungen, Covenants, Insolvenzrisiko. Die optimale Struktur ist ein Gleichgewicht zwischen dem Steuervorteil und den Kosten finanzieller Schwierigkeiten."],
    ['h', 'Was bei einer Insolvenz geschieht'],
    ['p', "Es gilt die Regel des absoluten Vorrangs: Jede Klasse erhält Geld erst, nachdem die höherrangige vollständig bezahlt wurde."],
    ['ex', 'Verteilung bei Insolvenz', "Der Wert des Unternehmens bei Liquidation beträgt 600. Ansprüche: Senior Secured 400, Senior Unsecured 300, Aktionäre.\nSecured-Gläubiger erhalten 400 (100 %).\nFür die Unsecured bleiben 200, ihr Anspruch beträgt 300, also die Rückzahlung 200 / 300 = 66,7 %.\nAktionäre erhalten 0."],
    ['h', 'Kapitalstruktur bei Deals'],
    ['p', "Bei einem LBO kauft der Investor ein Unternehmen und finanziert einen erheblichen Teil des Preises mit Schulden (oft 4-6x EBITDA). Die Struktur wird aus Tranchen unterschiedlichen Rangs und unterschiedlicher Kosten zusammengestellt und an die Cashflows des Unternehmens angepasst. Je stabiler die Zahlungsströme, desto mehr Schulden lassen sich aufnehmen."],
    ['q', "Warum sollte ein Unternehmen Schulden statt Aktien ausgeben?", "Schulden sind günstiger als Eigenkapital (Steuerschild, geringeres Risiko für den Investor) und verwässern die Aktionäre nicht. Die Nachteile: feste Zahlungen, Covenants, höheres Insolvenzrisiko."],
    ['q', "Was erhalten die Aktionäre bei einer Insolvenz?", "Nur das, was nach der vollständigen Befriedigung der Ansprüche aller Gläubiger übrig bleibt. In den meisten Fällen nichts."],
    ['key', "Schulden sind günstiger als Eigenkapital, schaffen aber starre Verpflichtungen. Die Rangfolge der Ansprüche bestimmt Kosten und Risiko, Covenants schützen Kreditgeber, und die Kennzahlen Net Debt/EBITDA und Zinsdeckung zeigen, wie sicher die Belastung ist."]
  ] };
