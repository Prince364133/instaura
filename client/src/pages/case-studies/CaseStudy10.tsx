import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy10() {
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
          <span className="text-gray-900 font-medium">Case Study #10</span>
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
          <motion.div
            {...caseStudyAnimations.hero.title}
          >
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium" data-testid="text-case-number">
              Case Study #10
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-raleway leading-tight" data-testid="heading-title">
              Regulatory Milestones as Raise Signal
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed" data-testid="text-subtitle">
              A digital therapeutics company faced investor skepticism: "Too early—come back after approvals." Stuck without capital to fund milestones.
            </p>
          </motion.div>

          {/* Meta Badges */}
          <motion.div
            {...caseStudyAnimations.hero.badges}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Sector</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-sector">Healthcare & Pharma</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Service</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-service">Fund Raising</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Stage</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-stage">Series A</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Ticket Size</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-ticket">USD 8M</p>
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
              A digital therapeutics company had achieved early traction with pilot programs but faced strong skepticism from investors. The science was solid, but the regulatory journey was still in progress. Every meeting ended with the same objection: "Too early — come back after approvals."
            </p>
            <p>
              The founders were stuck in a paradox: without capital, they couldn't complete regulatory milestones; without milestones, they couldn't raise capital.
            </p>
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
              <motion.div 
                {...caseStudyAnimations.card}
                whileHover={caseStudyAnimations.card.whileHover}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm will-change-transform"
              >
                <h3 className="font-semibold text-lg text-gray-900">Capital Need</h3>
                <p className="mt-3 text-gray-700">The company needed capital to fund late-stage trials and compliance approvals.</p>
              </motion.div>
              <motion.div 
                {...caseStudyAnimations.card}
                whileHover={caseStudyAnimations.card.whileHover}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm will-change-transform"
              >
                <h3 className="font-semibold text-lg text-gray-900">Timeline Risk</h3>
                <p className="mt-3 text-gray-700">Without fresh funding, the timeline to market would slip, leaving competitors to capture early share.</p>
              </motion.div>
              <motion.div 
                {...caseStudyAnimations.card}
                whileHover={caseStudyAnimations.card.whileHover}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm will-change-transform"
              >
                <h3 className="font-semibold text-lg text-gray-900">Reputational Damage</h3>
                <p className="mt-3 text-gray-700">Weak signaling risked reputational damage in front of top-tier global investors.</p>
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
            We reframed the raise around regulatory milestones as inevitability signals:
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Capital Signal Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Identified which milestones mattered most to investors.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Core</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Positioned the raise not as "bridge to approval," but as "inevitability of compliant market entry."
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Investor Kit</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Built a deck that led with achieved milestones (IRB clearances, clinical validations, ethics committee approvals).
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Negotiation Advisory</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Prepared founders to anchor conversations around progressive inevitability instead of risk.
              </p>
            </div>
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
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Conversion</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-conversion">1 → 4</p>
                <p className="mt-2 text-gray-700">From hesitant to firm commitments</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Valuation Impact</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-valuation">1.6×</p>
                <p className="mt-2 text-gray-700">Higher than previous expectations</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Closure Timeline</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-timeline">70 Days</p>
                <p className="mt-2 text-gray-700">Round closed efficiently</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Strategic Capital</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-capital">2 Funds</p>
                <p className="mt-2 text-gray-700">Healthcare-focused, credible</p>
              </div>
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
              The company raised USD 8M Series A. More importantly, the investor perception flipped: from "high-risk bet" to "inevitable regulatory-compliant entrant."
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "We always thought approvals were the finish line. Instaura showed us that they were the signal. That shift closed our round."
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
              <Link href="/contact?ask_ai=Tell%20me%20about%20%239%3A%20Why%20Proof%20Without%20Signal%20Leaks%20Value" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white  hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #9: Why Proof Without Signal Leaks Value
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Evidence alone doesn't create movement—it needs strategic signal architecture.
                  </p>
                </div>
              </Link>
              <Link href="/white-papers/capital-as-signal-not-commodity" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white  hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #20: Capital as Signal, Not Commodity
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Understanding how capital decisions transmit inevitability to the market.
                  </p>
                </div>
              </Link>
              <Link href="/contact?ask_ai=Tell%20me%20about%20%2310%3A%20Why%20Regulatory%20Progress%20Is%20a%20Capital%20Artifact" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white  hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <BookOpen className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">Clarity Series</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #10: Why Regulatory Progress Is a Capital Artifact
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Regulatory milestones aren't delays—they're your capital signal.
                  </p>
                </div>
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
            Your regulatory journey isn't a delay. It's your capital signal. Architect it before you raise.
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
