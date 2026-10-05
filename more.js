'use strict';
// Резервная копия, итог недели. Подключается после ach.js; к S, JOBS, dkey, wkey, allDone, appDay, T, FX, TOPICS, DAILY_APPS, normalize, save, render, toast обращается только при вызове.
const MX = (() => {
  // ---------- резервная копия ----------
  function exportBackup() {
    const blob = new Blob([JSON.stringify({ app: 'mandate', v: 1, at: new Date().toISOString(), state: S })], { type: 'application/json' });
    const f = new File([blob], `mandate-backup-${dkey()}.json`, { type: 'application/json' });
    if (navigator.canShare && navigator.canShare({ files: [f] })) navigator.share({ files: [f] }).catch(() => {});
    else { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = f.name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); }
    S.lastBackup = Date.now(); save(); T.track('backup_export', {}); toast('Копия сохранена');
  }
  function importBackup(file) {
    const r = new FileReader();
    r.onload = () => {
      let d; try { d = JSON.parse(r.result); } catch (e) { return toast('Это не файл копии Mandate'); }
      if (!d || d.app !== 'mandate' || !d.state || !d.state.days) return toast('Это не файл копии Mandate');
      const n = Object.keys(d.state.days).length;
      if (!confirm(tr('Заменить текущие данные копией от') + ' ' + String(d.at || '').slice(0, 10) + '? ' + tr('Дней в копии') + ': ' + n)) return;
      S = normalize(d.state); S._u = Date.now(); save(); T.track('backup_import', {}); toast('Данные восстановлены'); render();
    };
    r.readAsText(file);
  }
  document.addEventListener('change', e => { if (e.target.id === 'bkpfile' && e.target.files[0]) { importBackup(e.target.files[0]); e.target.value = ''; } });
  function backupCard() {
    const d = S.lastBackup ? new Date(S.lastBackup).toLocaleDateString(I18N.loc, { day: 'numeric', month: 'short' }) : '';
    return `<div class="card"><h2>Резервная копия</h2><p class="sub" style="margin-bottom:10px">Весь прогресс одним файлом: заявки, заметки, карточки, цитаты, достижения. Файл можно сохранить в «Файлы» или отправить себе.${d ? ` <span>Последняя копия:</span> ${d}` : ''}</p>
    <div class="grid2"><button class="btn ghost" style="margin:0" data-act="bkpexp">Сохранить копию</button><button class="btn ghost" style="margin:0" data-act="bkpimp">Восстановить из файла</button></div><input type="file" id="bkpfile" accept=".json,application/json" hidden></div>`;
  }

  // ---------- итог недели ----------
  const days = off => { const m = new Date(wkey(new Date()) + 'T00:00:00'); m.setDate(m.getDate() - 7 * off); return Array.from({ length: 7 }, (_, i) => { const d = new Date(m); d.setDate(m.getDate() + i); return dkey(d); }); };
  const inWeek = (ts, w) => typeof ts === 'number' && w.includes(dkey(new Date(ts)));
  const stats = w => ({
    closed: w.filter(k => allDone(k)).length,
    apps: JOBS.jobs.filter(j => w.includes(appDay(j))).length,
    xp: w.reduce((a, k) => a + ((S.days[k] && S.days[k].xp) || 0), 0),
    read: Object.values(S.read).filter(v => inWeek(v, w)).length,
    quotes: S.later.filter(x => x.kind === 'quote' && inWeek(x.ts, w)).length,
  });
  function weeklyCard() {
    const a = stats(days(0)), b = stats(days(1)), rows = [['Закрытых дней', 'closed'], ['Заявок', 'apps'], ['XP', 'xp'], ['Прочитано частей', 'read'], ['Цитат', 'quotes']];
    const arrow = (x, y) => x > y ? '<span style="color:var(--green)">↑</span>' : x < y ? '<span style="color:var(--red)">↓</span>' : '';
    const dropped = rows.filter(([, k]) => b[k] > 0 && a[k] < b[k]).map(([l]) => l);
    const wk = T.weakest(), fu = FX.fu.due().length, plan = [];
    if (a.closed < 5) plan.push('<span>Закрывать план минимум 5 дней в неделю</span>');
    if (a.apps < DAILY_APPS * 5) plan.push(`<span>Подавать заявок в день:</span> ${DAILY_APPS}`);
    if (wk) plan.push(`<span>Подтянуть тему:</span> ${TOPICS[wk.k].name} (${wk.k100}%)`);
    if (fu) plan.push(`<span>Написать follow-up:</span> ${fu}`);
    const qd = MX.quotesDue ? MX.quotesDue() : 0; if (qd) plan.push(`<span>Повторить цитаты:</span> ${qd}`);
    return `<div class="card"><h2>Итог недели</h2><div class="row sp small mute" style="margin-top:6px"><span>Эта неделя</span><span>Прошлая</span></div>
      ${rows.map(([l, k]) => `<div class="row sp" style="padding:7px 0;border-top:1px solid var(--line)"><span>${l}</span><span><b>${a[k]}</b> ${arrow(a[k], b[k])} <span class="mute">/ ${b[k]}</span></span></div>`).join('')}
      ${dropped.length ? `<p class="small" style="margin:10px 0 0"><b>Что просело:</b> ${dropped.join(', ')}</p>` : '<p class="small" style="margin:10px 0 0;color:var(--green)">Ничего не просело по сравнению с прошлой неделей</p>'}
      ${plan.length ? `<div style="margin-top:10px"><b>План на неделю</b>${plan.map(x => `<div class="small" style="margin-top:4px">• ${x}</div>`).join('')}</div>` : ''}</div>`;
  }

  // ---------- повторение цитат (как карточки: 2, 5, 12, 30, 60 дней) ----------
  const QBOX = [2, 5, 12, 30, 60], DAY = 864e5;
  const qlist = () => S.later.filter(x => x.kind === 'quote');
  const qdue = x => (x.r ? x.r.due : x.ts + 2 * DAY);
  const quotesDue = () => qlist().filter(x => qdue(x) <= Date.now()).length;
  function qrStart() {
    const ids = qlist().filter(x => qdue(x) <= Date.now()).sort((a, b) => qdue(a) - qdue(b)).slice(0, 10).map(x => x.ref);
    if (!ids.length) return toast('Нет цитат на повторение');
    sess = { type: 'qrev', ids, i: 0, flip: false, ok: 0 }; render();
  }
  function qrGrade(ok) {
    const s = sess, x = S.later.find(y => y.kind === 'quote' && y.ref === s.ids[s.i]);
    if (x) { const n = ok ? (x.r ? Math.min(QBOX.length - 1, x.r.n + 1) : 0) : 0; x.r = { n, due: Date.now() + (ok ? QBOX[n] : 1) * DAY }; if (ok) { s.ok++; addXp(2); } T.track('quote_review', { ok }); save(); }
    s.i++; s.flip = false; render();
  }
  function qrevHtml() {
    const s = sess, N = s.ids.length, head = `<div class="row sp"><button class="pill" data-act="exit">✕</button><span class="small mute">Цитата ${Math.min(s.i + 1, N)} из ${N}</span></div><div class="bar" style="margin-top:14px"><i style="width:${s.i / N * 100}%"></i></div>`;
    if (s.i >= N) return head + `<div class="card" style="text-align:center"><h2>Серия окончена</h2><p class="sub">Знал(а): ${s.ok} из ${N}</p></div><button class="btn" data-act="exit">Готово</button>`;
    const x = S.later.find(y => y.kind === 'quote' && y.ref === s.ids[s.i]) || { text: '', src: '' }, hint = x.text.split(' ').slice(0, 7).join(' ') + '…';
    return head + `<div class="card"><div class="tag">Вспомни мысль</div><div class="small mute" style="margin:8px 0" translate="no">${esc(x.src)}</div>
      ${s.flip ? `<div style="font-size:17px;line-height:1.6;font-style:italic" translate="no">${esc(x.text)}</div>` : `<div style="font-size:17px;line-height:1.6;font-style:italic" translate="no">${esc(hint)}</div>`}</div>
      ${s.flip ? '<div class="grid2"><button class="btn ghost" data-act="qrno">Забыл(а)</button><button class="btn" data-act="qrok">Помню</button></div>' : '<button class="btn" data-act="qrflip">Показать</button>'}`;
  }
  function quoteCard(onlyDue) {
    const n = qlist().length, d = quotesDue(); if (!n || (onlyDue && !d)) return '';
    return `<div class="card"><div class="tag" style="margin-bottom:4px">Цитаты</div><p class="small mute" style="margin:0 0 8px;line-height:1.45"><span>Цитат:</span> ${n} · <span>к повторению:</span> ${d}</p>${d ? '<button class="btn ghost" style="margin:0" data-act="qrstart">Повторить</button>' : ''}</div>`;
  }

  function act(a) {
    switch (a) {
      case 'qrstart': qrStart(); return true;
      case 'qrflip': sess.flip = true; render(); return true;
      case 'qrok': qrGrade(true); return true;
      case 'qrno': qrGrade(false); return true;
      case 'bkpexp': exportBackup(); return true;
      case 'bkpimp': document.getElementById('bkpfile').click(); return true;
    }
    return false;
  }
  return { act, backupCard, weeklyCard, quotesDue, quoteCard, qrevHtml };
})();

I18N.add([
  ['Цитаты', 'Quotes', 'Zitate', 'Sitatlar'], ['Цитат:', 'Quotes:', 'Zitate:', 'Sitatlar:'], ['к повторению:', 'due for review:', 'zu wiederholen:', 'təkrar üçün:'],
  ['Повторить', 'Review', 'Wiederholen', 'Təkrarla'], ['Цитата {0} из {1}', 'Quote {0} of {1}', 'Zitat {0} von {1}', 'Sitat {0} / {1}'],
  ['Вспомни мысль', 'Recall the idea', 'Erinnere dich an den Gedanken', 'Fikri yadına sal'], ['Показать', 'Show', 'Anzeigen', 'Göstər'],
  ['Помню', 'I remember', 'Weiß ich noch', 'Yadımdadır'], ['Забыл(а)', 'Forgot', 'Vergessen', 'Unutdum'], ['Нет цитат на повторение', 'No quotes to review', 'Keine Zitate zu wiederholen', 'Təkrar üçün sitat yoxdur'],
  ['Серия окончена', 'Round finished', 'Runde beendet', 'Seriya bitdi'], ['Знал(а): {0} из {1}', 'Knew: {0} of {1}', 'Gewusst: {0} von {1}', 'Bildim: {0} / {1}'],
  ['Поиск по книге', 'Search this book', 'In diesem Buch suchen', 'Kitabda axtar'], ['Ничего не найдено', 'Nothing found', 'Nichts gefunden', 'Heç nə tapılmadı'],
  ['⏸ Пауза', '⏸ Pause', '⏸ Pause', '⏸ Fasilə'], ['▶ Продолжить', '▶ Resume', '▶ Weiter', '▶ Davam et'], ['Слушать', 'Listen', 'Anhören', 'Dinlə'],
  ['Резервная копия', 'Backup', 'Sicherung', 'Ehtiyat nüsxə'],
  ['Весь прогресс одним файлом: заявки, заметки, карточки, цитаты, достижения. Файл можно сохранить в «Файлы» или отправить себе.', 'All your progress in one file: applications, notes, cards, quotes, achievements. Save it to Files or send it to yourself.', 'Dein gesamter Fortschritt in einer Datei: Bewerbungen, Notizen, Karten, Zitate, Erfolge. Speichere sie in „Dateien“ oder schicke sie dir selbst.', 'Bütün irəliləyiş bir faylda: müraciətlər, qeydlər, kartlar, sitatlar, nailiyyətlər. Faylı «Fayllar»a saxla və ya özünə göndər.'],
  ['Последняя копия:', 'Last backup:', 'Letzte Sicherung:', 'Son nüsxə:'],
  ['Сохранить копию', 'Save backup', 'Sicherung speichern', 'Nüsxəni saxla'],
  ['Восстановить из файла', 'Restore from file', 'Aus Datei wiederherstellen', 'Fayldan bərpa et'],
  ['Копия сохранена', 'Backup saved', 'Sicherung gespeichert', 'Nüsxə saxlanıldı'],
  ['Это не файл копии Mandate', 'This is not a Mandate backup file', 'Das ist keine Mandate-Sicherung', 'Bu Mandate nüsxə faylı deyil'],
  ['Заменить текущие данные копией от', 'Replace current data with the backup from', 'Aktuelle Daten durch die Sicherung vom', 'Cari məlumatları bu tarixli nüsxə ilə əvəz et:'],
  ['Дней в копии', 'Days in backup', 'Tage in der Sicherung', 'Nüsxədəki günlər'],
  ['Данные восстановлены', 'Data restored', 'Daten wiederhergestellt', 'Məlumatlar bərpa olundu'],
  ['Итог недели', 'Weekly review', 'Wochenrückblick', 'Həftənin yekunu'],
  ['Эта неделя', 'This week', 'Diese Woche', 'Bu həftə'], ['Прошлая', 'Last', 'Letzte', 'Keçən'],
  ['Закрытых дней', 'Days completed', 'Abgeschlossene Tage', 'Tamamlanan günlər'],
  ['Прочитано частей', 'Parts read', 'Gelesene Teile', 'Oxunan hissələr'],
  ['Что просело:', 'What dropped:', 'Was nachgelassen hat:', 'Nə geriləyib:'],
  ['Ничего не просело по сравнению с прошлой неделей', 'Nothing dropped compared to last week', 'Im Vergleich zur Vorwoche hat nichts nachgelassen', 'Keçən həftə ilə müqayisədə heç nə geriləməyib'],
  ['План на неделю', 'Plan for the week', 'Plan für die Woche', 'Həftə üçün plan'],
  ['Закрывать план минимум 5 дней в неделю', 'Complete the plan at least 5 days a week', 'Den Plan an mindestens 5 Tagen pro Woche abschließen', 'Planı həftədə ən azı 5 gün tamamla'],
  ['Подавать заявок в день:', 'Applications per day:', 'Bewerbungen pro Tag:', 'Gündə müraciət:'],
  ['Подтянуть тему:', 'Work on the topic:', 'Thema aufarbeiten:', 'Mövzunu gücləndir:'],
  ['Написать follow-up:', 'Send follow-ups:', 'Nachfassen:', 'Follow-up yaz:'],
  ['Повторить цитаты:', 'Review quotes:', 'Zitate wiederholen:', 'Sitatları təkrarla:'],
]);
