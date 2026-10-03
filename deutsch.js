'use strict';
// Немецкий для банкинга: словарь Fachbegriffe с интервальными карточками, тест, список слов и интервью на немецком.
// Слово: [немецкий, English, русский, azərbaycanca, категория, пример на немецком, ключ глоссария (необязательно)].
const DEU = (() => {
  const DAY = 864e5, BOX = [0, 1, 2, 4, 8, 16, 32];
  const CATS = {
    acc: { ru: 'Бухучёт', en: 'Accounting', de: 'Rechnungswesen', az: 'Mühasibat' },
    val: { ru: 'Оценка', en: 'Valuation', de: 'Bewertung', az: 'Qiymətləndirmə' },
    ma: { ru: 'M&A', en: 'M&A', de: 'M&A', az: 'M&A' },
    fin: { ru: 'Финансирование', en: 'Financing', de: 'Finanzierung', az: 'Maliyyələşdirmə' },
    mkt: { ru: 'Рынки', en: 'Markets', de: 'Märkte', az: 'Bazarlar' },
    job: { ru: 'Работа и резюме', en: 'Jobs and applications', de: 'Bewerbung und Karriere', az: 'İş və müraciət' },
  };
  const W = [
    // Rechnungswesen
    ['die Bilanz', 'balance sheet', 'баланс', 'balans', 'acc', 'Die Bilanz zeigt das Vermögen und die Finanzierung des Unternehmens.'],
    ['die Gewinn- und Verlustrechnung (GuV)', 'income statement', 'отчёт о прибылях и убытках', 'mənfəət və zərər hesabatı', 'acc', 'Die GuV zeigt Umsatz, Aufwendungen und Jahresüberschuss.'],
    ['die Kapitalflussrechnung', 'cash flow statement', 'отчёт о движении денежных средств', 'pul hərəkəti hesabatı', 'acc', 'Die Kapitalflussrechnung erklärt, woher das Geld kommt und wohin es fließt.'],
    ['der Jahresabschluss', 'annual financial statements', 'годовая отчётность', 'illik maliyyə hesabatı', 'acc', 'Der Jahresabschluss wird vom Wirtschaftsprüfer geprüft.'],
    ['der Umsatz', 'revenue, sales', 'выручка', 'gəlir', 'acc', 'Der Umsatz stieg im letzten Jahr um acht Prozent.', 'rev'],
    ['der Jahresüberschuss', 'net income', 'чистая прибыль', 'xalis mənfəət', 'acc', 'Der Jahresüberschuss liegt bei 120 Millionen Euro.', 'ni'],
    ['das Ergebnis vor Zinsen und Steuern (EBIT)', 'EBIT, operating profit', 'операционная прибыль (EBIT)', 'əməliyyat mənfəəti (EBIT)', 'acc', 'Das EBIT ist unabhängig von der Kapitalstruktur.', 'ebit'],
    ['die Abschreibung', 'depreciation and amortisation', 'амортизация', 'amortizasiya', 'acc', 'Die Abschreibung mindert den Gewinn, aber nicht die Liquidität.', 'da'],
    ['das Anlagevermögen', 'fixed assets', 'внеоборотные активы', 'əsas vəsaitlər', 'acc', 'Maschinen und Gebäude gehören zum Anlagevermögen.', 'ppe'],
    ['das Umlaufvermögen', 'current assets', 'оборотные активы', 'dövriyyə aktivləri', 'acc', 'Forderungen und Vorräte zählen zum Umlaufvermögen.'],
    ['das Eigenkapital', 'equity', 'собственный капитал', 'xüsusi kapital', 'acc', 'Das Eigenkapital ergibt sich aus Vermögen minus Schulden.'],
    ['das Fremdkapital', 'debt, external capital', 'заёмный капитал', 'borc kapitalı', 'acc', 'Das Fremdkapital wird durch Kredite und Anleihen aufgebracht.', 'debt'],
    ['die Verbindlichkeiten', 'liabilities', 'обязательства', 'öhdəliklər', 'acc', 'Die Verbindlichkeiten gegenüber Lieferanten sind gestiegen.'],
    ['die Forderungen', 'receivables', 'дебиторская задолженность', 'debitor borcları', 'acc', 'Die Forderungen aus Lieferungen und Leistungen wachsen schneller als der Umsatz.'],
    ['die Vorräte', 'inventory', 'запасы', 'ehtiyatlar', 'acc', 'Hohe Vorräte binden Kapital.'],
    ['die Rückstellung', 'provision', 'резерв', 'ehtiyat (provision)', 'acc', 'Für den Rechtsstreit wurde eine Rückstellung gebildet.'],
    ['die Gewinnrücklagen', 'retained earnings', 'нераспределённая прибыль', 'bölüşdürülməmiş mənfəət', 'acc', 'Nicht ausgeschüttete Gewinne fließen in die Gewinnrücklagen.', 're2'],
    ['der Geschäfts- oder Firmenwert', 'goodwill', 'гудвилл', 'qudvil', 'acc', 'Der Firmenwert wird nicht planmäßig abgeschrieben, sondern auf Wertminderung geprüft.', 'gw'],
    ['die latenten Steuern', 'deferred taxes', 'отложенные налоги', 'təxirə salınmış vergilər', 'acc', 'Latente Steuern entstehen durch Unterschiede zwischen Handels- und Steuerbilanz.', 'dtl'],
    ['die Herstellungskosten', 'cost of goods sold', 'себестоимость', 'maya dəyəri', 'acc', 'Die Herstellungskosten sanken dank günstigerer Rohstoffe.'],
    ['der Wirtschaftsprüfer', 'auditor', 'аудитор', 'auditor', 'acc', 'Der Wirtschaftsprüfer hat den Jahresabschluss testiert.'],
    ['die Rechnungslegung', 'financial reporting, accounting standards', 'бухгалтерская отчётность, стандарты', 'mühasibat hesabatı, standartlar', 'acc', 'Börsennotierte Konzerne erstellen ihre Rechnungslegung nach IFRS.'],
    // Bewertung
    ['die Unternehmensbewertung', 'company valuation', 'оценка компании', 'şirkətin qiymətləndirilməsi', 'val', 'Die Unternehmensbewertung stützt sich auf mehrere Methoden.'],
    ['der Unternehmenswert', 'enterprise value', 'стоимость предприятия (EV)', 'müəssisənin dəyəri (EV)', 'val', 'Der Unternehmenswert umfasst Eigen- und Fremdkapital abzüglich liquider Mittel.', 'ev'],
    ['der Eigenkapitalwert', 'equity value', 'стоимость акционерного капитала', 'səhmdar kapitalının dəyəri', 'val', 'Der Eigenkapitalwert ergibt sich aus dem Unternehmenswert abzüglich der Nettoverschuldung.', 'eqv'],
    ['die Marktkapitalisierung', 'market capitalisation', 'рыночная капитализация', 'bazar kapitallaşması', 'val', 'Die Marktkapitalisierung beträgt etwa zwei Milliarden Euro.'],
    ['das Kurs-Gewinn-Verhältnis (KGV)', 'price-earnings ratio (P/E)', 'отношение цены к прибыли (P/E)', 'qiymət/mənfəət nisbəti (P/E)', 'val', 'Ein KGV von 15 bedeutet, dass der Kurs dem 15-fachen Gewinn je Aktie entspricht.', 'pe'],
    ['das Bewertungsmultiple', 'valuation multiple', 'оценочный мультипликатор', 'qiymətləndirmə mültiplikatoru', 'val', 'Das Bewertungsmultiple wird aus vergleichbaren Unternehmen abgeleitet.', 'mult'],
    ['die Vergleichsunternehmen', 'comparable companies (peers)', 'сопоставимые компании', 'müqayisə olunan şirkətlər', 'val', 'Wir wählen Vergleichsunternehmen nach Branche, Größe und Wachstum aus.', 'comps'],
    ['die Diskontierung', 'discounting', 'дисконтирование', 'diskontlaşdırma', 'val', 'Bei der Diskontierung werden künftige Zahlungen auf heute abgezinst.', 'disc'],
    ['der Kapitalwert', 'net present value (NPV)', 'чистая приведённая стоимость', 'xalis cari dəyər', 'val', 'Ein positiver Kapitalwert bedeutet, dass das Projekt Wert schafft.', 'npv'],
    ['der Barwert', 'present value', 'приведённая стоимость', 'cari dəyər', 'val', 'Der Barwert der Zahlungen beträgt 1,2 Milliarden Euro.', 'pv'],
    ['die Kapitalkosten', 'cost of capital (WACC)', 'стоимость капитала (WACC)', 'kapitalın dəyəri (WACC)', 'val', 'Die gewichteten Kapitalkosten dienen als Diskontierungssatz.', 'wacc'],
    ['der risikolose Zins', 'risk-free rate', 'безрисковая ставка', 'risksiz dərəcə', 'val', 'Als risikoloser Zins dient die Rendite zehnjähriger Bundesanleihen.', 'rf'],
    ['der Endwert', 'terminal value', 'терминальная стоимость', 'terminal dəyər', 'val', 'Der Endwert macht oft mehr als 70 Prozent des Unternehmenswerts aus.', 'tv'],
    ['der freie Cashflow', 'free cash flow', 'свободный денежный поток', 'sərbəst pul axını', 'val', 'Der freie Cashflow steht Eigen- und Fremdkapitalgebern zur Verfügung.', 'fcf'],
    ['die Nettoverschuldung', 'net debt', 'чистый долг', 'xalis borc', 'val', 'Die Nettoverschuldung ergibt sich aus Schulden abzüglich liquider Mittel.', 'nd'],
    ['die Sensitivitätsanalyse', 'sensitivity analysis', 'анализ чувствительности', 'həssaslıq təhlili', 'val', 'Die Sensitivitätsanalyse zeigt, wie stark der Wert auf Zins und Wachstum reagiert.'],
    ['die Prognose', 'forecast', 'прогноз', 'proqnoz', 'val', 'Die Prognose beruht auf einem Umsatzwachstum von fünf Prozent.'],
    ['das Kursziel', 'target price', 'целевая цена', 'hədəf qiymət', 'val', 'Der Analyst erhöht das Kursziel auf 45 Euro.', 'tp'],
    ['der faire Wert', 'fair value', 'справедливая стоимость', 'ədalətli dəyər', 'val', 'Wir sehen den fairen Wert der Aktie bei 38 Euro.'],
    ['das Aufwärtspotenzial', 'upside', 'потенциал роста', 'artım potensialı', 'val', 'Das Aufwärtspotenzial beträgt rund 20 Prozent.', 'upside'],
    // M&A
    ['die Übernahme', 'takeover, acquisition', 'поглощение', 'satın alma', 'ma', 'Die Übernahme wurde im März angekündigt.', 'ma'],
    ['die Fusion', 'merger', 'слияние', 'birləşmə', 'ma', 'Die Fusion schafft einen führenden Anbieter in Europa.'],
    ['das Zielunternehmen', 'target company', 'компания-цель', 'hədəf şirkət', 'ma', 'Das Zielunternehmen erzielt einen Umsatz von 300 Millionen Euro.'],
    ['der Kaufpreis', 'purchase price', 'цена покупки', 'satınalma qiyməti', 'ma', 'Der Kaufpreis wird teils bar und teils in Aktien gezahlt.'],
    ['die Kontrollprämie', 'control premium', 'премия за контроль', 'nəzarət premiyası', 'ma', 'Die Kontrollprämie liegt typischerweise zwischen 20 und 40 Prozent.', 'cp'],
    ['die Synergien', 'synergies', 'синергии', 'sinerjilər', 'ma', 'Kostensynergien sind verlässlicher als Umsatzsynergien.', 'syn'],
    ['die Sorgfaltsprüfung (Due Diligence)', 'due diligence', 'должная проверка (due diligence)', 'hərtərəfli yoxlama (due diligence)', 'ma', 'Die Sorgfaltsprüfung dauert in der Regel mehrere Wochen.'],
    ['der Datenraum', 'data room', 'виртуальная комната данных', 'data room', 'ma', 'Bieter erhalten Zugang zum Datenraum.', 'dr'],
    ['die Verschwiegenheitserklärung', 'non-disclosure agreement (NDA)', 'соглашение о конфиденциальности', 'məxfilik razılaşması', 'ma', 'Vor Erhalt der Unterlagen unterzeichnen die Interessenten eine Verschwiegenheitserklärung.'],
    ['das unverbindliche Angebot', 'non-binding offer (IOI)', 'необязывающее предложение', 'məcburi olmayan təklif', 'ma', 'Im ersten Schritt geben die Bieter ein unverbindliches Angebot ab.', 'ioi'],
    ['das verbindliche Angebot', 'binding offer', 'обязывающее предложение', 'məcburi təklif', 'ma', 'Das verbindliche Angebot enthält Preis und Finanzierungszusage.'],
    ['der Kaufvertrag', 'purchase agreement (SPA)', 'договор купли-продажи', 'alqı-satqı müqaviləsi', 'ma', 'Der Kaufvertrag regelt Preis, Garantien und Vollzugsbedingungen.', 'spa'],
    ['der Vollzug (Closing)', 'closing', 'закрытие сделки', 'sövdələşmənin bağlanması', 'ma', 'Der Vollzug steht unter dem Vorbehalt der kartellrechtlichen Freigabe.'],
    ['der Anteilskauf (Share Deal)', 'share deal', 'покупка акций (share deal)', 'səhmlərin alışı (share deal)', 'ma', 'Beim Anteilskauf übernimmt der Käufer alle Verbindlichkeiten.'],
    ['der Vermögenskauf (Asset Deal)', 'asset deal', 'покупка активов (asset deal)', 'aktivlərin alışı (asset deal)', 'ma', 'Beim Vermögenskauf werden einzelne Wirtschaftsgüter übertragen.'],
    ['die feindliche Übernahme', 'hostile takeover', 'враждебное поглощение', 'düşmən satın alma', 'ma', 'Der Vorstand lehnte die feindliche Übernahme ab.'],
    ['der Börsengang', 'IPO', 'выход на биржу (IPO)', 'birjaya çıxış (IPO)', 'ma', 'Der Börsengang soll im Herbst stattfinden.', 'ipo'],
    ['der Finanzinvestor', 'financial investor, sponsor', 'финансовый инвестор', 'maliyyə investoru', 'ma', 'Der Finanzinvestor plant einen Ausstieg nach fünf Jahren.', 'spons'],
    ['die fremdfinanzierte Übernahme (LBO)', 'leveraged buyout', 'выкуп с заёмным финансированием', 'borc hesabına satın alma', 'ma', 'Bei einer fremdfinanzierten Übernahme wird der Kaufpreis überwiegend mit Schulden bezahlt.', 'lbo'],
    ['der Ausstieg (Exit)', 'exit', 'выход из инвестиции', 'çıxış (exit)', 'ma', 'Der Ausstieg erfolgt über den Verkauf an einen strategischen Käufer.', 'exit'],
    ['die Kartellbehörde', 'antitrust authority', 'антимонопольный орган', 'antiinhisar orqanı', 'ma', 'Die Kartellbehörde prüft die Fusion.'],
    // Finanzierung
    ['der Kredit', 'loan', 'кредит', 'kredit', 'fin', 'Das Unternehmen nimmt einen Kredit über 200 Millionen Euro auf.'],
    ['die Anleihe', 'bond', 'облигация', 'istiqraz', 'fin', 'Die Anleihe hat eine Laufzeit von sieben Jahren.'],
    ['die Zinsen', 'interest', 'проценты', 'faizlər', 'fin', 'Die Zinsen belasten das Ergebnis.'],
    ['die Tilgung', 'repayment', 'погашение долга', 'borcun ödənilməsi', 'fin', 'Die Tilgung erfolgt in jährlichen Raten.'],
    ['die Kreditbedingungen (Covenants)', 'covenants', 'условия кредитного договора (ковенанты)', 'kredit şərtləri (kovenantlar)', 'fin', 'Bei Verletzung der Kreditbedingungen kann die Bank den Kredit kündigen.', 'cov'],
    ['der Verschuldungsgrad', 'leverage ratio', 'уровень долговой нагрузки', 'borc yükü səviyyəsi', 'fin', 'Ein Verschuldungsgrad über 4 gilt als riskant.', 'ndebitda'],
    ['die Kapitalstruktur', 'capital structure', 'структура капитала', 'kapital strukturu', 'fin', 'Die Kapitalstruktur beeinflusst Risiko und Kapitalkosten.'],
    ['nachrangig', 'subordinated', 'субординированный (подчинённый)', 'tabe (subordinated)', 'fin', 'Nachrangige Darlehen werden im Insolvenzfall zuletzt bedient.'],
    ['die Besicherung', 'security, collateral', 'обеспечение, залог', 'təminat', 'fin', 'Der Kredit ist durch Immobilien besichert.'],
    ['die Dividende', 'dividend', 'дивиденд', 'dividend', 'fin', 'Die Dividende beträgt 1,50 Euro je Aktie.'],
    ['der Aktienrückkauf', 'share buyback', 'выкуп акций', 'səhmlərin geri alınması', 'fin', 'Der Aktienrückkauf erhöht das Ergebnis je Aktie.'],
    ['die Kapitalerhöhung', 'capital increase', 'увеличение капитала', 'kapitalın artırılması', 'fin', 'Die Kapitalerhöhung verwässert die Altaktionäre.'],
    ['die Wandelanleihe', 'convertible bond', 'конвертируемая облигация', 'konvertasiya olunan istiqraz', 'fin', 'Die Wandelanleihe kann in Aktien getauscht werden.'],
    ['die Verwässerung', 'dilution', 'размывание (разводнение)', 'durulma', 'fin', 'Neue Aktien führen zu einer Verwässerung der Anteile.', 'dil'],
    ['die Rendite', 'return, yield', 'доходность', 'gəlirlilik', 'fin', 'Der Fonds strebt eine Rendite von 20 Prozent pro Jahr an.', 'irr'],
    // Märkte
    ['der Aktienmarkt', 'stock market', 'рынок акций', 'səhm bazarı', 'mkt', 'Der Aktienmarkt reagierte positiv auf die Nachricht.'],
    ['der Anleihemarkt', 'bond market', 'рынок облигаций', 'istiqraz bazarı', 'mkt', 'Am Anleihemarkt stiegen die Renditen.'],
    ['der Leitzins', 'key interest rate', 'ключевая ставка', 'əsas faiz dərəcəsi', 'mkt', 'Die EZB hat den Leitzins gesenkt.'],
    ['die Zinskurve', 'yield curve', 'кривая доходности', 'gəlirlilik əyrisi', 'mkt', 'Eine inverse Zinskurve gilt als Warnsignal für eine Rezession.', 'yc'],
    ['die Inflation', 'inflation', 'инфляция', 'inflyasiya', 'mkt', 'Die Inflation liegt bei zwei Prozent.'],
    ['die Rezession', 'recession', 'рецессия', 'tənəzzül', 'mkt', 'In einer Rezession sinken Umsätze und Gewinne.'],
    ['die Konjunktur', 'the economy, business cycle', 'конъюнктура, экономический цикл', 'konyunktura', 'mkt', 'Die Konjunktur erholt sich langsam.'],
    ['die Volatilität', 'volatility', 'волатильность', 'volatillik', 'mkt', 'Die Volatilität am Markt hat zugenommen.'],
    ['die Liquidität', 'liquidity', 'ликвидность', 'likvidlik', 'mkt', 'Die Liquidität des Unternehmens ist ausreichend.'],
    ['der Wechselkurs', 'exchange rate', 'обменный курс', 'mübadilə məzənnəsi', 'mkt', 'Der Wechselkurs belastet die Exporte.'],
    ['die Branche', 'industry, sector', 'отрасль', 'sahə', 'mkt', 'Die Branche ist stark fragmentiert.'],
    ['die Beratungsgebühr', 'advisory fee', 'комиссия за консультацию', 'məsləhət haqqı', 'mkt', 'Die Bank erhält bei Erfolg eine Beratungsgebühr.'],
    // Bewerbung und Karriere
    ['die Bewerbung', 'application', 'заявка, отклик', 'müraciət', 'job', 'Ich schicke Ihnen meine Bewerbung für die Stelle als Analyst.'],
    ['das Anschreiben', 'cover letter', 'сопроводительное письмо', 'müşayiət məktubu', 'job', 'Im Anschreiben erkläre ich meine Motivation für diese Stelle.'],
    ['der Lebenslauf', 'CV, résumé', 'резюме', 'CV', 'job', 'Mein Lebenslauf ist beigefügt.'],
    ['das Vorstellungsgespräch', 'job interview', 'собеседование', 'müsahibə', 'job', 'Das Vorstellungsgespräch findet nächsten Dienstag statt.'],
    ['das Praktikum', 'internship', 'стажировка', 'təcrübə', 'job', 'Ich habe ein Praktikum im Bereich Corporate Finance absolviert.'],
    ['der Berufseinsteiger', 'entry-level candidate', 'начинающий специалист', 'yeni başlayan mütəxəssis', 'job', 'Wir suchen Berufseinsteiger mit Interesse an M&A.'],
    ['die Berufserfahrung', 'work experience', 'опыт работы', 'iş təcrübəsi', 'job', 'Ich bringe zwei Jahre Berufserfahrung im Compliance-Bereich mit.'],
    ['die Stärken und Schwächen', 'strengths and weaknesses', 'сильные и слабые стороны', 'güclü və zəif tərəflər', 'job', 'Zu meinen Stärken zählt analytisches Denken.'],
    ['das Assessment-Center', 'assessment centre', 'ассессмент-центр', 'qiymətləndirmə mərkəzi', 'job', 'Das Assessment-Center umfasst Fallstudien und Gruppenübungen.'],
    ['die Sprachkenntnisse', 'language skills', 'знание языков', 'dil bilikləri', 'job', 'Meine Sprachkenntnisse: Englisch fließend, Deutsch auf Niveau B2.'],
    ['die Arbeitserlaubnis', 'work permit', 'разрешение на работу', 'iş icazəsi', 'job', 'Ich benötige keine zusätzliche Arbeitserlaubnis.'],
    ['die Probezeit', 'probation period', 'испытательный срок', 'sınaq müddəti', 'job', 'Die Probezeit beträgt sechs Monate.'],
    ['Ich bewerbe mich auf die Stelle als …', 'I am applying for the position of …', 'Я откликаюсь на вакансию …', 'Mən … vəzifəsinə müraciət edirəm', 'job', 'Ich bewerbe mich auf die Stelle als Analyst im Bereich M&A.'],
    ['Ich habe Erfahrung in …', 'I have experience in …', 'У меня есть опыт в …', 'Mənim … sahəsində təcrübəm var', 'job', 'Ich habe Erfahrung in der Finanzanalyse und Berichterstattung.'],
    ['Mein Deutsch ist auf dem Niveau B2.', 'My German is at B2 level.', 'Мой немецкий на уровне B2.', 'Alman dilim B2 səviyyəsindədir.', 'job', 'Mein Deutsch ist auf dem Niveau B2, und ich verbessere es täglich.'],
    ['Ich freue mich auf Ihre Rückmeldung.', 'I look forward to hearing from you.', 'Буду рад вашему ответу.', 'Cavabınızı səbirsizliklə gözləyirəm.', 'job', 'Ich freue mich auf Ihre Rückmeldung und stehe für Rückfragen gerne zur Verfügung.'],
    ['Gerne stehe ich für ein persönliches Gespräch zur Verfügung.', 'I would be happy to meet in person.', 'Буду рад личной беседе.', 'Şəxsi görüşə məmnuniyyətlə hazıram.', 'job', 'Gerne stehe ich für ein persönliches Gespräch zur Verfügung.'],
    ['Könnten Sie mir den Stand meiner Bewerbung mitteilen?', 'Could you tell me the status of my application?', 'Не могли бы вы сообщить, на каком этапе моя заявка?', 'Müraciətimin vəziyyəti barədə məlumat verə bilərsiniz?', 'job', 'Könnten Sie mir den Stand meiner Bewerbung mitteilen? Ich bin weiterhin sehr interessiert.'],
    ['Vielen Dank für Ihre Zeit.', 'Thank you for your time.', 'Спасибо за ваше время.', 'Vaxtınız üçün təşəkkür edirəm.', 'job', 'Vielen Dank für Ihre Zeit und das nette Gespräch.'],
  ].map((w, i) => ({ i: 'w' + i, de: w[0], en: w[1], ru: w[2], az: w[3], cat: w[4], ex: w[5], k: w[6] || null }));
  const byId = Object.fromEntries(W.map(w => [w.i, w]));
  const gl = w => I18N.lang === 'ru' ? w.ru : I18N.lang === 'az' ? w.az : w.en;
  const catName = c => CATS[c][I18N.lang] || CATS[c].en;
  const gender = de => (de.match(/^(der|die|das)\s/) || [])[1] || '';
  const deHtml = de => { const g = gender(de); return g ? `<span class="art ${g}">${g}</span> ${esc(de.slice(g.length + 1))}` : esc(de); };
  const st = () => S.de || (S.de = {});
  const stats = () => { const now = Date.now(), v = Object.values(st()); return { n: W.length, known: v.filter(x => x.n >= 3).length, due: v.filter(x => x.last && x.due <= now).length, seen: v.length }; };
  const sh = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // ---- интервью на немецком: 16 вопросов с эталонными ответами (карточки темы 'de') ----
  const Q = [
    ['Erzählen Sie etwas über sich.', 'Ich habe Wirtschaft und Finanzen studiert und praktische Erfahrung in Rechnungswesen und Compliance gesammelt. Dabei habe ich gemerkt, dass mich Unternehmensbewertung und Transaktionen am meisten reizen. Deshalb möchte ich nun in den Bereich M&A wechseln. Meine analytischen Fähigkeiten und meine Lernbereitschaft bringe ich gerne in Ihr Team ein.'],
    ['Warum Investment Banking?', 'Mich reizen die analytische Tiefe, die steile Lernkurve und die frühe Verantwortung. Im Investment Banking arbeite ich an echten Transaktionen und lerne, Unternehmen zu bewerten und Strategien in Zahlen zu übersetzen. Das passt zu meinen Stärken und zu meinem Ehrgeiz.'],
    ['Warum möchten Sie gerade bei unserer Bank arbeiten?', 'Ihre Bank ist in meinem Wunschsektor stark vertreten und hat zuletzt mehrere interessante Transaktionen begleitet. Außerdem schätze ich die Teamkultur, die ich in Gesprächen kennengelernt habe. Ich möchte von erfahrenen Kollegen lernen und selbst früh Verantwortung übernehmen.'],
    ['Was sind Ihre Stärken und Schwächen?', 'Zu meinen Stärken zählen strukturiertes, analytisches Denken und Zuverlässigkeit unter Zeitdruck. Eine Schwäche ist, dass ich bei Details manchmal zu lange verweile. Daran arbeite ich, indem ich mir feste Zeitfenster setze und zuerst das große Bild prüfe.'],
    ['Wie gehen Sie mit Stress und engen Deadlines um?', 'Ich priorisiere nach Dringlichkeit und Wichtigkeit, kläre Erwartungen früh und gebe Zwischenstände ab. Wenn die Last zu hoch wird, bitte ich rechtzeitig um Unterstützung. So habe ich zuletzt einen Abschluss trotz hoher Arbeitsbelastung pünktlich geliefert.'],
    ['Wie schätzen Sie Ihr Deutsch ein?', 'Mein Deutsch ist auf dem Niveau B2. Ich kann fachliche Gespräche führen und arbeite täglich an Fachvokabular. Mein Englisch ist fließend, sodass ich in internationalen Teams sofort produktiv arbeiten kann.'],
    ['Erklären Sie kurz die DCF-Methode.', 'Beim DCF prognostiziert man den freien Cashflow für fünf bis zehn Jahre, berechnet einen Endwert und zinst alles mit den Kapitalkosten auf heute ab. Das Ergebnis ist der Unternehmenswert. Davon zieht man die Nettoverschuldung ab und erhält den Eigenkapitalwert. Wegen der Sensitivität gegenüber Zins und Wachstum zeigt man eine Spanne.'],
    ['Was ist der Unterschied zwischen Unternehmenswert und Eigenkapitalwert?', 'Der Eigenkapitalwert ist der Wert aller Aktien. Der Unternehmenswert ist der Wert des gesamten Geschäfts für alle Kapitalgeber. Man kommt vom Eigenkapitalwert zum Unternehmenswert, indem man Schulden, Vorzugsaktien und Minderheitsanteile addiert und liquide Mittel abzieht.'],
    ['Warum zieht man liquide Mittel vom Unternehmenswert ab?', 'Liquide Mittel gehören nicht zum operativen Geschäft. Der Käufer erhält sie mit dem Unternehmen und kann damit sofort Schulden tilgen. Der Unternehmenswert soll den Preis des Geschäfts selbst zeigen.'],
    ['Wie hängen die drei Abschlüsse zusammen?', 'Der Jahresüberschuss aus der GuV steht am Anfang der Kapitalflussrechnung und erhöht die Gewinnrücklagen in der Bilanz. Abschreibungen werden in der Kapitalflussrechnung zurückgerechnet. Der Endbestand an liquiden Mitteln aus der Kapitalflussrechnung steht in der Bilanz, deshalb geht die Bilanz auf.'],
    ['Was sind die Kapitalkosten (WACC)?', 'Die gewichteten Kapitalkosten sind die durchschnittliche Rendite, die Eigen- und Fremdkapitalgeber verlangen. Man gewichtet die Eigenkapitalkosten und die Fremdkapitalkosten nach Steuern mit der Kapitalstruktur. Der WACC ist der Diskontierungssatz im DCF.'],
    ['Wie läuft ein Verkaufsprozess bei einer Übernahme ab?', 'Zuerst bereitet die Bank Unterlagen vor, etwa Teaser und Informationsmemorandum. Interessenten unterschreiben eine Verschwiegenheitserklärung und geben unverbindliche Angebote ab. Die besten erhalten Zugang zum Datenraum und geben verbindliche Angebote ab. Danach folgen Verhandlung des Kaufvertrags, Unterzeichnung und Vollzug.'],
    ['Was ist eine fremdfinanzierte Übernahme (LBO)?', 'Bei einem LBO kauft ein Finanzinvestor ein Unternehmen mit hohem Fremdkapitalanteil. Die Schulden werden aus dem Cashflow des Unternehmens getilgt. Nach drei bis sieben Jahren verkauft der Investor das Unternehmen. Die Rendite stammt aus Ergebniswachstum, Multiple-Expansion und Schuldentilgung.'],
    ['Was ist der Unterschied zwischen Anteilskauf und Vermögenskauf?', 'Beim Anteilskauf erwirbt der Käufer die Anteile und damit alle Rechte und Verbindlichkeiten des Unternehmens. Beim Vermögenskauf wählt er einzelne Wirtschaftsgüter aus und erhält steuerlich eine höhere Abschreibungsbasis, aber der Prozess ist rechtlich aufwendiger.'],
    ['Wie bewerten Sie ein Unternehmen?', 'Ich verwende mehrere Methoden: die Bewertung anhand börsennotierter Vergleichsunternehmen, vergleichbare Transaktionen und den DCF. Danach fasse ich die Ergebnisse in einem Football-Field-Diagramm zusammen und leite eine Bewertungsspanne ab.'],
    ['Stellen Sie uns eine Aktie vor, die Sie empfehlen würden.', 'Ich beschreibe zuerst kurz das Unternehmen und meine These, warum der Markt es falsch bewertet. Dann nenne ich Bewertung und Kursziel mit Spanne, zwei bis drei Katalysatoren und die wichtigsten Risiken. Zum Schluss gebe ich eine klare Empfehlung.'],
  ].map((q, i) => ({ id: 'de-c' + (i + 1), topic: 'de', q: q[0], a: q[1] }));
  CARDS.push(...Q); registerAll();

  // ---- сессии ----
  function startDeck() {
    const now = Date.now(), s = st();
    const due = W.filter(w => s[w.i] && s[w.i].due <= now), fresh = sh(W.filter(w => !s[w.i]));
    const q = sh(due).concat(fresh).slice(0, 10).map(w => w.i);
    if (!q.length) return toast('Всё выучено на сегодня');
    sess = { type: 'de', mode: 'deck', q, i: 0, flip: false, dir: Math.random() < 0.5 ? 'de' : 'tr', ok: 0, again: {} }; render();
  }
  function startQuiz() {
    const ids = sh(W).slice(0, 10), qs = ids.map(w => { const same = sh(W.filter(x => x.cat === w.cat && x.i !== w.i)).slice(0, 3); const opts = sh([w, ...same]).map(x => x.i); return { id: w.i, opts, a: opts.indexOf(w.i) }; });
    sess = { type: 'de', mode: 'quiz', qs, i: 0, picked: null, ok: 0 }; render();
  }
  function startView() { sess = { type: 'de', mode: 'view', cat: 'acc' }; render(); }
  function startInterview() {
    const q = sh(Q).slice(0, 5);
    sess = { type: 'interview', q, i: 0, phase: 'ask', grades: [], times: [] }; render(); FX.iv.begin();
  }
  function grade(knew) {
    const s = sess, id = s.q[s.i], r = st()[id] || (st()[id] = { n: 0, due: 0 }), now = Date.now();
    r.last = now;
    if (knew) { r.n = Math.min(6, (r.n || 0) + 1); r.due = now + BOX[r.n] * DAY; s.ok++; addXp(2); }
    else { r.n = Math.max(0, (r.n || 0) - 2); r.due = now; if (!s.again[id]) { s.again[id] = 1; s.q.push(id); } }
    T.track('de_card', { id, ok: knew }); save();
    s.i++; s.flip = false; s.dir = Math.random() < 0.5 ? 'de' : 'tr'; render();
  }
  function quizPick(k) {
    const s = sess, q = s.qs[s.i]; if (s.picked != null) return;
    s.picked = k; const ok = k === q.a; if (ok) { s.ok++; addXp(3); } else { const r = st()[q.id] || (st()[q.id] = { n: 0, due: 0 }); r.n = 0; r.due = Date.now(); r.last = Date.now(); save(); }
    T.track('de_quiz', { id: q.id, ok }); render();
  }
  function html() {
    const s = sess, head = t => `<div class="row sp"><button class="pill" data-act="deexit">✕</button><span class="small mute">${t}</span></div>`;
    if (s.mode === 'view') {
      const list = W.filter(w => w.cat === s.cat);
      return head('Список слов') + `<div class="sts" style="margin:14px 0 6px">${Object.keys(CATS).map(c => `<button class="st ${s.cat === c ? 'on' : ''}" data-act="decat" data-v="${c}">${esc(catName(c))}</button>`).join('')}</div>` +
        `<div class="card" style="padding:4px 14px">${list.map(w => `<div class="goal" style="display:block;padding:10px 0"><div style="font-weight:600;font-size:16px;line-height:1.35" translate="no">${deHtml(w.de)}</div><div class="small">${esc(gl(w))}</div><div class="small mute" style="line-height:1.45;margin-top:2px" translate="no">${esc(w.ex)}</div></div>`).join('')}</div>`;
    }
    if (s.mode === 'deck') {
      if (s.i >= s.q.length) return head('Карточки') + `<div class="card" style="text-align:center"><h2>Серия окончена</h2><p class="sub">Знал(а): ${s.ok} из ${s.q.length}</p></div><button class="btn" data-act="dedone">Готово</button>`;
      const w = byId[s.q[s.i]], front = s.dir === 'de';
      return head(`Карточка ${s.i + 1} из ${s.q.length}`) + `<div class="bar" style="margin-top:14px"><i style="width:${s.i / s.q.length * 100}%"></i></div>
      <div class="card flash"><div class="in ${s.flip ? 'flip' : ''}" data-act="deflip"><div style="text-align:center">
        <div class="tag" style="margin-bottom:10px">${esc(catName(w.cat))}</div>
        ${!s.flip ? (front ? `<div style="font-size:26px;font-weight:700;line-height:1.3" translate="no">${deHtml(w.de)}</div>` : `<div style="font-size:22px;font-weight:600;line-height:1.3">${esc(gl(w))}</div>`) + '<div class="small mute" style="margin-top:14px;font-family:var(--sans)">нажми, чтобы увидеть ответ</div>'
          : `<div style="font-size:24px;font-weight:700;line-height:1.3" translate="no">${deHtml(w.de)}</div><div style="margin-top:8px">${esc(gl(w))}</div>${I18N.lang === 'ru' || I18N.lang === 'az' ? `<div class="small mute">${esc(w.en)}</div>` : ''}<div class="small" style="margin-top:12px;line-height:1.5;font-family:var(--sans)" translate="no">${esc(w.ex)}</div>`}
      </div></div></div>
      ${s.flip ? '<div class="grid2"><button class="btn ghost" data-act="deno">Повторить</button><button class="btn" data-act="deyes">Знал(а)</button></div>' : ''}`;
    }
    // quiz
    if (s.i >= s.qs.length) return head('Тест') + `<div class="card" style="text-align:center"><h2>${s.ok} из ${s.qs.length}</h2><p class="sub">Ошибки вернутся в карточки уже сегодня.</p></div><button class="btn" data-act="dedone">Готово</button>`;
    const q = s.qs[s.i], w = byId[q.id], p = s.picked;
    return head(`Вопрос ${s.i + 1} из ${s.qs.length}`) + `<div class="bar" style="margin-top:14px"><i style="width:${s.i / s.qs.length * 100}%"></i></div>
    <div class="card"><div class="tag">Как это по-немецки?</div><h2 style="margin-top:6px;line-height:1.35">${esc(gl(w))}</h2>
    ${q.opts.map((id, k) => `<button class="opt ${p != null ? (k === q.a ? 'ok' : k === p ? 'bad' : '') : ''}" data-act="dequiz" data-k="${k}" ${p != null ? 'disabled' : ''} translate="no">${esc(byId[id].de)}</button>`).join('')}
    ${p != null ? `<div class="explain" translate="no">${esc(w.ex)}</div>` : ''}</div>${p != null ? '<button class="btn" data-act="denext">Дальше</button>' : ''}`;
  }
  function learnCard() {
    const x = stats();
    return `<div class="card"><div class="tag" style="margin-bottom:4px">🇩🇪 Немецкий для банкинга</div><p class="small mute" style="margin:0 0 8px;line-height:1.45">${x.n} терминов Fachbegriffe, интервью и фразы для писем. Выучено: ${x.known} из ${x.n} · к повторению: ${x.due}</p>
    <div class="grid2"><button class="btn" style="margin:0" data-act="dedeck">Карточки</button><button class="btn ghost" style="margin:0" data-act="dequizs">Тест</button></div>
    <div class="grid2" style="margin-top:8px"><button class="btn ghost" style="margin:0" data-act="deint">Интервью на немецком</button><button class="btn ghost" style="margin:0" data-act="deview">Список слов</button></div></div>`;
  }
  const termLine = k => { const w = W.find(x => x.k === k); return w ? `<p class="small" style="margin:12px 0 0" translate="no">🇩🇪 <b>${deHtml(w.de)}</b></p>` : ''; };
  const detail = w => `<div class="srmore" translate="no"><div>${deHtml(w.de)}</div><div class="small">${esc(gl(w))}</div><div class="small mute" style="margin-top:4px">${esc(w.ex)}</div></div>`;
  function act(a, D) {
    switch (a) {
      case 'dedeck': startDeck(); return true;
      case 'dequizs': startQuiz(); return true;
      case 'deview': startView(); return true;
      case 'deint': startInterview(); return true;
      case 'deflip': sess.flip = true; render(); return true;
      case 'deyes': grade(true); return true;
      case 'deno': grade(false); return true;
      case 'dequiz': quizPick(+D.k); return true;
      case 'denext': sess.i++; sess.picked = null; render(); return true;
      case 'decat': sess.cat = D.v; render(); return true;
      case 'dedone': { const s = sess; if (s.mode === 'deck') addXp(5); go('learn'); return true; }
      case 'deexit': go('learn'); return true;
    }
    return false;
  }
  return { act, html, learnCard, termLine, detail, words: () => W, byId, stats };
})();

I18N.add([
  ['🇩🇪 Немецкий для банкинга', '🇩🇪 German for banking', '🇩🇪 Deutsch für Banking', '🇩🇪 Bank üçün alman dili'],
  ['{0} терминов Fachbegriffe, интервью и фразы для писем. Выучено: {1} из {2} · к повторению: {3}', '{0} Fachbegriffe, interview and email phrases. Learned: {1} of {2} · due for review: {3}', '{0} Fachbegriffe, Interview und Formulierungen für Anschreiben. Gelernt: {1} von {2} · zu wiederholen: {3}', '{0} Fachbegriffe, müsahibə və məktub ifadələri. Öyrənilib: {1} / {2} · təkrar üçün: {3}'],
  ['Карточки', 'Cards', 'Karten', 'Kartlar'], ['Тест', 'Quiz', 'Test', 'Test'],
  ['Интервью на немецком', 'Interview in German', 'Interview auf Deutsch', 'Alman dilində müsahibə'], ['Список слов', 'Word list', 'Wortliste', 'Söz siyahısı'],
  ['Карточка {0} из {1}', 'Card {0} of {1}', 'Karte {0} von {1}', 'Kart {0} / {1}'],
  ['нажми, чтобы увидеть ответ', 'tap to see the answer', 'tippe, um die Antwort zu sehen', 'cavabı görmək üçün toxun'],
  ['Серия окончена', 'Round finished', 'Runde beendet', 'Seriya bitdi'],
  ['Знал(а): {0} из {1}', 'Knew: {0} of {1}', 'Gewusst: {0} von {1}', 'Bildim: {0} / {1}'],
  ['Повторить', 'Repeat', 'Wiederholen', 'Təkrarla'], ['Знал(а)', 'Knew it', 'Gewusst', 'Bildim'],
  ['Как это по-немецки?', 'How do you say this in German?', 'Wie sagt man das auf Deutsch?', 'Bu almanca necə deyilir?'],
  ['Ошибки вернутся в карточки уже сегодня.', 'Mistakes come back in the cards today.', 'Fehler kommen heute noch in den Karten wieder.', 'Səhvlər bu gün kartlarda qayıdacaq.'],
  ['Всё выучено на сегодня', 'Everything is done for today', 'Für heute ist alles gelernt', 'Bu gün üçün hər şey öyrənilib'],
  ['Бухучёт', 'Accounting', 'Rechnungswesen', 'Mühasibat'],
]);
