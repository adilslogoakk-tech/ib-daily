'use strict';
// Достижения, цель недели и строка про «заморозку» серии (сама заморозка считается в streakCalc, app.js).
// Подключается после library.js; к S, JOBS, jstat, appDay, allDone, dkey, wkey, streak, streakCalc, addXp, toast, save, render обращается только при вызове.
const ACH = (() => {
  const wk = () => wkey(new Date());
  const weekDays = () => { const m = new Date(wk() + 'T00:00:00'); return Array.from({ length: 7 }, (_, i) => { const d = new Date(m); d.setDate(m.getDate() + i); return dkey(d); }); };
  const sent = () => JOBS.jobs.filter(j => ['applied', 'exam', 'rejected'].includes(jstat(j))).length;
  const parts = () => Object.keys(S.read).filter(k => k.startsWith('bk:')).length;
  const quotes = () => S.later.filter(x => x.kind === 'quote').length;
  const cases = () => Object.values(S.cases).filter(c => c.done).length;
  const wgDone = () => Object.keys(S.wgd || {}).length;
  const best = () => Math.max(S.best, streak());
  // [id, значок, название, что считаем, цель]
  const LIST = () => [
    ['a1', '📨', 'Первая заявка', sent, 1], ['a10', '📬', '10 заявок', sent, 10], ['a50', '🚀', '50 заявок', sent, 50],
    ['s3', '🔥', '3 дня подряд', best, 3], ['s7', '🔥', 'Неделя подряд', best, 7], ['s30', '🏆', 'Месяц подряд', best, 30],
    ['ch', '📚', 'Все главы прочитаны', () => BOOK.filter(c => S.read[c.id]).length, BOOK.length],
    ['ls', '🎓', 'Все уроки пройдены', () => IBL().filter(l => S.lessons.includes(l.id)).length, IBL().length],
    ['xp', '⭐', '500 XP', () => S.xp, 500],
    ['k1', '🧩', 'Первый мини-кейс', cases, 1], ['k3', '🧠', '3 мини-кейса', cases, 3],
    ['q1', '❝', 'Первая цитата', quotes, 1], ['q10', '✍️', '10 цитат', quotes, 10],
    ['b1', '📖', 'Первая часть книги', parts, 1], ['b10', '📕', '10 частей книг', parts, 10],
    ['w1', '🎯', 'Цель недели выполнена', wgDone, 1], ['w4', '🥇', '4 цели недели', wgDone, 4],
  ].map(([id, ic, t, cur, n]) => ({ id, ic, t, cur, n }));

  // тип цели: значок, подпись, варианты, текущее значение за неделю
  const WG = {
    days: { ic: '🔥', t: 'Закрытых дней', opts: [3, 5, 7], cur: () => weekDays().filter(k => allDone(k)).length },
    apps: { ic: '💼', t: 'Заявок', opts: [10, 15, 25], cur: () => { const w = weekDays(); return JOBS.jobs.filter(j => w.includes(appDay(j))).length; } },
    read: { ic: '📖', t: 'Глав и частей книг', opts: [3, 5, 10], cur: () => { const t0 = new Date(wk() + 'T00:00:00').getTime(); return Object.values(S.read).filter(v => typeof v === 'number' && v >= t0).length; } },
    xp: { ic: '★', t: 'XP за неделю', opts: [200, 400, 600], cur: () => weekDays().reduce((a, k) => a + ((S.days[k] && S.days[k].xp) || 0), 0) },
  };
  let editing = false;

  // вызывается в конце каждой отрисовки: выдаёт новые значки и бонус за цель недели
  function check() {
    if (typeof JOBS === 'undefined') return;
    const first = !S.bseed, got = [];
    for (const b of LIST()) if (!S.badges[b.id] && b.cur() >= b.n) { S.badges[b.id] = Date.now(); got.push(b); }
    let wg = null;
    if (S.wg && WG[S.wg.t] && WG[S.wg.t].cur() >= S.wg.n) { S.wgd = S.wgd || {}; if (!S.wgd[wk()]) { S.wgd[wk()] = 1; wg = true; } }
    if (!got.length && !wg && !first) return;
    S.bseed = 1; save();
    if (wg) { addXp(50); setTimeout(() => toast('🎯 ' + tr('Цель недели выполнена') + ' · +50 XP'), 2800); }
    else if (got.length && !first) setTimeout(() => toast('🏅 ' + tr(got[0].t)), 2800);
  }

  function goalCard() {
    const g = S.wg && WG[S.wg.t] ? { ...WG[S.wg.t], n: S.wg.n } : null, cur = g ? g.cur() : 0;
    const head = '<div class="row sp"><h2 style="margin:0">Цель недели</h2>' + (g && !editing ? '<button class="pill" data-act="wgedit">Изменить</button>' : '') + '</div>';
    if (!g || editing) {
      return `<div class="card">${head}<p class="sub" style="margin:6px 0 4px">Выбери, чего хочешь достичь за эту неделю. За выполнение +50 XP.</p>${Object.entries(WG).map(([k, v]) => `<div style="margin-top:10px"><div class="small mute">${v.ic} <span>${v.t}</span></div><div class="sts" style="margin-top:6px">${v.opts.map(n => `<button class="st ${S.wg && S.wg.t === k && S.wg.n === n ? 'on' : ''}" data-act="wgset" data-t="${k}" data-n="${n}">${n}</button>`).join('')}</div></div>`).join('')}</div>`;
    }
    const ok = cur >= g.n;
    return `<div class="card">${head}<div class="small mute" style="margin-top:8px">${g.ic} <span>${g.t}</span></div><div style="font-size:24px;font-weight:700;margin:2px 0 8px"><span>${Math.min(cur, 999)}</span> / <span>${g.n}</span></div><div class="bar" style="margin:0"><i style="width:${Math.min(100, cur / g.n * 100)}%${ok ? ';background:var(--green)' : ''}"></i></div>${ok ? '<p class="small" style="margin:8px 0 0;color:var(--green)">Выполнено ✓</p>' : ''}</div>`;
  }
  function badgeCard() {
    const all = LIST(), have = all.filter(b => S.badges[b.id]), rest = all.filter(b => !S.badges[b.id]);
    const tile = (b, on) => `<div class="stat" style="padding:12px"><div style="font-size:24px;${on ? '' : 'filter:grayscale(1);opacity:.45'}">${b.ic}</div><div style="font-weight:600;font-size:14px;line-height:1.3;margin-top:4px">${b.t}</div>${on ? '<div class="small" style="color:var(--green)">✓</div>' : `<div class="small mute"><span>${Math.min(b.cur(), b.n)}</span> / <span>${b.n}</span></div>`}</div>`;
    return `<div class="card"><div class="row sp"><h2 style="margin:0">Достижения</h2><span class="pill"><span>${have.length}</span> / <span>${all.length}</span></span></div><div class="grid2" style="margin-top:12px">${have.map(b => tile(b, 1)).join('')}${rest.map(b => tile(b, 0)).join('')}</div></div>`;
  }
  const html = () => goalCard() + badgeCard();
  function freezeLine() {
    const c = streakCalc(); if (c.n < 2) return '';
    return `<p class="small mute" style="margin:10px 0 0">${c.used[wk()] ? '🧊 Заморозка этой недели использована' : '🧊 Заморозка: один пропуск в неделю не сбросит серию'}</p>`;
  }
  function act(a, D) {
    switch (a) {
      case 'wgedit': editing = true; render(); return true;
      case 'wgset': S.wg = { t: D.t, n: +D.n }; editing = false; save(); render(); return true;
    }
    return false;
  }
  return { check, html, freezeLine, act };
})();

I18N.add([
  ['Порядок добавления', 'Date added', 'Hinzugefügt', 'Əlavə olunma sırası'],
  ['Название', 'Title', 'Titel', 'Ad'],
  ['Автор', 'Author', 'Autor', 'Müəllif'],
  ['Время чтения', 'Reading time', 'Lesezeit', 'Oxuma vaxtı'],
  ['Части', 'Parts', 'Teile', 'Hissələr'],
  ['Мой прогресс', 'My progress', 'Mein Fortschritt', 'Mənim irəliləyişim'],
  ['❝ В заметки', '❝ Save quote', '❝ Als Zitat speichern', '❝ Sitatı saxla'],
  ['✓ В заметках · убрать', '✓ Saved · remove', '✓ Gespeichert · entfernen', '✓ Saxlanılıb · sil'],
  ['🃏 В карточку', '🃏 Make a card', '🃏 Als Karte', '🃏 Karta et'],
  ['Цитата', 'Quote', 'Zitat', 'Sitat'],
  ['Цитата сохранена', 'Quote saved', 'Zitat gespeichert', 'Sitat saxlanıldı'],
  ['Цитата убрана', 'Quote removed', 'Zitat entfernt', 'Sitat silindi'],
  ['Новая карточка', 'New card', 'Neue Karte', 'Yeni kart'],
  ['Вопрос', 'Question', 'Frage', 'Sual'],
  ['Ответ', 'Answer', 'Antwort', 'Cavab'],
  ['Создать карточку', 'Create card', 'Karte erstellen', 'Kart yarat'],
  ['Карточка добавлена в тренировку', 'Card added to your training', 'Karte zum Training hinzugefügt', 'Kart təlimə əlavə edildi'],
  ['📖 Открыть место в книге', '📖 Open the spot in the book', '📖 Stelle im Buch öffnen', '📖 Kitabda yerini aç'],
  ['Продолжи мысль', 'Continue the thought', 'Setze den Gedanken fort', 'Fikri davam etdir'],
  ['Нажми на абзац, чтобы сохранить цитату или сделать карточку', 'Tap a paragraph to save a quote or make a card', 'Tippe auf einen Absatz, um ein Zitat zu speichern oder eine Karte zu erstellen', 'Sitatı saxlamaq və ya kart yaratmaq üçün abzasa toxun'],
  ['Достижения', 'Achievements', 'Erfolge', 'Nailiyyətlər'],
  ['Цель недели', 'Weekly goal', 'Wochenziel', 'Həftəlik hədəf'],
  ['Цель недели выполнена', 'Weekly goal reached', 'Wochenziel erreicht', 'Həftəlik hədəfə çatıldı'],
  ['Выбери, чего хочешь достичь за эту неделю. За выполнение +50 XP.', 'Pick what you want to reach this week. Reaching it gives +50 XP.', 'Wähle, was du diese Woche erreichen willst. Bei Erfolg gibt es +50 XP.', 'Bu həftə nəyə çatmaq istədiyini seç. Çatsan +50 XP alırsan.'],
  ['Закрытых дней', 'Days completed', 'Abgeschlossene Tage', 'Tamamlanan günlər'],
  ['Заявок', 'Applications', 'Bewerbungen', 'Müraciətlər'],
  ['Глав и частей книг', 'Chapters and book parts', 'Kapitel und Buchteile', 'Fəsillər və kitab hissələri'],
  ['XP за неделю', 'XP this week', 'XP diese Woche', 'Həftəlik XP'],
  ['Изменить', 'Change', 'Ändern', 'Dəyiş'],
  ['Выполнено ✓', 'Done ✓', 'Erledigt ✓', 'Tamamlandı ✓'],
  ['Первая заявка', 'First application', 'Erste Bewerbung', 'İlk müraciət'],
  ['10 заявок', '10 applications', '10 Bewerbungen', '10 müraciət'],
  ['50 заявок', '50 applications', '50 Bewerbungen', '50 müraciət'],
  ['3 дня подряд', '3 days in a row', '3 Tage in Folge', 'Ardıcıl 3 gün'],
  ['Неделя подряд', 'A week in a row', 'Eine Woche in Folge', 'Ardıcıl bir həftə'],
  ['Месяц подряд', 'A month in a row', 'Einen Monat in Folge', 'Ardıcıl bir ay'],
  ['Все главы прочитаны', 'All chapters read', 'Alle Kapitel gelesen', 'Bütün fəsillər oxunub'],
  ['Все уроки пройдены', 'All lessons done', 'Alle Lektionen abgeschlossen', 'Bütün dərslər tamamlanıb'],
  ['Первый мини-кейс', 'First mini-case', 'Erster Mini-Case', 'İlk mini-keys'],
  ['3 мини-кейса', '3 mini-cases', '3 Mini-Cases', '3 mini-keys'],
  ['Первая цитата', 'First quote', 'Erstes Zitat', 'İlk sitat'],
  ['10 цитат', '10 quotes', '10 Zitate', '10 sitat'],
  ['Первая часть книги', 'First book part', 'Erster Buchteil', 'Kitabın ilk hissəsi'],
  ['10 частей книг', '10 book parts', '10 Buchteile', '10 kitab hissəsi'],
  ['4 цели недели', '4 weekly goals', '4 Wochenziele', '4 həftəlik hədəf'],
  ['🧊 Заморозка этой недели использована', '🧊 This week\'s streak freeze is used', '🧊 Die Serien-Pause dieser Woche ist verbraucht', '🧊 Bu həftənin seriya dondurması istifadə olunub'],
  ['🧊 Заморозка: один пропуск в неделю не сбросит серию', '🧊 Streak freeze: one missed day a week won\'t reset your streak', '🧊 Serien-Pause: ein verpasster Tag pro Woche setzt die Serie nicht zurück', '🧊 Dondurma: həftədə bir buraxılmış gün seriyanı sıfırlamır'],
]);
