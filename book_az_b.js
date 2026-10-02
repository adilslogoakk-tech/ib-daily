'use strict';
// Kitabın Azərbaycan versiyası (B hissəsi).
window.BOOK_AZ = window.BOOK_AZ || {};
BOOK_AZ.statements = { title: 'Üç hesabat və onların necə bağlı olması', tag: 'Hesabat',
  intro: "Şirkətin maliyyə hesabatı üç sənəddən ibarətdir: mənfəət və zərər hesabatı, balans və pul hərəkəti hesabatı. Onları ağılda bir-birinə bağlaya bilmək əsas bacarıqdır və demək olar ki, hər müsahibədə yoxlanılır.",
  blocks: [
    ['h', 'Hər hesabat nəyi göstərir'],
    ['ul', [
      "**Income Statement (mənfəət və zərər hesabatı).** Dövr üzrə nəticə: gəlir, xərclər, mənfəət. «Nə qədər qazandıq» sualına cavab verir.",
      "**Balance Sheet (balans).** Müəyyən tarixə şəkil: şirkətdə nə var (aktivlər), nə borcludur (öhdəliklər) və səhmdarlara nə qalır (kapital). Həmişə eyniyyət ödənilir: Assets = Liabilities + Equity.",
      "**Cash Flow Statement (pul hərəkəti hesabatı).** Dövr ərzində pul haradan gəldi və hara getdi. «Pul hara getdi» sualına cavab verir."
    ]],
    ['h', 'Balans nədən ibarətdir'],
    ['ul', [
      "**Cari aktivlər:** Cash, Accounts Receivable (debitor borcu, müştərilərin borcları), Inventory (ehtiyatlar).",
      "**Uzunmüddətli aktivlər:** PP&E (binalar, avadanlıq), qeyri-maddi aktivlər, Goodwill.",
      "**Öhdəliklər:** Accounts Payable (kreditor borcu, təchizatçılara borclar), hesablanmış xərclər, Debt, Deferred Revenue.",
      "**Kapital:** səhm kapitalı, əlavə kapital (APIC), Retained Earnings (bölüşdürülməmiş mənfəət)."
    ]],
    ['h', 'Hesabatlar bir-biri ilə necə bağlıdır'],
    ['ol', [
      "Mənfəət hesabatındakı **Net Income** pul hərəkəti hesabatının əvvəlinə düşür və balansda Retained Earnings-i artırır.",
      "**Amortizasiya** Net Income-u azaldır, lakin pul hərəkəti hesabatında geri əlavə olunur (pulsuzdur). Balansda PP&E-ni azaldır.",
      "**Dövriyyə kapitalının dəyişməsi** (debitor, ehtiyatlar, kreditor) pul hərəkəti hesabatına düşür və balansın müvafiq maddələrini dəyişir.",
      "**CapEx** balansda PP&E-ni artırır və pul hərəkəti hesabatında pulu azaldır (investisiya hissəsi).",
      "**Borc və dividendlər** balansda Debt və Retained Earnings-i dəyişir və pul hərəkəti hesabatının maliyyə hissəsində göstərilir.",
      "Pul hərəkəti hesabatından **pul üzrə yekun** (dövrün sonunda Cash) balansdakı Cash sətrinə düşür. Balans məhz buna görə tarazlaşır."
    ]],
    ['h', 'Pul hərəkəti hesabatının üç hissəsi'],
    ['ul', [
      "**CFO (əməliyyat):** Net Income + pulsuz xərclər (D&A, SBC) ± dövriyyə kapitalının dəyişməsi.",
      "**CFI (investisiya):** CapEx, bizneslərin və aktivlərin alışı və satışı.",
      "**CFF (maliyyə):** borcun buraxılışı və ödənilməsi, səhm buraxılışı, dividendlər, səhmlərin geri alınması (buyback)."
    ]],
    ['ex', 'Bir il üçün mini-model', "Net Income 120, amortizasiya 50, CapEx 80, dövriyyə kapitalı 10 artdı (pul dondu), borc ödənildi 20, dividend ödənildi 30.\nCFO = 120 + 50 − 10 = 160.\nCFI = −80.\nCFF = −20 − 30 = −50.\nCash-ın dəyişməsi = 160 − 80 − 50 = +30. Bu 30 balansdakı Cash-a əlavə olunur."],
    ['h', 'Klassik sual: amortizasiya 10 artarsa nə olar'],
    ['p', "Tutaq ki, vergi dərəcəsi 25%-dir. Təsiri hər üç hesabat üzrə izləyək."],
    ['ul', [
      "**Mənfəət hesabatı:** EBIT 10 düşür, vergi 2,5 düşür, Net Income 7,5 düşür.",
      "**Pul hərəkəti hesabatı:** Net Income 7,5 aşağıdır, lakin amortizasiya +10 geri əlavə olunur. Yekun: cash 2,5 artdı. Bu, vergi qənaətidir.",
      "**Balans:** aktivlər −10 (PP&E) + 2,5 (cash) = −7,5 dəyişdi. Kapital −7,5 dəyişdi (Retained Earnings). Balans tarazlaşır."
    ]],
    ['q', "Müsbət xalis mənfəəti olan şirkət necə iflas edə bilər?", "Net Income pula bərabər deyil. Debitor borcunun və ehtiyatların artımı, böyük kapital xərcləri və ya borcun ödənilməsi kağız üzərində mənfəət müsbət olduğu halda bütün nağd pulu yeyə bilər. İflas mənfəətin yox, pulun çatışmazlığından baş verir."],
    ['warn', "Dividendlər xərc deyil və mənfəət hesabatında əks olunmur. Onlar balansda birbaşa Retained Earnings-i azaldır və pul hərəkəti hesabatının maliyyə hissəsinə düşür."],
    ['key', "Net Income hər üç hesabatı bağlayır. Balans tarazlaşır, çünki pul hərəkəti hesabatından yekun cash aktivlərə düşür, hər dəyişiklik isə iki tərəfdən əks olunub."]
  ] };

BOOK_AZ.fcf = { title: 'Sərbəst pul axını və dövriyyə kapitalı', tag: 'Qiymətləndirmə',
  intro: "Mənfəəti çəkmək olar, pulu yox. Ona görə DCF-in əsasında mənfəət yox, sərbəst pul axını (FCF) durur: biznesin investorlara real ödəyə biləcəyi pul. Bu bölmədə onun necə hesablandığını və mənfəətdən niyə fərqləndiyini təhlil edəcəyik.",
  blocks: [
    ['h', 'FCF nədir'],
    ['p', "Free Cash Flow bütün əməliyyat xərcləri, vergilər və biznesi saxlamaq və inkişaf etdirmək üçün lazım olan investisiyalardan sonra şirkətdə qalan puldur. Məhz onu kreditorlara və səhmdarlara ödəmək olar."],
    ['p', "Axının iki növü var. **Unlevered FCF** (UFCF) borc üzrə ödənişlərdən əvvəl hesablanır və bütün investorlar üçün əlçatandır. DCF-də ondan istifadə olunur. **Levered FCF** (LFCF) borc üzrə faizlər və məcburi ödənişlərdən sonra hesablanır və səhmdarlara məxsusdur."],
    ['h', 'Unlevered FCF düsturu'],
    ['key', "UFCF = EBIT × (1 − vergi) + D&A − CapEx − ΔNWC"],
    ['ul', [
      "**EBIT × (1 − vergi)** NOPAT-dır, vergidən sonra, lakin faizlərdən əvvəl əməliyyat mənfəəti.",
      "**+ D&A:** amortizasiya mənfəətdən çıxılmışdı, lakin ona pul xərclənməmişdi. Geri qaytarırıq.",
      "**− CapEx:** avadanlıq və binalara xərclənmiş pul. Mənfəətdə bunlar yalnız amortizasiya vasitəsilə tədricən görünür, pul axınında isə dərhal.",
      "**− ΔNWC:** dövriyyə kapitalının artması pulu debitor borclarında və ehtiyatlarda dondurur."
    ]],
    ['ex', 'UFCF hesablanması', "EBIT = 200, vergi 25%, D&A = 50, CapEx = 80, dövriyyə kapitalı 10 artdı.\nNOPAT = 200 × 0,75 = 150.\nUFCF = 150 + 50 − 80 − 10 = 110.\nŞirkətin EBITDA-sı isə 250 olardı: real pul axınına çatmır."],
    ['h', 'Levered FCF: borcdan sonra'],
    ['p', "Səhmdarlar üçün axını almaq üçün UFCF-dən vergidən sonrakı faizləri çıxır və borcun xalis cəlbini əlavə edirlər. Nümunəni davam etdirək: faizlər 40, vergi 25%. Vergidən sonra faizlər 40 × 0,75 = 30. Yeni borc cəlb olunmayıbsa, LFCF = 110 − 30 = 80."],
    ['h', 'Dövriyyə kapitalı (NWC)'],
    ['p', "NWC cari əməliyyat aktivləri minus cari əməliyyat öhdəlikləridir. Pul və borc bura daxil deyil."],
    ['ul', [
      "**Debitor borcu (AR).** Müştərilər alıb, lakin hələ ödəməyib. Debitor borcunun artımı pulu dondurur.",
      "**Ehtiyatlar (Inventory).** Anbardakı mal artıq xərclənmiş, lakin qayıtmamış puldur.",
      "**Kreditor borcu (AP).** Malı almışıq, lakin təchizatçıya hələ ödəməmişik. Bu, pulsuz kreditdir: kreditor borcunun artımı pulu azad edir."
    ]],
    ['p', "Hesablama qaydası: NWC-də aktivlərin **artımı** pul axınını azaldır, öhdəliklərin **artımı** artırır. Dövriyyə sürəti günlərlə ölçülür. Məsələn, DSO (Days Sales Outstanding) = debitor borcu / gəlir × 365. Gəlir 3 650, debitor borcu 300 olarsa, DSO = 30 gün: müştərilər orta hesabla bir aydan sonra ödəyir."],
    ['h', 'CapEx: saxlayıcı və artırıcı'],
    ['p', "İnvestisiyaların bir hissəsi yalnız biznesin pisləşməməsi üçün lazımdır (avadanlığın əvəzlənməsi), bir hissəsi artım üçün (yeni zavodlar). DCF-in terminal mərhələsində dayanıqlı axını proqnozlaşdırırsınızsa, CapEx ən azı amortizasiyadan az olmamalıdır: əks halda şirkətin aktivləri yeniləmədən əbədi yaşadığını fərz edirsiniz."],
    ['h', 'İşçilərin səhm opsionları (SBC)'],
    ['p', "Bəzi şirkətlər işçilərə səhmlərlə ödəyir. Xərc mənfəətdə tanınır, lakin pul xərclənmir və pul hərəkəti hesabatında geri əlavə olunur. Mühafizəkar analitiklər SBC-ni real xərc sayır (o, səhmdarları durulaşdırır) və FCF-ə əlavə etmirlər."],
    ['warn', "Dövriyyə kapitalının artımını çıxmağı unutmaq və ya onun işarəsini qarışdırmaq. Debitor borcunun və ehtiyatların artımı həmişə FCF-i azaldır, kreditor borcunun artımı artırır."],
    ['q', "FCF Net Income-dan nə ilə fərqlənir?", "Net Income pulsuz maddələri (amortizasiya) nəzərə alır və CapEx ilə dövriyyə kapitalının dəyişməsini nəzərə almır. FCF isə əksinə real pulu göstərir: amortizasiyanı əlavə edir, investisiyaları və dövriyyə kapitalının artımını çıxır. Ona görə böyüyən şirkətdə FCF adətən mənfəətdən aşağıdır."],
    ['key', "FCF investorlara verilə bilən puldur. Borcdan əvvəlki UFCF DCF-də istifadə olunur, borcdan sonrakı LFCF səhmdarlara məxsusdur. Mənfəətdən amortizasiya, CapEx və dövriyyə kapitalı ilə fərqlənir."]
  ] };

BOOK_AZ.tvm = { title: 'Zaman üzrə pul: PV, NPV, IRR', tag: 'Əsaslar',
  intro: "Bu günkü avro sabahkı avrodan daha dəyərlidir: onu investisiya edib qazanmaq olar. Demək olar ki, bütün qiymətləndirmə bu sadə ideyaya əsaslanır. Bu bölmədə cari dəyəri, NPV və IRR-ı təhlil edəcəyik.",
  blocks: [
    ['h', 'Cari və gələcək dəyər'],
    ['p', "100 €-nu illik 10%-lə qoysanız, bir ildən sonra 110 €, iki ildən sonra 121 € olacaq. Mürəkkəb faiz belə işləyir: faizlər faizlərə də hesablanır."],
    ['key', "FV = PV × (1 + r)^n   ⇔   PV = FV / (1 + r)^n"],
    ['p', "PV (present value, cari dəyər) gələcək məbləğin bu gün nə qədər etdiyini göstərir. Hesablama prosesi diskontlaşdırma, r dərəcəsi isə diskont dərəcəsi adlanır. 10% dərəcə ilə 2 ildən sonra alacağımız 121 € bu gün 121 / 1,21 = 100 € edir."],
    ['p', "Dərəcə nə qədər yüksək və müddət nə qədər uzaqdırsa, bugünkü dəyər bir o qədər azdır. Məhz buna görə dərəcələrin artması şirkətlərin qiymətləndirməsini, xüsusilə əsas pulu gələcəkdə uzaqda olanları azaldır."],
    ['h', 'NPV: layihə pulunu əvəz edirmi'],
    ['p', "NPV (net present value) bu günə gətirilmiş bütün gələcək axınların cəmi minus ilkin investisiyadır. NPV sıfırdan böyükdürsə, layihə tələb olunan gəlirlilikdən artıq dəyər yaradır."],
    ['ex', 'İnvestisiya qərarı', "Bu gün 1 000 € qoymaq. Bir ildən sonra 400 €, iki ildən sonra 500 € və üç ildən sonra 600 € alacağıq. Dərəcə 10%.\nPV = 400/1,10 + 500/1,21 + 600/1,331 = 363,6 + 413,2 + 450,8 = 1 227,6.\nNPV = 1 227,6 − 1 000 = +227,6 €. Layihəni etməyə dəyər."],
    ['h', 'IRR: layihənin gəlirliliyi'],
    ['p', "IRR (internal rate of return) layihənin NPV-nin sıfıra bərabər olduğu dərəcədir. Başqa sözlə, investisiyanın orta illik gəlirliliyi. Nümunəmiz üçün IRR təxminən 21,6%-dir: bu dərəcədə diskontlaşdırılmış axınların cəmi dəqiq 1 000 €-ya bərabərdir. IRR tələb olunan gəlirlilikdən yüksək olarsa (nümunədə 10%), layihə qəbul edilir."],
    ['p', "IRR kalkulyatorda və ya Excel-də seçmə yolu ilə hesablanır (IRR funksiyası). Ağılda MOIC vasitəsilə yaxınlaşma edirlər: IRR ≈ MOIC^(1/illər) − 1. Pul 5 ildə 2 dəfə artıbsa, IRR ≈ 2^0,2 − 1 ≈ 14,9%."],
    ['h', 'CAGR: bir neçə il üzrə orta artım'],
    ['p', "Gəlir 7 ildə 100-dən 200-ə artıbsa, bu, ildə 100% / 7 = 14,3% deyil. Mürəkkəb faiz düsturu ilə düzgün: CAGR = (son / əvvəl)^(1/n) − 1 = 2^(1/7) − 1 ≈ 10,4%."],
    ['h', '72 qaydası'],
    ['p', "İkiqat artma müddətini qiymətləndirməyin sürətli yolu: 72-ni faizlə dərəcəyə bölün. 8%-də pul təxminən 9 ilə, 12%-də 6 ilə ikiqat artır."],
    ['h', 'Nominal və real gəlirlilik'],
    ['p', "3% inflyasiya ilə 7% nominal gəlirlilik təxminən (1,07 / 1,03) − 1 ≈ 3,9% real gəlirlilik verir, sadəcə 7% − 3% = 4% yox. Uzun hesablamalarda fərq nəzərə çarpır."],
    ['warn', "Müxtəlif illərin axınlarını diskontlaşdırmadan toplamaq. Beş ildən sonrakı 100 € bu günkü 100 €-ya bərabər deyil."],
    ['q', "IRR niyə bəzən yanıldır?", "IRR layihənin ölçüsünü nəzərə almır: 30% IRR-lı 1 000 €-luq layihə 15% IRR-lı 100 000 €-luq layihədən az dəyər yarada bilər. Bundan başqa, qeyri-bircins axınlarda (artı və mənfilərin növbələşməsi) bir neçə IRR dəyəri ola bilər. Ona görə IRR-a NPV ilə birlikdə baxırlar."],
    ['key', "PV = FV/(1+r)^n. NPV > 0 layihənin dəyər yaratdığını bildirir. IRR NPV-nin sıfıra bərabər olduğu dərəcədir. Bir neçə il üzrə artımı yaxınlaşdırmaq üçün illərin sayına bölmə yox, mürəkkəb faizdən istifadə edin."]
  ] };
