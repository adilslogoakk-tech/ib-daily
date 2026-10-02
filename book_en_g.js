'use strict';
// English version of the book (part G).
window.BOOK_EN = window.BOOK_EN || {};
BOOK_EN.accdil = { title: 'Accretion and dilution: what a deal does to EPS', tag: 'Deals',
  intro: "When announcing a deal, the buyer always answers the question: will earnings per share rise or fall. The market reacts to exactly that. The accretion/dilution model shows the effect of a deal on EPS depending on price, method of payment and synergies.",
  blocks: [
    ['h', 'The idea'],
    ['p', "A deal is **accretive** if the EPS of the combined company is higher than the buyer's EPS before the deal. If lower, the deal is **dilutive**. This is not the same as creating value, but for the market and the board of directors it is the key metric."],
    ['key', "New EPS = (buyer's NI + target's NI + after-tax synergies − after-tax financing costs − write-up depreciation) / (old shares + new shares)"],
    ['h', 'Example: shares or cash'],
    ['p', "The buyer earns €100 m with 50 m shares, EPS = €2.00, share price €40 (P/E = 20). The target earns €30 m, the purchase price is €300 m (the target's P/E = 10)."],
    ['ul', [
      "**Payment in shares.** We need to issue 300 / 40 = 7.5 m shares. EPS = (100 + 30) / (50 + 7.5) = 130 / 57.5 = €2.26. Growth of 13%: the deal is accretive.",
      "**Payment in cash from debt at 6%, tax 25%.** Interest after tax = 300 × 6% × 0.75 = 13.5. EPS = (100 + 30 − 13.5) / 50 = €2.33. Growth of 16.5%: also accretive, and more so."
    ]],
    ['p', "Both options are accretive because the buyer pays for the target at a P/E of 10 (a yield of 10%), while its own shares trade at a P/E of 20 (a yield of 5%), and debt costs 4.5% after tax. The target's cheap earnings outweigh the price of financing."],
    ['h', 'The effect of synergies'],
    ['p', "Suppose synergies of €20 m before tax are expected, that is, 20 × 0.75 = 15 after tax. EPS with payment in shares: (130 + 15) / 57.5 = 2.52. With payment in cash: (130 + 15 − 13.5) / 50 = 2.63."],
    ['h', 'The effect of asset write-ups'],
    ['p', "If the target's assets are written up by 50 and depreciated over 10 years, this adds €5 m of costs, 3.75 after tax. EPS with payment in shares falls to (130 − 3.75) / 57.5 = 2.20. Goodwill is not amortised, so it does not affect EPS."],
    ['h', 'Quick rules'],
    ['ul', [
      "**Payment in shares:** the deal is accretive if the buyer's P/E is higher than the P/E at which the target is bought. The buyer pays with an “expensive” currency for “cheap” earnings.",
      "**Payment in debt:** the deal is accretive if the target's “earnings yield” (1 / P/E) is higher than the after-tax cost of debt.",
      "**Payment in cash from the balance sheet:** compare the target's yield with the forgone return on the cash."
    ]],
    ['p', "An example of the rule: a buyer with a P/E of 25 buys a target with a P/E of 10 for shares. It gets more profit for every euro of capital issued, so the deal is accretive."],
    ['h', 'The break-even point for synergies'],
    ['p', "If a deal is dilutive, you calculate how many synergies are needed for EPS to stay the same. To do that, you find the difference between EPS before the deal × the new number of shares and the combined company's profit without synergies. This difference after tax is the synergies needed."],
    ['h', 'Accretion is not the same as value creation'],
    ['p', "A deal can be accretive and still destroy value if the buyer overpaid or bought a business with a low return on capital. For example, cheap debt makes almost any purchase accretive, but risky. So you also look at the target's ROIC, the price and the strategic logic."],
    ['warn', "Forgetting tax on synergies and interest, or not accounting for the new shares. Another mistake: assuming that accretive is always good."],
    ['q', "A buyer with a P/E of 25 buys a target with a P/E of 10 for shares. Accretive or dilutive?", "Accretive: the buyer issues expensive shares and gets cheap earnings for them, so EPS rises."],
    ['q', "Walk me through a merger model.", "We take the earnings of the buyer and the target, add synergies and financing costs after tax, account for the write-up depreciation and the new shares. We divide by the pro forma number of shares and compare with the buyer's original EPS."],
    ['key', "New EPS is assembled from the earnings of the two companies, synergies, financing costs and the number of shares. With payment in shares the key is the buyer's P/E against the target's P/E, with payment in debt the target's yield against the cost of debt."]
  ] };

BOOK_EN.lbo = { title: 'LBO: a leveraged buyout', tag: 'Deals',
  intro: "A leveraged buyout is the purchase of a company mostly with borrowed money. A financial investor (the sponsor) puts in a small part of the price, the rest is provided by debt, which is then repaid from the company's own cash flow. After a few years the company is sold.",
  blocks: [
    ['h', 'How an LBO works'],
    ['ol', [
      "The sponsor buys the company for its EV, financing part with debt and part with its own capital (equity).",
      "Over 3-7 years the company repays the debt from free cash flow.",
      "The sponsor sells the company (exit) and receives what is left after the debt is repaid."
    ]],
    ['p', "The idea is that debt amplifies returns. If the business grows and repays debt, the share of equity in the price grows quickly, while little was invested."],
    ['h', 'A mini-example (paper LBO)'],
    ['p', "The sponsor buys a company with EBITDA of €100 m for 9x EBITDA and finances 5x EBITDA with debt."],
    ['tbl', ['Entry', '€ m'], [
      ['EBITDA', '100'],
      ['EV at 9x', '900'],
      ['Debt (5x EBITDA)', '500'],
      ['Sponsor equity', '400']
    ]],
    ['p', "Free cash flow for debt repayment over 5 years: 60, 70, 80, 85 and 90, a total of 385. Debt at exit: 500 − 385 = 115. EBITDA in year five is 140, the exit multiple is the same 9x."],
    ['tbl', ['Exit (year 5)', '€ m'], [
      ['EBITDA', '140'],
      ['EV at 9x', '1,260'],
      ['Debt', '115'],
      ['Equity at exit', '1,145']
    ]],
    ['key', "MOIC = 1,145 / 400 = 2.86x. IRR = 2.86^(1/5) − 1 ≈ 23.4%."],
    ['h', 'Where the return comes from'],
    ['p', "The increase in equity value is 1,145 − 400 = 745. Let us break it down by source:"],
    ['ul', [
      "**EBITDA growth.** (140 − 100) × 9 = 360.",
      "**Multiple expansion.** In the example 0 (entry and exit both at 9x).",
      "**Debt paydown (deleveraging).** 385 of the company's cash went to reduce debt."
    ]],
    ['p', "The sum 360 + 0 + 385 = 745, as it should be."],
    ['h', 'Sensitivity to the exit price'],
    ['tbl', ['Exit multiple', 'Equity at exit', 'MOIC', 'IRR'], [
      ['8x', '1,005', '2.51x', '20.2%'],
      ['9x', '1,145', '2.86x', '23.4%'],
      ['10x', '1,285', '3.21x', '26.3%']
    ]],
    ['p', "A quick cheat sheet for a five-year period: a MOIC of 2.0x is about 15% a year, 2.5x about 20%, 3.0x about 25%."],
    ['h', 'What makes a company a good candidate'],
    ['ul', [
      "A stable and predictable cash flow, to service the debt.",
      "Low capital expenditure.",
      "Strong management and a clear improvement plan (margin, costs).",
      "A reasonable entry price and clear exit routes.",
      "Room to improve the business: operational efficiency, buying smaller companies (buy-and-build)."
    ]],
    ['h', 'Exit routes and additional instruments'],
    ['ul', [
      "**A sale to a strategic buyer** (trade sale).",
      "**A sale to another fund** (secondary buyout).",
      "**IPO.**",
      "**Dividend recap:** the company takes on new debt and pays a dividend to the sponsor, returning part of the money before the exit."
    ]],
    ['h', 'Leverage: a double-edged sword'],
    ['p', "More debt means less capital invested and a higher return when things go well. But debt payments do not depend on results, and if the business worsens the company may breach covenants or go bankrupt. So the structure is chosen carefully."],
    ['warn', "Forgetting to subtract debt at exit when calculating equity, or mixing up MOIC and IRR. IRR = MOIC^(1/n) − 1, not (MOIC − 1) / n."],
    ['q', "Walk me through an LBO.", "We determine the entry price (EBITDA × multiple) and the structure: debt and sponsor equity. We forecast free cash flow and direct it to repaying debt. At exit we calculate EV through EBITDA and the multiple, subtract debt and get equity. We calculate the return through MOIC and IRR."],
    ['q', "What makes a company a good candidate for an LBO?", "Stable flows, low CapEx, strong management, potential to improve the margin, a reasonable entry price and a clear exit."],
    ['key', "An LBO earns from EBITDA growth, multiple expansion and debt paydown. Debt reduces the capital invested and raises IRR, but also risk. For a quick estimate use a five-year paper LBO."]
  ] };
