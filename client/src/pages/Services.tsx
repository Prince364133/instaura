import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Services() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const metrics = [
    { value: "18", label: "Years", subtitle: "of Signal practice" },
    { value: "2500+", label: "Clients", subtitle: "across 4 continents" },
    { value: "250+", label: "Movements", subtitle: "breakthrough outcomes" },
    { value: "$2B+", label: "Moved", subtitle: "capital & value" }
  ];

  const services = [
    {
      title: "Signal Architecture",
      description: "Before capital, before scale, before growth — comes Signal. We decode what the market really believes about you, and re-architect it into the one decisive narrative that moves investors, customers, and talent.",
      features: [
        "Signal Diagnostic — brutal clarity on what's broken",
        "Narrative Architecture — rebuild how the market sees you", 
        "Market Calibration — align to investors, buyers, and partners",
        "Competitive Signal Recode — shift the frame of the entire game"
      ],
      href: "/signal-architecture"
    },
    {
      title: "Fund Raising",
      description: "Capital isn't closed on pitch decks. It's closed on signal. We don't chase investors — we architect the narrative, the flow, and the market belief that pulls capital toward you.",
      features: [
        "Capital Signal Diagnostic — decode why investors aren't buying",
        "Narrative Kit — investment story built to withstand scrutiny",
        "Investor Flow Architecture — doors, timing, and sequencing designed",
        "Deal Advisory — from first call to final close, precision on every move"
      ],
      href: "/fund-raising"
    },
    {
      title: "GTM & Funnels",
      description: "Markets don't move because you built a funnel. They move when your GTM sends the right signal to the right buyer at the right time. We build funnels that don't just convert clicks — they convert movements.",
      features: [
        "GTM Signal Design — map where and how to break into markets",
        "Funnel Architecture — design, build, and integrate for scale",
        "Market Activation — open doors in SEA, Middle East, US",
        "Strategic Sprint — short, high-intensity consulting to rewire GTM"
      ],
      href: "/gtm-funnels"
    },
    {
      title: "Strategy Consulting",
      description: "Most founders don't fail because of product or capital — they fail because they didn't make the one decisive move when it mattered. We don't give you decks; we give you clarity that alters trajectories.",
      features: [
        "The Signal Call — diagnose your biggest block in one high-intensity session",
        "Strategic Retainers — embed signal-first strategy into leadership motion",
        "Fractional Chief Strategist — carry signal into every boardroom decision"
      ],
      href: "/strategy-consulting"
    }
  ];

  const testimonials = [
    { quote: "Signal first. Everything changed — customers, capital, hires.", service: "Signal Architecture" },
    { quote: "Investor calls flipped from defense to demand in two weeks.", service: "Fund Raising" },
    { quote: "Funnels finally converted. Not clicks — pipeline.", service: "GTM & Funnels" },
    { quote: "One call reframed our quarter. The rest snapped into place.", service: "Strategy Consulting" }
  ];

  return (
    <div className="pt-16 bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* HERO */}
      <section className="relative px-6 pt-20 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-red-50/30"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-black leading-[0.9] tracking-tight">
                Signal-First Services. <span className="text-brand-red bg-gradient-to-r from-brand-red to-red-600 bg-clip-text text-transparent">Decisive Outcomes.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Capital. GTM. Growth. Strategy. None of it lands without the right Signal. Choose the service that unlocks your next move—or ask Yas where to start.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Talk to YAS
                </Button>
              </Link>
              <Button 
                onClick={scrollToServices}
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-900 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl hover:scale-[1.02] transition-all duration-500">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Not sure where to begin?</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                  <span>Need capital clarity? Start with <span className="font-bold text-gray-900">Fund Raising</span>.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                  <span>Market isn't moving? Start with <span className="font-bold text-gray-900">GTM & Funnels</span>.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                  <span>Story isn't landing? Start with <span className="font-bold text-gray-900">Signal Architecture</span>.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                  <span>High-stakes decision? Book <span className="font-bold text-gray-900">Strategy Consulting</span>.</span>
                </li>
              </ul>
              <div className="pt-6">
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-brand-red to-red-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Book a Signal Call →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE METRICS */}
      <ScrollReveal>
        <section className="px-6 py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Signal Architecture</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Results that speak louder than promises — across 18 years of signal-driven practice.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="group text-center rounded-3xl border-2 border-white/40 p-8 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 hover:border-brand-red/40 hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm font-bold uppercase text-gray-500 tracking-wider mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-gray-400">{metric.subtitle}</div>
                    <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SERVICES GRID */}
      <ScrollReveal>
        <section id="services" className="px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Core Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Four signal-driven services that turn belief into movement across every stage of growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <article key={index} className="group rounded-3xl border-2 border-white/40 p-8 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-105 hover:border-brand-red/40 hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-red transition-colors duration-300">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    
                    <ul className="text-gray-600 space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-3 flex-wrap pt-4">
                      <Link href={service.href}>
                        <Button className="bg-brand-red text-white px-6 py-3 rounded-2xl font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300">
                          Explore {service.title}
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-2xl font-semibold hover:border-brand-red hover:text-brand-red hover:scale-105 transition-all duration-300">
                          Talk to YAS
                        </Button>
                      </Link>
                    </div>
                    
                      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* REDACTED TESTIMONIALS */}
      <ScrollReveal>
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Founder Voices</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What happens when founders stop shouting and start signaling.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-white/60 p-6 shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">"</span>
                    </div>
                    <div className="w-3 h-3 bg-red-300 group-hover:bg-brand-red rounded-full transition-colors duration-300"></div>
                  </div>
                  <p className="italic text-gray-800 text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-700 mb-2">{testimonial.service}</div>
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
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
            <div className="md:flex md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">Explore Success Stories</h3>
                <p className="text-gray-600 mt-2">See how Signal changed outcomes—by service or by sector.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                <Link href="/insights#case-studies">
                  <Button variant="outline" className="border px-4 py-2 rounded-full">Browse by Service</Button>
                </Link>
                <Link href="/insights#case-studies">
                  <Button variant="outline" className="border px-4 py-2 rounded-full">Browse by Vertical</Button>
                </Link>
                <Link href="/insights">
                  <Button className="bg-brand-red text-white px-4 py-2 rounded-full hover:bg-red-700">View All Cases</Button>
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
          <h3 className="text-2xl font-semibold mb-3">Every decisive move begins with Signal.</h3>
          <p className="text-gray-300">
            You don't need another consultant — you need the one architecture that moves markets.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link href="/contact">
              <Button className="bg-brand-red text-white px-6 py-3 rounded-full hover:bg-red-700">Talk to YAS</Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100">Book a Signal Call</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}