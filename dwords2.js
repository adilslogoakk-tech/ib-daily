'use strict';
// Общий немецкий словарь, пакет 2 (A2-B1). Подключается после dwords.js и дописывает DW и DW_CATS.
(() => {
  const T = `
#travel
die Reise|поездка|Die Reise nach Wien war schön.
reisen|путешествовать|Wir reisen gern im Sommer.
der Urlaub|отпуск|Wir machen Urlaub am Meer.
das Hotel|гостиница|Das Hotel liegt direkt am Strand.
das Zimmer buchen|забронировать номер|Ich möchte ein Zimmer buchen.
der Koffer|чемодан|Mein Koffer ist zu schwer.
das Ticket|билет|Ich habe das Ticket online gekauft.
die Fahrkarte|проездной билет|Eine Fahrkarte nach Hamburg, bitte.
der Pass|паспорт|Vergiss deinen Pass nicht.
das Gepäck|багаж|Das Gepäck kommt gleich.
abfahren|отправляться|Der Zug fährt um acht Uhr ab.
ankommen|прибывать|Wir kommen um zehn Uhr an.
umsteigen|делать пересадку|In Köln müssen wir umsteigen.
die Verspätung|опоздание|Der Zug hat zehn Minuten Verspätung.
das Gleis|путь (на вокзале)|Der Zug fährt auf Gleis fünf ab.
der Ausflug|экскурсия, поездка|Am Sonntag machen wir einen Ausflug.
die Sehenswürdigkeit|достопримечательность|Berlin hat viele Sehenswürdigkeiten.
der Stadtplan|план города|Ich brauche einen Stadtplan.
der Strand|пляж|Wir liegen den ganzen Tag am Strand.
das Meer|море|Das Meer ist heute ruhig.
#shop
einkaufen|делать покупки|Ich kaufe am Samstag ein.
das Angebot|предложение, скидка|Heute gibt es ein gutes Angebot.
der Preis|цена|Der Preis ist fair.
kosten|стоить|Was kostet das Buch?
bar|наличными|Ich zahle bar.
die Karte|карта, открытка|Ich zahle lieber mit Karte.
das Kleid|платье|Das Kleid gefällt mir.
die Hose|брюки|Die Hose ist zu lang.
das Hemd|рубашка|Er trägt ein weißes Hemd.
die Jacke|куртка|Nimm eine Jacke mit.
die Schuhe|обувь|Ich brauche neue Schuhe.
die Größe|размер|Haben Sie das in Größe M?
anprobieren|примерять|Darf ich die Jacke anprobieren?
passen|подходить (по размеру)|Die Hose passt gut.
umtauschen|обменять|Kann ich das umtauschen?
der Kassenbon|чек|Bitte behalten Sie den Kassenbon.
die Tüte|пакет|Brauchen Sie eine Tüte?
bestellen|заказывать|Ich bestelle online.
liefern|доставлять|Die Ware wird morgen geliefert.
das Paket|посылка|Das Paket kommt morgen an.
#free
die Freizeit|свободное время|In meiner Freizeit lese ich viel.
das Hobby|хобби|Mein Hobby ist Fotografie.
der Sport|спорт|Ich treibe dreimal pro Woche Sport.
laufen|бегать, идти|Ich laufe jeden Morgen im Park.
schwimmen|плавать|Im Sommer schwimmen wir im See.
tanzen|танцевать|Sie tanzt sehr gern.
die Musik|музыка|Ich höre abends Musik.
das Konzert|концерт|Wir gehen heute ins Konzert.
der Film|фильм|Der Film beginnt um acht.
das Kino|кинотеатр|Wir gehen am Freitag ins Kino.
spazieren gehen|гулять|Am Sonntag gehen wir spazieren.
das Spiel|игра, матч|Das Spiel war spannend.
die Verabredung|договорённость, свидание|Ich habe heute eine Verabredung.
einladen|приглашать|Ich lade dich zum Essen ein.
das Fest|праздник|Das Fest dauert bis Mitternacht.
der Geburtstag|день рождения|Morgen habe ich Geburtstag.
das Geschenk|подарок|Das Geschenk ist für dich.
#nature
das Wetter|погода|Das Wetter ist heute schön.
die Sonne|солнце|Die Sonne scheint.
der Regen|дождь|Der Regen hört bald auf.
der Schnee|снег|Im Winter gibt es viel Schnee.
der Wind|ветер|Heute weht ein starker Wind.
die Temperatur|температура|Die Temperatur liegt bei zwanzig Grad.
der Winter|зима|Der Winter ist lang.
der Sommer|лето|Im Sommer fahren wir ans Meer.
der Frühling|весна|Im Frühling blühen die Blumen.
der Herbst|осень|Im Herbst werden die Blätter bunt.
der Baum|дерево|Der Baum ist hundert Jahre alt.
die Blume|цветок|Sie schenkt mir eine Blume.
der Wald|лес|Wir gehen im Wald spazieren.
der Berg|гора|Der Berg ist sehr hoch.
der Fluss|река|Der Fluss fließt durch die Stadt.
der See|озеро|Wir schwimmen im See.
das Tier|животное|Das Tier schläft.
der Hund|собака|Mein Hund heißt Max.
die Katze|кошка|Die Katze sitzt am Fenster.
#feel
froh|радостный|Ich bin froh, dich zu sehen.
glücklich|счастливый|Sie ist sehr glücklich.
traurig|грустный|Er ist heute traurig.
wütend|злой|Sie ist wütend auf ihn.
nervös|нервный|Vor dem Interview bin ich nervös.
ruhig|спокойный|Bleib bitte ruhig.
überrascht|удивлённый|Ich bin überrascht.
stolz|гордый|Ich bin stolz auf dich.
Angst haben|бояться|Ich habe Angst vor der Prüfung.
sich freuen|радоваться|Ich freue mich auf das Wochenende.
sich ärgern|злиться|Ich ärgere mich über den Fehler.
sich entspannen|расслабляться|Am Abend entspanne ich mich.
lachen|смеяться|Wir haben viel gelacht.
weinen|плакать|Das Kind weint.
lieben|любить|Ich liebe meine Familie.
mögen|нравиться, любить|Ich mag Kaffee.
hassen|ненавидеть|Ich hasse Lärm.
vermissen|скучать|Ich vermisse meine Familie.
#verb2
beginnen|начинать(ся)|Der Film beginnt um acht.
beenden|заканчивать|Ich beende die Arbeit um fünf.
versuchen|пытаться|Ich versuche, früh aufzustehen.
vergessen|забывать|Ich habe den Termin vergessen.
erinnern|напоминать, помнить|Erinnere mich bitte an den Termin.
erklären|объяснять|Kannst du mir das erklären?
erzählen|рассказывать|Er erzählt eine lustige Geschichte.
besuchen|навещать, посещать|Wir besuchen unsere Oma.
einladen|приглашать|Wir laden Freunde ein.
mitbringen|приносить с собой|Bring bitte Brot mit.
abholen|забирать|Ich hole dich vom Bahnhof ab.
verlieren|терять, проигрывать|Ich habe meinen Schlüssel verloren.
gewinnen|выигрывать|Unser Team hat gewonnen.
entscheiden|решать|Ich muss mich entscheiden.
vorbereiten|готовить, подготавливать|Ich bereite mich auf das Interview vor.
vergleichen|сравнивать|Wir vergleichen die Preise.
verbessern|улучшать|Ich möchte mein Deutsch verbessern.
ändern|менять|Ich ändere meinen Plan.
bekommen|получать|Ich bekomme morgen eine Antwort.
bringen|приносить|Bring mir bitte ein Glas Wasser.
zeigen|показывать|Ich zeige dir die Stadt.
benutzen|использовать|Ich benutze oft mein Handy.
passieren|случаться|Was ist passiert?
funktionieren|работать (о механизме)|Der Drucker funktioniert nicht.
reparieren|чинить|Er repariert das Fahrrad.
planen|планировать|Wir planen unseren Urlaub.
#adj2
schwierig|сложный|Die Aufgabe ist schwierig.
einfach|простой|Die Lösung ist einfach.
möglich|возможный|Das ist leider nicht möglich.
unmöglich|невозможный|Das ist unmöglich.
notwendig|необходимый|Ein Visum ist notwendig.
wichtig|важный|Pünktlichkeit ist wichtig.
sicher|уверенный, надёжный|Bist du sicher?
gefährlich|опасный|Die Straße ist gefährlich.
bekannt|известный|Das Restaurant ist bekannt.
berühmt|знаменитый|Sie ist eine berühmte Sängerin.
ehrlich|честный|Er ist immer ehrlich.
fleißig|трудолюбивый|Sie ist sehr fleißig.
freundlich|дружелюбный|Der Chef ist freundlich.
höflich|вежливый|Sei bitte höflich.
pünktlich|пунктуальный|Er kommt immer pünktlich.
zufrieden|довольный|Ich bin mit dem Ergebnis zufrieden.
bereit|готовый|Ich bin bereit.
frei|свободный|Ist dieser Platz frei?
besetzt|занятый|Der Tisch ist besetzt.
kostenlos|бесплатный|Der Kurs ist kostenlos.
#abs
die Idee|идея|Das ist eine gute Idee.
die Frage|вопрос|Ich habe eine Frage.
die Antwort|ответ|Die Antwort ist richtig.
das Problem|проблема|Wir haben ein Problem.
die Lösung|решение|Wir suchen eine Lösung.
der Fehler|ошибка|Das war mein Fehler.
der Grund|причина|Was ist der Grund?
das Ziel|цель|Mein Ziel ist ein neuer Job.
der Plan|план|Hast du einen Plan?
die Chance|шанс|Das ist eine große Chance.
die Hilfe|помощь|Danke für deine Hilfe.
die Information|информация|Ich brauche mehr Informationen.
das Gespräch|разговор|Das Gespräch war lang.
die Meinung|мнение|Meiner Meinung nach ist das richtig.
der Unterschied|различие|Was ist der Unterschied?
das Beispiel|пример|Gib mir bitte ein Beispiel.
die Erfahrung|опыт|Ich habe viel Erfahrung.
die Entscheidung|решение (выбор)|Das war eine schwere Entscheidung.
die Geschichte|история|Das ist eine interessante Geschichte.
die Gesellschaft|общество|Die Gesellschaft verändert sich.
die Wirtschaft|экономика|Die Wirtschaft wächst langsam.
das Ergebnis|результат|Das Ergebnis ist gut.
der Vorteil|преимущество|Das hat viele Vorteile.
der Nachteil|недостаток|Ein Nachteil ist der Preis.
`;
  const C = { travel: 'Путешествия', shop: 'Покупки', free: 'Свободное время', nature: 'Погода и природа', feel: 'Чувства', verb2: 'Глаголы 2', adj2: 'Прилагательные 2', abs: 'Абстрактные слова' };
  Object.assign(window.DW_CATS, C);
  let cat = 'misc', i = window.DW.length; const have = new Set(window.DW.map(w => w.de.toLowerCase()));
  T.split('\n').map(l => l.trim()).filter(Boolean).forEach(l => {
    if (l[0] === '#') { cat = l.slice(1); return; }
    const [de, ru, ex] = l.split('|'); if (have.has(de.toLowerCase())) return; have.add(de.toLowerCase());
    window.DW.push({ i: 'g' + i++, de, ru, ex, cat });
  });
})();
