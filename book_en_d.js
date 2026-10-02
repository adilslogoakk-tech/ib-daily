'use strict';
// English version of the book (part D).
window.BOOK_EN = window.BOOK_EN || {};
BOOK_EN.mult = { title: 'Multiples: which to use when', tag: 'Valuation',
  intro: "Multiples are the quickest way to value a company: instead of a long forecast we compare it with similar ones. But every multiple has its area of application, and a wrong choice leads to absurd conclusions.",
  blocks: [
    ['h', 'The idea of a multiple'],
    ['p', "A multiple is the ratio of a company's value to one of its metrics: profit, revenue, book equity. It answers the question “how much does the market pay for one unit of this metric”. If comparable companies trade at 8x EBITDA, a company with EBITDA of €100 m can be valued at roughly €800 m."],
    ['h', 'Two families of multiples'],
    ['p', "Remember the main rule: the numerator and denominator must relate to the same investors."],
    ['tbl', ['Family', 'Multiples', 'Denominator metrics'], [
      ['EV level (before debt)', 'EV/Revenue, EV/EBITDA, EV/EBIT', 'Revenue, EBITDA, EBIT'],
      ['Equity level (after debt)', 'P/E, P/B, PEG, dividend and FCF yield', 'Net Income, EPS, book equity']
    ]],
    ['h', 'The main multiples with examples'],
    ['ul', [
      "**EV/EBITDA.** The workhorse of M&A. EV 1,200 and EBITDA 150 give 8.0x. It does not depend on debt, taxes or depreciation.",
      "**EV/EBIT.** Better for capital-intensive businesses, because it takes wear into account. EV 900 and EBIT 100 give 9.0x.",
      "**EV/Revenue.** For companies without profit or with an unstable margin. EV 600 and revenue 200 give 3.0x.",
      "**P/E.** Share price to earnings per share. Price 45 and EPS 2.5 give 18x. The inverse, the earnings yield, shows the “yield” of the stock: at a P/E of 25 it equals 1/25 = 4%.",
      "**P/B.** Market cap to book equity. 600 / 400 = 1.5x. Key for banks.",
      "**PEG.** P/E divided by the earnings growth rate in percent. With a P/E of 20 and 10% growth, PEG is 2.0. It helps compare an expensive fast-growing company with a cheap slow one.",
      "**Dividend yield and FCF yield.** A dividend of 3 at a price of 60 gives 5%. FCF of 50 on a market cap of 1,000 is also 5%."
    ]],
    ['h', 'What determines the level of a multiple'],
    ['p', "A multiple is not random. It is higher for companies with fast growth, a high margin and a high return on capital (ROIC), as well as low risk (a low WACC). If a company trades at 20x EBITDA while its peers trade at 8x, the market expects much more growth from it or considers it much more reliable."],
    ['h', 'Choosing a multiple by industry'],
    ['tbl', ['Industry', 'Typical multiples', 'Why'], [
      ['Banks, insurers', 'P/E, P/B, P/TBV', 'Debt is a bank\'s raw material, EV makes no sense'],
      ['REITs (real estate)', 'P/FFO, P/AFFO, NAV', 'Net Income is distorted by property depreciation'],
      ['SaaS, technology', 'EV/ARR, EV/Revenue, Rule of 40', 'Often no profit, subscription growth matters'],
      ['Oil and gas', 'EV/EBITDAX, NAV of reserves', 'Exploration costs are separated for comparability'],
      ['Retail, restaurants', 'EV/EBITDAR', 'Rent makes up a large part of costs'],
      ['Utilities, infrastructure', 'EV/EBITDA, dividend yield', 'Stable flows, payouts are valued']
    ]],
    ['p', "**The Rule of 40** for SaaS: the revenue growth rate plus margin (more often FCF margin) should add up to at least 40%. Growth of 25% and a margin of 10% give 35%: below the threshold."],
    ['h', 'LTM and NTM'],
    ['p', "A multiple can be calculated on past metrics (LTM, the last 12 months) or on forecast ones (NTM or 2027E). The market looks forward, so forward multiples of fast-growing companies are noticeably lower than historical ones. The main thing is to compare identical periods."],
    ['h', 'Typical traps'],
    ['ul', [
      "**Negative or one-off profit.** P/E does not work, you need normalisation or a different multiple.",
      "**The peak of the cycle.** For a cyclical company at the peak, profit is high and the multiple is low and deceptively cheap. Mid-cycle figures are used.",
      "**Different accounting.** Leases under IFRS 16 and US GAAP, capitalised development costs. Comparing “apples with oranges”.",
      "**Mixing levels.** EV on Net Income, Equity Value on EBITDA."
    ]],
    ['q', "Why is EV/EBITDA used more often than P/E in M&A?", "EV/EBITDA does not depend on capital structure, taxes or depreciation policy, so it compares the operating business itself. P/E depends on debt: two identical companies with different shares of debt will have different P/Es."],
    ['q', "How do you value a company with negative EBITDA?", "Use revenue multiples (EV/Revenue, EV/ARR), growth and unit-economics metrics, or a DCF that reaches a target margin. Profit-based multiples do not work here."],
    ['key', "Choose a multiple by industry and stage of the business, keep the numerator and denominator consistent and compare identical periods. A multiple is explained by growth, margin, return on capital and risk."]
  ] };

BOOK_EN.comps = { title: 'Comps, precedents, SOTP and the football field', tag: 'Valuation',
  intro: "Multiples value nothing by themselves until the right peers are chosen for them. In an investment bank a valuation is usually assembled from several methods and shown on a single chart. In this chapter we look at how it is done.",
  blocks: [
    ['h', 'Trading comps: peers on the stock exchange'],
    ['p', "The comparable public companies method (trading comps) takes the multiples of similar companies that trade on the stock exchange today and applies them to the company being valued. It values a minority stake: it does not include a control premium."],
    ['ol', [
      "**Select the peer group:** the same sector and business model, comparable size, growth rates, margin, geography, risk.",
      "**Collect the data:** share price, number of diluted shares, debt, cash, LTM and NTM metrics. Normalise them (see the chapter on normalisation).",
      "**Calculate the multiples** for each company.",
      "**Choose the statistic:** median, mean, upper and lower quartiles. The median is robust to outliers.",
      "**Apply it to the target:** multiple × target's metric = EV. Then subtract net debt to get Equity Value and the share price."
    ]],
    ['ex', 'Valuation from peers', "The peers trade at EV/EBITDA of 7.5x, 8.0x, 8.5x, 9.5x and 10.0x. The median is 8.5x.\nThe target has EBITDA of €75 m and net debt of €100 m.\nEV = 75 × 8.5 = €637.5 m.\nEquity Value = 637.5 − 100 = €537.5 m."],
    ['h', 'Precedent transactions: past deals'],
    ['p', "The precedent transactions method looks at the multiples at which similar M&A deals were done. These multiples include a **control premium** and expected synergies: the buyer pays more than the market price to get the whole company. So they are usually higher than trading comps."],
    ['p', "If the deals were done at 10.5x EBITDA, then for our target EV = 75 × 10.5 = €787.5 m, noticeably higher than 637.5 from the peers. A caution: the deals must be recent and comparable in size, and market conditions (rates, sentiment) change greatly over the years."],
    ['h', 'Which method gives the higher valuation'],
    ['ul', [
      "**Precedent transactions** are usually higher than comps because of the control premium.",
      "**Trading comps** reflect the minority price without control.",
      "**DCF** depends on assumptions and can turn out to be anything.",
      "**LBO analysis** shows how much a financial investor could pay at a target return. Often this is the “floor” of the valuation."
    ]],
    ['h', 'SOTP: the sum of the parts'],
    ['p', "If a company has several different businesses (a conglomerate), one multiple cannot value it. The sum-of-the-parts method values each segment on its own peers, then adds them up and subtracts corporate costs and net debt."],
    ['ex', 'SOTP', "Segment A: EBITDA 100 × 8x = 800.\nSegment B: EBITDA 50 × 12x = 600.\nCorporate costs, capitalised at −100.\nEV = 800 + 600 − 100 = 1,300. Net debt 400.\nEquity Value = 1,300 − 400 = 900."],
    ['p', "Often the sum of the parts turns out higher than the market capitalisation. This difference is called the **conglomerate discount**: the market underpays for the clumsiness of the conglomerate, and it is a reason to split the company up."],
    ['h', 'The football field: a summary of methods'],
    ['p', "The football field is a chart where each method has a horizontal bar showing its valuation range. You can see where the ranges overlap and where one method stands out."],
    ['tbl', ['Method', 'EV range, € m', 'Comment'], [
      ['52-week range', '1,450-1,850', 'For a public company: past prices'],
      ['Trading comps', '1,700-2,000', 'Without a control premium'],
      ['Precedents', '2,000-2,400', 'With premium and synergies'],
      ['DCF (sensitivity table)', '1,600-2,200', 'WACC 8-10%, g 1-3%'],
      ['LBO (IRR 20-25%)', '1,500-1,800', 'What a financial investor could pay']
    ]],
    ['p', "The conclusion from such a chart: fair value lies around €1,800-2,000 m, where most methods overlap, and an offer above 2,200 requires faith in synergies."],
    ['h', 'Typical questions when choosing peers'],
    ['ul', [
      "**Too few peers.** Widen the criteria: geography, size, adjacent industries.",
      "**Outliers.** Exclude companies with abnormal multiples (losses, one-off events).",
      "**Different fiscal years.** Bring them to the calendar year (calendarisation).",
      "**Different capital structures.** That is why EV multiples are better."
    ]],
    ['q', "How do you choose comparable companies?", "By industry and business model, size, growth rates, margin, geography and risk. The data is normalised (LTM, adjusted EBITDA), the multiples are calculated, and you look at the median and quartiles."],
    ['q', "Why do precedent transactions usually give a higher valuation than trading comps?", "Because the price in deals includes a control premium and expected synergies, while the market share price does not."],
    ['key', "Trading comps show the price of minority shares, precedents the price of control with a premium, SOTP suits conglomerates, DCF depends on assumptions. The football field gathers everything into one range of fair value."]
  ] };
