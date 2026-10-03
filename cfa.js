'use strict';
// CFA Level 1: отдельная ветка (тема 'cfa'). Контент на английском, как на экзамене.
// В общий ежедневный план попадает только если включить «CFA в ежедневном плане» (S.focus содержит 'cfa'); иначе тренируется отдельно из «Учёбы».
(() => {
  const L = (id, title, cards, quiz) => ({ id: 'cfa-' + id, topic: 'cfa', tag: 'CFA L1', title, cards, quiz: quiz.map(([q, o, a, e]) => ({ q, o, a, e })) });
  const D = [
    // Quantitative methods
    ['PV of $1,000 received in 3 years at 8%, annual compounding?', ['$793.83', '$800.00', '$857.34', '$925.93'], 0, '1,000 / 1.08³ = 793.83. $857.34 is the two-year PV.'],
    ['FV of $500 invested for 5 years at 6% compounded annually?', ['$650.00', '$669.11', '$711.78', '$630.00'], 1, '500 × 1.06⁵ = 669.11.'],
    ['PV of an ordinary annuity of $100 a year for 3 years at 10%?', ['$300.00', '$248.69', '$273.55', '$226.45'], 1, '100 × (1 − 1.1⁻³) / 0.10 = 248.69. $273.55 would be an annuity due.'],
    ['PV of a perpetuity of $50 a year at a 5% discount rate?', ['$250', '$1,000', '$2,500', '$100'], 1, 'PV = payment / rate = 50 / 0.05 = 1,000.'],
    ['Sample standard deviation of 2, 4 and 6?', ['1.63', '2.00', '2.45', '4.00'], 1, 'Mean 4; squared deviations 4 + 0 + 4 = 8; divide by n − 1 = 2 gives variance 4, so s = 2. 1.63 is the population figure.'],
    ['A correlation of −1 between two assets means…', ['no relationship at all', 'a perfect negative linear relationship', 'a perfect positive linear relationship', 'equal volatility'], 1, 'Correlation measures linear co-movement; −1 is perfectly opposite, which gives the greatest diversification benefit.'],
    ['Effective annual rate of 8% compounded quarterly?', ['8.00%', '8.24%', '8.30%', '8.50%'], 1, '(1 + 0.08/4)⁴ − 1 = 1.02⁴ − 1 = 8.24%.'],
    ['A share bought at $40 paid a $2 dividend and was sold at $45. Holding period return?', ['12.5%', '17.5%', '5.0%', '15.0%'], 1, '(45 − 40 + 2) / 40 = 17.5%.'],
    ['Annual returns of +10%, +20% and −10%. Geometric mean return?', ['6.67%', '5.91%', '6.00%', '5.00%'], 1, '(1.1 × 1.2 × 0.9)^(1/3) − 1 = 5.91%. The arithmetic mean is 6.67% and is always at least as high as the geometric mean.'],
    ['Events A and B are independent with P(A) = 0.4 and P(B) = 0.5. P(A and B)?', ['0.90', '0.20', '0.10', '0.45'], 1, 'For independent events, multiply: 0.4 × 0.5 = 0.20.'],
    // Ethics
    ['An analyst learns material nonpublic information about a merger. She should…', ['trade quickly before the announcement', 'tell her best clients', 'not act or cause others to act on it and encourage public disclosure', 'trade only in a personal account'], 2, 'Standard II(A): members must not act or cause others to act on material nonpublic information.'],
    ['Local law and the Code and Standards conflict. The member must follow…', ['local law always', 'the Code always', 'the stricter of the two', 'whichever is cheaper to comply with'], 2, 'Standard I(A): comply with the stricter of applicable law and the Code and Standards.'],
    ['Presenting another analyst\'s research as your own violates which standard?', ['Misrepresentation', 'Fair dealing', 'Suitability', 'Loyalty to employer'], 0, 'Standard I(C), Misrepresentation, covers plagiarism and misstatements of qualifications or results.'],
    ['An analyst accepts an expensive gift from a company she covers. The main concern is…', ['fair dealing', 'independence and objectivity', 'performance presentation', 'suitability'], 1, 'Standard I(B): gifts can compromise independence and objectivity; they should be refused or disclosed.'],
    // Financial statement analysis
    ['Net profit margin 8%, asset turnover 1.5, equity multiplier 2.0. ROE under DuPont?', ['12%', '24%', '16%', '18%'], 1, 'ROE = margin × turnover × leverage = 0.08 × 1.5 × 2.0 = 24%.'],
    ['Cash 50, receivables 100, inventory 150, current liabilities 200. Quick ratio?', ['0.75', '1.25', '1.50', '0.25'], 0, 'Quick ratio = (cash + receivables) / current liabilities = 150 / 200 = 0.75.'],
    ['With rising prices and stable quantities, which method gives higher net income and a higher inventory balance?', ['FIFO', 'LIFO', 'They are the same', 'It depends on the tax rate'], 0, 'FIFO expenses the oldest, cheapest costs, so COGS is lower and inventory carries recent, higher costs. LIFO is not allowed under IFRS.'],
    ['Revenue 500, COGS 300. Gross margin?', ['60%', '40%', '30%', '66.7%'], 1, '(500 − 300) / 500 = 40%.'],
    ['EBIT 120 and interest expense 30. Interest coverage?', ['0.25x', '4.0x', '3.0x', '90x'], 1, 'EBIT / interest = 120 / 30 = 4.0x.'],
    ['Straight-line depreciation: cost 100, salvage value 10, life 5 years. Annual expense?', ['20', '18', '22', '9'], 1, '(100 − 10) / 5 = 18.'],
    // Economics
    ['Spot GBP/USD is 1.25 (USD per GBP). USD rate 4%, GBP rate 5%. One-year forward?', ['1.2500', '1.2381', '1.2620', '1.3125'], 1, 'Covered interest parity: F = S × (1 + r_USD) / (1 + r_GBP) = 1.25 × 1.04 / 1.05 = 1.2381. The currency with the higher rate trades at a forward discount.'],
    ['Which is a tool of expansionary monetary policy?', ['raising reserve requirements', 'selling government bonds', 'buying government bonds', 'raising the policy rate'], 2, 'Open market purchases add reserves, lower rates and expand the money supply.'],
    ['Quantity demanded falls 10% when price rises 5%. Magnitude of price elasticity?', ['0.5', '2.0', '5.0', '15'], 1, '10% / 5% = 2.0, so demand is elastic (above 1).'],
    ['Nominal rate 6%, expected inflation 2.5%. Approximate real rate?', ['8.5%', '3.5%', '2.4%', '6.0%'], 1, 'Real ≈ nominal − inflation = 3.5%.'],
    ['Which fiscal action is expansionary?', ['increasing government spending or cutting taxes', 'cutting spending and raising taxes', 'raising the policy rate', 'selling bonds'], 0, 'Expansionary fiscal policy raises the budget deficit through higher spending or lower taxes.'],
    // Fixed income
    ['A 3-year bond pays a 5% annual coupon, par 1,000, and the market yield is 5%. Price?', ['950', '1,000', '1,050', '1,025'], 1, 'When the coupon rate equals the yield, the bond trades at par.'],
    ['Modified duration 6. Yield rises by 25 bp. Approximate price change?', ['−0.25%', '−1.50%', '−6.00%', '−15%'], 1, 'ΔP/P ≈ −ModDur × Δy = −6 × 0.0025 = −1.5%.'],
    ['A zero-coupon bond has face value 1,000, 5 years to maturity and a 4% yield. Price?', ['800.00', '821.93', '833.33', '854.80'], 1, '1,000 / 1.04⁵ = 821.93.'],
    ['An inverted yield curve means…', ['long rates are above short rates', 'short rates are above long rates', 'all rates are equal', 'rates are negative'], 1, 'Short-term yields exceed long-term yields. It is often read as a sign of expected economic slowdown.'],
    ['Coupon 60, bond price 900. Current yield?', ['6.00%', '6.67%', '7.50%', '5.40%'], 1, 'Current yield = annual coupon / price = 60 / 900 = 6.67%.'],
    ['All else equal, which bond has the highest price sensitivity to yield changes?', ['short maturity, high coupon', 'long maturity, low coupon', 'short maturity, low coupon', 'long maturity, high coupon'], 1, 'Duration rises with maturity and falls with coupon, so a long-maturity, low-coupon bond is the most sensitive.'],
    // Equity and derivatives
    ['Next dividend D1 = 3, required return 10%, growth 4%. Value under the Gordon growth model?', ['30', '50', '75', '42'], 1, 'V0 = D1 / (r − g) = 3 / 0.06 = 50.'],
    ['Payout ratio 40% and ROE 15%. Sustainable growth rate?', ['6%', '9%', '15%', '40%'], 1, 'g = retention × ROE = 0.60 × 15% = 9%.'],
    ['Spot 100, risk-free rate 5%, no income on the asset. One-year forward price?', ['95.24', '105.00', '100.00', '110.00'], 1, 'F = S × (1 + r)^T = 100 × 1.05 = 105.'],
    ['A call option has strike 50 and the underlying is at 58 at expiry. Payoff?', ['58', '8', '50', '0'], 1, 'Payoff = max(S − K, 0) = 8.'],
    ['Call 4, put 6 and spot 50 (same strike and expiry). What is the present value of the strike?', ['48', '52', '50', '56'], 1, 'Put-call parity: C + PV(K) = P + S, so PV(K) = 6 + 50 − 4 = 52.'],
  ].map(([q, o, a, e], i) => ({ id: 'cfa-d' + (i + 1), topic: 'cfa', q, o, a, e }));

  const C = [
    ['State the DuPont decomposition of ROE.', 'ROE = net profit margin × asset turnover × equity multiplier (financial leverage). It shows whether returns come from profitability, efficiency or leverage.'],
    ['What is duration and what does it tell you?', 'Duration measures a bond\'s price sensitivity to yield changes: ΔP/P ≈ −modified duration × Δy. It rises with maturity and falls with coupon and yield.'],
    ['State put-call parity for European options.', 'C + PV(K) = P + S. A call plus a bond paying the strike equals a put plus the stock.'],
    ['State covered interest rate parity.', 'Forward = Spot × (1 + domestic rate) / (1 + foreign rate), with the spot quoted as domestic per foreign. The higher-rate currency trades at a forward discount.'],
    ['What does Standard II(A) require?', 'Members must not act or cause others to act on material nonpublic information. Information is material if it would affect the price or an investor\'s decision.'],
    ['Arithmetic versus geometric mean: when do you use each?', 'Arithmetic mean estimates the expected return for one period. Geometric mean measures compound growth over multiple periods and is never above the arithmetic mean.'],
    ['Give the formula for the effective annual rate.', 'EAR = (1 + nominal rate / m)^m − 1, where m is the number of compounding periods per year.'],
    ['Explain the Gordon growth model and its main limit.', 'V0 = D1 / (r − g). It needs r above g and stable growth, so it suits mature dividend payers and is very sensitive to the inputs.'],
    ['How do LIFO and FIFO differ when prices rise?', 'LIFO gives higher COGS, lower income and lower taxes, but an older, lower inventory value. FIFO gives lower COGS, higher income and inventory closer to current cost. LIFO is not permitted under IFRS.'],
    ['What is the Sharpe ratio?', '(Portfolio return − risk-free rate) / standard deviation of portfolio returns: excess return per unit of total risk.'],
  ].map(([q, a], i) => ({ id: 'cfa-c' + (i + 1), topic: 'cfa', q, a }));

  const LS = [
    L('quant', 'Time value of money and returns', [
      'Effective annual rate: EAR = (1 + r/m)^m − 1. A 12% rate compounded monthly gives (1.01)^12 − 1 = 12.68%.',
      'PV of an ordinary annuity = payment × (1 − (1 + r)^−n) / r. A perpetuity is payment / r. An annuity due is worth (1 + r) times the ordinary annuity.',
      'Holding period return = (end price − start price + income) / start price. Arithmetic mean measures the expected one-period return; geometric mean measures compound growth and is never higher.',
      'Standard deviation uses n − 1 for a sample. Correlation runs from −1 to +1; the lower it is, the greater the diversification benefit.'],
      [['A 12% nominal rate is compounded monthly. The effective annual rate is…', ['12.00%', '12.68%', '12.75%', '13.00%'], 1, '(1 + 0.12/12)^12 − 1 = 1.01^12 − 1 = 12.68%.'],
       ['An investment returns +50% in year 1 and −50% in year 2. The geometric mean annual return is…', ['0%', '−13.4%', '−25%', '−50%'], 1, '(1.5 × 0.5)^(1/2) − 1 = √0.75 − 1 = −13.4%. The arithmetic mean is 0%, which hides the real loss.']]),
    L('ethics', 'Ethics and Standards of Professional Conduct', [
      'The CFA Institute Code and Standards has seven standards: I Professionalism, II Integrity of Capital Markets, III Duties to Clients, IV Duties to Employers, V Investment Analysis, VI Conflicts of Interest, VII Responsibilities as a Member.',
      'Standard I(A): comply with applicable law and the Code. When they differ, follow the stricter one.',
      'Standard II(A): never act or cause others to act on material nonpublic information. Standard II(B) prohibits market manipulation.',
      'Standard III: clients come first. Duties include loyalty, fair dealing, suitability and communication. Priority of transactions (VI(B)): client trades come before employer and personal trades.'],
      [['Which standard requires placing client interests before the interests of the employer and the member?', ['Duties to Clients (III)', 'Duties to Employers (IV)', 'Investment Analysis (V)', 'Responsibilities as a Member (VII)'], 0, 'Standard III(A) Loyalty, Prudence and Care puts client interests first.'],
       ['A member who learns material nonpublic information should…', ['trade before the news', 'not act on it and encourage public disclosure', 'tell colleagues', 'trade only for clients'], 1, 'Standard II(A) prohibits acting or causing others to act on it.']]),
    L('fsa', 'Financial statement analysis', [
      'DuPont: ROE = net profit margin × asset turnover × equity multiplier. It separates profitability, efficiency and leverage.',
      'Liquidity: current ratio = current assets / current liabilities; quick ratio = (cash + receivables + marketable securities) / current liabilities. Solvency: interest coverage = EBIT / interest.',
      'With rising prices, FIFO gives lower COGS and higher income; LIFO gives higher COGS and lower income and taxes. LIFO is not allowed under IFRS.',
      'Straight-line depreciation = (cost − salvage) / useful life. Accelerated methods front-load the expense, so early-year income is lower.'],
      [['Net margin 5%, asset turnover 2.0, equity multiplier 1.5. ROE under DuPont is…', ['7.5%', '10%', '15%', '20%'], 2, '0.05 × 2.0 × 1.5 = 15%.'],
       ['When prices are rising, which inventory method reports lower net income?', ['FIFO', 'LIFO', 'Weighted average gives the lowest', 'None, all are equal'], 1, 'LIFO matches the newest, higher costs against revenue, so COGS is higher and income is lower.']]),
    L('econ', 'Economics and exchange rates', [
      'Elasticity of demand = % change in quantity / % change in price. A magnitude above 1 means elastic demand: a price rise lowers revenue.',
      'Monetary policy tools: policy rate, open market operations, reserve requirements. Expansionary policy lowers rates and tends to weaken the currency.',
      'Fiscal policy: spending and taxes. Expansionary fiscal policy raises spending or cuts taxes and widens the deficit.',
      'Covered interest parity: Forward = Spot × (1 + r_domestic) / (1 + r_foreign). The currency with the higher interest rate trades at a forward discount.'],
      [['Spot EUR/USD is 1.10 (USD per EUR). USD rate 5%, EUR rate 3%. The one-year forward is about…', ['1.0790', '1.1214', '1.1000', '1.1550'], 1, '1.10 × 1.05 / 1.03 = 1.1214. The euro, with the lower rate, trades at a forward premium.'],
       ['A central bank cuts its policy rate. All else equal, the domestic currency tends to…', ['appreciate', 'depreciate', 'stay unchanged', 'become more volatile only'], 1, 'Lower rates reduce the return on holding the currency, putting downward pressure on it.']]),
    L('fixed', 'Fixed income: price, yield and duration', [
      'Bond price is the PV of coupons and principal at the market yield. Price and yield move in opposite directions.',
      'If coupon rate = yield, the bond trades at par; if coupon is below yield, at a discount; if above, at a premium.',
      'Modified duration: ΔP/P ≈ −ModDur × Δy. A duration of 7 and a rise of 50 bp gives about −3.5%.',
      'Duration rises with maturity and falls with coupon and yield. Zero-coupon bonds have the highest duration for a given maturity.'],
      [['Modified duration is 7. Yields rise 50 bp. The approximate price change is…', ['−0.35%', '−3.5%', '−7.0%', '−35%'], 1, '−7 × 0.005 = −3.5%.'],
       ['A bond with a 5% coupon is priced when the market yield is 6%. It trades…', ['at par', 'at a discount', 'at a premium', 'cannot tell'], 1, 'Coupon below market yield means the price must fall below par.']]),
    L('equity', 'Equity valuation and derivatives basics', [
      'Gordon growth model: V0 = D1 / (r − g). It needs r above g and stable growth. Sustainable growth g = retention ratio × ROE.',
      'Forward price on an asset with no income: F = S × (1 + r)^T. A forward has no upfront cost; its value changes as the spot moves.',
      'Option payoff at expiry: call = max(S − K, 0); put = max(K − S, 0).',
      'Put-call parity for European options: C + PV(K) = P + S. It lets you derive one option price from the other.'],
      [['D0 = 2, growth 4%, required return 9%. Value under the Gordon growth model?', ['$22.2', '$41.6', '$40.0', '$52.0'], 1, 'D1 = 2 × 1.04 = 2.08; V0 = 2.08 / (0.09 − 0.04) = 41.6.'],
       ['European call price 6, S = 50, K = 50, r = 5%, T = 1 year. Put price?', ['3.62', '2.38', '8.38', '6.00'], 0, 'P = C − S + PV(K) = 6 − 50 + 50/1.05 = 3.62.']]),
  ];
  DRILLS.push(...D); CARDS.push(...C); LESSONS.push(...LS);
  registerAll();
})();
