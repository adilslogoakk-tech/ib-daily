'use strict';
// Deutsche Version des Buchs (Teil F).
window.BOOK_DE = window.BOOK_DE || {};
BOOK_DE.ma = { title: 'Der M&A-Prozess: So wird ein Unternehmen verkauft', tag: 'Transaktionen',
  intro: "Der Verkauf eines Unternehmens ist ein Projekt über mehrere Monate mit klaren Phasen. Eine Investmentbank organisiert den Prozess, bereitet die Dokumente vor und führt die Verhandlungen. Die Kenntnis dieser Abfolge hilft, Fragen zu beantworten und zu verstehen, womit sich Analysten in einem M&A-Team beschäftigen.",
  blocks: [
    ['h', 'Die zwei Seiten eines Deals'],
    ['p', "**Sell-side** berät den Verkäufer: Ziel ist, den besten Käufer zum besten Preis zu finden. **Buy-side** berät den Käufer: Ziel ist, ein passendes Ziel zu finden und vernünftig zu kaufen. Der klassische Verkaufsprozess wird aus Sicht der Sell-side beschrieben, weil er am stärksten strukturiert ist."],
    ['h', 'Die Phasen des Verkaufsprozesses'],
    ['ol', [
      "**Vorbereitung (2-6 Wochen).** Die Bank lernt das Unternehmen kennen, baut ein Finanzmodell, bestimmt die Bewertungsspanne, bereitet Dokumente und die Liste potenzieller Käufer (Buyer List) vor.",
      "**Teaser und Ansprache.** Ein kurzer anonymer Überblick über das Unternehmen auf ein bis zwei Seiten geht an potenzielle Käufer. Wer interessiert ist, unterzeichnet eine Vertraulichkeitsvereinbarung (NDA).",
      "**CIM.** Nach dem NDA erhalten Käufer das Confidential Information Memorandum: ein ausführliches Dokument über Geschäft, Markt, Finanzen und Strategie. Es ist das wichtigste Marketingmaterial.",
      "**IOI (erste Runde).** Käufer senden unverbindliche Angebote (Indication of Interest) mit einer Preisspanne. Verkäufer und Bank wählen die besten für die zweite Runde aus.",
      "**Management-Präsentation und Data Room.** Die ausgewählten Teilnehmer treffen das Management und erhalten Zugang zu einem virtuellen Data Room: Verträge, Finanzdaten, Rechtsdokumente. Sie führen eine Due Diligence (Prüfung) durch.",
      "**Verbindliche Angebote (zweite Runde).** Käufer senden verbindliche Angebote mit Preis, Finanzierungsbedingungen und einem abgestimmten Vertragsentwurf.",
      "**Verhandlungen und SPA.** Der Verkäufer wählt einen Gewinner und unterzeichnet Exklusivität. Die Parteien stimmen den Kaufvertrag (SPA) ab: Preis, Garantien, Vollzugsbedingungen.",
      "**Signing und Closing.** Der Vertrag wird unterzeichnet, dann werden die Bedingungen erfüllt (Genehmigung der Kartellbehörden, Aufsichtsbehörden), und der Deal wird vollzogen, wenn das Geld den Besitzer wechselt."
    ]],
    ['h', 'Arten von Auktionen'],
    ['ul', [
      "**Breite Auktion (broad auction).** Viele Käufer werden einbezogen. Maximaler Wettbewerb, aber Risiko des Informationsabflusses.",
      "**Begrenzt (targeted).** 5-10 der wahrscheinlichsten Käufer werden eingeladen. Ein Kompromiss zwischen Preis und Vertraulichkeit.",
      "**Bilaterale Verhandlungen.** Ein Käufer. Schnell und leise, aber eine schwache Verhandlungsposition."
    ]],
    ['h', 'Wer kauft: strategische und Finanzinvestoren'],
    ['ul', [
      "**Strategische Käufer** (Unternehmen aus der Branche) können dank Synergien mehr zahlen: Kosteneinsparungen, Cross-Selling.",
      "**Finanzinvestoren** (Private-Equity-Fonds) sind durch eine Zielrendite (IRR) begrenzt. Sie zahlen so viel, dass sie nach dem Exit 20-25 % im Jahr erzielen."
    ]],
    ['h', 'Womit Analysten in einem M&A-Team beschäftigt sind'],
    ['ul', [
      "Sie bauen Finanzmodelle und Bewertungen (DCF, Comps, Precedents, LBO).",
      "Sie schreiben Teaser, CIMs und Präsentationen für das Management.",
      "Sie bereiten Käuferlisten und Tabellen zum Vergleich der Angebote vor.",
      "Sie betreuen den Data Room und verfolgen Fragen der Käufer.",
      "Sie helfen bei der Synergieanalyse und beim Fusionsmodell."
    ]],
    ['h', 'Wie die Bank verdient'],
    ['p', "Bei M&A erhält die Bank üblicherweise eine feste Retainer-Gebühr und die Hauptvergütung bei Erfolg (Success Fee), die von der Größe des Deals abhängt. Das bedeutet, dass die Bank daran interessiert ist, den Deal bis zum Closing zu bringen. Die Höhe der Gebühren schwankt stark je nach Größe und Komplexität des Deals."],
    ['q', "Wer zahlt mehr: ein strategischer oder ein Finanzinvestor?", "In der Regel der strategische, weil er Synergien berücksichtigt, die ein Fonds nicht hat. Ein Finanzinvestor ist durch die Rendite begrenzt: Er braucht, dass der Deal bei vernünftiger Schuldenstruktur 20-25 % IRR bringt."],
    ['q', "Was ist ein CIM?", "Confidential Information Memorandum: ein ausführliches Dokument über das Unternehmen, das interessierte Käufer nach Unterzeichnung eines NDA erhalten. Es beschreibt Geschäft, Markt, Finanzen, Strategie und Investitionsattraktivität."],
    ['key', "Der Verkaufsprozess: Vorbereitung, Teaser, NDA, CIM, IOI, Management-Präsentation und Data Room, verbindliche Angebote, SPA, Signing und Closing. Die Bank organisiert Wettbewerb, damit der Verkäufer den besten Preis erhält."]
  ] };

BOOK_DE.deals = { title: 'Transaktionsarten, Prämie und Deal-Schutz', tag: 'Transaktionen',
  intro: "Deals unterscheiden sich in Form, Zahlungsweise und rechtlicher Struktur. Von diesen Parametern hängen Steuern, Risiken und das Verhalten der Parteien ab. In diesem Kapitel behandeln wir die wichtigsten Varianten und Schutzmechanismen, nach denen in Interviews gefragt wird.",
  blocks: [
    ['h', 'Kauf von Aktien oder Vermögenswerten'],
    ['ul', [
      "**Share Deal (Stock Deal).** Der Käufer erwirbt die Aktien des Ziels und mit ihnen alle Verbindlichkeiten und verborgenen Risiken. Rechtlich einfacher. In Deutschland ist das die verbreitetste Struktur für Privatunternehmen.",
      "**Asset Deal.** Der Käufer nimmt nur ausgewählte Vermögenswerte und Verbindlichkeiten. Erlaubt, Unerwünschtes zu lassen, und bringt einen steuerlichen Step-up, erfordert aber die separate Übertragung jedes Vermögenswerts und Vertrags."
    ]],
    ['h', 'Zahlungsweise'],
    ['p', "Der Käufer kann in bar (Cash), in Aktien (Stock) oder gemischt zahlen. Die Wahl hängt von den Möglichkeiten des Käufers und den Wünschen des Verkäufers ab."],
    ['ul', [
      "**Cash.** Der Verkäufer erhält sofort einen bestimmten Betrag und trägt kein Marktrisiko. Der Käufer finanziert mit Cash oder Schulden.",
      "**Stock.** Der Verkäufer wird Aktionär des fusionierten Unternehmens und teilt dessen Risiko und Wachstum. Vorteilhaft für einen Käufer, dessen Aktien teuer sind und der kein Cash hat."
    ]],
    ['h', 'Kontrollprämie und Umtauschverhältnis'],
    ['p', "Der Käufer zahlt über dem Marktpreis, weil er die Kontrolle erhält. Die Prämie wird gegenüber dem Kurs am Tag vor der Ankündigung berechnet."],
    ['ex', 'Berechnungen zum Deal', "Aktienkurs des Ziels 40 €, Angebot 52 €.\nPrämie = 52 / 40 − 1 = 30 %.\nHat das Ziel 20 Mio. Aktien, beträgt der Equity Value des Deals = 52 × 20 = 1.040 Mio. €.\nBei Zahlung in Aktien des Käufers (Kurs 30 €) beträgt das Umtauschverhältnis = 52 / 30 ≈ 1,73 Käuferaktien je Zielaktie.\nWerden 20 Mio. neue Aktien bei 80 Mio. alten ausgegeben, erhalten die Aktionäre des Ziels 20 / (80 + 20) = 20 % des fusionierten Unternehmens."],
    ['h', 'Freundliche und feindliche Deals'],
    ['p', "Ein **freundlicher Deal** wird mit dem Vorstand des Ziels abgestimmt. Ein **feindlicher** geht über ein öffentliches Angebot (Tender Offer) direkt an die Aktionäre, am Vorstand vorbei. Das Ziel kann sich wehren: einen „weißen Ritter“ (einen anderen Käufer) suchen, eine „Giftpille“ (Verwässerung der Aktien bei Übernahme) einsetzen."],
    ['p', "In Deutschland werden öffentliche Übernahmen durch das WpÜG geregelt. Der Erwerb von 30 % der Stimmrechte verpflichtet zu einem Angebot an alle übrigen Aktionäre (Pflichtangebot). Der Ausschluss der verbleibenden Minderheitsaktionäre (Squeeze-out) ist bei einem sehr hohen Anteil möglich, je nach Form etwa 90-95 %."],
    ['h', 'Mechanismen zum Schutz des Deals'],
    ['ul', [
      "**Breakup Fee.** Nimmt das Ziel ein anderes Angebot an, zahlt es dem ersten Käufer eine Entschädigung (meist 2-4 % der Deal-Größe).",
      "**Reverse Termination Fee.** Zahlt der Käufer, wenn der Deal aus Gründen auf seiner Seite scheitert: Er erhielt keine Finanzierung oder Genehmigung der Aufsicht.",
      "**No-Shop.** Das Ziel verpflichtet sich, keine anderen Käufer zu suchen. Wird oft durch eine Go-Shop-Klausel gemildert: eine kurze Frist, um ein höheres Angebot zu suchen.",
      "**MAC (Material Adverse Change).** Der Käufer darf vom Deal zurücktreten, wenn dem Unternehmen ein wesentliches negatives Ereignis widerfahren ist.",
      "**Earn-out.** Ein Teil des Preises wird später gezahlt und hängt vom Erreichen von Zielen (Umsatz, EBITDA) ab. Bringt Positionen näher zusammen, wenn die Parteien die Zukunft unterschiedlich sehen."
    ]],
    ['h', 'Merger of Equals und Übernahme'],
    ['p', "Bei einem **Merger of Equals** schließen sich beide Unternehmen zusammen, die Aktionäre erhalten Anteile an der neuen Struktur, und die Prämie ist minimal. Bei einer **Übernahme** ist eine Seite eindeutig die Hauptseite und zahlt eine Prämie. Rechtlich bedeutet eine Fusion den Zusammenschluss zu einer Person, eine Übernahme kann beide Unternehmen bestehen lassen."],
    ['h', 'Regulierung'],
    ['p', "Große Deals werden von Kartellbehörden geprüft (Europäische Kommission, Bundeskartellamt in Deutschland). Bedroht ein Deal den Wettbewerb, kann die Behörde den Verkauf eines Teils des Geschäfts (Remedies) verlangen oder ihn untersagen. Das ist ein wichtiges Risiko, das in Zeitplan und Vollzugsbedingungen eingepreist wird."],
    ['q', "Wann ist es besser, in Aktien statt in bar zu zahlen?", "Wenn die Aktien des Käufers teuer sind (hohes P/E) oder ihm Cash und Schuldenspielraum fehlen. Mit Aktien teilt man außerdem Risiko und potenzielles Wachstum mit dem Verkäufer, was Meinungsverschiedenheiten über die Bewertung beseitigt."],
    ['q', "Wie unterscheiden sich Share Deal und Asset Deal?", "Beim Share Deal werden Aktien samt allen Verbindlichkeiten gekauft, die steuerliche Basis der Vermögenswerte ändert sich nicht. Beim Asset Deal werden ausgewählte Vermögenswerte gekauft, man erhält einen steuerlichen Step-up und lässt überflüssige Verbindlichkeiten zurück, aber der Prozess ist rechtlich komplizierter."],
    ['key', "Die Form des Deals (Aktien oder Vermögenswerte), die Zahlungsweise (Cash oder Aktien) und die Schutzmechanismen (Breakup Fee, MAC, No-Shop, Earn-out) bestimmen die Verteilung der Risiken zwischen Käufer und Verkäufer."]
  ] };
