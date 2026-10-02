'use strict';
// English version of the book (part C).
window.BOOK_EN = window.BOOK_EN || {};
BOOK_EN.wacc = { title: 'WACC and CAPM: what capital costs', tag: 'Valuation',
  intro: "Every business is financed by the money of shareholders and lenders, and both want to earn. WACC shows the average price of this money and serves as the discount rate in a DCF. Let us see what it is made of.",
  blocks: [
    ['h', 'The idea of WACC'],
    ['p', "WACC (weighted average cost of capital) is the weighted average cost of capital. If shareholders demand a 9% return and lenders receive 5%, the average price of the company's money lies between those numbers and depends on what share of the capital is borrowed."],
    ['key', "WACC = E/(D+E) × Re + D/(D+E) × Rd × (1 − t)"],
    ['ul', [
      "**E** and **D**: the market value of shareholder capital and of debt. Weights are calculated from market, not book, values.",
      "**Re** (cost of equity): the return shareholders demand.",
      "**Rd** (cost of debt): the rate on the company's debt.",
      "**t**: the tax rate. Interest reduces taxable profit, so debt is cheaper for the company: it gives a tax shield."
    ]],
    ['h', 'Cost of Equity under the CAPM'],
    ['p', "Shareholders do not receive a fixed payment, so their required return is estimated with the CAPM model: the risk-free rate plus a risk premium."],
    ['key', "Re = Rf + β × (Rm − Rf)"],
    ['ul', [
      "**Rf** (risk-free rate): the yield on government bonds of a reliable country, for example ten-year German Bunds.",
      "**β (beta):** the sensitivity of a stock to market swings. β = 1 means it moves like the market, β > 1 moves more than the market (riskier), β < 1 moves less.",
      "**(Rm − Rf)** (market risk premium): the extra return the stock market gives above the risk-free rate. Usually estimated at 4-6%."
    ]],
    ['ex', 'Calculating WACC', "Rf = 3%, β = 1.2, risk premium = 5%.\nRe = 3% + 1.2 × 5% = 9%.\nDebt: rate 5%, tax 25%, so Rd after tax = 5% × 0.75 = 3.75%.\nCapital structure: equity 70%, debt 30%.\nWACC = 0.7 × 9% + 0.3 × 3.75% = 6.3% + 1.125% = 7.425% ≈ 7.4%."],
    ['h', 'Why debt is cheaper than equity'],
    ['p', "Two reasons. First: lenders get paid before shareholders and carry less risk, so they accept a lower rate. Second: interest reduces taxes. However, too much debt raises the risk of bankruptcy, and at some point both the rate on debt and the shareholders' required return rise, and WACC stops falling."],
    ['h', 'Beta: how it is obtained'],
    ['p', "A company's beta is estimated from peers. You take the betas of similar public companies (called levered, because they depend on their debt), “strip” the debt out, average them and then “load” them with the debt of the target capital structure."],
    ['key', "βLevered = βUnlevered × (1 + (1 − t) × D/E)"],
    ['ex', 'Relevering beta', "The peer's beta without debt βU = 1.0. Target structure D/E = 0.4, tax 25%.\nβL = 1.0 × (1 + 0.75 × 0.4) = 1.0 × 1.3 = 1.3."],
    ['h', 'What raises and what lowers WACC'],
    ['ul', [
      "A rise in the risk-free rate or in beta raises Re and WACC.",
      "A rise in the risk premium raises Re.",
      "A larger share of debt (within reason) lowers WACC thanks to the tax shield.",
      "A higher tax rate lowers the cost of debt after tax and WACC."
    ]],
    ['warn', "Using the book value of capital instead of the market value for the weights. Or taking debt before tax. These are the two most common mistakes in WACC calculations."],
    ['q', "How will WACC change if a company replaces part of its equity with debt?", "At first WACC falls: debt is cheaper than equity and gives a tax shield. But as debt grows, risk grows, so both Re and Rd jump. There is an optimal structure after which WACC starts to rise."],
    ['key', "WACC is the average price of capital, the discount rate in a DCF. Re is calculated under CAPM (Rf + β × premium), debt is taken after tax. Beta is estimated from peers and adjusted for the capital structure."]
  ] };

BOOK_EN.dcf = { title: 'DCF: valuing cash flows step by step', tag: 'Valuation',
  intro: "DCF is considered the main valuation method in theory: the value of a company equals the sum of the cash it will bring, brought back to today. In practice it is combined with multiples. In this chapter we build a full valuation with numbers and look at the pitfalls.",
  blocks: [
    ['h', 'The five steps of a DCF'],
    ['ol', [
      "Forecast free cash flow (UFCF) for 5-10 years.",
      "Calculate Terminal Value: the value of the company beyond the forecast.",
      "Choose a discount rate (WACC).",
      "Bring the flows and the Terminal Value back to today and add them up. The result is Enterprise Value.",
      "Go from EV to Equity Value (subtract net debt) and to the share price (divide by the number of diluted shares)."
    ]],
    ['h', 'Step 1. Forecasting cash flows'],
    ['p', "The forecast is built from revenue: growth rates, EBIT margin, taxes, CapEx, depreciation, change in working capital. The forecast period must be long enough for the company to reach a steady state by its end. For fast-growing companies this is 10 years, for mature ones 5."],
    ['h', 'Step 2. Terminal Value'],
    ['p', "You cannot forecast forever. So everything that happens after the last forecast year is collapsed into one number. There are two ways."],
    ['ul', [
      "**Gordon Growth (perpetual growth method).** We assume the flow after the forecast grows forever at a small constant rate g. TV = FCF × (1 + g) / (WACC − g). The formula only works if WACC is greater than g. The rate g is taken close to the long-term growth of the economy, usually 1-3%.",
      "**Exit Multiple.** TV = EBITDA of the last year × the multiple at which the company could be sold, for example the average EV/EBITDA of peers."
    ]],
    ['p', "Good practice: calculate both ways and cross-check. From Gordon you can derive the implied multiple, from the multiple the implied growth rate g. If g comes out at 6%, the multiple is unrealistically high."],
    ['h', 'A full example'],
    ['p', "Suppose the UFCF forecast for five years is: 100, 110, 121, 133.1 and 146.4 € m. WACC 9%, growth rate g = 2%."],
    ['tbl', ['Year', 'UFCF', 'Factor 1/(1.09)^n', 'PV'], [
      ['1', '100.0', '0.917', '91.7'],
      ['2', '110.0', '0.842', '92.6'],
      ['3', '121.0', '0.772', '93.4'],
      ['4', '133.1', '0.708', '94.3'],
      ['5', '146.4', '0.650', '95.2'],
      ['Sum of PV of flows', '', '', '467.2']
    ]],
    ['p', "Terminal Value = 146.4 × 1.02 / (0.09 − 0.02) = 149.3 / 0.07 = €2,133.4 m. Bring it back to today: 2,133.4 × 0.650 = €1,386.6 m."],
    ['key', "EV = 467.2 + 1,386.6 = €1,853.8 m. Terminal Value makes up 74.8% of the total value."],
    ['p', "Let net debt be €400 m and the number of shares 100 m. Equity Value = 1,853.8 − 400 = €1,453.8 m, and the share price is €14.54."],
    ['h', 'Why Terminal Value is so important'],
    ['p', "In our example three quarters of the value is Terminal Value. So a tiny change in WACC or g changes the result sharply. That is exactly why a sensitivity table is always built."],
    ['tbl', ['EV, € m', 'g = 1%', 'g = 2%', 'g = 3%'], [
      ['WACC 8%', '1,918', '2,174', '2,533'],
      ['WACC 9%', '1,669', '1,854', '2,101'],
      ['WACC 10%', '1,475', '1,614', '1,792']
    ]],
    ['p', "A spread from 1,475 to 2,533 is almost double. The honest conclusion from a DCF is not “the company is worth 1,854” but “the company is worth roughly 1.6 to 2.2 billion under reasonable assumptions”."],
    ['h', 'Mid-year convention'],
    ['p', "Cash flows arrive throughout the year, not on 31 December. So they are often discounted over n − 0.5 years. The valuation comes out slightly higher. It is important to use the same rule everywhere."],
    ['h', 'Typical traps'],
    ['ul', [
      "**An optimistic Terminal Value.** Growth g above the growth of the economy, or a multiple above today's market ones.",
      "**Inconsistency.** Flows before debt (UFCF) must be discounted at WACC, not at the cost of equity; flows after debt at Re.",
      "**CapEx lower than depreciation** in the terminal year: an assumption that the business lives forever without renewing its assets.",
      "**Forgotten bridge items:** preferred shares, minority interest, pension obligations."
    ]],
    ['q', "Walk me through a DCF.", "We forecast the company's free cash flow for 5-10 years, calculate Terminal Value (Gordon Growth or exit multiple), discount everything at WACC and add it up. The result is Enterprise Value. Then we subtract net debt and other claims to get Equity Value and divide by the number of diluted shares."],
    ['q', "What happens to the DCF value if WACC rises?", "The value falls: the flows are discounted more heavily, especially Terminal Value, which lies far in the future. The more growth in the business and the larger the share of value in Terminal Value, the stronger the sensitivity to WACC."],
    ['key', "DCF = the sum of discounted free cash flows plus the discounted Terminal Value. The result depends strongly on WACC and g, so it is shown as a range, not as a single figure."]
  ] };
