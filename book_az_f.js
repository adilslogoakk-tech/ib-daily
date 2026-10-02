'use strict';
// Kitabın Azərbaycan versiyası (F hissəsi).
window.BOOK_AZ = window.BOOK_AZ || {};
BOOK_AZ.ma = { title: 'M&A prosesi: şirkət necə satılır', tag: 'Sövdələşmələr',
  intro: "Şirkətin satışı aydın mərhələləri olan bir neçə aylıq layihədir. İnvestisiya bankı prosesi təşkil edir, sənədləri hazırlayır və danışıqlar aparır. Bu ardıcıllığı bilmək suallara cavab verməyə və M&A komandasında analitiklərin nə ilə məşğul olduğunu anlamağa kömək edir.",
  blocks: [
    ['h', 'Sövdələşmənin iki tərəfi'],
    ['p', "**Sell-side** satıcıya məsləhət verir: məqsəd ən yaxşı alıcını ən yaxşı qiymətə tapmaqdır. **Buy-side** alıcıya məsləhət verir: məqsəd uyğun hədəfi tapmaq və məntiqli almaqdır. Satışın klassik prosesi sell-side mövqeyindən təsvir olunur, çünki ən strukturlaşdırılmışdır."],
    ['h', 'Satış prosesinin mərhələləri'],
    ['ol', [
      "**Hazırlıq (2-6 həftə).** Bank şirkətlə tanış olur, maliyyə modeli qurur, qiymətləndirmə diapazonunu müəyyən edir, sənədləri və potensial alıcıların siyahısını (buyer list) hazırlayır.",
      "**Teaser və göndərmə.** Şirkətin bir-iki səhifəlik qısa anonim icmalı potensial alıcılara gedir. Maraqlananlar məxfilik razılaşması (NDA) imzalayır.",
      "**CIM.** NDA-dan sonra alıcılar Confidential Information Memorandum alır: biznes, bazar, maliyyə və strategiya haqqında ətraflı sənəd. Bu, əsas marketinq materialıdır.",
      "**IOI (birinci raund).** Alıcılar qiymət diapazonu ilə məcburi olmayan təkliflər (Indication of Interest) göndərir. Satıcı və bank ikinci raund üçün ən yaxşıları seçir.",
      "**Management presentation və data room.** Seçilmiş iştirakçılar menecmentlə görüşür və virtual data room-a çıxış alır: müqavilələr, maliyyə məlumatları, hüquqi sənədlər. Onlar due diligence (yoxlama) aparır.",
      "**Binding offers (ikinci raund).** Alıcılar qiymət, maliyyələşdirmə şərtləri və razılaşdırılmış müqavilə layihəsi ilə məcburi təkliflər göndərir.",
      "**Danışıqlar və SPA.** Satıcı qalibi seçir və exclusivity imzalayır. Tərəflər alqı-satqı müqaviləsini (SPA) razılaşdırır: qiymət, zəmanətlər, bağlanma şərtləri.",
      "**Signing və closing.** Müqavilənin imzalanması, sonra şərtlərin yerinə yetirilməsi (antiinhisar orqanlarının, tənzimləyicilərin təsdiqi) və pulun sahibini dəyişdiyi sövdələşmənin bağlanması."
    ]],
    ['h', 'Hərrac növləri'],
    ['ul', [
      "**Geniş hərrac (broad auction).** Çoxlu alıcı cəlb olunur. Maksimum rəqabət, lakin məlumat sızması riski.",
      "**Məhdud (targeted).** 5-10 ən ehtimal olunan alıcı dəvət olunur. Qiymət və məxfilik arasında kompromis.",
      "**İkitərəfli danışıqlar.** Bir alıcı. Sürətli və səssiz, lakin sövdələşmədə zəif mövqe."
    ]],
    ['h', 'Kim alır: strateji və maliyyə alıcıları'],
    ['ul', [
      "**Strateji alıcılar** (sahədən olan şirkətlər) sinerjilər hesabına daha çox ödəyə bilər: xərc qənaəti, çarpaz satış.",
      "**Maliyyə alıcıları** (private equity fondları) hədəf gəlirliliklə (IRR) məhdudlaşır. Çıxışdan sonra ildə 20-25% almaq üçün nə qədər lazımdırsa, o qədər ödəyirlər."
    ]],
    ['h', 'M&A komandasında analitiklər nə ilə məşğuldur'],
    ['ul', [
      "Maliyyə modelləri və qiymətləndirmə qurur (DCF, comps, precedents, LBO).",
      "Teaser, CIM, menecment üçün təqdimatlar yazır.",
      "Alıcı siyahıları və təkliflərin müqayisə cədvəllərini hazırlayır.",
      "Data room-u aparır və alıcıların suallarını izləyir.",
      "Sinerji təhlilində və birləşmə modelində kömək edir."
    ]],
    ['h', 'Bank necə qazanır'],
    ['p', "M&A-da bank adətən retainer üçün sabit haqq və sövdələşmənin həcmindən asılı olan uğur üçün əsas mükafat (success fee) alır. Bu o deməkdir ki, bank sövdələşməni bağlanmaya çatdırmaqda maraqlıdır. Komissiyaların həcmi sövdələşmənin ölçüsü və mürəkkəbliyindən asılı olaraq çox fərqlənir."],
    ['q', "Kim daha çox ödəyəcək: strateji, yoxsa maliyyə alıcısı?", "Bir qayda olaraq strateji, çünki fondda olmayan sinerjiləri nəzərə alır. Maliyyə alıcısı gəlirliliklə məhdudlaşır: ona sövdələşmənin məntiqli borc strukturu ilə 20-25% IRR gətirməsi lazımdır."],
    ['q', "CIM nədir?", "Confidential Information Memorandum: maraqlanan alıcıların NDA imzaladıqdan sonra aldığı şirkət haqqında ətraflı sənəd. Biznesi, bazarı, maliyyəni, strategiyanı və investisiya cəlbediciliyini təsvir edir."],
    ['key', "Satış prosesi: hazırlıq, teaser, NDA, CIM, IOI, management presentation və data room, binding offers, SPA, signing və closing. Bank satıcının ən yaxşı qiyməti alması üçün rəqabət təşkil edir."]
  ] };

BOOK_AZ.deals = { title: 'Sövdələşmə növləri, premiya və sövdələşmənin qorunması', tag: 'Sövdələşmələr',
  intro: "Sövdələşmələr forma, ödəniş üsulu və hüquqi struktura görə fərqlənir. Vergilər, risklər və tərəflərin davranışı bu parametrlərdən asılıdır. Bu bölmədə müsahibələrdə soruşulan əsas variantları və qorunma mexanizmlərini təhlil edəcəyik.",
  blocks: [
    ['h', 'Səhmlərin və ya aktivlərin alışı'],
    ['ul', [
      "**Stock deal (share deal).** Alıcı hədəfin səhmlərini və onlarla birlikdə bütün öhdəlikləri və gizli riskləri əldə edir. Hüquqi baxımdan daha sadədir. Almaniyada bu, özəl şirkətlər üçün ən geniş yayılmış sxemdir.",
      "**Asset deal.** Alıcı yalnız seçilmiş aktivləri və öhdəlikləri götürür. İstənilməyəni buraxmağa imkan verir və vergi step-up verir, lakin hər aktivin və müqavilənin ayrıca ötürülməsini tələb edir."
    ]],
    ['h', 'Ödəniş üsulu'],
    ['p', "Alıcı pulla (cash), səhmlərlə (stock) və ya qarışıqla ödəyə bilər. Seçim alıcının imkanlarından və satıcının zövqündən asılıdır."],
    ['ul', [
      "**Cash.** Satıcı müəyyən məbləği dərhal alır və bazar riski daşımır. Alıcı pulla və ya borcla maliyyələşdirir.",
      "**Stock.** Satıcı birləşmiş şirkətin səhmdarı olur və onunla riski və artımı bölüşür. Səhmləri bahalı olan və pulu olmayan alıcı üçün sərfəlidir."
    ]],
    ['h', 'Nəzarət premiyası və mübadilə əmsalı'],
    ['p', "Alıcı bazar qiymətindən yuxarı ödəyir, çünki nəzarəti əldə edir. Premiya elandan bir gün əvvəlki qiymətə nisbətən hesablanır."],
    ['ex', 'Sövdələşmə üzrə hesablamalar', "Hədəfin səhm qiyməti 40 €, təklif 52 €.\nPremiya = 52 / 40 − 1 = 30%.\nHədəfin 20 mln səhmi varsa, sövdələşmənin Equity Value-su = 52 × 20 = 1 040 mln €.\nAlıcının səhmləri ilə ödənişdə (qiymət 30 €) mübadilə əmsalı = 52 / 30 ≈ hədəfin bir səhminə 1,73 alıcı səhmi.\n80 mln köhnə səhmə qarşı 20 mln yeni səhm buraxılarsa, hədəfin səhmdarları birləşmiş şirkətin 20 / (80 + 20) = 20%-ni alacaq."],
    ['h', 'Dostyana və düşmən sövdələşmələri'],
    ['p', "**Dostyana sövdələşmə** hədəfin direktorlar şurası ilə razılaşdırılır. **Düşmən** şuranı keçərək açıq təklif (tender offer) vasitəsilə birbaşa səhmdarlara gedir. Hədəf müdafiə edə bilər: «ağ cəngavər» (başqa alıcı) axtarmaq, «zəhərli həb» (satın alma zamanı səhmlərin durulması) istifadə etmək."],
    ['p', "Almaniyada açıq satın almaları WpÜG qanunu tənzimləyir. Səslərin 30%-nin əldə edilməsi qalan bütün səhmdarlara təklif etməyi (məcburi təklif) öhdəlik qoyur. Qalan azlıq səhmdarlarının çıxarılması (squeeze-out) formadan asılı olaraq 90-95% kimi çox yüksək pay olduqda mümkündür."],
    ['h', 'Sövdələşmənin qorunma mexanizmləri'],
    ['ul', [
      "**Breakup fee.** Hədəf başqa təklifi qəbul edərsə, ilk alıcıya kompensasiya ödəyir (adətən sövdələşmənin həcminin 2-4%-i).",
      "**Reverse termination fee.** Sövdələşmə onun səbəbi ilə pozularsa, alıcı ödəyir: maliyyələşdirmə və ya tənzimləyici təsdiqi almadı.",
      "**No-shop.** Hədəf başqa alıcılar axtarmamağı öhdəsinə götürür. Çox vaxt go-shop şərti ilə yumşaldılır: daha yüksək təklif axtarmaq üçün qısa dövr.",
      "**MAC (Material Adverse Change).** Şirkətlə əhəmiyyətli mənfi hadisə baş verərsə, alıcı sövdələşmədən çıxmaq hüququna malikdir.",
      "**Earn-out.** Qiymətin bir hissəsi sonra ödənilir və hədəflərə (gəlir, EBITDA) çatmaqdan asılıdır. Tərəflər gələcəyi fərqli gördükdə mövqeləri yaxınlaşdırır."
    ]],
    ['h', 'Bərabərlərin birləşməsi və satın alma'],
    ['p', "**Merger of equals**-da hər iki şirkət birləşir, səhmdarlar yeni strukturda paylar alır və premiya minimumdur. **Satın almada** bir tərəf açıq-aşkar əsasdır və premiya ödəyir. Hüquqi baxımdan birləşmə bir şəxsdə birləşmə deməkdir, satın alma isə hər iki şirkətin mövcud qalmasına imkan verə bilər."],
    ['h', 'Tənzimləmə'],
    ['p', "Böyük sövdələşmələr antiinhisar orqanlarının (Avropa Komissiyası, Almaniyada Bundeskartellamt) yoxlamasından keçir. Sövdələşmə rəqabətə təhlükə yaradırsa, tənzimləyici biznesin bir hissəsinin satılmasını (remedies) tələb edə və ya onu qadağan edə bilər. Bu, müddətlərə və bağlanma şərtlərinə qoyulan mühüm riskdir."],
    ['q', "Nə vaxt pul əvəzinə səhmlərlə ödəmək daha sərfəlidir?", "Alıcının səhmləri bahalı (yüksək P/E) olduqda və ya pul və borc çatışmadıqda. Səhmlərlə həmçinin risk və potensial artım satıcı ilə bölüşülür ki, bu da qiymətləndirmə üzrə fikir ayrılıqlarını aradan qaldırır."],
    ['q', "Stock deal və asset deal arasında fərq nədir?", "Stock deal-da səhmlər bütün öhdəliklərlə birlikdə alınır, aktivlərin vergi bazası dəyişdirilmir. Asset deal-da seçilmiş aktivlər alınır, vergi step-up alınır və artıq öhdəliklər buraxılır, lakin proses hüquqi baxımdan daha mürəkkəbdir."],
    ['key', "Sövdələşmənin forması (səhmlər və ya aktivlər), ödəniş üsulu (pul və ya səhmlər) və qoruyucu mexanizmlər (breakup fee, MAC, no-shop, earn-out) alıcı ilə satıcı arasında risklərin bölüşdürülməsini müəyyən edir."]
  ] };
