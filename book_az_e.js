'use strict';
// Kitabın Azərbaycan versiyası (E hissəsi).
window.BOOK_AZ = window.BOOK_AZ || {};
BOOK_AZ.norm = { title: 'LTM, NTM və göstəricilərin normallaşdırılması', tag: 'Qiymətləndirmə',
  intro: "Mültiplikatorlar yalnız müqayisə olunan rəqəmləri müqayisə etdikdə dürüstdür. Şirkətlərin hesabatları müxtəlif vaxtlarda çıxır, birdəfəlik maddələr ehtiva edir və müxtəlif təqvimlərə tabedir. Normallaşdırma hər şeyi ümumi məxrəcə gətirir.",
  blocks: [
    ['h', 'Normallaşdırma niyə lazımdır'],
    ['p', "Tutaq ki, şirkəti oktyabrda qiymətləndiririk. Son illik hesabat martda çıxıb, aralıq rüblük hesabat isə bu yaxınlarda çıxıb. Mültiplikator üçün hansı rəqəmi götürək? Artıq yarım il yaşı olan illik rəqəmi? Yoxsa ilin yalnız bir hissəsini göstərən rüblük rəqəmi? «Bugünkü illik göstərici» almaq üsulu lazımdır."],
    ['h', 'LTM: son on iki ay'],
    ['p', "LTM (last twelve months) son 12 ay üzrə göstəricini son illik hesabatdan və aralıq məlumatlardan toplayır."],
    ['key', "LTM = son maliyyə ili + cari YTD − keçən ilin YTD-si"],
    ['ex', 'LTM hesablanması', "Son maliyyə ili üzrə EBITDA 400. Cari YTD (9 ay) 120, keçən ilin eyni dövrü 100.\nLTM = 400 + 120 − 100 = 420.\nKeçən ilin köhnə 9 ayını yeni 9 ayla əvəz etdik və təzə illik göstərici aldıq."],
    ['h', 'NTM və proqnoz mültiplikatorları'],
    ['p', "Bazar gələcəyi qiymətləndirir, ona görə çox vaxt proqnoz rəqəmlərinə baxırlar: NTM (növbəti 12 ay) və ya analitiklərin illik proqnozları (2027E). Sürətlə böyüyən şirkətlərdə proqnoz mültiplikatoru tarixi olandan aşağıdır, çünki məxrəc artır. Ona görə bir şirkətin LTM-ni digərinin NTM-i ilə müqayisə etmək olmaz."],
    ['h', 'Təqvimləşdirmə: ümumi ilə gətirmək'],
    ['p', "Müxtəlif şirkətlərdə maliyyə ili müxtəlif vaxtda bitir: bəzilərində dekabrda, digərlərində martda və ya sentyabrda. Onları müqayisə etmək üçün göstəriciləri təqvim ilinə yenidən hesablayırlar."],
    ['ex', 'Təqvimləşdirmə', "Şirkətin maliyyə ili martda bitir. 2026-cı ilin martında bitən il (FY2026) üzrə EBITDA 100, FY2027 üzrə 120-dir.\nTəqvim 2026-cı ili FY2026-nın 3 ayından (yanvar-mart) və FY2027-nin 9 ayından (aprel-dekabr) ibarətdir.\nTəqvim 2026-cı il üzrə EBITDA = 0,25 × 100 + 0,75 × 120 = 115."],
    ['h', 'Adjusted EBITDA: birdəfəlik olanı çıxırıq'],
    ['p', "Birdəfəlik maddələr mənzərəni təhrif edir. Təkrarlanan mənfəətliliyi göstərmək üçün onları istisna edirlər."],
    ['tbl', ['Maddə', 'mln €'], [
      ['Reported EBITDA', '90'],
      ['+ Restrukturizasiya xərcləri (birdəfəlik)', '+12'],
      ['+ Bağlanmış iddia üzrə məhkəmə xərcləri', '+8'],
      ['− Binanın satışından mənfəət (birdəfəlik)', '−5'],
      ['Adjusted EBITDA', '105']
    ]],
    ['p', "Diqqət edin: normallaşdırma hər iki istiqamətdə gedir. Birdəfəlik xərclər geri əlavə olunur, birdəfəlik gəlirlər çıxılır."],
    ['h', 'Normallaşdırmanın digər növləri'],
    ['ul', [
      "**Pro forma.** Şirkət bu yaxınlarda başqasını alıbsa, hesabatda onun nəticəsi ilin yalnız bir hissəsi üçün var. Alış dövrün əvvəlində olmuş kimi yenidən hesablanır.",
      "**Run-rate.** Xərc qənaəti artıq başladılıbsa, onun illik təsirini göstərirlər. Bu, ən mübahisəli düzəlişdir: vəd olunmuş, lakin həyata keçirilməmiş sinerjiləri qeyd etmədən daxil etmək olmaz.",
      "**Orta tsikl göstəriciləri.** Tsiklik şirkətlər (kimya, metallar) üçün zirvə yox, tsikl üzrə orta marja səviyyəsi götürülür.",
      "**SBC (səhm əsaslı mükafat).** Mübahisəli sual: onu real xərc saymaq. Mühafizəkar cavab: bəli."
    ]],
    ['warn', "Vicdansız normallaşdırma. Şirkət hər il təkrarlanan xərcləri «birdəfəlik» adlandıra bilər. Hər düzəlişi tarix üzrə yoxlayın: «birdəfəlik» xərclər keçən il də olubsa, onlar birdəfəlik deyil."],
    ['q', "LTM necə hesablanır?", "Son maliyyə ilini götürüb cari yığılmış dövrü (YTD) əlavə etmək və keçən ilin eyni dövrünü çıxmaq."],
    ['q', "Adjusted EBITDA hesablayarkən hansı maddələri istisna edərdiniz?", "Birdəfəlik və qeyri-müntəzəm olanları: restrukturizasiya xərcləri, məhkəmə cərimələri, dəyərsizləşmələr, aktivlərin satışından mənfəət və ya zərər. Hər düzəliş əsaslandırılmalı və tarixlə təsdiq olunmalıdır."],
    ['key', "LTM təzə illik göstərici verir, təqvimləşdirmə şirkətləri ümumi ilə gətirir, Adjusted EBITDA isə birdəfəlik maddələri hər iki istiqamətdə çıxır. Hər düzəliş əsaslandırma tələb edir."]
  ] };

BOOK_AZ.goodwill = { title: 'Goodwill, sövdələşmələrin uçotu və təxirə salınmış vergilər', tag: 'Hesabat',
  intro: "Bir şirkət digərini aldıqda hesabatda yeni maddə yaranır: goodwill. Onunla birlikdə aktivlərin yenidən qiymətləndirilməsi və təxirə salınmış vergilər meydana çıxır. Bu mövzu çox vaxt birləşmə modeli ilə bir yerdə gedir, ona görə bu rəqəmlərin haradan gəldiyini anlamaq vacibdir.",
  blocks: [
    ['h', 'Goodwill nədir'],
    ['p', "Alıcı nadir hallarda hədəfin aktivlərinin dəyəri qədər ödəyir. O, brend, müştərilər, komanda, gələcək artım üçün ödəyir. Müəyyən edilə bilən xalis aktivlərin ədalətli dəyərindən artıq bu ödəmə goodwill adlanır."],
    ['key', "Goodwill = satınalma qiyməti − müəyyən edilə bilən xalis aktivlərin ədalətli dəyəri (FV)"],
    ['h', 'Necə hesablanır: purchase accounting'],
    ['ol', [
      "Satınalma qiymətini müəyyən etmək (səhmlər alınırsa, Equity Value).",
      "Hədəfin aktivlərinin və öhdəliklərinin ədalətli dəyərini qiymətləndirmək. Aktivlər çox vaxt balans dəyərindən bahadır, onlar **yuxarı yenidən qiymətləndirilir (write-up)**.",
      "Yenidən qiymətləndirmə üzrə təxirə salınmış vergi öhdəliyini (DTL) nəzərə almaq.",
      "Qiymətlə xalis aktivlərin ədalətli dəyəri arasındakı fərq goodwill-dir."
    ]],
    ['ex', 'Goodwill hesablanması', "Satınalma qiyməti 500. Hədəfin balans kapitalı 300. Aktivlər 50 yuxarı yenidən qiymətləndirilib. Vergi 25%.\nDTL = 50 × 25% = 12,5.\nXalis aktivlərin ədalətli dəyəri = 300 + 50 − 12,5 = 337,5.\nGoodwill = 500 − 337,5 = 162,5."],
    ['p', "Yenidən qiymətləndirmə yoxdursa, hesablama daha sadədir: qiymət 500 və xalis aktivlərin ədalətli dəyəri 350 olduqda goodwill 150-dir."],
    ['h', 'Goodwill-ə sonra nə olur'],
    ['ul', [
      "**Goodwill nə IFRS, nə də US GAAP üzrə amortizasiya olunmur.**",
      "Əvəzində o, **ildə ən azı bir dəfə dəyərsizləşmə üçün yoxlanılır** (impairment test). Biznes yazılandan az edirsə, fərq silinir.",
      "Dəyərsizləşmə **pulsuz xərcdir**: Net Income-u azaldır, lakin pul çıxmır. Ona görə pul hərəkəti hesabatında geri əlavə olunur.",
      "Yenidən qiymətləndirilmiş maddi aktivlər amortizasiya olunur, ona görə sövdələşmədən sonra amortizasiya (və xərclər) artır, mənfəət düşür."
    ]],
    ['h', 'Təxirə salınmış vergilər: DTL və DTA'],
    ['p', "Vergi və mühasibat uçotu mənfəəti fərqli hesablayır. Buna görə hesabatdakı vergi (book tax) real ödənilən vergiyə (cash tax) bərabər deyil. Fərq təxirə salınır."],
    ['ul', [
      "**DTL (təxirə salınmış vergi öhdəliyi):** hesabatdakı vergi ödənilməli vergidən yüksəkdir. Tipik səbəb: vergi amortizasiyası mühasibat amortizasiyasından sürətlidir. Nümunə: kitab vergisi 30, ödənilməli vergi 20, yəni DTL 10 artdı. Şirkət bu pulu sonra ödəyəcək.",
      "**DTA (təxirə salınmış vergi aktivi):** ödənilməli vergi hesabatdakı vergidən yüksəkdir və ya gələcəkdə vergiləri azaldacaq keçmiş illərin vergi zərərləri (NOL) var. Nümunə: 100 zərər 25% dərəcə ilə 25 DTA verir."
    ]],
    ['p', "Sövdələşmələrdə DTL aktivlər yuxarı yenidən qiymətləndirildikdə yaranır: mühasibat dəyəri artıb, vergi bazası isə əvvəlki kimi qalıb. Ona görə goodwill hesablanmasında DTL çıxdıq."],
    ['h', 'Asset deal və stock deal: vergi təsiri'],
    ['p', "**Stock deal**-da (səhmlərin alışı) aktivlərin vergi bazası əvvəlki kimi qalır, ona görə yenidən qiymətləndirmə DTL yaradır. **Asset deal**-da (aktivlərin alışı) alıcı **vergi step-up** alır: aktivlərin bazası satınalma qiymətinə qədər qaldırılır, amortizasiyanı vergiyə silmək olar və alıcı real pul qənaət edir. Ona görə asset deal alıcıya vergi baxımından sərfəlidir, lakin hüquqi baxımdan daha mürəkkəbdir."],
    ['h', 'Birləşmə modelində nəyi dəyişmək lazımdır'],
    ['ul', [
      "Sövdələşmədən sonrakı balansa goodwill və aktivlərin yenidən qiymətləndirilməsini əlavə etmək.",
      "Mənfəət hesabatına yenidən qiymətləndirilmiş aktivlərin amortizasiyasını əlavə etmək.",
      "Yenidən qiymətləndirmənin amortizasiyası ilə DTL-i azaltmaq.",
      "Hədəfin köhnə kapitalını istisna etmək və alıcının yeni səhmlərini və borcunu nəzərə almaq."
    ]],
    ['q', "Goodwill dəyərsizləşərsə nə baş verir?", "Bu, pulsuz xərcdir: Net Income dəyərsizləşmə məbləği qədər düşür, pul hərəkəti hesabatında geri əlavə olunur, balansda goodwill azalır. Şirkətin pulu dəyişmir."],
    ['q', "Şirkət alınarkən DTL haradan yaranır?", "Aktivlər yuxarı yenidən qiymətləndirildikdə mühasibat dəyəri vergi bazasından yüksək olur. Gələcək vergilər hesabatın göstərdiyindən yüksək olacaq və bu fərq DTL kimi qeyd olunur."],
    ['key', "Goodwill xalis aktivlərin ədalətli dəyərindən artıq ödəmədir. O, amortizasiya olunmur, lakin dəyərsizləşmə üçün yoxlanılır. Aktivlərin yenidən qiymətləndirilməsi DTL yaradır, asset deal-da alıcı vergi step-up alır."]
  ] };

BOOK_AZ.ifrs = { title: 'IFRS və US GAAP, icarə və IFRS 16', tag: 'Hesabat',
  intro: "Avropada mühasibat uçotu IFRS üzrə, ABŞ-da US GAAP üzrə aparılır. Müsahibədə standartları sitat gətirmək nadir hallarda xahiş olunur, lakin əsas məsələlərdə fərqi bilmək lazımdır. İcarəyə xüsusi diqqət ayrılır: IFRS 16 tətbiq olunduqdan sonra o, şirkətlərin göstəricilərini xeyli dəyişdi.",
  blocks: [
    ['h', 'Ümumi mənzərə'],
    ['p', "IFRS (beynəlxalq standartlar) prinsiplərə əsaslanır və daha çox peşəkar mühakimə yürütməyə imkan verir. US GAAP daha ətraflı və sərt yazılıb. Aİ-nin açıq şirkətləri üçün IFRS konsolidasiya olunmuş hesabatda məcburidir. Fərq qiymətləndirmə barədə nəticənizi dəyişməyə bilər, lakin müqayisə olunanlığa təsir edir."],
    ['h', 'Əsas fərqlər'],
    ['tbl', ['Sual', 'IFRS', 'US GAAP'], [
      ['Ehtiyatlar üçün LIFO metodu', 'Qadağandır', 'İcazəlidir'],
      ['İnkişaf xərcləri (R&D)', 'Şərtlər ödənildikdə kapitallaşdırılır', 'Adətən xərcə silinir'],
      ['Əsas vəsaitlərin yuxarı yenidən qiymətləndirilməsi', 'İcazəlidir (revaluation model)', 'İcazəli deyil'],
      ['Dəyərsizləşmənin bərpası', 'İcazəlidir (goodwill istisna olmaqla)', 'Qadağandır'],
      ['Pul hərəkəti hesabatında faizlər', 'Əməliyyat və ya maliyyə hissəsində yol verilir', 'Əməliyyat hissəsi'],
      ['İcarəçidə icarə', 'Demək olar ki, hamısı balansdadır', 'Operating lease xərclərdə qalır']
    ]],
    ['h', 'IFRS 16 nəyi dəyişdi'],
    ['p', "IFRS 16-dan əvvəl operating lease balansda əks olunmurdu: ödənişlər sadəcə xərc kimi gedirdi. IFRS 16 üzrə icarəçi balansda **istifadə hüququ aktivi** (right-of-use asset) və icarə ödənişlərinin cari dəyərinə bərabər **icarə öhdəliyi** (lease liability) tanıyır. Xərc iki maddə ilə əvəz olunur: aktivin amortizasiyası və öhdəlik üzrə faizlər."],
    ['ex', '5 illik icarə', "5 il ərzində ildə 20 mln € ödəniş, dərəcə 5%.\nİcarə öhdəliyi = 20 × 4,3295 = 86,6 mln € (5% və 5 il üçün annuitet vuruğu).\n1-ci il: faizlər 86,6 × 5% = 4,3; amortizasiya 86,6 / 5 = 17,3. Cəmi xərc 21,6, əvvəl isə 20 idi."],
    ['tbl', ['Göstərici', 'IFRS 16-dan əvvəl', 'IFRS 16-dan sonra'], [
      ['EBITDA-da icarə xərci', '−20', '0 (xərc aşağı keçdi)'],
      ['EBITDA', 'X', 'X + 20'],
      ['EBIT', 'X − 20', 'X − 17,3 (2,7 yüksək)'],
      ['Faizlər', '0', '4,3 (EBIT-dən aşağı)'],
      ['Balansda borc', 'icarəni daxil etmir', '+ 86,6']
    ]],
    ['p', "Yekun: EBITDA icarənin bütün məbləği qədər artdı, borc ödənişlərin cari dəyəri qədər artdı. Bu, icarənin böyük olduğu pərakəndə satış, restoranlar, aviaşirkətlərdə xüsusilə nəzərə çarpır."],
    ['h', 'Mültiplikatorlarda uyğunluq'],
    ['p', "EV-ni icarə borcunu nəzərə almaqla hesablayırsınızsa, EBITDA icarədən **əvvəl** olmalıdır (IFRS 16-dan sonrakı kimi). EV icarəsiz olarsa, EBITDA icarənin çıxılmasından **sonra** olmalıdır. Qarışdırmaq olmaz."],
    ['ex', 'İcarə ilə EV/EBITDA', "IFRS 16-dan əvvəl EBITDA 120, icarə ödənişləri 20, yəni IFRS 16-dan sonra EBITDA 140. İcarəsiz EV 1 000.\nİcarəsiz yanaşma: 1 000 / 120 = 8,3x.\nİcarə ilə yanaşma: (1 000 + 86,6) / 140 = 7,8x.\nHər iki yanaşma ardıcıl olduqda düzgündür. Səhv: icarəsiz EV (1 000) və IFRS 16-dan sonrakı EBITDA (140) götürmək, bu 7,1x verir və mültiplikatoru azaldır."],
    ['h', 'IFRS və US GAAP şirkətlərinin müqayisəsi'],
    ['p', "Amerika şirkətində operating lease xərclərdə qalır (EBITDA aşağıdır), IFRS 16 üzrə Avropa şirkətində isə xərc EBITDA-dan çıxır. Müqayisə etmək üçün hər ikisini eyni formaya gətirirlər: adətən icarənin çıxılmasından sonrakı EBITDA (EBITDAR minus icarə) və icarə borcu olmadan EV istifadə olunur."],
    ['q', "IFRS 16 icarəçinin EBITDA-sına necə təsir etdi?", "EBITDA artdı: icarə xərci EBITDA-dan aşağıda yerləşən amortizasiya və faizlərlə əvəz olundu. Eyni zamanda balansda aktiv və öhdəlik meydana çıxdı, şirkətin borcu artdı."],
    ['q', "Hansı ehtiyat qiymətləndirmə metodu US GAAP-da icazəlidir, IFRS-də isə yox?", "LIFO (last in, first out)."],
    ['key', "IFRS və US GAAP təfərrüatlarda fərqlənir, lakin əsası: IFRS 16 üzrə icarə borca çevrilir, EBITDA isə artır. Mültiplikatorlarda uyğunluğu saxlamaq lazımdır: icarə ilə EV və icarədən əvvəlki EBITDA və ya icarəsiz EV və icarədən sonrakı EBITDA."]
  ] };

BOOK_AZ.dilution = { title: 'Səhmlərin durulması: opsionlar, RSU və konvertasiya olunan istiqrazlar', tag: 'Qiymətləndirmə',
  intro: "Səhmin qiyməti vurulsun səhmlərin sayına kapitallaşmanı yalnız səhmlərin sayı düzgün hesablandıqda verir. Əksər şirkətlərdə yeni səhmlərə çevrilə bilən alətlər var. Onları nəzərə almaq lazımdır: bu, durulmadır.",
  blocks: [
    ['h', 'Basic və diluted shares'],
    ['p', "**Basic shares** buraxılmış və hazırda dövriyyədə olan səhmlərdir. **Diluted shares** onlara opsionların icrası, RSU verilməsi, istiqrazların konvertasiyası zamanı yarana biləcək səhmləri əlavə edir. Qiymətləndirmə üçün həmişə diluted istifadə olunur."],
    ['h', 'Durulduran alətlər'],
    ['ul', [
      "**Opsionlar (options).** Səhmi sabit qiymətlə (strike) almaq hüququ. Bazar qiyməti strike-dan yüksəkdirsə, opsion «pulda»dır (in-the-money, ITM).",
      "**RSU (restricted stock units).** İşçiyə səhm vermək vədi. Tam sayılırlar, demək olar ki, adi səhmlərdir.",
      "**Varrantlar.** Opsionlara oxşardır, şirkət tərəfindən investorlar üçün buraxılır.",
      "**Konvertasiya olunan istiqrazlar.** Müəyyən konversiya qiymətilə səhmlərə dəyişdirilə bilən borc."
    ]],
    ['h', 'Treasury Stock Method (xəzinə səhmləri metodu)'],
    ['p', "In-the-money opsionlar yeni səhmlər verir, lakin sahib şirkətə strike ödəyir. Şirkətin alınan pulu bazardan səhmlərin bir hissəsini geri almaq üçün istifadə etdiyi fərz olunur. Ona görə xalis durulma daha azdır."],
    ['key', "Xalis yeni səhmlər = N opsion × (1 − strike / səhmin qiyməti), qiymət strike-dan yuxarı olduqda"],
    ['ex', 'TSM', "Strike 20 €, səhmin qiyməti 40 € olan 10 mln opsion.\nSahiblər 10 × 20 = 200 mln € ödəyir, şirkət onlarla 200 / 40 = 5 mln səhm geri alır.\nXalis artım = 10 − 5 = 5 mln səhm (düsturla: 10 × (1 − 20/40) = 5).\nSəhmin qiyməti 15 €-dursa, opsion «pulsuzdur» (out-of-the-money): icra etmək sərfəli deyil, durulma 0."],
    ['h', 'Konvertasiya olunan istiqrazlar: if-converted metodu'],
    ['p', "Konvertasiya olunan istiqrazlar səhmin qiyməti konversiya qiymətindən yüksək olduqda səhm, aşağı olduqda borc sayılır. İstiqrazları səhm saysaq, müvafiq səhmləri əlavə edir və eyni şeyi iki dəfə saymamaq üçün **istiqrazları borcdan çıxırıq**."],
    ['ex', 'Tam nümunə', "100 mln basic səhm, qiymət 30 €. Strike 20 € olan 10 mln opsion. Nominal 200 mln € olan konvertasiya olunan istiqrazlar, konversiya qiyməti 25 € (səhmin qiyməti yüksəkdir, deməli konvertasiya edirik).\nOpsionlardan yeni səhmlər: 10 × (1 − 20/30) = 3,33 mln.\nİstiqrazlardan yeni səhmlər: 200 / 25 = 8 mln.\nDiluted səhmlər = 100 + 3,33 + 8 = 111,33 mln.\nEquity Value = 111,33 × 30 = 3 340 mln €.\nDigər borc 500, cash 150, istiqrazlar artıq səhm kimi nəzərə alınıb.\nEV = 3 340 + 500 − 150 = 3 690 mln €."],
    ['h', 'M&A-da dairəvilik'],
    ['p', "Şirkət alınarkən təklif qiyməti bazardan yüksəkdir və qiymət nə qədər yüksəkdirsə, bir o qədər çox opsion pulda olur və durulma bir o qədər böyükdür. Ona görə səhmlərin sayı qiymətdən, qiymət isə səhmlərin sayından asılıdır. Modellərdə bunu iterasiya və ya qapalı istinadlı düsturla həll edirlər."],
    ['h', 'Durulma və səhmin qiymətinin proqnozu'],
    ['p', "DCF üzrə Equity Value alındıqda səhmin qiyməti diluted səhmlərə bölməklə hesablanır, lakin diluted səhmlərin sayı qiymətin özündən asılıdır. Həll: qiymət və səhmlərin sayı uyğunlaşana qədər iterasiya."],
    ['warn', "Kapitallaşma üçün basic səhmlərdən istifadə etmək və ya pulsuz opsionları daxil etmək. Başqa tez-tez rast gəlinən səhv: konvertasiya olunan istiqrazları həm səhm, həm də borc kimi hesablamaq."],
    ['q', "Diluted share count necə hesablanır?", "Əsas səhmlərin sayına xəzinə səhmləri metodu üzrə opsionların xalis durulması (yalnız pulda olan opsionlar), RSU və pulda olduqda konvertasiya olunan istiqrazlardan səhmlər əlavə edilir."],
    ['key', "Qiymətləndirmə üçün həmişə diluted shares lazımdır. Pulda olan opsionlar TSM üzrə, konvertasiya olunanlar if-converted üzrə hesablanır, səhmlərin sayı və qiymət isə bir-biri ilə bağlıdır."]
  ] };

BOOK_AZ.debt = { title: 'Borc və kapital strukturu', tag: 'Qiymətləndirmə',
  intro: "Şirkət aktivlərini borc və səhmlərlə maliyyələşdirir. Aralarındakı tarazlıq kapital strukturu adlanır. O, riski, kapitalın dəyərini və LBO kimi sövdələşmələr üçün imkanı müəyyən edir. Borc növlərini, onların prioritet qaydalarını və kredit göstəricilərini təhlil edək.",
  blocks: [
    ['h', 'Tələblər pilləkəni: kim birinci ödəyir'],
    ['p', "Kreditorlar pulu səhmdarlardan əvvəl alır, kreditorlar arasında isə iyerarxiya var. Növbədə nə qədər yuxarıdasınızsa, risk bir o qədər az, dərəcə bir o qədər aşağıdır."],
    ['ol', [
      "**Revolver (yenilənən kredit xətti) və Term Loan A/B.** Bank kreditləri, adətən girovla təmin olunmuş (secured). Birinci növbə.",
      "**Senior secured notes.** Girovlu istiqrazlar.",
      "**Senior unsecured notes.** Girovsuz istiqrazlar.",
      "**Subordinated / mezzanine.** Tabe borc, çox vaxt kapitalda iştirak elementləri ilə.",
      "**Preferred (imtiyazlı səhmlər).** Ödənişlər sabitdir, lakin bütün kreditorlardan sonra.",
      "**Common equity (adi səhmlər).** Növbədə sonuncu və ən riskli, lakin bütün qalıq artımı alırlar."
    ]],
    ['h', 'Bir borcu digərindən nə fərqləndirir'],
    ['ul', [
      "**Təminat.** Secured borc aktivlərin girovu ilə qorunur, unsecured isə yox.",
      "**Dərəcə.** Üzən (Euribor üstəgəl marja) və ya sabit.",
      "**Ödəmə.** Amortizing (tədricən) və ya bullet (sonda bir ödənişlə).",
      "**Reytinq.** Investment grade (BBB-/Baa3 və yuxarı) və high yield (aşağı). Reytinq nə qədər aşağıdırsa, spred bir o qədər yüksəkdir.",
      "**PIK (payment in kind).** Faizlər pulla ödənilmir, borca əlavə olunur."
    ]],
    ['h', 'Kovenantlar'],
    ['p', "Kovenantlar kredit müqaviləsində kreditoru qoruyan şərtlərdir. **Maintenance kovenantlar** müntəzəm yoxlanılır: məsələn, Net Debt/EBITDA 4,0x-dən yuxarı olmasın və ya faizlərin ödənilməsi əmsalı 3,0x-dən aşağı olmasın. Pozuntu kreditora vaxtından əvvəl ödəməni tələb etmək hüququ verir. **Incurrence kovenantlar** yalnız müəyyən addımlar zamanı yoxlanılır, məsələn, yeni borc cəlb edərkən və ya dividend ödəyərkən."],
    ['h', 'Kredit göstəriciləri'],
    ['ul', [
      "**Net Debt / EBITDA.** Debt 500, Cash 100, EBITDA 100 (500 − 100) / 100 = 4,0x verir. Şirkətin borcu nəzəri olaraq neçə ilə ödəyəcəyini göstərir.",
      "**Interest Coverage = EBITDA / faizlər.** Faizlər 40 olduqda EBITDA 200 5,0x verir.",
      "**Debt / Capital = Debt / (Debt + Equity).** Borc 300 və kapital 700 30% verir."
    ]],
    ['h', 'Borc nə verir və risk nədədir'],
    ['p', "Borcun üstünlükləri: səhmlərdən ucuzdur, vergi qalxanı verir və səhmdarların payını durulaşdırmır. Mənfi cəhətlər: sabit ödənişlər, kovenantlar, iflas riski. Optimal struktur vergi faydası ilə maliyyə böhranı xərcləri arasında tarazlıqdır."],
    ['h', 'İflas zamanı nə baş verir'],
    ['p', "Mütləq prioritet qaydası qüvvədədir: hər sinif pulu yalnız yuxarıdakı sinif tam ödənildikdən sonra alır."],
    ['ex', 'İflas zamanı bölüşdürmə', "Ləğv zamanı şirkətin dəyəri 600. Tələblər: senior secured 400, senior unsecured 300, səhmdarlar.\nSecured kreditorlar 400 alır (100%).\nUnsecured üçün 200 qalır, onların tələbi 300-dür, yəni geri qaytarma 200 / 300 = 66,7%.\nSəhmdarlar 0 alır."],
    ['h', 'Sövdələşmələrdə kapital strukturu'],
    ['p', "LBO-da investor şirkəti alır və qiymətin əhəmiyyətli hissəsini borcla maliyyələşdirir (çox vaxt 4-6 EBITDA). Struktur müxtəlif növbə və dəyərli transhlardan yığılır, şirkətin pul axınlarına uyğunlaşdırılır. Axınlar nə qədər sabitdirsə, bir o qədər çox borc cəlb etmək olar."],
    ['q', "Şirkət niyə səhm əvəzinə borc buraxsın?", "Borc səhmlərdən ucuzdur (vergi qalxanı, investor üçün daha az risk) və səhmdarları durulaşdırmır. Mənfi cəhətlər: sabit ödənişlər, kovenantlar, yüksək iflas riski."],
    ['q', "İflas zamanı səhmdarlar nə alacaq?", "Bütün kreditorların tələblərinin tam ödənilməsindən sonra qalan şeyi. Əksər hallarda heç nə."],
    ['key', "Borc səhmlərdən ucuzdur, lakin sərt öhdəliklər yaradır. Tələblərin prioriteti dəyəri və riski müəyyən edir, kovenantlar kreditorları qoruyur, Net Debt/EBITDA və faizlərin ödənilməsi əmsalı göstəriciləri isə yükün nə qədər təhlükəsiz olduğunu göstərir."]
  ] };
