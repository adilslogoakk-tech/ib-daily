'use strict';
// Дополнение к немецкой библиотеке: вопросы к текстам (3 на текст, формат "вопрос|верный|неверный|неверный") и ещё 8 текстов.
window.DE_Q = {
  'Mein Tag': ['Wann steht Anna auf?|Um sieben Uhr.|Um acht Uhr.|Um neun Uhr.', 'Wie fährt Anna zur Arbeit?|Mit dem Bus.|Mit dem Auto.|Mit dem Fahrrad.', 'Was macht Anna am Abend oft?|Sie kocht Nudeln.|Sie geht ins Kino.|Sie arbeitet im Büro.'],
  'Im Café': ['Was möchte Tom?|Einen Tee.|Einen Kaffee.|Ein Stück Kuchen.', 'Was bestellt Lisa zusätzlich?|Ein Stück Apfelkuchen.|Ein Eis.|Ein Brötchen.', 'Wie viel zahlt Tom?|Zwölf Euro.|Zehn Euro.|Zwanzig Euro.'],
  'Meine Familie': ['Was ist der Vater von Beruf?|Lehrer.|Arzt.|Verkäufer.', 'Wo arbeitet die Mutter?|Im Krankenhaus.|In einer Schule.|In einem Büro.', 'Was macht die Schwester gern?|Fußball spielen.|Schwimmen.|Tanzen.'],
  'Ein Wochenende in Berlin': ['Wie sind sie nach Berlin gefahren?|Mit dem Zug.|Mit dem Auto.|Mit dem Flugzeug.', 'Warum sind sie am Samstag lange spazieren gegangen?|Weil das Wetter schön war.|Weil das Museum geschlossen war.|Weil sie keinen Bus fanden.', 'Was haben sie am Sonntag gemacht?|Sie waren im Museum.|Sie waren im Restaurant.|Sie haben einen Ausflug aufs Land gemacht.'],
  'Beim Arzt': ['Seit wann hat Herr Becker Beschwerden?|Seit drei Tagen.|Seit einer Woche.|Seit gestern.', 'Was sagt die Ärztin?|Er hat eine starke Erkältung.|Er hat einen gebrochenen Arm.|Er ist gesund.', 'Bis wann schreibt sie ihn krank?|Bis Freitag.|Bis Montag.|Bis Mittwoch.'],
  'Die neue Wohnung': ['Warum sucht Familie Aydin eine neue Wohnung?|Die alte ist zu klein.|Die alte ist zu teuer.|Sie ziehen in eine andere Stadt.', 'Wie viel kostet die Miete?|950 Euro im Monat.|590 Euro im Monat.|1.500 Euro im Monat.', 'Wer hilft beim Umzug?|Freunde.|Die Vermieterin.|Eine Umzugsfirma.'],
  'Bewerbung bei einer Bank': ['Was möchte Sara im Sommer machen?|Ein Praktikum bei einer Bank.|Eine Reise machen.|Ihr Studium beenden.', 'Wie läuft das Gespräch ab?|Per Videogespräch.|Im Büro der Bank.|Am Telefon.', 'Was passiert nach dem Gespräch?|Sie bekommt eine Zusage.|Sie bekommt eine Absage.|Sie muss noch einmal kommen.'],
  'Ein Tag im Büro': ['Wo arbeitet Murat?|Im Controlling eines Unternehmens.|In einer Bank.|In einer Schule.', 'Warum sind die Kosten im Vertrieb höher?|Vor allem wegen der Reisekosten.|Wegen der Mieten.|Wegen neuer Mitarbeiter.', 'Wie fühlt sich Murat am Ende des Tages?|Zufrieden.|Enttäuscht.|Gelangweilt.'],
  'Umzug nach Deutschland': ['Was war für Elena am schwierigsten?|Die Sprache.|Das Wetter.|Das Essen.', 'Wie hat sie ihr Deutsch verbessert?|Mit einem Sprachkurs und Gesprächen mit Nachbarn.|Mit einem Studium.|Mit einer App.', 'Wie hält Elena Kontakt zur Familie?|Über Videoanrufe.|Mit Briefen.|Durch häufige Besuche.'],
  'Zinsen und Inflation: ein Gespräch': ['Was passiert laut Marie, wenn die Zentralbank den Leitzins erhöht?|Kredite werden teurer und die Nachfrage sinkt.|Die Preise steigen schneller.|Die Löhne steigen sofort.', 'Welche Gefahr nennt Marie?|Die Wirtschaft könnte zu stark abgebremst werden.|Die Zinsen könnten zu stark sinken.|Es gibt zu wenig Kredite.', 'Was sollte beachten, wer jetzt kauft?|Ob er die Raten auch bei höheren Zinsen zahlen kann.|Ob die Preise morgen sinken.|Ob die Bank Gebühren verlangt.'],
  'Die Zukunft der Arbeit': ['Welches Argument bringen Befürworter des Homeoffice?|Weniger Pendelzeit und bessere Vereinbarkeit von Beruf und Familie.|Mehr persönlicher Austausch.|Geringere Kosten für Büros.', 'Was kritisieren die Gegner?|Der persönliche Austausch im Team leidet.|Die Gehälter sinken.|Die Technik funktioniert nicht.', 'Was sagen Experten über künstliche Intelligenz?|Tätigkeiten und Qualifikationen verändern sich.|Sie ersetzt alle Berufe.|Sie hat keinen Einfluss.'],
  'Warum Unternehmen kaufen und verkaufen': ['Was bedeutet der Begriff Synergien?|Vorteile, weil Aufgaben gemeinsam günstiger erledigt werden.|Zusätzliche Steuern.|Gemeinsame Schulden.', 'Was umfasst die Sorgfaltsprüfung?|Finanzen, Verträge, Steuern und rechtliche Risiken.|Nur die Finanzen.|Nur die Mitarbeiter.', 'Wovon hängt der Erfolg einer Übernahme oft ab?|Von der Zusammenarbeit der Unternehmen danach.|Nur vom Preis.|Vom Wetter.'],
};
window.DE_TEXT2 = `
#A1|Im Supermarkt
Nina geht in den Supermarkt. Sie braucht Milch, Brot und Äpfel. Der Supermarkt ist groß, und es gibt viele Leute.
„Entschuldigung, wo ist die Milch?“, fragt Nina. „Dort hinten, links“, sagt ein Mann. Nina nimmt eine Packung Milch und ein Brot. Die Äpfel liegen neben der Kasse.
An der Kasse zahlt Nina sieben Euro. „Möchten Sie eine Tüte?“, fragt die Verkäuferin. „Nein, danke, ich habe eine Tasche“, sagt Nina.
?Was braucht Nina?|Milch, Brot und Äpfel.|Fleisch und Käse.|Wasser und Tee.
?Wo sind die Äpfel?|Neben der Kasse.|Links hinten.|Vor dem Eingang.
?Wie viel zahlt Nina?|Sieben Euro.|Zehn Euro.|Fünf Euro.
#A1|Am Bahnhof
Paul steht am Bahnhof. Er möchte nach Hamburg fahren. Am Schalter sagt er: „Eine Fahrkarte nach Hamburg, bitte.“
Die Frau sagt: „Das kostet 45 Euro. Der Zug fährt um 14.10 Uhr von Gleis 5.“ Paul zahlt mit Karte und geht zum Gleis.
Der Zug hat zehn Minuten Verspätung. Paul wartet und liest ein Buch.
?Wohin möchte Paul fahren?|Nach Hamburg.|Nach Berlin.|Nach München.
?Von welchem Gleis fährt der Zug?|Von Gleis 5.|Von Gleis 3.|Von Gleis 10.
?Was macht Paul beim Warten?|Er liest ein Buch.|Er trinkt Kaffee.|Er telefoniert.
#A2|Eine E-Mail an den Vermieter
Sehr geehrter Herr Krüger, ich schreibe Ihnen, weil die Heizung in meiner Wohnung seit einer Woche nicht funktioniert. Es ist sehr kalt, besonders abends und nachts. Ich habe schon versucht, die Heizung selbst zu reparieren, aber das hat nicht geholfen.
Könnten Sie bitte jemanden schicken, der sich das Problem ansieht? Ich bin am Montag und am Mittwoch den ganzen Tag zu Hause. Wenn Sie mir einen Termin nennen, bleibe ich auch an einem anderen Tag da.
Vielen Dank im Voraus und mit freundlichen Grüßen, Maria Lopez
?Was ist das Problem?|Die Heizung funktioniert nicht.|Das Wasser ist kalt.|Das Fenster ist kaputt.
?Seit wann besteht das Problem?|Seit einer Woche.|Seit gestern.|Seit einem Monat.
?An welchen Tagen ist Maria zu Hause?|Am Montag und Mittwoch.|Am Dienstag und Freitag.|Nur am Wochenende.
#A2|Ein Termin am Telefon
Herr Ahmed ruft bei einer Zahnarztpraxis an. „Guten Tag, ich möchte einen Termin vereinbaren“, sagt er. Die Sprechstundenhilfe fragt: „Haben Sie Schmerzen oder ist es nur eine Kontrolle?“ „Es ist nur eine Kontrolle“, antwortet Herr Ahmed.
Sie schaut in den Kalender. „Nächste Woche haben wir am Dienstag um 10 Uhr oder am Donnerstag um 15 Uhr einen freien Termin.“ Herr Ahmed wählt den Donnerstag, weil er am Dienstag arbeiten muss. Er soll seine Versichertenkarte mitbringen.
?Warum ruft Herr Ahmed an?|Er möchte einen Termin vereinbaren.|Er hat Zahnschmerzen.|Er möchte absagen.
?Wann ist der Termin?|Donnerstag um 15 Uhr.|Dienstag um 10 Uhr.|Montag um 9 Uhr.
?Was soll er mitbringen?|Seine Versichertenkarte.|Sein Röntgenbild.|Einen Ausweis aus dem Ausland.
#B1|Reklamation im Online-Shop
Lea hat vor zwei Wochen einen Mantel im Internet bestellt. Als das Paket endlich ankam, war der Mantel zu klein, außerdem fehlte ein Knopf. Sie schrieb dem Kundenservice eine E-Mail, in der sie das Problem beschrieb und fragte, ob sie die Ware zurückschicken könne.
Schon am nächsten Tag bekam sie eine Antwort. Der Shop entschuldigte sich und bot an, den Mantel kostenlos gegen eine größere Größe umzutauschen. Außerdem wurde ihr ein Gutschein über zehn Euro angeboten.
Lea war positiv überrascht. Sie hatte erwartet, dass sie lange diskutieren müsste. Seitdem bestellt sie wieder gern in dem Shop, weil sie weiß, dass Probleme schnell gelöst werden.
?Was war das Problem mit dem Mantel?|Er war zu klein und ein Knopf fehlte.|Er hatte die falsche Farbe.|Er kam nie an.
?Was bot der Shop an?|Umtausch und einen Gutschein.|Nur eine Rückerstattung.|Nichts.
?Warum bestellt Lea wieder dort?|Weil Probleme schnell gelöst werden.|Weil alles billiger ist.|Weil es dort mehr Auswahl gibt.
#B1|Wie ich Deutsch lerne
Seit einem Jahr lerne ich Deutsch, und ich habe schon einiges ausprobiert. Am Anfang habe ich nur mit einem Lehrbuch gearbeitet, aber das war mir auf Dauer zu langweilig. Inzwischen höre ich jeden Tag Podcasts, während ich zur Arbeit fahre, und schreibe abends fünf Sätze in mein Heft.
Besonders hilfreich finde ich es, Wörter mit Beispielsätzen zu lernen, denn so merke ich mir auch, wie man sie benutzt. Fehler mache ich immer noch, aber ich habe aufgehört, mich dafür zu ärgern. Wer eine Sprache lernt, muss Fehler machen dürfen.
Mein Ziel ist es, in sechs Monaten das Zertifikat B2 zu schaffen. Ob mir das gelingt, weiß ich nicht, doch ich bin sicher, dass ich bis dahin viel gelernt haben werde.
?Warum hat die Person ihre Methode geändert?|Das Lehrbuch war ihr auf Dauer zu langweilig.|Das Lehrbuch war zu teuer.|Sie hat das Lehrbuch verloren.
?Wann hört sie Podcasts?|Auf dem Weg zur Arbeit.|Beim Frühstück.|Vor dem Schlafen.
?Was ist ihr Ziel?|Das Zertifikat B2 in sechs Monaten.|Ein Studium in Deutschland.|Ein Job als Lehrerin.
#B2|Nachhaltigkeit im Alltag
Immer mehr Menschen versuchen, nachhaltiger zu leben, doch zwischen Absicht und Verhalten klafft oft eine Lücke. Umfragen zufolge halten die meisten Befragten Umweltschutz für wichtig, kaufen aber trotzdem häufig das günstigste Produkt. Preis und Bequemlichkeit sind in der Praxis stärker als gute Vorsätze.
Unternehmen reagieren darauf mit neuen Angeboten: Verpackungen werden reduziert, Lieferketten transparenter gemacht und Produkte mit Siegeln versehen, die Orientierung bieten sollen. Kritiker bemängeln jedoch, dass manche Firmen Nachhaltigkeit vor allem als Werbeargument nutzen, ohne ihre Produktion tatsächlich zu verändern.
Fachleute betonen, dass einzelne Entscheidungen im Alltag zwar wichtig seien, die größte Wirkung aber von politischen Rahmenbedingungen ausgehe. Erst wenn nachhaltige Produkte nicht mehr teurer sind als herkömmliche, könne sich das Konsumverhalten dauerhaft ändern.
?Was zeigen Umfragen laut Text?|Umweltschutz ist wichtig, aber oft kaufen Menschen das günstigste Produkt.|Niemand interessiert sich für Umweltschutz.|Nachhaltige Produkte sind überall billiger.
?Was kritisieren manche Kritiker an Unternehmen?|Nachhaltigkeit wird teils nur als Werbeargument genutzt.|Die Verpackungen werden größer.|Die Produkte werden schlechter.
?Wovon hängt laut Fachleuten die größte Wirkung ab?|Von politischen Rahmenbedingungen.|Von einzelnen Verbrauchern allein.|Von der Werbung.
#B2|Ein Gespräch mit einer Analystin
Johanna arbeitet seit fünf Jahren als Analystin bei einer Investmentbank. Auf die Frage, wie ein typischer Tag aussehe, antwortet sie lachend, dass es den eigentlich nicht gebe. Morgens lese sie zuerst Marktberichte und Quartalszahlen, danach aktualisiere sie ihre Finanzmodelle, bevor sie sich mit Kollegen abstimme.
„Wer in diesem Beruf erfolgreich sein will, muss gleichzeitig genau und belastbar sein“, sagt sie. „Zahlen müssen stimmen, aber oft bleibt wenig Zeit.“ Das Arbeitspensum sei hoch, doch das Lernen gehe in den ersten Jahren schneller als in vielen anderen Berufen.
Berufseinsteigern rät sie, sich früh mit Bewertungsmethoden zu beschäftigen und Praktika zu nutzen, um Kontakte zu knüpfen. „Und lassen Sie sich von Absagen nicht entmutigen“, fügt sie hinzu. „Fast jeder, den ich kenne, hat zuerst mehrere bekommen.“
?Was macht Johanna morgens zuerst?|Sie liest Marktberichte und Quartalszahlen.|Sie schreibt Anschreiben.|Sie telefoniert mit Kunden.
?Welche Eigenschaften sind laut Johanna wichtig?|Genauigkeit und Belastbarkeit.|Kreativität und Humor.|Nur Erfahrung.
?Was rät sie Berufseinsteigern?|Sich früh mit Bewertungsmethoden zu beschäftigen und Praktika zu nutzen.|Möglichst viele Überstunden zu machen.|Nur bei einer Bank zu arbeiten.
`;
