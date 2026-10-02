'use strict';
// English version of the book (part H).
window.BOOK_EN = window.BOOK_EN || {};
BOOK_EN.ecm = { title: 'Capital markets: IPOs, bonds and loans', tag: 'Markets',
  intro: "Companies raise money not only from banks but also on the markets. ECM (equity capital markets) specialists handle shares, DCM (debt capital markets) handle debt. Let us look at how an IPO works and how the bond market is organised.",
  blocks: [
    ['h', 'ECM: raising equity capital'],
    ['ul', [
      "**IPO:** the first public offering of shares.",
      "**Follow-on:** an additional offering of already traded shares.",
      "**Accelerated bookbuild (ABB):** a quick overnight placement with large investors, usually at a discount to the market.",
      "**Rights issue:** an issue with pre-emptive subscription rights for existing shareholders (common in Germany, Bezugsrecht).",
      "**Convertible bonds:** debt with the right to exchange it for shares."
    ]],
    ['h', 'How an IPO works'],
    ['ol', [
      "**Choosing banks.** The company appoints global coordinators and bookrunners. They run the order book and organise the placement.",
      "**Due diligence and documents.** Checking the business, preparing the prospectus and agreeing it with the regulator.",
      "**Equity story and valuation.** The banks formulate the investment case and the price range by comparing the company with peers.",
      "**Roadshow and bookbuilding.** Management meets investors, the banks collect orders and build demand.",
      "**Pricing.** The final price is set. A discount to fair value (10-15% in an IPO) is usually built in, to attract investors and secure a rise on the first day.",
      "**Listing and stabilisation.** The shares start trading. The underwriter supports the price with the greenshoe.",
      "**Lock-up.** Insiders usually cannot sell shares for 90-180 days."
    ]],
    ['ex', 'IPO numbers', "The company places 50 m shares at €20 = €1,000 m.\nThe banks' fee of 5% = €50 m.\nThe greenshoe (up to 15%) = 50 × 0.15 = 7.5 m additional shares, to stabilise the price if it starts to fall."],
    ['p', "An **underwriter** is a bank that guarantees the placement and takes on the risk of unsold shares (firm commitment). The alternative is best efforts: the bank only tries to sell, and the risk stays with the issuer. The fee is usually a few percent of the placement amount."],
    ['h', 'Why a company does an IPO'],
    ['ul', [
      "To raise capital for growth.",
      "To give early investors and funds an exit.",
      "To get a public currency for M&A deals and employee compensation.",
      "To raise recognition and transparency."
    ]],
    ['p', "The downsides: disclosure requirements, pressure from quarterly results, costs and a loss of some control."],
    ['h', 'DCM: raising debt'],
    ['ul', [
      "**Investment grade bonds.** Reliable issuers with a high rating, low spreads.",
      "**High yield bonds.** Issuers rated below BBB-/Baa3, a higher rate.",
      "**Syndicated and leveraged loans.** A loan from a group of banks, often for LBO deals.",
      "**Commercial paper.** Short-term borrowing."
    ]],
    ['p', "The price of a bond is determined by its yield and coupon. A new bond is often priced as a spread over a benchmark (for example, the yield of German Bunds or the swap rate)."],
    ['h', 'Bond price and yield'],
    ['p', "Price and yield move in opposite directions. A five-year bond with a 4% coupon and a face value of 100:"],
    ['tbl', ['Yield', 'Bond price'], [
      ['3%', '104.58'],
      ['4%', '100.00'],
      ['5%', '95.67']
    ]],
    ['p', "When rates rise, the prices of existing bonds fall: new bonds pay more, so the old ones must become cheaper. The longer the maturity, the bigger the fall (the sensitivity to the rate is called duration)."],
    ['q', "Walk me through the IPO process.", "Choosing banks, due diligence, prospectus and regulator, roadshow and bookbuilding, pricing, placement and listing. After the IPO a lock-up and greenshoe stabilisation apply."],
    ['q', "Why is there an IPO discount?", "To attract investors and compensate them for the uncertainty of a new security. A discount of 10-15% to fair value secures demand and often a rise on the first day of trading."],
    ['key', "ECM helps companies raise equity (IPO, follow-on, ABB), DCM helps them raise debt (bonds, loans). Banks receive a fee, organise demand and take the placement risk."]
  ] };

BOOK_EN.rates = { title: 'Interest rates, inflation and their effect on valuation', tag: 'Markets',
  intro: "Any valuation is a comparison of money today with money tomorrow, and the price of money over time is set by interest rates. If you understand how rates affect the value of companies, deals and debt, you will be able to answer macro questions the way a bank expects.",
  blocks: [
    ['h', 'Where rates come from'],
    ['p', "Central banks (the ECB, the Fed) set the policy rate and influence market rates. Government bonds of reliable countries, such as German Bunds, serve as the risk-free benchmark. The rates on company loans are made up of the risk-free rate and a credit spread for the issuer's risk."],
    ['p', "Inflation (rising prices) forces central banks to raise rates: that is how they cool demand. The higher the inflation, the higher the nominal rates."],
    ['h', 'How rates affect the value of a company'],
    ['p', "A rise in rates raises the discount rate (first Rf, then Re and WACC). The present value of future money falls. Recall the DCF sensitivity table: when WACC rose from 9% to 10%, the value of the company in our example fell from 1,854 to 1,614, that is, by almost 13%."],
    ['p', "Assets with a long duration suffer most: growing companies whose main cash lies far in the future (technology, biotech). Companies with stable near-term flows lose less."],
    ['h', 'The yield curve'],
    ['p', "The yield curve shows the rates on bonds of different maturities. Normally it slopes upward: longer terms pay more. An **inversion** of the curve (short rates above long rates) signals that the market expects the economy to slow down and rates to be cut in the future. Historically an inversion has often preceded recessions."],
    ['h', 'The effect on M&A and LBOs'],
    ['p', "Expensive debt makes deals more expensive. For an LBO it is a direct hit to returns. In our example with debt of 500, a rise in the rate from 6% to 9% means additional interest of €15 m a year, 11.25 after tax. Over five years that is about €56 m less debt repaid, equity at exit falls from 1,145 to about 1,089, MOIC from 2.86x to 2.72x, and IRR from 23.4% to about 22.2%. In addition, when rates rise, banks lend less debt, and sponsors have to put in more of their own money."],
    ['p', "Strategic buyers suffer less, but they suffer too: cash purchases get more expensive, and share valuations (the currency of the deal) fall. So in periods of high rates M&A activity usually declines."],
    ['h', 'The effect on banks and industries'],
    ['ul', [
      "**Banks.** They usually benefit from a steeper curve and a higher margin (the difference between the rate on loans and on deposits), but suffer if bad debts rise.",
      "**Real estate and utilities.** A lot of debt and stable flows: sensitive to rates.",
      "**Growing technology companies.** Distant flows, high sensitivity.",
      "**Companies with pricing power** can pass inflation through into prices."
    ]],
    ['h', 'Nominal and real values'],
    ['p', "A nominal return of 7% with 3% inflation gives a real return of about 3.9%. If you forecast flows in nominal numbers, you must discount at the nominal rate, not the real one. You cannot mix the two."],
    ['h', 'How to answer a macro question'],
    ['ol', [
      "State the base case and briefly justify it (inflation, the labour market, the ECB's position).",
      "Show the chain: rate → discount rate → valuation; rate → price of debt → deals.",
      "Name who wins and who loses.",
      "Acknowledge uncertainty and say what data would change your view."
    ]],
    ['q', "How does a rise in rates affect the valuation of a company?", "It raises the discount rate, reducing the present value of future flows. Growing companies with distant flows suffer especially. Debt also gets more expensive, which weighs on LBOs and M&A."],
    ['q', "What does an inverted yield curve mean?", "Short rates are higher than long ones. It is a signal of expectations of a slowing economy and future rate cuts, and has historically preceded recessions."],
    ['key', "Rates set the price of time. A rise in rates lowers valuations (especially of growing companies), makes debt more expensive and hits LBOs and M&A. An inversion of the yield curve is a signal of a slowdown."]
  ] };
