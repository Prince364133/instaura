import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import signalBg from "@/assets/signal-bg.jpg";

export default function Home() {
  const [sector, setSector] = useState("");
  const [service, setService] = useState("");

  const submitCaseStudySearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (sector) params.set('sector', sector);
    if (service) params.set('service', service);
    // Navigate to insights page with case studies section
    const targetUrl = params.toString() ? `/insights#case-studies?${params.toString()}` : '/insights#case-studies';
    window.location.href = targetUrl;
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
      description: "Architect belief before you move.",
      href: "/signal-architecture"
    },
    {
      title: "Fund Raising",
      description: "Capital follows conviction, not slides.",
      href: "/fund-raising"
    },
    {
      title: "GTM & Funnels",
      description: "Growth when the signal is clear.",
      href: "/gtm-funnels"
    },
    {
      title: "Strategy Consulting",
      description: "Clarity that becomes movement.",
      href: "/strategy-consulting"
    }
  ];

  const verticals = [
    { title: "Technology", description: "SaaS, Cloud, Data, and more", href: "/verticals/technology" },
    { title: "Consumer Products", description: "D2C, Omnichannel, Marketplaces, and more", href: "/verticals/consumer-products" },
    { title: "Healthcare & Pharma", description: "HealthTech, Diagnostics, Providers, and more", href: "/verticals/healthcare-pharma" },
    { title: "DeepTech & AI", description: "ML, Edge, Robotics, and more", href: "/verticals/deeptech-ai" }
  ];

  const insights = [
    {
      title: "Clarity Series",
      description: "Field notes from real Signal Calls.",
      href: "/insights#clarity-series"
    },
    {
      title: "White Papers",
      description: "Deep dives on capital, GTM, and strategy.",
      href: "/insights#white-papers"
    },
    {
      title: "Case Studies",
      description: "Redacted, signal-rich movements across sectors.",
      href: "/insights#case-studies"
    }
  ];

  const whySignal = [
    { title: "Belief sets price", description: "Signal lifts multiples and cleans terms." },
    { title: "Clarity compresses time", description: "Sequencing and calibration cut cycles." },
    { title: "Signal raises WTP", description: "Customers pay more when belief is clear." },
    { title: "Being chosen", description: "Signal turns selling into being chosen." }
  ];

  const testimonials = [
    { quote: "We stopped shouting. Started signaling. Everything changed.", author: "Founder — Health" },
    { quote: "Pilots finally converted. The story became inevitable.", author: "CEO — SaaS" },
    { quote: "Terms improved because belief improved.", author: "Founder — DeepTech" }
  ];

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${signalBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Animated signal lines overlay */}
        <div className="absolute inset-0 z-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-brand-red rounded-full animate-pulse shadow-lg shadow-brand-red/50"></div>
            {/* Signal line animations */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-px bg-gradient-to-r from-brand-red/80 to-transparent animate-pulse"
                style={{
                  height: '200px',
                  transform: `rotate(${i * 45}deg) translateY(-100px)`,
                  transformOrigin: 'bottom',
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-30 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center text-white">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tight">
                Signal is the{' '}
                <span className="relative">
                  <span className="text-brand-red">Only Basis</span>
                  <div className="absolute -inset-1 bg-brand-red/10 blur-sm rounded-lg -z-10"></div>
                </span>
                .
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-lg">
                Every real outcome — capital, clarity, growth, scale — begins with one thing:
                <span className="font-bold text-white"> Signal. Not noise.</span> We build. You move.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-brand-red/25 backdrop-blur-sm border border-brand-red/20">
                  Talk to YAS
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl">
                  Book a Signal Call
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 hover:bg-white/15 hover:scale-[1.02] transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <h3 className="text-lg font-bold text-white">Your First Move</h3>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  Ask Yas anything — services, case studies, GTM models, capital readiness, or to book a Signal Call.
                </p>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-brand-red to-red-600 text-white px-6 py-4 rounded-2xl font-semibold hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg border border-brand-red/20">
                      Start the Conversation →
                    </Button>
                  </Link>
                </div>

                {/* Signal strength indicator */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>Signal Strength</span>
                    <span className="text-green-400 font-semibold">Strong</span>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-8 rounded-full ${i < 4 ? 'bg-brand-red' : 'bg-gray-600'
                          } transition-all duration-500`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center space-y-2 text-white/60 animate-bounce">
            <span className="text-xs font-medium">Scroll to explore</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </section>

      {/* PEDIGREE + CLAIM */}
      <ScrollReveal>
        <section className="px-6 py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Signal Architecture</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                <span className="font-bold text-gray-900">Instaura is the first and only Signal-Driven Consulting Firm.</span>
                {" "}We don't sell slides or noise. We architect signal — the decisive basis of every outcome.
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
                    <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">
                      {metric.label}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {metric.subtitle}
                    </div>
                    <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHAT WE DO */}
      <ScrollReveal>
        <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-50/30" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-4 sm:gap-6">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">What We Do</h2>
                <Link href="/services" className="inline-flex items-center text-brand-red font-bold hover:text-red-600 transition-colors duration-300 group">
                  View All Services
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Signal-driven services that turn belief into movement across every stage of growth.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link key={index} href={service.href} className="h-full">
                  <div className="group block rounded-3xl border-2 border-white/40 p-8 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-105 hover:border-brand-red/40 hover:bg-white/80 transition-all duration-500 h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col h-full space-y-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
                        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* MARKET VERTICALS */}
      <ScrollReveal>
        <section className="px-6 py-20 bg-white" id="verticals">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Market Verticals</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Signal-driven expertise across <span className="font-bold text-gray-900">key market verticals</span>.
                {" "}Every industry moves differently. We architect the right signal for yours.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {verticals.map((vertical, index) => (
                <Link key={index} href={vertical.href} className="h-full">
                  <div className="group block rounded-3xl border-2 border-white/60 p-6 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500 h-full">
                    <div className="flex flex-col h-full space-y-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors duration-300">
                        {vertical.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{vertical.description}</p>
                      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* INSIGHTS */}
      <ScrollReveal>
        <section className="px-6 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" id="insights">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <h2 className="text-4xl md:text-5xl font-black">Signal Insights</h2>
                <Link href="/insights" className="ml-6 inline-flex items-center text-brand-red font-bold hover:text-red-400 transition-colors duration-300 group">
                  Enter Insights Hub
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Deep dives, case studies, and frameworks from the world's first signal-driven knowledge hub.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <Link key={index} href={insight.href}>
                  <div className="group block rounded-3xl border border-gray-700 p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:border-brand-red/50 hover:shadow-2xl hover:scale-105 transition-all duration-500">
                    <div className="space-y-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">{String.fromCharCode(65 + index)}</span>
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-brand-red transition-colors duration-300">
                        {insight.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{insight.description}</p>
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-brand-red font-semibold">Explore</span>
                        <svg className="w-5 h-5 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>





      {/* WHY SIGNAL */}
      <ScrollReveal>
        <section className="px-6 py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/20" id="why-signal">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Signal Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Signal is the foundation of every meaningful movement. Here's how it transforms outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whySignal.map((item, index) => (
                <div key={index} className="group rounded-3xl border-2 border-white/40 p-8 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-105 hover:border-brand-red/40 hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                        <span className="text-white font-bold text-2xl">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* YAS BLOCK */}
      <ScrollReveal>
        <section className="px-6 py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white" id="yas">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-brand-red/20 border border-brand-red/30 rounded-full">
                  <span className="text-brand-red text-sm font-semibold">YAS • Signal AI</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                  YAS — Your <span className="text-brand-red">First Move</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Not a chatbot. A signal-trained interface to how Instaura thinks, works, and moves. Ask Yas about services, outcomes, GTM models, capital readiness — or to book a Signal Call.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-brand-red text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg">
                    Talk to YAS
                  </Button>
                </Link>
                <Link href="/insights">
                  <Button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                    Enter Insights
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm text-white rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-300">Live Preview</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-brand-red/10 rounded-2xl p-4 border-l-4 border-brand-red">
                    <p className="text-white">"Hi Yas, are we signal-ready for a US enterprise GTM?"</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 border-l-4 border-white/30">
                    <p className="text-gray-200">"Let's run a 5-minute diagnostic. If the buyer signal is weak, we'll fix that first."</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Powered by Signal Architecture</span>
                  <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FOUNDER VOICES */}
      <ScrollReveal>
        <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-50/30" id="voices">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Founder Voices</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What happens when founders stop shouting and start signaling.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-white/60 p-8 shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold">"</span>
                      </div>
                      <div className="w-2 h-2 bg-brand-red/30 group-hover:bg-brand-red rounded-full transition-colors duration-300"></div>
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed font-medium italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-gray-600">{testimonial.author}</div>
                      <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red rounded-full transition-all duration-300"></div>
                    </div>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FINAL CTA */}
      <section className="px-6 py-14 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold">Every real outcome begins with Signal.</h3>
          <p className="text-gray-700 mt-2">Build it once. Let every move compound.</p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link href="/contact">
              <Button className="bg-brand-red text-white px-6 py-3 rounded-full hover:bg-red-700">Book a Signal Call</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border border-gray-900 px-6 py-3 rounded-full">Talk to YAS</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}