'use strict';
// Kitabın Azərbaycan versiyası (H hissəsi).
window.BOOK_AZ = window.BOOK_AZ || {};
BOOK_AZ.ecm = { title: 'Kapital bazarları: IPO, istiqrazlar və kreditlər', tag: 'Bazarlar',
  intro: "Şirkətlər pulu yalnız banklardan deyil, bazarlardan da cəlb edirlər. Səhmlərə ECM (equity capital markets), borca DCM (debt capital markets) mütəxəssisləri cavabdehdir. IPO-nun necə keçdiyini və istiqraz bazarının necə qurulduğunu təhlil edək.",
  blocks: [
    ['h', 'ECM: səhm kapitalının cəlb edilməsi'],
    ['ul', [
      "**IPO:** səhmlərin ilk açıq yerləşdirilməsi.",
      "**Follow-on:** artıq ticarət edilən səhmlərin əlavə yerləşdirilməsi.",
      "**Accelerated bookbuild (ABB):** iri investorlara bir gecədə sürətli yerləşdirmə, adətən bazara endirimlə.",
      "**Rights issue:** mövcud səhmdarlar üçün üstün abunə hüququ ilə emissiya (Almaniyada geniş yayılıb, Bezugsrecht).",
      "**Konvertasiya olunan istiqrazlar:** səhmlərə dəyişdirmək hüququ olan borc."
    ]],
    ['h', 'IPO necə keçir'],
    ['ol', [
      "**Bankların seçilməsi.** Şirkət qlobal koordinatorları və bukranerləri (bookrunner) təyin edir. Onlar sifariş kitabını aparır və yerləşdirməni təşkil edir.",
      "**Due diligence və sənədlər.** Biznesin yoxlanması, prospektin hazırlanması və tənzimləyici ilə razılaşdırma.",
      "**Equity story və qiymətləndirmə.** Banklar şirkəti analoqlarla müqayisə edərək investisiya cəlbediciliyi hekayəsini və qiymət diapazonunu formalaşdırır.",
      "**Roadshow və bookbuilding.** Menecment investorlarla görüşür, banklar sifarişləri toplayır və tələbi formalaşdırır.",
      "**Pricing.** Yekun qiymət müəyyən edilir. Adətən investorları cəlb etmək və ilk gün artımı təmin etmək üçün ədalətli qiymətə endirim (IPO-da 10-15%) qoyulur.",
      "**Listinq və sabitləşdirmə.** Səhmlərin ticarəti başlayır. Anderrayter greenshoe vasitəsilə qiyməti dəstəkləyir.",
      "**Lock-up.** İnsayderlər adətən 90-180 gün səhm sata bilməzlər."
    ]],
    ['ex', 'IPO rəqəmləri', "Şirkət 20 €-dan 50 mln səhm yerləşdirir = 1 000 mln €.\nBankların komissiyası 5% = 50 mln €.\nGreenshoe (15%-dək) = 50 × 0,15 = 7,5 mln əlavə səhm, qiymət düşərsə sabitləşdirmək üçün."],
    ['p', "**Anderrayter** yerləşdirməyə zəmanət verən və satılmamış səhmlərin riskini öz üzərinə götürən banka deyilir (firm commitment). Alternativ best efforts: bank yalnız satmağa çalışır, risk emitentdə qalır. Komissiya adətən yerləşdirmə məbləğinin bir neçə faizi təşkil edir."],
    ['h', 'Şirkət niyə IPO edir'],
    ['ul', [
      "Artım üçün kapital cəlb etmək.",
      "Erkən investorlara və fondlara çıxış imkanı vermək.",
      "M&A sövdələşmələri və işçilərin mükafatlandırılması üçün açıq valyuta əldə etmək.",
      "Tanınma və şəffaflığı artırmaq."
    ]],
    ['p', "Mənfi cəhətlər: məlumatın açıqlanması tələbləri, rüblük nəticələrin təzyiqi, xərclər və nəzarətin bir hissəsinin itirilməsi."],
    ['h', 'DCM: borcun cəlb edilməsi'],
    ['ul', [
      "**Investment grade istiqrazlar.** Yüksək reytinqli etibarlı emitentlər, aşağı spredlər.",
      "**High yield istiqrazlar.** BBB-/Baa3-dən aşağı reytinqli emitentlər, daha yüksək dərəcə.",
      "**Sindikatlaşdırılmış və leveraged kreditlər.** Bank qrupunun krediti, çox vaxt LBO sövdələşmələri üçün.",
      "**Kommersiya kağızları.** Qısamüddətli borclanmalar."
    ]],
    ['p', "İstiqrazın qiyməti gəlirlilik (yield) və kupon ilə müəyyən edilir. Yeni istiqrazı çox vaxt benchmark-a spred kimi yerləşdirirlər (məsələn, Alman Bund-larının gəlirliliyinə və ya svopa)."],
    ['h', 'İstiqrazın qiyməti və gəlirliliyi'],
    ['p', "Qiymət və gəlirlilik əks istiqamətlərdə hərəkət edir. 4% kuponlu və 100 nominallı beşillik istiqraz:"],
    ['tbl', ['Gəlirlilik', 'İstiqrazın qiyməti'], [
      ['3%', '104,58'],
      ['4%', '100,00'],
      ['5%', '95,67']
    ]],
    ['p', "Dərəcələr artdıqda mövcud istiqrazların qiymətləri düşür: yeni istiqrazlar daha çox gətirir, ona görə köhnələr ucuzlaşmalıdır. Müddət nə qədər uzundursa, düşmə bir o qədər güclüdür (dərəcəyə həssaslıq duration adlanır)."],
    ['q', "Walk me through the IPO process.", "Bankların seçilməsi, due diligence, prospekt və tənzimləyici, roadshow və bookbuilding, qiymətin müəyyənləşdirilməsi, yerləşdirmə və listinq. IPO-dan sonra lock-up və greenshoe sabitləşdirməsi qüvvədədir."],
    ['q', "IPO discount niyə lazımdır?", "Investorları cəlb etmək və yeni kağızın qeyri-müəyyənliyini kompensasiya etmək üçün. Ədalətli qiymətə 10-15% endirim tələbi və çox vaxt ticarətin ilk günündə artımı təmin edir."],
    ['key', "ECM şirkətlərə səhm cəlb etməyə (IPO, follow-on, ABB), DCM isə borc cəlb etməyə (istiqrazlar, kreditlər) kömək edir. Banklar komissiya alır, tələbi təşkil edir və yerləşdirmə riskini öz üzərinə götürür."]
  ] };

BOOK_AZ.rates = { title: 'Faiz dərəcələri, inflyasiya və onların qiymətləndirməyə təsiri', tag: 'Bazarlar',
  intro: "İstənilən qiymətləndirmə bu günkü pulun sabahkı pulla müqayisəsidir, zaman üzrə pulun qiymətini isə dərəcələr müəyyən edir. Dərəcələrin şirkətlərin, sövdələşmələrin və borcun dəyərinə necə təsir etdiyini anlayırsınızsa, makroiqtisadi suallara bankda gözlənildiyi kimi cavab verə biləcəksiniz.",
  blocks: [
    ['h', 'Dərəcələr haradan gəlir'],
    ['p', "Mərkəzi banklar (ECB, FED) əsas dərəcəni müəyyən edir və bazar dərəcələrinə təsir edir. Etibarlı ölkələrin dövlət istiqrazları, məsələn, Alman Bund-ları risksiz istinad kimi xidmət edir. Şirkət kreditləri üzrə dərəcələr risksiz dərəcədən və emitentin riskinə görə kredit spredindən ibarətdir."],
    ['p', "İnflyasiya (qiymətlərin artımı) mərkəzi bankları dərəcələri qaldırmağa məcbur edir: bununla tələbi soyudurlar. İnflyasiya nə qədər yüksəkdirsə, nominal dərəcələr bir o qədər yüksəkdir."],
    ['h', 'Dərəcələr şirkətin dəyərinə necə təsir edir'],
    ['p', "Dərəcələrin artması diskont dərəcəsini yüksəldir (əvvəlcə Rf, sonra Re və WACC). Gələcək pulun cari dəyəri düşür. DCF həssaslıq cədvəlini xatırlayaq: WACC 9%-dən 10%-ə artdıqda nümunəmizdə şirkətin dəyəri 1 854-dən 1 614-ə, yəni təxminən 13% düşdü."],
    ['p', "Ən çox uzun duration-lu aktivlər əziyyət çəkir: əsas pulları gələcəkdə uzaqda olan böyüyən şirkətlər (texnologiya, biotex). Sabit yaxın axınları olan şirkətlər daha az itirir."],
    ['h', 'Gəlirlilik əyrisi'],
    ['p', "Gəlirlilik əyrisi müxtəlif müddətli istiqrazlar üzrə dərəcələri göstərir. Adətən yüksəlir: uzun müddətlərə daha çox ödəyirlər. Əyrinin **inversiyası** (qısa dərəcələr uzunlardan yüksək) bazarın iqtisadiyyatın yavaşlamasını və gələcəkdə dərəcələrin azalmasını gözlədiyini bildirir. Tarixən inversiya çox vaxt tənəzzüllərdən əvvəl olub."],
    ['h', 'M&A və LBO-ya təsiri'],
    ['p', "Bahalı borc sövdələşmələri bahalaşdırır. LBO üçün bu, gəlirliliyə birbaşa zərbədir. 500 borclu nümunəmizdə dərəcənin 6%-dən 9%-ə artması ildə 15 mln € əlavə faiz, vergidən sonra 11,25 deməkdir. Beş ildə bu, ödənilmiş borcun təxminən 56 mln € azalması, çıxışda equity-nin 1 145-dən təxminən 1 089-a, MOIC-in 2,86x-dən 2,72x-ə, IRR-ın isə 23,4%-dən təxminən 22,2%-ə düşməsi deməkdir. Bundan başqa, dərəcələr artdıqda banklar daha az borc verir və sponsorlar daha çox öz pullarını qoymağa məcbur olurlar."],
    ['p', "Strateji alıcılar daha az əziyyət çəkir, lakin onlar da: pulla alışlar bahalaşır, səhm qiymətləndirmələri (sövdələşmənin valyutası) düşür. Ona görə yüksək dərəcələr dövründə M&A fəallığı adətən azalır."],
    ['h', 'Banklara və sahələrə təsiri'],
    ['ul', [
      "**Banklar.** Adətən daha dik əyridən və daha yüksək marjadan (kredit və depozit dərəcələri arasındakı fərq) qazanırlar, lakin problemli borclar artarsa əziyyət çəkirlər.",
      "**Daşınmaz əmlak və kommunal şirkətlər.** Çoxlu borc və sabit axınlar: dərəcələrə həssasdırlar.",
      "**Böyüyən texnologiya şirkətləri.** Uzaq axınlar, yüksək həssaslıq.",
      "**Qiymət gücü olan şirkətlər** inflyasiyanı qiymətlərə keçirə bilərlər."
    ]],
    ['h', 'Nominal və real kəmiyyətlər'],
    ['p', "3% inflyasiya ilə 7% nominal gəlirlilik təxminən 3,9% real gəlirlilik verir. Axınları nominal rəqəmlərlə proqnozlaşdırırsınızsa, real yox, nominal dərəcə ilə diskontlaşdırmaq lazımdır. Qarışdırmaq olmaz."],
    ['h', 'Makro sual necə cavablandırılır'],
    ['ol', [
      "Baza ssenarisini deyin və qısa əsaslandırın (inflyasiya, əmək bazarı, ECB-nin mövqeyi).",
      "Zənciri göstərin: dərəcə → diskont dərəcəsi → qiymətləndirmə; dərəcə → borcun qiyməti → sövdələşmələr.",
      "Kimin qazandığını və kimin uduzduğunu deyin.",
      "Qeyri-müəyyənliyi etiraf edin və hansı məlumatların fikrinizi dəyişəcəyini göstərin."
    ]],
    ['q', "Dərəcələrin artması şirkətin qiymətləndirilməsinə necə təsir edir?", "Diskont dərəcəsini yüksəldir, gələcək axınların cari dəyərini azaldır. Uzaq axınları olan böyüyən şirkətlər xüsusilə əziyyət çəkir. Borc da bahalaşır, bu isə LBO və M&A-ya təzyiq edir."],
    ['q', "İnversiya olunmuş gəlirlilik əyrisi nə deməkdir?", "Qısa dərəcələr uzunlardan yüksəkdir. Bu, iqtisadiyyatın yavaşlaması və gələcəkdə dərəcələrin azalması gözləntilərinin siqnalıdır və tarixən tənəzzüllərdən əvvəl olub."],
    ['key', "Dərəcələr zamanın qiymətini müəyyən edir. Dərəcələrin artması qiymətləndirmələri (xüsusilə böyüyən şirkətlərinkini) azaldır, borcu bahalaşdırır və LBO ilə M&A-ya zərbə vurur. Gəlirlilik əyrisinin inversiyası yavaşlama siqnalıdır."]
  ] };
