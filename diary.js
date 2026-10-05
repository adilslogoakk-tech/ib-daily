'use strict';
// Дневник собеседований и голосовой режим интервью (диктовка, озвучка вопроса, разбор ответа).
// Подключается после more.js; к S, JOBS, jstat, setStatus, sess, tab, go, render, esc, toast, save, dkey, T, mycards и др. обращается только при вызове.
const DV = (() => {
  const TYPES = { phone: 'Телефонное', video: 'Видеоинтервью', onsite: 'Очное', ac: 'Assessment center', test: 'Онлайн-тест', practice: 'Тренировка' };
  const RES = { pending: 'Ждём ответ', next: 'Прошёл дальше', offer: 'Оффер', rejected: 'Отказ' };
  const dia = () => S.diary || (S.diary = []);
  const byId = id => dia().find(x => x.id === id);
  let open = null, adding = false, draft = { type: 'video' }, qd = {};

  // ---------- голос: диктовка и озвучка ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null;
  const langOf = c => /^de-/.test(c.id) ? 'de-DE' : 'en-US';
  function stopMic() { try { if (rec) rec.stop(); } catch (e) {} rec = null; }
  function mic(c) {
    const ta = document.getElementById('vtx'); if (!ta) return;
    if (rec) return stopMic();
    if (!SR) return toast('Диктовка недоступна в этом режиме. Нажми на поле ответа и используй микрофон 🎤 на клавиатуре iPhone');
    const r = new SR(), base = ta.value ? ta.value.trim() + ' ' : '', btn = document.querySelector('[data-act=dvmic]');
    r.lang = langOf(c); r.continuous = true; r.interimResults = true;
    r.onresult = e => { let t = ''; for (const x of e.results) t += x[0].transcript; ta.value = base + t; if (sess) sess.tx = ta.value; };
    r.onend = () => { rec = null; if (btn) btn.classList.remove('on'); };
    r.onerror = () => { rec = null; if (btn) btn.classList.remove('on'); toast('Не удалось включить микрофон. Разреши доступ или диктуй с клавиатуры 🎤'); };
    try { r.start(); rec = r; if (btn) btn.classList.add('on'); } catch (e) { toast('Не удалось включить микрофон. Разреши доступ или диктуй с клавиатуры 🎤'); }
  }
  function say(c) {
    try { const u = new SpeechSynthesisUtterance(c.q); u.lang = langOf(c); u.rate = 0.95; const v = speechSynthesis.getVoices().find(x => x.lang.startsWith(u.lang.slice(0, 2))); if (v) u.voice = v; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) { toast('Озвучка недоступна на этом устройстве'); }
  }
  document.addEventListener('input', e => {
    if (e.target.id === 'vtx' && sess) sess.tx = e.target.value;
    else if (e.target.dataset.dv) { const k = e.target.dataset.dv; (open && k.startsWith('q') ? qd : draft)[k] = e.target.type === 'checkbox' ? e.target.checked : e.target.value; }
  });
  document.addEventListener('change', e => {
    if (e.target.dataset.dvn && open) { const en = byId(open); if (en) { en[e.target.dataset.dvn] = e.target.value; save(); } }
    else if (e.target.dataset.dv) { const k = e.target.dataset.dv; (open && k.startsWith('q') ? qd : draft)[k] = e.target.type === 'checkbox' ? e.target.checked : e.target.value; if (k === 'qw') render(); }
  });

  // разбор ответа: ключевые слова из эталона, темп, слова-паразиты
  const STOP = new Set('dass eine einen einer einem eines nicht oder auch sind wird werden haben hier wenn dann sich kann über nach sowie damit dabei dafür durch ohne wurde wurden which their there about would could should these those where while being other after before between because every among within without'.split(' '));
  const stems = t => { const m = new Map(); (String(t).toLowerCase().match(/[a-zäöüß]{5,}/g) || []).forEach(w => { if (!STOP.has(w) && !m.has(w.slice(0, 6))) m.set(w.slice(0, 6), w); }); return m; };
  // эталон на языке ответа: английский для технических вопросов (в интерфейсе ответы могут быть на другом языке), немецкий для немецких
  const refText = c => { if (langOf(c) === 'de-DE') return c.a; const i = CARDS.indexOf(c); return i >= 0 && i < 61 && window.CARDS_EN && CARDS_EN[i] ? CARDS_EN[i] : c.a; };
  function analyze(s, c) {
    const tx = (s.tx || '').trim(), words = (tx.match(/[A-Za-zÄÖÜäöüß'-]+/g) || []);
    if (words.length < 8) return null;
    const rt = refText(c), ref = /[А-Яа-яЁё]/.test(rt) ? new Map() : stems(rt), got = stems(tx), hit = [...ref.keys()].filter(k => got.has(k)), miss = [...ref].filter(([k]) => !got.has(k)).map(([, w]) => w);
    const cov = ref.size ? hit.length / ref.size : null, min = s.spoke / 60000, wpm = min > 0.15 ? Math.round(words.length / min) : 0;
    const fill = (tx.toLowerCase().match(langOf(c) === 'de-DE' ? /\b(äh|ähm|ehm|halt|sozusagen)\b/g : /\b(um|uh|erm|like|basically|you know)\b/g) || []).length;
    return { n: words.length, cov, miss: miss.slice(0, 6), wpm, fill, sug: cov == null ? null : cov >= 0.6 ? 2 : cov >= 0.3 ? 1 : 0 };
  }
  const micHtml = (s, c) => `<div class="card"><div class="small mute" style="margin-bottom:8px">Голосовой ответ: нажми 🎤 и говори (текст появится ниже), или диктуй с клавиатуры iPhone</div>
    <div class="grid2"><button class="btn ghost" style="margin:0" data-act="dvsay">🔊 Вопрос вслух</button><button class="btn ghost ${rec ? 'on' : ''}" style="margin:0" data-act="dvmic">🎤 Диктовать</button></div>
    <textarea id="vtx" rows="4" style="margin-top:10px" placeholder="Твой ответ">${esc(s.tx || '')}</textarea></div>`;
  function fbHtml(s, c) {
    const a = analyze(s, c); if (!a) return '';
    return `<div class="card"><div class="tag">Разбор твоего ответа</div>
      ${a.cov == null ? '' : `<div class="row sp" style="margin-top:8px"><span>Ключевые мысли из эталона</span><b>${Math.round(a.cov * 100)}%</b></div><div class="bar" style="margin:6px 0 8px"><i style="width:${Math.round(a.cov * 100)}%"></i></div>`}
      ${a.miss.length ? `<p class="small" style="margin:0 0 6px"><b>Не прозвучало:</b> <span translate="no">${esc(a.miss.join(', '))}</span></p>` : ''}
      <p class="small mute" style="margin:0;line-height:1.5"><span>Слов в ответе:</span> ${a.n}${a.wpm ? ` · <span>Темп (слов в минуту):</span> ${a.wpm}` : ''} · <span>Слов-паразитов:</span> ${a.fill}</p>
      ${a.sug == null ? '' : `<p class="small" style="margin:8px 0 0"><b>Совет по оценке:</b> ${['Не смог(ла)', 'Частично', 'Уверенно'][a.sug]}</p>`}</div>`;
  }
  // сохраняем ответ в дневник (запись «Тренировка» на сеанс)
  function cap(s) { const t = document.getElementById('vtx'); if (t) s.tx = t.value; stopMic(); }
  function rec1(s, c, g) {
    const a = analyze(s, c); if (!a && !(s.tx || '').trim()) { s.tx = ''; return; }
    let en = s.did && byId(s.did);
    if (!en) { en = { id: 'd' + Date.now().toString(36), ts: Date.now(), date: dkey(), company: 'Тренировка интервью', jobId: '', type: 'practice', res: 'pending', good: '', bad: '', qs: [] }; dia().unshift(en); s.did = en.id; }
    en.qs.push({ q: c.q, a: (s.tx || '').trim(), weak: g === 0, cov: a && a.cov != null ? Math.round(a.cov * 100) : null });
    save(); s.tx = '';
  }

  // ---------- экран дневника ----------
  const card = () => { const d = dia().filter(x => x.type !== 'practice'), l = d[0]; return `<div class="card" data-go="diary" style="cursor:pointer"><div class="row sp"><div><div class="tag">Собеседования</div><div style="font-size:17px;font-weight:600;margin-top:2px">Дневник собеседований</div><div class="small mute">${d.length ? `<span>Записей:</span> ${d.length}${l ? ` · ${esc(l.company)}` : ''}` : 'Записывай вопросы, ответы и итоги, слабое превращается в карточки'}</div></div><span style="font-size:22px">›</span></div></div>`; };
  const jobsPool = () => JOBS.jobs.filter(j => ['applied', 'reply', 'exam'].includes(jstat(j)));
  function entryHtml(en) {
    const o = open === en.id, weak = en.qs.filter(q => q.weak).length;
    let h = `<div class="card dv ${o ? 'open' : ''}"><div class="row sp" data-act="dvopen" data-id="${en.id}" style="cursor:pointer"><div style="min-width:0"><div style="font-weight:600;line-height:1.3" ${en.type === 'practice' ? '' : 'translate="no"'}>${esc(en.type === 'practice' ? 'Тренировка интервью' : en.company)}</div><div class="small mute"><span>${TYPES[en.type] || en.type}</span> · ${esc(en.date)}${en.qs.length ? ` · <span>Вопросов:</span> ${en.qs.length}` : ''}${weak ? ` · <span>Слабых:</span> ${weak}` : ''}</div></div>${en.type === 'practice' ? '' : `<span class="pill">${RES[en.res]}</span>`}</div>`;
    if (o) {
      if (en.type !== 'practice') h += `<div class="sts" style="margin:12px 0 4px">${Object.keys(RES).map(k => `<button class="st ${en.res === k ? 'on' : ''}" data-act="dvres" data-r="${k}">${RES[k]}</button>`).join('')}</div>`;
      h += en.qs.map((q, i) => `<div style="border-top:1px solid var(--line);padding:10px 0"><div class="row sp"><b style="line-height:1.35" translate="no">${esc(q.q)}</b><button style="background:none;color:var(--mute);font-size:18px" data-act="dvdelq" data-i="${i}">×</button></div>${q.a ? `<div class="small" style="margin-top:4px;line-height:1.5" translate="no">${esc(q.a)}</div>` : ''}${q.better ? `<div class="small" style="margin-top:4px;color:var(--green);line-height:1.5" translate="no">✓ ${esc(q.better)}</div>` : ''}<div class="small mute" style="margin-top:4px">${q.weak ? '<span style="color:var(--red)">Слабое место</span>' : ''}${q.cov != null ? ` <span>Совпало с эталоном:</span> ${q.cov}%` : ''}${q.card ? ' · <span>Есть карточка</span>' : ''}</div></div>`).join('');
      if (en.type !== 'practice') {
        h += `<div style="border-top:1px solid var(--line);padding-top:10px"><div class="small mute" style="margin-bottom:4px">Добавить вопрос</div>
          <input type="text" data-dv="qq" placeholder="Вопрос" value="${esc(qd.qq || '')}"><textarea data-dv="qa" rows="3" style="margin-top:8px" placeholder="Что я ответил(а)">${esc(qd.qa || '')}</textarea>
          <label class="switch" style="margin-top:8px"><div><b>Слабое место</b><div class="small mute">Если дашь лучший ответ ниже, получится карточка для тренировки</div></div><input type="checkbox" class="tg" data-dv="qw" ${qd.qw ? 'checked' : ''}></label>
          ${qd.qw ? `<textarea data-dv="qb" rows="3" style="margin-top:8px" placeholder="Как лучше ответить">${esc(qd.qb || '')}</textarea>` : ''}
          <button class="btn ghost" data-act="dvaddq">Добавить вопрос</button></div>`;
      }
      h += `<div class="small mute" style="margin:12px 0 4px">Что получилось хорошо</div><textarea data-dvn="good" rows="2">${esc(en.good || '')}</textarea><div class="small mute" style="margin:10px 0 4px">Что получилось плохо</div><textarea data-dvn="bad" rows="2">${esc(en.bad || '')}</textarea>
        <button class="btn ghost" style="margin-top:12px;color:var(--red)" data-act="dvdel">Удалить запись</button>`;
    }
    return h + '</div>';
  }
  function html() {
    const l = dia().slice().sort((a, b) => b.date.localeCompare(a.date) || b.ts - a.ts);
    let h = `<div class="row"><button class="pill" data-go="goals">‹ Назад</button></div><div class="tag" style="margin-top:14px">Собеседования</div><h1>Дневник</h1><p class="sub">Вопросы, ответы и итоги. Слабое место с лучшим ответом становится карточкой в тренировках.</p>`;
    h += adding ? `<div class="card"><h2>Новое собеседование</h2>
      <input type="text" data-dv="company" list="dvjobs" placeholder="Компания" value="${esc(draft.company || '')}"><datalist id="dvjobs">${[...new Set(jobsPool().map(j => j.company))].map(c => `<option value="${esc(c)}">`).join('')}</datalist>
      <select data-dv="type" style="margin-top:8px">${Object.keys(TYPES).filter(k => k !== 'practice').map(k => `<option value="${k}" ${draft.type === k ? 'selected' : ''}>${TYPES[k]}</option>`).join('')}</select>
      <input type="date" data-dv="date" style="margin-top:8px" value="${esc(draft.date || dkey())}">
      <div class="grid2" style="margin-top:12px"><button class="btn ghost" style="margin:0" data-act="dvcancel">Отмена</button><button class="btn" style="margin:0" data-act="dvcreate">Создать</button></div></div>`
      : `<button class="btn" data-act="dvnew">＋ Новое собеседование</button>`;
    h += l.length ? l.map(entryHtml).join('') : '<div class="card"><p class="small mute" style="margin:0;line-height:1.55">Пока пусто. После собеседования создай запись: компания, вопросы, что ответил(а), что вышло плохо. Тренировки голосом в режиме «Интервью» тоже попадают сюда.</p></div>';
    return h;
  }
  function addQ() {
    const en = byId(open), q = (qd.qq || '').trim(); if (!en || !q) return toast('Впиши вопрос');
    const it = { q, a: (qd.qa || '').trim(), weak: !!qd.qw };
    if (qd.qw && (qd.qb || '').trim()) { it.better = qd.qb.trim(); const c = { id: 'u' + Date.now().toString(36), topic: 'career', q, a: it.better }; S.mycards.push(c); CARDS.push({ ...c }); registerAll(); it.card = c.id; }
    en.qs.push(it); qd = {}; save(); T.track('diary_q', { weak: it.weak }); render();
  }
  function setRes(r) {
    const en = byId(open); if (!en) return; en.res = r; save();
    const j = en.jobId && JOBS.jobs.find(x => x.id === en.jobId);
    if (j) { const st = jstat(j); if (r === 'offer') setStatus(j.id, 'offer'); else if (r === 'rejected') setStatus(j.id, 'rejected'); else if (r === 'next' && ['applied', 'reply'].includes(st)) setStatus(j.id, 'exam'); }
    render();
  }
  function act(a, D) {
    switch (a) {
      case 'dvnew': adding = true; draft = { type: 'video', date: dkey() }; render(); return true;
      case 'dvcancel': adding = false; render(); return true;
      case 'dvcreate': {
        const co = (draft.company || '').trim(); if (!co) { toast('Впиши компанию'); return true; }
        const j = jobsPool().find(x => x.company.toLowerCase() === co.toLowerCase()), en = { id: 'd' + Date.now().toString(36), ts: Date.now(), date: draft.date || dkey(), company: co, jobId: j ? j.id : '', type: draft.type || 'video', res: 'pending', good: '', bad: '', qs: [] };
        dia().unshift(en); open = en.id; adding = false; qd = {}; save(); T.track('diary_new', { type: en.type }); render(); return true;
      }
      case 'dvopen': open = open === D.id ? null : D.id; qd = {}; render(); return true;
      case 'dvres': setRes(D.r); return true;
      case 'dvaddq': addQ(); return true;
      case 'dvdelq': { const en = byId(open); if (en) { en.qs.splice(+D.i, 1); save(); render(); } return true; }
      case 'dvdel': if (confirm(tr('Удалить запись?'))) { S.diary = dia().filter(x => x.id !== open); open = null; save(); render(); } return true;
      case 'dvmic': mic(sess && sess.q[sess.i]); return true;
      case 'dvsay': say(sess.q[sess.i]); return true;
    }
    return false;
  }
  return { act, html, card, micHtml, fbHtml, cap, rec: rec1, stopMic };
})();

I18N.add([
  ['Цитат', 'Quotes', 'Zitate', 'Sitatlar'],
  ['Пн', 'Mon', 'Mo', 'B.e.'], ['Вт', 'Tue', 'Di', 'Ç.a.'], ['Ср', 'Wed', 'Mi', 'Çər'], ['Чт', 'Thu', 'Do', 'C.a.'], ['Пт', 'Fri', 'Fr', 'Cüm'], ['Сб', 'Sat', 'Sa', 'Şən'], ['Вс', 'Sun', 'So', 'Baz'],
  ['Телефонное', 'Phone', 'Telefonisch', 'Telefon'], ['Видеоинтервью', 'Video interview', 'Videointerview', 'Video müsahibə'], ['Очное', 'On-site', 'Vor Ort', 'Üz-üzə'], ['Онлайн-тест', 'Online test', 'Online-Test', 'Onlayn test'], ['Тренировка', 'Practice', 'Übung', 'Məşq'],
  ['Ждём ответ', 'Waiting for reply', 'Warten auf Antwort', 'Cavab gözlənilir'], ['Прошёл дальше', 'Passed to next round', 'Nächste Runde', 'Növbəti mərhələ'],
  ['Тренировка интервью', 'Interview practice', 'Interview-Übung', 'Müsahibə məşqi'],
  ['Дневник собеседований', 'Interview diary', 'Interview-Tagebuch', 'Müsahibə gündəliyi'], ['Собеседования', 'Interviews', 'Vorstellungsgespräche', 'Müsahibələr'], ['Дневник', 'Diary', 'Tagebuch', 'Gündəlik'],
  ['Записей:', 'Entries:', 'Einträge:', 'Qeydlər:'], ['Вопросов:', 'Questions:', 'Fragen:', 'Suallar:'], ['Слабых:', 'Weak:', 'Schwach:', 'Zəif:'],
  ['Записывай вопросы, ответы и итоги, слабое превращается в карточки', 'Log questions, answers and outcomes; weak spots turn into cards', 'Fragen, Antworten und Ergebnisse festhalten; Schwächen werden zu Karten', 'Sualları, cavabları və nəticələri yaz; zəif yerlər kartlara çevrilir'],
  ['Вопросы, ответы и итоги. Слабое место с лучшим ответом становится карточкой в тренировках.', 'Questions, answers and outcomes. A weak spot with a better answer becomes a card in your training.', 'Fragen, Antworten und Ergebnisse. Eine Schwäche mit besserer Antwort wird zur Karte im Training.', 'Suallar, cavablar və nəticələr. Daha yaxşı cavabı olan zəif yer məşqdə karta çevrilir.'],
  ['＋ Новое собеседование', '＋ New interview', '＋ Neues Gespräch', '＋ Yeni müsahibə'], ['Новое собеседование', 'New interview', 'Neues Gespräch', 'Yeni müsahibə'],
  ['Компания', 'Company', 'Firma', 'Şirkət'], ['Отмена', 'Cancel', 'Abbrechen', 'Ləğv et'], ['Создать', 'Create', 'Erstellen', 'Yarat'],
  ['Добавить вопрос', 'Add question', 'Frage hinzufügen', 'Sual əlavə et'], ['Вопрос', 'Question', 'Frage', 'Sual'], ['Что я ответил(а)', 'What I answered', 'Was ich geantwortet habe', 'Nə cavab verdim'],
  ['Слабое место', 'Weak spot', 'Schwachstelle', 'Zəif yer'], ['Если дашь лучший ответ ниже, получится карточка для тренировки', 'If you add a better answer below, it becomes a practice card', 'Wenn du unten eine bessere Antwort einträgst, wird sie zur Übungskarte', 'Aşağıda daha yaxşı cavab yazsan, məşq kartı olacaq'],
  ['Как лучше ответить', 'How to answer better', 'Wie man besser antwortet', 'Necə daha yaxşı cavab vermək olar'], ['Совпало с эталоном:', 'Match with model answer:', 'Übereinstimmung mit Musterantwort:', 'Nümunə cavabla uyğunluq:'], ['Есть карточка', 'Card created', 'Karte vorhanden', 'Kart var'],
  ['Что получилось хорошо', 'What went well', 'Was gut lief', 'Nə yaxşı alındı'], ['Что получилось плохо', 'What went badly', 'Was schlecht lief', 'Nə pis alındı'], ['Удалить запись', 'Delete entry', 'Eintrag löschen', 'Qeydi sil'], ['Удалить запись?', 'Delete this entry?', 'Eintrag löschen?', 'Qeydi silmək istəyirsən?'],
  ['Впиши компанию', 'Enter the company', 'Firma eintragen', 'Şirkəti yaz'], ['Впиши вопрос', 'Enter the question', 'Frage eintragen', 'Sualı yaz'],
  ['Пока пусто. После собеседования создай запись: компания, вопросы, что ответил(а), что вышло плохо. Тренировки голосом в режиме «Интервью» тоже попадают сюда.', 'Nothing yet. After an interview, create an entry: company, questions, what you answered, what went badly. Voice practice in Interview mode lands here too.', 'Noch leer. Lege nach einem Gespräch einen Eintrag an: Firma, Fragen, deine Antworten, was schlecht lief. Sprachübungen im Interview-Modus landen auch hier.', 'Hələ boşdur. Müsahibədən sonra qeyd yarat: şirkət, suallar, nə cavab verdin, nə pis alındı. «Müsahibə» rejimindəki səsli məşqlər də buraya düşür.'],
  ['Голосовой ответ: нажми 🎤 и говори (текст появится ниже), или диктуй с клавиатуры iPhone', 'Voice answer: tap 🎤 and speak (the text appears below), or dictate with the iPhone keyboard', 'Sprachantwort: tippe auf 🎤 und sprich (der Text erscheint unten) oder diktiere mit der iPhone-Tastatur', 'Səsli cavab: 🎤 düyməsinə toxun və danış (mətn aşağıda görünür) və ya iPhone klaviaturası ilə diktə et'],
  ['🔊 Вопрос вслух', '🔊 Read question aloud', '🔊 Frage vorlesen', '🔊 Sualı səslə oxu'], ['🎤 Диктовать', '🎤 Dictate', '🎤 Diktieren', '🎤 Diktə et'], ['Твой ответ', 'Your answer', 'Deine Antwort', 'Sənin cavabın'],
  ['Разбор твоего ответа', 'Review of your answer', 'Auswertung deiner Antwort', 'Cavabının təhlili'], ['Ключевые мысли из эталона', 'Key points from the model answer', 'Kernpunkte der Musterantwort', 'Nümunə cavabdan əsas fikirlər'], ['Не прозвучало:', 'Missing:', 'Nicht erwähnt:', 'Deyilməyib:'],
  ['Слов в ответе:', 'Words in answer:', 'Wörter in der Antwort:', 'Cavabda söz:'], ['Темп (слов в минуту):', 'Pace (words per minute):', 'Tempo (Wörter pro Minute):', 'Tempo (dəqiqədə söz):'], ['Слов-паразитов:', 'Filler words:', 'Füllwörter:', 'Artıq sözlər:'],
  ['Совет по оценке:', 'Suggested grade:', 'Bewertungsvorschlag:', 'Qiymət tövsiyəsi:'],
  ['Диктовка недоступна в этом режиме. Нажми на поле ответа и используй микрофон 🎤 на клавиатуре iPhone', 'Dictation is not available in this mode. Tap the answer field and use the 🎤 microphone on the iPhone keyboard', 'Diktat ist in diesem Modus nicht verfügbar. Tippe auf das Antwortfeld und nutze das 🎤 auf der iPhone-Tastatur', 'Bu rejimdə diktə mövcud deyil. Cavab sahəsinə toxun və iPhone klaviaturasındakı 🎤 işlət'],
  ['Не удалось включить микрофон. Разреши доступ или диктуй с клавиатуры 🎤', 'Could not start the microphone. Allow access or dictate with the keyboard 🎤', 'Mikrofon konnte nicht gestartet werden. Erlaube den Zugriff oder diktiere mit der Tastatur 🎤', 'Mikrofonu işə salmaq alınmadı. İcazə ver və ya klaviatura ilə diktə et 🎤'],
]);
