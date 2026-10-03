'use strict';
// Тренер: журнал событий (IndexedDB), модель знаний, расписание повторений, адаптивный подбор.
// Зависит от глобальных S, save, dkey, sess, tab (объявлены в app.js, используются только при вызове).
const DAY = 86400000;
const OPT_TOPICS = ['cfa', 'de'];   // отдельные ветки: попадают в общий план только по включённому фокусу
const SID = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

// ---------- реестр элементов: у каждого задачи, карточки и вопроса теста есть id, тема и тип навыка ----------
const ITEMS = {};
const lessonTopic = l => l.topic || LESSON_TOPIC[l.id] || 'acct';
function regItem(it, kind, id, topic) {
  it.id = id; it.kind = kind; it.topic = TOPICS[topic] ? topic : 'acct';
  it.skill = kind === 'card' ? 'recall' : it.o.every(t => /\d/.test(t)) ? 'calc' : 'concept';
  ITEMS[id] = it;
  if (kind !== 'card') {  // ловушки: код ошибки для каждого неверного варианта
    const codes = (MISC_ITEMS[id] || it.m || '').split(' ').filter(Boolean); let j = 0;
    it.mis = {}; it.o.forEach((o, k) => { if (k !== it.a) it.mis[o] = codes[j++] || (it.skill === 'calc' ? 'arith' : 'concept'); });
  }
}
function registerAll() {
  DRILLS.forEach((d, i) => regItem(d, 'drill', d.id || 'd' + i, d.topic || DRILL_TOPICS[i]));
  CARDS.forEach((c, i) => regItem(c, 'card', c.id || 'c' + i, c.topic || CARD_TOPICS[i]));
  LESSONS.forEach(l => l.quiz.forEach((q, n) => regItem(q, 'quiz', 'q:' + l.id + ':' + n, lessonTopic(l))));
}
registerAll();

// ---------- журнал событий ----------
const DB = (() => {
  let p;
  const open = () => p || (p = new Promise((res, rej) => {
    const r = indexedDB.open('ibdaily', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('events', { autoIncrement: true });
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  }));
  const tx = async (mode, fn) => {
    const db = await open();
    return new Promise((res, rej) => { const t = db.transaction('events', mode), q = fn(t.objectStore('events')); t.oncomplete = () => res(q.result); t.onerror = () => rej(t.error); });
  };
  return { add: e => tx('readwrite', s => s.add(e)).catch(() => {}), all: () => open().then(db => new Promise((res, rej) => {  // с номером события (ключ IndexedDB) для отправки в облако
      const out = [], q = db.transaction('events').objectStore('events').openCursor();
      q.onsuccess = () => { const c = q.result; if (c) { out.push({ ...c.value, n: c.key }); c.continue(); } else res(out); };
      q.onerror = () => rej(q.error);
    })), clear: () => tx('readwrite', s => s.clear()) };
})();
const track = (type, data) => DB.add({ ts: Date.now(), sid: SID, type, ...data });

// ---------- активное время: пауза, когда приложение свёрнуто ----------
let vis = 0, visAt = document.hidden ? null : performance.now();
const activeNow = () => vis + (visAt == null ? 0 : performance.now() - visAt);
const elapsed = () => Math.min(120000, Math.round(activeNow() - (sess && sess.t0 || 0)));
let curSec = null, curDetail = null, secAt = 0;
function flushView() {
  if (curSec == null) return;
  const s = (activeNow() - secAt) / 1000;
  if (s >= 1) { const d = (S.stats.time[dkey()] = S.stats.time[dkey()] || {}); d[curSec] = Math.round((d[curSec] || 0) + s); save(); track('view', { sec: curSec, detail: curDetail, s: Math.round(s) }); }
  secAt = activeNow();
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { flushView(); if (visAt != null) { vis += performance.now() - visAt; visAt = null; } track('hide'); }
  else { visAt = performance.now(); secAt = activeNow(); track('show'); }
});
// вызывается после каждой отрисовки: учёт разделов и запуск таймера вопроса
function onRender() {
  const sec = sess ? sess.type : tab, detail = sess ? (sess.l ? sess.l.id : String(sess.topic || '')) : '';
  if (sec !== curSec || detail !== curDetail) { flushView(); curSec = sec; curDetail = detail; secAt = activeNow(); }
  if (!sess) return;
  const k = sess.type === 'lesson' ? (sess.i < sess.l.cards.length ? 'r' + sess.i : 'q' + sess.qi) : sess.type === 'drill' ? 'q' + sess.qi : sess.type === 'cards' ? 'c' + sess.i : null;
  if (k && sess.k !== k) { sess.k = k; sess.t0 = activeNow(); sess.askConf = k[0] === 'q' && Math.random() < 0.25; }
}

// ---------- модель знаний ----------
const mastery = t => t ? t.a / (t.a + t.b) : 0.5;                       // оценка точности с осторожным априором
const know = t => Math.max(0, Math.min(1, (mastery(t) - 0.25) / 0.75)); // поправка на угадывание (4 варианта)
const isSlow = (skill, ms) => { const m = S.stats.ms[skill]; return !!(m && m.n >= 10 && ms && ms > 1.8 * m.v); };
function record(id, correct, ms, o) {
  const it = ITEMS[id]; if (!it) return;
  o = o || {};
  const now = Date.now(), guess = o.conf === 'guess', sure = o.conf === 'sure', slow = isSlow(it.skill, ms);
  // расписание повторений: интервал растёт при верном ответе (медленнее, если угадал или был медленным), сбрасывается при ошибке
  const st = (S.items[id] = S.items[id] || { s: 0, n: 0, ok: 0, lapses: 0 });
  st.n++; st.last = now; st.lastOk = correct;
  if (correct) { st.ok++; st.s = st.s ? st.s * (guess ? 1.3 : slow ? 1.8 : 2.3) : (guess ? 1 : 2); }
  else { st.lapses++; st.s = Math.max(0.3, (st.s || 1) * 0.4); }
  st.due = now + st.s * DAY;
  // состояние темы: Beta(a, b) со слабым забыванием; уверенная ошибка весит больше, угаданный ответ меньше
  const t = (S.topics[it.topic] = S.topics[it.topic] || { a: 1, b: 1, n: 0, sp: 1, sk: {} });
  t.a *= 0.985; t.b *= 0.985; t.n++;
  if (correct) t.a += guess ? 0.5 : slow ? 0.75 : 1; else t.b += sure ? 1.5 : 1;
  const sk = (t.sk[it.skill] = t.sk[it.skill] || { a: 0, b: 0 }); correct ? sk.a++ : sk.b++;
  // скорость относительно собственной нормы: sp > 1 значит медленнее обычного
  if (correct && ms) {
    const m = S.stats.ms[it.skill] || (S.stats.ms[it.skill] = { v: ms, n: 0 });
    if (m.n >= 3) t.sp = 0.85 * t.sp + 0.15 * (ms / m.v);
    m.v = 0.9 * m.v + 0.1 * ms; m.n++;
  }
  const h = (S.stats.hour[new Date().getHours()] = S.stats.hour[new Date().getHours()] || { n: 0, ok: 0 }); h.n++; if (correct) h.ok++;
  if (it.mis) {
    for (const c of new Set(Object.values(it.mis))) (S.misc[c] = S.misc[c] || { seen: 0, bad: 0 }).seen++;
    const c = !correct && o.pick && it.mis[o.pick];
    if (c) { S.misc[c].bad++; S.misc[c].last = now; }
  }
  if (!correct && o.pick) { const w = (S.wrong[id] = S.wrong[id] || {}); w[o.pick] = (w[o.pick] || 0) + 1; }
  save();
}

// ---------- события (тесты, интервью, экзамены) ----------
const daysLeft = d => Math.round((new Date(d + 'T00:00:00') - new Date(dkey() + 'T00:00:00')) / DAY);
const upcoming = () => S.events.filter(e => daysLeft(e.date) >= 0).sort((a, b) => a.date.localeCompare(b.date));
function evBoost(topic) {
  let b = 1;
  for (const e of upcoming()) { const d = daysLeft(e.date); if (e.topics.includes(topic) && d <= 21) b = Math.max(b, 1 + 1.5 * (1 - d / 21)); }
  return b;
}

// ---------- адаптивный подбор ----------
function pick(kind, n, topic, misc, whyText, evId) {
  const now = Date.now();
  const ts = topic ? [].concat(topic) : null, narrow = !!(ts || misc);
  const sc = Object.values(ITEMS).filter(x => x.kind === kind && (!OPT_TOPICS.includes(x.topic) || (ts && ts.includes(x.topic)) || S.focus.includes(x.topic)) && (!ts || ts.includes(x.topic) || (evId && x.for === evId)) && (!misc || (x.mis && Object.values(x.mis).includes(misc)))).map(x => {
    const st = S.items[x.id], t = S.topics[x.topic], imp = TOPICS[x.topic].w / 3 * (S.focus.includes(x.topic) ? 1.5 : 1) * evBoost(x.topic);
    const weak = 1.5 * (1 - mastery(t)) * imp;
    let due = 0, nov = 0, rw = 0;
    if (!st) nov = 0.6;
    else {
      const u = (now - st.due) / (Math.max(st.s, 0.3) * DAY);
      due = u >= 0 ? 1 + Math.min(u, 2) : Math.max(u, -1.5);
      if (st.lastOk === false && now - st.last < 3 * DAY) rw = 0.5;
    }
    if (narrow) due = Math.max(due, 0);
    const known = t && t.n >= 3, best = Math.max(known ? weak : 0, due > 0 ? due : 0, nov, rw);
    const why = rw && best === rw ? 'Ты недавно ошибся в этом вопросе' : due > 0 && best === due ? 'Пора повторить, чтобы не забыть'
      : known && best === weak ? `Слабая тема: ${TOPICS[x.topic].name} (${Math.round(know(t) * 100)}%)` : !st ? 'Новый вопрос' : 'Для разнообразия';
    const ef = x.for && (evId ? x.for === evId : upcoming().some(e => e.id === x.for)) ? 1.2 : 0;  // личные задачи под событие
    return { x, why: whyText || (ef && !st ? 'Подготовка к твоему событию' : why), v: weak + due + nov + rw + ef + Math.random() * 0.3 };
  }).sort((a, b) => b.v - a.v);
  const out = [], cnt = {};
  for (const e of sc) { if (out.length >= n) break; if ((!ts || ts.length > 1) && (cnt[e.x.topic] || 0) >= 2) continue; cnt[e.x.topic] = (cnt[e.x.topic] || 0) + 1; out.push(e); }
  for (const e of sc) { if (out.length >= n) break; if (!out.includes(e)) out.push(e); }
  return out;
}
// следующий урок: непройденные по порядку, но слабые темы вперёд; когда всё пройдено, повторяем самую слабую тему
function nextLesson() {
  const ib = LESSONS.filter(l => !OPT_TOPICS.includes(lessonTopic(l)) || S.focus.includes(lessonTopic(l))), left = ib.filter(l => !S.lessons.includes(l.id)), list = left.length ? left : ib;
  return list.map((l, i) => { const k = lessonTopic(l); return { l, v: (1 - mastery(S.topics[k])) * TOPICS[k].w - i * 0.001 }; }).sort((a, b) => b.v - a.v)[0].l;
}
const weakest = () => Object.entries(S.topics).filter(([, t]) => t.n >= 3).map(([k, t]) => ({ k, n: t.n, k100: Math.round(know(t) * 100), sp: t.sp, m: mastery(t) })).sort((a, b) => a.m - b.m)[0];

// ---------- сводки для экрана «Прогресс» ----------
const topicRows = () => Object.entries(TOPICS).map(([k, c]) => { const t = S.topics[k]; return { k, name: c.name, n: t ? t.n : 0, know: t ? know(t) : 0, sp: t ? t.sp : 1 }; })
  .sort((a, b) => (!a.n - !b.n) || (a.n >= 3 && b.n >= 3 ? a.know - b.know : b.n - a.n));
const recurring = () => Object.entries(S.wrong).flatMap(([id, w]) => Object.entries(w).filter(([, c]) => c >= 2).map(([pick, c]) => ({ id, pick, c }))).filter(r => ITEMS[r.id]).sort((a, b) => b.c - a.c).slice(0, 3);
function bestHour() {
  const hs = Object.entries(S.stats.hour).filter(([, v]) => v.n >= 8).map(([h, v]) => ({ h: +h, p: v.ok / v.n, n: v.n })).sort((a, b) => b.p - a.p);
  return hs.length >= 2 ? hs[0] : null;
}
function timeByWeek() {
  const out = {};
  for (let i = 0; i < 7; i++) { const d = new Date(); d.setDate(d.getDate() - i); const x = S.stats.time[dkey(d)]; if (x) for (const [k, v] of Object.entries(x)) out[k] = (out[k] || 0) + v; }
  return out;
}

const systemic = () => Object.entries(S.misc).filter(([c, m]) => MISC[c] && m.bad >= 2 && m.bad / m.seen >= 0.25)
  .map(([c, m]) => ({ c, bad: m.bad, seen: m.seen })).sort((a, b) => b.bad * b.bad / b.seen - a.bad * a.bad / a.seen).slice(0, 4);

// ---------- выгрузка данных для анализа (цикл «тренер») ----------
async function shareFile(name, json) {
  const file = new File([json], name, { type: 'application/json' });
  if (navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ files: [file], title: 'Mandate' }); return true; } catch (e) { if (e.name === 'AbortError') return false; } }
  const a = document.createElement('a'); a.href = URL.createObjectURL(file); a.download = name; document.body.append(a); a.click(); a.remove();
  return true;
}
// срез состояния ученика для тренера: что слабо, где медленно, какие ошибки повторяются
const snapshot = () => ({
  answered: Object.values(S.topics).reduce((a, x) => a + x.n, 0), lessonsDone: S.lessons, focus: S.focus,
  topics: Object.fromEntries(Object.entries(S.topics).map(([k, x]) => [k, { know: Math.round(know(x) * 100), n: x.n, speed: +x.sp.toFixed(2), skills: x.sk }])),
  misconceptions: Object.entries(S.misc).filter(([, m]) => m.seen >= 2).map(([c, m]) => ({ code: c, label: MISC[c] && MISC[c].t, bad: m.bad, seen: m.seen })).sort((a, b) => b.bad - a.bad).slice(0, 8),
});
async function exportData() {
  const events = await DB.all().catch(() => []);
  const catalog = Object.values(ITEMS).map(x => ({ id: x.id, kind: x.kind, topic: x.topic, skill: x.skill, q: x.q, e: x.e, a: x.kind === 'card' ? x.a : x.o[x.a] }));
  const json = JSON.stringify({ exported: new Date().toISOString(), state: { misc: S.misc, events: S.events, items: S.items, topics: S.topics, wrong: S.wrong, stats: S.stats, days: S.days, lessons: S.lessons, focus: S.focus, apps: S.apps }, catalog, events });
  await shareFile('ib-daily-export-' + dkey() + '.json', json);
}
// личные задачи, написанные «тренером» по твоим слабым местам (файл personal.json рядом с приложением)
async function loadPersonal() {
  try {
    const d = await loadDoc('personal', 'personal.json'); if (!d) return;
    (d.drills || []).forEach(x => { if (x.id && !DRILLS.some(y => y.id === x.id)) DRILLS.push(x); });
    (d.cards || []).forEach(x => { if (x.id && !CARDS.some(y => y.id === x.id)) CARDS.push(x); });
    (d.lessons || []).forEach(l => { if (!LESSONS.some(y => y.id === l.id)) LESSONS.push(l); });
    registerAll();
  } catch (e) {}
}
const T = { shareFile, snapshot, daysLeft, upcoming, systemic, track, record, pick, nextLesson, weakest, topicRows, recurring, bestHour, timeByWeek, exportData, loadPersonal, onRender, elapsed, clearLog: () => DB.clear() };
