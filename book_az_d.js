'use strict';
// Kitabın Azərbaycan versiyası (D hissəsi).
window.BOOK_AZ = window.BOOK_AZ || {};
BOOK_AZ.mult = { title: 'Mültiplikatorlar: hansı nə zaman', tag: 'Qiymətləndirmə',
  intro: "Mültiplikatorlar şirkəti qiymətləndirməyin ən sürətli yoludur: uzun proqnoz əvəzinə onu oxşarlarla müqayisə edirik. Lakin hər mültiplikatorun tətbiq sahəsi var və yanlış seçim absurd nəticələrə gətirir.",
  blocks: [
    ['h', 'Mültiplikatorun ideyası'],
    ['p', "Mültiplikator şirkətin dəyərinin onun göstəricisinə nisbətidir: mənfəət, gəlir, balans kapitalı. O, «bazar bu göstəricinin bir vahidi üçün nə qədər ödəyir» sualına cavab verir. Müqayisə olunan şirkətlər 8x EBITDA ilə ticarət edirsə, EBITDA-sı 100 mln € olan şirkəti təxminən 800 mln € qiymətləndirmək olar."],
    ['h', 'Mültiplikatorların iki ailəsi'],
    ['p', "Əsas qaydanı yadda saxlayın: surət və məxrəc eyni investorlara aid olmalıdır."],
    ['tbl', ['Ailə', 'Mültiplikatorlar', 'Məxrəc göstəriciləri'], [
      ['EV səviyyəsində (borcdan əvvəl)', 'EV/Revenue, EV/EBITDA, EV/EBIT', 'Gəlir, EBITDA, EBIT'],
      ['Equity səviyyəsində (borcdan sonra)', 'P/E, P/B, PEG, dividend və FCF gəlirliliyi', 'Net Income, EPS, balans kapitalı']
    ]],
    ['h', 'Nümunələrlə əsas mültiplikatorlar'],
    ['ul', [
      "**EV/EBITDA.** M&A-nın iş atı. EV 1 200 və EBITDA 150 8,0x verir. Borcdan, vergilərdən və amortizasiyadan asılı deyil.",
      "**EV/EBIT.** Köhnəlməni nəzərə aldığı üçün kapital tutumlu bizneslər üçün daha yaxşıdır. EV 900 və EBIT 100 9,0x verir.",
      "**EV/Revenue.** Mənfəətsiz və ya qeyri-sabit marjalı şirkətlər üçün. EV 600 və gəlir 200 3,0x verir.",
      "**P/E.** Səhmin qiymətinin bir səhmə mənfəətə nisbəti. Qiymət 45 və EPS 2,5 18x verir. Tərs kəmiyyət, earnings yield, səhmin «gəlirliliyini» göstərir: P/E 25 olduqda 1/25 = 4%.",
      "**P/B.** Kapitallaşmanın balans kapitalına nisbəti. 600 / 400 = 1,5x. Banklar üçün əsasdır.",
      "**PEG.** P/E mənfəətin faizlə artım tempinə bölünür. P/E 20 və artım 10% olduqda PEG 2,0-dir. Bahalı sürətlə böyüyən və ucuz yavaş şirkətləri müqayisə etməyə kömək edir.",
      "**Dividend gəlirliliyi və FCF yield.** Qiymət 60 olduqda dividend 3 5% verir. Kapitallaşma 1 000 olduqda FCF 50 də 5%-dir."
    ]],
    ['h', 'Mültiplikatorun səviyyəsini nə müəyyən edir'],
    ['p', "Mültiplikator təsadüfi deyil. O, sürətli artımlı, yüksək marjalı və yüksək kapital gəlirliliyi (ROIC) olan, həmçinin aşağı riskli (aşağı WACC) şirkətlərdə yüksəkdir. Şirkət 20x EBITDA ilə, analoqları isə 8x ilə ticarət edirsə, bazar ondan çox daha çox artım gözləyir və ya onu çox daha etibarlı sayır."],
    ['h', 'Sahəyə görə mültiplikatorun seçilməsi'],
    ['tbl', ['Sahə', 'Tipik mültiplikatorlar', 'Niyə'], [
      ['Banklar, sığortaçılar', 'P/E, P/B, P/TBV', 'Borc bank üçün xammaldır, EV mənasızdır'],
      ['REIT (daşınmaz əmlak)', 'P/FFO, P/AFFO, NAV', 'Net Income daşınmaz əmlakın amortizasiyası ilə təhrif olunur'],
      ['SaaS, texnologiya', 'EV/ARR, EV/Revenue, Rule of 40', 'Çox vaxt mənfəət yoxdur, abunə artımı vacibdir'],
      ['Neft və qaz', 'EV/EBITDAX, ehtiyatlar üzrə NAV', 'Müqayisə üçün kəşfiyyat xərcləri ayrılır'],
      ['Pərakəndə satış, restoranlar', 'EV/EBITDAR', 'İcarə xərclərin böyük hissəsini təşkil edir'],
      ['Kommunal xidmətlər, infrastruktur', 'EV/EBITDA, dividend gəlirliliyi', 'Sabit axınlar, ödəniş qiymətləndirilir']
    ]],
    ['p', "SaaS üçün **Rule of 40**: gəlir artım tempi üstəgəl marja (daha çox FCF) ən azı 40% verməlidir. 25% artım və 10% marja 35% verir: həddən aşağı."],
    ['h', 'LTM və NTM'],
    ['p', "Mültiplikatoru keçmiş göstəricilər (LTM, son 12 ay) və ya proqnoz göstəriciləri (NTM və ya 2027E) üzrə hesablamaq olar. Bazar irəliyə baxır, ona görə sürətlə böyüyən şirkətlərdə proqnoz mültiplikatorları tarixi olanlardan nəzərəçarpacaq dərəcədə aşağıdır. Əsas məsələ eyni dövrləri müqayisə etməkdir."],
    ['h', 'Tipik tələlər'],
    ['ul', [
      "**Mənfi və ya birdəfəlik mənfəət.** P/E işləmir, normallaşdırma və ya başqa mültiplikator lazımdır.",
      "**Tsiklin zirvəsi.** Tsiklik şirkətdə zirvədə mənfəət yüksək, mültiplikator aşağı və aldadıcı dərəcədə ucuzdur. Orta tsikl göstəriciləri götürülür.",
      "**Fərqli uçot.** IFRS 16 və US GAAP üzrə icarə, inkişaf xərclərinin kapitallaşdırılması. «Alma ilə portağalın» müqayisəsi.",
      "**Səviyyələrin qarışdırılması.** EV-ni Net Income-a, Equity Value-nu EBITDA-ya."
    ]],
    ['q', "M&A-da niyə P/E əvəzinə daha çox EV/EBITDA istifadə olunur?", "EV/EBITDA kapital strukturundan, vergilərdən və amortizasiya siyasətindən asılı deyil, ona görə məhz əməliyyat biznesini müqayisə edir. P/E borcdan asılıdır: borc payı fərqli olan iki eyni şirkətin P/E-si fərqli olacaq."],
    ['q', "Mənfi EBITDA-sı olan şirkəti necə qiymətləndirmək olar?", "Gəlir mültiplikatorları (EV/Revenue, EV/ARR), artım və vahid iqtisadiyyat göstəriciləri və ya hədəf marjaya çıxışla DCF istifadə olunur. Mənfəətli mültiplikatorlar burada işləmir."],
    ['key', "Mültiplikatoru sahəyə və biznesin mərhələsinə görə seçin, surət və məxrəcin uyğunluğunu saxlayın və eyni dövrləri müqayisə edin. Mültiplikator artım, marja, kapital gəlirliliyi və risklə izah olunur."]
  ] };

BOOK_AZ.comps = { title: 'Comps, precedents, SOTP və football field', tag: 'Qiymətləndirmə',
  intro: "Mültiplikatorlar özlüyündə heç nəyi qiymətləndirmir, onlara düzgün analoqlar seçilməyincə. İnvestisiya bankında qiymətləndirmə adətən bir neçə metoddan yığılır və ümumi qrafiklə göstərilir. Bu bölmədə bunun necə edildiyini təhlil edəcəyik.",
  blocks: [
    ['h', 'Trading comps: birjadakı analoqlar'],
    ['p', "Müqayisə olunan açıq şirkətlər metodu (trading comps) bu gün birjada ticarət edən oxşar şirkətlərin mültiplikatorlarını götürüb qiymətləndirilən şirkətə tətbiq edir. Bu, azlıq paketinin qiymətləndirilməsidir: nəzarət premiyasını daxil etmir."],
    ['ol', [
      "**Peer group seçmək:** eyni sektor və biznes modeli, müqayisə olunan ölçü, artım tempi, marja, coğrafiya, risk.",
      "**Məlumatları toplamaq:** səhmin qiyməti, diluted səhmlərin sayı, borc, cash, LTM və NTM göstəriciləri. Onları normallaşdırmaq (normallaşdırma bölməsinə bax).",
      "Hər şirkət üçün **mültiplikatorları hesablamaq**.",
      "**Statistikanı seçmək:** median, orta, yuxarı və aşağı kvartillər. Median kənar nöqtələrə qarşı davamlıdır.",
      "**Hədəfə tətbiq etmək:** mültiplikator × hədəfin göstəricisi = EV. Sonra xalis borcu çıxıb Equity Value və səhmin qiymətini almaq."
    ]],
    ['ex', 'Analoqlar üzrə qiymətləndirmə', "Analoqlar 7,5x, 8,0x, 8,5x, 9,5x və 10,0x EV/EBITDA ilə ticarət edir. Median 8,5x.\nHədəfin EBITDA-sı 75 mln €, xalis borcu 100 mln €.\nEV = 75 × 8,5 = 637,5 mln €.\nEquity Value = 637,5 − 100 = 537,5 mln €."],
    ['h', 'Precedent transactions: keçmiş sövdələşmələr'],
    ['p', "Müqayisə olunan sövdələşmələr metodu oxşar M&A sövdələşmələrinin hansı mültiplikatorlarla keçdiyinə baxır. Bu mültiplikatorlar **nəzarət premiyasını** və gözlənilən sinerjiləri daxil edir: alıcı bütün şirkəti almaq üçün bazar qiymətindən çox ödəyir. Ona görə onlar adətən trading comps-dan yüksəkdir."],
    ['p', "Sövdələşmələr 10,5x EBITDA ilə keçibsə, hədəfimiz üçün EV = 75 × 10,5 = 787,5 mln €, analoqlar üzrə 637,5-dən nəzərəçarpacaq dərəcədə yüksək. Ehtiyatlı olun: sövdələşmələr yaxın zamanda və ölçüyə görə müqayisə olunan olmalıdır, bazar şəraiti (dərəcələr, əhval) isə illər ərzində çox dəyişir."],
    ['h', 'Hansı metod daha böyük qiymətləndirmə verir'],
    ['ul', [
      "**Precedent transactions** nəzarət premiyasına görə adətən comps-dan yüksəkdir.",
      "**Trading comps** nəzarətsiz azlıq qiymətini əks etdirir.",
      "**DCF** fərziyyələrdən asılıdır və istənilən nəticə verə bilər.",
      "**LBO analizi** maliyyə investorunun hədəf gəlirlilikdə nə qədər ödəyə biləcəyini göstərir. Çox vaxt bu, qiymətləndirmənin «döşəməsi»dir."
    ]],
    ['h', 'SOTP: hissələrin cəmi'],
    ['p', "Şirkətin bir neçə fərqli biznesi varsa (konqlomerat), onu bir mültiplikator dərəcəsi ilə qiymətləndirmək olmaz. Sum-of-the-parts metodu hər seqmenti öz analoqları üzrə qiymətləndirir, sonra toplayır, korporativ xərcləri və xalis borcu çıxır."],
    ['ex', 'SOTP', "A seqmenti: EBITDA 100 × 8x = 800.\nB seqmenti: EBITDA 50 × 12x = 600.\nKorporativ xərclər −100 kapitallaşdırılıb.\nEV = 800 + 600 − 100 = 1 300. Xalis borc 400.\nEquity Value = 1 300 − 400 = 900."],
    ['p', "Tez-tez hissələrin cəmi bazar kapitallaşmasından yüksək çıxır. Bu fərq **conglomerate discount** adlanır: bazar konqlomeratın ağırlığına görə az ödəyir və bu, şirkətin bölünməsi üçün səbəbdir."],
    ['h', 'Football field: metodların xülasəsi'],
    ['p', "Football field («futbol meydanı») hər metoda qiymətləndirmə diapazonunun üfüqi zolağının uyğun gəldiyi qrafikdir. Diapazonların harada kəsişdiyi və hansı metodun kənara çıxdığı görünür."],
    ['tbl', ['Metod', 'EV diapazonu, mln €', 'Şərh'], [
      ['52 həftəlik diapazon', '1 450-1 850', 'Açıq şirkət üçün: keçmiş qiymətlər'],
      ['Trading comps', '1 700-2 000', 'Nəzarət premiyası olmadan'],
      ['Precedents', '2 000-2 400', 'Premiya və sinerjilərlə'],
      ['DCF (həssaslıq cədvəli)', '1 600-2 200', 'WACC 8-10%, g 1-3%'],
      ['LBO (IRR 20-25%)', '1 500-1 800', 'Maliyyə investorunun imkanları']
    ]],
    ['p', "Belə qrafikdən nəticə: ədalətli dəyər əksər metodların kəsişdiyi 1 800-2 000 mln € ətrafındadır, 2 200-dən yuxarı təklif isə sinerjilərə inam tələb edir."],
    ['h', 'Analoqların seçimində tipik suallar'],
    ['ul', [
      "**Az analoq.** Meyarları genişləndirirlər: coğrafiya, ölçü, qonşu sahələr.",
      "**Kənar nöqtələr.** Anomal mültiplikatorlu şirkətləri istisna edirlər (zərərlər, birdəfəlik hadisələr).",
      "**Fərqli maliyyə illəri.** Təqvim ilinə gətirirlər (təqvimləşdirmə).",
      "**Fərqli kapital strukturu.** Ona görə EV mültiplikatorları daha yaxşıdır."
    ]],
    ['q', "Comparable companies necə seçilir?", "Sahə və biznes modelinə, ölçüyə, artım tempinə, marjaya, coğrafiyaya və riskə görə. Məlumatlar normallaşdırılır (LTM, adjusted EBITDA), mültiplikatorlar hesablanır və median ilə kvartillərə baxılır."],
    ['q', "Niyə precedent transactions adətən trading comps-dan yüksək qiymətləndirmə verir?", "Çünki sövdələşmələrdəki qiymət nəzarət premiyasını və gözlənilən sinerjiləri daxil edir, səhmin bazar qiymətində isə bu yoxdur."],
    ['key', "Trading comps azlıq səhmlərinin qiymətini, precedents premiyalı nəzarət qiymətini göstərir, SOTP konqlomeratlara uyğundur, DCF fərziyyələrdən asılıdır. Football field hər şeyi ədalətli dəyərin bir diapazonuna yığır."]
  ] };
