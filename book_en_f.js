'use strict';
// English version of the book (part F).
window.BOOK_EN = window.BOOK_EN || {};
BOOK_EN.ma = { title: 'The M&A process: how a company is sold', tag: 'Deals',
  intro: "Selling a company is a project lasting several months with clear stages. An investment bank organises the process, prepares the documents and conducts negotiations. Knowing this sequence helps you answer questions and understand what analysts in an M&A team do.",
  blocks: [
    ['h', 'The two sides of a deal'],
    ['p', "**Sell-side** advises the seller: the goal is to find the best buyer at the best price. **Buy-side** advises the buyer: the goal is to find a suitable target and buy it sensibly. The classic sale process is described from the sell-side point of view, because it is the most structured."],
    ['h', 'The stages of a sale process'],
    ['ol', [
      "**Preparation (2-6 weeks).** The bank gets to know the company, builds a financial model, determines the valuation range, and prepares the documents and the list of potential buyers (buyer list).",
      "**Teaser and outreach.** A short anonymous one- or two-page overview of the company goes to potential buyers. Those who are interested sign a non-disclosure agreement (NDA).",
      "**CIM.** After the NDA, buyers receive the Confidential Information Memorandum: a detailed document about the business, market, finances and strategy. It is the main marketing material.",
      "**IOI (first round).** Buyers send non-binding offers (Indications of Interest) with a price range. The seller and the bank select the best ones for the second round.",
      "**Management presentation and data room.** The selected participants meet the management and get access to a virtual data room: contracts, financial data, legal documents. They carry out due diligence (the checking).",
      "**Binding offers (second round).** Buyers send binding offers with a price, financing terms and an agreed draft contract.",
      "**Negotiations and SPA.** The seller chooses a winner and signs exclusivity. The parties agree the sale and purchase agreement (SPA): price, warranties, closing conditions.",
      "**Signing and closing.** The contract is signed, then the conditions are met (approval from antitrust authorities, regulators) and the deal closes, when the money changes hands."
    ]],
    ['h', 'Types of auctions'],
    ['ul', [
      "**Broad auction.** Many buyers are involved. Maximum competition, but a risk of information leaks.",
      "**Targeted (limited).** 5-10 of the most likely buyers are invited. A compromise between price and confidentiality.",
      "**Bilateral negotiations.** One buyer. Quick and quiet, but a weak position in the bargaining."
    ]],
    ['h', 'Who buys: strategic and financial buyers'],
    ['ul', [
      "**Strategic buyers** (companies from the industry) can pay more thanks to synergies: cost savings, cross-selling.",
      "**Financial buyers** (private equity funds) are limited by a target return (IRR). They pay so that after the exit they earn 20-25% a year."
    ]],
    ['h', 'What analysts in an M&A team do'],
    ['ul', [
      "Build financial models and valuations (DCF, comps, precedents, LBO).",
      "Write teasers, CIMs and presentations for management.",
      "Prepare buyer lists and tables comparing offers.",
      "Run the data room and track buyers' questions.",
      "Help with synergy analysis and the merger model."
    ]],
    ['h', 'How the bank earns money'],
    ['p', "In M&A the bank usually receives a fixed retainer fee and the main reward on success (success fee), which depends on the size of the deal. This means the bank is interested in getting the deal to closing. The size of fees varies greatly depending on the size and complexity of the deal."],
    ['q', "Who will pay more: a strategic or a financial buyer?", "As a rule the strategic one, because it takes into account synergies that a fund does not have. A financial buyer is limited by returns: it needs the deal to deliver a 20-25% IRR with a reasonable debt structure."],
    ['q', "What is a CIM?", "A Confidential Information Memorandum: a detailed document about the company that interested buyers receive after signing an NDA. It describes the business, market, finances, strategy and investment appeal."],
    ['key', "The sale process: preparation, teaser, NDA, CIM, IOI, management presentation and data room, binding offers, SPA, signing and closing. The bank organises competition so that the seller gets the best price."]
  ] };

BOOK_EN.deals = { title: 'Deal types, premium and deal protection', tag: 'Deals',
  intro: "Deals differ in form, method of payment and legal structure. Taxes, risks and the behaviour of the parties depend on these parameters. In this chapter we look at the main options and the protection mechanisms that are asked about in interviews.",
  blocks: [
    ['h', 'Buying shares or assets'],
    ['ul', [
      "**Stock deal (share deal).** The buyer acquires the target's shares and with them all liabilities and hidden risks. Legally simpler. In Germany this is the most common structure for private companies.",
      "**Asset deal.** The buyer takes only selected assets and liabilities. It allows leaving the unwanted behind and gives a tax step-up, but requires every asset and contract to be transferred separately."
    ]],
    ['h', 'Method of payment'],
    ['p', "The buyer can pay in cash, in shares (stock) or in a mix. The choice depends on the buyer's capacity and the seller's preferences."],
    ['ul', [
      "**Cash.** The seller receives a certain sum at once and bears no market risk. The buyer finances it with cash or debt.",
      "**Stock.** The seller becomes a shareholder of the combined company and shares its risk and growth. It is attractive for a buyer whose shares are expensive and who has no cash."
    ]],
    ['h', 'Control premium and exchange ratio'],
    ['p', "The buyer pays above the market price because it gets control. The premium is calculated against the price the day before the announcement."],
    ['ex', 'Deal calculations', "The target's share price is €40, the offer is €52.\nPremium = 52 / 40 − 1 = 30%.\nIf the target has 20 m shares, the deal's Equity Value = 52 × 20 = €1,040 m.\nIn a payment with the buyer's shares (price €30) the exchange ratio = 52 / 30 ≈ 1.73 buyer shares for one target share.\nIf 20 m new shares are issued against 80 m old ones, the target's shareholders will get 20 / (80 + 20) = 20% of the combined company."],
    ['h', 'Friendly and hostile deals'],
    ['p', "A **friendly deal** is agreed with the target's board of directors. A **hostile** one goes straight to shareholders via a public offer (tender offer), bypassing the board. The target may defend itself: look for a “white knight” (another buyer), use a “poison pill” (dilution of shares on a takeover)."],
    ['p', "In Germany public takeovers are regulated by the WpÜG law. Acquiring 30% of the votes obliges the buyer to make an offer to all the other shareholders (mandatory offer). Buying out the remaining minority shareholders (squeeze-out) is possible at a very high stake, around 90-95% depending on the form."],
    ['h', 'Deal protection mechanisms'],
    ['ul', [
      "**Breakup fee.** If the target accepts another offer, it pays the first buyer compensation (usually 2-4% of the deal size).",
      "**Reverse termination fee.** Paid by the buyer if the deal fails for reasons on its side: it did not get financing or regulatory approval.",
      "**No-shop.** The target undertakes not to look for other buyers. Often softened by a go-shop clause: a short period to look for a higher offer.",
      "**MAC (Material Adverse Change).** The buyer is entitled to walk away if a material negative event has happened to the company.",
      "**Earn-out.** Part of the price is paid later and depends on reaching targets (revenue, EBITDA). It brings positions closer when the parties see the future differently."
    ]],
    ['h', 'Merger of equals and acquisition'],
    ['p', "In a **merger of equals** both companies combine, shareholders receive stakes in the new structure and the premium is minimal. In an **acquisition** one side is clearly the main one and pays a premium. Legally a merger means combining into one entity, while an acquisition may leave both companies in existence."],
    ['h', 'Regulation'],
    ['p', "Large deals are reviewed by antitrust authorities (the European Commission, the Bundeskartellamt in Germany). If a deal threatens competition, the regulator may require the sale of part of the business (remedies) or prohibit it. This is an important risk that is built into the timetable and the closing conditions."],
    ['q', "When is it better to pay with shares rather than cash?", "When the buyer's shares are expensive (a high P/E) or it lacks cash and debt capacity. Shares also share the risk and potential growth with the seller, which removes disagreements over valuation."],
    ['q', "How do a stock deal and an asset deal differ?", "In a stock deal shares are bought together with all liabilities, and the tax base of the assets is not changed. In an asset deal selected assets are bought, a tax step-up is received and unnecessary liabilities are left behind, but the process is legally more complicated."],
    ['key', "The form of the deal (shares or assets), the method of payment (cash or shares) and the protection mechanisms (breakup fee, MAC, no-shop, earn-out) determine how risk is distributed between the buyer and the seller."]
  ] };
