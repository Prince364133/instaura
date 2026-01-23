import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function SignalArchitecture() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whyMatters = [
    { title: "Capital", description: "Raise on terms you deserve. Capital follows belief, not slides." },
    { title: "Customers", description: "Close faster and retain longer. Clear signal increases willingness-to-pay." },
    { title: "Talent", description: "Attract people who choose your mission over higher offers elsewhere." }
  ];

  const approach = [
    { title: "1) Diagnose", description: "A brutal audit of narrative, calibration, and motion. We identify the exact places where belief leaks." },
    { title: "2) Architect", description: "Design the narrative spine, market comparables, and founder-led signal playbook that make you inevitable." },
    { title: "3) Install", description: "Embed signal across decks, funnels, GTM, and raise flows — so every move compounds belief." }
  ];

  const testimonials = [
    { quote: "I thought we had a brand problem. Turns out, we had a signal problem.", author: "Founder — SaaS" },
    { quote: "Everything was there — product, traction, vision. Instaura decoded what was off and rebuilt it in 3 weeks.", author: "CEO — AI Hardware" },
    { quote: "We stopped shouting. Started signaling. Everything changed.", author: "Co-Founder — Consumer Health" }
  ];

  const caseStudies = [
    { title: "DeepTech narrative to inevitability", description: "Reframed science into belief. Closed strategic round in weeks.", href: "/insights/case-studies/deeptech-signal-recode" },
    { title: "SaaS reposition to enterprise", description: "Rebuilt buyer signal; reversed churn and unlocked pilots.", href: "/insights/case-studies/saas-reposition" },
    { title: "D2C velocity story", description: "Price psychology & GTM recalibration raised repeat and LTV.", href: "/insights/case-studies/d2c-velocity" }
  ];

  const whitePapers = [
    { title: "Signals that Close Capital", description: "How belief — not slides — sets terms and compresses timelines.", href: "/insights/white-papers/signals-that-close-capital" },
    { title: "Signal-Powered GTM", description: "Why funnels convert movements when the foundation is belief.", href: "/insights/white-papers/signal-powered-gtm" },
    { title: "Founder-Led Signal", description: "Carrying conviction into every boardroom and buyer room.", href: "/insights/white-papers/founder-led-signal" }
  ];

  const claritySeries = [
    { title: "Decoding a Stalled Raise", description: "45 minutes to identify the real block and the next decisive move.", href: "/insights/clarity-series/signal-call-raise" },
    { title: "The GTM Pivot", description: "From rising CAC to repeatable motion with one narrative shift.", href: "/insights/clarity-series/gtm-pivot" },
    { title: "Boardroom Inevitability", description: "Turning logic into conviction in high-stakes discussions.", href: "/insights/clarity-series/boardroom-inevitability" }
  ];

  const faqs = [
    { question: "What exactly is Signal Architecture?", answer: "It's the system behind how your company is seen. Narrative, calibration, and motion — architected into one foundation." },
    { question: "How is this different from branding or storytelling?", answer: "Branding is a layer. Storytelling is a tool. Signal is the foundation. We make you believable before you scale." },
    { question: "How long does it take?", answer: "Typically 2–4 weeks, depending on complexity. Fast enough to meet your next critical move." },
    { question: "Do you build decks?", answer: "Only after signal is clear. Decks are tools — we architect belief first, artifacts second." },
    { question: "Can we start with just a diagnostic?", answer: "Yes. Most clients begin with the Signal Call before committing to full installation." },
    { question: "Is this only for tech startups?", answer: "No. Signal is sector-agnostic. We've worked across SaaS, defense, D2C, healthcare, manufacturing, BFSI, and more." },
    { question: "How do commercials work?", answer: "This is a custom service. Yas qualifies first; we engage only if we can deliver decisive shift." },
    { question: "Will you also support GTM or fund raising after this?", answer: "Yes — often the next move after Signal Architecture is GTM & Funnels or Fund Raising. Execution mandates are invite-only." }
  ];

  return (
    <div className="pt-16">
      {/* BREADCRUMB */}
      <header className="bg-gray-50 px-6 py-3 text-sm">
        <div className="max-w-6xl mx-auto text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> /
          <Link href="/services" className="hover:underline ml-1 mr-1">Services</Link> /
          <span className="text-gray-900 font-medium ml-1">Signal Architecture</span>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Signal Architecture. <span className="text-brand-red">The First Move.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">Before you move markets, you move signal.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button 
                onClick={() => scrollToSection('diagnose')}
                className="bg-brand-red text-white px-6 py-3 rounded-full hover:bg-red-700"
              >
                Diagnose Your Signal
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="border border-gray-900 px-6 py-3 rounded-full">
                  Talk to YAS
                </Button>
              </Link>
            </div>
            <p className="mt-3 text-xs text-gray-500">Backed by 18 years • 2500+ clients • 250+ movements • $2B+ moved</p>
          </div>
          <div className="group bg-white rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
            <h3 className="text-sm font-semibold mb-2 group-hover:text-brand-red transition-colors duration-300">What you get</h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc ml-5">
              <li>Brutal diagnostic of your current signal</li>
              <li>Narrative architecture & market calibration</li>
              <li>Founder-led signal playbook & installation</li>
            </ul>
            <Button 
              onClick={() => scrollToSection('engagement')}
              className="mt-4 bg-brand-red text-white px-4 py-2 rounded-full text-sm hover:bg-red-700"
            >
              See Engagement Modes
            </Button>
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
              <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS SIGNAL */}
      <ScrollReveal>
        <section className="px-6 py-12" id="what-is-signal">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold">What is Signal?</h2>
            <p className="mt-4 text-gray-800">
              Signal is the architecture of belief — the invisible system that determines how markets see you, whether investors trust you,
              and whether customers adopt you. Noise is everywhere: features, ads, stories, pitches. Signal cuts through.
              We don't just create stories — we architect the foundation that makes markets believe.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* THE CONUNDRUM */}
      <ScrollReveal>
        <section className="px-6 py-12 bg-gray-50" id="conundrum">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The Conundrum</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-800">
                <p><strong>Logical, not believable:</strong> Pitches that read well but don't feel inevitable. Investors hesitate.</p>
                <p><strong>Replaceable, not indispensable:</strong> Customers see another option, not the only option. Adoption stalls.</p>
                <p><strong>Talent indifferent:</strong> The best people don't feel the pull. Momentum leaks into competitors.</p>
                <p><strong>Traction without trajectory:</strong> Numbers grow but narrative doesn't — the market can't map your next move.</p>
              </div>
              <div className="group bg-white rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <h3 className="font-semibold text-brand-red mb-2 group-hover:text-brand-red transition-colors duration-300">Where Signal Leaks</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>Misfit investor/buyer calibration</li>
                  <li>Decks that explain but don't convince</li>
                  <li>GTM pushing before belief is earned</li>
                  <li>Proof that proves effort, not inevitability</li>
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
        <section className="px-6 py-12" id="why-it-matters">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold">Why it Matters</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {whyMatters.map((item, index) => (
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

      {/* ENGAGEMENT MODES */}
      <ScrollReveal>
        <section className="px-6 py-12 bg-gray-50" id="engagement">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold">Engagement Modes</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Model 1 */}
              <article id="diagnose" className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 1 — The Signal Call</h3>
                  <span className="text-brand-red text-xs font-semibold px-2 py-1 rounded-full bg-red-50">Diagnostic</span>
                </div>
                <p className="mt-3 text-gray-700">
                  A high-stakes, founder-to-founder session that cuts away noise. We tell you exactly where your signal leaks and what to fix first.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-1 list-disc ml-5">
                  <li>Immediate clarity on investor/buyer fit</li>
                  <li>Top 3 signal moves to make this quarter</li>
                  <li>Call recap with next steps</li>
                </ul>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact">
                    <Button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">Book a Signal Call</Button>
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
                  <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Model 2 — Signal Architecture Design & Installation</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100">Full System</span>
                </div>
                <p className="mt-3 text-gray-700">
                  End-to-end design and installation of your market signal. From diagnostic to narrative, calibration, and embedded motion.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-1 list-disc ml-5">
                  <li>Narrative core & investor/buyer calibration map</li>
                  <li>Founder-led signal playbook + deployment sprints</li>
                  <li>Optional: deck & artifact direction where required</li>
                </ul>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Link href="/contact?subject=Signal%20Architecture">
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
          <h3 className="text-2xl font-semibold mb-3">Every decisive move begins with Signal.</h3>
          <p className="text-gray-300">Don't spend another quarter compensating for misalignment. Build the architecture that markets believe.</p>
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