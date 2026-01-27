import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy15() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 px-6 py-3 text-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-gray-600 flex items-center gap-2">
          <Link href="/" className="hover:underline" data-testid="link-home">
            Home
          </Link>
          <span>/</span>
          <Link href="/insights" className="hover:underline" data-testid="link-insights">
            INsights
          </Link>
          <span>/</span>
          <Link href="/case-studies" className="hover:underline" data-testid="link-case-studies">
            Case Studies
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Case Study #15</span>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section
        {...caseStudyAnimations.hero.section}
        className="bg-black text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <Link href="/case-studies">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition mb-6" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </button>
          </Link>
          
          <motion.div {...caseStudyAnimations.hero.title}>
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium" data-testid="text-case-number">
              Case Study #15
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-raleway leading-tight" data-testid="heading-title">
              Pilot-First GTM That Collapsed Enterprise Cycles
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed" data-testid="text-subtitle">
              Breakthrough AI-driven hardware platform. Enterprise customers unwilling to commit without proof. Traditional GTM dragged—sales cycles exceeding 12–15 months.
            </p>
          </motion.div>

          {/* Meta Badges */}
          <motion.div
            {...caseStudyAnimations.hero.badges}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Sector</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-sector">DeepTech & AI</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Service</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-service">GTM & Funnels</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Stage</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-stage">Seed → Series A Transition</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Region</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-region">Europe (redacted)</p>
            </div>
          </motion.div>

          <motion.div
            {...caseStudyAnimations.hero.cta}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/contact">
              <button className="bg-brand-red text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg" data-testid="button-talk-yas">
                Talk to Yas
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg" data-testid="button-signal-call">
                Book a Signal Call
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* The Conundrum */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          {...caseStudyAnimations.section}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-conundrum">
            The Conundrum
          </h2>
          <div className="mt-8 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A DeepTech startup had developed a breakthrough AI-driven hardware platform. The challenge: enterprise customers were unwilling to commit to long, expensive deployments without proof. Traditional GTM motions dragged on, with sales cycles exceeding 12–15 months. The startup's runway was vanishing, and investors questioned their commercialization path.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "Our tech was extraordinary. But no one wanted to bet without years of validation. We were stuck."
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* Why It Mattered */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            {...caseStudyAnimations.section}
  
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-why-it-mattered">
              Why It Mattered
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Risk of Being Labeled "Still in Lab"</h3>
                <p className="mt-3 text-gray-700">Without enterprise adoption, the company risked being labeled "still in lab."</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Long Cycles Draining Resources</h3>
                <p className="mt-3 text-gray-700">Long cycles drained resources and investor patience.</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Competitors Moving Ahead</h3>
                <p className="mt-3 text-gray-700">Competitors with weaker tech but sharper GTM were moving ahead.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          {...caseStudyAnimations.section}

        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-approach">
            Our Approach
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            We architected a Signal-led GTM Funnel around pilots:
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Identified that enterprises feared risk — they needed low-friction proof.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Pilot-first Strategy</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Designed a pilot funnel where enterprises could onboard in &lt;30 days.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Signal Narrative</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Reframed pilots not as "experiments" but as "early access inevitability."
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Velocity Motion</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Built dedicated sales collateral, proof decks, and funnels optimized for pilot conversion.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 5</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Market Calibration</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Positioned successful pilots as inevitability anchors for future scale.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Metrics Dashboard */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...caseStudyAnimations.section}
  
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-metrics">
              Metrics Dashboard
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Enterprise Pilots Secured</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-pilots">5</p>
                <p className="mt-2 text-gray-700">In 90 days</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Cycle Compression</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-cycle">15 → 5 Mo</p>
                <p className="mt-2 text-gray-700">Sales cycles reduced from 15 months → 5 months</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Confidence</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-investor">Bridge</p>
                <p className="mt-2 text-gray-700">Raised bridge capital citing pilot momentum</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Conversion Proof</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-conversion">3 Pilots</p>
                <p className="mt-2 text-gray-700">Converted into full-scale deployments</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          {...caseStudyAnimations.section}

        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-outcome">
            The Outcome
          </h2>
          <div className="mt-8 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              By shifting from "enterprise sales cycles" to "pilot-first inevitability," the company collapsed adoption timelines and transmitted inevitability to both customers and investors.
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "We stopped chasing endless cycles. Pilots became our inevitability signal — and suddenly enterprise doors opened."
            </blockquote>
            <figcaption className="mt-6 text-sm text-gray-500 font-medium">— Founder (redacted)</figcaption>
          </figure>
        </motion.div>
      </section>

      {/* Related Resources */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...caseStudyAnimations.section}
  
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-related">
              Related Resources
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <Link href="/white-papers/signal-first-gtm-design" className="block group">
                <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #12: Signal-First GTM Design
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    How to build go-to-market around proof artifacts, not campaigns.
                  </p>
                </motion.div>
              </Link>
              <Link href="/white-papers/the-gtm-sprint-that-reframed-a-market" className="block group">
                <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #15: The GTM Sprint That Reframed a Market
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Understanding how velocity creates inevitability in enterprise markets.
                  </p>
                </motion.div>
              </Link>
              <Link href="/contact?ask_ai=Tell%20me%20about%20%2311%3A%20Why%20DeepTech%20Dies%20in%20the%20Lab%20Without%20Signal" className="block group">
                <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white">
                  <div className="flex items-center gap-2 text-brand-red">
                    <BookOpen className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">Clarity Series</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #11: Why DeepTech Dies in the Lab Without Signal
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    How to bridge the credibility gap between lab and commercialization.
                  </p>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold font-raleway">Clarity → Movement.</h2>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            Your enterprise GTM doesn't need years. It needs pilots as inevitability signals. Architect the funnel.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-brand-red text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg" data-testid="button-talk-yas">
                Talk to Yas
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg" data-testid="button-signal-call">
                Book a Signal Call
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
