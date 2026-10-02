'use strict';
const $ = s => document.querySelector(s);
const KEY = 'ibdaily.v1';
const LEVELS = ['Intern', 'Analyst', 'Senior Analyst', 'Associate', 'Vice President', 'Director', 'Managing Director'];
const STEPS = [
  { id: 'lesson', ic: '📘', t: 'Новая концепция', d: '5 мин · урок и мини-тест', xp: 30 },
  { id: 'drill', ic: '🧮', t: 'Задачи', d: '5 мин · 5 быстрых расчётов', xp: 40 },
  { id: 'news', ic: '📰', t: 'Рынок и новости', d: '5 мин · прочитай и подумай', xp: 20 },
];
const FEEDS = [
  'https://www.cnbc.com/id/10000664/device/rss/rss.html',
  'https://www.cnbc.com/id/15839069/device/rss/rss.html',
  'https://feeds.content.dowjones.io/public/rss/mw_topstories',
];
const ICONS = {
  today: '<path d="M3 11l9-8 9 8M5 10v10h14V10"/>',
  learn: '<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 19a2 2 0 002 2h13"/>',
  news: '<path d="M4 5h13a3 3 0 013 3v11H6a2 2 0 01-2-2zM8 9h8M8 13h8"/>',
  jobs: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/>',
  goals: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>',
};

// ---------- состояние ----------
const dkey = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
let S = load();
function normalize(s) {
  s = s || { xp: 0, days: {}, lessons: [], boxes: {}, miss: {}, goals: DEFAULT_GOALS, remind: '19:00', best: 0 };
  // значения по умолчанию для полей, добавленных позже (работает и для старых сохранений, и после сброса)
  for (const [k, v] of Object.entries({ apps: {}, seen: [], items: {}, topics: {}, wrong: {}, focus: [], stats: {}, misc: {}, events: [], requests: [], reqDel: [] })) s[k] = s[k] || v;
  for (const k of ['hour', 'time', 'ms']) s.stats[k] = s.stats[k] || {};
  return s;
}
function load() {
  let s = null;
  try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
  return normalize(s);
}
function rawSave() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
function save() { S._u = Date.now(); rawSave(); CLOUD.touch(); }
const today = () => S.days[dkey()] || (S.days[dkey()] = { steps: [], xp: 0 });
const done = id => today().steps.includes(id);
const allDone = (k = dkey()) => (S.days[k]?.steps.length || 0) >= STEPS.length;
function streak() {
  let n = 0, d = new Date();
  if (!allDone(dkey(d))) d.setDate(d.getDate() - 1);
  while (allDone(dkey(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function addXp(n) { S.xp += n; today().xp += n; save(); }
function level() { const l = Math.floor(S.xp / 200); return { n: l + 1, name: LEVELS[Math.min(l, LEVELS.length - 1)], into: S.xp % 200 }; }
function toast(t) { const e = document.createElement('div'); e.className = 'toast'; e.textContent = t; document.body.append(e); setTimeout(() => e.remove(), 2200); }
function complete(id, xp) {
  if (done(id)) return;
  today().steps.push(id); addXp(xp);
  toast('+' + xp + ' XP');
  if (allDone()) { addXp(25); S.best = Math.max(S.best, streak()); save(); setTimeout(celebrate, 150); setTimeout(() => toast('🔥 День закрыт! Серия: ' + streak()), 2300); }
  save();
}
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---------- цветовые группы терминов (ассоциации) ----------
const CATS = {
  val:  { name: 'Стоимость и оценка', ic: '💎', terms: ['Enterprise Value', 'Equity Value', 'Terminal Value', 'Market Cap', 'EV', 'TV', 'DCF', 'football field', 'trading comps', 'comps', 'precedent transactions', 'precedents', 'EV/EBITDA', 'EV/Revenue', 'EV/EBIT', 'P/E', 'P/B', 'Gordon Growth', 'Exit Multiple', 'SOTP', 'NPV', 'PV', 'LTM', 'NTM', 'PEG', 'target price', 'upside', 'football field', 'multiple', 'мультипликатор', 'оценк', 'стоимост', 'дисконтир'] },
  cap:  { name: 'Капитал и долг', ic: '🏦', terms: ['WACC', 'CAPM', 'Cost of Equity', 'Cost of Debt', 'Net Debt', 'net debt', 'Debt', 'Cash', 'Preferred', 'Minority Interest', 'tax shield', 'DTL', 'DTA', 'Lease', 'lease liabilities', 'Net Debt/EBITDA', 'Re', 'Rd', 'Rf', 'β', 'долг', 'налоговый щит', 'налоговая экономия', 'cash', 'капитал'] },
  prof: { name: 'Прибыль и денежные потоки', ic: '📈', terms: ['EBITDA', 'EBIT', 'Net Income', 'Revenue', 'UFCF', 'FCF', 'Levered FCF', 'Unlevered FCF', 'NWC', 'Working Capital', 'CapEx', 'D&A', 'EPS', 'NOPAT', 'ROIC', 'ROE', 'FFO', 'Gross Profit', 'Gross Margin', 'Adjusted EBITDA', 'Retained Earnings', 'PP&E', 'выручк', 'амортизаци', 'маржа', 'прибыл'] },
  deal: { name: 'Сделки (M&A, LBO)', ic: '🤝', terms: ['LBO', 'M&A', 'accretive', 'dilutive', 'Accretion', 'Dilution', 'MOIC', 'IRR', 'goodwill', 'Goodwill', 'IPO', 'CIM', 'IOI', 'SPA', 'Greenshoe', 'breakup fee', 'cash sweep', 'PIK', 'MAC', 'exit', 'sponsor', 'синерги', 'премию за контроль', 'премия за контроль', 'deleveraging', 'покупател'] },
};
const LESSON_CAT = { ev: 'val', mult: 'val', dcf: 'val', wacc: 'cap', fs: 'prof', comps: 'deal', ad: 'deal', lbo: 'deal', wc: 'prof' };
const TERM_MAP = {}, TERM_RE = (() => {
  const all = [];
  for (const [k, c] of Object.entries(CATS)) for (const t of c.terms) { TERM_MAP[t.toLowerCase()] = k; all.push(t); }
  all.sort((a, b) => b.length - a.length);
  const rx = t => t.replace(/[.*+?^${}()|[\]\\/]/g, '\$&').replace(/&/g, '&amp;');
  // латинские термины — целым словом; кириллические — как основа слова
  const W = String.raw`[\p{L}\p{N}]`;
  return new RegExp(`(?<!${W})(${all.map(rx).join('|')})(?!${W})|(?<!${W})((?:${all.filter(t => /[а-я]/i.test(t)).map(rx).join('|')})[а-яё]*)`, 'giu');
})();
const hl = s => esc(s).replace(TERM_RE, m => { const k = TERM_MAP[m.toLowerCase().replace(/&amp;/g, '&')] || TERM_MAP[Object.keys(TERM_MAP).find(t => m.toLowerCase().startsWith(t) && /[а-я]/i.test(t))]; return k ? `<span class="k k-${k}">${m}</span>` : m; });


const views = {};
// ---------- вакансии ----------
const ST = { new: 'Не подано', applied: 'Подано', exam: 'Тест / интервью', rejected: 'Отказ', excluded: 'Исключено' };
const DAILY_APPS = 3;
let JOBS = (() => { try { return JSON.parse(localStorage.getItem('ibdaily.jobs')) || { jobs: [] }; } catch (e) { return { jobs: [] }; } })();
let jobFilter = 'new', jobQuery = '', jobOpen = null;
// статус = то, что ты поставил на телефоне, пока Excel не изменился; иначе берём Excel
const jstat = j => { const o = S.apps[j.id]; return o && o.base === j.status ? o.s : j.status; };
const appsToday = () => Object.values(S.apps).filter(o => o.s === 'applied' && o.ts && dkey(new Date(o.ts)) === dkey()).length;
function setStatus(id, st) {
  const j = JOBS.jobs.find(x => x.id === id); if (!j) return;
  const was = jstat(j);
  S.apps[id] = { s: st, base: j.status, ts: Date.now() };
  save();
  T.track('job', { id, st, was, cat: j.category, co: j.company, src: j.source, m: j.match });
  if (st === 'applied' && was !== 'applied') {
    addXp(15); const n = appsToday(); if (n === DAILY_APPS) setTimeout(celebrate, 150);
    toast(n >= DAILY_APPS ? '🎯 Норма на сегодня: ' + n + '/' + DAILY_APPS : 'Заявка ' + n + '/' + DAILY_APPS + ' · +15 XP');
  }
}
// документ из облака (если вошёл), иначе из файла рядом с приложением
async function loadDoc(key, file) {
  if (CLOUD.on) { try { const d = await CLOUD.doc(key); if (d) return d; } catch (e) {} }
  try { const r = await fetch(file, { cache: 'no-store' }); return r.ok ? await r.json() : null; } catch (e) { return null; }
}
async function loadJobs() {
  try {
    const d = await loadDoc('jobs', 'jobs.json'); if (!d || !d.jobs) return;
    localStorage.setItem('ibdaily.jobs', JSON.stringify(d));
    const prev = new Set(S.seen);
    JOBS = d; JOBS.fresh = prev.size ? d.jobs.filter(j => !prev.has(j.id)).map(j => j.id) : [];
    S.seen = d.jobs.map(j => j.id); save();
    if (!sess && (tab === 'jobs' || tab === 'today')) render();
  } catch (e) {}
}
function jobsList() {
  const q = jobQuery.trim().toLowerCase(), fresh = new Set(JOBS.fresh || []);
  const list = JOBS.jobs.filter(j => jstat(j) === jobFilter && (!q || (j.title + ' ' + j.company + ' ' + j.location).toLowerCase().includes(q)));
  if (!list.length) return '<p class="small mute" style="text-align:center;padding:24px 0">Здесь пусто</p>';
  return list.map(j => {
    const st = jstat(j), open = jobOpen === j.id;
    return `<div class="job ${open ? 'open' : ''}"><div class="jh" data-job="${j.id}"><div style="flex:1;min-width:0"><div class="small mute">${esc(j.company)} · ${esc(String(j.location).split('(')[0])}</div><div class="jt">${fresh.has(j.id) ? '<span class="new">NEW</span> ' : ''}${esc(j.title)}</div></div><div class="match">${j.match ?? '–'}<small>%</small></div></div>
    ${open ? `<div class="jb"><div class="small mute" style="margin-bottom:8px">${esc(j.type || '')} · ${esc(j.category || '')} · ${esc(j.posted || '')} · ${esc(j.source || '')}</div>
      ${j.lang ? `<p class="small"><b>Язык:</b> ${esc(j.lang)}</p>` : ''}${j.pay ? `<p class="small"><b>Оплата:</b> ${esc(j.pay)}</p>` : ''}${j.resume ? `<p class="small"><b>CV:</b> ${esc(j.resume)}</p>` : ''}
      <a class="btn ghost" style="display:block;text-align:center;text-decoration:none;margin:8px 0" href="${esc(j.link)}" target="_blank" rel="noopener">Открыть вакансию ↗</a>
      ${reportBtn(j)}<button class="btn ghost" style="margin:0 0 8px" data-act="evjob" data-id="${j.id}">📅 Назначить тест или интервью</button>
      <div class="sts">${['applied', 'exam', 'rejected', 'new'].map(k => `<button class="st ${st === k ? 'on' : ''}" data-st="${k}" data-id="${j.id}">${k === 'new' ? 'Сбросить' : ST[k]}</button>`).join('')}</div></div>` : ''}</div>`;
  }).join('');
}
views.jobs = () => {
  const cnt = {}; JOBS.jobs.forEach(j => { const k = jstat(j); cnt[k] = (cnt[k] || 0) + 1; });
  const n = appsToday();
  return `<div class="tag">Вакансии</div><h1>Мои заявки</h1><p class="sub">${JOBS.jobs.length ? 'Обновлено ' + new Date(JOBS.updated).toLocaleString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : 'Данные ещё не загружены'}</p>
  <div class="card"><div class="row sp"><b>Сегодня подано</b><span class="pill">${Math.min(n, 99)} из ${DAILY_APPS}</span></div><div class="bar" style="margin:10px 0 0"><i style="width:${Math.min(100, n / DAILY_APPS * 100)}%"></i></div></div>
  <input type="text" id="jq" placeholder="Поиск по названию или компании" value="${esc(jobQuery)}">
  <div class="chips">${Object.keys(ST).map(k => `<button class="chip ${jobFilter === k ? 'on' : ''}" data-filter="${k}">${ST[k]} <b>${cnt[k] || 0}</b></button>`).join('')}</div>
  <div class="card" style="padding:4px 14px" id="joblist">${jobsList()}</div>`;
};

// ---------- навигация ----------
let tab = 'today', sess = null, prevTab = 'today', lastKey = '', lastNav = '', booting = true, enterT = null;
const TABS = [['today', 'Сегодня'], ['learn', 'Учёба'], ['jobs', 'Вакансии'], ['news', 'Новости'], ['goals', 'Прогресс']];
function go(t) { if (t === 'settings' && tab !== 'settings') prevTab = tab; tab = t; sess = null; render(); window.scrollTo(0, 0); }
let authErr = '';
const RU_ERR = { 'Invalid login credentials': 'Неверный email или пароль', 'User already registered': 'Такой аккаунт уже есть, нажми «Войти»', 'Email not confirmed': 'Подтверди почту по письму, затем войди' };
function authHtml() {
  return `<div class="tag">IB Daily</div><h1>Вход</h1><p class="sub">Прогресс и вакансии хранятся в твоём облаке и доступны только тебе.</p>
  <div class="card"><input type="text" id="au-email" placeholder="Email" inputmode="email" autocapitalize="off" autocomplete="username"><input type="password" id="au-pass" placeholder="Пароль (от 6 символов)" style="margin-top:8px" autocomplete="current-password">
  <p class="small" style="color:var(--red);margin:10px 0 0">${esc(authErr)}</p>
  <button class="btn" data-act="login">Войти</button><button class="btn ghost" data-act="signup">Создать аккаунт</button></div>
  <button class="btn ghost" data-act="localonly">Продолжить без облака</button>`;
}
// ---------- анимации ----------
const animOn = () => S.anim !== false && !(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
const applyAnim = () => { document.documentElement.dataset.anim = S.anim === false ? 'off' : 'on'; };
const initial = () => { const n = (S.name || CLOUD.email || '').trim(); return n ? n[0].toUpperCase() : '👤'; };
function enterView() {
  const app = $('#app'); app.classList.remove('enter'); void app.offsetWidth; app.classList.add('enter');
  clearTimeout(enterT); enterT = setTimeout(() => app.classList.remove('enter'), 1400); countUp();
}
// числа плавно «набегают» при появлении экрана
function countUp() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const to = +el.dataset.count; if (!to) return;
    const t0 = performance.now(), dur = 800;
    const f = t => { const p = Math.min(1, (t - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  });
}
function celebrate() {
  if (!animOn()) return;
  const cv = $('#fx'), ctx = cv.getContext('2d'), k = window.devicePixelRatio || 1, W = cv.width = innerWidth * k, H = cv.height = innerHeight * k;
  const cs = getComputedStyle(document.documentElement), cols = ['--c-val', '--c-cap', '--c-prof', '--c-deal', '--gold'].map(n => cs.getPropertyValue(n).trim());
  const P = Array.from({ length: 90 }, () => ({ x: W / 2 + (Math.random() - .5) * W * .3, y: H * .38, vx: (Math.random() - .5) * 16 * k, vy: (-9 - Math.random() * 11) * k, s: (6 + Math.random() * 7) * k, r: Math.random() * 6, vr: (Math.random() - .5) * .4, c: cols[Math.random() * cols.length | 0] }));
  const t0 = performance.now();
  (function f(t) {
    const e = t - t0; ctx.clearRect(0, 0, W, H);
    P.forEach(p => { p.vy += .45 * k; p.x += p.vx; p.y += p.vy; p.r += p.vr; ctx.save(); ctx.globalAlpha = Math.max(0, 1 - e / 1900); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); });
    if (e < 1900) requestAnimationFrame(f); else ctx.clearRect(0, 0, W, H);
  })(t0);
}
function hideSplash() {
  booting = false;
  const sp = $('#splash'); if (sp) { sp.classList.add('hide'); setTimeout(() => sp.remove(), 700); }
  if (animOn()) enterView();
}

function render() {
  if (CLOUD.enabled && !CLOUD.on && !S.localOnly) { $('#nav').innerHTML = ''; lastNav = ''; $('#app').innerHTML = authHtml(); return; }
  if (lastNav !== tab) { $('#nav').innerHTML = TABS.map(([k, l]) => `<button class="${tab === k ? 'on' : ''}" data-go="${k}"><svg viewBox="0 0 24 24">${ICONS[k]}</svg>${l}</button>`).join(''); lastNav = tab; }
  const key = sess ? sess.type + ':' + (sess.type === 'lesson' ? (sess.i < sess.l.cards.length ? 'r' + sess.i : 'q' + sess.qi) : (sess.qi ?? sess.i ?? '')) : tab;
  const enter = key !== lastKey; lastKey = key;
  const app = $('#app');
  app.innerHTML = (sess || tab === 'settings' ? '' : `<button class="avatar" data-go="settings" aria-label="Профиль и настройки">${esc(initial())}</button>`) + (sess ? views[sess.type]() : views[tab]());
  if (!sess && tab === 'news') loadNews();
  if (!enter) app.classList.remove('enter'); else if (!booting && animOn()) enterView();
  T.onRender();
}

// ---------- экраны ----------
views.today = () => {
  const t = today(), n = t.steps.length, pct = n / STEPS.length, L = level(), h = new Date().getHours();
  const hello = h < 12 ? 'Доброе утро' : h < 18 ? 'Добрый день' : 'Добрый вечер';
  const C = 2 * Math.PI * 44;
  const days = []; for (let i = 41; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); const x = S.days[dkey(d)]; days.push(x ? Math.min(3, x.steps.length) : 0); }
  const goal = S.goals.find(g => !g.done);
  const late = (!allDone() || appsToday() < DAILY_APPS) && new Date().toTimeString().slice(0, 5) >= S.remind;
  return `
  <div class="row sp"><div><div class="tag">IB Daily</div><h1>${hello}${S.name ? ', ' + esc(S.name) : ''}</h1><p class="sub">15 минут в день — путь в Investment Banking</p></div></div>
  <div class="row" style="margin-top:14px;gap:8px"><span class="pill"><span class="flame">🔥</span> <span data-count="${streak()}">${streak()}</span> дн.</span><span class="pill gold">★ <span data-count="${S.xp}">${S.xp}</span> XP</span><span class="pill">${L.name}</span></div>
  ${late ? `<div class="card banner"><b>⏰ Время действовать</b><p class="sub" style="color:var(--mute)">${!allDone() ? `Шагов обучения: ${STEPS.length - n}. ` : ''}${appsToday() < DAILY_APPS ? `Заявок осталось: ${DAILY_APPS - appsToday()}.` : ''}</p></div>` : ''}
  <div class="card"><div class="row"><div class="ring"><svg width="104" height="104" viewBox="0 0 104 104" style="--circ:${C}"><circle class="tr" cx="52" cy="52" r="44"/><circle class="fg" cx="52" cy="52" r="44" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct)}"/></svg><div class="c"><b>${n}/${STEPS.length}</b></div></div>
  <div><h2 style="margin:0">План на сегодня</h2><p class="sub">${allDone() ? 'Готово. Увидимся завтра.' : 'Заверши три шага, чтобы продлить серию.'}</p></div></div>
  ${STEPS.map(s => `<div class="step ${done(s.id) ? 'done' : ''}" data-start="${s.id}"><div class="ic">${s.ic}</div><div><div class="t">${s.t}</div><div class="small mute">${s.d} · +${s.xp} XP</div></div><div class="chk">${done(s.id) ? '✓' : ''}</div></div>`).join('')}</div>
  ${evToday()}
  ${coachCard()}
  <div class="card" data-go="jobs" style="cursor:pointer"><div class="row sp"><div><div class="tag">Заявки сегодня</div><div style="font-size:17px;font-weight:600;margin-top:2px">${appsToday()} из ${DAILY_APPS}</div></div><div class="dots">${Array.from({ length: DAILY_APPS }, (_, i) => `<i class="${i < appsToday() ? 'on' : ''}"></i>`).join('')}</div></div>${appsToday() < DAILY_APPS ? `<p class="small mute" style="margin:8px 0 0">Ещё ${DAILY_APPS - appsToday()} — ${JOBS.jobs.filter(j => jstat(j) === 'new').length} вакансий ждут. Открыть →</p>` : '<p class="small" style="margin:8px 0 0;color:var(--green)">Норма выполнена</p>'}</div>
  ${goal ? `<div class="card"><div class="tag">Цель из роадмапа</div><p style="margin:6px 0 0;font-size:16px">${esc(goal.t)}</p></div>` : ''}
  <div class="card"><div class="row sp"><h2 style="margin:0">Прогресс</h2><span class="small mute">Уровень ${L.n} · ${L.into}/200</span></div><div class="bar" style="margin-top:12px"><i style="width:${L.into / 2}%"></i></div>
  <div class="heat">${days.map(v => `<i class="${v ? 'l' + v : ''}"></i>`).join('')}</div><p class="small mute" style="margin:8px 0 0">Последние 6 недель</p></div>`;
};

function coachCard() {
  const w = T.weakest();
  if (!w) return '<div class="card"><div class="tag">Тренер</div><p style="margin:6px 0 0;line-height:1.5">Ответь на несколько задач, и я начну подбирать тренировки под твои слабые места.</p></div>';
  return `<div class="card"><div class="tag">Что подтянуть</div><div style="font-size:17px;font-weight:600;margin:4px 0">${TOPICS[w.k].name}: освоено ${w.k100}%</div><p class="small mute" style="margin:0">По ${w.n} ответам.${w.sp > 1.3 ? ' Ты в этой теме медленнее своей нормы.' : ''}</p><button class="btn ghost" data-start="drill-topic" data-topic="${w.k}">Тренировать 5 минут</button></div>`;
}
views.learn = () => `
  <div class="tag">Учёба</div><h1>Концепции</h1><p class="sub">${S.lessons.length} из ${LESSONS.length} уроков пройдено · ${DRILLS.length} задач · ${CARDS.length} карточек</p>${S.lessons.length >= LESSONS.length ? '<div class="card banner"><b>Все уроки пройдены</b><p class="sub" style="color:var(--mute)">Дальше идёт повторение. Новые уроки добавим позже.</p></div>' : ''}
  <div class="grid2" style="margin-top:14px"><button class="btn ghost" style="margin:0" data-start="drill-free">🧮 Задачи</button><button class="btn ghost" style="margin:0" data-start="cards">🃏 Интервью</button></div>
  <div class="card"><div class="tag" style="margin-bottom:8px">Цветовая карта терминов</div><div class="legend">${Object.entries(CATS).map(([k, c]) => `<span class="k k-${k}">${c.ic} ${c.name}</span>`).join('')}</div><p class="small mute" style="margin:10px 0 0">Один цвет — одна группа понятий. Запоминай по цвету.</p></div>
  <div class="card" style="padding:6px 16px">${LESSONS.map(l => `<div class="goal" data-lesson="${l.id}" style="cursor:pointer;align-items:center;border-left:3px solid var(--c-${l.cat || LESSON_CAT[l.id] || 'val'});padding-left:12px"><div class="chk" style="${S.lessons.includes(l.id) ? 'background:var(--green);border-color:var(--green);color:var(--bg)' : ''}">${S.lessons.includes(l.id) ? '✓' : ''}</div><div><div class="tag">${l.tag}</div><div style="font-weight:600">${l.title}</div></div></div>`).join('')}</div>`;

views.news = () => `
  <div class="tag">Рынок</div><h1>Новости и данные</h1><p class="sub" id="newsmeta"></p>
  <div class="card"><div class="ticker" id="fx"><span class="small mute">Загрузка…</span></div></div>
  <div class="card" id="newslist"><span class="small mute">Загрузка…</span></div>
  <button class="btn ghost" data-act="newsdone" ${done('news') ? 'disabled' : ''}>${done('news') ? '✓ Шаг засчитан' : 'Я прочитал(а) — засчитать шаг'}</button>
  <div class="card"><div class="tag">Подумай</div><p style="margin:6px 0 0;line-height:1.5">Выбери одну новость: как она влияет на оценку компании — через денежные потоки, WACC или мультипликатор?</p></div>`;

const EV_TYPES = { test: 'Онлайн-тест', interview: 'Интервью', ac: 'Assessment center', exam: 'Экзамен', other: 'Другое' };
const newDraft = () => ({ jobId: '', type: 'test', date: '', time: '10:00', title: '', topics: [], prep: true });
let evDraft = newDraft();
const evSuggest = (jobId, type) => {
  const j = JOBS.jobs.find(x => x.id === jobId), base = (j && CAT_TOPICS[j.category]) || ['acct', 'mult', 'dcf'];
  return [...new Set([...base, ...(type === 'interview' || type === 'ac' ? ['career'] : [])])];
};
const days = n => n + (n % 10 === 1 && n % 100 !== 11 ? ' день' : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? ' дня' : ' дней');
const when = n => n === 0 ? 'сегодня' : n === 1 ? 'завтра' : 'через ' + days(n);
// ---------- запросы к тренеру (план подготовки, отчёт по компании) ----------
const REQ_TYPES = { prep: 'План подготовки к событию', report: 'Отчёт по компании' };
const REQ_ST = { queued: 'В очереди', sent: 'Отправлено', done: 'Готово' };
let RESULTS = (() => { try { return JSON.parse(localStorage.getItem('ibdaily.results')) || { items: [] }; } catch (e) { return { items: [] }; } })();
const resFor = id => RESULTS.items.find(x => x.id === id);
const reqStatus = r => resFor(r.id) ? 'done' : r.sent ? 'sent' : 'queued';
// удаление запроса: локально сразу, в облаке с повтором, если сети нет
function flushReqDel() {
  if (!CLOUD.on || !S.reqDel.length) return;
  const ids = S.reqDel.slice();
  CLOUD.deleteRequests(ids).then(() => { S.reqDel = S.reqDel.filter(x => !ids.includes(x)); rawSave(); }).catch(() => {});
}
function dropRequests(test) {
  const gone = S.requests.filter(test);
  S.requests = S.requests.filter(r => !test(r));
  gone.forEach(r => { if (r.sent) S.reqDel.push(r.id); });
  flushReqDel();
}
function addRequest(type, j, ev) {
  const dup = S.requests.find(r => r.type === type && (type === 'report' ? r.company === j.company : r.eventId === ev.id));
  if (dup) return dup;
  const r = { id: (type === 'report' ? 'r' : 'p') + Date.now().toString(36), type, jobId: j ? j.id : '', company: j ? j.company : ev.title, title: j ? j.title : '', eventId: ev ? ev.id : '', created: Date.now() };
  S.requests.push(r); save(); T.track('request', { type, co: r.company });
  return r;
}
async function loadResults() {
  try {
    const d = await loadDoc('results', 'results.json'); if (!d || !d.items) return;
    const known = new Set(RESULTS.items.map(x => x.id)), fresh = d.items.filter(x => !known.has(x.id));
    RESULTS = d; localStorage.setItem('ibdaily.results', JSON.stringify(d));
    if (fresh.length) { toast('Готово: ' + fresh[0].title + (fresh.length > 1 ? ' и ещё ' + (fresh.length - 1) : '')); T.loadPersonal(); }
    if (!sess && ['goals', 'jobs', 'today'].includes(tab)) render();
  } catch (e) {}
}
const pdfBase = p => String(p).split('/').pop();
const pdfLink = (p, cls, label, style) => CLOUD.on
  ? `<button class="${cls}" style="${style || ''}" data-act="openpdf" data-f="${esc(pdfBase(p))}">${label}</button>`
  : `<a class="${cls}" style="${style || ''}" href="${esc(p)}" target="_blank" rel="noopener">${label}</a>`;
function reportBtn(j) {
  const r = S.requests.find(x => x.type === 'report' && x.company === j.company), res = r && resFor(r.id);
  if (res && res.pdf) return pdfLink(res.pdf, 'btn', '📄 Отчёт по компании (PDF) ↗', 'display:block;width:100%;text-align:center;text-decoration:none;margin:0 0 8px');
  if (r) return `<div class="small mute" style="margin:0 0 8px">📄 Отчёт по компании: ${REQ_ST[reqStatus(r)].toLowerCase()}</div>`;
  return `<button class="btn ghost" style="margin:0 0 8px" data-act="repreq" data-id="${j.id}">📄 Запросить отчёт по компании</button>`;
}
function planFor(e) { const r = S.requests.find(x => x.type === 'prep' && x.eventId === e.id), res = r && resFor(r.id); return { r, plan: res && res.plan }; }
function planHtml(e) {
  const { r, plan } = planFor(e);
  if (!r) return `<button class="st" style="margin-top:6px" data-act="evprepreq" data-id="${e.id}">Запросить план у тренера</button>`;
  if (!plan) return `<div class="small mute" style="margin-top:4px">План подготовки: ${REQ_ST[reqStatus(r)].toLowerCase()}</div>`;
  const n = T.daysLeft(e.date), cur = plan.steps.filter(s => s.d >= n).sort((a, b) => a.d - b.d)[0];
  return `<div class="plan"><div class="tag">План подготовки</div>${plan.summary ? `<p class="small" style="margin:4px 0 6px">${esc(plan.summary)}</p>` : ''}${plan.steps.slice().sort((a, b) => b.d - a.d).map(s => `<div class="pl ${s === cur ? 'now' : ''}"><b>${s.d === 0 ? 'В день события' : 'За ' + days(s.d)}</b> ${esc(s.what)}</div>`).join('')}</div>`;
}
function requestsCard() {
  if (!S.requests.length) return '';
  const pend = S.requests.filter(r => reqStatus(r) === 'queued').length;
  return `<div class="card"><h2>Запросы к тренеру</h2>${S.requests.slice().reverse().map(r => { const st = reqStatus(r), res = resFor(r.id); return `<div class="goal" style="align-items:center"><div style="flex:1;min-width:0"><div style="font-weight:600;line-height:1.3">${REQ_TYPES[r.type]}</div><div class="small mute">${esc(r.company)}</div>${res && res.summary ? `<div class="small" style="margin-top:4px">${esc(res.summary)}</div>` : ''}</div><span class="pill">${REQ_ST[st]}</span>${res && res.pdf ? pdfLink(res.pdf, 'pill', 'PDF ↗') : ''}<button data-act="reqdel" data-id="${r.id}" style="background:none;color:var(--mute);font-size:18px" title="Удалить запрос">×</button></div>`; }).join('')}
  ${pend ? `<p class="small mute" style="margin:10px 0 0;line-height:1.5">${CLOUD.on ? 'Запрос уйдёт в облако. Тренер обработает его, когда на компьютере запущена команда /ib-coach в Claude Code.' : 'Тренер читает запросы, когда ты передаёшь ему файл. Нажми кнопку, отправь файл на компьютер и запусти там команду /ib-coach в Claude Code.'}</p><button class="btn" data-act="sendreq">Отправить тренеру (${pend})</button>` : ''}</div>`;
}
function eventsCard() {
  const list = T.upcoming(), d = evDraft;
  const jobs = JOBS.jobs.filter(j => ['applied', 'exam'].includes(jstat(j))).sort((a, b) => a.company.localeCompare(b.company));
  return `<div class="card" id="evform"><h2>Тесты, интервью, экзамены</h2>
  ${list.length ? list.map(e => { const n = T.daysLeft(e.date); return `<div class="goal" style="align-items:center"><div style="flex:1;min-width:0"><div style="font-weight:600;line-height:1.3">${esc(e.title)}</div><div class="small mute">${EV_TYPES[e.type] || ''} · ${new Date(e.date + 'T00:00:00').toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })} · <b style="color:${n <= 3 ? 'var(--c-val)' : 'inherit'}">${when(n)}</b></div><div class="small mute">${e.topics.map(k => TOPICS[k].name).join(', ')}</div>${planHtml(e)}</div><button class="pill" data-act="evics" data-id="${e.id}" title="В календарь">📅</button><button data-act="evdel" data-id="${e.id}" style="background:none;color:var(--mute);font-size:18px">×</button></div>`; }).join('') : '<p class="small mute" style="margin:0 0 8px">Событий пока нет. Добавь дату, и за 3 недели до неё темы подготовки получат приоритет в твоих тренировках.</p>'}
  <div style="margin-top:14px"><div class="tag" style="margin-bottom:6px">Добавить</div>
  <select id="ev-job"><option value="">Без привязки к вакансии</option>${jobs.map(j => `<option value="${j.id}" ${d.jobId === j.id ? 'selected' : ''}>${esc(j.company)}: ${esc(j.title.slice(0, 40))}</option>`).join('')}</select>
  <input type="text" id="ev-title" placeholder="Название (например, тест PHOENIX)" value="${esc(d.title)}" style="margin-top:8px">
  <div class="grid2" style="margin-top:8px"><select id="ev-type">${Object.entries(EV_TYPES).map(([k, v]) => `<option value="${k}" ${d.type === k ? 'selected' : ''}>${v}</option>`).join('')}</select><input type="date" id="ev-date" value="${d.date}"></div>
  <input type="time" id="ev-time" value="${d.time}" style="margin-top:8px">
  <p class="small mute" style="margin:10px 0 6px">Что готовить</p><div class="sts">${Object.entries(TOPICS).map(([k, c]) => `<button class="st ${d.topics.includes(k) ? 'on' : ''}" data-evtopic="${k}">${c.name}</button>`).join('')}</div>
  <label class="chkrow"><input type="checkbox" id="ev-prep" ${d.prep ? 'checked' : ''}> Попросить тренера составить план и персональные задачи</label>
  <button class="btn" data-act="evadd">Добавить в календарь подготовки</button></div></div>`;
}
function evToday() {
  const e = T.upcoming().find(x => T.daysLeft(x.date) <= 30); if (!e) return '';
  const n = T.daysLeft(e.date), { plan } = planFor(e), cur = plan && plan.steps.filter(s => s.d >= n).sort((a, b) => a.d - b.d)[0];
  return `<div class="card banner"><div class="tag">Ближайшее событие</div><div style="font-size:17px;font-weight:600;margin:4px 0">${esc(e.title)}</div><p class="sub" style="color:var(--mute);margin:0">${EV_TYPES[e.type] || ''} ${when(n)}. Фокус: ${e.topics.map(k => TOPICS[k].name).join(', ')}.</p>${cur ? `<p class="small" style="margin:6px 0 0"><b>По плану:</b> ${esc(cur.what)}</p>` : ''}<button class="btn ghost" data-start="drill-event" data-id="${e.id}">Подготовиться: 5 задач</button></div>`;
}
function icsEvent(e) {
  const p = n => String(n).padStart(2, '0'), [h, m] = (e.time || '10:00').split(':'), dt = e.date.replace(/-/g, '') + 'T' + p(h) + p(m) + '00';
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//IB Daily//RU', 'BEGIN:VEVENT', 'UID:ibdaily-ev-' + e.id + '@local', 'DTSTAMP:' + dt, 'DTSTART:' + dt, 'DURATION:PT1H', 'SUMMARY:' + e.title,
    'BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', 'DESCRIPTION:Завтра: ' + e.title, 'END:VALARM', 'BEGIN:VALARM', 'TRIGGER:-PT1H', 'ACTION:DISPLAY', 'DESCRIPTION:Через час: ' + e.title, 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  location.href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics);
}
const SEC = { today: 'Сегодня', learn: 'Учёба', lesson: 'Уроки', drill: 'Задачи', cards: 'Карточки', jobs: 'Вакансии', news: 'Новости', goals: 'Прогресс' };
function insights() {
  const rows = T.topicRows(), rec = T.recurring(), bh = T.bestHour(), tw = Object.entries(T.timeByWeek()).sort((a, b) => b[1] - a[1]);
  const col = k => k < 0.4 ? 'var(--red)' : k < 0.7 ? 'var(--c-val)' : 'var(--green)';
  const sys = T.systemic();
  return `${sys.length ? `<div class="card"><h2>Твои типичные ошибки</h2>${sys.map(r => `<div style="margin:12px 0 0"><div style="font-weight:600">${MISC[r.c].t}</div><div class="small mute">Ошибся(лась) ${r.bad} из ${r.seen} раз, когда встречалась эта ловушка</div><div class="small" style="margin-top:4px">${MISC[r.c].tip}</div><button class="st" style="margin-top:8px" data-start="drill-misc" data-code="${r.c}">Потренировать 5 задач</button></div>`).join('')}</div>` : ''}
  <div class="card"><h2>Карта знаний</h2>${rows.map(r => `<div style="margin:10px 0 0"><div class="row sp"><span>${r.name}</span><span class="small mute">${!r.n ? 'нет данных' : r.n < 3 ? 'мало данных' : Math.round(r.know * 100) + '%'}</span></div><div class="bar" style="margin:4px 0 0"><i style="width:${r.n >= 3 ? Math.round(r.know * 100) : 0}%;background:${col(r.know)}"></i></div>${r.n >= 3 && r.sp > 1.3 ? '<span class="small mute">⏱ медленнее твоей нормы</span>' : ''}</div>`).join('')}
  <p class="small mute" style="margin:12px 0 0">Оценка осторожная: пока ответов мало, показываем «мало данных».</p></div>
  ${rec.length ? `<div class="card"><h2>Повторяющиеся ошибки</h2>${rec.map(r => `<div style="margin:10px 0 0"><div class="small mute">${TOPICS[ITEMS[r.id].topic].name} · ${r.c} раза</div><div style="font-weight:500;margin:2px 0">${hl(ITEMS[r.id].q)}</div><div class="small">Ты выбирал(а): <b>${esc(r.pick)}</b></div>${ITEMS[r.id].e ? `<div class="explain">${hl(ITEMS[r.id].e)}</div>` : ''}</div>`).join('')}</div>` : ''}
  <div class="card"><h2>Привычки</h2>${tw.length ? `<p class="small" style="margin:0 0 6px">За 7 дней: ${tw.map(([k, v]) => `${SEC[k] || k} ${Math.max(1, Math.round(v / 60))} мин`).join(' · ')}</p>` : '<p class="small mute" style="margin:0">Пока нет данных.</p>'}
  ${bh ? `<p class="small" style="margin:0">Лучше всего отвечаешь около ${bh.h}:00 (${Math.round(bh.p * 100)}% верно).</p>` : ''}</div>
  <div class="card"><h2>Мой фокус</h2><p class="sub" style="margin-bottom:10px">Отмеченные темы получают приоритет в подборе.</p><div class="sts">${Object.entries(TOPICS).map(([k, c]) => `<button class="st ${S.focus.includes(k) ? 'on' : ''}" data-focus="${k}">${c.name}</button>`).join('')}</div></div>`;
}
views.goals = () => {
  const L = level();
  return `<div class="tag">Прогресс</div><h1>Мой путь в IB</h1><p class="sub">Phase 0: стажировка Big4 TS / M&amp;A, CFA L1, нетворкинг</p>
  <div class="grid2" style="margin-top:14px"><div class="stat"><span class="small mute">Серия</span><b data-count="${streak()}">${streak()}</b></div><div class="stat"><span class="small mute">Лучшая серия</span><b data-count="${Math.max(S.best, streak())}">${Math.max(S.best, streak())}</b></div><div class="stat"><span class="small mute">Всего XP</span><b data-count="${S.xp}">${S.xp}</b></div><div class="stat"><span class="small mute">Уровень</span><b style="font-size:19px">${L.name}</b></div></div>
  ${eventsCard()}
  ${requestsCard()}
  ${insights()}
  <div class="card"><h2>Чек-лист</h2>${S.goals.map(g => `<div class="goal ${g.done ? 'done' : ''}"><div class="chk" data-goal="${g.id}">${g.done ? '✓' : ''}</div><span style="flex:1">${esc(g.t)}</span><button data-del="${g.id}" style="background:none;color:var(--mute);font-size:18px">×</button></div>`).join('')}
  <div class="row" style="margin-top:12px"><input type="text" id="newgoal" placeholder="Новая цель"><button class="pill" data-act="addgoal" style="flex:none">Добавить</button></div></div>
`;
};

views.settings = () => {
  const L = level(), cur = S.theme || savedTheme() || 'paper';
  const sw = t => t.id === 'auto' ? '<span class="sw auto"><i style="background:#8884"></i></span>' : `<span class="sw" style="background:${t.bg}"><i style="background:${t.ac}"></i>${t.c.map(c => `<b style="background:${c}"></b>`).join('')}</span>`;
  const stat = (l, v, n) => `<div class="stat"><span class="small mute">${l}</span><b ${n ? `data-count="${v}"` : 'style="font-size:17px"'}>${v}</b></div>`;
  return `<div class="row"><button class="pill" data-act="back">‹ Назад</button></div>
  <div class="tag" style="margin-top:14px">Профиль</div><h1>Настройки</h1>
  <div class="card"><div class="row"><div class="avatar big">${esc(initial())}</div><div style="flex:1;min-width:0"><div style="font-weight:600;font-size:17px">${esc(S.name || 'Без имени')}</div><div class="small mute">${CLOUD.on ? esc(CLOUD.email) : 'Данные только на этом телефоне'}</div></div></div>
  <input type="text" id="nm" placeholder="Как к тебе обращаться" value="${esc(S.name || '')}" style="margin-top:12px">
  <div class="grid2" style="margin-top:12px">${stat('Уровень', L.name)}${stat('Опыт', S.xp, 1)}${stat('Серия', streak(), 1)}${stat('Лучшая серия', Math.max(S.best, streak()), 1)}</div></div>
  <div class="card"><h2>Тема оформления</h2><div class="themes">${THEME_LIST.map(t => `<button class="theme ${cur === t.id ? 'on' : ''}" data-th="${t.id}">${sw(t)}${t.name}</button>`).join('')}</div>
  <p class="small mute" style="margin:10px 0 0;line-height:1.5">«Авто» следует за темой iPhone. На тёмных темах верхняя полоска iOS с часами остаётся светлой: это ограничение системы для приложений на главном экране.</p></div>
  <div class="card"><label class="switch"><div><b>Анимации</b><div class="small mute">Переходы, заставка, конфетти</div></div><input type="checkbox" class="tg" id="anim" ${S.anim === false ? '' : 'checked'}></label></div>
  <div class="card"><h2>Напоминание</h2><p class="sub" style="margin-bottom:10px">Добавь ежедневное напоминание в Календарь iPhone. Оно будет приходить даже когда приложение закрыто.</p>
  <input type="time" id="rt" value="${S.remind}"><button class="btn" data-act="ics">📅 Добавить в Календарь</button></div>
  <div class="card"><h2>Облако и данные</h2>
  <p class="small" style="margin:0 0 6px"><b>${CLOUD.on ? 'Облако: ' + esc(CLOUD.email) : CLOUD.enabled ? 'Облако отключено' : 'Облако не настроено'}</b>${CLOUD.on ? ' · ' + (CLOUD.info.err ? '<span style="color:var(--red)">ошибка синхронизации</span>' : CLOUD.info.at ? 'синхронизировано ' + new Date(CLOUD.info.at).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) : 'ожидание') : ''}</p>
  ${CLOUD.on ? '<button class="btn ghost" data-act="syncnow">Синхронизировать сейчас</button><button class="btn ghost" data-act="logout">Выйти из облака</button>' : CLOUD.enabled ? '<button class="btn ghost" data-act="gologin">Войти в облако</button>' : ''}
  <button class="btn ghost" data-act="export">Выгрузить данные для тренера</button><button class="btn ghost" data-act="clearlog">Удалить журнал событий</button>
  <p class="small mute" style="line-height:1.5;margin:12px 0 0">Записывается: время и результат каждого ответа, выбранный вариант, время в разделах, статусы заявок. Данные хранятся на телефоне и в твоём облаке и больше нигде.</p></div>
  <button class="btn ghost" data-act="reset" style="margin-bottom:12px">Сбросить прогресс</button>
  <p class="small mute" style="text-align:center;margin-bottom:24px">IB Daily</p>`;
};

// ---------- сессии ----------
function startLesson(id) {
  const l = LESSONS.find(x => x.id === id);
  sess = { type: 'lesson', l, i: 0, qi: 0, ok: 0, picked: null }; render();
}
views.lesson = () => {
  const s = sess, l = s.l, total = l.cards.length + l.quiz.length, pos = s.i < l.cards.length ? s.i : l.cards.length + s.qi;
  const head = `<div class="row sp"><button class="pill" data-act="exit">✕</button><span class="small mute">${l.title}</span></div><div class="bar" style="margin-top:14px"><i style="width:${pos / total * 100}%"></i></div>`;
  if (s.i < l.cards.length) return head + `<div class="card"><div class="lesson-card"><div>${hl(l.cards[s.i])}</div></div></div><button class="btn" data-act="lnext">Дальше</button>`;
  if (s.qi < l.quiz.length) return head + quizHtml(l.quiz[s.qi], s, 'lans', 'lq');
  const full = s.ok === l.quiz.length;
  return head + `<div class="card" style="text-align:center"><h2>Урок пройден</h2><p class="sub">Правильных ответов: ${s.ok} из ${l.quiz.length}</p></div><button class="btn" data-act="lfin">Завершить</button>`;
};
function quizHtml(q, s, act, nextAct) {
  const o = s.opts || (s.opts = shuffle(q.o.map((t, i) => ({ t, i }))));
  const p = s.picked, pend = s.pend, why = s.why && s.why[s.qi];
  return `<div class="card">${why ? `<div class="why">${esc(why)}</div>` : ''}<h2>${hl(q.q)}</h2>${o.map((x, k) => `<button class="opt ${p != null ? (x.i === q.a ? 'ok' : k === p ? 'bad' : '') : pend === k ? 'sel' : ''}" data-act="${act}" data-k="${k}" ${p != null || pend != null ? 'disabled' : ''}>${hl(x.t)}</button>`).join('')}
  ${pend != null ? `<div style="margin-top:14px"><span class="small mute">Насколько ты уверен(а) в ответе?</span><div class="grid2"><button class="btn ghost" style="margin:6px 0 0" data-act="conf" data-v="guess">Угадываю</button><button class="btn" style="margin:6px 0 0" data-act="conf" data-v="sure">Уверен(а)</button></div></div>` : ''}
  ${p != null ? `<div class="explain">${hl(q.e)}${diag(q, o[p])}</div>` : ''}</div>${p != null ? `<button class="btn" data-act="${nextAct}">Дальше</button>` : ''}`;
}
function diag(q, opt) {
  const m = opt.i !== q.a && q.mis && MISC[q.mis[opt.t]];
  return m ? `<div class="diag"><b>Вероятная причина:</b> ${m.t}.<br><span class="mute">${m.tip}</span></div>` : '';
}
function answerQ(kind, k, conf, ms) {
  const s = sess, q = kind === 'lans' ? s.l.quiz[s.qi] : s.qs[s.qi];
  s.picked = k; s.pend = null;
  const right = s.opts[k].i === q.a, text = s.opts[k].t;
  if (right) s.ok++;
  T.record(q.id, right, ms, { pick: text, conf });
  T.track('question', { id: q.id, topic: q.topic, skill: q.skill, ok: right, ms, pick: text, conf, misc: !right && q.mis ? q.mis[text] : null, src: kind === 'lans' ? 'lesson' : s.daily ? 'daily' : 'free', why: s.why && s.why[s.qi] });
  render();
}

function startDrill(daily, topic, misc, whyText, evId) {
  const p = T.pick('drill', 5, topic, misc, whyText, evId);
  sess = { type: 'drill', qs: p.map(e => e.x), why: p.map(e => e.why), qi: 0, ok: 0, picked: null, opts: null, daily, topic: topic || misc }; render();
}
views.drill = () => {
  const s = sess, head = `<div class="row sp"><button class="pill" data-act="exit">✕</button><span class="small mute">Задача ${Math.min(s.qi + 1, s.qs.length)} из ${s.qs.length}</span></div><div class="bar" style="margin-top:14px"><i style="width:${s.qi / s.qs.length * 100}%"></i></div>`;
  if (s.qi < s.qs.length) return head + quizHtml(s.qs[s.qi], s, 'dans', 'dq');
  return head + `<div class="card" style="text-align:center"><h2>${s.ok} из ${s.qs.length}</h2><p class="sub">${s.ok >= 4 ? 'Отличная работа.' : 'Ошибки мы вернём в следующих сессиях.'}</p></div><button class="btn" data-act="dfin">Завершить</button>`;
};

function startCards() {
  const p = T.pick('card', 8);
  sess = { type: 'cards', q: p.map(e => e.x), why: p.map(e => e.why), i: 0, flip: false }; render();
}
views.cards = () => {
  const s = sess, head = `<div class="row sp"><button class="pill" data-act="exit">✕</button><span class="small mute">Карточка ${Math.min(s.i + 1, s.q.length)} из ${s.q.length}</span></div><div class="bar" style="margin-top:14px"><i style="width:${s.i / s.q.length * 100}%"></i></div>`;
  if (s.i >= s.q.length) return head + `<div class="card" style="text-align:center"><h2>Серия окончена</h2><p class="sub">Карточки с ошибками вернутся раньше.</p></div><button class="btn" data-act="exit">Готово</button>`;
  const c = s.q[s.i];
  return head + `<div class="card flash"><div class="in ${s.flip ? 'flip' : ''}" data-act="flip">${s.flip ? hl(c.a) : '<div><div class="tag" style="margin-bottom:10px">' + esc(s.why[s.i]) + '</div>' + hl(c.q) + '<div class="small mute" style="margin-top:14px;font-family:var(--sans)">нажми, чтобы увидеть ответ</div></div>'}</div></div>
  ${s.flip ? `<div class="grid2"><button class="btn ghost" data-act="cno">Повторить</button><button class="btn" data-act="cyes">Знал(а)</button></div>` : ''}`;
};

// ---------- новости и курсы ----------
async function loadNews() {
  const meta = $('#newsmeta'), list = $('#newslist'), fx = $('#fx');
  const cached = JSON.parse(localStorage.getItem('ibdaily.news') || 'null');
  const showNews = c => {
    if (!list) return;
    list.innerHTML = c.items.map(a => `<a class="news" href="${esc(a.link)}" target="_blank" rel="noopener" data-read="1"><span class="small mute">${esc(a.src)} · ${new Date(a.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}</span><b>${esc(a.title)}</b></a>`).join('') || '<span class="small mute">Нет данных</span>';
    meta.innerHTML = 'Обновлено ' + new Date(c.ts).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  };
  if (cached) showNews(cached);
  try {
    const res = await Promise.all(FEEDS.map(u => fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(u)).then(r => r.json())));
    const items = res.flatMap(r => (r.items || []).slice(0, 5).map(i => ({ title: i.title, link: i.link, date: i.pubDate.replace(' ', 'T') + 'Z', src: /cnbc/i.test(r.feed.link || r.feed.title) ? 'CNBC' : 'MarketWatch' })));
    items.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (items.length) { const c = { ts: Date.now(), items }; localStorage.setItem('ibdaily.news', JSON.stringify(c)); showNews(c); }
  } catch (e) { if (meta) meta.innerHTML = '<span class="offline">Офлайн</span>' + (cached ? ' · показаны сохранённые новости' : ' · нет сохранённых новостей'); }
  try {
    const r = await fetch('https://api.frankfurter.dev/v1/latest?base=EUR&symbols=USD,GBP,CHF').then(r => r.json());
    localStorage.setItem('ibdaily.fx', JSON.stringify(r)); showFx(r);
  } catch (e) { const c = JSON.parse(localStorage.getItem('ibdaily.fx') || 'null'); if (c) showFx(c, true); else if (fx) fx.innerHTML = '<span class="small mute">Курсы недоступны офлайн</span>'; }
}
function showFx(r, old) {
  const fx = $('#fx'); if (!fx) return;
  fx.innerHTML = Object.entries(r.rates).map(([k, v]) => `<div><span class="small mute">EUR/${k}</span><b>${v.toFixed(4)}</b></div>`).join('') + `<div><span class="small mute">${old ? 'сохранено' : 'ECB'}</span><b style="font-size:13px">${r.date}</b></div>`;
}

// ---------- ICS-напоминание ----------
function icsReminder() {
  const [h, m] = (($('#rt') || {}).value || S.remind).split(':'); S.remind = h + ':' + m; save();
  const d = new Date(); const p = n => String(n).padStart(2, '0');
  const dt = d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + 'T' + h + m + '00';
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//IB Daily//RU', 'BEGIN:VEVENT', 'UID:ibdaily-' + Date.now() + '@local', 'DTSTAMP:' + dt, 'DTSTART:' + dt, 'DURATION:PT15M', 'RRULE:FREQ=DAILY',
    'SUMMARY:IB Daily: 15 минут к карьере в IB', 'DESCRIPTION:Концепция, задачи, новости. Продли серию.', 'BEGIN:VALARM', 'TRIGGER:PT0S', 'ACTION:DISPLAY', 'DESCRIPTION:IB Daily', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  location.href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics);
}

// ---------- события ----------
document.addEventListener('click', e => {
  const t = e.target.closest('[data-go],[data-start],[data-lesson],[data-act],[data-goal],[data-del],[data-read],[data-job],[data-st],[data-filter],[data-focus],[data-evtopic],[data-th]'); if (!t) return;
  const D = t.dataset;
  if (D.go) return go(D.go);
  if (D.th) { S.theme = D.th; save(); applyTheme(D.th, animOn()); return render(); }
  if (D.job) { jobOpen = jobOpen === D.job ? null : D.job; return render(); }
  if (D.st) { setStatus(D.id, D.st); return render(); }
  if (D.filter) { jobFilter = D.filter; jobOpen = null; return render(); }
  if (D.evtopic) { const a = evDraft.topics; evDraft.topics = a.includes(D.evtopic) ? a.filter(x => x !== D.evtopic) : [...a, D.evtopic]; return render(); }
  if (D.focus) { S.focus = S.focus.includes(D.focus) ? S.focus.filter(x => x !== D.focus) : [...S.focus, D.focus]; save(); return render(); }
  if (D.read) { T.track('news', { h: t.getAttribute('href') }); complete('news', 20); return; }
  if (D.lesson) return startLesson(D.lesson);
  if (D.goal) { const g = S.goals.find(x => x.id === D.goal); g.done = !g.done; save(); return render(); }
  if (D.del) { S.goals = S.goals.filter(x => x.id !== D.del); save(); return render(); }
  if (D.start) {
    if (D.start === 'lesson') { return startLesson(T.nextLesson().id); }
    if (D.start === 'drill') return startDrill(true);
    if (D.start === 'drill-free') return startDrill(false);
    if (D.start === 'drill-topic') return startDrill(false, D.topic);
    if (D.start === 'drill-misc') return startDrill(false, null, D.code, 'Тренировка: ' + MISC[D.code].t);
    if (D.start === 'drill-event') { const e = S.events.find(x => x.id === D.id); return startDrill(false, e.topics, null, 'Подготовка: ' + e.title, e.id); }
    if (D.start === 'cards') return startCards();
    if (D.start === 'news') return go('news');
  }
  const s = sess;
  switch (D.act) {
    case 'exit': return go(tab);
    case 'lnext': T.track('read', { lesson: s.l.id, i: s.i, ms: T.elapsed(), len: s.l.cards[s.i].length }); s.i++; return render();
    case 'lans': case 'dans':
      if (s.askConf) { s.pend = +D.k; s.tAns = T.elapsed(); return render(); }
      return answerQ(D.act, +D.k, null, T.elapsed());
    case 'conf': return answerQ(s.type === 'lesson' ? 'lans' : 'dans', s.pend, D.v, s.tAns);
    case 'lq': s.qi++; s.picked = null; s.opts = null; return render();
    case 'dq': s.qi++; s.picked = null; s.opts = null; return render();
    case 'lfin': { T.track('lesson', { id: s.l.id, ok: s.ok }); const first = !S.lessons.includes(s.l.id); if (first) S.lessons.push(s.l.id); save(); complete('lesson', first ? 30 : 10); return go('today'); }
    case 'dfin': T.track('drill_done', { ok: s.ok, n: s.qs.length, daily: !!s.daily, topic: s.topic || null }); if (s.daily) complete('drill', 10 + s.ok * 6); else addXp(s.ok * 4); return go(s.daily ? 'today' : 'learn');
    case 'flip': s.flip = true; s.flipMs = T.elapsed(); return render();
    case 'cyes': case 'cno': { const c = s.q[s.i], ok = D.act === 'cyes'; T.record(c.id, ok, s.flipMs, {}); T.track('card', { id: c.id, topic: c.topic, ok, flipMs: s.flipMs }); addXp(ok ? 3 : 1); s.i++; s.flip = false; return render(); }
    case 'newsdone': complete('news', 20); return render();
    case 'addgoal': { const i = $('#newgoal'); if (i.value.trim()) { S.goals.push({ id: 'g' + Date.now(), t: i.value.trim(), done: false }); save(); render(); } return; }
    case 'ics': return icsReminder();
    case 'export': return T.exportData();
    case 'back': return go(prevTab);
    case 'login': case 'signup': {
      const em = ($('#au-email').value || '').trim(), pw = $('#au-pass').value || '';
      authErr = '';
      if (!em || pw.length < 6) { authErr = 'Введи email и пароль от 6 символов'; return render(); }
      (D.act === 'login' ? CLOUD.signIn(em, pw) : CLOUD.signUp(em, pw)).then(() => CLOUD.pull()).then(() => boot()).catch(e => { authErr = RU_ERR[e.message] || e.message; render(); });
      return;
    }
    case 'localonly': S.localOnly = true; save(); return render();
    case 'gologin': S.localOnly = false; save(); return render();
    case 'logout': CLOUD.signOut(); S.localOnly = false; rawSave(); return render();
    case 'syncnow': CLOUD.flush().then(() => CLOUD.pull()).then(ch => { render(); if (ch) toast('Получены новые данные'); }); return;
    case 'openpdf': {
      toast('Открываю…');
      CLOUD.pdfUrl(D.f).then(async url => {
        const blob = await (await fetch(url)).blob(), a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.target = '_blank'; a.rel = 'noopener'; a.download = D.f; document.body.append(a); a.click(); a.remove();
      }).catch(() => toast('Не удалось открыть PDF'));
      return;
    }
    case 'repreq': { const j = JOBS.jobs.find(x => x.id === D.id); addRequest('report', j); toast('Запрос добавлен. Отправь его тренеру во вкладке «Прогресс»'); return render(); }
    case 'evprepreq': { const e = S.events.find(x => x.id === D.id); addRequest('prep', JOBS.jobs.find(x => x.id === e.jobId), e); return render(); }
    case 'sendreq': {
      const pend = S.requests.filter(r => reqStatus(r) === 'queued');
      const payload = { kind: 'ib-daily-requests', exported: new Date().toISOString(), learner: T.snapshot(), requests: pend.map(r => ({ ...r, job: JOBS.jobs.find(j => j.id === r.jobId) || null, event: S.events.find(e => e.id === r.eventId) || null })) };
      if (CLOUD.on) {
        const rows = payload.requests.map(r => ({ ...r, learner: payload.learner }));
        CLOUD.sendRequests(rows).then(() => { pend.forEach(r => { r.sent = Date.now(); }); save(); T.track('requests_sent', { n: pend.length, cloud: true }); toast('Отправлено тренеру'); render(); }).catch(() => toast('Нет связи, попробуй позже'));
        return;
      }
      T.shareFile('ib-daily-requests-' + dkey() + '.json', JSON.stringify(payload)).then(ok => { if (ok) { pend.forEach(r => { r.sent = Date.now(); }); save(); T.track('requests_sent', { n: pend.length }); render(); } });
      return;
    }
    case 'evjob': { const j = JOBS.jobs.find(x => x.id === D.id); evDraft = { ...newDraft(), jobId: j.id, title: j.company + ': ' + j.title.slice(0, 40), topics: evSuggest(j.id, 'test') }; go('goals'); const f = $('#evform'); if (f) f.scrollIntoView(); return; }
    case 'evdel': S.events = S.events.filter(x => x.id !== D.id); dropRequests(r => r.eventId === D.id); save(); return render();
    case 'reqdel': dropRequests(r => r.id === D.id); save(); return render();
    case 'evics': return icsEvent(S.events.find(x => x.id === D.id));
    case 'evadd': {
      const d = evDraft, j = JOBS.jobs.find(x => x.id === d.jobId), title = (d.title || '').trim() || (j ? j.company : '');
      if (!title) return toast('Укажи название');
      if (!d.date) return toast('Выбери дату');
      if (!d.topics.length) return toast('Отметь хотя бы одну тему');
      const ev = { id: 'e' + Date.now(), jobId: d.jobId, title, type: d.type, date: d.date, time: d.time, topics: d.topics }; S.events.push(ev); save();
      if (d.prep) addRequest('prep', j, ev);
      T.track('event_add', { type: d.type, date: d.date, topics: d.topics, job: d.jobId, cat: j && j.category });
      if (j && jstat(j) === 'applied') setStatus(j.id, 'exam');
      evDraft = newDraft();
      toast('Добавлено: ' + title + (j && jstat(j) === 'exam' ? ' · статус вакансии: тест / интервью' : '')); return render();
    }
    case 'clearlog': if (confirm('Удалить журнал событий? Статистика по темам останется.')) T.clearLog(); return;
    case 'reset': if (confirm('Удалить весь прогресс?')) { localStorage.removeItem(KEY); S = load(); save(); render(); } return;
  }
});

document.addEventListener('change', e => {
  const id = e.target.id;
  if (id === 'ev-job') { evDraft.jobId = e.target.value; const j = JOBS.jobs.find(x => x.id === evDraft.jobId); if (j) { evDraft.title = j.company + ': ' + j.title.slice(0, 40); evDraft.topics = evSuggest(j.id, evDraft.type); } render(); }
  else if (id === 'ev-type') { evDraft.type = e.target.value; if (evDraft.jobId) evDraft.topics = evSuggest(evDraft.jobId, evDraft.type); render(); }
  else if (id === 'ev-prep') evDraft.prep = e.target.checked;
  else if (id === 'anim') { S.anim = e.target.checked; save(); applyAnim(); if (S.anim) toast('Анимации включены'); }
  else if (id === 'ev-date') evDraft.date = e.target.value;
  else if (id === 'ev-time') evDraft.time = e.target.value;
});
document.addEventListener('input', e => {
  if (e.target.id === 'nm') { S.name = e.target.value; save(); }
  if (e.target.id === 'ev-title') evDraft.title = e.target.value; if (e.target.id === 'jq') { jobQuery = e.target.value; $('#joblist').innerHTML = jobsList(); } });
async function boot() {
  render();
  if (CLOUD.on) { try { if (await CLOUD.pull()) render(); } catch (e) {} }
  loadJobs(); loadResults(); T.loadPersonal(); T.track('open', { tab }); CLOUD.flush(); flushReqDel();
}
applyAnim();
if (S.theme && S.theme !== savedTheme()) applyTheme(S.theme);
boot();
setTimeout(hideSplash, animOn() ? 1000 : 0);
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) CLOUD.flush();
  else if (!sess) { render(); loadJobs(); loadResults(); if (CLOUD.on) CLOUD.pull().then(ch => { if (ch) render(); }).catch(() => {}); }
});
