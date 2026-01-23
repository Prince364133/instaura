import { Link } from "wouter";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function DefenseSecurityVertical() {
  const metrics = [
    { value: "$2T+", label: "Global Defense Spending", sublabel: "capital flows into credibility" },
    { value: "12–24 mo", label: "Procurement Cycle", sublabel: "governments and primes" },
    { value: "3–4x", label: "Faster Approvals", sublabel: "when narrative aligns" },
    { value: "70%+", label: "Defense Startups Stall", sublabel: "lack of trust signal" }
  ];

  const approachSteps = [
    {
      title: "1) Diagnose",
      description: "Audit credibility signals: defense readiness, compliance, dual-use narrative, and stakeholder trust gaps."
    },
    {
      title: "2) Architect",
      description: "Reframe core positioning: inevitable adoption, aligned with mission priorities. Calibrate signal across defense, investors, and partners."
    },
    {
      title: "3) Activate",
      description: "Sequence defense pilots, partner credibility signals, and capital pathways to primes and aligned investors."
    }
  ];

  const services = [
    {
      title: "Signal Architecture",
      description: "Reframe prototypes into trusted systems.",
      includes: "Diagnostic · Narrative Architecture · Calibration",
      href: "/signal-architecture",
      badge: "Start Here",
      badgeClass: "text-brand-red text-xs font-semibold px-2 py-1 rounded-full bg-red-50"
    },
    {
      title: "Fund Raising",
      description: "Capital signals aligned with mission-readiness and dual-use potential.",
      includes: "Narrative Kit · Investor Flow · Deal Advisory",
      href: "/fund-raising",
      badge: "Model 1 / Model 2",
      badgeClass: "text-xs font-semibold px-2 py-1 rounded-full bg-gray-100"
    },
    {
      title: "GTM & Funnels",
      description: "Procurement-focused funnels for primes, governments, and partners.",
      includes: "GTM Design · Funnel Architecture · Activation",
      href: "/gtm-funnels",
      badge: "Design + Build",
      badgeClass: "text-xs font-semibold px-2 py-1 rounded-full bg-gray-100"
    },
    {
      title: "Strategy Consulting",
      description: "Advisory on capital pathways, international partners, and mission alignment.",
      includes: "Models: The Signal Call · Retainers · Fractional Strategist",
      href: "/strategy-consulting",
      badge: "High-Stakes",
      badgeClass: "text-xs font-semibold px-2 py-1 rounded-full bg-gray-100"
    }
  ];

  const testimonials = [
    {
      quote: "We had a breakthrough, but no credibility. Instaura rebuilt the signal that opened doors at the Ministry.",
      author: "Founder — Defense Startup"
    },
    {
      quote: "Our dual-use play was lost between civilian and defense. Signal reframed us as indispensable.",
      author: "CEO — Embedded Systems"
    },
    {
      quote: "They didn't just polish our deck — they created the trust story that closed $23M.",
      author: "Co-Founder — Defense Manufacturing"
    }
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16 bg-white text-gray-800">
      {/* BREADCRUMB */}
      <header className="bg-gray-50 px-6 py-3 text-sm">
        <div className="max-w-6xl mx-auto text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> /
          <Link href="/verticals" className="hover:underline ml-1 mr-1">Verticals</Link> /
          <span className="text-gray-900 font-medium ml-1">Defense & Security</span>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-10 pb-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Defense & Security <span className="text-brand-red">Signal</span>. Trust Before Technology.
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Subsectors: <span className="font-medium text-gray-700">Defense Tech, Dual-Use Systems, Security Infrastructure, and more</span>
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Defense markets don't move on prototypes — they move on credibility. Signal wins governments, primes, and capital before contracts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-6 py-3 rounded-full hover:bg-red-700">
                  Talk to YAS
                </Button>
              </Link>
              <Button 
                onClick={() => scrollToSection('signal-approach')}
                variant="outline" 
                className="border border-gray-900 px-6 py-3 rounded-full hover:bg-gray-50"
              >
                See Our Approach
              </Button>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Backed by 18 years • 2500+ clients • 250+ movements • $2B+ moved
            </p>
          </div>
          <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
            <h3 className="text-sm font-semibold mb-2 group-hover:text-brand-red transition-colors duration-300">Where we create decisive movement</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
              <li>UAV reconnaissance company → raised $7.2M in 4 months with credibility-first narrative</li>
              <li>Embedded systems defense manufacturer → closed $23M in 6 months with repositioned signal</li>
              <li>Dual-use defense tech → reframed as mission-critical, unlocked global partnerships</li>
            </ul>
            <div className="mt-4 flex gap-2 flex-wrap">
              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-brand-red text-white px-4 py-2 rounded-full text-sm hover:bg-red-700"
              >
                Relevant Services
              </Button>
              <Button 
                onClick={() => scrollToSection('success')}
                variant="outline"
                className="border px-4 py-2 rounded-full text-sm"
              >
                Success Stories
              </Button>
            </div>
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
              <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY METRICS */}
      <ScrollReveal>
        <section className="px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Industry Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:border-brand-red/30 transition-all duration-500">
                  <div className="text-3xl font-extrabold text-brand-red group-hover:text-red-600 transition-colors duration-300">{metric.value}</div>
                  <div className="text-xs uppercase text-gray-500 mt-1">{metric.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{metric.sublabel}</div>
                  <div className="w-6 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-400">*Metrics are directional; specifics provided in-session.</p>
          </div>
        </section>
      </ScrollReveal>

      {/* THE CONUNDRUM */}
      <ScrollReveal>
        <section className="px-6 py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The Conundrum</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-800">
                <p><strong>Prototype ≠ deployment:</strong> Defense buyers don't care if tech works in the lab — they care if it works in the field, under pressure.</p>
                <p><strong>Credibility gap:</strong> Founders with tech breakthroughs often fail to inspire trust with defense stakeholders.</p>
                <p><strong>Capital paradox:</strong> Dual-use systems fall between defense primes and VCs, leaving capital gaps. Signal reframes them as inevitabilities.</p>
                <p><strong>Procurement inertia:</strong> Government and defense markets move slowly — unless signal reframes urgency and readiness.</p>
              </div>
              <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <h3 className="font-semibold text-brand-red mb-2 group-hover:text-red-600 transition-colors duration-300">What We See Most Often</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>Brilliant engineers unable to convince procurement officers</li>
                  <li>Dual-use startups stuck between defense and civilian positioning</li>
                  <li>Pitches overloaded with technical jargon, underloaded with mission signal</li>
                  <li>Investors rejecting defense plays due to perceived opacity and timelines</li>
                </ul>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SIGNAL APPROACH */}
      <ScrollReveal>
        <section id="signal-approach" className="px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Our Signal Approach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {approachSteps.map((step, index) => (
                <article key={index} className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                  <h3 className="font-semibold group-hover:text-brand-red transition-colors duration-300">{step.title}</h3>
                  <p className="mt-2 text-gray-700">{step.description}</p>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/signal-architecture">
                <Button className="bg-brand-red text-white px-5 py-3 rounded-full hover:bg-red-700">
                  Read: Signal Architecture
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SERVICES BLOCK */}
      <ScrollReveal>
        <section id="services" className="px-6 py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Services for Defense & Security</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Link key={index} href={service.href}>
                  <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">{service.title}</h3>
                      <span className={service.badgeClass}>{service.badge}</span>
                    </div>
                    <p className="mt-2 text-gray-700 text-sm">{service.description}</p>
                    <p className="mt-3 text-xs text-gray-500">Includes: {service.includes}</p>
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

      {/* REDACTED TESTIMONIALS */}
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

      {/* EXPLORE SUCCESS STORIES */}
      <ScrollReveal>
        <section id="success" className="px-6 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
            <div className="md:flex md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Explore Success Stories</h3>
                <p className="text-gray-600 mt-2">See how Signal changed outcomes in Defense & Security.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                <Link href="/insights?vertical=defense-security">
                  <Button variant="outline" className="border px-4 py-2 rounded-full">
                    By Vertical
                  </Button>
                </Link>
                <Link href="/insights?service=all">
                  <Button variant="outline" className="border px-4 py-2 rounded-full">
                    By Service
                  </Button>
                </Link>
                <Link href="/insights">
                  <Button className="bg-brand-red text-white px-4 py-2 rounded-full hover:bg-red-700">
                    View All Cases
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6">
              <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CONCLUSION */}
      <section className="px-6 py-14 bg-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-3">Every decisive defense move begins with Signal.</h3>
          <p className="text-gray-300">Governments don't buy prototypes. They buy trust.</p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link href="/contact">
              <Button className="bg-brand-red text-white px-6 py-3 rounded-full hover:bg-red-700">
                Talk to Yas
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100">
                Book a Signal Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}