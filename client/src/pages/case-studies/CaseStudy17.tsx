import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy17() {
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
          <span className="text-gray-900 font-medium">Case Study #17</span>
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
              Case Study #17
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-raleway leading-tight" data-testid="heading-title">
              Trust Signal in a Regulated Market
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed" data-testid="text-subtitle">
              Robust digital payments platform with strong adoption. Yet, banks and regulators perceived them as "too risky" and "unproven."
            </p>
          </motion.div>

          {/* Meta Badges */}
          <motion.div
            {...caseStudyAnimations.hero.badges}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Sector</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-sector">BFSI (Banking, Financial Services & Insurance)</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Service</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-service">Signal Architecture</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Stage</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-stage">Early Growth (Series A)</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Region</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-region">India (redacted)</p>
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
              A fintech startup had built a robust digital payments platform with strong early adoption. Yet, larger banks and regulators perceived them as "too risky" and "unproven." Despite technical reliability, the market doubted their ability to handle compliance and scale securely.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "We had the licenses and the tech. But we weren't seen as trustworthy enough for the next leap."
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
            <p className="mt-6 text-lg text-gray-700">In BFSI, trust is not optional — it is the market entry ticket.</p>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Trust as Market Entry Ticket</h3>
                <p className="mt-3 text-gray-700">Without institutional trust, the company risked being stuck with small clients.</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Risk of Being Stuck with Small Clients</h3>
                <p className="mt-3 text-gray-700">Without enterprise credibility, growth would remain capped.</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Investors Questioning Ability to Compete</h3>
                <p className="mt-3 text-gray-700">Investors questioned whether the startup could ever compete against incumbents.</p>
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
            We rebuilt the Signal Architecture for trust and inevitability:
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Identified missing signals — compliance proof and institutional endorsements.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Core</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Reframed company from "innovative fintech" → "secure, regulator-backed player."
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Proof Artifact Design</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Highlighted licenses, audits, and compliance as the lead story.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Market Calibration</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Developed collateral for investors and clients that emphasized inevitability through compliance signals.
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
                <p className="text-sm text-gray-500 uppercase tracking-wide">Client Wins</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-clients">2 Tier-1 Banks</p>
                <p className="mt-2 text-gray-700">Secured as clients</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Perception</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-perception">Inevitable</p>
                <p className="mt-2 text-gray-700">Moved from "risky" → "regulated inevitability"</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Closure Speed</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-closure">5 Accounts</p>
                <p className="mt-2 text-gray-700">Onboarded 5 enterprise accounts within 6 months</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Valuation Impact</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-valuation">+25%</p>
                <p className="mt-2 text-gray-700">Series A priced 25% higher due to strengthened credibility</p>
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
              The fintech startup broke through the credibility ceiling by turning compliance into a trust signal. Instead of being seen as a challenger, it was now perceived as an inevitable infrastructure layer for BFSI.
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "We thought licenses were paperwork. Instaura showed us they were our strongest signal. That changed how the entire market saw us."
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
              <Link href="/white-papers" className="block group">
                <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #11: Signal Velocity and Market Movement
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Understanding how signal velocity creates market momentum.
                  </p>
                </motion.div>
              </Link>
              <Link href="/white-papers" className="block group">
                <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #19: Why VC Deal Flow Depends on Signal
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    How trust signals unlock institutional investment.
                  </p>
                </motion.div>
              </Link>
              <Link href="/clarity-series" className="block group">
                <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-2 text-brand-red">
                    <BookOpen className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">Clarity Series</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #12: Why Valuation Is a Signal, Not a Number
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Understanding how valuation communicates credibility in regulated markets.
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
            In BFSI, trust isn't a byproduct — it's the signal. Architect it before you scale.
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
