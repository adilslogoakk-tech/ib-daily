'use strict';
// Kitabın Azərbaycan versiyası (A hissəsi). book1-3.js ilə eyni blok formatı.
window.BOOK_AZ = window.BOOK_AZ || {};
BOOK_AZ.ev = { title: 'Enterprise Value və Equity Value: biznesin qiyməti və səhmlərin qiyməti', tag: 'Qiymətləndirmə',
  intro: "İnvestisiya bankında qiymətləndirmə haqqında demək olar ki, hər söhbət iki rəqəmlə başlayır: Equity Value və Enterprise Value. Onların nə ilə fərqləndiyini və birindən digərinə necə keçməyi əminliklə başa düşürsünüzsə, müsahibə materialının yarısını artıq başa düşürsünüz.",
  blocks: [
    ['h', 'Niyə iki rəqəm lazımdır'],
    ['p', "«Şirkət 2 milyard dəyərindədir» dedikdə nəyin nəzərdə tutulduğu aydın olmur. Bütün səhmlərinin qiyməti? Yoxsa borclarla birlikdə bütün biznesin qiyməti? Bunlar fərqli məbləğlərdir. Buna görə maliyyədə iki anlayışdan istifadə olunur."],
    ['p', "**Equity Value** (səhmdar kapitalının dəyəri) sualına cavab verir: şirkətin bütün səhmləri nə qədər edir. Açıq şirkət üçün bu, bazar kapitallaşmasıdır, yəni bir səhmin qiymətinin səhmlərin sayına vurulması."],
    ['p', "**Enterprise Value** (müəssisənin dəyəri, EV) başqa suala cavab verir: bizneslə bağlı ona pul qoyan hər kəs, həm səhmdarlar, həm də kreditorlar üçün biznesin özü nə qədər edir. Bu, şirkəti tam almaq və onun əməliyyat fəaliyyətini əldə etmək üçün ödəməli olacağınız qiymətdir."],
    ['h', 'Equity Value: səhmin qiymətindən'],
    ['p', "Düstur sadədir: səhmin qiyməti × səhmlərin sayı. Lakin səhmlərin sayı **diluted** götürülməlidir, yəni səhmlərə çevrilə bilən bütün alətləri nəzərə almalıdır: işçilərin opsionları, konvertasiya olunan istiqrazlar, RSU. Bu barədə ətraflı durulma bölməsində."],
    ['ex', 'Mandate Retail', "Mandate Retail mağaza şəbəkəsinin 50 mln səhmi var, bir səhmin qiyməti 40 avrodur.\nEquity Value = 50 mln × 40 € = 2 000 mln €.\nŞirkətin 700 mln € kredit və istiqrazı, hesablarında isə 200 mln € pulu var."],
    ['h', 'Equity Value-dan EV-yə körpü'],
    ['p', "Biznesin dəyərini almaq üçün səhmlərin qiymətinə şirkətin digər investorlara borclu olduğu hər şeyi əlavə etmək və onun malik olduğu pulu çıxmaq lazımdır."],
    ['ul', [
      "**+ Debt (borc).** Bank kreditləri, istiqrazlar. Kreditorlar da bizneslə bağlı pul qoyub, onların tələbləri nəzərə alınmalıdır. IFRS 16 standartına görə bura tez-tez icarə də (lease liabilities) düşür.",
      "**+ Preferred (imtiyazlı səhmlər).** Onlar ödəniş prioritetinə görə adi səhmlərdən yuxarıdır və borc kimi davranır.",
      "**+ Minority Interest (azlıq payı).** Şirkət tam sahibi olmadığı törəməni konsolidasiya edərsə, onun EBITDA-sı törəmənin nəticəsinin 100%-ni daxil edir. Deməli, EV-də də 100% nəzərə alınmalıdır, yəni kənar səhmdarların payı əlavə olunur.",
      "**− Cash (pul).** Nağd pul və onun ekvivalentləri çıxılır. Bu barədə aşağıda: müsahibədə ən tez-tez rast gəlinən mövzudur."
    ]],
    ['key', "EV = Equity Value + Debt + Preferred + Minority Interest − Cash"],
    ['ex', 'Davamı', "Mandate Retail üçün:\nEV = 2 000 + 700 − 200 = 2 500 mln €.\nXalis borc (Net Debt) = Debt − Cash = 700 − 200 = 500 mln €. Ona görə tez-tez yazırlar: EV = Equity Value + Net Debt."],
    ['h', 'Niyə cash çıxırıq'],
    ['p', "Təsəvvür edin ki, evi 500 000 €-ya alırsınız və evin seyfində evlə birlikdə sizə keçən 100 000 € var. Evin özünün sizin üçün real qiyməti 400 000 €-dur. Şirkətlə də eynidir: alıcı pulu biznesle birlikdə alır və dərhal onunla borcun bir hissəsini ödəyə bilər. Ona görə əməliyyat biznesinin dəyəri cash məbləği qədər azdır."],
    ['p', "Məntiq borc üçün güzgü kimidir. Alıcı şirkəti borcu ilə birlikdə götürərsə, öhdəlikləri öz üzərinə alır və biznesin «həqiqi qiyməti» borcun məbləği qədər artır."],
    ['q', "Niyə Equity Value-dan EV hesablayarkən cash çıxılır?", "Çünki cash əməliyyat biznesinə aid deyil: alıcı onu şirkətlə birlikdə alır və dərhal borcu ödəmək üçün istifadə edə bilər. EV biznesin özünün qiymətini göstərməlidir, biznes üstəgəl seyfdəki pulun yox."],
    ['h', 'EV niyə lazımdır'],
    ['p', "Əsas səbəb: EV fərqli kapital strukturlu şirkətləri müqayisə etməyə imkan verir. İki eyni biznesi götürək. Hər ikisi 70 mln € əməliyyat mənfəəti (EBIT) qazanır, lakin biri yalnız səhmlərlə, digəri qismən borcla maliyyələşir."],
    ['tbl', ['', 'A şirkəti (borcsuz)', 'B şirkəti (borclu)'], [
      ['Equity Value', '1 000', '600'],
      ['Xalis borc', '0', '400'],
      ['EV', '1 000', '1 000'],
      ['EBIT', '70', '70'],
      ['Faizlər (borcun 5%-i)', '0', '20'],
      ['Net Income (vergi 30%)', '49', '35'],
      ['P/E', '20,4x', '17,1x'],
      ['EV/EBIT', '14,3x', '14,3x']
    ]],
    ['p', "Şirkətlərin P/E-si fərqlidir, halbuki biznes eynidir: ona borc təsir edir. EV/EBIT isə eynidir, çünki həm EV, həm də EBIT bütün biznesə aiddir, nə ilə maliyyələşməsindən asılı olmayaraq. EV-nin mənası məhz budur."],
    ['h', 'Uyğunluq qaydası'],
    ['p', "Mültiplikatorun surəti və məxrəci eyni investor qrupuna aid olmalıdır."],
    ['ul', [
      "EV bütün investorlara aiddir, ona görə faizlərdən **əvvəlki** göstəricilərə bölünür: Revenue, EBITDA, EBIT.",
      "Equity Value yalnız səhmdarlara aiddir, ona görə faizlərdən **sonrakı** göstəricilərə bölünür: Net Income, Book Value."
    ]],
    ['warn', "Equity Value-nu EBITDA-ya və ya EV-ni Net Income-a bölmək olmaz: surət və məxrəc fərqli investor qruplarına aiddir və mültiplikator mənasını itirir."],
    ['h', 'Əks yol: EV-dən səhmin qiymətinə'],
    ['p', "DCF-dən və ya analoqlarla müqayisədən sonra EV alırsınız. Səhmin qiymətini tapmaq üçün körpüdən əks istiqamətdə gedirik: EV-dən borc və imtiyazlı səhmləri çıxırıq, cash əlavə edirik və diluted səhmlərin sayına bölürük."],
    ['ex', 'EV-dən səhmin qiyməti', "DCF üzrə EV = 2 000 mln €. Debt 700, Cash 200, Preferred 100.\nEquity Value = 2 000 − 700 + 200 − 100 = 1 400 mln €.\nDiluted səhmlərin sayı 100 mln, yəni səhmin qiyməti = 1 400 / 100 = bir səhmə 14 €."],
    ['h', 'Soruşulan incəliklər'],
    ['ul', [
      "**İcarə.** IFRS 16-ya görə icarə öhdəlikləri borc kimi göstərilir. Onları EV-yə daxil etmisinizsə, EBITDA icarə xərclərindən əvvəl olmalıdır. Daxil etməmisinizsə, EBITDA icarədən sonra götürülür. Qarışdırmaq olmaz.",
      "**Pensiya öhdəlikləri.** Kifayət qədər maliyyələşməyən pensiya planları da çox vaxt borc sayılır.",
      "**Assosiasiya olunmuş şirkətlər** (20-50% pay, konsolidasiya olunmur). Onların nəticəsi EBITDA-ya daxil deyil, ona görə mültiplikator təhrif olunmasın deyə onların dəyəri EV-dən çıxılır.",
      "**Mənfi EV.** Pul bazar kapitallaşması və borcun cəmindən çox olduqda baş verir. Bazar biznesi demək olar ki, qiymətləndirmir, pul isə bütün şirkətdən bahadır."
    ]],
    ['q', "EV Equity Value-dan az ola bilərmi?", "Bəli, şirkətin xalis pulu varsa (cash borcdan çoxdur), yəni Net Debt mənfidirsə. Onda EV = Equity Value + Net Debt Equity Value-dan azdır. Bu, böyük pul ehtiyatları olan texnologiya şirkətlərində olur."],
    ['key', "Equity Value «səhmlər nə qədər edir», EV «biznes nə qədər edir» sualına cavab verir. Aralarında borc, imtiyazlı səhmlər, azlıq payı və cash-dan ibarət körpü var. EV üzrə mültiplikatorlar faizlərdən əvvəlki mənfəətə, Equity Value üzrə mültiplikatorlar faizlərdən sonrakı mənfəətə bölünür."]
  ] };

BOOK_AZ.profit = { title: 'Üç mənfəət: EBITDA, EBIT və Net Income', tag: 'Hesabat',
  intro: "Mənfəət və zərər hesabatında əslində bir mənfəət yox, bütöv bir pilləkən var. Hər pillə öz sualına cavab verir və peşəkar həmişə dəqiq hansı mənfəətdən söhbət getdiyini anlayır.",
  blocks: [
    ['h', 'Gəlirdən xalis mənfəətə pilləkən'],
    ['p', "Şirkətin sadələşdirilmiş hesabatını götürək. Addım-addım gəlirdən müxtəlif mənfəət növlərinin necə alındığı görünür."],
    ['tbl', ['Maddə', 'mln €', 'Nəyi göstərir'], [
      ['Revenue (gəlir)', '1 000', 'Satışdan qazanılan hər şey'],
      ['− COGS (maya dəyəri)', '−550', 'İstehsalın birbaşa xərcləri'],
      ['= Gross Profit (ümumi mənfəət)', '450', 'Məhsul səviyyəsində marja (45%)'],
      ['− SG&A (kommersiya və ümumi)', '−200', 'Satış və idarəetmə xərcləri'],
      ['= EBITDA', '250', 'Köhnəlmədən əvvəl əməliyyat mənfəəti (25%)'],
      ['− D&A (amortizasiya)', '−50', 'Aktivlərin köhnəlməsi üçün pulsuz xərc'],
      ['= EBIT', '200', 'Əməliyyat mənfəəti (20%)'],
      ['− Borc üzrə faizlər', '−40', 'Borc kapitalın qiyməti'],
      ['= EBT (vergidən əvvəl mənfəət)', '160', ''],
      ['− Vergi (25%)', '−40', ''],
      ['= Net Income (xalis mənfəət)', '120', 'Səhmdarların mənfəəti (12%)']
    ]],
    ['h', 'EBITDA: faizlər, vergilər və amortizasiyadan əvvəlki mənfəət'],
    ['p', "EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) biznesin əsas fəaliyyətdən kapital strukturu, vergilər və köhnəlmənin təsirindən əvvəl nə qədər qazandığını göstərir. Məhz buna görə M&A-da sevilir: iki biznesi onların necə maliyyələşdiyinə və amortizasiyanı necə hesabladığına fikir vermədən müqayisə etmək olar."],
    ['p', "EBITDA-nın ciddi məhdudiyyətləri var. O, **pul axınına bərabər deyil**: ondan CapEx (avadanlığa investisiyalar), dövriyyə kapitalının dəyişməsi və vergilər çıxılmayıb. Böyük investisiyaları olan şirkət gözəl EBITDA göstərib eyni zamanda pul yandıra bilər."],
    ['h', 'EBIT: əməliyyat mənfəəti'],
    ['p', "EBITDA-dan amortizasiyanı çıxsaq, EBIT alınır. Amortizasiya avadanlığın dəyərini xidmət illəri üzrə bölüşdürmək üsuludur. O, pulsuzdur (pul daha əvvəl, alış zamanı xərclənib), lakin real köhnəlməni əks etdirir. Ona görə EBIT kapital tutumlu biznesin iqtisadiyyatını daha yaxşı göstərir: zavod, yollar, şəbəkələr."],
    ['p', "EBIT borcdan asılı deyil: faizlər ondan sonra çıxılır. Ona görə EV/EBIT mültiplikatoru da məntiqcə EV ilə uyğundur."],
    ['h', 'Net Income: səhmdarlara nə qalır'],
    ['p', "Faizlər və vergilər çıxıldıqdan sonra xalis mənfəət qalır. Məhz onu səhmlərin sayına bölüb EPS (bir səhmə mənfəət) alırlar, səhmin qiymətini isə EPS-ə bölüb P/E alırlar."],
    ['h', 'Marja: mənfəət gəlirin payı kimi'],
    ['p', "Marja hər 100 avro gəlirə nə qədər mənfəət düşdüyünü göstərir. Nümunədə: ümumi marja 45%, EBITDA marjası 25%, EBIT marjası 20%, xalis marja 12%. Şirkətlər və illər arasında marjanı müqayisə edərək kimin biznesinin daha səmərəli olduğu görünür."],
    ['h', 'Adjusted EBITDA: birdəfəlik maddələr olmadan'],
    ['p', "Real hesabatda birdəfəlik hadisələr olur: restrukturizasiya xərcləri, məhkəmə cərimələri, aktivlərin silinməsi. Onlar təkrarlanan mənfəətliliyin mənzərəsini təhrif edir, ona görə analitiklər EBITDA-nı onlarsız yenidən hesablayırlar. Bu, Adjusted EBITDA-dır. Hər düzəliş əsaslandırılmalıdır: vicdansız şirkətlər müntəzəm xərcləri «birdəfəlik»ə əlavə edərək EBITDA-nı «düzəldirlər»."],
    ['h', 'Kapitalın gəlirliliyi: ROIC və ROE'],
    ['ul', [
      "**ROE** = Net Income / Equity. Səhmdar kapitalının hər avrosuna nə qədər mənfəət. Borcdan asılıdır: daha çox borc, daha yüksək ROE.",
      "**ROIC** = NOPAT / Invested Capital, burada NOPAT = EBIT × (1 − vergi). Maliyyələşdirmə strukturundan asılı olmayaraq bütün investisiya olunmuş kapitalın hər avrosuna nə qədər mənfəət. Yaxşı biznes kapitalın dəyərindən (WACC) yüksək ROIC qazanır."
    ]],
    ['warn', "EBITDA-nı «pul axını» adlandırmaq olmaz. Aralarında vergilər, CapEx və dövriyyə kapitalının dəyişməsi var."],
    ['q', "Niyə EBITDA qüsursuz olmayan göstərici sayılır?", "Çünki o, CapEx, vergiləri və dövriyyə kapitalının dəyişikliklərini, yəni real pul xərclərini nəzərə almır. Kapital tutumlu bizneslər üçün EBITDA real pul potensialını xeyli şişirdir. Ona görə onu EBIT və sərbəst pul axını ilə tamamlayırlar."],
    ['key', "Revenue → Gross Profit → EBITDA → EBIT → EBT → Net Income. EBITDA və EBIT borcdan asılı deyil, buna görə EV üzrə mültiplikatorlar onlara əsaslanır. Net Income faizləri nəzərə alır, ona görə P/E üçün lazımdır."]
  ] };
