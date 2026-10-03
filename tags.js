// Разметка контента для «тренера»: тема каждого элемента. w = важность темы для интервью (1-3).
const TOPICS = {
  acct: { name: 'Бухучёт и отчётность', w: 3 }, ev: { name: 'EV и Equity Value', w: 3 }, mult: { name: 'Мультипликаторы', w: 3 },
  dcf: { name: 'DCF и денежные потоки', w: 3 }, wacc: { name: 'WACC и CAPM', w: 3 }, tvm: { name: 'Дисконтирование и доходность', w: 2 },
  comps: { name: 'Comps и методы оценки', w: 2 }, dilution: { name: 'Разводнение акций', w: 1 }, ma: { name: 'M&A и accretion/dilution', w: 3 },
  lbo: { name: 'LBO', w: 3 }, credit: { name: 'Долг и структура капитала', w: 2 }, markets: { name: 'Рынки, ECM и DCM', w: 2 }, cfa: { name: 'CFA Level 1', w: 1 }, de: { name: 'Deutsch für Banking', w: 1 }, career: { name: 'Интервью и карьера', w: 2 },
};
const LESSON_TOPIC = {
  ev: 'ev', mult: 'mult', dcf: 'dcf', wacc: 'wacc', fs: 'acct', comps: 'comps', ad: 'ma', lbo: 'lbo', wc: 'dcf',
  is: 'acct', bs: 'acct', cfs: 'acct', gw: 'acct', dt: 'acct', ifrs: 'acct', lease: 'ev', tvm: 'tvm', sens: 'dcf', sotp: 'comps', norm: 'comps',
  sector: 'mult', tsm: 'dilution', proc: 'ma', dealtype: 'ma', prot: 'ma', lbomodel: 'lbo', capstruct: 'credit', rates: 'markets', ecmdcm: 'markets', pitch: 'markets', behav: 'career',
};
// по индексу в DRILLS / CARDS (порядок в content.js и content2.js)
const DRILL_TOPICS = ('mult ev mult dcf tvm wacc wacc acct tvm acct ma lbo ev wacc mult ma ' +
  'acct acct acct acct acct acct acct acct acct acct acct acct ' +
  'ev ev mult mult mult mult mult mult mult dcf dcf dcf tvm tvm wacc wacc wacc wacc mult dcf dcf ev dilution mult mult comps ev ' +
  'credit credit credit credit credit credit ' +
  'ma ma ma ma ma ma ma ma acct ma ma ma ' +
  'lbo lbo lbo lbo lbo lbo lbo lbo ' +
  'markets markets markets markets markets markets markets tvm tvm acct acct ev dcf dcf mult mult mult').split(' ');
const CARD_TOPICS = ('dcf acct ev wacc wacc wacc acct comps comps lbo ma credit acct dcf acct wacc ' +
  'lbo ma comps comps dcf dcf mult acct acct credit acct acct mult mult mult comps ma ma ma career markets markets markets markets markets ' +
  'career career career career career career career career ev acct ma ma credit lbo ma ev credit ma comps acct').split(' ');
