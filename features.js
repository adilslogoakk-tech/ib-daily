'use strict';
// Режим собеседования, напоминания по заявкам (follow-up), недельный отчёт.
// Подключается до app.js; к его глобальным S, JOBS, sess, render, jstat, dkey, days, toast, addXp, celebrate обращается только при вызове.
const FX = (() => {
  const DAY = 864e5, FU_DAYS = 7, FU_MAX = 2, WEEK_APPS = 15;
  const dayN = d => Math.floor(Date.parse(d + 'T00:00:00Z') / DAY), todayN = () => dayN(dkey());
  const mmss = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  const shift = n => { const d = new Date(); d.setDate(d.getDate() + n); return dkey(d); };

  // ===================== режим собеседования =====================
  const C = 2 * Math.PI * 44;
  let tm = null;
  const iv = {
    // 5 вопросов: технические («Walk me through…») вперемешку с поведенческими
    start() {
      const all = T.pick('card', 14), tech = all.filter(e => e.x.topic !== 'career'), beh = all.filter(e => e.x.topic === 'career'), q = [];
      [0, 1, 2].forEach(i => { if (tech[i]) q.push(tech[i]); if (i < 2 && beh[i]) q.push(beh[i]); });
      all.forEach(e => { if (q.length < 5 && !q.includes(e)) q.push(e); });
      return { type: 'interview', q: q.slice(0, 5).map(e => e.x), i: 0, phase: 'ask', grades: [], times: [] };
    },
    target: c => c.topic === 'career' ? 120 : 90,
    begin() {
      const s = sess; if (!s || s.type !== 'interview' || s.phase !== 'ask' || s.i >= s.q.length) return;
      s.t0 = performance.now(); s.target = iv.target(s.q[s.i]);
      clearInterval(tm); tm = setInterval(iv.tick, 250); iv.tick();
    },
    stop() { clearInterval(tm); tm = null; },
    tick() {
      const s = sess; if (!s || s.type !== 'interview' || s.phase !== 'ask') return iv.stop();
      const el = document.getElementById('tmv'); if (!el) return;
      const sec = Math.floor((performance.now() - s.t0) / 1000), left = s.target - sec;
      el.textContent = (left < 0 ? '+' : '') + mmss(Math.abs(left)); el.classList.toggle('over', left < 0);
      const fg = document.getElementById('tmr'); if (fg) fg.style.strokeDashoffset = C * (1 - Math.min(1, sec / s.target));
    },
    show() { const s = sess; s.spoke = Math.round(performance.now() - s.t0); s.phase = 'answer'; iv.stop(); render(); },
    // g: 0 не смог, 1 частично, 2 уверенно. Частичный ответ засчитывается слабо, как «угадал»
    grade(g) {
      const s = sess, c = s.q[s.i];
      T.record(c.id, g >= 1, s.spoke, { conf: g === 1 ? 'guess' : null });
      T.track('interview', { id: c.id, topic: c.topic, g, ms: s.spoke, target: s.target });
      addXp([3, 6, 10][g]); s.grades.push(g); s.times.push(s.spoke); s.i++; s.phase = 'ask'; render();
      if (s.i < s.q.length) iv.begin(); else if (s.grades.filter(x => x === 2).length >= 4) setTimeout(celebrate, 200);
    },
    html() {
      const s = sess, N = s.q.length;
      const head = `<div class="row sp"><button class="pill" data-act="exit">✕</button><span class="small mute">Вопрос ${Math.min(s.i + 1, N)} из ${N}</span></div><div class="bar" style="margin-top:14px"><i style="width:${s.i / N * 100}%"></i></div>`;
      if (s.i >= N) {
        const g = s.grades, n = k => g.filter(x => x === k).length, avg = Math.round(s.times.reduce((a, b) => a + b, 0) / Math.max(1, s.times.length) / 1000);
        const weak = [...new Set(s.q.filter((_, i) => g[i] === 0).map(c => TOPICS[c.topic].name))];
        return head + `<div class="card" style="text-align:center"><h2>Итог</h2><p class="sub">Уверенно: ${n(2)} · Частично: ${n(1)} · Не смог(ла): ${n(0)}</p><p class="sub">Среднее время ответа: ${mmss(avg)}</p><p class="small" style="margin:12px 0 0">${weak.length ? 'Повтори: ' + esc(weak.join(', ')) : 'Хороший результат.'}</p></div><button class="btn" data-act="ivdone">Завершить</button>`;
      }
      const c = s.q[s.i], beh = c.topic === 'career';
      if (s.phase === 'ask') {
        const t = iv.target(c);
        return head + `<div class="card"><div class="tag">${beh ? 'Поведенческий вопрос' : 'Технический вопрос'}</div><h2 style="margin-top:6px;line-height:1.3">${hl(c.q)}</h2>
        <div class="row" style="margin-top:14px;gap:16px"><div class="ring"><svg width="104" height="104" viewBox="0 0 104 104" style="--circ:${C}"><circle class="tr" cx="52" cy="52" r="44"/><circle id="tmr" class="fg" cx="52" cy="52" r="44" stroke-dasharray="${C}" style="stroke-dashoffset:${C}"/></svg><div class="c"><b id="tmv">${mmss(t)}</b></div></div>
        <p class="small mute" style="line-height:1.5;margin:0">Ответь вслух, как на собеседовании. Цель: уложиться в ${mmss(t)}. ${beh ? 'Структура: ситуация, действие, результат.' : 'Структура: определение, шаги, вывод.'}</p></div></div>
        <button class="btn" data-act="ivshow">Показать эталонный ответ</button>`;
      }
      return head + `<div class="card"><div class="tag">Эталонный ответ</div><div style="font-size:16px;line-height:1.55;margin-top:8px">${hl(c.a)}</div><p class="small mute" style="margin:12px 0 0">Ты говорил(а): ${mmss(Math.round(s.spoke / 1000))} из ${mmss(s.target)}.</p><div class="lrow">${LIB.btn('card', c.id, 'Не понял, сохранить на потом')}</div></div>
      <p class="small mute" style="margin:14px 0 4px">Оцени честно: насколько ответ совпал с эталоном?</p>
      <div class="gr"><button class="g0" data-act="ivgrade" data-g="0">Не смог(ла)</button><button class="g1" data-act="ivgrade" data-g="1">Частично</button><button class="g2" data-act="ivgrade" data-g="2">Уверенно</button></div>`;
    },
  };

  // ===================== follow-up по заявкам =====================
  const fu = {
    open: null, lang: 'en',
    // заявки без ответа: прошло 7 дней после подачи (или после прошлого follow-up), не больше двух напоминаний
    due() {
      const out = [];
      for (const j of JOBS.jobs) {
        if (jstat(j) !== 'applied') continue;
        const o = S.apps[j.id]; if (!o || !o.ap || (o.fn || 0) >= FU_MAX) continue;
        const next = dayN(o.fu || o.ap) + FU_DAYS, snooze = o.sn ? dayN(o.sn) : 0, t = todayN();
        if (t >= next && t >= snooze) out.push({ j, days: t - dayN(o.ap), n: o.fn || 0 });
      }
      return out.sort((a, b) => b.days - a.days);
    },
    text(j, o) {
      const en = fu.lang === 'en', d = new Date(o.ap + 'T00:00:00').toLocaleDateString(en ? 'en-GB' : 'de-DE', { day: 'numeric', month: 'long' });
      const nm = S.name || (en ? '[Your name]' : '[Ihr Name]'), t = j.title, c = j.company;
      return en
        ? { subject: `Follow-up: ${t}`, body: `Dear Hiring Team at ${c},\n\nI applied for the ${t} position on ${d} and would like to follow up on the status of my application. I remain very interested in the role and would be glad to provide any additional information.\n\nThank you for your time.\n\nKind regards,\n${nm}` }
        : { subject: `Nachfrage zu meiner Bewerbung: ${t}`, body: `Sehr geehrtes Team von ${c},\n\nam ${d} habe ich mich auf die Stelle ${t} beworben und möchte mich nach dem Stand meiner Bewerbung erkundigen. Ich interessiere mich weiterhin sehr für die Position und stehe für Rückfragen gerne zur Verfügung.\n\nVielen Dank für Ihre Zeit.\n\nMit freundlichen Grüßen\n${nm}` };
    },
    // карточка на главном экране: что пора напомнить + шаблон письма
    html() {
      const list = fu.due(), j = fu.open && JOBS.jobs.find(x => x.id === fu.open), o = j && S.apps[j.id];
      if (!list.length && !(j && o && o.ap)) return '';
      let h = '<div class="card"><div class="tag">Follow-up по заявкам</div>';
      h += list.slice(0, 3).map(r => `<div class="goal" style="align-items:center"><div style="flex:1;min-width:0"><div style="font-weight:600;line-height:1.3">${esc(r.j.company)}</div><div class="small mute">${esc(r.j.title.slice(0, 48))}</div><div class="small">Без ответа ${days(r.days)}${r.n ? ' · напоминание уже было' : ''}</div></div><div style="display:flex;flex-direction:column;gap:6px"><button class="st on" data-act="fuopen" data-id="${r.j.id}">✉️ Письмо</button><button class="st" data-act="fusnooze" data-id="${r.j.id}">Позже</button></div></div>`).join('');
      if (list.length > 3) h += `<p class="small mute" style="margin:8px 0 0">И ещё ${list.length - 3}</p>`;
      if (j && o && o.ap) {
        const t = fu.text(j, o);
        h += `<div class="tpl"><div class="row sp"><b class="small">${esc(j.company)}</b><div class="seg"><button class="${fu.lang === 'en' ? 'on' : ''}" data-act="fulang" data-v="en">EN</button><button class="${fu.lang === 'de' ? 'on' : ''}" data-act="fulang" data-v="de">DE</button></div></div>
        <textarea id="fut" readonly rows="10">${esc(t.subject + '\n\n' + t.body)}</textarea>
        <div class="grid2"><button class="btn ghost" data-act="fucopy">Скопировать</button><a class="btn ghost" style="text-align:center;text-decoration:none;display:block" href="mailto:?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(t.body)}">В почту</a></div>
        <button class="btn" data-act="fusent" data-id="${j.id}">Отправил(а) follow-up</button><div class="grid2"><button class="btn ghost" data-act="furesp" data-id="${j.id}">Есть ответ</button><button class="btn ghost" data-act="fuclose">Закрыть</button></div>
        <p class="small mute" style="margin:10px 0 0">Проверь текст и адресата перед отправкой.</p></div>`;
      }
      return h + '</div>';
    },
    // блок в карточке вакансии со статусом «Подано»: дата подачи (в Excel её нет)
    cardBlock(j) {
      const o = S.apps[j.id] || {}, ap = o.ap || '';
      return `<div style="margin:0 0 10px"><div class="small mute lb">Дата подачи</div><input type="date" data-apdate="${j.id}" value="${ap}">${ap
        ? `<p class="small mute" style="margin:6px 0 0">${todayN() === dayN(ap) ? 'Сегодня' : days(todayN() - dayN(ap)) + ' назад'}${o.fn ? ' · follow-up: ' + o.fn : ''}</p><button class="btn ghost" style="margin:8px 0 0" data-act="fuopen" data-id="${j.id}">✉️ Шаблон follow-up</button>`
        : '<p class="small mute" style="margin:6px 0 0">Укажи дату, и я напомню про follow-up через 7 дней.</p>'}</div>`;
    },
    setApplied(id, v) {
      const j = JOBS.jobs.find(x => x.id === id); if (!j || !v) return;
      S.apps[id] = { ...(S.apps[id] || { s: jstat(j), base: j.status }), ap: v }; save(); render();
    },
  };

  // ===================== недельный отчёт =====================
  async function weekData() {
    const ev = await DB.all().catch(() => []), now = Date.now(), W = 7 * DAY, inR = (t, a, b) => t >= now - b * W && t < now - a * W;
    const wk = (a, b) => {
      const qs = ev.filter(e => (e.type === 'question' || e.type === 'card') && inR(e.ts, a, b)), ok = qs.filter(e => e.ok).length;
      const ms = qs.filter(e => e.type === 'question' && e.ms).map(e => e.ms).sort((x, y) => x - y), tp = {};
      qs.forEach(e => { const t = (tp[e.topic] = tp[e.topic] || { n: 0, ok: 0 }); t.n++; if (e.ok) t.ok++; });
      let days = 0, full = 0, xp = 0;
      for (let i = a * 7; i < b * 7; i++) { const d = new Date(); d.setDate(d.getDate() - i); const x = S.days[dkey(d)]; if (x) { if (x.steps.length) days++; if (x.steps.length >= 3) full++; xp += x.xp || 0; } }
      return { n: qs.length, acc: qs.length ? ok / qs.length : null, med: ms.length ? ms[ms.length >> 1] : null, tp, days, full, xp,
        iv: ev.filter(e => e.type === 'interview' && inR(e.ts, a, b)).length, apps: Object.values(S.apps).filter(o => o.s === 'applied' && o.ts && inR(o.ts, a, b)).length };
    };
    return { cur: wk(0, 1), prev: wk(1, 2) };
  }
  const delta = (c, p, unit, goodUp) => {
    if (c == null || p == null) return '';
    const d = Math.round(c - p); if (!d) return '<span class="dl">без изменений</span>';
    return `<span class="dl ${(d > 0) === goodUp ? 'up' : 'dn'}">${d > 0 ? '↑ +' : '↓ '}${d}${unit}</span>`;
  };
  function weekHtml({ cur, prev }) {
    const stat = (l, v, dl) => `<div class="stat"><span class="small mute">${l}</span><b style="font-size:20px">${v}</b>${dl || ''}</div>`;
    const acc = cur.acc == null ? '–' : Math.round(cur.acc * 100) + '%', med = cur.med == null ? '–' : Math.round(cur.med / 1000) + ' с';
    // темы, где точность заметно изменилась (минимум 3 ответа на неделе)
    const moves = Object.entries(cur.tp).filter(([k, t]) => t.n >= 3 && prev.tp[k] && prev.tp[k].n >= 3 && TOPICS[k]).map(([k, t]) => ({ k, d: Math.round((t.ok / t.n - prev.tp[k].ok / prev.tp[k].n) * 100) })).filter(m => Math.abs(m.d) >= 10);
    const up = moves.filter(m => m.d > 0).sort((a, b) => b.d - a.d).slice(0, 2), dn = moves.filter(m => m.d < 0).sort((a, b) => a.d - b.d).slice(0, 2);
    // что делать дальше (простые правила по твоим данным)
    const todo = [], w = T.weakest(), sys = T.systemic()[0], fd = fu.due().length, ev = T.upcoming().find(e => T.daysLeft(e.date) <= 7);
    if (ev) todo.push(`Подготовка к «${esc(ev.title.slice(0, 40))}» ${when(T.daysLeft(ev.date))}`);
    if (w) todo.push(`Подтяни тему «${TOPICS[w.k].name}» (освоено ${w.k100}%)`);
    if (sys) todo.push(`Частая ошибка: ${MISC[sys.c].t.toLowerCase()}`);
    if (cur.apps < WEEK_APPS) todo.push(`Подай ещё ${WEEK_APPS - cur.apps} заявок до нормы ${WEEK_APPS} в неделю`);
    if (fd) todo.push(`Напиши follow-up: ${fd} ${fd === 1 ? 'заявка ждёт' : 'заявок ждут'} напоминания`);
    if (cur.days < 5) todo.push(`Занимайся минимум 5 дней в неделю (сейчас ${cur.days})`);
    if (!cur.iv) todo.push('Прогони режим собеседования хотя бы дважды');
    const none = !cur.n && !cur.days && !cur.apps;
    return `<h2>Неделя</h2><p class="sub" style="margin:-6px 0 12px">Последние 7 дней против предыдущих</p>
    <div class="grid2">${stat('Активных дней', cur.days + ' из 7', delta(cur.days, prev.days, '', true))}${stat('Ответов', cur.n, delta(cur.n, prev.n, '', true))}${stat('Точность', acc, cur.acc != null && prev.acc != null ? delta(cur.acc * 100, prev.acc * 100, ' п.п.', true) : '')}${stat('Время ответа', med, cur.med != null && prev.med != null ? delta(cur.med / 1000, prev.med / 1000, ' с', false) : '')}${stat('Заявок подано', cur.apps, delta(cur.apps, prev.apps, '', true))}${stat('Опыт', cur.xp, delta(cur.xp, prev.xp, '', true))}</div>
    ${up.length ? `<p class="small" style="margin:12px 0 0"><b class="up">Растёшь:</b> ${up.map(m => `${esc(TOPICS[m.k].name)} (+${m.d} п.п.)`).join(', ')}</p>` : ''}
    ${dn.length ? `<p class="small" style="margin:6px 0 0"><b class="dn">Просело:</b> ${dn.map(m => `${esc(TOPICS[m.k].name)} (${m.d} п.п.)`).join(', ')}</p>` : ''}
    ${none ? '<p class="small mute" style="margin:12px 0 0">За неделю пока мало данных. Начни с плана на сегодня.</p>' : ''}
    <div class="tag" style="margin:14px 0 6px">На следующую неделю</div>${todo.slice(0, 4).map(t => `<div class="small" style="margin:5px 0;line-height:1.45">• ${t}</div>`).join('') || '<p class="small mute" style="margin:0">Всё в порядке, продолжай в том же темпе.</p>'}`;
  }
  const week = {
    card: () => '<div class="card" id="weekbox"><h2>Неделя</h2><p class="small mute">Считаю…</p></div>',
    async fill() { const el = document.getElementById('weekbox'); if (!el) return; const d = await weekData(); const e2 = document.getElementById('weekbox'); if (e2) e2.innerHTML = weekHtml(d); },
  };

  // ===================== действия из интерфейса =====================
  function act(a, D) {
    switch (a) {
      case 'ivshow': iv.show(); return true;
      case 'ivgrade': iv.grade(+D.g); return true;
      case 'ivdone': iv.stop(); go('learn'); return true;
      case 'fuopen': fu.open = D.id; if (tab !== 'today') go('today'); else render(); return true;
      case 'fuclose': fu.open = null; render(); return true;
      case 'fulang': fu.lang = D.v; render(); return true;
      case 'fucopy': {
        const ta = document.getElementById('fut'); if (!ta) return true;
        (navigator.clipboard ? navigator.clipboard.writeText(ta.value) : Promise.reject()).then(() => toast('Скопировано')).catch(() => { ta.removeAttribute('readonly'); ta.select(); ta.setSelectionRange(0, 99999); toast('Выделено, нажми «Копировать» в меню'); });
        return true;
      }
      case 'fusent': {
        const o = S.apps[D.id]; if (!o) return true;
        o.fu = dkey(); o.fn = (o.fn || 0) + 1; delete o.sn; fu.open = null; save();
        T.track('followup', { id: D.id, n: o.fn }); toast(o.fn >= FU_MAX ? 'Отмечено. Больше напоминать не буду' : 'Отмечено. Напомню через 7 дней'); render(); return true;
      }
      case 'fusnooze': { const o = S.apps[D.id]; if (o) { o.sn = shift(3); save(); toast('Напомню через 3 дня'); render(); } return true; }
      case 'furesp': jobFilter = 'applied'; jobOpen = D.id; fu.open = null; go('jobs'); return true;
    }
    return false;
  }
  return { iv, fu, week, act };
})();
