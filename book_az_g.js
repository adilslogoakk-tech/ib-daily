'use strict';
// Kitabın Azərbaycan versiyası (G hissəsi).
window.BOOK_AZ = window.BOOK_AZ || {};
BOOK_AZ.accdil = { title: 'Accretion və dilution: sövdələşmə EPS-ə nə edir', tag: 'Sövdələşmələr',
  intro: "Alıcı sövdələşməni elan edərkən həmişə sualı cavablandırır: bir səhmə mənfəət artacaq, yoxsa düşəcək. Bazar məhz buna reaksiya verir. Accretion/dilution modeli sövdələşmənin EPS-ə təsirini qiymətdən, ödəniş üsulundan və sinerjilərdən asılı olaraq göstərir.",
  blocks: [
    ['h', 'İdeya'],
    ['p', "Birləşmiş şirkətin EPS-i alıcının sövdələşmədən əvvəlki EPS-indən yüksəkdirsə, sövdələşmə **accretive**-dir. Aşağıdırsa, sövdələşmə **dilutive**-dir. Bu, dəyər yaratmaqla eyni şey deyil, lakin bazar və direktorlar şurası üçün əsas göstəricidir."],
    ['key', "Yeni EPS = (alıcının NI-si + hədəfin NI-si + vergidən sonra sinerjilər − vergidən sonra maliyyələşdirmə xərcləri − yenidən qiymətləndirmənin amortizasiyası) / (köhnə səhmlər + yeni səhmlər)"],
    ['h', 'Nümunə: səhmlər və ya pul'],
    ['p', "Alıcı 50 mln səhmlə 100 mln € qazanır, EPS = 2,00 €, səhmin qiyməti 40 € (P/E = 20). Hədəf 30 mln € qazanır, satınalma qiyməti 300 mln € (hədəfin P/E-si = 10)."],
    ['ul', [
      "**Səhmlərlə ödəniş.** 300 / 40 = 7,5 mln səhm buraxmaq lazımdır. EPS = (100 + 30) / (50 + 7,5) = 130 / 57,5 = 2,26 €. Artım 13%: sövdələşmə accretive-dir.",
      "**6% borcdan pulla ödəniş, vergi 25%.** Vergidən sonra faizlər = 300 × 6% × 0,75 = 13,5. EPS = (100 + 30 − 13,5) / 50 = 2,33 €. Artım 16,5%: həm də accretive və daha güclü."
    ]],
    ['p', "Hər iki variant accretive-dir, çünki alıcı hədəf üçün P/E 10 ilə (gəlirlilik 10%) ödəyir, onun öz səhmləri isə P/E 20 (gəlirlilik 5%) dəyərindədir, borc isə vergidən sonra 4,5% başa gəlir. Hədəfin ucuz mənfəəti maliyyələşdirmənin qiymətini üstələyir."],
    ['h', 'Sinerjilərin təsiri'],
    ['p', "Tutaq ki, vergidən əvvəl 20 mln € sinerji gözlənilir, yəni vergidən sonra 20 × 0,75 = 15. Səhmlərlə ödənişdə EPS: (130 + 15) / 57,5 = 2,52. Pulla ödənişdə: (130 + 15 − 13,5) / 50 = 2,63."],
    ['h', 'Aktivlərin yenidən qiymətləndirilməsinin təsiri'],
    ['p', "Hədəfin aktivləri 50 yuxarı yenidən qiymətləndirilərsə və 10 ilə amortizasiya olunarsa, bu, 5 mln € xərc, vergidən sonra 3,75 əlavə edir. Səhmlərlə ödənişdə EPS (130 − 3,75) / 57,5 = 2,20-yə düşür. Goodwill amortizasiya olunmur, ona görə EPS-ə təsir etmir."],
    ['h', 'Sürətli qaydalar'],
    ['ul', [
      "**Səhmlərlə ödəniş:** alıcının P/E-si hədəfin alındığı P/E-dən yüksəkdirsə, sövdələşmə accretive-dir. Alıcı «bahalı» valyuta ilə «ucuz» mənfəət üçün ödəyir.",
      "**Borcla ödəniş:** hədəfin «mənfəət gəlirliliyi» (1 / P/E) vergidən sonra borcun dəyərindən yüksəkdirsə, sövdələşmə accretive-dir.",
      "**Hesabdakı pulla ödəniş:** hədəfin gəlirliliyini pul üzrə itirilmiş gəlirliliklə müqayisə edirlər."
    ]],
    ['p', "Qaydaya nümunə: P/E 25 olan alıcı P/E 10 olan hədəfi səhmlərlə alır. O, buraxılan kapitalın hər avrosuna daha çox mənfəət alır, deməli sövdələşmə accretive-dir."],
    ['h', 'Sinerjilər üzrə zərərsizlik nöqtəsi'],
    ['p', "Sövdələşmə dilutive-dirsə, EPS-in əvvəlki qalması üçün nə qədər sinerji lazım olduğunu hesablayırlar. Bunun üçün sövdələşmədən əvvəlki EPS × yeni səhmlərin sayı ilə birləşmiş şirkətin sinerjisiz mənfəəti arasındakı fərqi tapırlar. Vergidən sonra bu fərq lazım olan sinerjilərdir."],
    ['h', 'Accretion dəyər yaratmağa bərabər deyil'],
    ['p', "Alıcı artıq ödəyibsə və ya kapital gəlirliliyi aşağı olan biznes alıbsa, sövdələşmə accretive ola və yenə də dəyəri məhv edə bilər. Məsələn, ucuz borc demək olar ki, hər alışı accretive edir, lakin riskli. Ona görə hədəfin ROIC-ına, qiymətə və strateji mənaya da baxırlar."],
    ['warn', "Sinerjilər və faizlər üzrə vergini unutmaq və ya yeni səhmləri nəzərə almamaq. Başqa səhv: accretive-in həmişə yaxşı olduğunu hesab etmək."],
    ['q', "P/E 25 olan alıcı P/E 10 olan hədəfi səhmlərlə alır. Accretive, yoxsa dilutive?", "Accretive: alıcı bahalı səhmlər buraxır və onlar üçün ucuz mənfəət alır, ona görə EPS artır."],
    ['q', "Walk me through a merger model.", "Alıcının və hədəfin mənfəətlərini götürürük, vergidən sonra sinerjiləri və maliyyələşdirmə xərclərini əlavə edirik, yenidən qiymətləndirmənin amortizasiyasını və yeni səhmləri nəzərə alırıq. Pro forma səhmlərin sayına bölürük və alıcının ilkin EPS-i ilə müqayisə edirik."],
    ['key', "Yeni EPS iki şirkətin mənfəətlərindən, sinerjilərdən, maliyyələşdirmə xərclərindən və səhmlərin sayından yığılır. Səhmlərlə ödənişdə açar alıcının P/E-sinin hədəfin P/E-sinə qarşı, borcla ödənişdə hədəfin gəlirliliyinin borcun dəyərinə qarşı durmasıdır."]
  ] };

BOOK_AZ.lbo = { title: 'LBO: borc hesabına satın alma', tag: 'Sövdələşmələr',
  intro: "Leveraged buyout şirkətin əsasən borc pul hesabına alınmasıdır. Maliyyə investoru (sponsor) qiymətin kiçik hissəsini qoyur, qalanını borc verir və sonra o, şirkətin öz pul axını ilə ödənilir. Bir neçə ildən sonra şirkət satılır.",
  blocks: [
    ['h', 'LBO necə qurulub'],
    ['ol', [
      "Sponsor şirkəti EV qiymətinə alır, bir hissəsini borcla, bir hissəsini öz kapitalı (equity) ilə maliyyələşdirir.",
      "3-7 il ərzində şirkət borcu sərbəst pul axını hesabına ödəyir.",
      "Sponsor şirkəti satır (exit) və borc ödənildikdən sonra qalanı alır."
    ]],
    ['p', "İdeya budur ki, borc gəlirliliyi gücləndirir. Biznes böyüyür və borcu ödəyirsə, qiymətdə səhm kapitalının payı sürətlə artır, qoyuluş isə az olub."],
    ['h', 'Mini-nümunə (paper LBO)'],
    ['p', "Sponsor EBITDA-sı 100 mln € olan şirkəti 9x EBITDA ilə alır və 5x EBITDA-nı borcla maliyyələşdirir."],
    ['tbl', ['Giriş', 'mln €'], [
      ['EBITDA', '100'],
      ['9x üzrə EV', '900'],
      ['Borc (5x EBITDA)', '500'],
      ['Sponsorun equity-si', '400']
    ]],
    ['p', "5 ildə borcun ödənilməsi üçün sərbəst pul axını: 60, 70, 80, 85 və 90, cəmi 385. Çıxışda borc: 500 − 385 = 115. Beşinci ildə EBITDA 140, çıxışda mültiplikator eyni 9x."],
    ['tbl', ['Çıxış (5-ci il)', 'mln €'], [
      ['EBITDA', '140'],
      ['9x üzrə EV', '1 260'],
      ['Borc', '115'],
      ['Çıxışda equity', '1 145']
    ]],
    ['key', "MOIC = 1 145 / 400 = 2,86x. IRR = 2,86^(1/5) − 1 ≈ 23,4%."],
    ['h', 'Gəlirlilik haradan gəlir'],
    ['p', "Səhm kapitalının dəyərinin artımı 1 145 − 400 = 745-dir. Mənbələr üzrə bölək:"],
    ['ul', [
      "**EBITDA artımı.** (140 − 100) × 9 = 360.",
      "**Mültiplikatorun genişlənməsi.** Nümunədə 0 (giriş və çıxış 9x).",
      "**Borcun ödənilməsi (deleveraging).** Şirkətin 385 pulu borcun azaldılmasına getdi."
    ]],
    ['p', "360 + 0 + 385 = 745 cəmi, olmalı olduğu kimi."],
    ['h', 'Çıxış qiymətinə həssaslıq'],
    ['tbl', ['Çıxışda mültiplikator', 'Çıxışda equity', 'MOIC', 'IRR'], [
      ['8x', '1 005', '2,51x', '20,2%'],
      ['9x', '1 145', '2,86x', '23,4%'],
      ['10x', '1 285', '3,21x', '26,3%']
    ]],
    ['p', "Beş illik müddət üçün sürətli arayış: MOIC 2,0x təxminən ildə 15%, 2,5x təxminən 20%, 3,0x təxminən 25%."],
    ['h', 'Şirkəti yaxşı namizəd nə edir'],
    ['ul', [
      "Borca xidmət etmək üçün sabit və proqnozlaşdırıla bilən pul axını.",
      "Aşağı kapital xərcləri.",
      "Güclü menecment və aydın yaxşılaşdırma planı (marja, xərclər).",
      "Məntiqli giriş qiyməti və aydın çıxış yolları.",
      "Biznesi yaxşılaşdırmaq imkanı: əməliyyat səmərəliliyi, kiçik şirkətlərin alınması (buy-and-build)."
    ]],
    ['h', 'Çıxış yolları və əlavə alətlər'],
    ['ul', [
      "**Strateji alıcıya satış** (trade sale).",
      "**Başqa fonda satış** (secondary buyout).",
      "**IPO.**",
      "**Dividend recap:** şirkət yeni borc götürür və sponsora dividend ödəyir, çıxışdan əvvəl pulun bir hissəsini qaytarır."
    ]],
    ['h', 'Kredit leveraj-ı: iki tərəfli qılınc'],
    ['p', "Daha çox borc daha az qoyulmuş kapital və uğur zamanı daha yüksək gəlirlilik deməkdir. Lakin borc üzrə ödənişlər nəticələrdən asılı deyil və biznes pisləşdikdə şirkət kovenantları poza və ya iflas edə bilər. Ona görə strukturu ehtiyatla seçirlər."],
    ['warn', "Equity hesablayarkən çıxışda borcu çıxmağı unutmaq və ya MOIC ilə IRR-ı qarışdırmaq. IRR = MOIC^(1/n) − 1, (MOIC − 1) / n deyil."],
    ['q', "Walk me through an LBO.", "Giriş qiymətini (EBITDA × mültiplikator) və strukturu müəyyən edirik: borc və sponsorun equity-si. Sərbəst pul axınını proqnozlaşdırırıq və borcun ödənilməsinə yönəldirik. Çıxışda EV-ni EBITDA və mültiplikator vasitəsilə hesablayırıq, borcu çıxırıq və equity alırıq. Gəlirliliyi MOIC və IRR vasitəsilə hesablayırıq."],
    ['q', "Şirkəti LBO üçün yaxşı namizəd nə edir?", "Sabit axınlar, aşağı CapEx, güclü menecment, marjanı yaxşılaşdırma potensialı, məntiqli giriş qiyməti və aydın çıxış."],
    ['key', "LBO EBITDA artımından, mültiplikatorun genişlənməsindən və borcun ödənilməsindən qazanır. Borc qoyulmuş kapitalı azaldır və IRR-ı yüksəldir, lakin riski də. Sürətli qiymətləndirmə üçün 5 illik paper LBO istifadə olunur."]
  ] };
