import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function GTMFunnels() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const industryMetrics = [
    { value: "90%", label: "GTM Programs Fail", subtitle: "signal misalignment" },
    { value: "3–5×", label: "CAC Inefficiency", subtitle: "feature-led funnels" },
    { value: "60%", label: "Pilots Stall", subtitle: "weak buyer signal" },
    { value: "2–3×", label: "Faster Scale", subtitle: "signal-aligned GTM" }
  ];

  const pedigreeMetrics = [
    { value: "18", label: "Years", subtitle: "of Signal practice" },
    { value: "2500+", label: "Clients", subtitle: "across 4 continents" },
    { value: "250+", label: "Movements", subtitle: "breakthrough outcomes" },
    { value: "$2B+", label: "Moved", subtitle: "capital & value" }
  ];

  const whySignalMatters = [
    { title: "CAC", description: "CAC halves when belief precedes campaigns." },
    { title: "Velocity", description: "Pilots convert when buyer inevitability is clear." },
    { title: "WTP", description: "Willingness-to-pay rises with stronger signal." },
    { title: "Scale", description: "Signal turns selling into being chosen." }
  ];

  const approach = [
    { title: "1) Diagnose", description: "Audit funnels, GTM motions, and buyer psychology. Find the exact signal leaks." },
    { title: "2) Architect", description: "Design GTM playbooks and conversion paths that make adoption inevitable." },
    { title: "3) Activate", description: "Embed copy, offers, flows, and sales motions that compound belief." }
  ];

  const testimonials = [
    { quote: "Our CAC dropped by half. Not because of ads — because the funnel finally signaled belief.", author: "Founder — D2C Health" },
    { quote: "We had 20 pilots and no conversions. Instaura recoded GTM; three closed in 60 days.", author: "CEO — Enterprise SaaS" },
    { quote: "Funnels stopped being tools. They became growth loops.", author: "Co-Founder — Consumer Tech" }
  ];

  const caseStudies = [
    { title: "SaaS — SEA Enterprise Pilots", description: "Repositioned as infrastructure; pilots to paid.", href: "/insights/case-studies/saas-sea-pilots" },
    { title: "D2C — Repeat Lift", description: "Signal funnels doubled repeat in 90 days.", href: "/insights/case-studies/d2c-repeat-lift" },
    { title: "Healthcare — CAC Cut", description: "Provider pathway design cut CAC by 60%.", href: "/insights/case-studies/healthcare-cac-cut" }
  ];

  const whitePapers = [
    { title: "Signal-Powered GTM", description: "Why belief-first GTM scales faster.", href: "/insights/white-papers/signal-powered-gtm" },
    { title: "Funnel Architecture > Tools", description: "Tools don't fix leaky psychology.", href: "/insights/white-papers/funnel-architecture" },
    { title: "Enterprise Adoption Pathways", description: "Converting pilots to production.", href: "/insights/white-papers/enterprise-adoption" }
  ];

  const claritySeries = [
    { title: "The $120k Ad Spend We Didn't Need", description: "Diagnostic that changed the quarter.", href: "/insights/clarity-series/adspend-saved" },
    { title: "One Copy Shift, 2× Conversions", description: "Belief over buzzwords.", href: "/insights/clarity-series/copy-shift" },
    { title: "The GTM Pivot That Closed 3", description: "Sequencing for inevitability.", href: "/insights/clarity-series/gtm-pivot" }
  ];

  const faqs = [
    {
      question: "Do you guarantee results?",
      answer: "Minimum guarantees are offered only on GTM Execution Ownership Mandates (invite-only). Deliverables/KPIs are mutually agreed upfront (e.g., revenue, client acquisition, conversion benchmarks). If not delivered, fees are refunded or adjusted. Design, Back-End Support, and Strategy models don't carry guarantees because you control execution."
    },
    {
      question: "How are fees structured?",
      answer: "Design Models — Fixed fee (typically split 50/50, start + delivery)\nExecution Back-End Support — Monthly/quarterly retainer\nExecution Ownership — Retainer + performance-linked component (with minimum guarantees)\nFunnel Build & Monitoring — Fixed build fee + ongoing retainer"
    },
    {
      question: "Do you run ads or outbound?",
      answer: "No. We are not an agency. We design the signal-led GTM, funnels, copy, and motions. Your team or partner agencies execute campaigns. In Execution Ownership, we may manage partners/vendors."
    },
    {
      question: "What does Funnel Monitoring include?",
      answer: "Monthly recalibration of copy, flows, offers, and handoffs. Leak diagnostics, A/B cadence, and a KPI review across CAC, CVR, and LTV with corrective actions."
    },
    {
      question: "Can we start with just a diagnostic?",
      answer: "Yes. Most teams begin with a Signal Funnel Diagnostic or Signal Call to establish readiness and the first three moves."
    },
    {
      question: "How long to install a funnel?",
      answer: "Typically 3–5 weeks for strategy, copy, build, integrations, QA, and go-live."
    },
    {
      question: "Which tools and CRMs do you support?",
      answer: "Systeme.io, GoHighLevel, HubSpot, Salesforce, plus common payment gateways and analytics stacks — all implemented with signal-first design."
    },
    {
      question: "Is this only for startups?",
      answer: "No. We serve startups, SMEs, and enterprises. Signal scales across all."
    },
    {
      question: "How do we qualify for Execution Ownership?",
      answer: "Yas will qualify first. We take limited ownership mandates where belief-fit is clear and the motion is ready for scale in SEA, Middle East, or US."
    }
  ];

  return (
    <div className="pt-16">
      {/* BREADCRUMB */}
      <header className="bg-gray-50 px-6 py-3 text-sm">
        <div className="max-w-6xl mx-auto text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> /
          <Link href="/services" className="hover:underline ml-1 mr-1">Services</Link> /
          <span className="text-gray-900 font-medium ml-1">GTM & Funnels</span>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              GTM & Funnels. <span className="text-brand-red">Signal-Powered Growth.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">Markets don't move because of features. They move when inevitability is clear.</p>
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
            <h3 className="text-sm font-semibold mb-2">What this page covers</h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc ml-5">
              <li>GTM Design & Execution models</li>
              <li>Funnel Strategy, Build & Monitoring</li>
              <li>Signal-first approach to growth</li>
            </ul>
            <div className="mt-4 flex gap-2 flex-wrap">
              <Button 
                onClick={() => scrollToSection('gtm-design')}
                className="bg-brand-red text-white px-4 py-2 rounded-full text-sm hover:bg-red-700"
              >
                GTM Design
              </Button>
              <Button 
                onClick={() => scrollToSection('gtm-execution')}
                variant="outline"
                className="border px-4 py-2 rounded-full text-sm"
              >
                GTM Execution
              </Button>
              <Button 
                onClick={() => scrollToSection('funnel-design')}
                variant="outline"
                className="border px-4 py-2 rounded-full text-sm"
              >
                Funnel Design
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
            <p className="mt-4 text-xs text-gray-500">Plus 250+ GTM & funnel architectures delivered across regions.</p>
          </div>
        </section>
      </ScrollReveal>

      {/* GTM CONUNDRUM */}
      <ScrollReveal>
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The GTM Conundrum</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-800">
                <p><strong>Feature over inevitability:</strong> teams pitch what the product does, not why it must win now.</p>
                <p><strong>Premature scaling:</strong> hiring sales / launching ads before belief is architected.</p>
                <p><strong>Pilot trap:</strong> enterprise pilots that don't convert because buyer signal is weak.</p>
                <p><strong>Noise vs movement:</strong> polished assets that don't change market behavior.</p>
              </div>
              <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <h3 className="font-semibold text-brand-red mb-2 group-hover:text-red-700 transition-colors duration-300">What We See Most Often</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>Misfit ICPs and wrong buyer psychology</li>
                  <li>Sequencing errors that kill urgency</li>
                  <li>Comparables that cap your price & ambition</li>
                  <li>Sales motions without signal calibration</li>
                </ul>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FUNNEL CONUNDRUM */}
      <ScrollReveal>
        <section className="px-6 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The Funnel Conundrum</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-800">
                <p><strong>Clicks without conviction:</strong> traffic arrives; belief doesn't.</p>
                <p><strong>Copy without calibration:</strong> words that speak, not resonate.</p>
                <p><strong>Tools over architecture:</strong> CRMs and automations plugged into leaky psychology.</p>
                <p><strong>Vanity metrics:</strong> leads generated; no downstream movement.</p>
              </div>
              <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <h3 className="font-semibold text-brand-red mb-2 group-hover:text-red-700 transition-colors duration-300">Leak Points We Fix</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>Offer architecture & price psychology</li>
                  <li>Message-market calibration by segment</li>
                  <li>Conversion paths & handoff to sales</li>
                  <li>Signal-led nurture & proof sequencing</li>
                </ul>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHY SIGNAL MATTERS */}
      <ScrollReveal>
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold">Why Signal Matters</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-6">
              {whySignalMatters.map((item, index) => (
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

      {/* GTM DESIGN */}
      <ScrollReveal>
        <section id="gtm-design" className="px-6 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold">GTM Design</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Model 1 */}
              <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 1 — GTM Design</h3>
                  <span className="text-brand-red text-xs font-semibold px-2 py-1 rounded-full bg-red-50">Playbook</span>
                </div>
                <p className="mt-3 text-gray-700">Full GTM playbook designed for founder/team-led execution. ICPs, motions, offers, proof sequencing, and enablement.</p>
                <ul className="mt-4 text-sm text-gray-700 list-disc ml-5 space-y-1">
                  <li>ICP & buyer psychology maps</li>
                  <li>Narratives by segment & channel</li>
                  <li>Motion & sequencing playbook</li>
                </ul>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6 mb-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact?subject=GTM%20Design">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Engage Instaura</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border px-5 py-2 rounded-full text-sm">Talk to Yas</Button>
                  </Link>
                </div>
              </article>

              {/* Model 2 */}
              <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 2 — GTM Design + Execution Consulting</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100">Design + Advisory</span>
                </div>
                <p className="mt-3 text-gray-700">Everything in Design, plus ongoing consulting through pilots and adoption to ensure conversion to revenue.</p>
                <ul className="mt-4 text-sm text-gray-700 list-disc ml-5 space-y-1">
                  <li>Founders' room & deal review cadence</li>
                  <li>Pilot structuring & close choreography</li>
                  <li>Quarterly signal recalibration</li>
                </ul>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6 mb-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact?subject=GTM%20Design%20%2B%20Execution%20Consulting">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Start with Design</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border px-5 py-2 rounded-full text-sm">Talk to Yas</Button>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* GTM EXECUTION */}
      <ScrollReveal>
        <section id="gtm-execution" className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold">GTM Execution</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Model 1 */}
              <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 1 — Back-End Support</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100">Advisory</span>
                </div>
                <p className="mt-3 text-gray-700">You run sales; we power calibration, sequencing, and deal strategy behind the scenes.</p>
                <ul className="mt-4 text-sm text-gray-700 list-disc ml-5 space-y-1">
                  <li>Pipeline & offer architecture</li>
                  <li>Sequenced proofs & urgency mechanics</li>
                  <li>Negotiation & close advisory</li>
                </ul>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6 mb-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact?subject=GTM%20Execution%20Back-End%20Support">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Engage Support</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border px-5 py-2 rounded-full text-sm">Talk to Yas</Button>
                  </Link>
                </div>
              </article>

              {/* Model 2 */}
              <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 2 — Execution Ownership</h3>
                  <span className="text-brand-red text-xs font-semibold px-2 py-1 rounded-full bg-red-50">Invite-Only</span>
                </div>
                <p className="mt-3 text-gray-700">Instaura owns execution in SEA, Middle East, or US. We run the GTM; you step in for decisive moments.</p>
                <ul className="mt-4 text-sm text-gray-700 list-disc ml-5 space-y-1">
                  <li>Quota-bearing motions & partner mgmt</li>
                  <li>Minimum guarantees on agreed deliverables*</li>
                  <li>Full funnel & sales ops oversight</li>
                </ul>
                <p className="mt-3 text-xs text-gray-500">*Minimum guarantees are offered only for Execution Ownership mandates with mutually agreed KPIs.</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6 mb-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact?subject=GTM%20Execution%20Ownership">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Request Access</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border px-5 py-2 rounded-full text-sm">Talk to Yas</Button>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FUNNEL DESIGN */}
      <ScrollReveal>
        <section id="funnel-design" className="px-6 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold">Funnel Design</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {/* Model 1 */}
              <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 1 — Strategy & Copywriting</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100">Blueprint</span>
                </div>
                <p className="mt-3 text-gray-700">Signal-led messaging, offer architecture, and funnel maps that convert belief into action.</p>
                <ul className="mt-4 text-sm text-gray-700 list-disc ml-5 space-y-1">
                  <li>Value props & price psychology</li>
                  <li>Landing, nurture & CTA flows</li>
                  <li>Sales handoff choreography</li>
                </ul>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6 mb-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact?subject=Funnel%20Strategy%20%26%20Copywriting">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Start Strategy</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border px-5 py-2 rounded-full text-sm">Talk to Yas</Button>
                  </Link>
                </div>
              </article>

              {/* Model 2 */}
              <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 2 — Designing + Installation</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100">Build</span>
                </div>
                <p className="mt-3 text-gray-700">Full funnel build and integration with Systeme.io, GHL, HubSpot, or Salesforce.</p>
                <ul className="mt-4 text-sm text-gray-700 list-disc ml-5 space-y-1">
                  <li>Pages, automations, tracking</li>
                  <li>CRM integration & events</li>
                  <li>QA & go-live playbook</li>
                </ul>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6 mb-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact?subject=Funnel%20Design%20%2B%20Installation">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Build My Funnel</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border px-5 py-2 rounded-full text-sm">Talk to Yas</Button>
                  </Link>
                </div>
              </article>

              {/* Model 3 */}
              <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 3 — Monitoring</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100">Optimize</span>
                </div>
                <p className="mt-3 text-gray-700">Monthly recalibration of copy, flows, and offers based on conversion data and signal health.</p>
                <ul className="mt-4 text-sm text-gray-700 list-disc ml-5 space-y-1">
                  <li>Benchmarks & A/B rhythm</li>
                  <li>Leak diagnostics & fixes</li>
                  <li>Sales-funnel sync cadence</li>
                </ul>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6 mb-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact?subject=Funnel%20Monitoring">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Set Up Monitoring</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border px-5 py-2 rounded-full text-sm">Talk to Yas</Button>
                  </Link>
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
        <section className="px-6 py-12">
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
          <h3 className="text-2xl font-semibold mb-3">Every growth move begins with Signal.</h3>
          <p className="text-gray-300">Don't pour money into sales or ads before the foundation is clear.</p>
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
                <details key={index} className="group border-2 border-white/60 rounded-3xl p-6 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:border-brand-red/30 transition-all duration-500">
                  <summary className="font-semibold cursor-pointer group-hover:text-brand-red transition-colors duration-300">{faq.question}</summary>
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
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                    </div>
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