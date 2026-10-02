'use strict';
// Kitabın Azərbaycan versiyası (I hissəsi).
window.BOOK_AZ = window.BOOK_AZ || {};
BOOK_AZ.pitch = { title: 'Equity research və stock pitch', tag: 'Bazarlar',
  intro: "Equity Research analitiki şirkətləri öyrənir və səhmləri tövsiyə edir: almaq, saxlamaq və ya satmaq. İnvestisiya ideyasını (stock pitch) tez və aydın təqdim etmək bacarığı research, asset management və bəzən IB üzrə müsahibələrdə yoxlanılır.",
  blocks: [
    ['h', 'İnvestisiya ideyası nədən ibarətdir'],
    ['ol', [
      "**Tezis (thesis).** İki-üç cümlə ilə: bazar niyə yanılır və səhm niyə yanlış qiymətləndirilib.",
      "**Qiymətləndirmə.** Səhmi nə qədər qiymətləndirirsiniz və hansı metodla.",
      "**Katalizatorlar.** Aşağı qiymətləndirməni aşkar edəcək hadisələr: hesabat, yeni məhsul, tənzimləmə, sövdələşmə.",
      "**Risklər.** Tezisi nə poza bilər və buna necə nəzarət edirsiniz.",
      "**Tövsiyə.** Al, saxla və ya sat, hədəf qiymət və müddətlə."
    ]],
    ['h', 'Hədəf qiyməti necə almaq olar'],
    ['p', "Ən çox yayılmış üsul: proqnoz mənfəət hədəf P/E-yə vurulur. Digər variantlar: bir səhmə DCF, hədəf EV/EBITDA, hissələrin cəmi."],
    ['ex', 'Hədəf qiymətin hesablanması', "Növbəti il üçün proqnoz EPS 2,5 €. Hədəf P/E 18 (analoqlar üzrə artıma düzəlişlə).\nHədəf qiymət = 2,5 × 18 = 45 €.\nCari qiymət 36 €, yəni upside = 45 / 36 − 1 = 25%."],
    ['p', "Hər bankın tövsiyələr üçün öz hədləri var: məsələn, potensial müəyyən səviyyədən yüksək olduqda «almaq». Konkret firmanın istifadə etdiyi tərifi həmişə dəqiqləşdirin."],
    ['h', 'İdeyanı necə hazırlamaq olar'],
    ['ul', [
      "İllik hesabatı, investorlar üçün təqdimatları və analitiklərlə zənglərin stenoqramlarını oxuyun.",
      "Biznes modelini anlayın: şirkət necə qazanır, müştəriləri, rəqibləri, xərcləri nədir.",
      "Mənfəətin keyfiyyətini yoxlayın: pul axınına çevrilirmi (FCF / Net Income), debitor borcu gəlirdən sürətli artmırmı.",
      "Sadə model qurun və qiymətləndirməni analoqlarla müqayisə edin.",
      "Bazarın qiymətə nəyi artıq qoyduğunu və niyə siz fərqli gördüyünüzü müəyyən edin."
    ]],
    ['h', 'İki dəqiqəlik pitch-in strukturu'],
    ['ol', [
      "**Şirkət nədir** (20 saniyə): nə ilə məşğuldur, ölçüsü, müştəriləri kimlərdir.",
      "**Səhm niyə aşağı qiymətləndirilib** (30 saniyə): rəqəmlə dəstəklənmiş konkret arqument.",
      "**Qiymətləndirmə** (30 saniyə): metod, mültiplikator, hədəf qiymət və potensial.",
      "**Katalizatorlar** (15 saniyə): nə və nə zaman baş verəcək.",
      "**Risklər** (15 saniyə): əsasları və fikrinizi nə dəyişdirəcək.",
      "**Tövsiyə** (10 saniyə)."
    ]],
    ['h', 'Tipik səhvlər'],
    ['ul', [
      "Bazarın niyə yanıldığı arqumenti əvəzinə şirkətin təsvirini təkrar danışmaq.",
      "Qiymət təhlili olmadan «sevimli» şirkəti götürmək: yaxşı biznes yaxşı investisiya deyil.",
      "Risklərin adını çəkməmək və ya yalnız aşkar olanları çəkmək.",
      "Qiymətə nəyin artıq daxil olduğunu izah edə bilməmək.",
      "Yoxlamadan və mənbəsiz rəqəmlər vermək."
    ]],
    ['h', 'İdeya üzrə suallara necə cavab vermək'],
    ['p', "Suallar kəskin olacaq: «Bazar düşərsə?», «Niyə rəqibi almırsınız?», «Qiymətə nə daxil edilib?». Mahiyyətə cavab verin, zəif yerləri etiraf edin və onlara necə nəzarət etdiyinizi göstərin. Uydurma rəqəmdən dürüst «bilmirəm, yoxlayacağam» yaxşıdır."],
    ['q', "Pitch me a stock.", "Şirkəti 20 saniyədə təsvir edin, bazarın qiymətləndirmədə niyə yanıldığını izah edin, qiymətləndirməni və hədəf qiyməti, 2-3 katalizatoru, əsas riskləri və fikrinizi yenidən nəzərdən keçirəcəyiniz şərti deyin, sonra tövsiyə verin."],
    ['q', "Hədəf qiyməti necə alırsınız?", "Məsələn, proqnoz EPS-i hədəf P/E-yə vururam, ya da bir səhmə DCF hesablayıram, ya da proqnoz EBITDA-ya hədəf EV/EBITDA tətbiq edirəm, xalis borcu çıxıram və diluted səhmlərin sayına bölürəm."],
    ['key', "Yaxşı pitch rəqəmlərlə dəstəklənmiş tezis, qiymətləndirmə, katalizatorlar, risklər və tövsiyədir. Aşağı qiymətləndirmə izah olunmalıdır: bazar nəyi qaçırır və onu bunu etiraf etməyə nə vadar edəcək."]
  ] };

BOOK_AZ.interview = { title: 'İnvestisiya bankı müsahibəsindən necə keçmək olar', tag: 'Karyera',
  intro: "IB müsahibəsi texniki və davranış hissələrindən ibarətdir və hər ikisi struktur, sürət və əminlik baxımından yoxlanılır. Bu bölmə tipik mərhələləri, sualları və hazırlıq yollarını bir yerdə toplayır.",
  blocks: [
    ['h', 'Seçim mərhələləri'],
    ['ol', [
      "**Müraciət və CV.** Rəqəmlər və nəticələrlə bir səhifəlik rezümé.",
      "**Onlayn testlər.** Rəqəmsal (cədvəllərin oxunması, faizlər, nisbətlər), məntiqi, bəzən dil testləri. Sürətlə, vaxta qarşı həll olunur.",
      "**Birinci müsahibə** analitik və ya associate ilə: özünüz haqqında hekayə, motivasiya, əsas texniki suallar.",
      "**İkinci və yekun** VP və ya direktorla, bəzən bir neçə ardıcıl (Superday və ya Assessment Centre): texnika, keyslər, davranış sualları, qrup tapşırıqları."
    ]],
    ['h', 'Mövzular üzrə texniki suallar'],
    ['ul', [
      "**Mühasibat uçotu:** üç hesabat və onların əlaqəsi, əməliyyatların hesabatlara təsiri, DSO, dövriyyə kapitalı.",
      "**Qiymətləndirmə:** EV və Equity Value, DCF, WACC, mültiplikatorlar, comps və precedents.",
      "**M&A:** accretion/dilution, satış prosesi, sinerjilər, sövdələşmə növləri.",
      "**LBO:** struktur, gəlirlilik, namizədlər.",
      "**Bazarlar:** cari hadisələr, dərəcələr, sevimli səhm, son sövdələşmə."
    ]],
    ['h', '«Walk me through…» necə cavablandırılır'],
    ['p', "Struktur: tərif, addımlar, nəticə və məna. Məsələn, DCF haqqında: nədir (axınlar üzrə qiymətləndirmə), addımlar (proqnoz, Terminal Value, diskont, EV), nəticə (borcu çıxırıq, səhmin qiymətini alırıq) və metodun nə zaman yaxşı və ya zəif olduğu. Əminliklə və ardıcıllıqla danışın, tullanmayın."],
    ['h', 'Davranış sualları'],
    ['ul', [
      "**Walk me through your CV.** İki dəqiqə, xronologiya və IB-yə aparan iki-üç xətt.",
      "**Why investment banking?** Konkret səbəblər: intellektual iş, öyrənmə, məsuliyyət, bazarlar. «Pul» və «nüfuz» yox.",
      "**Why this bank?** Real məlumata əsaslanan iki-üç səbəb (sövdələşmələr, komanda, sektor).",
      "**Güclü və zəif tərəflər.** Real zəiflik və onu aradan qaldırmaq addımları ilə.",
      "**Komanda işi, uğursuzluq, stress.** STAR strukturundan istifadə edin: Situation, Task, Action, Result."
    ]],
    ['h', 'Şifahi hesab və sürət'],
    ['p', "Ağılda faizləri, payları, vurma və bölməni hesablamağı öyrənin, xüsusilə «450-nin 30%-i», «120-dən 150-yə artım», «mültiplikator və EBITDA-dan EV» kimi əməliyyatları. Cavabı səslə söyləməyə və tərtibi yoxlamağa öyrəşin."],
    ['h', 'Cavabı bilmirsinizsə nə etməli'],
    ['ul', [
      "Susmayın: ucadan mühakimə yürüdün, bu, məntiqinizi göstərir.",
      "Hissələrə bölün və şərtləri dəqiqləşdirin.",
      "Rəqəm və faktları uydurmayın. «Əmin deyiləm, lakin məntiq belədir…» əminliklə səhvdən yaxşı səslənir.",
      "Səhv etmisinizsə, sakitcə etiraf edin və düzəldin."
    ]],
    ['h', 'Bazarlara və sövdələşmələrə hazırlıq'],
    ['p', "Hər gün əsas xəbərləri oxuyun (sövdələşmələr, dərəcələr, hesabatlar). Öyrəndiyiniz iki-üç sövdələşməni hazırlayın: tərəflər, mültiplikatorlar, məntiq, ödəniş forması, qiymət haqqında fikriniz. Son sövdələşmə barədə sual demək olar ki, zəmanətlidir."],
    ['h', 'Beynəlxalq namizədlər üçün xüsusiyyətlər'],
    ['p', "Xaricdə oxuyursunuzsa və alman dili səviyyəniz B2-dirsə, dil haqqında açıq danışmağa əvvəlcədən hazır olun: səviyyənizi deyin, onu necə yaxşılaşdırdığınızı izah edin və iş ingilis dilinizin güclü olduğunu göstərin. Almaniyadakı bir çox beynəlxalq komandalar ingilis dilində işləyir. İş icazəsi ilə bağlı suallara sakit və dürüst yanaşın: bu, standart prosedurdur və beynəlxalq tələbələri işə götürən şirkətlər onunla tanışdır."],
    ['h', 'Dörd həftəlik hazırlıq planı'],
    ['ol', [
      "**1-ci həftə.** Mühasibat uçotu və üç hesabat, EV və Equity Value, mültiplikatorlar. Mandate-də gündəlik plan.",
      "**2-ci həftə.** DCF, WACC, comps. Gündə bir dəfə müsahibə rejimi.",
      "**3-cü həftə.** M&A, accretion/dilution, LBO. Müzakirə üçün iki sövdələşmə.",
      "**4-cü həftə.** Zəif mövzuların təkrarı, davranış cavablarının səslə deyilməsi, dostla mok-müsahibə."
    ]],
    ['h', 'Müsahibəçiyə verməyə dəyər suallar'],
    ['ul', [
      "Sizin komandada analitikin tipik günü necə görünür?",
      "Komanda son vaxtlar hansı sövdələşmələr üzərində işləyib (açıq məlumat çərçivəsində)?",
      "Yeni işçilərin təlimi necə qurulub?",
      "İlk ildə uğurlu analitikləri nə fərqləndirir?"
    ]],
    ['q', "Özünüz haqqında danışın.", "İki dəqiqə: təhsil və əsas təcrübə, IB-yə marağa nə gətirdi (konkret bacarıqlar və hadisələr), indi bu rolun niyə növbəti addım olduğu və niyə bu firma."],
    ['q', "Niyə məhz sizi işə götürməliyik?", "Nümunələrlə dəstəklənmiş üç konkret güclü tərəfi deyin: analitik hazırlıq, maliyyə biliyi, motivasiya və öyrənmə sürəti. Zəif yer varsa (dil, təcrübə), onu necə bağladığınızı göstərin."],
    ['key', "Müsahibədə struktur, sürət və dürüstlük qiymətləndirilir. Texnikanı mövzular üzrə, davranış cavablarını STAR sxemi üzrə, öyrənilmiş iki-üç sövdələşməni və öz suallarınızı hazırlayın. Cavabı bilmirsinizsə, uydurmaq əvəzinə ucadan mühakimə yürüdün."]
  ] };
