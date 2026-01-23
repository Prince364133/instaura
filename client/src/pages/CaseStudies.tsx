import { useState, useEffect } from "react";
import { Link } from "wouter";
import { FileText } from "lucide-react";

interface CaseStudy {
  id: number;
  sector: string;
  service: string;
  title: string;
  description: string;
  slug: string;
}

const caseStudies: CaseStudy[] = [
  // Cards from DOCX  38-48
  {
    id: 48,
    sector: "BFSI",
    service: "Strategy Consulting",
    title: "Strategic Clarity for BFSI Scale",
    description: "Fintech company raised solid Series A and achieved steady transaction growth. But as they prepared for Series B, investors flagged strategic drift. Trying to expand into lending, insurance aggregation, and cross-border payments all at once.",
    slug: "48"
  },
  {
    id: 47,
    sector: "BFSI",
    service: "GTM & Funnels",
    title: "Funnel Architecture That Won Institutional Partners",
    description: "Fintech company with regulatory clearance and strong technology struggling to scale integrations with banks and insurers. GTM looked like startup sales engine — cold outreach, product demos.",
    slug: "47"
  },
  {
    id: 46,
    sector: "BFSI",
    service: "Fund Raising",
    title: "$12M Raise Anchored on Compliance Signal",
    description: "Fintech startup had strong technology and growing transaction volumes. Yet when pitching to investors, dismissed as \"one of many wallets and payments startups.\" Even though they had licenses, compliance approvals, and banking integrations.",
    slug: "46"
  },
  {
    id: 45,
    sector: "BFSI",
    service: "Signal Architecture",
    title: "Signal Reset for BFSI Trust",
    description: "Fintech startup developed payments solution with strong tech fundamentals and compliance approvals. Yet adoption lagged. Banks saw them as \"just another wallet,\" investors considered them risky and redundant in a crowded space.",
    slug: "45"
  },
  {
    id: 44,
    sector: "DeepTech & AI",
    service: "Strategy Consulting",
    title: "Strategic Reset for AI Infrastructure Scale",
    description: "AI infrastructure startup achieved strong early traction with enterprise pilots and $6M Series A. However, growth plateaued. Chasing multiple use cases — telecom, finance, logistics — without dominance in any vertical.",
    slug: "44"
  },
  {
    id: 43,
    sector: "DeepTech & AI",
    service: "GTM & Funnels",
    title: "GTM Re-architecture for AI Infrastructure Adoption",
    description: "DeepTech AI infrastructure startup solved real problem: cutting compute costs for enterprises by 40%. Yet their GTM funnel wasn't moving. Pilots stretched endlessly, with no conversions into contracts.",
    slug: "43"
  },
  {
    id: 42,
    sector: "DeepTech & AI",
    service: "Fund Raising",
    title: "$7.2M Raise for UAV DeepTech",
    description: "UAV company specializing in reconnaissance missions had highly capable prototypes with strong test results. But fundraising stalled. Investors flagged \"long GTM timelines\" (2030), regulatory hurdles.",
    slug: "42"
  },
  {
    id: 41,
    sector: "DeepTech & AI",
    service: "Signal Architecture",
    title: "Turning DeepTech Complexity Into Market Signal",
    description: "DeepTech startup developed breakthrough in AI-driven data compression for satellite communication. Technology worked — cut transmission costs by 70%. But outside the lab, the narrative collapsed.",
    slug: "41"
  },
  {
    id: 40,
    sector: "Healthcare & Pharma",
    service: "Strategy Consulting",
    title: "Strategy Reset for Healthcare Scale",
    description: "Healthcare services company with proven diagnostics platform raised Series A successfully but struggled to convert momentum into scale. Trying to do everything at once — new geographies, product expansions, partnerships.",
    slug: "40"
  },
  {
    id: 39,
    sector: "Healthcare & Pharma",
    service: "GTM & Funnels",
    title: "Funnel Redesign for Hospital Adoption",
    description: "Medtech company developed cutting-edge diagnostics device that reduced test turnaround by 70%. Despite strong clinical validation, adoption among hospitals remained slow.",
    slug: "39"
  },
  {
    id: 38,
    sector: "Healthcare & Pharma",
    service: "Fund Raising",
    title: "Clinical Proof Converted Into $15M Growth Capital",
    description: "Healthcare technology company validated its diagnostic solution with strong clinical trial data. Hospitals loved the science but adoption remained slow. Investors categorized them as \"early research play.\"",
    slug: "38"
  },
  {
    id: 37,
    sector: "Healthcare & Pharma",
    service: "Signal Architecture",
    title: "Signal Reset for Healthcare Credibility",
    description: "Healthtech startup developed diagnostic platform with strong clinical results. Despite medical validation, failed to move investors and large hospital chains. Market saw them as \"another startup with tech claims.\"",
    slug: "37"
  },
  {
    id: 36,
    sector: "Consumer Products",
    service: "Strategy Consulting",
    title: "Strategic Reset to Escape the Commodity Trap",
    description: "Consumer products startup built traction online and was raising attention from retailers. But growth began stalling. Chased too many SKUs, entered multiple geographies. Investors flagged lack of clarity: \"Are you a brand or a discount engine?\"",
    slug: "36"
  },
  {
    id: 35,
    sector: "Consumer Products",
    service: "GTM & Funnels",
    title: "Funnel Re-architecture to Scale Consumer Sales",
    description: "Consumer products startup built strong word-of-mouth traction online but struggled to scale through structured funnels. Customer acquisition relied heavily on discounts and paid ads, driving volumes but eroding margins.",
    slug: "35"
  },
  {
    id: 34,
    sector: "Consumer Products",
    service: "Fund Raising",
    title: "Brand Signal Unlocks $8M Growth Raise",
    description: "Consumer products startup built strong traction in metros through digital channels. Investors dismissed them as \"another D2C play\" with no defensible edge.",
    slug: "34"
  },
  {
    id: 33,
    sector: "Consumer Products",
    service: "Signal Architecture",
    title: "Signal Reset for a D2C Brand",
    description: "D2C brand built online following, but despite strong reviews, sales growth flattened. Competitors with noisier marketing overtaking. Investors saw them as \"another lifestyle product.\"",
    slug: "33"
  },
  {
    id: 32,
    sector: "Technology",
    service: "Strategy Consulting",
    title: "Strategic Focus for a Scattered SaaS Startup",
    description: "SaaS startup raised strong Series A, expanded aggressively into three geographies and five product lines. Growth uneven, margins eroding, investors pressed for clarity.",
    slug: "32"
  },
  {
    id: 31,
    sector: "Technology",
    service: "GTM & Funnels",
    title: "Funnel Recalibration to Collapse SaaS Cycles",
    description: "SaaS platform serving mid-market enterprises had solid pilots but struggled to scale into enterprise contracts. Sales cycles dragged on for 12–18 months.",
    slug: "31"
  },
  {
    id: 30,
    sector: "Technology",
    service: "Fund Raising",
    title: "$6M Raise on Ecosystem Inevitability",
    description: "B2B SaaS platform had strong pilots with mid-market customers but struggled in investor conversations. VCs categorized it as \"one of many SaaS plays.\"",
    slug: "30"
  },
  {
    id: 29,
    sector: "Technology",
    service: "Signal Architecture",
    title: "From Features to Framework — Tech as Signal",
    description: "B2B technology platform with strong engineering capabilities and rich feature set. But customers saw it as \"just another SaaS tool.\" Investors lumped them with commodity players.",
    slug: "29"
  },
  {
    id: 28,
    sector: "Defense",
    service: "Strategy Consulting",
    title: "Strategic Reset for Defense Scale",
    description: "Defense technology company won several pilots and early contracts. But scaling across geographies and agencies proving impossible. Investors flagged \"slow velocity.\"",
    slug: "28"
  },
  {
    id: 27,
    sector: "Defense",
    service: "GTM & Funnels",
    title: "GTM Architecture for Defense Contracts",
    description: "Defense startup with breakthrough UAV system won pilot trials but struggled to scale into multi-year contracts. Procurement saw them as \"good technology, not yet mission-ready.\"",
    slug: "27"
  },
  {
    id: 26,
    sector: "Defense",
    service: "Fund Raising",
    title: "From Prototype to $23M Raise",
    description: "Defense manufacturer building embedded systems for critical military hardware had proven technology and initial traction. VCs considered defense \"too slow,\" \"too political,\" and \"too capital-intensive.\"",
    slug: "26"
  },
  {
    id: 25,
    sector: "Defense",
    service: "Signal Architecture",
    title: "Signal Design for Defense Credibility",
    description: "Defense technology startup developed embedded systems for UAV reconnaissance. Prototypes worked well, but adoption stalled. Perceived as \"early-stage, untested.\"",
    slug: "25"
  },
  {
    id: 24,
    sector: "Real Estate",
    service: "Strategy Consulting",
    title: "Strategic Reset for a Stalled Developer",
    description: "Regional developer with multiple mid-scale projects stalled expansion. Cash flows uneven, brand recognition weak, investor confidence slipping.",
    slug: "24"
  },
  {
    id: 23,
    sector: "Real Estate",
    service: "GTM & Funnels",
    title: "Velocity Funnels for Real Estate Sales",
    description: "Premium residential projects built, but sales cycles painfully slow. Marketing brought traffic but not conversions. Brokers controlled narrative, eroding margins.",
    slug: "23"
  },
  {
    id: 22,
    sector: "Real Estate",
    service: "Fund Raising",
    title: "Community Proof → Capital Proof",
    description: "Mid-sized real estate developer completed two successful residential projects but failed to attract investors for scaling.",
    slug: "22"
  },
  {
    id: 21,
    sector: "Real Estate",
    service: "Signal Architecture",
    title: "From Commodity to Credibility — The Real Estate Signal",
    description: "Mid-sized real estate developer had completed multiple residential projects but struggled to stand out. Buyers saw them as \"one of many.\"",
    slug: "21"
  },
  {
    id: 20,
    sector: "BFSI",
    service: "Strategy Consulting",
    title: "Clarity in Chaos — A Fintech's Strategic Reset",
    description: "High-growth fintech scaled rapidly across two regions, but growth momentum stalled. Experimenting with multiple products without clear anchor.",
    slug: "20"
  },
  {
    id: 19,
    sector: "BFSI",
    service: "GTM & Funnels",
    title: "Enterprise GTM Through Trust-First Funnels",
    description: "Strong payments solution for SMEs ready to enter enterprise BFSI. But enterprise banks and insurers refused to engage. Perception: \"Unproven, too small, not compliant enough.\"",
    slug: "19"
  },
  {
    id: 18,
    sector: "BFSI",
    service: "Fund Raising",
    title: "Compliance as Credibility — The Raise",
    description: "Robust adoption in retail and SME segments. But Series B investors hesitated—doubted ability to remain compliant in heavily regulated sector.",
    slug: "18"
  },
  {
    id: 17,
    sector: "BFSI",
    service: "Signal Architecture",
    title: "Trust Signal in a Regulated Market",
    description: "Robust digital payments platform with strong adoption. Yet, banks and regulators perceived them as \"too risky\" and \"unproven.\"",
    slug: "17"
  },
  {
    id: 16,
    sector: "DeepTech & AI",
    service: "Strategy Consulting",
    title: "Frontier Positioning & Partner Thesis",
    description: "Strong Series A raised, but growth stalled. The market couldn't understand: platform, tool, or infrastructure? Partners struggled to see alignment value.",
    slug: "16"
  },
  {
    id: 15,
    sector: "DeepTech & AI",
    service: "GTM & Funnels",
    title: "Pilot-First GTM That Collapsed Enterprise Cycles",
    description: "Breakthrough AI-driven hardware platform. Enterprise customers unwilling to commit without proof. Traditional GTM dragged—sales cycles exceeding 12–15 months.",
    slug: "15"
  },
  {
    id: 14,
    sector: "DeepTech & AI",
    service: "Fund Raising",
    title: "Pre-Product, Proof-Led $4M Seed Raise",
    description: "The AI company had deep technical talent and patents but no live product or revenue. Every investor pushed back: \"Come back after you build.\"",
    slug: "14"
  },
  {
    id: 13,
    sector: "DeepTech & AI",
    service: "Signal Architecture",
    title: "From Lab to Legibility — The AI Signal",
    description: "Groundbreaking AI research and patents, but zero commercial traction. Investors: \"Impressive tech, but too early.\"",
    slug: "13"
  },
  {
    id: 12,
    sector: "Healthcare & Pharma",
    service: "Strategy Consulting",
    title: "Market Access Strategy as Signal",
    description: "Fragmented market access across geographies diluted inevitability. We built a signal-led strategy—multi-market expansion became inevitable.",
    slug: "12"
  },
  {
    id: 11,
    sector: "Healthcare & Pharma",
    service: "GTM & Funnels",
    title: "HCP Adoption Sprint with Evidence Anchors",
    description: "Validated but stuck. Healthcare professionals (HCPs) hesitated to change workflows. We designed a Signal-led GTM funnel—adoption velocity tripled.",
    slug: "11"
  },
  {
    id: 10,
    sector: "Healthcare & Pharma",
    service: "Fund Raising",
    title: "Regulatory Milestones as Raise Signal",
    description: "A digital therapeutics company faced investor skepticism: \"Too early—come back after approvals.\" Stuck without capital to fund milestones.",
    slug: "10"
  },
  {
    id: 9,
    sector: "Healthcare & Pharma",
    service: "Signal Architecture",
    title: "Clinical Proof to Market Belief",
    description: "Promising clinical trial results, but the market didn't believe. We re-architected the Signal Framework to translate proof into credibility—activating investors and hospitals.",
    slug: "9"
  },
  {
    id: 8,
    sector: "Consumer Products",
    service: "Strategy Consulting",
    title: "Pricing & Assortment as Signal",
    description: "Bloated catalog, inconsistent pricing, eroding brand value. We cut 40% of SKUs and reset pricing as inevitability signals—transforming perception and margins.",
    slug: "8"
  },
  {
    id: 7,
    sector: "Consumer Products",
    service: "GTM & Funnels",
    title: "Drop-Based Scarcity That Doubled LTV",
    description: "Loyal buyers, but retention curves flattening. We designed a Signal-first funnel with drop-based scarcity, doubling LTV and transforming the brand into insider culture.",
    slug: "7"
  },
  {
    id: 6,
    sector: "Consumer Products",
    service: "Fund Raising",
    title: "Brand Velocity → Capital Velocity",
    description: "Investors saw viral buzz, not scalable growth. We reframed the raise with brand velocity as the lead capital signal, closing USD 6M at 40% higher valuation.",
    slug: "6"
  },
  {
    id: 5,
    sector: "Consumer Products",
    service: "Signal Architecture",
    title: "Packaging the Promise — Shelf Signal that Sells",
    description: "Strong repeat buyers online, invisible in retail. We rebuilt their Signal Architecture for visibility and inevitability—turning shelf presence into market movement.",
    slug: "5"
  },
  {
    id: 4,
    sector: "Technology",
    service: "Strategy Consulting",
    title: "Quarterly Sprint — Roadmap to Movement",
    description: "Series A fresh, but growth stalled. We installed a Signal-Driven Strategy Sprint model that turned scattered execution into decisive quarterly movement.",
    slug: "4"
  },
  {
    id: 3,
    sector: "Technology",
    service: "GTM & Funnels",
    title: "Proof-Led Enterprise Entry in 90 Days",
    description: "A SaaS company with solid mid-market traction couldn't penetrate enterprise. We architected a Signal-first GTM Sprint for rapid enterprise adoption.",
    slug: "3"
  },
  {
    id: 2,
    sector: "Technology",
    service: "Fund Raising",
    title: "Retention as Proof — Seed Closed on NRR",
    description: "Investors were unimpressed with topline growth. We reframed the raise around Net Revenue Retention as inevitability proof, closing USD 1.3M.",
    slug: "2"
  },
  {
    id: 1,
    sector: "Technology",
    service: "Signal Architecture",
    title: "From \"Tool\" to \"Standard\" — The SaaS Reframe",
    description: "Strong mid-market adoption couldn't break into enterprise. We rebuilt their Signal Architecture around inevitability, reframing from tool to standard.",
    slug: "1"
  }
];

export default function CaseStudies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [filteredStudies, setFilteredStudies] = useState<CaseStudy[]>(caseStudies);

  useEffect(() => {
    const filtered = caseStudies.filter((study) => {
      const matchesSearch =
        !searchQuery ||
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.service.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSector = !selectedSector || study.sector === selectedSector;
      const matchesService = !selectedService || study.service === selectedService;

      return matchesSearch && matchesSector && matchesService;
    });

    setFilteredStudies(filtered);
  }, [searchQuery, selectedSector, selectedService]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedSector("");
    setSelectedService("");
  };

  return (
    <div className="pt-16 bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 px-6 py-3 text-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-gray-600">
          <Link href="/" className="hover:underline" data-testid="link-home">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/insights" className="hover:underline" data-testid="link-insights">
            INsights
          </Link>{" "}
          / <span className="text-gray-900 font-medium">Case Studies</span>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] font-raleway">
            Signals in Action. <span className="text-brand-red">Movements Delivered</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Redacted for confidentiality. Clear for learning. Filter by sector, service, or outcome to see how
            signal reshaped trajectories.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button
                className="bg-brand-red text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
                data-testid="button-talk-yas"
              >
                Talk to Yas
              </button>
            </Link>
            <a
              href="#library"
              className="border border-gray-900 text-gray-900 bg-white px-7 py-3 rounded-full font-semibold shadow-sm hover:bg-gray-50 transition"
              data-testid="button-browse-library"
            >
              Browse Library
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section (Pedigree) */}
      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-4 font-raleway">Our Pedigree</h2>
          <p className="text-center text-lg text-gray-700 mb-10">
            First &amp; only <span className="font-semibold">Signal-Driven Consulting Firm</span>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-extrabold text-brand-red" data-testid="stat-years">18</div>
              <div className="text-sm uppercase text-gray-500 mt-2 font-medium">Years</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-extrabold text-brand-red" data-testid="stat-clients">2500+</div>
              <div className="text-sm uppercase text-gray-500 mt-2 font-medium">Clients</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-extrabold text-brand-red" data-testid="stat-movements">250+</div>
              <div className="text-sm uppercase text-gray-500 mt-2 font-medium">Movements</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-extrabold text-brand-red" data-testid="stat-moved">$2B+</div>
              <div className="text-sm uppercase text-gray-500 mt-2 font-medium">Moved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Container for sticky behavior - stops at testimonials */}
      <div className="relative">
        {/* Search + Filters (Sticky) */}
        <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="md:col-span-2">
                <label htmlFor="cs-search" className="text-xs uppercase text-gray-500 font-medium">
                  Search
                </label>
                <input
                  id="cs-search"
                  type="search"
                  placeholder="Search by sector, service, or outcome..."
                  className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search"
                />
              </div>
              {/* Sector Filter */}
              <div>
                <label htmlFor="filter-sector" className="text-xs uppercase text-gray-500 font-medium">
                  Sector
                </label>
                <select
                  id="filter-sector"
                  className="w-full mt-1 border border-gray-300 rounded-xl px-3 py-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  data-testid="select-sector"
                >
                  <option value="">All Sectors</option>
                  <option value="Technology">Technology</option>
                  <option value="Consumer Products">Consumer Products</option>
                  <option value="Healthcare & Pharma">Healthcare &amp; Pharma</option>
                  <option value="DeepTech & AI">DeepTech &amp; AI</option>
                  <option value="BFSI">BFSI</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Defense">Defense</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Education">Education</option>
                  <option value="Energy & Infrastructure">Energy &amp; Infrastructure</option>
                </select>
              </div>
              {/* Service Filter */}
              <div>
                <label htmlFor="filter-service" className="text-xs uppercase text-gray-500 font-medium">
                  Service
                </label>
                <select
                  id="filter-service"
                  className="w-full mt-1 border border-gray-300 rounded-xl px-3 py-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  data-testid="select-service"
                >
                  <option value="">All Services</option>
                  <option value="Signal Architecture">Signal Architecture</option>
                  <option value="Fund Raising">Fund Raising</option>
                  <option value="GTM & Funnels">GTM &amp; Funnels</option>
                  <option value="Strategy Consulting">Strategy Consulting</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-semibold" data-testid="text-results-count">{filteredStudies.length}</span>{" "}
                results
              </div>
              <button
                onClick={clearFilters}
                className="inline-block border border-gray-200 px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-gray-50 hover:border-gray-300 transition-all"
                data-testid="button-clear-filters"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </section>

        {/* Library (Filterable Grid) */}
        <section id="library" className="px-6 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center font-raleway">Browse the Library</h2>
            
            {filteredStudies.length > 0 ? (
              <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStudies.map((study) => (
                  <Link 
                    key={study.id} 
                    href={`/case-studies/${study.slug}`}
                    className="group bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:border-brand-red hover:shadow-xl transition-all duration-300 cursor-pointer block no-underline"
                    data-testid={`card-case-study-${study.id}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="bg-brand-red p-1.5 rounded-lg inline-block">
                        <FileText className="w-5 h-5 text-white" />
                      </span>
                      <div className="text-xs uppercase text-gray-500 font-medium">
                        {study.sector} • {study.service}
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold group-hover:underline" data-testid={`text-title-${study.id}`}>
                      {study.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-700">{study.description}</p>
                    <span className="mt-4 inline-block text-sm text-brand-red font-semibold">
                      Read →
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="mt-10 text-center text-gray-600" data-testid="text-no-results">
                No results match your filters. Try clearing them.
              </p>
            )}
          </div>
        </section>
      </div>

      {/* Testimonials Strip */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center font-raleway">What Founders Say (Redacted)</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <blockquote className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <p className="text-lg text-gray-800">
                "We thought we had a growth problem. Turns out, we had a signal problem."
              </p>
              <div className="text-sm text-gray-500 font-medium mt-4">Founder SaaS</div>
            </blockquote>
            <blockquote className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <p className="text-lg text-gray-800">"Investors didn't believe us. Now they fight for a seat."</p>
              <div className="text-sm text-gray-500 font-medium mt-4">Co-founder DeepTech</div>
            </blockquote>
            <blockquote className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <p className="text-lg text-gray-800">"Clarity beat noise. Our motion changed within weeks."</p>
              <div className="text-sm text-gray-500 font-medium mt-4">CEO Consumer</div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Explore By Sector / Service */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* By Sector */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <div className="text-xs uppercase text-gray-500 font-medium">Explore</div>
              <h3 className="mt-2 text-2xl font-semibold font-raleway">By Sector</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link href="/verticals/technology">
                  <button className="inline-block border border-gray-200 px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-gray-50 hover:border-gray-300 transition-all" data-testid="chip-technology">
                    Technology
                  </button>
                </Link>
                <Link href="/verticals/consumer-products">
                  <button className="inline-block border border-gray-200 px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-gray-50 hover:border-gray-300 transition-all" data-testid="chip-consumer">
                    Consumer
                  </button>
                </Link>
                <Link href="/verticals/healthcare-pharma">
                  <button className="inline-block border border-gray-200 px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-gray-50 hover:border-gray-300 transition-all" data-testid="chip-healthcare">
                    Healthcare
                  </button>
                </Link>
                <Link href="/verticals/deeptech-ai">
                  <button className="inline-block border border-gray-200 px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-gray-50 hover:border-gray-300 transition-all" data-testid="chip-deeptech">
                    Deep Tech &amp; AI
                  </button>
                </Link>
                <Link href="/verticals/bfsi">
                  <button className="inline-block border border-gray-200 px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-gray-50 hover:border-gray-300 transition-all" data-testid="chip-bfsi">
                    BFSI
                  </button>
                </Link>
              </div>
            </div>
            {/* By Service */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <div className="text-xs uppercase text-gray-500 font-medium">Explore</div>
              <h3 className="mt-2 text-2xl font-semibold font-raleway">By Service</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link href="/signal-architecture">
                  <button className="inline-block border border-gray-200 px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-gray-50 hover:border-gray-300 transition-all" data-testid="chip-signal-architecture">
                    Signal Architecture
                  </button>
                </Link>
                <Link href="/fund-raising">
                  <button className="inline-block border border-gray-200 px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-gray-50 hover:border-gray-300 transition-all" data-testid="chip-fund-raising">
                    Fund Raising
                  </button>
                </Link>
                <Link href="/gtm-funnels">
                  <button className="inline-block border border-gray-200 px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-gray-50 hover:border-gray-300 transition-all" data-testid="chip-gtm-funnels">
                    GTM &amp; Funnels
                  </button>
                </Link>
                <Link href="/strategy-consulting">
                  <button className="inline-block border border-gray-200 px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-gray-50 hover:border-gray-300 transition-all" data-testid="chip-strategy-consulting">
                    Strategy Consulting
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion CTA */}
      <section className="px-6 py-20 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight font-raleway">
            Proof is signal. Signal is movement.
          </h2>
          <p className="text-gray-700 text-lg mt-5">
            These case studies aren't stories... they're evidence. If you're ready to see how signal applies to your
            context, start the conversation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button
                className="bg-brand-red text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
                data-testid="button-cta-talk-yas"
              >
                Talk to Yas
              </button>
            </Link>
            <Link href="/contact">
              <button
                className="border border-gray-900 text-gray-900 bg-white px-7 py-3 rounded-full font-semibold shadow-sm hover:bg-gray-50 transition"
                data-testid="button-cta-signal-call"
              >
                Book a Signal Call
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
