import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy14() {
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
          <span className="text-gray-900 font-medium">Case Study #14</span>
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
              Case Study #14
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-raleway leading-tight" data-testid="heading-title">
              Pre-Product, Proof-Led $4M Seed Raise
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed" data-testid="text-subtitle">
              The AI company had deep technical talent and patents but no live product or revenue. Every investor pushed back: "Come back after you build."
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
              <p className="mt-2 font-semibold text-white" data-testid="text-service">Fund Raising</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Stage</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-stage">Seed (Pre-Revenue, Infrastructure Build Stage)</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Ticket Size</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-ticket">USD 4M</p>
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
              The AI company had deep technical talent and patents but no live product or revenue. Every investor pushed back: "Come back after you build."
            </p>
            <p>
              The founders faced the classic DeepTech trap — without capital, they couldn't build infrastructure; without infrastructure, they couldn't raise capital.
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
              <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Capital Required for Infrastructure</h3>
                <p className="mt-3 text-gray-700">Capital was required for infrastructure build and early pilots.</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Competitors Overtaking</h3>
                <p className="mt-3 text-gray-700">Without funding, the company risked competitors overtaking them in visibility.</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Pre-Product Perceived as Too Early</h3>
                <p className="mt-3 text-gray-700">Investors perceived "pre-product" as "too early," despite strong technical IP.</p>
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
            We architected a Signal-first Capital Raise strategy:
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Capital Signal Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Identified proof points already available — patents, pilot MOUs, academic partnerships.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Core</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Reframed pitch: "This isn't early research. This is inevitable infrastructure."
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Investor Kit</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Designed decks and briefs where proof artifacts (MOU + pilot commitments) were the lead slide, not buried.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Negotiation Advisory</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Repositioned investor conversation from "fund risky build" → "fund inevitable trajectory."
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
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Conversion</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-conversion">9 → 3</p>
                <p className="mt-2 text-gray-700">Term sheet discussions → active negotiations</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Valuation</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-valuation">USD 4M</p>
                <p className="mt-2 text-gray-700">Higher than expected for pre-revenue stage</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Timeline</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-timeline">80 Days</p>
                <p className="mt-2 text-gray-700">Round closed efficiently</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Strategic Capital</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-capital">2 Investors</p>
                <p className="mt-2 text-gray-700">With domain expertise, amplifying credibility</p>
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
              The company raised USD 4M pre-product, breaking the deadlock. Capital was not seen as risky funding — it was read as an inevitability signal for infrastructure build.
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "We thought no one would fund us before product. Instaura showed us how to turn proof into inevitability. That's what closed the round."
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
              <Link href="/white-papers/the-cost-of-wrong-capital" className="block group">
                <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #10: The Cost of Wrong Capital
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Understanding how the wrong investors can destroy signal and momentum.
                  </p>
                </motion.div>
              </Link>
              <Link href="/white-papers/capital-as-signal-not-commodity" className="block group">
                <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #20: Capital as Signal, Not Commodity
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    How fundraising communicates inevitability in the market.
                  </p>
                </motion.div>
              </Link>
              <Link href="/contact?ask_ai=Tell%20me%20about%20%2319%3A%20Why%20VCs%20Struggle%20with%20Deal%20Flow" className="block group">
                <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white">
                  <div className="flex items-center gap-2 text-brand-red">
                    <BookOpen className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">Clarity Series</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #19: Why VCs Struggle with Deal Flow
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Understanding investor perspectives on early-stage signal validation.
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
            Even pre-product, capital is possible — if your proof transmits inevitability. Architect the capital signal.
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
