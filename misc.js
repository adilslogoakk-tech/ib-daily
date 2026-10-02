// Ловушки: у каждого неверного варианта ответа есть код типичной ошибки.
// MISC_ITEMS[id] = коды для неверных вариантов в порядке их появления в вопросе (правильный пропускается).
// Если код не задан: расчёт получает 'arith', понятийный вопрос 'concept'.
const MISC = {
  arith: { t: 'Арифметическая невнимательность', tip: 'Запиши промежуточные шаги и проверь вычисление вторым способом, не держи всё в уме.' },
  inv: { t: 'Перевернул(а) дробь', tip: 'Перед делением проговори: что делится на что. Запиши единицы измерения, они подскажут порядок величины.' },
  bridge: { t: 'Мост EV и Equity: неверный знак или пропущенная статья', tip: 'EV = Equity + Debt + Preferred + Minority − Cash. Выписывай каждую строку отдельно и ставь знак.' },
  tax: { t: 'Налог: забыл(а) или применил(а) неверно', tip: 'Спроси себя: это до налога или после? Проценты, синергии и списания умножаются на (1 − t).' },
  growth: { t: 'Терминальный рост: потерян множитель (1 + g) или g не в знаменателе', tip: 'Gordon Growth: TV = FCF × (1 + g) / (WACC − g). Следующий денежный поток уже вырос на g.' },
  disc: { t: 'Дисконтирование: поток не приведён к сегодняшнему дню или неверно число периодов', tip: 'Всё будущее делится на (1 + r)^n. Посчитай, сколько лет прошло до потока.' },
  weights: { t: 'Веса в WACC: неверные доли или ставки', tip: 'WACC = E/(D+E) × Re + D/(D+E) × Rd × (1 − t). Доли считай от суммы D + E.' },
  capm: { t: 'CAPM: ошибка с β, безрисковой ставкой или премией', tip: 'Re = Rf + β × премия за риск. β умножается только на премию, Rf прибавляется отдельно.' },
  noncash: { t: 'Неденежные статьи: неверный эффект на cash или Net Income', tip: 'D&A и write-down уменьшают Net Income, но cash не уменьшают. Единственный денежный эффект: экономия на налогах.' },
  nwc: { t: 'Working Capital: неверное направление влияния', tip: 'Рост активов (дебиторка, запасы) забирает cash, рост обязательств (AP) даёт cash.' },
  pct: { t: 'Проценты: неверная база или путаница доли и процента', tip: 'Рост = изменение / исходное значение. Доля = часть / целое. Проверь, что стоит в знаменателе.' },
  partial: { t: 'Неполная формула: пропущен компонент', tip: 'Перед ответом выпиши все части формулы и отметь, какие уже учёл(а).' },
  extra: { t: 'Лишнее слагаемое или неверное действие (сложил(а) вместо умножения)', tip: 'Проверь, нужно ли складывать, умножать или делить. Прикинь порядок ответа.' },
  confuse: { t: 'Путаница в показателях', tip: 'Выпиши определения рядом: что в числителе, что в знаменателе. Повтори различия на карточках.' },
  compound: { t: 'Рост за несколько лет: простое среднее вместо сложного процента', tip: 'CAGR = (конец / начало)^(1/n) − 1. Не дели общий рост на число лет.' },
  shares: { t: 'Число акций и разводнение', tip: 'Опционы in-the-money дают N × (1 − strike / цена) новых акций (TSM). Out-of-the-money не считаются.' },
  seniority: { t: 'Приоритет требований и стоимость капитала', tip: 'Порядок: secured → unsecured → subordinated → preferred → common. Выше приоритет, ниже риск и ставка.' },
  consist: { t: 'Несогласованность: Equity Value и EV смешаны в одном мультипликаторе', tip: 'EV делим на EBITDA, EBIT, Revenue. Equity Value делим на Net Income, Book Value.' },
  ret: { t: 'MOIC и IRR: ошибка в формуле или сроке', tip: 'MOIC = выход / вход. IRR = MOIC^(1/n) − 1, а не (MOIC − 1) / n.' },
  accdil: { t: 'Accretion и dilution: перепутано направление', tip: 'При оплате акциями сделка accretive, если P/E покупателя выше P/E цели.' },
  bs: { t: 'Баланс: неверный эффект на активы, пассивы или капитал', tip: 'У любого изменения две стороны. Выпиши, что растёт и что падает, и проверь, что баланс сходится.' },
  dealtype: { t: 'Виды сделок: путаница stock и asset deal', tip: 'Stock deal: покупаешь акции со всеми обязательствами. Asset deal: выбираешь активы и получаешь налоговый step-up.' },
  lbosrc: { t: 'Источники доходности LBO', tip: 'Три источника: рост EBITDA, расширение мультипликатора и погашение долга. Комиссии доходность уменьшают.' },
  mkt: { t: 'Рынки: неверное направление эффекта', tip: 'Ставки вверх: цены облигаций и дальних денежных потоков вниз. Проверь направление, прежде чем выбирать.' },
  units: { t: 'Единицы измерения и порядок величины', tip: 'Проверь, что в ответе: проценты, разы, миллионы. Прикинь порядок величины в уме.' },
  concept: { t: 'Неверное понимание концепции', tip: 'Пересчитай определение своими словами, потом вернись к уроку по теме.' },
};
const MISC_ITEMS = {
  d0: 'arith arith arith', d1: 'bridge bridge arith', d2: 'inv arith extra', d3: 'growth growth concept', d4: 'disc disc disc', d5: 'tax tax arith',
  d6: 'weights arith weights', d7: 'arith pct arith', d8: 'compound compound arith', d9: 'noncash noncash noncash', d10: 'partial sign partial', d11: 'bridge arith arith',
  d12: 'bridge bridge bridge', d13: 'capm capm capm', d14: 'concept concept concept', d15: 'tax partial partial', d16: 'confuse arith arith', d17: 'tax arith partial',
  d18: 'nwc arith partial', d19: 'nwc nwc extra', d20: 'bs bs bs', d21: 'tax tax noncash', d22: 'bs bs bs', d23: 'bs bs bs', d24: 'inv arith inv', d25: 'arith arith arith',
  d26: 'inv arith partial', d27: 'inv arith partial', d28: 'bridge bridge bridge', d29: 'bridge bridge bridge', d30: 'partial inv arith', d31: 'inv extra partial',
  d32: 'inv extra arith', d33: 'inv partial extra', d34: 'inv partial arith', d35: 'inv units arith', d36: 'inv units units', d37: 'growth growth arith', d38: 'inv extra arith',
  d39: 'disc disc disc', d40: 'disc disc disc', d41: 'partial arith arith', d42: 'weights arith weights', d43: 'capm capm capm', d44: 'tax partial arith', d45: 'capm tax capm',
  d46: 'inv inv arith', d47: 'growth growth growth', d48: 'confuse pct arith', d49: 'bridge bridge bridge', d50: 'shares shares shares', d51: 'inv arith arith', d52: 'inv arith arith',
  d53: 'partial extra arith', d54: 'arith units units', d55: 'inv arith arith', d56: 'bridge bridge inv', d57: 'confuse confuse units', d58: 'bridge bridge bridge',
  d59: 'seniority seniority seniority', d60: 'seniority seniority seniority', d61: 'partial shares arith', d62: 'partial partial sign', d63: 'pct pct pct', d64: 'arith extra arith',
  d65: 'tax tax tax', d66: 'accdil concept concept', d67: 'inv partial extra', d68: 'pct confuse arith', d69: 'partial tax sign', d70: 'dealtype dealtype dealtype',
  d71: 'consist partial arith', d72: 'concept concept concept', d73: 'bridge confuse partial', d74: 'bridge arith arith', d75: 'ret ret ret', d76: 'ret ret ret',
  d77: 'lbosrc lbosrc lbosrc', d78: 'sign partial confuse', d79: 'confuse arith arith', d80: 'concept concept concept', d81: 'extra arith inv', d82: 'pct inv extra',
  d83: 'pct units arith', d84: 'mkt mkt mkt', d85: 'mkt mkt mkt', d86: 'mkt mkt mkt', d87: 'inv partial units', d88: 'sign arith arith', d89: 'compound compound compound',
  d90: 'inv arith partial', d91: 'arith pct pct', d92: 'bridge bridge bridge', d93: 'tax tax arith', d94: 'inv units pct', d95: 'arith extra sign', d96: 'extra inv extra', d97: 'inv extra arith',
  'q:ev:0': 'bridge bridge bridge', 'q:dcf:0': 'growth arith growth', 'q:wacc:0': 'capm capm arith', 'q:fs:0': 'noncash noncash tax', 'q:wc:0': 'nwc nwc partial',
  'q:is:0': 'partial partial partial', 'q:cfs:1': 'nwc nwc partial', 'q:gw:0': 'partial confuse extra', 'q:tvm:0': 'disc disc disc', 'q:tvm:1': 'arith pct arith',
  'q:sotp:0': 'partial bridge bridge', 'q:norm:0': 'sign extra partial', 'q:tsm:0': 'shares shares shares', 'q:lbomodel:0': 'ret ret ret', 'q:capstruct:1': 'inv arith arith',
  'q:ecmdcm:0': 'concept concept concept', 'q:pitch:0': 'arith pct pct',
};
MISC.sign = { t: 'Ошибка знака или направления эффекта', tip: 'Определи, увеличивает показатель или уменьшает, и только потом считай. Проверь знак в конце.' };
// какие темы готовить к событию по категории вакансии
const CAT_TOPICS = {
  'Finance/Controlling': ['acct', 'mult', 'dcf'], 'Equity Research / Investment Analyst': ['mult', 'dcf', 'wacc', 'comps'],
  'Business Analytics / Commercial': ['acct', 'mult'], 'Business Analytics / IT': ['acct', 'mult'], 'Private Wealth Management': ['markets', 'mult', 'tvm'],
  'Sales / Business Development': ['markets', 'career'], 'Compliance/AML': ['acct', 'credit'],
};
