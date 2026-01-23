import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function FundRaising() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const industryMetrics = [
    { value: "$450B+", label: "Global Startup Capital", subtitle: "selective & belief-driven" },
    { value: "70%+", label: "Raises That Stall", subtitle: "signal > product" },
    { value: "2–3x", label: "Valuation Uplift", subtitle: "with clear signal" },
    { value: "½", label: "Time to Close", subtitle: "with calibration" }
  ];

  const pedigreeMetrics = [
    { value: "18", label: "Years", subtitle: "of Signal practice" },
    { value: "2500+", label: "Clients", subtitle: "across 4 continents" },
    { value: "250+", label: "Movements", subtitle: "breakthrough outcomes" },
    { value: "$2B+", label: "Moved", subtitle: "capital & value" }
  ];

  const whyMatters = [
    { title: "Valuation", description: "Belief sets price. Signal lifts multiples and cleans terms." },
    { title: "Speed", description: "Calibration compresses timelines and creates urgency." },
    { title: "Fit", description: "One aligned investor beats fifty mismatched conversations." },
    { title: "Brand", description: "How you raise becomes a market signal — for customers and talent too." }
  ];

  const approach = [
    { title: "1) Diagnose", description: "Brutal readiness check. Identify belief gaps, investor fit, and sequencing." },
    { title: "2) Architect", description: "Build the narrative kit, comparables logic, and outreach map that creates inevitability." },
    { title: "3) Activate", description: "Run or support the raise. Land capital signals. Negotiate from strength." }
  ];

  const testimonials = [
    { quote: "We spoke to dozens of investors with nothing to show. Instaura rebuilt the signal — in 40 days we had our first $3.2M committed.", author: "Founder — Industrial Tech" },
    { quote: "They didn't just run a process. They rewrote how the market saw us. That changed the terms.", author: "CEO — DeepTech" },
    { quote: "We stopped pitching and started signaling. Investors started calling us back.", author: "Co-Founder — D2C" }
  ];

  const caseStudies = [
    { title: "Enterprise SaaS — First Commit", description: "Recode to inevitability. Anchor investor secured.", href: "/insights/case-studies/enterprise-saas-first-commit" },
    { title: "DeepTech — $4M at Pre-Revenue", description: "Proof proxies & timing logic unlocked capital.", href: "/insights/case-studies/deeptech-pre-revenue-4m" },
    { title: "Manufacturing — Growth Round", description: "From flat growth to global investor belief.", href: "/insights/case-studies/manufacturing-growth-round" }
  ];

  const whitePapers = [
    { title: "Signals that Close Capital", description: "Why belief compresses timelines and lifts terms.", href: "/insights/white-papers/signals-that-close-capital" },
    { title: "Capital Architecture > Tactics", description: "Design your raise before you start your raise.", href: "/insights/white-papers/capital-architecture" },
    { title: "Family Offices vs VC", description: "Choosing the right archetype for your story.", href: "/insights/white-papers/family-offices-vs-vc" }
  ];

  const claritySeries = [
    { title: "The Investor Archetype Mistake", description: "Nine months lost to the wrong audience.", href: "/insights/clarity-series/investor-archetype-mistake" },
    { title: "From Rejections to Offers", description: "One narrative shift changed everything.", href: "/insights/clarity-series/rejections-to-offers" },
    { title: "When Family Offices Win", description: "Why \"fit\" beats volume in capital.", href: "/insights/clarity-series/family-office-fit" }
  ];

  const faqs = [
    { question: "What's the difference between Back-End Support and a Full Mandate?", answer: "Back-End gives you architecture and advisory while you lead investor calls. A Full Mandate means we run the raise end to end; you step in for critical moments." },
    { question: "Do you guarantee funds?", answer: "No one ethical can. We guarantee architecture and conviction. Capital follows belief and fit." },
    { question: "We've paid retainers before with no outcome. Do you still charge retainers?", answer: "We use a calibrated mix of retainers + success fees aligned to clear milestones. No open-ended retainers. If the signal isn't strong enough, we won't engage." },
    { question: "We're cash constrained. Can we start without large upfronts?", answer: "Start with Model 1 (Back-End Support) or a Signal Call. It creates immediate clarity and momentum without heavy fixed spend." },
    { question: "Can we do success fee only?", answer: "We avoid pure success-fee models; they misalign incentives. In select invite-only cases, we may structure reduced retainers with milestone-based success fees." },
    { question: "Will you introduce us to your network?", answer: "Yes — when the signal is ready and the fit is right. Intros are sequenced to preserve urgency and terms." },
    { question: "Do you prepare data rooms and documents?", answer: "We architect the narrative spine and prepare/advise on all investor materials. Legal support is available as needed." }
  ];

  return (
    <div className="pt-16">
      {/* BREADCRUMB */}
      <header className="bg-gray-50 px-6 py-3 text-sm">
        <div className="max-w-6xl mx-auto text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> /
          <Link href="/services" className="hover:underline ml-1 mr-1">Services</Link> /
          <span className="text-gray-900 font-medium ml-1">Fund Raising</span>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Fund Raising. <span className="text-brand-red">Signal That Closes.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">Capital doesn't follow effort. It follows belief.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button 
                onClick={() => scrollToSection('diagnose')}
                className="bg-brand-red text-white px-6 py-3 rounded-full hover:bg-red-700"
              >
                Diagnose Your Capital Signal
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="border border-gray-900 px-6 py-3 rounded-full">
                  Talk to YAS
                </Button>
              </Link>
            </div>
            <p className="mt-3 text-xs text-gray-500">Backed by 18 years • 2500+ clients • 250+ movements • $2B+ moved</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md hover:scale-105 transition-all duration-300">
            <h3 className="text-sm font-semibold mb-2">Raise Readiness — What You Get</h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc ml-5">
              <li>Capital Signal Diagnostic & investor calibration</li>
              <li>Investor Narrative Kit (deck spine, one-pager, FAQs)</li>
              <li>Sequenced outreach plan + closing intelligence</li>
            </ul>
            <Button 
              onClick={() => scrollToSection('models')}
              className="mt-4 bg-brand-red text-white px-4 py-2 rounded-full text-sm hover:bg-red-700"
            >
              See Engagement Models
            </Button>
          </div>
        </div>
      </section>

      {/* INDUSTRY METRICS */}
      <ScrollReveal>
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Fund Raising Industry Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industryMetrics.map((metric, index) => (
                <div key={index} className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                  <div className="text-3xl font-extrabold text-brand-red group-hover:text-red-700 transition-colors duration-300">{metric.value}</div>
                  <div className="text-xs uppercase text-gray-500 mt-1">{metric.label}</div>
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
                  <div className="text-xs uppercase text-gray-500 mt-1">{metric.label}</div>
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
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The Conundrum</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-800">
                <p><strong>Volume over calibration:</strong> chasing 100+ investors instead of the right 12. Belief dilutes; timelines expand.</p>
                <p><strong>Logical, not inevitable:</strong> decks heavy on facts, light on conviction. Investors nod — and pass.</p>
                <p><strong>Wrong archetype:</strong> pitching VCs when Family Offices or strategics fit the story (or the reverse).</p>
                <p><strong>Negotiating from weakness:</strong> outreach starts before belief is built, forcing poor terms and endless "updates."</p>
              </div>
              <div className="group bg-white rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <h3 className="font-semibold text-brand-red mb-2 group-hover:text-red-700 transition-colors duration-300">Where Capital Signal Leaks</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>Unclear comparables and the wrong comps ceiling</li>
                  <li>Proof that shows effort, not inevitability</li>
                  <li>Outreach sequencing that kills urgency</li>
                  <li>Data rooms that answer questions no one is asking</li>
                </ul>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHY IT MATTERS */}
      <ScrollReveal>
        <section className="px-6 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold">Why it Matters</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-6">
              {whyMatters.map((item, index) => (
                <div key={index} className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* OUR APPROACH */}
      <ScrollReveal>
        <section className="px-6 py-12">
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
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Model 1 */}
              <article id="diagnose" className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 1 — Back-End Support</h3>
                  <span className="text-brand-red text-xs font-semibold px-2 py-1 rounded-full bg-red-50">Architecture + Advisory</span>
                </div>
                <p className="mt-3 text-gray-700">
                  You lead investor conversations; we power the architecture behind them. Precision support that changes outcomes.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-1 list-disc ml-5">
                  <li>Capital Signal Diagnostic & Design</li>
                  <li>Documentation & Investor Narrative Kit</li>
                  <li>Strategy Calls & Negotiation Advisory</li>
                  <li>Optional add-ons: legal, diligence, compliance</li>
                </ul>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact?subject=Fund%20Raising%20Back-End%20Support">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Engage Instaura</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border px-5 py-2 rounded-full text-sm">Talk to Yas</Button>
                  </Link>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </article>

              {/* Model 2 */}
              <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 2 — End-to-End Execution Mandate</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100">Full Raise</span>
                </div>
                <p className="mt-3 text-gray-700">
                  We run the raise. You step in at critical moments. Outreach, sequencing, negotiation, and closure — architected end to end.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-1 list-disc ml-5">
                  <li>Signal Architecture & investor calibration</li>
                  <li>Curated outreach to aligned capital</li>
                  <li>Deal flow management & negotiation</li>
                  <li>Closure support and post-close signaling</li>
                </ul>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact?subject=Fund%20Raising%20Execution%20Mandate">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Request a Mandate</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border px-5 py-2 rounded-full text-sm">Talk to Yas</Button>
                  </Link>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TESTIMONIALS */}
      <ScrollReveal>
        <section className="px-6 py-12">
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
          <h3 className="text-2xl font-semibold mb-3">Every decisive raise begins with Signal.</h3>
          <p className="text-gray-300">Capital isn't hunted. It's architected.</p>
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
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}