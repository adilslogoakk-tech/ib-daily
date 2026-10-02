'use strict';
// Облако: Supabase по REST, без библиотек. Вход по email и паролю.
// Прогресс синхронизируется по принципу «последняя запись выигрывает» по метке S._u.
// Зависит от глобальных S, normalize, rawSave, DB (объявлены в app.js и trainer.js, используются только при вызове).
const CLOUD = (() => {
  const cfg = window.SB_CONFIG || {}, enabled = !!(cfg.url && cfg.anon), AK = 'ibdaily.auth';
  let sess = null, timer = null, busy = false;
  try { sess = JSON.parse(localStorage.getItem(AK)); } catch (e) {}
  const info = { at: 0, err: '' };
  const store = s => { sess = s; try { s ? localStorage.setItem(AK, JSON.stringify(s)) : localStorage.removeItem(AK); } catch (e) {} };
  const hdr = tok => ({ apikey: cfg.anon, Authorization: 'Bearer ' + (tok || cfg.anon), 'Content-Type': 'application/json' });

  async function authCall(p, body) {
    const r = await fetch(cfg.url + '/auth/v1/' + p, { method: 'POST', headers: hdr(), body: JSON.stringify(body) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) { const e = new Error(j.error_description || j.msg || j.message || 'Ошибка ' + r.status); e.status = r.status; throw e; }
    return j;
  }
  const pack = j => ({ at: j.access_token, rt: j.refresh_token, exp: Date.now() + Math.max(60, (j.expires_in || 3600) - 60) * 1000, uid: j.user.id, email: j.user.email });
  // токен обновляется сам; без сети сессия не сбрасывается
  async function token() {
    if (!sess) return null;
    if (Date.now() < sess.exp) return sess.at;
    try { store(pack(await authCall('token?grant_type=refresh_token', { refresh_token: sess.rt }))); }
    catch (e) { if (e.status === 400 || e.status === 401) store(null); throw e; }
    return sess.at;
  }
  async function api(method, p, body, extra) {
    const tok = await token(); if (!tok) throw new Error('нет входа');
    const r = await fetch(cfg.url + p, { method, headers: { ...hdr(tok), ...(extra || {}) }, body: body === undefined ? undefined : JSON.stringify(body) });
    if (!r.ok) throw new Error(r.status + ' ' + (await r.text()).slice(0, 160));
    const t = await r.text(); return t ? JSON.parse(t) : null;
  }
  const getKv = async key => (await api('GET', `/rest/v1/kv?key=eq.${key}&select=value,updated_at`))[0] || null;
  const putKv = (key, value) => api('POST', '/rest/v1/kv?on_conflict=user_id,key', { key, value, updated_at: new Date().toISOString() }, { Prefer: 'resolution=merge-duplicates,return=minimal' });

  async function signIn(email, password) { store(pack(await authCall('token?grant_type=password', { email, password }))); }
  async function signUp(email, password) {
    const j = await authCall('signup', { email, password });
    if (!j.access_token) throw new Error('Подтверди почту по письму, затем войди');
    store(pack(j));
  }
  async function push() {
    if (!sess || busy) return; busy = true;
    try { await putKv('state', S); info.at = Date.now(); info.err = ''; } catch (e) { info.err = e.message; } finally { busy = false; }
  }
  // возвращает true, если пришли более новые данные с другого устройства
  async function pull() {
    const row = await getKv('state');
    if (!row) { await push(); return false; }
    const ru = row.value._u || 0, lu = S._u || 0;
    if (ru > lu) { S = normalize(row.value); rawSave(); info.at = Date.now(); info.err = ''; return true; }
    if (ru < lu) await push(); else info.at = Date.now();
    return false;
  }
  // журнал событий: отправляем то, чего ещё нет в облаке (номер события = ключ IndexedDB)
  async function flushLog() {
    if (!sess) return;
    try {
      const fresh = (await DB.all()).filter(e => e.n > (S.logN || 0)).sort((a, b) => a.n - b.n);
      for (let i = 0; i < fresh.length; i += 400) {
        const chunk = fresh.slice(i, i + 400);
        await api('POST', '/rest/v1/events', chunk.map(({ ts, sid, type, n, ...data }) => ({ ts: new Date(ts).toISOString(), sid, type, data: { n, ...data } })), { Prefer: 'return=minimal' });
        S.logN = chunk[chunk.length - 1].n; rawSave();
      }
    } catch (e) {}
  }
  return {
    enabled, info,
    get on() { return !!sess; },
    get email() { return sess ? sess.email : ''; },
    signIn, signUp, pull, push,
    signOut: () => { clearTimeout(timer); store(null); },
    touch: () => { if (sess) { clearTimeout(timer); timer = setTimeout(push, 8000); } },
    flush: async () => { if (!sess) return; clearTimeout(timer); await push(); await flushLog(); },
    doc: async key => { const r = await getKv(key); return r ? r.value : null; },
    deleteRequests: ids => api('DELETE', `/rest/v1/requests?id=in.(${ids.join(',')})`, undefined, { Prefer: 'return=minimal' }),
    sendRequests: rows => api('POST', '/rest/v1/requests?on_conflict=id', rows.map(r => ({ id: r.id, type: r.type, payload: r })), { Prefer: 'resolution=merge-duplicates,return=minimal' }),
    pdfUrl: async file => { const r = await api('POST', `/storage/v1/object/sign/reports/${sess.uid}/${encodeURIComponent(file)}`, { expiresIn: 3600 }); return cfg.url + '/storage/v1' + r.signedURL; },
  };
})();
