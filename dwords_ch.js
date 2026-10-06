'use strict';
// Слова по главам учебника (Spektrum Deutsch B1+). Свои переводы и примеры; формат как в dwords.js. Подключается после dwords2.js.
(() => {
  const CH = {
    ch1: ['Spektrum B1+: 1 Alltag', `
im Stau stehen|стоять в пробке|Heute Morgen stand ich eine Stunde im Stau.
auf den Fahrstuhl warten|ждать лифт|Ich warte schon lange auf den Fahrstuhl.
regelmäßig|регулярно|Er geht regelmäßig joggen.
sich mit Freunden treffen|встречаться с друзьями|Am Freitag treffe ich mich mit Freunden.
Lebensmittel einkaufen|покупать продукты|Auf dem Heimweg kaufe ich Lebensmittel ein.
die Wohnung aufräumen|убирать квартиру|Am Samstag räume ich die Wohnung auf.
Wäsche waschen|стирать бельё|Ich muss noch Wäsche waschen.
zufrieden sein mit|быть довольным чем-то|Ich bin mit meinem neuen Job zufrieden.
abwechslungsreich|разнообразный|Mein Studium ist sehr abwechslungsreich.
sein Leben selbst bestimmen|сам определять свою жизнь|Ich möchte mein Leben selbst bestimmen.
sich ärgern über|злиться из-за|Ich ärgere mich über den Lärm.
nerven|раздражать, донимать|Der Lärm nervt mich.
sich freuen über|радоваться (уже случившемуся)|Ich freue mich über deinen Anruf.
ein Lob bekommen|получить похвалу|Ich habe vom Chef ein Lob bekommen.
feiern|праздновать|Wir feiern den Erfolg im Restaurant.
träumen von|мечтать о|Er träumt von einem eigenen Haus.
die Umfrage|опрос|Die Umfrage zeigt interessante Ergebnisse.
die Studie|исследование|Eine neue Studie wurde veröffentlicht.
zufolge|согласно (Dativ: der Studie zufolge)|Der Studie zufolge schlafen viele zu wenig.
ergeben|показывать, давать в итоге|Die Befragung ergab, dass viele müde sind.
der Krimi|детектив|Am Abend lese ich gern einen Krimi.
der Täter|преступник|Der Täter wurde schnell gefasst.
das Verbrechen|преступление|Das Verbrechen geschah nachts.
der Kommissar|комиссар (полиции)|Der Kommissar sucht Zeugen.
aufklären|раскрывать, проясняться|Die Polizei klärt den Fall auf.
verhaften|арестовывать|Die Polizei hat den Dieb verhaftet.
besiegen|побеждать|Am Ende besiegt der Held seinen Gegner.
die Mithilfe|содействие|Wir bitten alle Nachbarn um Mithilfe.
fliehen|бежать|Der Dieb floh durch das Fenster.
der Dieb|вор|Der Dieb stahl eine Tasche.
die Sitzung|заседание|Die Sitzung dauert zwei Stunden.
die Konferenz|конференция|Sie nimmt an einer Konferenz teil.
teilnehmen an|участвовать в|Ich nehme an dem Kurs teil.
präsentieren|представлять, презентовать|Wir präsentieren die Ergebnisse dem Team.
ein Problem lösen|решить проблему|Wir lösen das Problem gemeinsam.
Ideen sammeln|собирать идеи|Im Team sammeln wir Ideen.
die Vorlesung|лекция|Die Vorlesung beginnt um acht Uhr.
das Seminar|семинар|Das Seminar findet online statt.
die Note|оценка (в школе, вузе)|Ich habe eine gute Note bekommen.
die Freizeitgestaltung|организация досуга|Die Freizeitgestaltung ist bei jedem anders.
verfügen über|располагать чем-то|Er verfügt über viel Erfahrung.
auf Platz eins liegen|занимать первое место|Fußball liegt bei vielen auf Platz eins.
im Netz surfen|сидеть в интернете|Abends surfe ich gern im Netz.
sich beschäftigen mit|заниматься чем-то|Ich beschäftige mich mit Wirtschaft.
faulenzen|бездельничать|Am Sonntag faulenze ich gern.
zunehmen|увеличиваться, поправляться|Die Zahl der Nutzer nimmt zu.
abnehmen|уменьшаться, худеть|Das Interesse nimmt langsam ab.
steigen|расти, подниматься|Die Preise steigen weiter.
sinken|падать, снижаться|Die Temperatur sinkt am Abend.
zurückgehen|сокращаться|Die Zahl der Besucher geht zurück.
der Gewinner|победитель|Das Internet ist der große Gewinner.
der Verlierer|проигравший|Das Kino war der Verlierer des Jahres.
im Trend liegen|быть в тренде|Nachhaltigkeit liegt im Trend.
die Attraktivität|привлекательность|Die Stadt gewinnt an Attraktivität.
geboren werden|родиться|Er wurde 1980 in Hamburg geboren.
verlassen|покидать|Sie verließ ihre Heimatstadt mit achtzehn.
abschließen|заканчивать (учёбу), закрывать|Er schließt sein Studium im Sommer ab.
erhalten|получать|Sie erhielt einen wichtigen Preis.
leiten|руководить|Sie leitet ein kleines Team.
`],
  };
  let i = window.DW.length; const have = new Set(window.DW.map(w => w.de.toLowerCase()));
  Object.entries(CH).forEach(([cat, [name, text]]) => {
    window.DW_CATS[cat] = name;
    text.split('\n').map(l => l.trim()).filter(Boolean).forEach(l => {
      const [de, ru, ex] = l.split('|'); if (have.has(de.toLowerCase())) return; have.add(de.toLowerCase());
      window.DW.push({ i: 'g' + i++, de, ru, ex, cat });
    });
  });
})();
