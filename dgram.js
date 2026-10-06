'use strict';
// Грамматика для режима «Немецкий»: темы с объяснением по-русски и упражнения с выбором ответа.
// Формат: "#id|уровень|название", "@абзац объяснения", "=пример — перевод|пример — перевод", "?вопрос|верный|неверный|неверный|пояснение".
window.DG_TEXT = `
#art|A1|Артикли и род существительных
@У каждого немецкого существительного есть род: мужской (der), женский (die) или средний (das). Род почти нельзя угадать, поэтому слово учат сразу с артиклем.
@Но есть подсказки: слова на -ung, -heit, -keit, -schaft почти всегда женского рода (die); слова на -chen и -lein всегда среднего (das); дни недели, месяцы и времена года мужского (der).
=die Zeitung — газета|die Freiheit — свобода|das Mädchen — девочка|der Montag — понедельник
?___ Wohnung ist neu.|Die|Der|Das|Слово на -ung женского рода: die Wohnung.
?___ Mädchen spielt im Park.|Das|Die|Der|Окончание -chen всегда даёт средний род: das Mädchen.
?___ Montag ist mein Lieblingstag.|Der|Die|Das|Дни недели мужского рода: der Montag.
?___ Freiheit ist wichtig.|Die|Der|Das|Окончание -heit даёт женский род: die Freiheit.
?___ Möglichkeit gibt es immer.|Die|Der|Das|Окончание -keit даёт женский род: die Möglichkeit.
?___ Auto ist rot.|Das|Der|Die|Auto среднего рода. Такие слова просто учат с артиклем.
#neg|A1|Отрицание: nicht и kein
@Kein отрицает существительное, у которого нет артикля или стоит неопределённый артикль (ein, eine): Ich habe kein Auto. Kein изменяется как ein: kein, keine, keinen (муж. род, винительный падеж).
@Nicht отрицает глагол, прилагательное, наречие или существительное с определённым артиклем: Ich komme nicht. Das ist nicht gut. Ich kenne den Mann nicht.
=Ich habe keine Zeit. — У меня нет времени.|Er kommt nicht. — Он не придёт.|Wir haben keinen Hunger. — Мы не голодны.
?Ich habe ___ Auto.|kein|nicht|keine|Auto среднего рода без артикля, поэтому kein.
?Ich komme heute ___.|nicht|kein|keine|Отрицается глагол, значит nicht.
?Das ist ___ gut.|nicht|kein|keine|Отрицается прилагательное, значит nicht.
?Sie hat ___ Zeit.|keine|nicht|kein|Zeit женского рода без артикля: keine Zeit.
?Ich kenne den Mann ___.|nicht|kein|keinen|С определённым артиклем (den Mann) используется nicht.
?Wir haben ___ Hunger.|keinen|nicht|kein|Hunger мужского рода, винительный падеж: keinen Hunger.
#wo|A1|Порядок слов в простом предложении
@В повествовательном предложении спрягаемый глагол всегда стоит на втором месте. На первом может быть подлежащее или другой элемент (время, место), тогда подлежащее идёт после глагола.
@В вопросе с вопросительным словом (wann, wo, was) глагол тоже на втором месте. В вопросе «да или нет» глагол стоит на первом месте.
=Morgen gehe ich ins Kino. — Завтра я иду в кино.|Wann kommst du? — Когда ты придёшь?|Kommst du morgen? — Ты придёшь завтра?
?Welcher Satz ist richtig?|Morgen gehe ich ins Kino.|Morgen ich gehe ins Kino.|Morgen gehe ins Kino ich.|Глагол на втором месте, подлежащее после него.
?Welcher Satz ist richtig?|Heute habe ich keine Zeit.|Heute ich habe keine Zeit.|Heute keine Zeit habe ich.|После «Heute» сразу глагол: Heute habe ich.
?Welcher Satz ist richtig?|Ich lerne jeden Tag Deutsch.|Ich jeden Tag lerne Deutsch.|Jeden Tag Deutsch ich lerne.|Глагол стоит на втором месте.
?Welcher Satz ist richtig?|Am Wochenende fahren wir nach Berlin.|Am Wochenende wir fahren nach Berlin.|Wir am Wochenende fahren nach Berlin.|Первое место занимает «Am Wochenende», затем глагол.
?Welcher Satz ist richtig?|Wann kommst du?|Wann du kommst?|Du wann kommst?|В вопросе с wann глагол на втором месте.
?Welcher Satz ist richtig?|Kommst du morgen?|Morgen du kommst?|Du morgen kommst?|В вопросе «да или нет» глагол на первом месте.
#akk|A1|Винительный падеж (Akkusativ)
@Винительный падеж отвечает на вопрос «кого? что?» и обозначает прямое дополнение: Ich sehe den Mann. Изменяется только мужской род: der → den, ein → einen, kein → keinen. Женский, средний род и множественное число остаются прежними.
=Ich sehe den Mann. — Я вижу мужчину.|Er kauft einen Apfel. — Он покупает яблоко.|Sie liest das Buch. — Она читает книгу.
?Ich sehe ___ Mann.|den|der|dem|Mann мужского рода, прямое дополнение: den Mann.
?Er kauft ___ Apfel.|einen|ein|einem|Apfel мужского рода, винительный падеж: einen Apfel.
?Ich habe ___ Schwester.|eine|einen|einer|Schwester женского рода, форма не меняется: eine Schwester.
?Sie liest ___ Buch.|das|den|dem|Buch среднего рода, форма не меняется: das Buch.
?Wir besuchen ___ Freund.|einen|ein|einem|Freund мужского рода, винительный падеж: einen Freund.
?Hast du ___ Hund?|keinen|kein|keinem|Hund мужского рода, винительный падеж: keinen Hund.
#mod|A1|Модальные глаголы
@Модальные глаголы (können, müssen, wollen, dürfen, sollen, mögen) стоят на втором месте и стоят в личной форме. Смысловой глагол уходит в конец предложения в инфинитиве.
@Формы: ich kann, du kannst, er kann; ich muss, du musst; ich will, du willst; ich darf, du darfst; ich soll, du sollst.
=Ich kann gut schwimmen. — Я хорошо умею плавать.|Wir müssen früh aufstehen. — Нам нужно рано вставать.|Hier darf man nicht parken. — Здесь нельзя парковаться.
?Ich ___ gut schwimmen.|kann|können|kannst|Для «ich» форма kann.
?Du ___ mehr schlafen.|sollst|sollen|soll|Для «du» форма sollst.
?Wir ___ heute arbeiten.|müssen|muss|musst|Для «wir» форма müssen.
?Hier ___ man nicht rauchen.|darf|dürfen|darfst|Для «man» форма darf.
?Er ___ Arzt werden.|will|wollen|willst|Для «er» форма will.
?Ich kann heute nicht ___.|kommen|komme|gekommen|После модального глагола смысловой глагол стоит в инфинитиве в конце.
#sep|A2|Отделяемые приставки
@Некоторые глаголы имеют отделяемую приставку (auf-, an-, ein-, mit-, ab-): aufstehen, anrufen, einkaufen. В настоящем времени приставка уходит в конец предложения: Ich stehe um sieben auf.
@В Perfekt приставка остаётся внутри причастия: eingekauft, angerufen, aufgestanden.
=Ich rufe dich später an. — Я позвоню тебе позже.|Wir kaufen ein. — Мы делаем покупки.|Er hat mich angerufen. — Он мне позвонил.
?Welcher Satz ist richtig?|Ich stehe um sieben Uhr auf.|Ich aufstehe um sieben Uhr.|Ich an stehe um sieben Uhr.|Приставка auf уходит в конец предложения.
?Welcher Satz ist richtig?|Der Kurs fängt um neun an.|Der Kurs anfängt um neun.|Der Kurs an fängt um neun.|Глагол anfangen отделяется: fängt … an.
?Welcher Satz ist richtig?|Ich rufe dich später an.|Ich anrufe dich später.|Ich rufe an dich später.|Приставка an стоит в конце предложения.
?Welcher Satz ist richtig?|Wir kaufen heute im Supermarkt ein.|Wir einkaufen heute im Supermarkt.|Wir kaufen ein heute im Supermarkt.|Приставка ein уходит в конец.
?Ich habe gestern ___.|eingekauft|geeinkauft|einkaufen|В причастии отделяемая приставка стоит вначале: eingekauft.
?Er hat mich gestern ___.|angerufen|geanrufen|anrufte|Причастие от anrufen: angerufen.
#perf|A2|Perfekt: прошедшее время
@Perfekt образуется из вспомогательного глагола haben или sein (на втором месте) и причастия II (в конце): Ich habe Pizza gegessen. Wir sind nach Berlin gefahren.
@Sein используют глаголы движения и изменения состояния (gehen, fahren, kommen, aufstehen, werden, bleiben). Остальные глаголы, в том числе большинство переходных, используют haben.
=Ich habe Deutsch gelernt. — Я учил немецкий.|Wir sind nach Berlin gefahren. — Мы поехали в Берлин.|Er ist früh aufgestanden. — Он рано встал.
?Ich ___ gestern Pizza gegessen.|habe|bin|hat|Essen образует Perfekt с haben.
?Wir ___ nach Berlin gefahren.|sind|haben|hat|Глагол движения fahren образует Perfekt с sein.
?Er ___ lange geschlafen.|hat|ist|sind|Schlafen образует Perfekt с haben.
?Sie ___ das Buch gelesen.|hat|ist|haben|Lesen образует Perfekt с haben.
?Ich ___ früh aufgestanden.|bin|habe|hat|Aufstehen образует Perfekt с sein.
?Wir haben Deutsch ___.|gelernt|gelernen|lernt|Причастие II от lernen: gelernt.
#wech|A2|Предлоги места: Dativ или Akkusativ
@Предлоги in, an, auf, über, unter, vor, hinter, neben, zwischen используют Dativ на вопрос «где?» (wo?) и Akkusativ на вопрос «куда?» (wohin?).
@Dativ: der/das → dem, die → der. Akkusativ: der → den, die → die, das → das.
=Das Buch liegt auf dem Tisch. — Книга лежит на столе.|Ich lege das Buch auf den Tisch. — Я кладу книгу на стол.|Sie ist in der Küche. — Она на кухне.
?Das Buch liegt auf ___ Tisch.|dem|den|der|Вопрос «где?», значит Dativ: auf dem Tisch.
?Ich lege das Buch auf ___ Tisch.|den|dem|der|Вопрос «куда?», значит Akkusativ: auf den Tisch.
?Er geht in ___ Küche.|die|der|dem|Движение «куда?», Akkusativ: in die Küche.
?Sie ist in ___ Küche.|der|die|dem|Вопрос «где?», Dativ: in der Küche.
?Wir fahren in ___ Stadt.|die|der|dem|Движение «куда?», Akkusativ: in die Stadt.
?Das Bild hängt an ___ Wand.|der|die|dem|Вопрос «где?», Dativ женского рода: an der Wand.
#dat|A2|Дательный падеж (Dativ)
@Дательный падеж отвечает на вопрос «кому? чему?». Артикли: der/das → dem, die → der, множественное число → den (и существительное получает -n).
@Всегда с Dativ: mit, nach, bei, von, zu, aus, seit, gegenüber. Также он стоит после глаголов helfen, danken, gefallen.
=Ich fahre mit dem Bus. — Я еду на автобусе.|Er wohnt bei den Eltern. — Он живёт у родителей.|Ich gebe der Frau das Buch. — Я даю женщине книгу.
?Ich fahre mit ___ Bus.|dem|den|der|После mit всегда Dativ, Bus мужского рода: dem Bus.
?Ich gebe ___ Frau das Buch.|der|die|den|Frau женского рода в Dativ: der Frau.
?Nach ___ Arbeit gehe ich nach Hause.|der|die|dem|После nach Dativ, Arbeit женского рода: der Arbeit.
?Das Geschenk ist von ___ Kollegen.|dem|den|der|После von Dativ, Kollege мужского рода: dem Kollegen.
?Wir kommen aus ___ Stadt.|der|die|dem|После aus Dativ, Stadt женского рода: der Stadt.
?Er wohnt bei ___ Eltern.|den|die|dem|После bei Dativ, множественное число: den Eltern.
#neb|A2|Придаточные: weil, dass, wenn, ob
@В придаточном предложении, которое начинается с weil, dass, wenn, ob, спрягаемый глагол уходит в самый конец: Ich bleibe zu Hause, weil ich krank bin.
@Если придаточное с wenn стоит первым, в главном предложении глагол идёт сразу за запятой: Wenn es regnet, bleibe ich zu Hause.
=Ich weiß, dass er morgen kommt. — Я знаю, что он завтра придёт.|Wenn es regnet, bleibe ich zu Hause. — Если идёт дождь, я остаюсь дома.|Ich weiß nicht, ob er kommt. — Я не знаю, придёт ли он.
?Welcher Satz ist richtig?|Ich bleibe zu Hause, weil ich krank bin.|Ich bleibe zu Hause, weil ich bin krank.|Ich bleibe zu Hause, weil bin ich krank.|После weil глагол уходит в конец: ... weil ich krank bin.
?Welcher Satz ist richtig?|Ich weiß, dass er morgen kommt.|Ich weiß, dass er kommt morgen.|Ich weiß, dass kommt er morgen.|После dass глагол в конце: ... dass er morgen kommt.
?Welcher Satz ist richtig?|Wenn es regnet, bleibe ich zu Hause.|Wenn es regnet, ich bleibe zu Hause.|Wenn es regnet ich bleibe, zu Hause.|После придаточного главный глагол идёт сразу: bleibe ich.
?Welcher Satz ist richtig?|Er sagt, dass er keine Zeit hat.|Er sagt, dass er hat keine Zeit.|Er sagt, dass hat er keine Zeit.|После dass глагол в конце: ... dass er keine Zeit hat.
?Welcher Satz ist richtig?|Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.|Ich lerne Deutsch, weil ich möchte in Deutschland arbeiten.|Ich lerne Deutsch, weil möchte ich in Deutschland arbeiten.|После weil спрягаемый глагол möchte в конце.
?Welcher Satz ist richtig?|Ich weiß nicht, ob er kommt.|Ich weiß nicht, ob kommt er.|Ich weiß nicht, kommt ob er.|После ob глагол в конце: ... ob er kommt.
#adj|A2|Окончания прилагательных
@Прилагательное перед существительным получает окончание. После определённого артикля: в именительном падеже (всех родов) и в винительном падеже женского и среднего рода это -e: der große Mann, die große Frau, das große Haus.
@Во всех остальных случаях (Akkusativ мужского рода: den großen Mann, Dativ, Genitiv, множественное число) окончание -en.
=der große Mann — большой мужчина|den großen Mann — большого мужчину|die nette Frau — милая женщина|das neue Haus — новый дом
?Der ___ Mann wartet.|große|großen|großer|Именительный падеж после der: -e, значит große.
?Ich sehe den ___ Mann.|großen|große|großer|Винительный падеж мужского рода после den: -en.
?Die ___ Frau lächelt.|nette|netten|netter|Именительный падеж после die: -e.
?Das ___ Haus ist teuer.|neue|neuen|neues|Именительный падеж после das: -e.
?Ich kaufe das ___ Auto.|rote|roten|rotes|Винительный падеж среднего рода после das: -e.
?Mit dem ___ Chef spreche ich morgen.|neuen|neue|neuer|После dem (Dativ) окончание -en.
#prat|A2|Präteritum: sein, haben и модальные
@В разговорной речи прошедшее время чаще образуют через Perfekt, но для sein, haben и модальных глаголов используют Präteritum: ich war, ich hatte, ich konnte, ich musste, ich wollte.
@Формы: ich war, du warst, wir waren; ich hatte, wir hatten; ich konnte; ich musste; ich wollte.
=Gestern war ich müde. — Вчера я был усталым.|Wir hatten keine Zeit. — У нас не было времени.|Er konnte nicht kommen. — Он не смог прийти.
?Gestern ___ ich müde.|war|bin|wurde|Прошедшее время от sein: war.
?Wir ___ keine Zeit.|hatten|haben|hattet|Прошедшее время от haben для «wir»: hatten.
?Er ___ nicht kommen.|konnte|kann|gekonnt|Прошедшее время от können: konnte.
?Als Kind ___ ich gern Fußball spielen.|wollte|will|wolle|Прошедшее время от wollen: wollte.
?Du ___ gestern krank.|warst|war|bist|Для «du» форма warst.
?Ich ___ früh aufstehen.|musste|müssen|musst|Прошедшее время от müssen для «ich»: musste.
#prat2|B1|Präteritum и Perfekt: когда что
@Perfekt используют в разговорной речи и в личных сообщениях, Präteritum чаще в письменной речи (рассказ, новости, книги). Но sein, haben и модальные глаголы почти всегда стоят в Präteritum и в разговоре: ich war, ich hatte, ich konnte.
@Правильные (слабые) глаголы: основа + -te (lernen → lernte). Неправильные (сильные) меняют гласную: fahren → fuhr, gehen → ging, sehen → sah, schreiben → schrieb. Смешанные: denken → dachte, kennen → kannte, wissen → wusste.
=Er schrieb einen Roman. — Он написал роман.|Gestern habe ich lange geschlafen. — Вчера я долго спал.|Sie kannte den Weg nicht. — Она не знала дороги.
?Gestern ___ ich keine Zeit. (haben)|hatte|habe|hatten|Präteritum от haben для «ich»: hatte.
?Er ___ gestern ins Kino. (gehen)|ging|geht|gegangen|Präteritum от gehen: er ging.
?Sie ___ den Weg nicht. (kennen)|kannte|kennte|kannt|Смешанный глагол kennen: kannte.
?Wir ___ am Montag nach Wien. (fahren)|fuhren|fahrten|gefahren|Сильный глагол fahren: wir fuhren.
?Er ___ einen langen Brief. (schreiben)|schrieb|schreibte|schrieben|Сильный глагол schreiben: er schrieb.
?Ich ___ nicht, dass er krank ist. (wissen)|wusste|wisste|weiß|Смешанный глагол wissen: ich wusste.
#vprep|B1|Глаголы с предлогами
@Многие глаголы требуют определённого предлога и падежа: warten auf + Akk., sich freuen auf + Akk. (о будущем) и über + Akk. (о настоящем), sich ärgern über + Akk., denken an + Akk., sich erinnern an + Akk., träumen von + Dat., telefonieren mit + Dat., sich interessieren für + Akk., teilnehmen an + Dat. Их нужно учить вместе с предлогом.
@Вопрос о вещи: Worauf wartest du? О человеке: Auf wen wartest du? Ответ о вещи заменяют на da(r)- + предлог: Ich warte darauf. Ich ärgere mich darüber.
=Ich warte auf den Bus. — Я жду автобус.|Worüber ärgerst du dich? — На что ты злишься?|Ich freue mich darauf. — Я этому радуюсь (заранее).
?Ich warte ___ den Bus.|auf|für|über|Warten требует предлога auf + Akkusativ.
?Sie träumt ___ einem Urlaub am Meer.|von|an|auf|Träumen требует von + Dativ.
?Er ärgert sich ___ den Stau.|über|auf|mit|Sich ärgern требует über + Akkusativ.
?Ich interessiere mich ___ Politik.|für|an|über|Sich interessieren требует für + Akkusativ.
?Er nimmt ___ einer Konferenz teil.|an|auf|bei|Teilnehmen требует an + Dativ.
?Erinnerst du dich noch ___ unseren Urlaub?|an|auf|über|Sich erinnern требует an + Akkusativ.
#inf|B1|Инфинитив с zu: zu, um … zu, ohne … zu, statt … zu
@Инфинитив с zu стоит после многих глаголов и выражений (versuchen, vergessen, beginnen, Lust haben, es ist wichtig): Ich versuche, früher aufzustehen. У глаголов с отделяемой приставкой zu стоит между приставкой и корнем: aufzustehen.
@um … zu значит «чтобы» (цель, одно и то же лицо): Ich lerne, um in Deutschland zu arbeiten. ohne … zu значит «не делая»: Er ging, ohne zu grüßen. (an)statt … zu значит «вместо того чтобы»: Statt zu lernen, sieht er fern.
=Ich habe keine Lust, heute zu arbeiten. — У меня нет желания сегодня работать.|Er lernt, um Arzt zu werden. — Он учится, чтобы стать врачом.|Sie ging, ohne etwas zu sagen. — Она ушла, ничего не сказав.
?Ich versuche, früh ___.|aufzustehen|zu aufstehen|aufstehen zu|У отделяемой приставки zu вставляется между приставкой и глаголом: aufzustehen.
?Er lernt Deutsch, ___ in Berlin zu arbeiten.|um|damit|weil|Цель при одном лице: um … zu.
?Sie verließ den Raum, ___ ein Wort zu sagen.|ohne|um|statt|Ohne … zu значит «не сказав ни слова».
?___ zu lernen, sieht er fern.|Statt|Um|Ohne|Statt … zu значит «вместо того чтобы учиться».
?Es ist wichtig, pünktlich ___ sein.|zu|um|zum|После es ist wichtig стоит инфинитив с zu.
?Er hofft, die Prüfung ___ bestehen.|zu|um|zum|После hoffen стоит инфинитив с zu.
#pass|B1|Пассив (Passiv)
@Пассив показывает, что действие происходит с предметом, а не кто его совершает. Passiv Präsens: werden + Partizip II (в конце): Das Brot wird gebacken. Präteritum: wurde + Partizip II: Das Brot wurde gebacken.
@С модальным глаголом: модальный + Partizip II + werden: Das Auto muss repariert werden. Исполнитель (если нужен) вводится через von + Dativ: Das Buch wird von dem Autor geschrieben.
=Das Essen wird gekocht. — Еду готовят.|Das Haus wurde 1990 gebaut. — Дом построили в 1990 году.|Die Rechnung muss bezahlt werden. — Счёт нужно оплатить.
?Das Brot ___ jeden Morgen gebacken.|wird|werden|wurde|Пассив настоящего: wird + Partizip II, подлежащее в единственном числе.
?Die Briefe ___ gestern geschickt.|wurden|wird|werden|Пассив прошедшего: wurden, подлежащее во множественном числе.
?Das Auto muss repariert ___.|werden|wird|worden|С модальным глаголом пассив заканчивается на werden.
?Der Vertrag wird von beiden Seiten ___.|unterschrieben|unterschreibt|unterschrieb|В пассиве в конце стоит Partizip II.
?Die Hausaufgaben ___ von den Schülern gemacht.|werden|wird|wurde|Подлежащее во множественном числе, настоящее время: werden.
?Das Problem kann gelöst ___.|werden|wird|wurden|С модальным глаголом пассив заканчивается на werden.
#konj|B1|Konjunktiv II: вежливость и желания
@Konjunktiv II в настоящем выражает вежливую просьбу, совет, желание и нереальное. Чаще всего: würde + инфинитив (Ich würde gern reisen.) и особые формы sein, haben, können: wäre, hätte, könnte.
@Вежливая просьба: Könnten Sie mir helfen? Совет: An deiner Stelle würde ich mehr schlafen. Желание: Ich hätte gern einen Kaffee. Нереальное условие: Wenn ich Zeit hätte, würde ich kommen.
=Könnten Sie mir bitte helfen? — Не могли бы вы мне помочь?|Ich hätte gern einen Tee. — Я бы хотел чаю.|Wenn ich mehr Zeit hätte, würde ich reisen. — Если бы у меня было больше времени, я бы путешествовал.
?(höflich) ___ Sie mir bitte helfen?|Könnten|Können|Konnten|Вежливая просьба выражается формой könnten.
?Ich ___ gern einen Kaffee.|hätte|habe|hatte|Вежливое желание: Ich hätte gern.
?Wenn ich mehr Zeit ___, würde ich reisen.|hätte|habe|hatte|В нереальном условии стоит Konjunktiv II: hätte.
?An deiner Stelle ___ ich mehr schlafen.|würde|werde|wurde|Совет выражается формой würde + инфинитив.
?Wenn er reich ___, würde er ein Haus kaufen.|wäre|ist|war|В нереальном условии стоит Konjunktiv II от sein: wäre.
?Ich ___ gern in Berlin wohnen.|würde|werde|wurde|Желание выражается формой würde + инфинитив.
#konj2|B1|Konjunktiv II в прошедшем: «если бы тогда…»
@Нереальное в прошлом: hätte или wäre + Partizip II. Wenn ich gestern Zeit gehabt hätte, wäre ich gekommen. С глаголами движения и изменения состояния (gehen, kommen, fahren) используется wäre, с остальными hätte.
@Так же выражают сожаление: Ich hätte früher anfangen sollen. (Мне следовало начать раньше.) Ich wäre gern länger geblieben.
=Wenn ich früher aufgestanden wäre, hätte ich den Zug erreicht. — Если бы я встал раньше, я бы успел на поезд.|Ich hätte mehr lernen sollen. — Мне следовало больше учиться.
?Wenn ich Zeit gehabt ___, wäre ich gekommen.|hätte|wäre|würde|Haben образует форму с hätte: Zeit gehabt hätte.
?Wenn er früher aufgestanden ___, hätte er den Zug erreicht.|wäre|hätte|würde|Aufstehen образует форму с wäre.
?Ich ___ gern länger geblieben.|wäre|hätte|würde|Bleiben образует форму с wäre.
?Wir ___ das Buch gelesen, wenn wir Zeit gehabt hätten.|hätten|wären|würden|Lesen образует форму с hätte.
?Sie hätte mehr ___ sollen.|lernen|gelernt|lernt|После hätte с модальным глаголом стоят два инфинитива: lernen sollen.
?Wenn es nicht geregnet ___, wären wir spazieren gegangen.|hätte|wäre|würde|Regnen образует форму с hätte.
#kaus|B1|Причина и цель: weil, denn, deshalb, damit, um … zu
@Причина: weil (придаточное, глагол в конце), denn (союз между главными предложениями, порядок слов не меняется), deshalb / deswegen / darum (глагол сразу после). Ich bleibe zu Hause, weil ich krank bin. = Ich bin krank, deshalb bleibe ich zu Hause.
@Цель: damit (придаточное; одно или разные лица) и um … zu (одно лицо): Ich lerne, damit ich einen Job finde. = Ich lerne, um einen Job zu finden.
=Ich komme nicht, denn ich bin krank. — Я не приду, потому что болен.|Er ist krank, deshalb bleibt er zu Hause. — Он болен, поэтому остаётся дома.|Sie spart, damit sie reisen kann. — Она копит, чтобы путешествовать.
?Ich bleibe zu Hause, ___ ich krank bin.|weil|denn|deshalb|После weil глагол уходит в конец: ... weil ich krank bin.
?Ich bin krank, ___ bleibe ich zu Hause.|deshalb|weil|damit|После deshalb глагол стоит сразу: deshalb bleibe ich.
?Er arbeitet viel, ___ seine Kinder studieren können.|damit|um|deshalb|У придаточного другое подлежащее (Kinder), поэтому damit.
?Ich lerne Deutsch, ___ in Deutschland zu arbeiten.|um|damit|weil|Цель при одном лице: um … zu.
?Sie kommt nicht, ___ sie hat keine Zeit.|denn|weil|damit|После denn порядок слов обычный: sie hat keine Zeit.
?Es regnet, ___ bleiben wir zu Hause.|deshalb|weil|denn|После deshalb глагол стоит на первом месте: bleiben wir.
#rel|B1|Относительные придаточные (Relativsätze)
@Относительное придаточное уточняет существительное. Относительное местоимение берёт род и число у существительного, а падеж по роли в придаточном; формы похожи на артикли: der/die/das/die; Akkusativ: den/die/das/die; Dativ: dem/der/dem/denen. Глагол стоит в конце, запятые обязательны.
@С предлогом: предлог стоит перед местоимением: Das ist der Mann, mit dem ich arbeite. Der Mann, den ich gestern getroffen habe, ist mein Chef.
=Das ist die Frau, die hier arbeitet. — Это женщина, которая здесь работает.|Der Film, den wir gesehen haben, war gut. — Фильм, который мы смотрели, был хорошим.|Das ist der Kollege, mit dem ich spreche. — Это коллега, с которым я говорю.
?Das ist der Mann, ___ hier arbeitet.|der|den|dem|Мужчина — подлежащее придаточного, значит именительный: der.
?Der Film, ___ wir gesehen haben, war gut.|den|der|dem|Film — прямое дополнение, мужской род: den.
?Die Frau, ___ ich helfe, ist nett.|der|die|den|Helfen требует Dativ, женский род: der.
?Das Haus, ___ ich wohne, ist alt.|in dem|das|dem|Wohnen in dem Haus: предлог in и Dativ среднего рода.
?Die Kinder, ___ im Garten spielen, sind laut.|die|den|der|Дети — подлежащее придаточного, множественное число: die.
?Das ist der Kollege, mit ___ ich spreche.|dem|den|der|После mit Dativ, мужской род: dem.
#refl|B1|Возвратные глаголы
@Возвратные глаголы используют местоимение sich: ich freue mich, du freust dich, er freut sich, wir freuen uns, ihr freut euch, sie freuen sich. Часто они требуют предлога (sich freuen auf/über, sich ärgern über, sich interessieren für).
@Местоимение стоит сразу после спрягаемого глагола или после подлежащего-существительного: Ich ärgere mich. Heute ärgert sich mein Chef. В придаточном: ..., weil ich mich ärgere.
=Ich freue mich auf das Wochenende. — Я радуюсь предстоящим выходным.|Er interessiert sich für Politik. — Он интересуется политикой.|Wir treffen uns um acht. — Мы встречаемся в восемь.
?Ich freue ___ auf den Urlaub.|mich|dich|sich|Для «ich» возвратное местоимение mich.
?Er interessiert ___ für Politik.|sich|mich|ihn|Для «er» возвратное местоимение sich.
?Wir treffen ___ um acht Uhr.|uns|euch|sich|Для «wir» возвратное местоимение uns.
?Du ärgerst ___ über den Stau.|dich|mich|sich|Для «du» возвратное местоимение dich.
?Ihr entspannt ___ am Wochenende.|euch|uns|sich|Для «ihr» возвратное местоимение euch.
?Sie bedanken ___ für die Hilfe.|sich|uns|mich|Для «sie» (они) возвратное местоимение sich.
#konz|B1|Уступка и условие: obwohl, trotzdem, falls, sonst
@Уступка (результат вопреки ожиданию): obwohl (придаточное, глагол в конце) и trotzdem (глагол сразу после): Obwohl es regnet, gehen wir spazieren. = Es regnet, trotzdem gehen wir spazieren.
@Условие: wenn («если, когда») и falls («если вдруг»): придаточное. Если условие не выполнено: sonst / andernfalls (глагол сразу после): Beeil dich, sonst verpasst du den Zug.
=Obwohl er müde ist, arbeitet er weiter. — Хотя он устал, он продолжает работать.|Falls du Zeit hast, ruf mich an. — Если вдруг будет время, позвони мне.|Lern mehr, sonst bestehst du die Prüfung nicht. — Учись больше, иначе не сдашь экзамен.
?___ es regnet, gehen wir spazieren.|Obwohl|Trotzdem|Weil|Придаточное вопреки ожиданию начинается с obwohl.
?Es regnet, ___ gehen wir spazieren.|trotzdem|obwohl|weil|После trotzdem глагол стоит сразу: trotzdem gehen wir.
?Beeil dich, ___ verpasst du den Zug.|sonst|obwohl|falls|Sonst означает «иначе»: sonst verpasst du den Zug.
?___ du Zeit hast, ruf mich an.|Falls|Obwohl|Sonst|Условие «если вдруг» выражает falls.
?Er ist müde, ___ arbeitet er weiter.|trotzdem|obwohl|falls|После trotzdem глагол стоит сразу: trotzdem arbeitet er.
?Er arbeitet weiter, ___ er müde ist.|obwohl|trotzdem|sonst|Придаточное с глаголом в конце: obwohl er müde ist.
#plus|B1|Plusquamperfekt и временные придаточные
@Plusquamperfekt («давнопрошедшее») показывает действие, которое произошло раньше другого действия в прошлом. Форма: hatte или war + Partizip II: Ich hatte gegessen, bevor er kam. Wir waren schon gegangen.
@Союзы: nachdem (после того как; в придаточном Plusquamperfekt, в главном Präteritum или Perfekt), bevor / ehe (прежде чем), als (однократное событие в прошлом), wenn (повторяющееся), während (в то время как).
=Nachdem er gegessen hatte, ging er schlafen. — После того как он поел, он пошёл спать.|Bevor sie ging, rief sie an. — Прежде чем уйти, она позвонила.|Als ich jung war, wohnte ich in Baku. — Когда я был молодым, я жил в Баку.
?Nachdem er gegessen ___, ging er schlafen.|hatte|war|hat|Essen образует Plusquamperfekt с hatte.
?Nachdem wir angekommen ___, riefen wir an.|waren|hatten|sind|Ankommen образует Plusquamperfekt с war: waren.
?___ ich jung war, wohnte ich in Baku.|Als|Wenn|Nachdem|Однократное событие в прошлом: als.
?___ sie ging, rief sie an.|Bevor|Nachdem|Weil|Сначала звонок, потом уход: bevor.
?Immer ___ ich Zeit habe, lese ich.|wenn|als|nachdem|Повторяющееся действие: wenn.
?Er hörte Musik, ___ er arbeitete.|während|nachdem|bevor|Одновременные действия: während.
#komp|B1|Сравнение: Komparativ, Superlativ, je … desto
@Сравнительная степень: прилагательное + -er (schneller, größer, älter; часто с умлаутом); сравнение через als: Er ist größer als ich. Равенство: so … wie. Превосходная: am + -sten (am schnellsten) или der/die/das + -ste.
@Исключения: gut — besser — am besten, viel — mehr — am meisten, gern — lieber — am liebsten. Je … desto означает «чем … тем»: Je mehr ich lerne, desto besser verstehe ich.
=Der Zug ist schneller als der Bus. — Поезд быстрее автобуса.|Ich esse am liebsten Pizza. — Больше всего я люблю пиццу.|Je mehr du übst, desto besser wirst du. — Чем больше ты тренируешься, тем лучше становишься.
?Der Zug ist ___ als der Bus.|schneller|schnell|am schnellsten|После als нужна сравнительная степень: schneller.
?Er ist ___ als ich.|älter|alt|ältest|Сравнительная степень от alt: älter.
?Sie spricht Deutsch ___ als Englisch.|besser|gut|am besten|Сравнительная степень от gut: besser.
?Das ist ___ Film des Jahres.|der beste|besser|am besten|Перед существительным превосходная степень: der beste.
?Ich trinke ___ Tee als Kaffee.|lieber|gern|am liebsten|Сравнительная степень от gern: lieber.
?Je mehr du übst, ___ besser wirst du.|desto|je|als|Конструкция je … desto: «чем … тем».
#gen|B1|n-склонение и родительный падеж
@Некоторые мужские существительные (der Junge, der Student, der Kollege, der Mensch, der Name) во всех падежах, кроме именительного, получают окончание -n/-en: Ich kenne den Studenten. Er hilft dem Kollegen. Это n-склонение.
@Родительный падеж (Genitiv) показывает принадлежность: das Auto des Mannes, die Tasche der Frau. Мужской и средний род: des + существительное с -(e)s; женский род и множественное число: der. Предлоги с Genitiv: wegen, trotz, während, statt: Wegen des Regens bleiben wir zu Hause.
=Ich kenne den Studenten. — Я знаю студента.|Das ist das Auto meines Vaters. — Это машина моего отца.|Wegen des Wetters bleiben wir hier. — Из-за погоды мы остаёмся здесь.
?Ich kenne den ___ gut.|Studenten|Student|Studentes|N-склонение: в винительном падеже Studenten.
?Er hilft dem ___.|Kollegen|Kollege|Kollegs|N-склонение: в дательном падеже Kollegen.
?Das ist das Auto meines ___.|Vaters|Vater|Vaterns|Родительный падеж мужского рода: Vaters.
?Das ist die Tasche der ___.|Frau|Frauen|Fraus|Женский род в родительном падеже: der Frau.
?Wegen ___ Regens bleiben wir hier.|des|der|dem|После wegen родительный падеж мужского рода: des Regens.
?Trotz ___ Kälte gehen wir raus.|der|des|dem|После trotz родительный падеж женского рода: der Kälte.
`;
window.DG = (() => {
  const dl = () => S.dl || (S.dl = { w: {}, my: [], days: {} });
  const prog = () => dl().g || (dl().g = {});
  const sh = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const TOP = [];
  window.DG_TEXT.split('\n').map(l => l.trim()).filter(Boolean).forEach(l => {
    if (l[0] === '#') { const [id, lvl, title] = l.slice(1).split('|'); TOP.push({ id, lvl, title, exp: [], ex: [], qs: [] }); }
    else if (l[0] === '@') TOP[TOP.length - 1].exp.push(l.slice(1));
    else if (l[0] === '=') TOP[TOP.length - 1].ex = l.slice(1).split('|');
    else if (l[0] === '?') { const f = l.slice(1).split('|'); TOP[TOP.length - 1].qs.push({ q: f[0], a: f[1], w: f.slice(2, -1), e: f[f.length - 1] }); }
  });
  let open = null;
  const rate = t => { const g = prog()[t.id]; return g && g.n ? g.ok / g.n : null; };
  const esc2 = s => esc(s).replace(/___/g, '<b>_____</b>');
  function start(id) {
    const t = TOP.find(x => x.id === id), qs = sh(t.qs).map(q => { const opts = sh([q.a, ...q.w]); return { ...q, opts, k: opts.indexOf(q.a) }; });
    sess = { type: 'dg', id, qs, i: 0, picked: null, ok: 0 }; render();
  }
  function pick(k) {
    const s = sess, q = s.qs[s.i]; if (s.picked != null) return; s.picked = k;
    const ok = k === q.k, g = prog()[s.id] || (prog()[s.id] = { n: 0, ok: 0 }); g.n++; if (ok) { g.ok++; s.ok++; addXp(2); }
    dl().days[dkey()] = (dl().days[dkey()] || 0) + 1; T.track('dg_q', { id: s.id, ok }); save(); render();
  }
  function sessHtml() {
    const s = sess, head = t => `<div class="row sp"><button class="pill" data-act="dgexit">✕</button><span class="small mute">${t}</span></div>`;
    if (s.i >= s.qs.length) return head('Грамматика') + `<div class="card" style="text-align:center"><h2>${s.ok} из ${s.qs.length}</h2><p class="sub">${s.ok === s.qs.length ? 'Отлично!' : 'Разбери ошибки в объяснении темы и повтори.'}</p></div><button class="btn" data-act="dgexit">Готово</button>`;
    const q = s.qs[s.i], p = s.picked;
    return head(`Вопрос ${s.i + 1} из ${s.qs.length}`) + `<div class="bar" style="margin-top:14px"><i style="width:${s.i / s.qs.length * 100}%"></i></div>
    <div class="card"><h2 style="margin-top:0;line-height:1.4" translate="no">${esc2(q.q)}</h2>
    ${q.opts.map((o, k) => `<button class="opt ${p != null ? (k === q.k ? 'ok' : k === p ? 'bad' : '') : ''}" data-act="dgpick" data-k="${k}" ${p != null ? 'disabled' : ''} translate="no">${esc(o)}</button>`).join('')}
    ${p != null ? `<div class="explain">${esc(q.e)}</div>` : ''}</div>${p != null ? '<button class="btn" data-act="dgnext">Дальше</button>' : ''}`;
  }
  function html() {
    const back = '<div class="row sp"><button class="pill" data-act="modeset" data-v="bank">⇄ Банкинг</button><span></span></div>';
    if (open) {
      const t = TOP.find(x => x.id === open);
      return `<div class="row sp"><button class="pill" data-act="dgback">‹ Темы</button><span class="small mute">${t.lvl}</span></div><h1 style="margin-top:14px">${t.title}</h1>
      <div class="card">${t.exp.map(p => `<p style="margin:0 0 10px;line-height:1.55">${esc(p)}</p>`).join('')}</div>
      <div class="card"><div class="tag" style="margin-bottom:6px">Примеры</div>${t.ex.map(x => { const [de, ru] = x.split(' — '); return `<div style="margin:8px 0"><div translate="no">${esc(de)}</div><div class="small mute">${esc(ru || '')}</div></div>`; }).join('')}</div>
      <button class="btn" data-act="dgstart" data-id="${t.id}">Упражнения (${t.qs.length})</button>`;
    }
    return `${back}<div class="tag" style="margin-top:14px">Грамматика</div><h1>Темы</h1><p class="sub">Объяснение по-русски и упражнения. Слабые темы отмечены.</p>
    ${['A1', 'A2', 'B1'].map(l => `<div class="small mute" style="margin:14px 0 4px">${l}</div><div class="card" style="padding:4px 14px">${TOP.filter(t => t.lvl === l).map(t => { const r = rate(t), g = prog()[t.id]; return `<div class="goal" data-act="dgopen" data-id="${t.id}" style="cursor:pointer;align-items:center"><div style="flex:1;min-width:0"><div style="font-weight:600;line-height:1.3">${t.title}</div><div class="small mute">${g && g.n ? `Верно: ${Math.round(r * 100)}% (${g.n})` : 'Не начато'}${g && g.n >= 6 && r < 0.7 ? ' · <span style="color:var(--red)">слабая тема</span>' : ''}</div></div><span style="font-size:20px;color:var(--mute)">›</span></div>`; }).join('')}</div>`).join('')}`;
  }
  // самая слабая или ещё не начатая тема: для экрана «Сегодня»
  const next = () => TOP.slice().sort((a, b) => (rate(a) ?? -1) - (rate(b) ?? -1))[0];
  const todayCard = () => { const t = next(), g = prog()[t.id]; return `<div class="card"><h2>Грамматика</h2><p class="small mute" style="margin:6px 0 0">${esc(t.title)} · ${t.lvl}${g && g.n ? ` · верно ${Math.round(rate(t) * 100)}%` : ''}</p><button class="btn ghost" data-act="dgopen" data-id="${t.id}" data-go2="1">Открыть тему</button></div>`; };
  function act(a, D) {
    switch (a) {
      case 'dgopen': open = D.id; if (tab !== 'gram') return go('gram'), true; render(); window.scrollTo(0, 0); return true;
      case 'dgback': open = null; render(); window.scrollTo(0, 0); return true;
      case 'dgstart': start(D.id); return true;
      case 'dgpick': pick(+D.k); return true;
      case 'dgnext': sess.i++; sess.picked = null; render(); return true;
      case 'dgexit': go('gram'); return true;
    }
    return false;
  }
  return { act, html, sessHtml, todayCard, topics: () => TOP, stat: () => { const v = Object.values(prog()); return { n: v.reduce((s, x) => s + x.n, 0), ok: v.reduce((s, x) => s + x.ok, 0) }; } };
})();
