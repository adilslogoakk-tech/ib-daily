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
    ${['A1', 'A2'].map(l => `<div class="small mute" style="margin:14px 0 4px">${l}</div><div class="card" style="padding:4px 14px">${TOP.filter(t => t.lvl === l).map(t => { const r = rate(t), g = prog()[t.id]; return `<div class="goal" data-act="dgopen" data-id="${t.id}" style="cursor:pointer;align-items:center"><div style="flex:1;min-width:0"><div style="font-weight:600;line-height:1.3">${t.title}</div><div class="small mute">${g && g.n ? `Верно: ${Math.round(r * 100)}% (${g.n})` : 'Не начато'}${g && g.n >= 6 && r < 0.7 ? ' · <span style="color:var(--red)">слабая тема</span>' : ''}</div></div><span style="font-size:20px;color:var(--mute)">›</span></div>`; }).join('')}</div>`).join('')}`;
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
