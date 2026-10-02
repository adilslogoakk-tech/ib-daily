'use strict';
// English version of the book (part A). Same block format as book1-3.js.
window.BOOK_EN = window.BOOK_EN || {};
BOOK_EN.ev = { title: 'Enterprise Value and Equity Value: the price of a business and the price of its shares', tag: 'Valuation',
  intro: "Almost every conversation about valuation in an investment bank starts with two numbers: Equity Value and Enterprise Value. If you clearly understand how they differ and how to move from one to the other, you already understand half of the interview material.",
  blocks: [
    ['h', 'Why we need two numbers'],
    ['p', "When someone says “the company is worth 2 billion”, it is unclear what they mean. The price of all its shares? Or the price of the whole business together with its debts? Those are different amounts. That is why finance uses two concepts."],
    ['p', "**Equity Value** answers the question: how much are all the shares of the company worth. For a public company this is the market capitalisation, that is, the price of one share multiplied by the number of shares."],
    ['p', "**Enterprise Value** (EV) answers a different question: how much is the business itself worth to everyone who has put money into it, both shareholders and lenders. It is the price you would have to pay to buy the whole company and get its operations."],
    ['h', 'Equity Value: starting from the share price'],
    ['p', "The formula is simple: share price × number of shares. But the number of shares must be **diluted**, that is, include every instrument that can turn into shares: employee options, convertible bonds, RSUs. More on this in the chapter on dilution."],
    ['ex', 'Mandate Retail', "The retail chain Mandate Retail has 50 million shares, and one share costs 40 euros.\nEquity Value = 50 m × €40 = €2,000 m.\nThe company has loans and bonds of €700 m and cash in its accounts of €200 m."],
    ['h', 'The bridge from Equity Value to EV'],
    ['p', "To get the value of the business, add to the price of the shares everything the company owes to other investors, and subtract the cash it holds."],
    ['ul', [
      "**+ Debt.** Bank loans, bonds. Lenders have also invested in the business, and their claims must be counted. Under IFRS 16, leases (lease liabilities) often end up here as well.",
      "**+ Preferred shares.** They rank above ordinary shares in payouts and behave like debt.",
      "**+ Minority Interest.** If the company consolidates a subsidiary that it does not fully own, its EBITDA includes 100% of the subsidiary's result. So EV must also reflect 100%, that is, add the share of the outside shareholders.",
      "**− Cash.** Cash and cash equivalents are subtracted. More on this below: it is the most common interview topic."
    ]],
    ['key', "EV = Equity Value + Debt + Preferred + Minority Interest − Cash"],
    ['ex', 'Continued', "For Mandate Retail:\nEV = 2,000 + 700 − 200 = €2,500 m.\nNet Debt = Debt − Cash = 700 − 200 = €500 m. That is why people often write: EV = Equity Value + Net Debt."],
    ['h', 'Why we subtract cash'],
    ['p', "Imagine you buy a house for €500,000, and there is €100,000 in the house safe that comes to you with the house. The real price of the house itself for you is €400,000. It is the same with a company: the buyer gets the cash together with the business and can immediately use it to repay part of the debt. So the value of the operating business is lower by the amount of cash."],
    ['p', "The logic is mirrored for debt. If the buyer takes the company together with its debt, they assume the obligations, and the “real price” of the business rises by the amount of debt."],
    ['q', "Why do we subtract cash when calculating EV from Equity Value?", "Because cash is not part of the operating business: the buyer gets it together with the company and can immediately use it to repay debt. EV should show the price of the business itself, not of the business plus the money in the safe."],
    ['h', 'Why we need EV'],
    ['p', "The main reason: EV lets you compare companies with different capital structures. Take two identical businesses. Both earn an operating profit (EBIT) of €70 m, but one is financed only by equity and the other partly by debt."],
    ['tbl', ['', 'Company A (no debt)', 'Company B (with debt)'], [
      ['Equity Value', '1,000', '600'],
      ['Net Debt', '0', '400'],
      ['EV', '1,000', '1,000'],
      ['EBIT', '70', '70'],
      ['Interest (5% of debt)', '0', '20'],
      ['Net Income (30% tax)', '49', '35'],
      ['P/E', '20.4x', '17.1x'],
      ['EV/EBIT', '14.3x', '14.3x']
    ]],
    ['p', "The P/E of the companies is different even though the business is the same: debt affects it. But EV/EBIT is the same, because both EV and EBIT relate to the whole business regardless of how it is financed. That is the whole point of EV."],
    ['h', 'The consistency rule'],
    ['p', "The numerator and denominator of a multiple must relate to the same group of investors."],
    ['ul', [
      "EV relates to all investors, so it is divided by metrics **before** interest: Revenue, EBITDA, EBIT.",
      "Equity Value relates only to shareholders, so it is divided by metrics **after** interest: Net Income, Book Value."
    ]],
    ['warn', "You cannot divide Equity Value by EBITDA or EV by Net Income: the numerator and denominator relate to different groups of investors, and the multiple loses its meaning."],
    ['h', 'The way back: from EV to the share price'],
    ['p', "After a DCF or a comparison with peers you end up with an EV. To find the share price, go over the bridge in the opposite direction: subtract debt and preferred shares from EV, add cash and divide by the number of diluted shares."],
    ['ex', 'Share price from EV', "EV from the DCF = €2,000 m. Debt 700, Cash 200, Preferred 100.\nEquity Value = 2,000 − 700 + 200 − 100 = €1,400 m.\nThe number of diluted shares is 100 m, so the share price = 1,400 / 100 = €14 per share."],
    ['h', 'Subtleties they ask about'],
    ['ul', [
      "**Leases.** Under IFRS 16 lease liabilities are shown as debt. If you included them in EV, EBITDA must be before lease expenses. If you did not, EBITDA is taken after leases. You cannot mix the two.",
      "**Pension obligations.** Underfunded pension plans are often also treated as debt.",
      "**Associates** (20-50% stake, not consolidated). Their result is not part of EBITDA, so their value is subtracted from EV so that the multiple is not distorted.",
      "**Negative EV.** It happens when there is more cash than the market capitalisation and debt together. The market hardly values the business, and the cash is worth more than the whole company."
    ]],
    ['q', "Can EV be lower than Equity Value?", "Yes, if the company has net cash (cash exceeds debt), that is, Net Debt is negative. Then EV = Equity Value + Net Debt is lower than Equity Value. This happens with technology companies that hold large cash reserves."],
    ['key', "Equity Value answers “how much are the shares worth”, EV answers “how much is the business worth”. Between them is a bridge made of debt, preferred shares, minority interest and cash. Multiples on EV are divided by profit before interest, multiples on Equity Value by profit after interest."]
  ] };

BOOK_EN.profit = { title: 'Three profits: EBITDA, EBIT and Net Income', tag: 'Reporting',
  intro: "An income statement does not really contain one profit but a whole ladder. Each step answers its own question, and a professional always knows exactly which profit is being discussed.",
  blocks: [
    ['h', 'The ladder from revenue to net profit'],
    ['p', "Take a simplified income statement of a company. Step by step you can see how different kinds of profit come out of revenue."],
    ['tbl', ['Line item', '€ m', 'What it shows'], [
      ['Revenue', '1,000', 'Everything earned from sales'],
      ['− COGS (cost of goods sold)', '−550', 'Direct production costs'],
      ['= Gross Profit', '450', 'Margin at product level (45%)'],
      ['− SG&A (selling and general)', '−200', 'Sales and management costs'],
      ['= EBITDA', '250', 'Operating profit before wear and tear (25%)'],
      ['− D&A (depreciation and amortisation)', '−50', 'Non-cash expense for asset wear'],
      ['= EBIT', '200', 'Operating profit (20%)'],
      ['− Interest on debt', '−40', 'The price of borrowed capital'],
      ['= EBT (profit before tax)', '160', ''],
      ['− Tax (25%)', '−40', ''],
      ['= Net Income', '120', 'Profit for shareholders (12%)']
    ]],
    ['h', 'EBITDA: profit before interest, taxes, depreciation and amortisation'],
    ['p', "EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) shows how much the business earns from its core activity before the effect of capital structure, taxes and wear and tear. That is exactly why it is loved in M&A: two businesses can be compared without paying attention to how they are financed and how they calculate depreciation."],
    ['p', "EBITDA has serious limitations. It is **not equal to cash flow**: CapEx (investment in equipment), the change in working capital and taxes have not been deducted from it. A company with heavy investment can show a beautiful EBITDA and still burn cash."],
    ['h', 'EBIT: operating profit'],
    ['p', "If you subtract depreciation and amortisation from EBITDA, you get EBIT. Depreciation is a way of spreading the cost of equipment over the years of its service. It is non-cash (the money was spent earlier, at purchase), but it reflects real wear. That is why EBIT shows the economics of a capital-intensive business better: a factory, roads, networks."],
    ['p', "EBIT does not depend on debt: interest is deducted only after it. So the EV/EBIT multiple is also consistent in logic with EV."],
    ['h', 'Net Income: what is left for shareholders'],
    ['p', "After deducting interest and taxes you are left with net profit. It is divided by the number of shares to get EPS (earnings per share), and the share price is divided by EPS to get P/E."],
    ['h', 'Margin: profit as a share of revenue'],
    ['p', "Margin shows how much profit falls on every 100 euros of revenue. In the example: gross margin 45%, EBITDA margin 25%, EBIT margin 20%, net margin 12%. By comparing margins between companies and years you can see whose business is more efficient."],
    ['h', 'Adjusted EBITDA: without one-off items'],
    ['p', "Real reporting contains one-off events: restructuring costs, legal fines, asset write-offs. They distort the picture of recurring profitability, so analysts recalculate EBITDA without them. This is Adjusted EBITDA. Every adjustment must be justified: dishonest companies “tune” EBITDA by labelling regular costs as “one-off”."],
    ['h', 'Return on capital: ROIC and ROE'],
    ['ul', [
      "**ROE** = Net Income / Equity. How much profit per euro of shareholder capital. It depends on debt: more debt, higher ROE.",
      "**ROIC** = NOPAT / Invested Capital, where NOPAT = EBIT × (1 − tax). How much profit per euro of all invested capital, regardless of the financing structure. A good business earns an ROIC above its cost of capital (WACC)."
    ]],
    ['warn', "You must not call EBITDA “cash flow”. Between them lie taxes, CapEx and the change in working capital."],
    ['q', "Why is EBITDA considered an imperfect measure?", "Because it ignores CapEx, taxes and changes in working capital, that is, real cash costs. For capital-intensive businesses EBITDA greatly overstates the real cash potential. That is why it is supplemented by EBIT and free cash flow."],
    ['key', "Revenue → Gross Profit → EBITDA → EBIT → EBT → Net Income. EBITDA and EBIT do not depend on debt, so EV multiples are based on them. Net Income takes interest into account, so it is needed for P/E."]
  ] };
