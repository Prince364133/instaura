import { useState, useEffect } from "react";
import { Link } from "wouter";

interface ClarityPost {
  id: number;
  theme: string;
  title: string;
  description: string;
  slug: string;
  sector: string;
  service: string;
}

const clarityPosts: ClarityPost[] = [
  {
    id: 19,
    theme: "GTM, B2B Sales, Signal Velocity",
    title: "The GTM Playbook That Collapsed a Sales Cycle",
    description: "Why signal-first design turned a 6-month sales grind into a 30-day close.",
    slug: "gtm-playbook-collapsed-sales-cycle",
    sector: "Enterprise",
    service: "GTM"
  },
  {
    id: 20,
    theme: "Fund Raising, Pre-Product, Signal as the Only Basis",
    title: "The Signal That Closed Without a Product",
    description: "Why belief moves first, and why sometimes the product comes later.",
    slug: "signal-that-closed-without-product",
    sector: "DeepTech",
    service: "Fundraising"
  },
  {
    id: 1,
    theme: "Fund Raising, Negotiation, Signal Dynamics",
    title: "The Silence That Closed a $4M Deal",
    description: "How one moment of deliberate silence reframed belief, reversed terms, and secured capital — on our conditions.",
    slug: "silence-closed-4m-deal",
    sector: "Enterprise",
    service: "Fundraising"
  },
  {
    id: 2,
    theme: "Fund Raising, Signal Choreography, Founder Dynamics",
    title: "Investor Calls That Convert",
    description: "Why most founders leak signal on investor calls — and the 3 shifts that change silence into belief.",
    slug: "investor-calls-that-convert",
    sector: "Enterprise",
    service: "Fundraising"
  },
  {
    id: 3,
    theme: "Product Strategy, Founder Psychology, Signal vs. Noise",
    title: "When to Stop Iterating and Start Signaling",
    description: "Founders stuck in the pivot loop don't need another version — they need belief.",
    slug: "stop-iterating-start-signaling",
    sector: "SaaS",
    service: "Strategy"
  },
  {
    id: 4,
    theme: "Pricing, GTM, Signal as Proof",
    title: "The Price That Built Belief",
    description: "Why raising price reduced friction, clarified positioning, and moved the market.",
    slug: "price-that-built-belief",
    sector: "SaaS",
    service: "Pricing"
  },
  {
    id: 5,
    theme: "Fund Raising, Pitch Design, Signal Architecture",
    title: "The First Slide That Wins Investor Meetings",
    description: "Why most decks fail before they start — and the one opening signal that shifts investor belief instantly.",
    slug: "first-slide-that-wins-investor-meetings",
    sector: "Enterprise",
    service: "Fundraising"
  },
  {
    id: 6,
    theme: "SaaS, Retention, Narrative as Signal",
    title: "Reversing Churn with Narrative",
    description: "Why metrics don't always save you — but recalibrating your signal story can.",
    slug: "reversing-churn-with-narrative",
    sector: "SaaS",
    service: "Strategy"
  },
  {
    id: 7,
    theme: "Fund Raising, Traction, Signal vs. Numbers",
    title: "Why Your Traction Is Invisible",
    description: "Because numbers don't move investors — signals do.",
    slug: "why-your-traction-is-invisible",
    sector: "Enterprise",
    service: "Fundraising"
  },
  {
    id: 8,
    theme: "GTM, Early Customer Acquisition, Signal in Sales",
    title: "Signals That Unlock First Customers",
    description: "Why your first 10 customers don't come from features, but from the signals you send.",
    slug: "signals-that-unlock-first-customers",
    sector: "SaaS",
    service: "GTM"
  },
  {
    id: 9,
    theme: "Founder Psychology, Decision-Making, Signal vs. Noise",
    title: "The Founder's Filter",
    description: "Why founders hear signal as noise — and noise as signal — and how to flip the filter.",
    slug: "the-founders-filter",
    sector: "Enterprise",
    service: "Strategy"
  },
  {
    id: 10,
    theme: "GTM, Outreach, Signal Writing",
    title: "The Single Email That Opened a Market",
    description: "Why one signal-rich outreach outperformed months of cold campaigns.",
    slug: "single-email-opened-market",
    sector: "SaaS",
    service: "GTM"
  },
  {
    id: 11,
    theme: "Talent, Fund Raising, Signal in Leadership",
    title: "The One Hire That Changed Everything",
    description: "Why the right signal hire does more than fill a role — it rewires belief across investors, customers, and teams.",
    slug: "one-hire-changed-everything",
    sector: "DeepTech",
    service: "Fundraising"
  },
  {
    id: 12,
    theme: "Fund Raising, Investor Dynamics, Signal Decoding",
    title: "When VCs Say \"Too Early\"",
    description: "They don't mean the stage. They mean the signal.",
    slug: "when-vcs-say-too-early",
    sector: "Enterprise",
    service: "Fundraising"
  },
  {
    id: 13,
    theme: "Fund Raising, Negotiation, Founder Psychology",
    title: "The Investor Who Walked Away — and Why That Was the Win",
    description: "Sometimes the best raise is the one you don't close.",
    slug: "investor-who-walked-away",
    sector: "Enterprise",
    service: "Fundraising"
  },
  {
    id: 14,
    theme: "Fund Raising, Narrative, Signal Velocity",
    title: "From Noise to Belief in 14 Days",
    description: "Why signal — not time — determines how fast you move the market.",
    slug: "from-noise-to-belief-in-14-days",
    sector: "Enterprise",
    service: "Fundraising"
  },
  {
    id: 15,
    theme: "GTM, Market Entry, Signal in Execution",
    title: "The GTM Sprint That Reframed an Entire Market",
    description: "When 90 days of signal-first GTM did what 18 months of noise couldn't.",
    slug: "gtm-sprint-that-reframed-market",
    sector: "Enterprise",
    service: "GTM"
  },
  {
    id: 16,
    theme: "Fund Raising, GTM, Branding vs. Signal",
    title: "When Storytelling Becomes Noise",
    description: "Stories are memorable. Signals are believable. The difference decides outcomes.",
    slug: "when-storytelling-becomes-noise",
    sector: "Enterprise",
    service: "Strategy"
  },
  {
    id: 17,
    theme: "Funnels, GTM, Signal in Growth",
    title: "Your Funnel Is Not Broken, Your Signal Is",
    description: "Funnels don't fail because of software. They fail because of what you're signaling.",
    slug: "funnel-not-broken-signal-is",
    sector: "SaaS",
    service: "GTM"
  },
  {
    id: 18,
    theme: "Fund Raising, GTM, Signal Proof",
    title: "The Proof Artifact That Closed the Deal",
    description: "Belief doesn't move because of decks or pitches. It moves because of proof.",
    slug: "proof-artifact-that-closed-deal",
    sector: "Enterprise",
    service: "Fundraising"
  }
];

export default function ClaritySeries() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<ClarityPost[]>(clarityPosts);

  useEffect(() => {
    const filtered = clarityPosts.filter((post) => {
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.service.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSector = !selectedSector || post.sector === selectedSector;
      const matchesService = !selectedService || post.service === selectedService;

      return matchesSearch && matchesSector && matchesService;
    });

    setFilteredPosts(filtered);
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
          / <span className="text-gray-900 font-medium">Clarity Series</span>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight font-raleway">
            Sharp. Surgical. <span className="text-brand-red">Founder-ready</span>.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-700">
            Clarity Series distills breakthroughs from real Signal Calls and mandates into concise essays that unlock bottlenecks fast.
            Read in minutes. Apply the same day.
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
              className="border border-gray-200 bg-white px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition"
              data-testid="button-browse-posts"
            >
              Browse Posts
            </a>
          </div>
        </div>
      </section>

      {/* Why Clarity Matters */}
      <section className="px-6 py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center font-raleway">Why Clarity Matters</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-brand-red">Belief before motion</h3>
              <p className="mt-2 text-gray-700">Founders don't fail for lack of effort — they fail when markets don't believe. Clarity builds belief.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-brand-red">One shift, big delta</h3>
              <p className="mt-2 text-gray-700">Each post demonstrates a single signal shift that changed the trajectory — fundraising, GTM, funnels, or strategy.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-brand-red">Tactical & repeatable</h3>
              <p className="mt-2 text-gray-700">Not theory. Field-tested patterns you can use the same day with your team, board, or investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Container for sticky behavior - stops at "What Founders Say" */}
      <div className="relative">
        {/* Browse by Theme Title */}
        <div className="bg-white px-6 pt-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold font-raleway">Browse by Theme</h2>
          </div>
        </div>

        {/* Sticky Search Bar */}
        <section className="sticky top-16 z-30 bg-white py-6 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Input */}
              <div>
                <label htmlFor="cs-search-input" className="text-xs uppercase text-gray-500 font-medium">
                  Search
                </label>
                <input
                  id="cs-search-input"
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
                <label htmlFor="cs-sector-select" className="text-xs uppercase text-gray-500 font-medium">
                  Sector
                </label>
                <select
                  id="cs-sector-select"
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
                <label htmlFor="cs-service-select" className="text-xs uppercase text-gray-500 font-medium">
                  Service
                </label>
                <select
                  id="cs-service-select"
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
                <span className="font-semibold" data-testid="text-results-count">{filteredPosts.length}</span> results
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
        </section>

        {/* Featured Posts */}
        <section id="featured" className="px-6 py-12 bg-white">
          <div className="max-w-7xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/clarity-series/${post.slug}`}>
                    <div
                      className="group bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col"
                      data-testid={`card-clarity-post-${post.id}`}
                    >
                      <div className="text-xs uppercase text-gray-500 font-medium">
                        {post.theme}
                      </div>
                      <h3 className="mt-2 text-lg font-semibold group-hover:underline" data-testid={`text-title-${post.id}`}>
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-700 flex-grow">{post.description}</p>
                      <span className="mt-3 inline-block text-sm text-brand-red font-semibold">
                        Read →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-600 py-12" data-testid="text-no-results">
                <h3 className="text-xl font-semibold">No posts found</h3>
                <p className="mt-2 text-gray-500">Try adjusting your search term.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Testimonials */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold font-raleway">What Founders Say (Redacted)</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <blockquote className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <p className="text-gray-800">"I saw myself in one of the posts. It was eerie. And it changed how I pitch."</p>
              <div className="text-xs text-gray-500 mt-3 font-medium uppercase">Founder • DeepTech</div>
            </blockquote>
            <blockquote className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <p className="text-gray-800">"Not theory. Not fluff. It felt like I was in the room."</p>
              <div className="text-xs text-gray-500 mt-3 font-medium uppercase">CEO • SaaS</div>
            </blockquote>
            <blockquote className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <p className="text-gray-800">"Best 5-minute reads I've found as a founder."</p>
              <div className="text-xs text-gray-500 mt-3 font-medium uppercase">Co-Founder • Consumer</div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Pedigree / Stats */}
      <section className="px-6 py-12 bg-white">
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
          <h3 className="text-2xl md:text-3xl font-semibold font-raleway">Clarity that unlocks.</h3>
          <p className="text-gray-300 mt-3">
            These posts aren't theory. They're field notes from Signal Calls and mandates. If you're ready to unlock your own bottleneck, start the conversation.
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
