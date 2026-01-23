import { useState, useEffect } from "react";
import { Link } from "wouter";
import { FileText } from "lucide-react";

interface WhitePaper {
  id: number;
  sector: string;
  service: string;
  title: string;
  description: string;
  slug: string;
  category: string;
}

const whitePapers: WhitePaper[] = [
  {
    id: 1,
    sector: "SaaS",
    service: "Pricing",
    title: "Pricing as Signal",
    description: "Your price is the first story you tell. It encodes strength or fragility long before your deck or demo does.",
    slug: "pricing-as-signal",
    category: "Pricing"
  },
  {
    id: 2,
    sector: "Enterprise",
    service: "Fundraising",
    title: "Signal-First Pitch Decks",
    description: "Investors don't invest in slides. They invest in the signal your slides transmit.",
    slug: "signal-first-pitch-decks",
    category: "Fund Raising"
  },
  {
    id: 3,
    sector: "SaaS",
    service: "Strategy",
    title: "Narrative as a Retention Signal",
    description: "Customers don't stay because of contracts. They stay because of the signal they believe in.",
    slug: "narrative-as-a-retention-signal",
    category: "Retention"
  },
  {
    id: 4,
    sector: "Enterprise",
    service: "Fundraising",
    title: "Signal Mechanics in Investor Narratives",
    description: "It's not the words you say, but the signals they encode that decide investor belief.",
    slug: "signal-mechanics-in-investor-narratives",
    category: "Fund Raising"
  },
  {
    id: 5,
    sector: "Enterprise",
    service: "GTM",
    title: "GTM as Signal, Not Execution",
    description: "GTM isn't about noise-making activities. It's about transmitting belief to the market.",
    slug: "gtm-as-signal-not-execution",
    category: "GTM"
  },
  {
    id: 6,
    sector: "Enterprise",
    service: "Strategy",
    title: "Signal vs. Noise in Founder Decision-Making",
    description: "Founders don't fail because of lack of effort. They fail because they mistake noise for signal.",
    slug: "signal-vs-noise-in-founder-decision-making",
    category: "Strategy"
  },
  {
    id: 7,
    sector: "SaaS",
    service: "GTM",
    title: "Outreach as Signal, Not Spam",
    description: "Every touchpoint you send is a signal. Done wrong, it's spam. Done right, it's inevitability.",
    slug: "outreach-as-signal-not-spam",
    category: "GTM"
  },
  {
    id: 8,
    sector: "DeepTech",
    service: "Strategy",
    title: "Talent as Signal in Early-Stage Growth",
    description: "Early hires are not just operators. They are living signals to investors, customers, and markets.",
    slug: "talent-as-signal-in-early-stage-growth",
    category: "Talent"
  },
  {
    id: 9,
    sector: "DeepTech",
    service: "Fundraising",
    title: "Decoding Investor Language as Signal",
    description: "Investors rarely say what they mean. Their words are signals — if you know how to decode them.",
    slug: "decoding-investor-language-as-signal",
    category: "Fund Raising"
  },
  {
    id: 10,
    sector: "Enterprise",
    service: "Fundraising",
    title: "The Cost of Wrong Capital",
    description: "Not all money is equal. The wrong capital erodes signal, slows growth, and can even kill inevitability.",
    slug: "the-cost-of-wrong-capital",
    category: "Fund Raising"
  },
  {
    id: 11,
    sector: "Enterprise",
    service: "Strategy",
    title: "Signal Velocity and Market Movement",
    description: "Markets don't move because of signal alone. They move because of how fast signal spreads, compounds, and recalibrates belief.",
    slug: "signal-velocity-and-market-movement",
    category: "Signal"
  },
  {
    id: 12,
    sector: "Enterprise",
    service: "GTM",
    title: "Signal-First GTM Design",
    description: "GTM isn't about launching campaigns. It's about designing the signal that makes your market move.",
    slug: "signal-first-gtm-design",
    category: "GTM"
  },
  {
    id: 13,
    sector: "SaaS",
    service: "GTM",
    title: "Funnel Design as Signal Architecture",
    description: "Funnels aren't websites with forms. They are the choreography of belief, designed to transmit signal at every step.",
    slug: "funnel-design-as-signal-architecture",
    category: "Funnels"
  },
  {
    id: 14,
    sector: "Enterprise",
    service: "Fundraising",
    title: "Proof as Signal in Fund Raising",
    description: "Investors don't buy vision. They buy proof signals that encode inevitability.",
    slug: "proof-as-signal-in-fund-raising",
    category: "Fund Raising"
  },
  {
    id: 15,
    sector: "Enterprise",
    service: "GTM",
    title: "The GTM Sprint That Reframed a Market",
    description: "Markets don't reframe with activity. They reframe when one decisive GTM sprint transmits inevitability.",
    slug: "the-gtm-sprint-that-reframed-a-market",
    category: "GTM"
  },
  {
    id: 16,
    sector: "Enterprise",
    service: "Strategy",
    title: "Signal vs. Story — Why Belief Beats Performance",
    description: "Performance alone doesn't raise capital. Stories don't close markets. Signal does.",
    slug: "signal-vs-story",
    category: "Signal"
  },
  {
    id: 17,
    sector: "Enterprise",
    service: "Strategy",
    title: "When Storytelling Becomes Noise",
    description: "A good story entertains. A strong signal moves markets. Know the difference.",
    slug: "when-storytelling-becomes-noise",
    category: "Storytelling"
  },
  {
    id: 18,
    sector: "Enterprise",
    service: "Strategy",
    title: "Why More Data Creates More Confusion",
    description: "Founders don't fail because they lack data. They fail because they drown in it.",
    slug: "why-more-data-creates-more-confusion",
    category: "Founder Decisions"
  },
  {
    id: 19,
    sector: "Enterprise",
    service: "Strategy",
    title: "Why VC Deal Flow Depends on Signal",
    description: "VCs don't hunt deals. Deals flow to the VCs with the strongest signals.",
    slug: "why-vc-deal-flow-depends-on-signal",
    category: "Venture Capital"
  },
  {
    id: 20,
    sector: "Enterprise",
    service: "Fundraising",
    title: "Capital as Signal, Not Commodity",
    description: "Markets don't treat capital as fuel. They decode it as signal.",
    slug: "capital-as-signal-not-commodity",
    category: "Fund Raising"
  }
];

export default function WhitePapers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [filteredPapers, setFilteredPapers] = useState<WhitePaper[]>(whitePapers);

  useEffect(() => {
    const filtered = whitePapers.filter((paper) => {
      const matchesSearch =
        !searchQuery ||
        paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSector = !selectedSector || paper.sector === selectedSector;
      const matchesService = !selectedService || paper.service === selectedService;

      return matchesSearch && matchesSector && matchesService;
    });

    setFilteredPapers(filtered);
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
          / <span className="text-gray-900 font-medium">White Papers</span>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight font-raleway">
            Signal, <span className="text-brand-red">Researched</span>. Signal, Applied.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-4xl">
            Research-backed frameworks built on 18 years of Signal Intelligence, 2,500+ clients, 250+ movements, and $2B+ moved.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact">
              <button
                className="bg-brand-red text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                data-testid="button-talk-yas"
              >
                Talk to Yas
              </button>
            </Link>
            <a
              href="#featured"
              className="border border-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition"
              data-testid="button-browse-papers"
            >
              Browse White Papers
            </a>
          </div>
        </div>
      </section>

      {/* Why White Papers Matter */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold font-raleway">Why White Papers Matter</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-brand-red">Frameworks over opinions</h3>
              <p className="mt-2 text-gray-700">Founders need more than stories — they need field-tested frameworks that travel across markets.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-brand-red">Clarity before commitment</h3>
              <p className="mt-2 text-gray-700">Executives require belief-backed clarity before committing capital and direction.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-brand-red">Conviction that holds</h3>
              <p className="mt-2 text-gray-700">Investors need methods that were proven in the wild — not theorized in isolation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers with Filters */}
      <section id="featured" className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 font-raleway">Browse by Theme</h2>

          {/* Sticky Filter Bar */}
          <div className="sticky top-16 z-30 bg-gray-50 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Input */}
              <div>
                <label htmlFor="wp-search-input" className="text-xs uppercase text-gray-500 font-medium">
                  Search
                </label>
                <input
                  id="wp-search-input"
                  type="search"
                  placeholder="Search by sector, service, or outcome..."
                  className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search"
                />
              </div>
              {/* Sector Select */}
              <div>
                <label htmlFor="wp-sector-select" className="text-xs uppercase text-gray-500 font-medium">
                  Sector
                </label>
                <select
                  id="wp-sector-select"
                  className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  data-testid="select-sector"
                >
                  <option value="">All Sectors</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Enterprise">Enterprise</option>
                  <option value="DeepTech">DeepTech</option>
                </select>
              </div>
              {/* Service Select */}
              <div>
                <label htmlFor="wp-service-select" className="text-xs uppercase text-gray-500 font-medium">
                  Service
                </label>
                <select
                  id="wp-service-select"
                  className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  data-testid="select-service"
                >
                  <option value="">All Services</option>
                  <option value="Strategy">Strategy</option>
                  <option value="GTM">GTM</option>
                  <option value="Fundraising">Fundraising</option>
                  <option value="Pricing">Pricing</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-semibold" data-testid="text-results-count">{filteredPapers.length}</span> results
              </div>
              <button
                onClick={clearFilters}
                className="text-sm text-gray-600 hover:text-black border border-gray-300 rounded-full px-4 py-1 transition"
                data-testid="button-clear-filters"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* White Papers Grid */}
          {filteredPapers.length > 0 ? (
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {filteredPapers.map((paper) => (
                <div
                  key={paper.id}
                  className="group bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  data-testid={`card-white-paper-${paper.id}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-brand-red p-1.5 rounded-lg inline-block">
                      <FileText className="w-5 h-5 text-white" />
                    </span>
                    <div className="text-xs uppercase text-gray-500 font-medium">
                      {paper.category} • White Paper
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold group-hover:underline" data-testid={`text-title-${paper.id}`}>
                    {paper.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">{paper.description}</p>
                  <span className="mt-4 inline-block text-sm text-brand-red font-semibold">
                    Read →
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-center text-gray-600" data-testid="text-no-results">
              No results match your filters. Try clearing them.
            </p>
          )}
        </div>
      </section>

      {/* Methodology Transparency */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold font-raleway">Methodology Transparency</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6" data-testid="card-methodology-1">
              <h3 className="font-semibold text-brand-red">Field-tested work</h3>
              <p className="mt-2 text-gray-700">Derived from real mandates (redacted), across sectors and geographies.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6" data-testid="card-methodology-2">
              <h3 className="font-semibold text-brand-red">Signal frameworks</h3>
              <p className="mt-2 text-gray-700">Proprietary models developed through 18 years of pattern recognition.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6" data-testid="card-methodology-3">
              <h3 className="font-semibold text-brand-red">Market calibration</h3>
              <p className="mt-2 text-gray-700">Triangulated against investors, buyers, and founder behavior before publishing.</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-700">No academic noise. Only frameworks that drive belief.</p>
        </div>
      </section>

      {/* Pedigree */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold font-raleway">Signals Delivered</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="text-3xl font-extrabold text-brand-red" data-testid="stat-years">18</div>
              <div className="text-xs uppercase text-gray-500 mt-1 font-medium">Years</div>
            </div>
            <div className="text-center bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="text-3xl font-extrabold text-brand-red" data-testid="stat-clients">2500+</div>
              <div className="text-xs uppercase text-gray-500 mt-1 font-medium">Clients</div>
            </div>
            <div className="text-center bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="text-3xl font-extrabold text-brand-red" data-testid="stat-movements">250+</div>
              <div className="text-xs uppercase text-gray-500 mt-1 font-medium">Movements</div>
            </div>
            <div className="text-center bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="text-3xl font-extrabold text-brand-red" data-testid="stat-moved">$2B+</div>
              <div className="text-xs uppercase text-gray-500 mt-1 font-medium">Moved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-14 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold font-raleway">Clarity that multiplies.</h3>
          <p className="text-gray-300 mt-3">
            White Papers are not for reading alone — they are for acting. Signal cannot remain theoretical. It must become movement.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact">
              <button
                className="bg-brand-red text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                data-testid="button-cta-talk-yas"
              >
                Talk to Yas
              </button>
            </Link>
            <Link href="/contact">
              <button
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
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
