'use strict';
// Deutsche Version des Buchs (Teil H).
window.BOOK_DE = window.BOOK_DE || {};
BOOK_DE.ecm = { title: 'Kapitalmärkte: IPOs, Anleihen und Kredite', tag: 'Märkte',
  intro: "Unternehmen beschaffen Geld nicht nur bei Banken, sondern auch an den Märkten. Für Aktien sind ECM-Spezialisten (equity capital markets) zuständig, für Schulden DCM (debt capital markets). Sehen wir, wie ein IPO abläuft und wie der Anleihemarkt aufgebaut ist.",
  blocks: [
    ['h', 'ECM: Beschaffung von Eigenkapital'],
    ['ul', [
      "**IPO:** die erste öffentliche Platzierung von Aktien.",
      "**Follow-on:** eine zusätzliche Platzierung bereits gehandelter Aktien.",
      "**Accelerated Bookbuild (ABB):** eine schnelle Platzierung über Nacht bei Großinvestoren, meist mit Abschlag zum Markt.",
      "**Rights Issue:** eine Emission mit Bezugsrecht für bestehende Aktionäre (in Deutschland verbreitet, Bezugsrecht).",
      "**Wandelanleihen:** Schulden mit dem Recht auf Umtausch in Aktien."
    ]],
    ['h', 'Wie ein IPO abläuft'],
    ['ol', [
      "**Auswahl der Banken.** Das Unternehmen ernennt Global Coordinators und Bookrunner. Sie führen das Orderbuch und organisieren die Platzierung.",
      "**Due Diligence und Dokumente.** Prüfung des Geschäfts, Erstellung des Prospekts und Abstimmung mit der Aufsichtsbehörde.",
      "**Equity Story und Bewertung.** Die Banken formulieren die Investmentstory und die Preisspanne, indem sie das Unternehmen mit Peers vergleichen.",
      "**Roadshow und Bookbuilding.** Das Management trifft Investoren, die Banken sammeln Orders und bauen Nachfrage auf.",
      "**Pricing.** Der endgültige Preis wird festgelegt. Meist wird ein Abschlag auf den fairen Wert eingepreist (10-15 % beim IPO), um Investoren anzuziehen und einen Anstieg am ersten Tag zu sichern.",
      "**Listing und Stabilisierung.** Die Aktien beginnen zu handeln. Der Underwriter stützt den Kurs mithilfe des Greenshoe.",
      "**Lock-up.** Insider dürfen meist 90-180 Tage lang keine Aktien verkaufen."
    ]],
    ['ex', 'IPO-Zahlen', "Das Unternehmen platziert 50 Mio. Aktien zu 20 € = 1.000 Mio. €.\nDie Provision der Banken von 5 % = 50 Mio. €.\nDer Greenshoe (bis zu 15 %) = 50 × 0,15 = 7,5 Mio. zusätzliche Aktien, um den Kurs zu stabilisieren, falls er fällt."],
    ['p', "Ein **Underwriter** ist eine Bank, die die Platzierung garantiert und das Risiko nicht verkaufter Aktien übernimmt (Firm Commitment). Die Alternative ist Best Efforts: Die Bank versucht nur zu verkaufen, das Risiko bleibt beim Emittenten. Die Provision beträgt meist einige Prozent des Platzierungsvolumens."],
    ['h', 'Warum ein Unternehmen einen IPO macht'],
    ['ul', [
      "Um Kapital für Wachstum zu beschaffen.",
      "Um frühen Investoren und Fonds einen Ausstieg zu ermöglichen.",
      "Um eine öffentliche Währung für M&A-Deals und Mitarbeitervergütung zu erhalten.",
      "Um Bekanntheit und Transparenz zu erhöhen."
    ]],
    ['p', "Die Nachteile: Offenlegungspflichten, Druck durch Quartalsergebnisse, Kosten und ein Verlust an Kontrolle."],
    ['h', 'DCM: Beschaffung von Schulden'],
    ['ul', [
      "**Investment-Grade-Anleihen.** Zuverlässige Emittenten mit hohem Rating, niedrige Spreads.",
      "**High-Yield-Anleihen.** Emittenten mit Rating unter BBB-/Baa3, höherer Zins.",
      "**Syndizierte und Leveraged Loans.** Ein Kredit einer Bankengruppe, oft für LBO-Deals.",
      "**Commercial Paper.** Kurzfristige Aufnahmen."
    ]],
    ['p', "Der Preis einer Anleihe wird durch Rendite (Yield) und Kupon bestimmt. Eine neue Anleihe wird oft als Spread zu einem Benchmark platziert (zum Beispiel zur Rendite deutscher Bunds oder zum Swap)."],
    ['h', 'Anleihekurs und Rendite'],
    ['p', "Kurs und Rendite bewegen sich in entgegengesetzte Richtungen. Eine fünfjährige Anleihe mit 4 % Kupon und Nennwert 100:"],
    ['tbl', ['Rendite', 'Anleihekurs'], [
      ['3 %', '104,58'],
      ['4 %', '100,00'],
      ['5 %', '95,67']
    ]],
    ['p', "Steigen die Zinsen, fallen die Kurse bestehender Anleihen: Neue Anleihen bringen mehr, also müssen die alten billiger werden. Je länger die Laufzeit, desto stärker der Rückgang (die Sensitivität gegenüber dem Zins heißt Duration)."],
    ['q', "Walk me through the IPO process.", "Auswahl der Banken, Due Diligence, Prospekt und Aufsicht, Roadshow und Bookbuilding, Preisfestlegung, Platzierung und Listing. Nach dem IPO gelten ein Lock-up und die Stabilisierung durch den Greenshoe."],
    ['q', "Warum gibt es einen IPO-Abschlag?", "Um Investoren anzuziehen und sie für die Unsicherheit eines neuen Papiers zu entschädigen. Ein Abschlag von 10-15 % auf den fairen Wert sichert Nachfrage und oft einen Anstieg am ersten Handelstag."],
    ['key', "ECM hilft Unternehmen, Eigenkapital zu beschaffen (IPO, Follow-on, ABB), DCM, Schulden zu beschaffen (Anleihen, Kredite). Banken erhalten eine Provision, organisieren die Nachfrage und übernehmen das Platzierungsrisiko."]
  ] };

BOOK_DE.rates = { title: 'Zinsen, Inflation und ihr Einfluss auf die Bewertung', tag: 'Märkte',
  intro: "Jede Bewertung ist ein Vergleich von Geld heute mit Geld morgen, und der Preis des Geldes über die Zeit wird durch Zinsen bestimmt. Wenn du verstehst, wie Zinsen den Wert von Unternehmen, Deals und Schulden beeinflussen, kannst du Makrofragen so beantworten, wie man es in der Bank erwartet.",
  blocks: [
    ['h', 'Woher Zinsen kommen'],
    ['p', "Zentralbanken (EZB, Fed) legen den Leitzins fest und beeinflussen die Marktzinsen. Staatsanleihen zuverlässiger Länder, etwa deutsche Bunds, dienen als risikoloser Richtwert. Die Zinsen auf Unternehmenskredite setzen sich aus dem risikolosen Zins und einem Kreditspread für das Risiko des Emittenten zusammen."],
    ['p', "Inflation (steigende Preise) zwingt Zentralbanken, die Zinsen zu erhöhen: So kühlen sie die Nachfrage ab. Je höher die Inflation, desto höher die nominalen Zinsen."],
    ['h', 'Wie Zinsen den Wert eines Unternehmens beeinflussen'],
    ['p', "Steigende Zinsen erhöhen den Diskontierungssatz (zuerst Rf, dann Re und WACC). Der Barwert künftigen Geldes sinkt. Erinnern wir uns an die DCF-Sensitivitätstabelle: Als der WACC von 9 % auf 10 % stieg, fiel der Wert des Unternehmens in unserem Beispiel von 1.854 auf 1.614, also um fast 13 %."],
    ['p', "Am stärksten leiden Vermögenswerte mit langer Duration: wachsende Unternehmen, deren wesentliches Geld weit in der Zukunft liegt (Technologie, Biotech). Unternehmen mit stabilen nahen Zahlungsströmen verlieren weniger."],
    ['h', 'Die Zinskurve'],
    ['p', "Die Zinskurve zeigt die Zinsen auf Anleihen unterschiedlicher Laufzeiten. Normalerweise steigt sie: Für lange Laufzeiten zahlt man mehr. Eine **Inversion** der Kurve (kurze Zinsen höher als lange) signalisiert, dass der Markt eine Verlangsamung der Wirtschaft und künftige Zinssenkungen erwartet. Historisch ging eine Inversion oft Rezessionen voraus."],
    ['h', 'Der Einfluss auf M&A und LBO'],
    ['p', "Teure Schulden verteuern Deals. Für einen LBO ist das ein direkter Schlag gegen die Rendite. In unserem Beispiel mit Schulden von 500 bedeutet ein Anstieg des Zinses von 6 % auf 9 % zusätzliche Zinsen von 15 Mio. € pro Jahr, nach Steuern 11,25. Über fünf Jahre sind das etwa 56 Mio. € weniger getilgte Schulden, das Equity beim Exit sinkt von 1.145 auf etwa 1.089, der MOIC von 2,86x auf 2,72x und der IRR von 23,4 % auf etwa 22,2 %. Außerdem geben Banken bei steigenden Zinsen weniger Schulden, und Sponsoren müssen mehr eigenes Geld einsetzen."],
    ['p', "Strategische Käufer leiden weniger, aber auch sie: Käufe gegen Cash werden teurer, die Bewertungen von Aktien (der Währung des Deals) fallen. Deshalb sinkt in Phasen hoher Zinsen die M&A-Aktivität meist."],
    ['h', 'Der Einfluss auf Banken und Branchen'],
    ['ul', [
      "**Banken.** Profitieren meist von einer steileren Kurve und höherer Marge (der Differenz zwischen Kredit- und Einlagenzins), leiden aber, wenn notleidende Kredite steigen.",
      "**Immobilien und Versorger.** Viele Schulden und stabile Zahlungsströme: zinsempfindlich.",
      "**Wachsende Technologieunternehmen.** Weit entfernte Zahlungsströme, hohe Empfindlichkeit.",
      "**Unternehmen mit Preissetzungsmacht** können die Inflation an die Preise weitergeben."
    ]],
    ['h', 'Nominale und reale Größen'],
    ['p', "Eine nominale Rendite von 7 % bei 3 % Inflation ergibt eine reale Rendite von etwa 3,9 %. Prognostizierst du Zahlungsströme in nominalen Zahlen, musst du mit dem nominalen Zins abzinsen, nicht mit dem realen. Mischen darf man nicht."],
    ['h', 'Wie man eine Makrofrage beantwortet'],
    ['ol', [
      "Nenne das Basisszenario und begründe es kurz (Inflation, Arbeitsmarkt, Position der EZB).",
      "Zeige die Kette: Zins → Diskontierungssatz → Bewertung; Zins → Preis der Schulden → Deals.",
      "Nenne, wer gewinnt und wer verliert.",
      "Räume Unsicherheit ein und sage, welche Daten deine Meinung ändern würden."
    ]],
    ['q', "Wie beeinflusst ein Zinsanstieg die Bewertung eines Unternehmens?", "Er erhöht den Diskontierungssatz und senkt den Barwert künftiger Zahlungsströme. Besonders leiden wachsende Unternehmen mit weit entfernten Zahlungsströmen. Auch Schulden werden teurer, was LBOs und M&A belastet."],
    ['q', "Was bedeutet eine inverse Zinskurve?", "Kurze Zinsen sind höher als lange. Es ist ein Signal für Erwartungen einer Konjunkturabschwächung und künftiger Zinssenkungen und ging historisch Rezessionen voraus."],
    ['key', "Zinsen bestimmen den Preis der Zeit. Ein Zinsanstieg senkt Bewertungen (besonders wachsender Unternehmen), verteuert Schulden und trifft LBOs und M&A. Eine Inversion der Zinskurve ist ein Signal für eine Abschwächung."]
  ] };
