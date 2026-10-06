'use strict';
// Программа из учебника «Spektrum Deutsch B1+» (Buscha, Szita): недельный план по главам. Страницы из оглавления учебника, план и пометки мои.
// Подключается после dgram.js; к S, tab, go, render, esc, toast, save, addXp, dkey, DW, DG, DL обращается только при вызове.
window.DP = (() => {
  // [номер, название, перевод, стр. Hauptteil, Vertiefungsteil, Übersichten, Abschlusstest, темы грамматики, о чём]
  const CH = [
    [1, 'Alltag', 'Повседневная жизнь', 9, 23, 27, 30, ['prat2', 'vprep'], 'Рассказ о распорядке дня, радость и раздражение, свободное время, детективы, биография'],
    [2, 'Essen und Essgewohnheiten', 'Еда и привычки питания', 31, 43, 47, 50, ['inf', 'pass'], 'Любимые блюда, рестораны, рецепты, планы и ожидания; инфинитивные конструкции и пассив'],
    [3, 'Im Berufsleben', 'Профессиональная жизнь', 51, 65, 69, 72, ['konj'], 'Профессии, телефонные разговоры, встречи, деловая переписка; вежливые просьбы, Futur I'],
    [4, 'Lernen und Weiterbildung', 'Учёба и повышение квалификации', 73, 87, 91, 94, ['kaus'], 'Как учатся люди, курсы, резюме; причина и цель, род существительных'],
    [5, 'Städte', 'Города', 95, 109, 113, 116, ['rel', 'adj'], 'Описание городов и достопримечательностей, открытка, форум; относительные предложения, окончания прилагательных'],
    [6, 'Gesundheit und Fitness', 'Здоровье и фитнес', 117, 129, 133, 136, ['refl', 'konj', 'konz'], 'Советы, здоровье и болезни, презентация; возвратные глаголы, условие и последствие'],
    [7, 'Wie wir leben', 'Как мы живём', 137, 151, 155, 158, ['gen', 'inf', 'konz'], 'Привычки и обычаи, смолтолк, письмо другу; n-склонение, инфинитив с zu, уступка'],
    [8, 'Produkte und Konsum', 'Продукты и потребление', 159, 173, 177, 180, ['pass', 'konj2', 'komp'], 'Покупки, реклама, мечты; пассив с модальными, Konjunktiv II, сравнения'],
    [9, 'Reisen und Verkehr', 'Путешествия и транспорт', 181, 193, 197, 200, ['plus'], 'Путешествия, проблемы в отпуске, объявления на транспорте; Plusquamperfekt, временные придаточные'],
    [10, 'Medien und Aktuelles', 'Медиа и новости', 201, 215, 219, 222, ['vprep'], 'Чтение и медиа, фильмы, новости, письма; глаголы с падежами, предлоги laut, nach, zufolge'],
    [11, 'Geschichte und Politik', 'История и политика', 223, 235, 239, 242, ['plus', 'gen'], 'История, Берлин, политики, письмо о приёме на работу; временные придаточные, прилагательные с предлогами'],
    [12, 'Innovation und Kreativität', 'Инновации и креативность', 243, 255, 259, 262, ['pass'], 'Изобретения, креативность, письма коллегам; способ действия (indem), повторение пассива'],
  ];
  const dl = () => S.dl || (S.dl = { w: {}, my: [], days: {} });
  const pr = () => dl().prog || (dl().prog = { cur: 1, done: {} });
  const gname = id => { const t = DG.topics().find(x => x.id === id); return t ? t.title : id; };
  const flags = n => pr().done[n] || (pr().done[n] = [false, false, false, false, false]);
  const cnt = n => flags(n).filter(Boolean).length;
  const words = n => DL.chWords(n).length;
  function html() {
    const p = pr(), c = CH.find(x => x[0] === p.cur) || CH[0], f = flags(c[0]), nw = words(c[0]), g = c[7];
    const day = (k, title, body, btn) => `<div class="step ${f[k] ? 'done' : ''}" data-act="dpday" data-d="${k}" style="cursor:pointer"><div class="ic">${k + 1}</div><div style="flex:1;min-width:0"><div class="t">${title}</div><div class="small mute" style="line-height:1.45">${body}</div>${btn || ''}</div><div class="chk">${f[k] ? '✓' : ''}</div></div>`;
    const days = [
      day(0, 'Слова главы', nw ? `${nw} слов к главе. Затем прочитай «Wichtige Wörter und Wendungen», S. ${c[5]}.` : `Прочитай «Wichtige Wörter und Wendungen», S. ${c[5]}. Слова этой главы можно добавить в приложение: скажи мне.`, nw ? `<button class="st" style="margin-top:8px" data-act="dlstart" data-cat="ch${c[0]}">Карточки главы</button>` : ''),
      day(1, 'Грамматика: ' + gname(g[0]), 'Объяснение и упражнения в приложении.', `<button class="st" style="margin-top:8px" data-act="dgopen" data-id="${g[0]}">Открыть тему</button>`),
      day(2, g[1] ? 'Грамматика: ' + gname(g[1]) : 'Чтение и письмо', g[1] ? 'Тема и упражнения в приложении, затем Hauptteil, S. ' + c[3] + '.' : `Hauptteil, S. ${c[3]}: тексты и задания главы.`, g[1] ? `<button class="st" style="margin-top:8px" data-act="dgopen" data-id="${g[1]}">Открыть тему</button>` : ''),
      day(3, 'Hauptteil и Vertiefungsteil', `Задания главы по порядку: Hauptteil с S. ${c[3]}, затем Vertiefungsteil, S. ${c[4]}.`),
      day(4, 'Abschlusstest', `Мини-тест главы, S. ${c[6]}. Проверь себя и повтори слабые темы.${g[2] ? '' : ''}`),
    ].join('');
    const done = cnt(c[0]) === 5;
    return `<div class="row sp"><button class="pill" data-act="modeset" data-v="bank">⇄ Банкинг</button><span></span></div><div class="tag" style="margin-top:14px">Программа</div><h1>Spektrum B1+</h1><p class="sub">План на неделю по главам учебника. Один день: 15-30 минут.</p>
    ${(x => `<div class="grid2" style="margin-top:12px"><div class="stat"><span class="small mute">Серия</span><b>${x.streak}</b></div><div class="stat"><span class="small mute">Слов выучено</span><b>${x.known}</b></div><div class="stat"><span class="small mute">Дней занятий</span><b>${x.days}</b></div><div class="stat"><span class="small mute">Грамматика, верно</span><b>${(g => g.n ? Math.round(g.ok / g.n * 100) + '%' : '–')(DG.stat())}</b></div></div>`)(DL.stats())}
    <div class="card"><div class="tag">Сейчас: глава ${c[0]} из 12</div><div style="font-size:19px;font-weight:700;margin:4px 0" translate="no">${c[1]}</div><div class="small mute">${c[2]}</div><p class="small" style="margin:8px 0 0;line-height:1.5">${c[8]}</p></div>
    <div class="card">${days}${done ? `<p class="small" style="color:var(--green);margin:10px 0 4px">Глава пройдена ✓</p>${c[0] < 12 ? `<button class="btn" data-act="dpnext">Следующая глава</button>` : ''}` : ''}</div>
    <div class="card"><h2>Все главы</h2>${CH.map(x => `<div class="goal" data-act="dpcur" data-n="${x[0]}" style="cursor:pointer;align-items:center"><div class="cn">${x[0]}</div><div style="flex:1;min-width:0"><div style="font-weight:600;line-height:1.3" translate="no">${x[1]}</div><div class="small mute">${x[2]} · ${cnt(x[0])}/5${words(x[0]) ? ' · ' + words(x[0]) + ' слов' : ''}</div></div>${x[0] === p.cur ? '<span class="pill on">сейчас</span>' : ''}</div>`).join('')}</div>
    <div class="card"><p class="small mute" style="margin:0;line-height:1.55">Слова других глав и дополнительные упражнения добавляются по запросу: напиши, на какой ты главе.</p></div>`;
  }
  function act(a, D) {
    switch (a) {
      case 'dpday': { const f = flags(pr().cur); f[+D.d] = !f[+D.d]; if (f[+D.d]) { addXp(3); dl().days[dkey()] = (dl().days[dkey()] || 0) + 1; } if (f.every(Boolean) && !pr().award?.[pr().cur]) { (pr().award = pr().award || {})[pr().cur] = 1; addXp(20); toast('Глава пройдена · +20 XP'); } save(); render(); return true; }
      case 'dpcur': pr().cur = +D.n; save(); render(); window.scrollTo(0, 0); return true;
      case 'dpnext': pr().cur = Math.min(12, pr().cur + 1); save(); render(); window.scrollTo(0, 0); return true;
    }
    return false;
  }
  return { html, act };
})();
