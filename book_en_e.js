'use strict';
// English version of the book (part E).
window.BOOK_EN = window.BOOK_EN || {};
BOOK_EN.norm = { title: 'LTM, NTM and normalising metrics', tag: 'Valuation',
  intro: "Multiples are honest only when we compare comparable numbers. Company reports come out at different times, contain one-off items and follow different calendars. Normalisation brings everything to a common denominator.",
  blocks: [
    ['h', 'Why normalisation is needed'],
    ['p', "Suppose we are valuing a company in October. The last annual report came out in March, and an interim quarterly report came out recently. Which figure should we use for the multiple? The annual one, which is already half a year old? Or the quarterly one, which shows only a slice of the year? We need a way to get “today's annual figure”."],
    ['h', 'LTM: the last twelve months'],
    ['p', "LTM (last twelve months) assembles a metric for the last 12 months from the latest annual report and interim data."],
    ['key', "LTM = last financial year + current YTD − prior-year YTD"],
    ['ex', 'Calculating LTM', "EBITDA for the last financial year is 400. Current YTD (9 months) is 120, the same period of the previous year was 100.\nLTM = 400 + 120 − 100 = 420.\nWe replaced the old 9 months of last year with the new 9 months and got a fresh annual figure."],
    ['h', 'NTM and forward multiples'],
    ['p', "The market values the future, so forecast figures are often used: NTM (the next 12 months) or analysts' annual forecasts (2027E). For fast-growing companies the forward multiple is lower than the historical one, because the denominator grows. So you cannot compare the LTM of one company with the NTM of another."],
    ['h', 'Calendarisation: bringing to a common year'],
    ['p', "Different companies' financial years end at different times: some in December, others in March or September. To compare them, the metrics are recalculated to a calendar year."],
    ['ex', 'Calendarisation', "A company's financial year ends in March. EBITDA for the year ending in March 2026 (FY2026) is 100, and for FY2027 it is 120.\nCalendar 2026 consists of 3 months of FY2026 (January-March) and 9 months of FY2027 (April-December).\nEBITDA for calendar 2026 = 0.25 × 100 + 0.75 × 120 = 115."],
    ['h', 'Adjusted EBITDA: removing the one-offs'],
    ['p', "One-off items distort the picture. To show recurring profitability, they are excluded."],
    ['tbl', ['Item', '€ m'], [
      ['Reported EBITDA', '90'],
      ['+ Restructuring costs (one-off)', '+12'],
      ['+ Legal costs of a closed lawsuit', '+8'],
      ['− Gain on the sale of a building (one-off)', '−5'],
      ['Adjusted EBITDA', '105']
    ]],
    ['p', "Note that normalisation works in both directions. One-off costs are added back, one-off income is subtracted."],
    ['h', 'Other kinds of normalisation'],
    ['ul', [
      "**Pro forma.** If a company recently bought another, its result appears in the accounts for only part of the year. It is recalculated as if the purchase had happened at the start of the period.",
      "**Run-rate.** If cost savings have already been launched, their annual effect is shown. This is the most controversial adjustment: you must not include promised but unrealised synergies without a label.",
      "**Mid-cycle metrics.** For cyclical companies (chemicals, metals) the average margin level over the cycle is taken, not the peak.",
      "**SBC (share-based compensation).** A debated question: whether to treat it as a real expense. The conservative answer: yes."
    ]],
    ['warn', "Dishonest normalisation. A company may call costs that recur every year “one-off”. Check every adjustment against history: if the “one-off” costs also occurred last year, they are not one-off."],
    ['q', "How do you calculate LTM?", "Take the last financial year, add the current year-to-date (YTD) period and subtract the same period of the previous year."],
    ['q', "Which items would you exclude when calculating Adjusted EBITDA?", "One-off and irregular ones: restructuring costs, legal fines, impairments, gains or losses on asset sales. Each adjustment must be justified and supported by history."],
    ['key', "LTM gives a fresh annual figure, calendarisation brings companies to a common year, and Adjusted EBITDA removes one-off items in both directions. Every adjustment requires justification."]
  ] };

BOOK_EN.goodwill = { title: 'Goodwill, deal accounting and deferred taxes', tag: 'Reporting',
  intro: "When one company buys another, a new line appears in the accounts: goodwill. Together with it come the revaluation of assets and deferred taxes. This topic often goes together with a merger model, so it is important to understand where these numbers come from.",
  blocks: [
    ['h', 'What goodwill is'],
    ['p', "A buyer rarely pays exactly what the target's assets are worth. They pay for the brand, customers, the team, future growth. This overpayment above the fair value of the net identifiable assets is called goodwill."],
    ['key', "Goodwill = purchase price − fair value (FV) of net identifiable assets"],
    ['h', 'How it is calculated: purchase accounting'],
    ['ol', [
      "Determine the purchase price (Equity Value, if shares are bought).",
      "Estimate the fair value of the target's assets and liabilities. Assets often are worth more than their book value, and they are **written up**.",
      "Account for the deferred tax liability (DTL) on the write-up.",
      "The difference between the price and the fair value of the net assets is goodwill."
    ]],
    ['ex', 'Calculating goodwill', "Purchase price 500. The target's book equity is 300. Assets are written up by 50. Tax 25%.\nDTL = 50 × 25% = 12.5.\nFair value of net assets = 300 + 50 − 12.5 = 337.5.\nGoodwill = 500 − 337.5 = 162.5."],
    ['p', "If there is no write-up, the calculation is simpler: at a price of 500 and a fair value of net assets of 350, goodwill is 150."],
    ['h', 'What happens to goodwill afterwards'],
    ['ul', [
      "**Goodwill is not amortised** under either IFRS or US GAAP.",
      "Instead it is **tested for impairment at least once a year**. If the business is worth less than the recorded amount, the difference is written off.",
      "An impairment is a **non-cash expense**: it reduces Net Income, but no cash leaves. So in the cash flow statement it is added back.",
      "Written-up tangible assets are depreciated, so after the deal depreciation (and costs) rise and profit falls."
    ]],
    ['h', 'Deferred taxes: DTL and DTA'],
    ['p', "Tax and accounting reporting calculate profit differently. Because of this, the tax in the accounts (book tax) is not equal to the tax actually paid (cash tax). The difference is deferred."],
    ['ul', [
      "**DTL (deferred tax liability):** the tax in the accounts is higher than the tax payable. A typical cause: tax depreciation runs faster than accounting depreciation. Example: book tax 30, tax payable 20, so DTL rose by 10. The company will pay this money later.",
      "**DTA (deferred tax asset):** the tax payable is higher than the tax in the accounts, or there are tax losses from previous years (NOLs) that will reduce taxes in the future. Example: a loss of 100 at a 25% rate gives a DTA of 25."
    ]],
    ['p', "In deals, a DTL arises when assets are written up: the book value has risen, but the tax base has stayed the same. That is why we subtracted DTL in the goodwill calculation."],
    ['h', 'Asset deal and stock deal: the tax effect'],
    ['p', "In a **stock deal** (buying shares) the tax base of the assets stays the same, so a write-up creates a DTL. In an **asset deal** (buying assets) the buyer gets a **tax step-up**: the base of the assets is raised to the purchase price, depreciation can be deducted for tax, and the buyer really saves cash. So an asset deal is better for the buyer tax-wise, but more complicated legally."],
    ['h', 'What to change in a merger model'],
    ['ul', [
      "Add goodwill and the asset write-up to the post-deal balance sheet.",
      "Add depreciation of the written-up assets to the income statement.",
      "Reduce the DTL as the write-up is depreciated.",
      "Eliminate the target's old equity and account for the buyer's new shares and debt."
    ]],
    ['q', "What happens if goodwill is impaired?", "It is a non-cash expense: Net Income falls by the amount of the impairment, in the cash flow statement it is added back, and on the balance sheet goodwill is reduced. The company's cash does not change."],
    ['q', "Where does a DTL come from when buying a company?", "When assets are written up, their book value becomes higher than the tax base. Future taxes will be higher than the accounts show, and this difference is recorded as a DTL."],
    ['key', "Goodwill is the overpayment above the fair value of net assets. It is not amortised but is tested for impairment. The write-up of assets creates a DTL, and in an asset deal the buyer gets a tax step-up."]
  ] };

BOOK_EN.ifrs = { title: 'IFRS and US GAAP, leases and IFRS 16', tag: 'Reporting',
  intro: "In Europe accounting follows IFRS, in the US it follows US GAAP. In an interview you are rarely asked to quote standards, but you need to know the difference on the key issues. Special attention goes to leases: after IFRS 16 was introduced, they changed companies' metrics significantly.",
  blocks: [
    ['h', 'The big picture'],
    ['p', "IFRS (international standards) is built on principles and allows more professional judgement. US GAAP is written in more detail and is stricter. For public companies in the EU, IFRS is mandatory in consolidated reporting. The difference is unlikely to change your conclusion about valuation, but it affects comparability."],
    ['h', 'Key differences'],
    ['tbl', ['Issue', 'IFRS', 'US GAAP'], [
      ['LIFO method for inventory', 'Prohibited', 'Permitted'],
      ['Development costs (R&D)', 'Capitalised if conditions are met', 'Usually expensed'],
      ['Upward revaluation of fixed assets', 'Permitted (revaluation model)', 'Not permitted'],
      ['Reversal of impairment', 'Permitted (except goodwill)', 'Prohibited'],
      ['Interest in the cash flow statement', 'May be in operating or financing section', 'Operating section'],
      ['Leases for the lessee', 'Almost all on the balance sheet', 'Operating leases stay in expenses']
    ]],
    ['h', 'What IFRS 16 changed'],
    ['p', "Before IFRS 16, operating leases did not appear on the balance sheet: payments simply went through expenses. Under IFRS 16 the lessee recognises on the balance sheet a **right-of-use asset** and a **lease liability** equal to the present value of the lease payments. The expense is replaced by two items: depreciation of the asset and interest on the liability."],
    ['ex', 'A five-year lease', "A payment of €20 m a year for 5 years, rate 5%.\nLease liability = 20 × 4.3295 = €86.6 m (annuity factor for 5% and 5 years).\nYear 1: interest 86.6 × 5% = 4.3; depreciation 86.6 / 5 = 17.3. Total expense 21.6, whereas before it was 20."],
    ['tbl', ['Metric', 'Before IFRS 16', 'After IFRS 16'], [
      ['Lease expense in EBITDA', '−20', '0 (the expense moved below)'],
      ['EBITDA', 'X', 'X + 20'],
      ['EBIT', 'X − 20', 'X − 17.3 (2.7 higher)'],
      ['Interest', '0', '4.3 (below EBIT)'],
      ['Debt on the balance sheet', 'does not include leases', '+ 86.6']
    ]],
    ['p', "The result: EBITDA rose by the full amount of the lease, debt rose by the present value of the payments. This is especially noticeable in retail, restaurants and airlines, where leases are large."],
    ['h', 'Consistency in multiples'],
    ['p', "If you calculate EV including lease debt, EBITDA must be **before** leases (as after IFRS 16). If EV excludes leases, EBITDA must be **after** deducting leases. You cannot mix the two."],
    ['ex', 'EV/EBITDA with leases', "EBITDA before IFRS 16 is 120, lease payments 20, so EBITDA after IFRS 16 is 140. EV without leases is 1,000.\nApproach without leases: 1,000 / 120 = 8.3x.\nApproach with leases: (1,000 + 86.6) / 140 = 7.8x.\nBoth approaches are correct if consistent. The mistake: taking EV without leases (1,000) and EBITDA after IFRS 16 (140), which gives 7.1x and understates the multiple."],
    ['h', 'Comparing IFRS and US GAAP companies'],
    ['p', "For an American company the operating lease stays in expenses (EBITDA is lower), for a European one under IFRS 16 the expense leaves EBITDA. To compare them, both are brought to the same form: usually EBITDA after deducting leases (EBITDAR minus rent) and EV without lease debt are used."],
    ['q', "How did IFRS 16 affect a lessee's EBITDA?", "EBITDA rose: the lease expense was replaced by depreciation and interest, which lie below EBITDA. At the same time an asset and a liability appeared on the balance sheet, and the company's debt increased."],
    ['q', "Which inventory valuation method is allowed under US GAAP but not under IFRS?", "LIFO (last in, first out)."],
    ['key', "IFRS and US GAAP differ in details, but the main point is that under IFRS 16 leases turn into debt and EBITDA rises. In multiples you must stay consistent: EV with leases and EBITDA before leases, or EV without leases and EBITDA after leases."]
  ] };

BOOK_EN.dilution = { title: 'Share dilution: options, RSUs and convertible bonds', tag: 'Valuation',
  intro: "The share price multiplied by the number of shares gives the market cap only if the number of shares is calculated correctly. Most companies have instruments that can turn into new shares. They must be taken into account: that is dilution.",
  blocks: [
    ['h', 'Basic and diluted shares'],
    ['p', "**Basic shares** are the shares that have been issued and are currently outstanding. **Diluted shares** add to them the shares that may appear when options are exercised, RSUs are granted or bonds are converted. For valuation you always use diluted."],
    ['h', 'Instruments that dilute'],
    ['ul', [
      "**Options.** The right to buy a share at a fixed price (strike). If the market price is above the strike, the option is “in the money” (ITM).",
      "**RSUs (restricted stock units).** A promise to grant shares to an employee. They are counted in full, they are almost ordinary shares.",
      "**Warrants.** Similar to options, issued by the company to investors.",
      "**Convertible bonds.** Debt that can be exchanged for shares at a set conversion price."
    ]],
    ['h', 'The Treasury Stock Method'],
    ['p', "In-the-money options create new shares, but the holder pays the strike to the company. It is assumed that the company uses the cash received to buy back some shares from the market. So the net dilution is smaller."],
    ['key', "Net new shares = N options × (1 − strike / share price), if the price is above the strike"],
    ['ex', 'TSM', "10 m options with a strike of €20, share price €40.\nThe holders pay 10 × 20 = €200 m, with which the company buys back 200 / 40 = 5 m shares.\nNet increase = 10 − 5 = 5 m shares (by the formula: 10 × (1 − 20/40) = 5).\nIf the share price is €15, the option is out of the money: exercising is not worthwhile, dilution is 0."],
    ['h', 'Convertible bonds: the if-converted method'],
    ['p', "Convertible bonds are treated as shares if the share price is above the conversion price, and as debt if it is below. If we count the bonds as shares, we add the corresponding shares and **remove the bonds from debt**, so as not to count the same thing twice."],
    ['ex', 'A full example', "100 m basic shares, price €30. 10 m options with a strike of €20. Convertible bonds with a face value of €200 m, conversion price €25 (the share price is higher, so we convert).\nNew shares from options: 10 × (1 − 20/30) = 3.33 m.\nNew shares from bonds: 200 / 25 = 8 m.\nDiluted shares = 100 + 3.33 + 8 = 111.33 m.\nEquity Value = 111.33 × 30 = €3,340 m.\nOther debt 500, cash 150, the bonds are already counted as shares.\nEV = 3,340 + 500 − 150 = €3,690 m."],
    ['h', 'Circularity in M&A'],
    ['p', "When buying a company, the offer price is above the market, and the higher the price, the more options are in the money and the greater the dilution. So the number of shares depends on the price, and the price on the number of shares. In models this is solved by iteration or by a formula with a circular reference."],
    ['h', 'Dilution and the share price forecast'],
    ['p', "When you have got an Equity Value from a DCF, the share price is calculated by dividing by diluted shares, but the number of diluted shares depends on the price itself. The solution: iterate until the price and the number of shares agree."],
    ['warn', "Using basic shares for the market cap or including out-of-the-money options. Another common mistake: counting convertible bonds both as shares and as debt."],
    ['q', "How is the diluted share count calculated?", "To the basic number of shares you add the net dilution from options under the treasury stock method (in-the-money options only), RSUs, and shares from convertible bonds if they are in the money."],
    ['key', "For valuation you always need diluted shares. In-the-money options are counted by TSM, convertibles by if-converted, and the number of shares and the price are tied to each other."]
  ] };

BOOK_EN.debt = { title: 'Debt and capital structure', tag: 'Valuation',
  intro: "A company finances its assets with debt and equity. The balance between them is called the capital structure. It determines risk, the cost of capital and the room for deals like an LBO. Let us look at the types of debt, their priority rules and credit metrics.",
  blocks: [
    ['h', 'The ladder of claims: who gets paid first'],
    ['p', "Lenders get paid before shareholders, and among lenders there is a hierarchy. The higher you stand in the queue, the lower the risk and the lower the rate."],
    ['ol', [
      "**Revolver (revolving credit facility) and Term Loan A/B.** Bank loans, usually secured by collateral. First in line.",
      "**Senior secured notes.** Bonds with collateral.",
      "**Senior unsecured notes.** Bonds without collateral.",
      "**Subordinated / mezzanine.** Subordinated debt, often with equity-participation features.",
      "**Preferred shares.** Payments are fixed, but come after all lenders.",
      "**Common equity.** Last in line and the riskiest, but it gets all the residual growth."
    ]],
    ['h', 'What distinguishes one debt from another'],
    ['ul', [
      "**Security.** Secured debt is protected by a pledge of assets, unsecured is not.",
      "**Rate.** Floating (Euribor plus a margin) or fixed.",
      "**Repayment.** Amortizing (gradually) or bullet (one payment at the end).",
      "**Rating.** Investment grade (BBB-/Baa3 and above) and high yield (below). The lower the rating, the higher the spread.",
      "**PIK (payment in kind).** Interest is not paid in cash but added to the debt."
    ]],
    ['h', 'Covenants'],
    ['p', "Covenants are conditions in a loan agreement that protect the lender. **Maintenance covenants** are tested regularly: for example, Net Debt/EBITDA no higher than 4.0x or interest cover no lower than 3.0x. A breach gives the lender the right to demand early repayment. **Incurrence covenants** are tested only on certain actions, for example when raising new debt or paying dividends."],
    ['h', 'Credit metrics'],
    ['ul', [
      "**Net Debt / EBITDA.** Debt 500, Cash 100, EBITDA 100 give (500 − 100) / 100 = 4.0x. Shows how many years it would theoretically take the company to repay its debt.",
      "**Interest Coverage = EBITDA / interest.** EBITDA of 200 with interest of 40 gives 5.0x.",
      "**Debt / Capital = Debt / (Debt + Equity).** Debt of 300 and equity of 700 give 30%."
    ]],
    ['h', 'What debt gives and where the risk lies'],
    ['p', "The pluses of debt: it is cheaper than equity, gives a tax shield and does not dilute shareholders. The minuses: fixed payments, covenants, the risk of bankruptcy. The optimal structure is a balance between the tax benefit and the costs of financial distress."],
    ['h', 'What happens in bankruptcy'],
    ['p', "The absolute priority rule applies: each class gets paid only after the class above it has been paid in full."],
    ['ex', 'Distribution in bankruptcy', "The value of the company in liquidation is 600. Claims: senior secured 400, senior unsecured 300, shareholders.\nSecured creditors get 400 (100%).\n200 remains for the unsecured, their claim is 300, so the recovery is 200 / 300 = 66.7%.\nShareholders get 0."],
    ['h', 'Capital structure in deals'],
    ['p', "In an LBO the investor buys a company, financing a significant part of the price with debt (often 4-6x EBITDA). The structure is assembled from tranches of different seniority and cost, fitted to the company's cash flows. The more stable the flows, the more debt can be raised."],
    ['q', "Why would a company issue debt instead of equity?", "Debt is cheaper than equity (tax shield, lower risk for the investor) and does not dilute shareholders. The downsides: fixed payments, covenants, a higher risk of bankruptcy."],
    ['q', "What do shareholders get in bankruptcy?", "Only what is left after all creditors' claims have been paid in full. In most cases nothing."],
    ['key', "Debt is cheaper than equity, but creates rigid obligations. The priority of claims determines cost and risk, covenants protect lenders, and the Net Debt/EBITDA and interest coverage metrics show how safe the burden is."]
  ] };
