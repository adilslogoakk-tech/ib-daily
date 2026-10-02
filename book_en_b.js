'use strict';
// English version of the book (part B).
window.BOOK_EN = window.BOOK_EN || {};
BOOK_EN.statements = { title: 'The three statements and how they connect', tag: 'Reporting',
  intro: "A company's financial reporting consists of three documents: the income statement, the balance sheet and the cash flow statement. Being able to link them in your head is a basic skill that is tested in almost every interview.",
  blocks: [
    ['h', 'What each statement shows'],
    ['ul', [
      "**Income Statement.** The result for a period: revenue, costs, profit. Answers the question “how much did we earn”.",
      "**Balance Sheet.** A snapshot at a given date: what the company has (assets), what it owes (liabilities) and what is left for shareholders (equity). The identity always holds: Assets = Liabilities + Equity.",
      "**Cash Flow Statement.** Where money came from and where it went during the period. Answers the question “where did the money go”."
    ]],
    ['h', 'What the balance sheet consists of'],
    ['ul', [
      "**Current assets:** Cash, Accounts Receivable (money customers owe), Inventory.",
      "**Long-term assets:** PP&E (buildings, equipment), intangible assets, Goodwill.",
      "**Liabilities:** Accounts Payable (money owed to suppliers), accrued expenses, Debt, Deferred Revenue.",
      "**Equity:** share capital, additional paid-in capital (APIC), Retained Earnings."
    ]],
    ['h', 'How the statements are linked'],
    ['ol', [
      "**Net Income** from the income statement goes to the top of the cash flow statement and increases Retained Earnings on the balance sheet.",
      "**Depreciation** reduces Net Income, but is added back in the cash flow statement (it is non-cash). On the balance sheet it reduces PP&E.",
      "**Changes in working capital** (receivables, inventory, payables) go into the cash flow statement and change the corresponding balance sheet items.",
      "**CapEx** increases PP&E on the balance sheet and reduces cash in the cash flow statement (investing section).",
      "**Debt and dividends** change Debt and Retained Earnings on the balance sheet and appear in the financing section of the cash flow statement.",
      "**The cash result** from the cash flow statement (Cash at the end of the period) goes into the Cash line of the balance sheet. That is why the balance sheet balances."
    ]],
    ['h', 'The three sections of the cash flow statement'],
    ['ul', [
      "**CFO (operating):** Net Income + non-cash expenses (D&A, SBC) ± change in working capital.",
      "**CFI (investing):** CapEx, purchases and sales of businesses and assets.",
      "**CFF (financing):** issuing and repaying debt, issuing shares, dividends, share buybacks."
    ]],
    ['ex', 'A mini-model for one year', "Net Income 120, depreciation 50, CapEx 80, working capital rose by 10 (cash tied up), debt repaid 20, dividends paid 30.\nCFO = 120 + 50 − 10 = 160.\nCFI = −80.\nCFF = −20 − 30 = −50.\nChange in cash = 160 − 80 − 50 = +30. These 30 are added to Cash on the balance sheet."],
    ['h', 'A classic question: what if depreciation rises by 10'],
    ['p', "Suppose the tax rate is 25%. Let us trace the effect through all three statements."],
    ['ul', [
      "**Income statement:** EBIT falls by 10, tax falls by 2.5, Net Income falls by 7.5.",
      "**Cash flow statement:** Net Income is lower by 7.5, but depreciation is added back +10. Result: cash rose by 2.5. This is the tax saving.",
      "**Balance sheet:** assets changed by −10 (PP&E) + 2.5 (cash) = −7.5. Equity changed by −7.5 (Retained Earnings). The balance sheet balances."
    ]],
    ['q', "How can a company with positive net profit go bankrupt?", "Net Income is not cash. Growth in receivables and inventory, large capital expenditure or debt repayment can eat all the cash while profit on paper is positive. Bankruptcy comes from a lack of cash, not of profit."],
    ['warn', "Dividends are not an expense and do not appear in the income statement. They reduce Retained Earnings directly on the balance sheet and show up in the financing section of the cash flow statement."],
    ['key', "Net Income links all three statements. The balance sheet balances because the final cash from the cash flow statement goes into assets, and every change is recorded on two sides."]
  ] };

BOOK_EN.fcf = { title: 'Free cash flow and working capital', tag: 'Valuation',
  intro: "Profit can be painted, cash cannot. That is why a DCF is built not on profit but on free cash flow (FCF): the money the business can actually pay out to investors. In this chapter we look at how it is calculated and why it differs from profit.",
  blocks: [
    ['h', 'What FCF is'],
    ['p', "Free Cash Flow is the money left with the company after all operating costs, taxes and the investment needed to maintain and grow the business. This is exactly what can be directed to lenders and shareholders."],
    ['p', "There are two kinds of flow. **Unlevered FCF** (UFCF) is calculated before debt payments and is available to all investors. It is used in a DCF. **Levered FCF** (LFCF) is calculated after interest and mandatory debt payments and belongs to shareholders."],
    ['h', 'The Unlevered FCF formula'],
    ['key', "UFCF = EBIT × (1 − tax) + D&A − CapEx − ΔNWC"],
    ['ul', [
      "**EBIT × (1 − tax)** is NOPAT, operating profit after tax but before interest.",
      "**+ D&A:** depreciation was deducted from profit, but no cash was spent on it. We add it back.",
      "**− CapEx:** cash spent on equipment and buildings. In profit it only shows up gradually through depreciation, while in cash flow it shows up at once.",
      "**− ΔNWC:** an increase in working capital freezes cash in receivables and inventory."
    ]],
    ['ex', 'Calculating UFCF', "EBIT = 200, tax 25%, D&A = 50, CapEx = 80, working capital rose by 10.\nNOPAT = 200 × 0.75 = 150.\nUFCF = 150 + 50 − 80 − 10 = 110.\nThe company's EBITDA would be 250: it falls well short of real cash flow."],
    ['h', 'Levered FCF: after debt'],
    ['p', "To get the flow for shareholders, subtract after-tax interest from UFCF and add net new borrowing. Continuing the example: interest 40, tax 25%. Interest after tax is 40 × 0.75 = 30. If no new debt was raised, LFCF = 110 − 30 = 80."],
    ['h', 'Working capital (NWC)'],
    ['p', "NWC is operating current assets minus operating current liabilities. Cash and debt are not included."],
    ['ul', [
      "**Receivables (AR).** Customers bought but have not yet paid. Growth in receivables freezes cash.",
      "**Inventory.** Goods in the warehouse are money already spent but not yet returned.",
      "**Payables (AP).** We received the goods but have not yet paid the supplier. This is a free loan: growth in payables releases cash."
    ]],
    ['p', "The rule for calculation: an **increase** in assets within NWC reduces cash flow, an **increase** in liabilities raises it. The speed of turnover is measured in days. For example, DSO (Days Sales Outstanding) = receivables / revenue × 365. If revenue is 3,650 and receivables are 300, DSO = 30 days: customers pay on average after a month."],
    ['h', 'CapEx: maintenance and growth'],
    ['p', "Part of the investment is needed only to stop the business from deteriorating (replacing equipment), part is for growth (new factories). If you forecast a sustainable flow in the terminal stage of a DCF, CapEx must be at least as large as depreciation: otherwise you are assuming the company lives forever without renewing its assets."],
    ['h', 'Employee stock options (SBC)'],
    ['p', "Some companies pay employees in shares. The expense is recognised in profit, but no cash is spent, and in the cash flow statement it is added back. Conservative analysts treat SBC as a real expense (it dilutes shareholders) and do not add it back in FCF."],
    ['warn', "Forgetting to subtract the growth in working capital or mixing up its sign. Growth in receivables and inventory always reduces FCF, growth in payables increases it."],
    ['q', "How does FCF differ from Net Income?", "Net Income includes non-cash items (depreciation) and ignores CapEx and the change in working capital. FCF, on the contrary, shows real cash: it adds back depreciation and subtracts investment and growth in working capital. That is why for a growing company FCF is usually lower than profit."],
    ['key', "FCF is the money that can be given to investors. UFCF, before debt, is used in a DCF, LFCF, after debt, belongs to shareholders. It differs from profit by depreciation, CapEx and working capital."]
  ] };

BOOK_EN.tvm = { title: 'Money over time: PV, NPV, IRR', tag: 'Basics',
  intro: "A euro today is worth more than a euro tomorrow: you can invest it and earn. Almost all of valuation rests on this simple idea. In this chapter we look at present value, NPV and IRR.",
  blocks: [
    ['h', 'Present and future value'],
    ['p', "If you deposit €100 at 10% a year, you will have €110 after a year and €121 after two. This is how compound interest works: interest is earned on interest too."],
    ['key', "FV = PV × (1 + r)^n   ⇔   PV = FV / (1 + r)^n"],
    ['p', "PV (present value) shows how much a future sum is worth today. The process of calculating it is called discounting, and the rate r is the discount rate. The €121 we will receive in 2 years at a 10% rate is worth 121 / 1.21 = €100 today."],
    ['p', "The higher the rate and the longer the term, the lower today's value. That is exactly why rising rates reduce company valuations, especially of those whose main cash lies far in the future."],
    ['h', 'NPV: is the project worth its money'],
    ['p', "NPV (net present value) is the sum of all future cash flows brought back to today, minus the initial investment. An NPV above zero means the project creates value above the required return."],
    ['ex', 'An investment decision', "Invest €1,000 today. We receive €400 in a year, €500 in two years and €600 in three. The rate is 10%.\nPV = 400/1.10 + 500/1.21 + 600/1.331 = 363.6 + 413.2 + 450.8 = 1,227.6.\nNPV = 1,227.6 − 1,000 = +€227.6. The project is worth doing."],
    ['h', 'IRR: the return of a project'],
    ['p', "IRR (internal rate of return) is the rate at which the NPV of the project equals zero. In other words, the average annual return on the investment. For our example the IRR is about 21.6%: at that rate the sum of discounted flows is exactly €1,000. A project is accepted if the IRR is higher than the required return (10% in the example)."],
    ['p', "IRR is calculated by trial and error on a calculator or in Excel (the IRR function). In your head you approximate it through MOIC: IRR ≈ MOIC^(1/years) − 1. If money doubled in 5 years, IRR ≈ 2^0.2 − 1 ≈ 14.9%."],
    ['h', 'CAGR: average growth over several years'],
    ['p', "If revenue grew from 100 to 200 in 7 years, that is not 100% / 7 = 14.3% a year. The right way, using the compound interest formula: CAGR = (end / start)^(1/n) − 1 = 2^(1/7) − 1 ≈ 10.4%."],
    ['h', 'The rule of 72'],
    ['p', "A quick way to estimate the doubling time: divide 72 by the rate in percent. At 8% money doubles in about 9 years, at 12% in 6 years."],
    ['h', 'Nominal and real return'],
    ['p', "A nominal return of 7% with 3% inflation gives a real return of about (1.07 / 1.03) − 1 ≈ 3.9%, not simply 7% − 3% = 4%. Over long calculations the difference becomes noticeable."],
    ['warn', "Adding up flows from different years without discounting. €100 in five years is not equal to €100 today."],
    ['q', "Why can IRR sometimes be misleading?", "IRR ignores the size of the project: a €1,000 project with a 30% IRR can create less value than a €100,000 project with a 15% IRR. In addition, with unconventional flows (alternating pluses and minuses) there can be several IRR values. That is why IRR is looked at together with NPV."],
    ['key', "PV = FV/(1+r)^n. NPV > 0 means the project creates value. IRR is the rate at which NPV equals zero. To approximate growth over several years use compound interest, not division by the number of years."]
  ] };
