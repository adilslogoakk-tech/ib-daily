'use strict';
// English version of the book (part I).
window.BOOK_EN = window.BOOK_EN || {};
BOOK_EN.pitch = { title: 'Equity research and the stock pitch', tag: 'Markets',
  intro: "An Equity Research analyst studies companies and recommends stocks: buy, hold or sell. The ability to present an investment idea (a stock pitch) quickly and clearly is tested in interviews for research, asset management and sometimes IB.",
  blocks: [
    ['h', 'What an investment idea consists of'],
    ['ol', [
      "**Thesis.** In two or three sentences: why the market is wrong and the stock is mispriced.",
      "**Valuation.** What you value the stock at and by which method.",
      "**Catalysts.** Events that will reveal the undervaluation: results, a new product, regulation, a deal.",
      "**Risks.** What could break the thesis and how you monitor it.",
      "**Recommendation.** Buy, hold or sell, with a target price and a time frame."
    ]],
    ['h', 'How to get a target price'],
    ['p', "The most common way: forecast earnings per share multiplied by a target P/E. Other options: DCF per share, a target EV/EBITDA, sum of the parts."],
    ['ex', 'Calculating a target price', "Forecast EPS for next year is €2.5. Target P/E 18 (from peers, adjusted for growth).\nTarget price = 2.5 × 18 = €45.\nThe current price is €36, so upside = 45 / 36 − 1 = 25%."],
    ['p', "Every bank has its own thresholds for recommendations: for example, “buy” when the potential is above a certain level. Always check the definition that a particular firm uses."],
    ['h', 'How to prepare an idea'],
    ['ul', [
      "Read the annual report, investor presentations and transcripts of analyst calls.",
      "Understand the business model: how the company earns, who its customers and competitors are, what its costs are.",
      "Check the quality of earnings: whether they turn into cash flow (FCF / Net Income), whether receivables grow faster than revenue.",
      "Build a simple model and compare the valuation with peers.",
      "Determine what the market has already priced in and why you see it differently."
    ]],
    ['h', 'The structure of a two-minute pitch'],
    ['ol', [
      "**What the company is** (20 seconds): what it does, its size, who its customers are.",
      "**Why the stock is undervalued** (30 seconds): a specific argument backed by a figure.",
      "**Valuation** (30 seconds): the method, the multiple, the target price and the potential.",
      "**Catalysts** (15 seconds): what will happen and when.",
      "**Risks** (15 seconds): the main ones and what would make you change your mind.",
      "**Recommendation** (10 seconds)."
    ]],
    ['h', 'Typical mistakes'],
    ['ul', [
      "Retelling the company description instead of the argument for why the market is wrong.",
      "Picking a “favourite” company without analysing the price: a good business is not the same as a good investment.",
      "Not naming risks, or naming only the obvious ones.",
      "Being unable to explain what is already priced in.",
      "Giving numbers without checking them and without sources."
    ]],
    ['h', 'How to answer questions about the idea'],
    ['p', "The questions will be sharp: “What if the market falls?”, “Why not buy the competitor?”, “What is priced in?”. Answer to the point, acknowledge the weak spots and show how you monitor them. An honest “I don't know, I'll check” is better than an invented figure."],
    ['q', "Pitch me a stock.", "Describe the company in 20 seconds, explain why the market is wrong in its valuation, give the valuation and target price, 2-3 catalysts, the main risks and the condition under which you would revise your view, then give the recommendation."],
    ['q', "How do you get a target price?", "For example, I multiply forecast EPS by a target P/E, or calculate a DCF per share, or apply a target EV/EBITDA to forecast EBITDA, subtract net debt and divide by the number of diluted shares."],
    ['key', "A good pitch is a thesis, valuation, catalysts, risks and a recommendation, backed by numbers. The undervaluation must be explained: what the market is missing and what will make it recognise it."]
  ] };

BOOK_EN.interview = { title: 'How to pass an investment banking interview', tag: 'Career',
  intro: "An IB interview has a technical and a behavioural part, and both are judged on structure, speed and confidence. This chapter brings together in one place the typical stages, questions and ways to prepare.",
  blocks: [
    ['h', 'The stages of selection'],
    ['ol', [
      "**Application and CV.** A one-page résumé with numbers and results.",
      "**Online tests.** Numerical (reading tables, percentages, proportions), logical, sometimes language ones. They are solved quickly, against the clock.",
      "**The first interview** with an analyst or associate: telling your story, motivation, basic technical questions.",
      "**The second and final** with a VP or director, sometimes several in a row (a Superday or Assessment Centre): technicals, cases, behavioural questions, group exercises."
    ]],
    ['h', 'Technical questions by topic'],
    ['ul', [
      "**Accounting:** the three statements and their links, the effect of transactions on the statements, DSO, working capital.",
      "**Valuation:** EV and Equity Value, DCF, WACC, multiples, comps and precedents.",
      "**M&A:** accretion/dilution, the sale process, synergies, deal types.",
      "**LBO:** structure, returns, candidates.",
      "**Markets:** current events, rates, a favourite stock, a recent deal."
    ]],
    ['h', 'How to answer “Walk me through…”'],
    ['p', "The structure: definition, steps, conclusion and meaning. For example, about a DCF: what it is (valuation from flows), the steps (forecast, Terminal Value, discounting, EV), the conclusion (we subtract debt and get the share price) and when the method is good or weak. Speak confidently and in order, do not jump around."],
    ['h', 'Behavioural questions'],
    ['ul', [
      "**Walk me through your CV.** Two minutes, a chronology and two or three threads that lead to IB.",
      "**Why investment banking?** Specific reasons: intellectual work, learning, responsibility, markets. Not “money” and not “prestige”.",
      "**Why this bank?** Two or three reasons based on real information (deals, team, sector).",
      "**Strengths and weaknesses.** A real weakness, with the steps you take to fix it.",
      "**Teamwork, failure, stress.** Use the STAR structure: Situation, Task, Action, Result."
    ]],
    ['h', 'Mental maths and speed'],
    ['p', "Learn to calculate percentages, fractions, multiplication and division in your head, especially operations like “30% of 450”, “growth from 120 to 150”, “EV from a multiple and EBITDA”. Get used to saying the answer out loud and checking the order of magnitude."],
    ['h', 'What to do if you do not know the answer'],
    ['ul', [
      "Do not go silent: think out loud, it shows your logic.",
      "Break it into parts and clarify the conditions.",
      "Do not make up numbers and facts. “I'm not sure, but the logic is…” sounds better than a confident mistake.",
      "If you made a mistake, calmly admit it and correct yourself."
    ]],
    ['h', 'Preparing for markets and deals'],
    ['p', "Read the key news daily (deals, rates, results). Prepare two or three deals that you have studied: the parties, multiples, logic, form of payment, your opinion on the price. A question about a recent deal is almost guaranteed."],
    ['h', 'Points for international candidates'],
    ['p', "If you study abroad and your German is at B2 level, be ready in advance to talk about the language directly: state your level, say how you are improving it and show that your working English is strong. Many international teams in Germany work in English. Handle questions about a work permit calmly and honestly: it is a standard procedure, and companies that hire international students are familiar with it."],
    ['h', 'A four-week preparation plan'],
    ['ol', [
      "**Week 1.** Accounting and the three statements, EV and Equity Value, multiples. The daily plan in Mandate.",
      "**Week 2.** DCF, WACC, comps. Interview mode once a day.",
      "**Week 3.** M&A, accretion/dilution, LBO. Two deals to discuss.",
      "**Week 4.** Review of weak topics, behavioural answers out loud, a mock interview with a friend."
    ]],
    ['h', 'Questions worth asking the interviewer'],
    ['ul', [
      "What does a typical day of an analyst in your team look like?",
      "Which deals has the team worked on recently (within what is public)?",
      "How is the training of new joiners organised?",
      "What distinguishes successful analysts in their first year?"
    ]],
    ['q', "Tell me about yourself.", "Two minutes: education and key experience, what led to your interest in IB (specific skills and events), why this role is the next step now and why this firm."],
    ['q', "Why should we hire you?", "Name three specific strengths backed by examples: analytical training, knowledge of finance, motivation and speed of learning. If there is a weak spot (language, experience), show how you are closing it."],
    ['key', "In an interview structure, speed and honesty are valued. Prepare the technicals by topic, behavioural answers using the STAR scheme, two or three studied deals and your own questions. If you do not know an answer, think out loud rather than making something up."]
  ] };
