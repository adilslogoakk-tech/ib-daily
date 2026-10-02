'use strict';
// Kitabın Azərbaycan versiyası (C hissəsi).
window.BOOK_AZ = window.BOOK_AZ || {};
BOOK_AZ.wacc = { title: 'WACC və CAPM: kapital nəyə başa gəlir', tag: 'Qiymətləndirmə',
  intro: "Hər biznes səhmdarların və kreditorların pulu ilə maliyyələşir və hər ikisi qazanmaq istəyir. WACC bu pulun orta qiymətini göstərir və DCF-də diskont dərəcəsi kimi xidmət edir. Gəlin nədən ibarət olduğuna baxaq.",
  blocks: [
    ['h', 'WACC-ın ideyası'],
    ['p', "WACC (weighted average cost of capital) kapitalın orta çəkili dəyəridir. Səhmdarlar 9% gəlirlilik tələb edirsə, kreditorlar isə 5% alırsa, şirkətin pulunun orta qiyməti bu rəqəmlərin arasındadır və kapitalın hansı hissəsinin borc olmasından asılıdır."],
    ['key', "WACC = E/(D+E) × Re + D/(D+E) × Rd × (1 − t)"],
    ['ul', [
      "**E** və **D**: səhmdarların kapitalının və borcun bazar dəyəri. Çəkilər balans yox, bazar dəyərləri üzrə hesablanır.",
      "**Re** (cost of equity): səhmdarların tələb etdiyi gəlirlilik.",
      "**Rd** (cost of debt): şirkətin borcu üzrə dərəcə.",
      "**t**: vergi dərəcəsi. Faizlər vergiyə cəlb olunan mənfəəti azaldır, ona görə borc şirkət üçün daha ucuzdur: o, vergi qalxanı (tax shield) verir."
    ]],
    ['h', 'CAPM modeli üzrə Cost of Equity'],
    ['p', "Səhmdarlar sabit ödəniş almır, ona görə onların tələb olunan gəlirliliyi CAPM modeli ilə qiymətləndirilir: risksiz dərəcə üstəgəl risk premiyası."],
    ['key', "Re = Rf + β × (Rm − Rf)"],
    ['ul', [
      "**Rf** (risksiz dərəcə): etibarlı ölkənin dövlət istiqrazlarının gəlirliliyi, məsələn, on illik Alman Bund-ları.",
      "**β (beta):** səhmin bazar dəyişkənliyinə həssaslığı. β = 1 bazar kimi hərəkət edir, β > 1 bazardan güclü (daha riskli), β < 1 daha zəif.",
      "**(Rm − Rf)** (bazar riski premiyası): səhm bazarının risksiz dərəcədən artıq verdiyi əlavə gəlirlilik. Adətən 4-6% qiymətləndirilir."
    ]],
    ['ex', 'WACC hesablanması', "Rf = 3%, β = 1,2, risk premiyası = 5%.\nRe = 3% + 1,2 × 5% = 9%.\nBorc: dərəcə 5%, vergi 25%, yəni vergidən sonra Rd = 5% × 0,75 = 3,75%.\nKapital strukturu: səhmlər 70%, borc 30%.\nWACC = 0,7 × 9% + 0,3 × 3,75% = 6,3% + 1,125% = 7,425% ≈ 7,4%."],
    ['h', 'Borc niyə səhmlərdən ucuzdur'],
    ['p', "İki səbəb. Birincisi: kreditorlar pulu səhmdarlardan əvvəl alır və daha az risk daşıyır, ona görə daha aşağı dərəcə ilə razılaşırlar. İkincisi: faizlər vergiləri azaldır. Lakin çox borc iflas riskini artırır və müəyyən nöqtədə həm borc üzrə dərəcə, həm də səhmdarların tələb etdiyi gəlirlilik yüksəlir, WACC isə azalmağı dayandırır."],
    ['h', 'Beta: necə alınır'],
    ['p', "Şirkətin betası analoqlar üzrə qiymətləndirilir. Oxşar açıq şirkətlərin betalarını götürürlər (onların borcundan asılı olduğu üçün levered adlanır), borcdan «təmizləyirlər», orta götürürlər və sonra hədəf kapital strukturunun borcu ilə «yükləyirlər»."],
    ['key', "βLevered = βUnlevered × (1 + (1 − t) × D/E)"],
    ['ex', 'Betanın relevering-i', "Borcsuz analoqun betası βU = 1,0. Hədəf struktur D/E = 0,4, vergi 25%.\nβL = 1,0 × (1 + 0,75 × 0,4) = 1,0 × 1,3 = 1,3."],
    ['h', 'WACC-ı nə yüksəldir və nə azaldır'],
    ['ul', [
      "Risksiz dərəcənin və ya betanın artması Re və WACC-ı yüksəldir.",
      "Risk premiyasının artması Re-ni yüksəldir.",
      "Borc payının artması (məntiqli hədlərdə) vergi qalxanı hesabına WACC-ı azaldır.",
      "Vergi dərəcəsinin artması vergidən sonra borcun dəyərini və WACC-ı azaldır."
    ]],
    ['warn', "Çəkilər üçün kapitalın bazar dəyəri əvəzinə balans dəyərindən istifadə etmək. Və ya borcu vergidən əvvəl götürmək. Bunlar WACC hesablamalarında ən çox rast gəlinən iki səhvdir."],
    ['q', "Şirkət səhmlərin bir hissəsini borcla əvəz etsə, WACC necə dəyişər?", "Əvvəlcə WACC azalır: borc səhmlərdən ucuzdur və vergi qalxanı verir. Lakin borcun artması ilə risk artır, ona görə həm Re, həm də Rd sıçrayır. Elə optimal struktur var ki, ondan sonra WACC yenidən artmağa başlayır."],
    ['key', "WACC kapitalın orta qiymətidir, DCF-də diskont dərəcəsidir. Re CAPM üzrə hesablanır (Rf + β × premiya), borc vergidən sonra nəzərə alınır. Beta analoqlar üzrə qiymətləndirilir və kapital strukturuna uyğunlaşdırılır."]
  ] };

BOOK_AZ.dcf = { title: 'DCF: pul axınları üzrə qiymətləndirmə addım-addım', tag: 'Qiymətləndirmə',
  intro: "DCF nəzəriyyədə əsas qiymətləndirmə metodu sayılır: şirkətin dəyəri onun gətirəcəyi, bu günə gətirilmiş pulların cəminə bərabərdir. Praktikada o, mültiplikatorlarla birləşdirilir. Bu bölmədə rəqəmlərlə tam qiymətləndirmə quracaq və təhlükəli yerləri təhlil edəcəyik.",
  blocks: [
    ['h', 'DCF-in beş addımı'],
    ['ol', [
      "5-10 il üçün sərbəst pul axınını (UFCF) proqnozlaşdırmaq.",
      "Terminal Value-nu hesablamaq: proqnozdan kənarda şirkətin dəyəri.",
      "Diskont dərəcəsini (WACC) seçmək.",
      "Axınları və Terminal Value-nu bu günə gətirib toplamaq. Enterprise Value alınacaq.",
      "EV-dən Equity Value-ya (xalis borcu çıxmaq) və səhmin qiymətinə (diluted səhmlərin sayına bölmək) keçmək."
    ]],
    ['h', '1-ci addım. Pul axınlarının proqnozu'],
    ['p', "Proqnoz gəlirdən qurulur: artım tempi, EBIT marjası, vergilər, CapEx, amortizasiya, dövriyyə kapitalının dəyişməsi. Proqnoz dövrü elə olmalıdır ki, sonunda şirkət dayanıqlı vəziyyətə çıxsın. Sürətlə böyüyən şirkətlər üçün bu, 10 il, yetkinlər üçün 5 ildir."],
    ['h', '2-ci addım. Terminal Value'],
    ['p', "Sonsuza qədər proqnoz vermək olmaz. Ona görə son proqnoz ilindən sonra baş verən hər şey bir rəqəmə yığılır. İki üsul var."],
    ['ul', [
      "**Gordon Growth (əbədi artım metodu).** Proqnozdan sonrakı axının əbədi olaraq kiçik sabit g tempi ilə artdığını fərz edirik. TV = FCF × (1 + g) / (WACC − g). Düstur yalnız WACC g-dən böyük olduqda işləyir. g tempini iqtisadiyyatın uzunmüddətli artımına yaxın, adətən 1-3% götürürlər.",
      "**Exit Multiple (çıxış mültiplikatoru).** TV = son ilin EBITDA-sı × şirkəti satmaq olacaq mültiplikator, məsələn, analoqların orta EV/EBITDA-sı."
    ]],
    ['p', "Yaxşı praktika: hər iki üsulla hesablamaq və yoxlamaq. Gordon-dan implied mültiplikatoru, mültiplikatordan implied g tempini çıxarmaq olar. g 6% çıxarsa, mültiplikator qeyri-real yüksəkdir."],
    ['h', 'Tam nümunə'],
    ['p', "Tutaq ki, beş il üçün UFCF proqnozu: 100, 110, 121, 133,1 və 146,4 mln €. WACC 9%, artım tempi g = 2%."],
    ['tbl', ['İl', 'UFCF', '1/(1,09)^n vuruğu', 'PV'], [
      ['1', '100,0', '0,917', '91,7'],
      ['2', '110,0', '0,842', '92,6'],
      ['3', '121,0', '0,772', '93,4'],
      ['4', '133,1', '0,708', '94,3'],
      ['5', '146,4', '0,650', '95,2'],
      ['Axınların PV cəmi', '', '', '467,2']
    ]],
    ['p', "Terminal Value = 146,4 × 1,02 / (0,09 − 0,02) = 149,3 / 0,07 = 2 133,4 mln €. Bu günə gətiririk: 2 133,4 × 0,650 = 1 386,6 mln €."],
    ['key', "EV = 467,2 + 1 386,6 = 1 853,8 mln €. Terminal Value bütün dəyərin 74,8%-ni verir."],
    ['p', "Xalis borc 400 mln €, səhmlərin sayı 100 mln olsun. Equity Value = 1 853,8 − 400 = 1 453,8 mln €, səhmin qiyməti 14,54 €."],
    ['h', 'Terminal Value niyə bu qədər vacibdir'],
    ['p', "Nümunəmizdə dəyərin dörddə üçü Terminal Value-dur. Ona görə WACC və ya g-nin kiçik dəyişikliyi nəticəni kəskin dəyişir. Məhz buna görə həmişə həssaslıq cədvəli qurulur."],
    ['tbl', ['EV, mln €', 'g = 1%', 'g = 2%', 'g = 3%'], [
      ['WACC 8%', '1 918', '2 174', '2 533'],
      ['WACC 9%', '1 669', '1 854', '2 101'],
      ['WACC 10%', '1 475', '1 614', '1 792']
    ]],
    ['p', "1 475-dən 2 533-ə qədər fərq təxminən iki dəfədir. DCF-dən dürüst nəticə «şirkət 1 854 edir» yox, «şirkət məntiqli fərziyyələrlə təxminən 1,6-dan 2,2 milyarda qədər edir» olmalıdır."],
    ['h', 'Mid-year convention'],
    ['p', "Axınlar 31 dekabrda yox, il ərzində daxil olur. Ona görə çox vaxt n − 0,5 il üzrə diskontlaşdırırlar. Qiymətləndirmə bir qədər yüksək çıxır. Hər yerdə eyni qaydadan istifadə etmək vacibdir."],
    ['h', 'Tipik tələlər'],
    ['ul', [
      "**Optimist Terminal Value.** İqtisadiyyatın artımından yüksək g və ya bu günkü bazar mültiplikatorlarından yüksək mültiplikator.",
      "**Uyğunsuzluq.** Borcdan əvvəlki axınlar (UFCF) səhmlərin dəyəri üzrə yox, WACC üzrə; borcdan sonrakı axınlar Re üzrə diskontlaşdırılmalıdır.",
      "Terminal ildə **CapEx amortizasiyadan azdır**: biznesin aktivlərini yeniləmədən əbədi yaşadığı fərziyyəsi.",
      "**Unudulmuş körpü maddələri:** imtiyazlı səhmlər, azlıq payı, pensiya öhdəlikləri."
    ]],
    ['q', "Walk me through a DCF.", "Şirkətin sərbəst pul axınını 5-10 il üçün proqnozlaşdırırıq, Terminal Value hesablayırıq (Gordon Growth və ya exit multiple), hər şeyi WACC ilə diskontlaşdırıb toplayırıq. Enterprise Value alınır. Sonra xalis borcu və digər tələbləri çıxıb Equity Value alırıq və diluted səhmlərin sayına bölürük."],
    ['q', "WACC artarsa, DCF üzrə dəyərə nə olacaq?", "Dəyər düşəcək: axınlar daha güclü diskontlaşdırılır, xüsusilə gələcəkdə uzaqda olan Terminal Value. Biznes nə qədər artımlıdırsa və Terminal Value-nun payı nə qədər böyükdürsə, WACC-a həssaslıq bir o qədər güclüdür."],
    ['key', "DCF = diskontlaşdırılmış sərbəst axınların cəmi üstəgəl diskontlaşdırılmış Terminal Value. Nəticə WACC və g-dən güclü asılıdır, ona görə tək rəqəm kimi yox, diapazon kimi göstərilir."]
  ] };
