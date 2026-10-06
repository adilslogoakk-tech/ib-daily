'use strict';
// Неправильные (сильные и смешанные) глаголы A2-B1 для режима «Немецкий»: тренажёр Präteritum и Perfekt.
// Строка: инфинитив|er/sie/es (Präsens)|Präteritum (er)|Perfekt (er)|перевод.
window.DVB = (() => {
  const TXT = `
#A2
beginnen|beginnt|begann|hat begonnen|начинать
bekommen|bekommt|bekam|hat bekommen|получать
bleiben|bleibt|blieb|ist geblieben|оставаться
bringen|bringt|brachte|hat gebracht|приносить
denken|denkt|dachte|hat gedacht|думать
essen|isst|aß|hat gegessen|есть
fahren|fährt|fuhr|ist gefahren|ехать
fallen|fällt|fiel|ist gefallen|падать
finden|findet|fand|hat gefunden|находить
fliegen|fliegt|flog|ist geflogen|лететь
geben|gibt|gab|hat gegeben|давать
gehen|geht|ging|ist gegangen|идти
gewinnen|gewinnt|gewann|hat gewonnen|выигрывать
halten|hält|hielt|hat gehalten|держать
heißen|heißt|hieß|hat geheißen|называться
helfen|hilft|half|hat geholfen|помогать
kennen|kennt|kannte|hat gekannt|знать (быть знакомым)
kommen|kommt|kam|ist gekommen|приходить
laufen|läuft|lief|ist gelaufen|бежать, идти
lesen|liest|las|hat gelesen|читать
liegen|liegt|lag|hat gelegen|лежать
nehmen|nimmt|nahm|hat genommen|брать
schlafen|schläft|schlief|hat geschlafen|спать
schreiben|schreibt|schrieb|hat geschrieben|писать
schwimmen|schwimmt|schwamm|ist geschwommen|плавать
sehen|sieht|sah|hat gesehen|видеть
sein|ist|war|ist gewesen|быть
sitzen|sitzt|saß|hat gesessen|сидеть
sprechen|spricht|sprach|hat gesprochen|говорить
stehen|steht|stand|hat gestanden|стоять
tragen|trägt|trug|hat getragen|носить, нести
treffen|trifft|traf|hat getroffen|встречать
trinken|trinkt|trank|hat getrunken|пить
tun|tut|tat|hat getan|делать
verstehen|versteht|verstand|hat verstanden|понимать
waschen|wäscht|wusch|hat gewaschen|мыть
werden|wird|wurde|ist geworden|становиться
wissen|weiß|wusste|hat gewusst|знать
ziehen|zieht|zog|hat gezogen|тянуть
anfangen|fängt an|fing an|hat angefangen|начинать
ankommen|kommt an|kam an|ist angekommen|прибывать
anrufen|ruft an|rief an|hat angerufen|звонить
aufstehen|steht auf|stand auf|ist aufgestanden|вставать
einladen|lädt ein|lud ein|hat eingeladen|приглашать
mitbringen|bringt mit|brachte mit|hat mitgebracht|приносить с собой
umziehen|zieht um|zog um|ist umgezogen|переезжать
#B1
anbieten|bietet an|bot an|hat angeboten|предлагать
anziehen|zieht an|zog an|hat angezogen|надевать
aufgeben|gibt auf|gab auf|hat aufgegeben|сдаваться, бросать
ausgeben|gibt aus|gab aus|hat ausgegeben|тратить
aussehen|sieht aus|sah aus|hat ausgesehen|выглядеть
beraten|berät|beriet|hat beraten|консультировать
beschreiben|beschreibt|beschrieb|hat beschrieben|описывать
besitzen|besitzt|besaß|hat besessen|владеть
bestehen|besteht|bestand|hat bestanden|сдать, состоять
betragen|beträgt|betrug|hat betragen|составлять (о сумме)
beweisen|beweist|bewies|hat bewiesen|доказывать
bitten|bittet|bat|hat gebeten|просить
brechen|bricht|brach|hat gebrochen|ломать
einschlafen|schläft ein|schlief ein|ist eingeschlafen|засыпать
empfehlen|empfiehlt|empfahl|hat empfohlen|рекомендовать
entscheiden|entscheidet|entschied|hat entschieden|решать
entstehen|entsteht|entstand|ist entstanden|возникать
erfahren|erfährt|erfuhr|hat erfahren|узнавать
ergeben|ergibt|ergab|hat ergeben|давать в итоге
erhalten|erhält|erhielt|hat erhalten|получать
erscheinen|erscheint|erschien|ist erschienen|появляться
fernsehen|sieht fern|sah fern|hat ferngesehen|смотреть телевизор
fließen|fließt|floss|ist geflossen|течь
gelingen|gelingt|gelang|ist gelungen|удаваться
gelten|gilt|galt|hat gegolten|считаться, действовать
genießen|genießt|genoss|hat genossen|наслаждаться
geschehen|geschieht|geschah|ist geschehen|происходить
hängen|hängt|hing|hat gehangen|висеть
lassen|lässt|ließ|hat gelassen|позволять, оставлять
leiden|leidet|litt|hat gelitten|страдать
leihen|leiht|lieh|hat geliehen|одалживать
lügen|lügt|log|hat gelogen|лгать
mitnehmen|nimmt mit|nahm mit|hat mitgenommen|брать с собой
nennen|nennt|nannte|hat genannt|называть
raten|rät|riet|hat geraten|советовать
riechen|riecht|roch|hat gerochen|пахнуть
rufen|ruft|rief|hat gerufen|звать
scheinen|scheint|schien|hat geschienen|светить, казаться
schließen|schließt|schloss|hat geschlossen|закрывать
schneiden|schneidet|schnitt|hat geschnitten|резать
singen|singt|sang|hat gesungen|петь
sinken|sinkt|sank|ist gesunken|снижаться
springen|springt|sprang|ist gesprungen|прыгать
steigen|steigt|stieg|ist gestiegen|подниматься, расти
sterben|stirbt|starb|ist gestorben|умирать
streiten|streitet|stritt|hat gestritten|спорить, ссориться
teilnehmen|nimmt teil|nahm teil|hat teilgenommen|участвовать
übernehmen|übernimmt|übernahm|hat übernommen|брать на себя
überweisen|überweist|überwies|hat überwiesen|переводить (деньги)
unterscheiden|unterscheidet|unterschied|hat unterschieden|различать
unterschreiben|unterschreibt|unterschrieb|hat unterschrieben|подписывать
verbieten|verbietet|verbot|hat verboten|запрещать
verbinden|verbindet|verband|hat verbunden|соединять
verbringen|verbringt|verbrachte|hat verbracht|проводить (время)
vergessen|vergisst|vergaß|hat vergessen|забывать
vergleichen|vergleicht|verglich|hat verglichen|сравнивать
verlassen|verlässt|verließ|hat verlassen|покидать
verlieren|verliert|verlor|hat verloren|терять, проигрывать
vermeiden|vermeidet|vermied|hat vermieden|избегать
verschwinden|verschwindet|verschwand|ist verschwunden|исчезать
verzeihen|verzeiht|verzieh|hat verziehen|прощать
vorschlagen|schlägt vor|schlug vor|hat vorgeschlagen|предлагать
wachsen|wächst|wuchs|ist gewachsen|расти
werfen|wirft|warf|hat geworfen|бросать
zunehmen|nimmt zu|nahm zu|hat zugenommen|увеличиваться
abnehmen|nimmt ab|nahm ab|hat abgenommen|уменьшаться, худеть
abschließen|schließt ab|schloss ab|hat abgeschlossen|закончить, закрыть
aufbrechen|bricht auf|brach auf|ist aufgebrochen|отправиться
begehen|begeht|beging|hat begangen|совершать (преступление)
zurückgehen|geht zurück|ging zurück|ist zurückgegangen|сокращаться
`;
  const V = []; let lv = 'A2';
  TXT.split('\n').map(l => l.trim()).filter(Boolean).forEach(l => { if (l[0] === '#') { lv = l.slice(1); return; } const [inf, pres, pra, perf, ru] = l.split('|'); V.push({ inf, pres, pra, perf, ru, lv }); });
  const dl = () => S.dl || (S.dl = { w: {}, my: [], days: {} });
  const st = () => dl().v || (dl().v = {});
  const sh = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const speak = t => { try { const u = new SpeechSynthesisUtterance(t); u.lang = 'de-DE'; u.rate = 0.85; const v = speechSynthesis.getVoices().find(x => /^de/i.test(x.lang)); if (v) u.voice = v; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {} };
  // неверные «правильные» формы (так часто ошибаются) и формы других глаголов
  const sepPrefix = v => { const w = v.pres.split(' '); return w.length > 1 ? w[w.length - 1] : ''; };
  const regPra = v => { const pre = sepPrefix(v), base = pre ? v.inf.slice(pre.length) : v.inf; return base.replace(/e?n$/, '') + 'te' + (pre ? ' ' + pre : ''); };
  const regPerf = v => { const pre = sepPrefix(v), base = pre ? v.inf.slice(pre.length) : v.inf, ins = !pre && /^(be|emp|ent|er|ge|ver|zer|über|unter)/.test(v.inf); return v.perf.split(' ')[0] + ' ' + (pre || '') + (ins ? '' : 'ge') + base.replace(/e?n$/, '') + 't'; };
  const swapAux = p => (p.startsWith('hat ') ? 'ist ' : 'hat ') + p.split(' ').slice(1).join(' ');
  function question(v) {
    const kind = Math.random() < 0.5 ? 'pra' : 'perf', pool = sh(V.filter(x => x.inf !== v.inf && x.lv === v.lv));
    const right = v[kind], wrong = kind === 'pra' ? [regPra(v), pool[0].pra, pool[1].pra] : [swapAux(v.perf), regPerf(v), pool[0].perf];
    const opts = sh([right, ...[...new Set(wrong)].filter(x => x !== right)].slice(0, 4));
    return { inf: v.inf, kind, opts, k: opts.indexOf(right) };
  }
  let view = false, lvl = 'A2';
  function start() {
    const s = st(), weak = V.filter(v => s[v.inf] && s[v.inf].n >= 2 && s[v.inf].ok / s[v.inf].n < 0.7), fresh = sh(V.filter(v => !s[v.inf]));
    const pick = sh(weak).slice(0, 4).concat(fresh).concat(sh(V)).filter((v, i, a) => a.indexOf(v) === i).slice(0, 10);
    sess = { type: 'dvb', qs: pick.map(question), i: 0, picked: null, ok: 0 }; render();
  }
  function pick(k) {
    const s = sess, q = s.qs[s.i]; if (s.picked != null) return; s.picked = k;
    const ok = k === q.k, r = st()[q.inf] || (st()[q.inf] = { n: 0, ok: 0 }); r.n++; if (ok) { r.ok++; s.ok++; addXp(2); }
    dl().days[dkey()] = (dl().days[dkey()] || 0) + 1; T.track('dvb', { v: q.inf, ok }); save(); render();
  }
  function sessHtml() {
    const s = sess, head = t => `<div class="row sp"><button class="pill" data-act="dvbexit">✕</button><span class="small mute">${t}</span></div>`;
    if (s.i >= s.qs.length) return head('Неправильные глаголы') + `<div class="card" style="text-align:center"><h2>${s.ok} из ${s.qs.length}</h2><p class="sub">${s.ok === s.qs.length ? 'Отлично!' : 'Слабые глаголы вернутся в следующей тренировке.'}</p></div><button class="btn" data-act="dvbexit">Готово</button>`;
    const q = s.qs[s.i], v = V.find(x => x.inf === q.inf), p = s.picked;
    return head(`Вопрос ${s.i + 1} из ${s.qs.length}`) + `<div class="bar" style="margin-top:14px"><i style="width:${s.i / s.qs.length * 100}%"></i></div>
    <div class="card"><div class="tag">${q.kind === 'pra' ? 'Präteritum (er / sie / es)' : 'Perfekt (er / sie / es)'}</div><h2 style="margin:6px 0 2px" translate="no">${esc(v.inf)}</h2><div class="small mute">${esc(v.ru)}</div>
    ${q.opts.map((o, k) => `<button class="opt ${p != null ? (k === q.k ? 'ok' : k === p ? 'bad' : '') : ''}" data-act="dvbpick" data-k="${k}" ${p != null ? 'disabled' : ''} translate="no">${esc(o)}</button>`).join('')}
    ${p != null ? `<div class="explain" translate="no"><b>${esc(v.inf)}</b> — ${esc(v.pres)} — ${esc(v.pra)} — ${esc(v.perf)} <button class="spk" data-act="dvbsay" data-v="${esc(v.inf)}">🔊</button></div>` : ''}</div>${p != null ? '<button class="btn" data-act="dvbnext">Дальше</button>' : ''}`;
  }
  function card() {
    const s = Object.values(st()), n = s.reduce((a, x) => a + x.n, 0), ok = s.reduce((a, x) => a + x.ok, 0);
    return `<div class="card"><h2>Неправильные глаголы</h2><p class="small mute" style="margin:6px 0 0;line-height:1.45">${V.length} глаголов A2 и B1: Präteritum и Perfekt${n ? ` · верно ${Math.round(ok / n * 100)}% (${n})` : ''}</p><div class="grid2" style="margin-top:10px"><button class="btn" style="margin:0" data-act="dvbstart">Тренировка</button><button class="btn ghost" style="margin:0" data-act="dvbview">Список</button></div></div>`;
  }
  function listHtml() {
    return `<div class="row sp"><button class="pill" data-act="dvbback">‹ Темы</button><span class="small mute">${V.length}</span></div><h1 style="margin-top:14px">Неправильные глаголы</h1>
    <div class="sts" style="margin:12px 0 6px">${['A2', 'B1'].map(l => `<button class="st ${lvl === l ? 'on' : ''}" data-act="dvblvl" data-v="${l}">${l}</button>`).join('')}</div>
    <div class="card" style="padding:4px 14px">${V.filter(v => v.lv === lvl).map(v => `<div class="goal" style="display:block;padding:10px 0"><div class="row sp"><b translate="no">${esc(v.inf)} <button class="spk" data-act="dvbsay" data-v="${esc(v.inf)}">🔊</button></b><span class="small mute">${esc(v.ru)}</span></div><div class="small" style="margin-top:2px" translate="no">${esc(v.pres)} · ${esc(v.pra)} · ${esc(v.perf)}</div></div>`).join('')}</div>`;
  }
  function act(a, D) {
    switch (a) {
      case 'dvbstart': start(); return true;
      case 'dvbpick': pick(+D.k); return true;
      case 'dvbnext': sess.i++; sess.picked = null; render(); return true;
      case 'dvbexit': view = false; go('gram'); return true;
      case 'dvbview': view = true; render(); window.scrollTo(0, 0); return true;
      case 'dvbback': view = false; render(); window.scrollTo(0, 0); return true;
      case 'dvblvl': lvl = D.v; render(); return true;
      case 'dvbsay': speak(D.v); return true;
    }
    return false;
  }
  return { act, card, listHtml, sessHtml, get view() { return view; }, count: () => V.length, verbs: () => V };
})();
