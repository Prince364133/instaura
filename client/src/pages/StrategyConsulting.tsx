import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function StrategyConsulting() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const industryMetrics = [
    { value: "70%", label: "Initiatives Underdeliver", subtitle: "strategy ≠ movement" },
    { value: "2×", label: "Faster Decision Cycles", subtitle: "with signal clarity" },
    { value: "60%", label: "GTM Stalls", subtitle: "misaligned direction" },
    { value: "3–5×", label: "Higher ROI", subtitle: "when strategy drives belief" }
  ];

  const pedigreeMetrics = [
    { value: "18", label: "Years", subtitle: "of Signal practice" },
    { value: "2500+", label: "Clients", subtitle: "across 4 continents" },
    { value: "250+", label: "Movements", subtitle: "breakthrough outcomes" },
    { value: "$2B+", label: "Moved", subtitle: "capital & value" }
  ];

  const whyItMatters = [
    { title: "Capital", description: "Raises collapse when strategic signals contradict. Clarity sets terms." },
    { title: "GTM", description: "Adoption needs inevitability. Direction must sequence belief." },
    { title: "Organization", description: "Teams move when leaders transmit signal — not slides." }
  ];

  const approach = [
    { title: "1) Diagnose", description: "Brutal clarity sessions to surface blind spots and belief gaps." },
    { title: "2) Architect", description: "Design strategies that align signal, market, and execution." },
    { title: "3) Embed", description: "Walk alongside founders so strategy becomes movement." }
  ];

  const testimonials = [
    { quote: "The Signal Call cut through months of noise. One conversation reframed everything.", author: "Founder — Consumer Tech" },
    { quote: "The 90-day Sprint became our north star. It wasn't advice — it was clarity we could execute.", author: "CEO — Enterprise SaaS" },
    { quote: "Fractional strategy felt like a co-founder who saw the game ten steps ahead.", author: "Founder — DeepTech" }
  ];

  const caseStudies = [
    { title: "Consumer Tech — Signal Call", description: "One call, GTM recode, quarter saved.", href: "/insights/case-studies/consumer-tech-signal-call" },
    { title: "SaaS — Strategy Sprint", description: "Quarterly reset unlocked enterprise adoption.", href: "/insights/case-studies/saas-quarterly-sprint" },
    { title: "Defense — Fractional Strategy", description: "$23M close after raise reposition.", href: "/insights/case-studies/defense-fractional-strategy" }
  ];

  const whitePapers = [
    { title: "Strategy Isn't Slides. It's Signal.", description: "How belief drives decisions, not decks.", href: "/insights/white-papers/strategy-is-signal" },
    { title: "The Cost of Strategy Drift", description: "Delay, dilution, and missed inevitability.", href: "/insights/white-papers/cost-of-strategy-drift" },
    { title: "Boardroom Clarity", description: "Aligning leaders to transmit signal.", href: "/insights/white-papers/boardroom-clarity" }
  ];

  const claritySeries = [
    { title: "The $500k GTM We Didn't Spend", description: "Clarity over campaigns.", href: "/insights/clarity-series/500k-gtm-saved" },
    { title: "Quarterly Recalibration", description: "Why sprints beat offsites.", href: "/insights/clarity-series/quarterly-recalibration" },
    { title: "Boardroom Inevitability", description: "Turning logic into conviction.", href: "/insights/clarity-series/boardroom-inevitability" }
  ];

  const faqs = [
    {
      question: "How is this different from typical consulting?",
      answer: "We don't ship decks and exit. We architect signal, align rooms, and walk with founders till strategy becomes movement."
    },
    {
      question: "What's the difference between Signal Call and Strategy Sprint?",
      answer: "Signal Call is a one-off 90-minute diagnostic. Strategy Sprint is a 90-day immersion with workshops and ongoing recalibration."
    },
    {
      question: "How do Fractional Mandates work?",
      answer: "We embed as your external Chief Strategist, aligning capital, GTM, and growth. Mandates are invite-only and outcome-led."
    },
    {
      question: "Do you guarantee outcomes?",
      answer: "We guarantee clarity and alignment. Outcomes follow when execution carries the signal. For GTM guarantees, see our GTM & Funnels page (Execution Ownership)."
    },
    {
      question: "How are fees structured?",
      answer: "Signal Call — Fixed, one-time fee\nStrategy Sprint — Quarterly fee\nFractional Mandate — Monthly retainer, aligned to scope"
    },
    {
      question: "Do you work with boards and investors?",
      answer: "Yes. We align boardrooms, investors, and leadership teams around the same signal so decisions accelerate."
    },
    {
      question: "Is this only for startups?",
      answer: "No. We work with startups, SMEs, enterprises, and family offices. Signal is universal."
    }
  ];

  return (
    <div className="pt-16">
      {/* BREADCRUMB */}
      <header className="bg-gray-50 px-6 py-3 text-sm">
        <div className="max-w-6xl mx-auto text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> /
          <Link href="/services" className="hover:underline ml-1 mr-1">Services</Link> /
          <span className="text-gray-900 font-medium ml-1">Strategy Consulting</span>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Strategy Consulting. <span className="text-brand-red">Signal-Led Clarity.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">Every strategic misstep is a signal leak. We close them before they cost you scale, capital, or survival.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-6 py-3 rounded-full hover:bg-red-700">Book a Signal Call</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border border-gray-900 px-6 py-3 rounded-full">Talk to YAS</Button>
              </Link>
            </div>
            <p className="mt-3 text-xs text-gray-500">Backed by 18 years • 2500+ clients • 250+ movements • $2B+ moved</p>
          </div>
          <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
            <h3 className="text-sm font-semibold mb-2">What this engagement solves</h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc ml-5">
              <li>Boardroom clarity & market conviction</li>
              <li>GTM, capital, and growth sequencing</li>
              <li>Founder-led strategy that turns into movement</li>
            </ul>
            <div className="mt-4 flex gap-2 flex-wrap">
              <Button 
                onClick={() => scrollToSection('models')}
                className="bg-brand-red text-white px-4 py-2 rounded-full text-sm hover:bg-red-700"
              >
                See Service Models
              </Button>
              <Button 
                onClick={() => scrollToSection('approach')}
                variant="outline"
                className="border px-4 py-2 rounded-full text-sm"
              >
                Our Approach
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY METRICS */}
      <ScrollReveal>
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Industry Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industryMetrics.map((metric, index) => (
                <div key={index} className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                  <div className="text-3xl font-extrabold text-brand-red group-hover:text-red-700 transition-colors duration-300">{metric.value}</div>
                  <div className="text-xs uppercase text-gray-500 mt-1 group-hover:text-gray-700 transition-colors duration-300">{metric.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{metric.subtitle}</div>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-400">*Metrics are directional; specifics provided in-session.</p>
          </div>
        </section>
      </ScrollReveal>

      {/* INSTAURA PEDIGREE */}
      <ScrollReveal>
        <section className="px-6 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Instaura Pedigree</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pedigreeMetrics.map((metric, index) => (
                <div key={index} className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                  <div className="text-3xl font-extrabold text-brand-red group-hover:text-red-700 transition-colors duration-300">{metric.value}</div>
                  <div className="text-xs uppercase text-gray-500 mt-1 group-hover:text-gray-700 transition-colors duration-300">{metric.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{metric.subtitle}</div>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* THE CONUNDRUM */}
      <ScrollReveal>
        <section className="px-6 py-12" id="conundrum">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The Conundrum</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-800">
                <p><strong>Decks vs movement:</strong> Beautiful strategies that don't shift trajectory.</p>
                <p><strong>Advisory without ownership:</strong> Consultants talk; founders still carry the weight.</p>
                <p><strong>Short-term fixes:</strong> Best-practice patches when signal clarity is missing.</p>
                <p><strong>Misaligned rooms:</strong> Boards, investors, and teams hearing different signals.</p>
              </div>
              <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <h3 className="font-semibold text-brand-red mb-2 group-hover:text-red-700 transition-colors duration-300">Where Strategy Leaks</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>No inevitability narrative for markets</li>
                  <li>GTM & capital plans out of sync</li>
                  <li>Sequencing errors that kill urgency</li>
                  <li>Leaders unable to transmit conviction</li>
                </ul>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHY IT MATTERS */}
      <ScrollReveal>
        <section className="px-6 py-12" id="why-it-matters">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold">Why It Matters</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {whyItMatters.map((item, index) => (
                <div key={index} className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                  <h3 className="font-semibold group-hover:text-brand-red transition-colors duration-300">{item.title}</h3>
                  <p className="mt-2 text-gray-700">{item.description}</p>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* OUR APPROACH */}
      <ScrollReveal>
        <section className="px-6 py-12" id="approach">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {approach.map((step, index) => (
                <article key={index} className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                  <h3 className="font-semibold group-hover:text-brand-red transition-colors duration-300">{step.title}</h3>
                  <p className="mt-2 text-gray-700">{step.description}</p>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ENGAGEMENT MODELS */}
      <ScrollReveal>
        <section id="models" className="px-6 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold">Engagement Models</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {/* Model 1 */}
              <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 1 — Signal Call</h3>
                  <span className="text-brand-red text-xs font-semibold px-2 py-1 rounded-full bg-red-50">Diagnostic</span>
                </div>
                <p className="mt-3 text-gray-700">The sharpest 90 minutes you'll get. Diagnose the core bottleneck in capital, GTM, or growth — and leave with 3 decisive moves.</p>
                <ul className="mt-4 text-sm text-gray-700 list-disc ml-5 space-y-1">
                  <li>Real-time recalibration</li>
                  <li>Founder & board alignment</li>
                  <li>Written recap + next steps</li>
                </ul>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Book a Signal Call</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border px-5 py-2 rounded-full text-sm">Talk to Yas</Button>
                  </Link>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </article>

              {/* Model 2 */}
              <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 2 — Strategy Sprint (Quarterly)</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100">90-Day</span>
                </div>
                <p className="mt-3 text-gray-700">A 90-day immersion in signal-led strategy. Quarterly recalibration, leadership workshops, and on-call strategic support.</p>
                <ul className="mt-4 text-sm text-gray-700 list-disc ml-5 space-y-1">
                  <li>Quarterly strategy & GTM reset</li>
                  <li>Pilot & boardroom choreography</li>
                  <li>Monthly signal reviews</li>
                </ul>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact?subject=Strategy%20Sprint%20(Quarterly)">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Start a Sprint</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border px-5 py-2 rounded-full text-sm">Talk to Yas</Button>
                  </Link>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </article>

              {/* Model 3 */}
              <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 3 — Fractional Strategy Mandates</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100">Embedded</span>
                </div>
                <p className="mt-3 text-gray-700">Instaura steps in as your external Chief Strategist. Market entry, pivots, M&A positioning, board strategy — when the stakes are highest.</p>
                <ul className="mt-4 text-sm text-gray-700 list-disc ml-5 space-y-1">
                  <li>Capital & GTM alignment</li>
                  <li>Executive & board interface</li>
                  <li>Outcome-driven operating rhythm</li>
                </ul>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact?subject=Fractional%20Strategy%20Mandate">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Explore a Mandate</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border px-5 py-2 rounded-full text-sm">Talk to Yas</Button>
                  </Link>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TESTIMONIALS */}
      <ScrollReveal>
        <section className="px-6 py-12" id="testimonials">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Founder Voices</h2>
              <p className="text-gray-600 text-lg">What happens when founders stop shouting and start signaling.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-white/60 p-8 shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">"</span>
                    </div>
                    <div className="w-3 h-3 bg-red-300 group-hover:bg-brand-red rounded-full transition-colors duration-300"></div>
                  </div>
                  <p className="italic text-gray-800 text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-700 mb-2">{testimonial.author}</div>
                    <div className="w-16 h-1 bg-red-300 group-hover:bg-brand-red rounded-full transition-all duration-300"></div>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* EXPLORE CASE STUDIES */}
      <ScrollReveal>
        <section className="px-6 py-12 bg-gray-50" id="case-studies">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Explore Case Studies</h2>
              <Link href="/insights#case-studies" className="text-brand-red text-sm font-semibold hover:underline">View All</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <Link key={index} href={study.href}>
                  <div className="group block rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                    <h3 className="font-semibold group-hover:text-brand-red transition-colors duration-300">{study.title}</h3>
                    <p className="mt-2 text-sm text-gray-700">{study.description}</p>
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* EXPLORE WHITE PAPERS */}
      <ScrollReveal>
        <section className="px-6 py-12" id="white-papers">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Explore White Papers</h2>
              <Link href="/insights#white-papers" className="text-brand-red text-sm font-semibold hover:underline">View All</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {whitePapers.map((paper, index) => (
                <Link key={index} href={paper.href}>
                  <div className="group block rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                    <h3 className="font-semibold group-hover:text-brand-red transition-colors duration-300">{paper.title}</h3>
                    <p className="mt-2 text-sm text-gray-700">{paper.description}</p>
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* EXPLORE CLARITY SERIES */}
      <ScrollReveal>
        <section className="px-6 py-12 bg-gray-50" id="clarity-series">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Explore Clarity Series</h2>
              <Link href="/insights#clarity-series" className="text-brand-red text-sm font-semibold hover:underline">View All</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {claritySeries.map((series, index) => (
                <Link key={index} href={series.href}>
                  <div className="group block rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                    <h3 className="font-semibold group-hover:text-brand-red transition-colors duration-300">{series.title}</h3>
                    <p className="mt-2 text-sm text-gray-700">{series.description}</p>
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CONCLUSION CTA */}
      <section className="px-6 py-14 bg-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-3">Every move is strategic. Few are inevitable.</h3>
          <p className="text-gray-300">Signal is the difference. Start with clarity — finish with momentum.</p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link href="/contact">
              <Button className="bg-brand-red text-white px-6 py-3 rounded-full hover:bg-red-700">Book a Signal Call</Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100">Talk to Yas</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ScrollReveal>
        <section className="px-6 py-12" id="faqs">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="border rounded-2xl p-4 hover:shadow-md transition-shadow">
                  <summary className="font-semibold cursor-pointer">{faq.question}</summary>
                  <div className="mt-2 text-gray-700">
                    {faq.answer.includes('\n') ? (
                      <ul className="list-disc ml-5 space-y-1">
                        {faq.answer.split('\n').map((line, lineIndex) => 
                          line.trim() && <li key={lineIndex} dangerouslySetInnerHTML={{ __html: line }} />
                        )}
                      </ul>
                    ) : (
                      <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}