export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  sector: string;
  service: string;
  slug: string;
}

export const caseStudies: CaseStudy[] = [
  
  {"id":78,"sector":"Technology","service":"Strategy Consulting","title":"Strategic Transformation for Tech Scale","description":"Technology company achieved strong growth but faced strategic challenges in scaling operations and market positioning.","slug":"78"},
  {"id":77,"sector":"Technology","service":"GTM & Funnels","title":"GTM Optimization for Market Expansion","description":"Technology startup needed to optimize go-to-market strategy for rapid expansion into new markets.","slug":"77"},
  {"id":76,"sector":"Technology","service":"Fund Raising","title":"Growth Capital Raise for Tech Innovation","description":"Innovative technology company required strategic positioning for successful growth capital raise.","slug":"76"},
  {"id":75,"sector":"Technology","service":"Signal Architecture","title":"Signal Reset for Technology Leadership","description":"Technology platform needed to reposition market signal to establish category leadership.","slug":"75"},
  {"id":74,"sector":"BFSI","service":"Strategy Consulting","title":"Strategic Clarity for Financial Services","description":"Financial services company required strategic reset to navigate regulatory challenges and market dynamics.","slug":"74"},
  {"id":73,"sector":"BFSI","service":"GTM & Funnels","title":"Enterprise GTM for Financial Technology","description":"Fintech platform needed enterprise-grade GTM strategy to accelerate institutional adoption.","slug":"73"},
  {"id":72,"sector":"BFSI","service":"Fund Raising","title":"Series B Raise for Fintech Growth","description":"Fintech company positioned for Series B raise through strategic signal architecture.","slug":"72"},
  {"id":71,"sector":"BFSI","service":"Signal Architecture","title":"Compliance Signal for Financial Trust","description":"Financial technology startup leveraged compliance as strategic signal for market credibility.","slug":"71"},
  {"id":70,"sector":"Healthcare & Pharma","service":"Strategy Consulting","title":"Healthcare Strategy for Market Leadership","description":"Healthcare company developed strategic framework for sustainable competitive advantage.","slug":"70"},
  {"id":69,"sector":"Healthcare & Pharma","service":"GTM & Funnels","title":"Clinical Adoption Funnel Design","description":"Medtech company optimized GTM funnel for accelerated clinical adoption.","slug":"69"},
  {"id":68,"sector":"Healthcare & Pharma","service":"Fund Raising","title":"Growth Capital for Healthcare Innovation","description":"Healthcare technology company secured growth capital through strategic positioning.","slug":"68"},
  {"id":67,"sector":"Healthcare & Pharma","service":"Signal Architecture","title":"Clinical Proof as Market Signal","description":"Healthcare startup transformed clinical validation into compelling market signal.","slug":"67"},
  {"id":66,"sector":"DeepTech & AI","service":"Strategy Consulting","title":"AI Strategy for Commercial Scale","description":"AI company developed strategic roadmap for commercial scale and market adoption.","slug":"66"},
  {"id":65,"sector":"DeepTech & AI","service":"GTM & Funnels","title":"Enterprise AI Adoption Framework","description":"DeepTech AI platform designed GTM framework for enterprise adoption.","slug":"65"},
  {"id":64,"sector":"DeepTech & AI","service":"Fund Raising","title":"AI Infrastructure Funding Strategy","description":"AI infrastructure startup positioned for successful funding through strategic narrative.","slug":"64"},
  {"id":63,"sector":"DeepTech & AI","service":"Signal Architecture","title":"Technical Excellence as Market Signal","description":"DeepTech company transformed technical capabilities into market credibility.","slug":"63"},
  {"id":62,"sector":"Consumer Products","service":"Strategy Consulting","title":"Brand Strategy for Consumer Scale","description":"Consumer brand developed strategic framework for sustainable growth and market expansion.","slug":"62"},
  {"id":61,"sector":"Consumer Products","service":"GTM & Funnels","title":"D2C Funnel Optimization","description":"Consumer products company optimized D2C funnels for improved conversion and retention.","slug":"61"},
  {"id":60,"sector":"Consumer Products","service":"Fund Raising","title":"Brand Capital Raise Strategy","description":"Consumer brand positioned for growth capital through brand velocity signals.","slug":"60"},
  {"id":59,"sector":"Consumer Products","service":"Signal Architecture","title":"Brand Signal for Market Differentiation","description":"Consumer products startup established distinctive brand signal in crowded market.","slug":"59"},
  {"id":58,"sector":"Defense","service":"Strategy Consulting","title":"Defense Strategy for Market Entry","description":"Defense technology company developed strategic approach for market entry and scaling.","slug":"58"},
  {"id":57,"sector":"Defense","service":"GTM & Funnels","title":"Defense Procurement GTM","description":"Defense startup designed GTM strategy for complex procurement cycles.","slug":"57"},
  {"id":56,"sector":"Defense","service":"Fund Raising","title":"Defense Technology Capital Strategy","description":"Defense manufacturer positioned for growth capital through strategic credibility.","slug":"56"},
  {"id":55,"sector":"Defense","service":"Signal Architecture","title":"Mission-Ready Signal Design","description":"Defense technology company established mission-ready credibility signal.","slug":"55"},
  {"id":54,"sector":"Real Estate","service":"Strategy Consulting","title":"Real Estate Strategy for Growth","description":"Real estate developer created strategic framework for sustainable expansion.","slug":"54"},
  {"id":53,"sector":"Real Estate","service":"GTM & Funnels","title":"Real Estate Sales Velocity","description":"Property developer optimized sales funnels for improved conversion velocity.","slug":"53"},
  {"id":52,"sector":"Real Estate","service":"Fund Raising","title":"Real Estate Capital Strategy","description":"Real estate company positioned for growth capital through community proof.","slug":"52"},
  {"id":51,"sector":"Real Estate","service":"Signal Architecture","title":"Developer Credibility Signal","description":"Real estate developer established market credibility through strategic signal design.","slug":"51"},
  {"id":50,"sector":"Technology","service":"Strategy Consulting","title":"SaaS Strategy for Enterprise Scale","description":"SaaS platform developed strategic framework for enterprise market penetration.","slug":"50"},
  {"id":49,"sector":"AI Sub-Sector","service":"Signal Architecture","title":"Architecting Inevitability in AI Infrastructure","description":"AI infrastructure startup had built a technically superior stack—distributed compute orchestration, model-agnostic pipelines, and cost-efficient inference layers. Early pilots were promising. Engineers were impressed. Investors were not.","slug":"49"},
  {
    "id": 48,
    "sector": "BFSI",
    "service": "Strategy Consulting",
    "title": "Strategic Clarity for BFSI Scale",
    "description": "Fintech company raised solid Series A and achieved steady transaction growth. But as they prepared for Series B, investors flagged strategic drift. Trying to expand into lending, insurance aggregation, and cross-border payments all at once.",
    "slug": "48"
  },
  {
    "id": 47,
    "sector": "BFSI",
    "service": "GTM & Funnels",
    "title": "Funnel Architecture That Won Institutional Partners",
    "description": "Fintech company with regulatory clearance and strong technology struggling to scale integrations with banks and insurers. GTM looked like startup sales engine — cold outreach, product demos.",
    "slug": "47"
  },
  {
    "id": 46,
    "sector": "BFSI",
    "service": "Fund Raising",
    "title": "$12M Raise Anchored on Compliance Signal",
    "description": "Fintech startup had strong technology and growing transaction volumes. Yet when pitching to investors, dismissed as \"one of many wallets and payments startups.\" Even though they had licenses, compliance approvals, and banking integrations.",
    "slug": "46"
  },
  {
    "id": 45,
    "sector": "BFSI",
    "service": "Signal Architecture",
    "title": "Signal Reset for BFSI Trust",
    "description": "Fintech startup developed payments solution with strong tech fundamentals and compliance approvals. Yet adoption lagged. Banks saw them as \"just another wallet,\" investors considered them risky and redundant in a crowded space.",
    "slug": "45"
  },
  {
    "id": 44,
    "sector": "DeepTech & AI",
    "service": "Strategy Consulting",
    "title": "Strategic Reset for AI Infrastructure Scale",
    "description": "AI infrastructure startup achieved strong early traction with enterprise pilots and $6M Series A. However, growth plateaued. Chasing multiple use cases — telecom, finance, logistics — without dominance in any vertical.",
    "slug": "44"
  },
  {
    "id": 43,
    "sector": "DeepTech & AI",
    "service": "GTM & Funnels",
    "title": "GTM Re-architecture for AI Infrastructure Adoption",
    "description": "DeepTech AI infrastructure startup solved real problem: cutting compute costs for enterprises by 40%. Yet their GTM funnel wasn't moving. Pilots stretched endlessly, with no conversions into contracts.",
    "slug": "43"
  },
  {
    "id": 42,
    "sector": "DeepTech & AI",
    "service": "Fund Raising",
    "title": "$7.2M Raise for UAV DeepTech",
    "description": "UAV company specializing in reconnaissance missions had highly capable prototypes with strong test results. But fundraising stalled. Investors flagged \"long GTM timelines\" (2030), regulatory hurdles.",
    "slug": "42"
  },
  {
    "id": 41,
    "sector": "DeepTech & AI",
    "service": "Signal Architecture",
    "title": "Turning DeepTech Complexity Into Market Signal",
    "description": "DeepTech startup developed breakthrough in AI-driven data compression for satellite communication. Technology worked — cut transmission costs by 70%. But outside the lab, the narrative collapsed.",
    "slug": "41"
  },
  {
    "id": 40,
    "sector": "Healthcare & Pharma",
    "service": "Strategy Consulting",
    "title": "Strategy Reset for Healthcare Scale",
    "description": "Healthcare services company with proven diagnostics platform raised Series A successfully but struggled to convert momentum into scale. Trying to do everything at once — new geographies, product expansions, partnerships.",
    "slug": "40"
  },
  {
    "id": 39,
    "sector": "Healthcare & Pharma",
    "service": "GTM & Funnels",
    "title": "Funnel Redesign for Hospital Adoption",
    "description": "Medtech company developed cutting-edge diagnostics device that reduced test turnaround by 70%. Despite strong clinical validation, adoption among hospitals remained slow.",
    "slug": "39"
  },
  {
    "id": 38,
    "sector": "Healthcare & Pharma",
    "service": "Fund Raising",
    "title": "Clinical Proof Converted Into $15M Growth Capital",
    "description": "Healthcare technology company validated its diagnostic solution with strong clinical trial data. Hospitals loved the science but adoption remained slow. Investors categorized them as \"early research play.\"",
    "slug": "38"
  },
  {
    "id": 37,
    "sector": "Healthcare & Pharma",
    "service": "Signal Architecture",
    "title": "Signal Reset for Healthcare Credibility",
    "description": "Healthtech startup developed diagnostic platform with strong clinical results. Despite medical validation, failed to move investors and large hospital chains. Market saw them as \"another startup with tech claims.\"",
    "slug": "37"
  },
  {
    "id": 36,
    "sector": "Consumer Products",
    "service": "Strategy Consulting",
    "title": "Strategic Reset to Escape the Commodity Trap",
    "description": "Consumer products startup built traction online and was raising attention from retailers. But growth began stalling. Chased too many SKUs, entered multiple geographies. Investors flagged lack of clarity: \"Are you a brand or a discount engine?\"",
    "slug": "36"
  },
  {
    "id": 35,
    "sector": "Consumer Products",
    "service": "GTM & Funnels",
    "title": "Funnel Re-architecture to Scale Consumer Sales",
    "description": "Consumer products startup built strong word-of-mouth traction online but struggled to scale through structured funnels. Customer acquisition relied heavily on discounts and paid ads, driving volumes but eroding margins.",
    "slug": "35"
  },
  {
    "id": 34,
    "sector": "Consumer Products",
    "service": "Fund Raising",
    "title": "Brand Signal Unlocks $8M Growth Raise",
    "description": "Consumer products startup built strong traction in metros through digital channels. Investors dismissed them as \"another D2C play\" with no defensible edge.",
    "slug": "34"
  },
  {
    "id": 33,
    "sector": "Consumer Products",
    "service": "Signal Architecture",
    "title": "Signal Reset for a D2C Brand",
    "description": "D2C brand built online following, but despite strong reviews, sales growth flattened. Competitors with noisier marketing overtaking. Investors saw them as \"another lifestyle product.\"",
    "slug": "33"
  },
  {
    "id": 32,
    "sector": "Technology",
    "service": "Strategy Consulting",
    "title": "Strategic Focus for a Scattered SaaS Startup",
    "description": "SaaS startup raised strong Series A, expanded aggressively into three geographies and five product lines. Growth uneven, margins eroding, investors pressed for clarity.",
    "slug": "32"
  },
  {
    "id": 31,
    "sector": "Technology",
    "service": "GTM & Funnels",
    "title": "Funnel Recalibration to Collapse SaaS Cycles",
    "description": "SaaS platform serving mid-market enterprises had solid pilots but struggled to scale into enterprise contracts. Sales cycles dragged on for 12–18 months.",
    "slug": "31"
  },
  {
    "id": 30,
    "sector": "Technology",
    "service": "Fund Raising",
    "title": "$6M Raise on Ecosystem Inevitability",
    "description": "B2B SaaS platform had strong pilots with mid-market customers but struggled in investor conversations. VCs categorized it as \"one of many SaaS plays.\"",
    "slug": "30"
  },
  {
    "id": 29,
    "sector": "Technology",
    "service": "Signal Architecture",
    "title": "From Features to Framework — Tech as Signal",
    "description": "B2B technology platform with strong engineering capabilities and rich feature set. But customers saw it as \"just another SaaS tool.\" Investors lumped them with commodity players.",
    "slug": "29"
  },
  {
    "id": 28,
    "sector": "Defense",
    "service": "Strategy Consulting",
    "title": "Strategic Reset for Defense Scale",
    "description": "Defense technology company won several pilots and early contracts. But scaling across geographies and agencies proving impossible. Investors flagged \"slow velocity.\"",
    "slug": "28"
  },
  {
    "id": 27,
    "sector": "Defense",
    "service": "GTM & Funnels",
    "title": "GTM Architecture for Defense Contracts",
    "description": "Defense startup with breakthrough UAV system won pilot trials but struggled to scale into multi-year contracts. Procurement saw them as \"good technology, not yet mission-ready.\"",
    "slug": "27"
  },
  {
    "id": 26,
    "sector": "Defense",
    "service": "Fund Raising",
    "title": "From Prototype to $23M Raise",
    "description": "Defense manufacturer building embedded systems for critical military hardware had proven technology and initial traction. VCs considered defense \"too slow,\" \"too political,\" and \"too capital-intensive.\"",
    "slug": "26"
  },
  {
    "id": 25,
    "sector": "Defense",
    "service": "Signal Architecture",
    "title": "Signal Design for Defense Credibility",
    "description": "Defense technology startup developed embedded systems for UAV reconnaissance. Prototypes worked well, but adoption stalled. Perceived as \"early-stage, untested.\"",
    "slug": "25"
  },
  {
    "id": 24,
    "sector": "Real Estate",
    "service": "Strategy Consulting",
    "title": "Strategic Reset for a Stalled Developer",
    "description": "Regional developer with multiple mid-scale projects stalled expansion. Cash flows uneven, brand recognition weak, investor confidence slipping.",
    "slug": "24"
  },
  {
    "id": 23,
    "sector": "Real Estate",
    "service": "GTM & Funnels",
    "title": "Velocity Funnels for Real Estate Sales",
    "description": "Premium residential projects built, but sales cycles painfully slow. Marketing brought traffic but not conversions. Brokers controlled narrative, eroding margins.",
    "slug": "23"
  },
  {
    "id": 22,
    "sector": "Real Estate",
    "service": "Fund Raising",
    "title": "Community Proof → Capital Proof",
    "description": "Mid-sized real estate developer completed two successful residential projects but failed to attract investors for scaling.",
    "slug": "22"
  },
  {
    "id": 21,
    "sector": "Real Estate",
    "service": "Signal Architecture",
    "title": "From Commodity to Credibility — The Real Estate Signal",
    "description": "Mid-sized real estate developer had completed multiple residential projects but struggled to stand out. Buyers saw them as \"one of many.\"",
    "slug": "21"
  },
  {
    "id": 20,
    "sector": "BFSI",
    "service": "Strategy Consulting",
    "title": "Clarity in Chaos — A Fintech's Strategic Reset",
    "description": "High-growth fintech scaled rapidly across two regions, but growth momentum stalled. Experimenting with multiple products without clear anchor.",
    "slug": "20"
  },
  {
    "id": 19,
    "sector": "BFSI",
    "service": "GTM & Funnels",
    "title": "Enterprise GTM Through Trust-First Funnels",
    "description": "Strong payments solution for SMEs ready to enter enterprise BFSI. But enterprise banks and insurers refused to engage. Perception: \"Unproven, too small, not compliant enough.\"",
    "slug": "19"
  },
  {
    "id": 18,
    "sector": "BFSI",
    "service": "Fund Raising",
    "title": "Compliance as Credibility — The Raise",
    "description": "Robust adoption in retail and SME segments. But Series B investors hesitated—doubted ability to remain compliant in heavily regulated sector.",
    "slug": "18"
  },
  {
    "id": 17,
    "sector": "BFSI",
    "service": "Signal Architecture",
    "title": "Trust Signal in a Regulated Market",
    "description": "Robust digital payments platform with strong adoption. Yet, banks and regulators perceived them as \"too risky\" and \"unproven.\"",
    "slug": "17"
  },
  {
    "id": 16,
    "sector": "DeepTech & AI",
    "service": "Strategy Consulting",
    "title": "Frontier Positioning & Partner Thesis",
    "description": "Strong Series A raised, but growth stalled. The market couldn't understand: platform, tool, or infrastructure? Partners struggled to see alignment value.",
    "slug": "16"
  },
  {
    "id": 15,
    "sector": "DeepTech & AI",
    "service": "GTM & Funnels",
    "title": "Pilot-First GTM That Collapsed Enterprise Cycles",
    "description": "Breakthrough AI-driven hardware platform. Enterprise customers unwilling to commit without proof. Traditional GTM dragged—sales cycles exceeding 12–15 months.",
    "slug": "15"
  },
  {
    "id": 14,
    "sector": "DeepTech & AI",
    "service": "Fund Raising",
    "title": "Pre-Product, Proof-Led $4M Seed Raise",
    "description": "The AI company had deep technical talent and patents but no live product or revenue. Every investor pushed back: \"Come back after you build.\"",
    "slug": "14"
  },
  {
    "id": 13,
    "sector": "DeepTech & AI",
    "service": "Signal Architecture",
    "title": "From Lab to Legibility — The AI Signal",
    "description": "Groundbreaking AI research and patents, but zero commercial traction. Investors: \"Impressive tech, but too early.\"",
    "slug": "13"
  },
  {
    "id": 12,
    "sector": "Healthcare & Pharma",
    "service": "Strategy Consulting",
    "title": "Market Access Strategy as Signal",
    "description": "Fragmented market access across geographies diluted inevitability. We built a signal-led strategy—multi-market expansion became inevitable.",
    "slug": "12"
  },
  {
    "id": 11,
    "sector": "Healthcare & Pharma",
    "service": "GTM & Funnels",
    "title": "HCP Adoption Sprint with Evidence Anchors",
    "description": "Validated but stuck. Healthcare professionals (HCPs) hesitated to change workflows. We designed a Signal-led GTM funnel—adoption velocity tripled.",
    "slug": "11"
  },
  {
    "id": 10,
    "sector": "Healthcare & Pharma",
    "service": "Fund Raising",
    "title": "Regulatory Milestones as Raise Signal",
    "description": "A digital therapeutics company faced investor skepticism: \"Too early—come back after approvals.\" Stuck without capital to fund milestones.",
    "slug": "10"
  },
  {
    "id": 9,
    "sector": "Healthcare & Pharma",
    "service": "Signal Architecture",
    "title": "Clinical Proof to Market Belief",
    "description": "Promising clinical trial results, but the market didn't believe. We re-architected the Signal Framework to translate proof into credibility—activating investors and hospitals.",
    "slug": "9"
  },
  {
    "id": 8,
    "sector": "Consumer Products",
    "service": "Strategy Consulting",
    "title": "Pricing & Assortment as Signal",
    "description": "Bloated catalog, inconsistent pricing, eroding brand value. We cut 40% of SKUs and reset pricing as inevitability signals—transforming perception and margins.",
    "slug": "8"
  },
  {
    "id": 7,
    "sector": "Consumer Products",
    "service": "GTM & Funnels",
    "title": "Drop-Based Scarcity That Doubled LTV",
    "description": "Loyal buyers, but retention curves flattening. We designed a Signal-first funnel with drop-based scarcity, doubling LTV and transforming the brand into insider culture.",
    "slug": "7"
  },
  {
    "id": 6,
    "sector": "Consumer Products",
    "service": "Fund Raising",
    "title": "Brand Velocity → Capital Velocity",
    "description": "Investors saw viral buzz, not scalable growth. We reframed the raise with brand velocity as the lead capital signal, closing USD 6M at 40% higher valuation.",
    "slug": "6"
  },
  {
    "id": 5,
    "sector": "Consumer Products",
    "service": "Signal Architecture",
    "title": "Packaging the Promise — Shelf Signal that Sells",
    "description": "Strong repeat buyers online, invisible in retail. We rebuilt their Signal Architecture for visibility and inevitability—turning shelf presence into market movement.",
    "slug": "5"
  },
  {
    "id": 4,
    "sector": "Technology",
    "service": "Strategy Consulting",
    "title": "Quarterly Sprint — Roadmap to Movement",
    "description": "Series A fresh, but growth stalled. We installed a Signal-Driven Strategy Sprint model that turned scattered execution into decisive quarterly movement.",
    "slug": "4"
  },
  {
    "id": 3,
    "sector": "Technology",
    "service": "GTM & Funnels",
    "title": "Proof-Led Enterprise Entry in 90 Days",
    "description": "A SaaS company with solid mid-market traction couldn't penetrate enterprise. We architected a Signal-first GTM Sprint for rapid enterprise adoption.",
    "slug": "3"
  },
  {
    "id": 2,
    "sector": "Technology",
    "service": "Fund Raising",
    "title": "Retention as Proof — Seed Closed on NRR",
    "description": "Investors were unimpressed with topline growth. We reframed the raise around Net Revenue Retention as inevitability proof, closing USD 1.3M.",
    "slug": "2"
  },
  {
    "id": 1,
    "sector": "Technology",
    "service": "Signal Architecture",
    "title": "From \"Tool\" to \"Standard\" — The SaaS Reframe",
    "description": "Strong mid-market adoption couldn't break into enterprise. We rebuilt their Signal Architecture around inevitability, reframing from tool to standard.",
    "slug": "1"
  }
];
