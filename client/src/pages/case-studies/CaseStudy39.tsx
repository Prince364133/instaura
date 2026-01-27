import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy39() {
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
          <span className="text-gray-900 font-medium">Case Study #39</span>
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
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
              Case Study #39
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight font-raleway">
              Funnel Redesign for Hospital Adoption
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
              Medtech company developed cutting-edge diagnostics device that reduced test turnaround by 70%. Despite strong clinical validation, adoption among hospitals remained slow.
            </p>
          </motion.div>

          {/* Meta Badges */}
          <motion.div 
            {...caseStudyAnimations.hero.badges}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Sector</p>
              <p className="mt-2 font-semibold text-white">Healthcare & Pharma</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Service</p>
              <p className="mt-2 font-semibold text-white">GTM & Funnels</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Stage</p>
              <p className="mt-2 font-semibold text-white">Pre-Series B (Commercialization Phase)</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Region</p>
              <p className="mt-2 font-semibold text-white">India (redacted)</p>
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
              A medtech startup had developed a cutting-edge diagnostics device that reduced test turnaround times by 70%. Clinical validation was exceptional. Early hospital pilots confirmed the technology worked flawlessly. Yet when it came to scaling beyond pilot programs, adoption stalled. Hospital procurement committees saw them as "too new," "too risky," and "not yet proven at scale." Decision cycles stretched to 18+ months, and many conversations ended without contracts.
            </p>
            <p>
              The problem wasn't the device — it was the funnel. The company was treating hospitals like retail buyers: product demos, feature comparisons, pricing negotiations. But hospitals don't buy on features alone. They buy on institutional trust, proven integration, and inevitability of adoption across their infrastructure. The funnel was designed for transactional sales, not institutional credibility.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "We treated hospitals like retail buyers. We weren't signaling that we belonged in clinical infrastructure."
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
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Adoption Cycles Stretched 18 Months</h3>
                <p className="mt-3 text-gray-700">Without institutional trust signals, procurement committees remained stuck in perpetual evaluation.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Hospital CFOs Dismissed Them as Too Small</h3>
                <p className="mt-3 text-gray-700">Perceived as a startup rather than a scalable infrastructure partner.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Investors Flagged Slow Commercialization</h3>
                <p className="mt-3 text-gray-700">Pre-Series B depended on proving go-to-market velocity — which was blocked by funnel design.</p>
              </div>
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
            We redesigned the funnel to signal institutional inevitability, not transactional product sales:
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 font-bold text-xl text-gray-900">Funnel Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Identified where trust was leaking — demos focused on features, not on institutional credibility and scalability proof.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 font-bold text-xl text-gray-900">Trust-First Funnel Build</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Rebuilt the sales funnel: proof-of-institutional-fit first, product capability second — reordering how hospitals encountered the company.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 font-bold text-xl text-gray-900">Narrative Reset</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Shifted positioning from "innovative diagnostics startup" to "institutional infrastructure partner for hospital systems."
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 font-bold text-xl text-gray-900">Artifacts</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Created proof anchors for each funnel stage: case studies showing integration success, ROI calculators, deployment roadmaps.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 5</p>
              <h3 className="mt-3 font-bold text-xl text-gray-900">Ownership Transfer</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Coached sales team to run the new funnel with institutional signal discipline — no feature wars, only trust-building.
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
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Adoption Velocity</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-adoption">18 → 9 Months</p>
                <p className="mt-2 text-gray-700">Sales cycle time cut in half</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Enterprise Conversion</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-enterprise">5 Major Chains</p>
                <p className="mt-2 text-gray-700">In 12 months post-funnel redesign</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Response</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-investor">Inbound VC Interest</p>
                <p className="mt-2 text-gray-700">Based on commercialization velocity</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Revenue Impact</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-revenue">3.5× ARR</p>
                <p className="mt-2 text-gray-700">Driven by scalable hospital contracts</p>
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
              Within 12 months, the company transitioned from being seen as "pilot-stage startup" to "institutional inevitability in hospital diagnostics." Five major hospital chains adopted the platform. Sales cycles dropped from 18 months to under 9 months. Revenue tripled. And investors — who had previously flagged slow commercialization — began reaching out inbound, seeing the funnel velocity as proof of market inevitability.
            </p>
            <p>
              The product didn't change. The funnel did. And once the funnel was designed to signal institutional trust rather than transactional product features, everything moved faster — from procurement committees to investor confidence to revenue growth.
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "We were talking to hospitals like we were selling software. Instaura showed us we needed to signal like infrastructure. Once we fixed that, adoption became inevitable."
            </blockquote>
            <figcaption className="mt-6 text-sm text-gray-500 font-medium">— Founder (redacted)</figcaption>
          </figure>
        </motion.div>
      </section>

      {/* Related Resources */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...caseStudyAnimations.section}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway">Related Resources</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <Link href="/white-papers/gtm-as-signal-not-execution">
                <motion.div 
                  className="group bg-white border border-gray-300 shadow-md hover:shadow-xl bg-white rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#5: GTM as Signal, Not Execution</p>
                  <p className="mt-3 text-gray-700 text-sm">Understanding how go-to-market design shapes institutional perception and adoption velocity.</p>
                </motion.div>
              </Link>
              <Link href="/white-papers/talent-as-signal-in-early-stage-growth">
                <motion.div 
                  className="group bg-white border border-gray-300 shadow-md hover:shadow-xl bg-white rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#8: Talent as Signal in Early-Stage Growth</p>
                  <p className="mt-3 text-gray-700 text-sm">How team composition signals institutional readiness to enterprise buyers.</p>
                </motion.div>
              </Link>
              <Link href="/contact?ask_ai=Tell%20me%20about%20%239%3A%20Why%20Clinical%20Validation%20Alone%20Isn't%20Enough">
                <motion.div 
                  className="group bg-white border border-gray-300 shadow-md hover:shadow-xl bg-white rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Clarity Series</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#9: Why Clinical Validation Alone Isn't Enough</p>
                  <p className="mt-3 text-gray-700 text-sm">The gap between technical proof and institutional trust in healthcare markets.</p>
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
            Your technology works. Your funnel doesn't signal trust. Fix the funnel, and adoption accelerates.
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
