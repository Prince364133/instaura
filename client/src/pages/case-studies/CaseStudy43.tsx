import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";
import { ResourceCards, RelatedResource } from "../../components/ResourceCards";

export default function CaseStudy43() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const relatedResources: RelatedResource[] = [
    {
        "href": "/",
        "type": "White Paper",
        "title": "#5: GTM as Signal, Not Execution",
        "label": "White Paper"
    },
    {
        "href": "/contact?ask_ai=Tell%20me%20about%20%2316%3A%20Signal%20vs.%20Noise%20in%20Enterprise%20Sales",
        "type": "White Paper",
        "title": "#16: Signal vs. Noise in Enterprise Sales",
        "label": "White Paper"
    },
    {
        "href": "/contact?ask_ai=Tell%20me%20about%20%2312%3A%20Pilot%20Purgatory%20and%20How%20to%20Escape%20It",
        "type": "Clarity Series",
        "title": "#12: Pilot Purgatory and How to Escape It",
        "label": "Clarity Series"
    }
];

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
          <span className="text-gray-900 font-medium">Case Study #43</span>
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
              Case Study #43
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-raleway leading-tight" data-testid="heading-title">
              GTM Re-architecture for AI Infrastructure Adoption
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed" data-testid="text-subtitle">
              DeepTech AI infrastructure startup solved real problem: cutting compute costs for enterprises by 40%. Yet their GTM funnel wasn't moving. Pilots stretched endlessly, with no conversions into contracts.
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
              <p className="mt-2 font-semibold text-white" data-testid="text-stage">Series A (Commercial Pilots → Scale)</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Region</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-region">USA (redacted)</p>
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
              A DeepTech AI infrastructure startup had built a platform that genuinely solved a critical problem: cutting compute costs for enterprises by 40%. The technology was sound, the value proposition was clear, and the early pilots demonstrated real savings. Yet their GTM funnel was frozen. Pilots stretched endlessly — 15+ months — with no conversions into contracts.
            </p>
            <p>
              Enterprise buyers were interested but not convinced. The startup kept explaining the technology, showing benchmarks, running proof-of-concepts. But movement never materialized. The problem wasn't technical capability; it was signal architecture. Without a funnel designed for conversion velocity, interest never crystallized into action.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "We thought our technology would close deals. But the more we explained, the less anyone moved."
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
                <h3 className="font-semibold text-lg text-gray-900">Adoption Stalled at Proof-of-Concept</h3>
                <p className="mt-3 text-gray-700">Pilots were validating the technology but never converting into revenue-generating contracts.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Investors Flagged Pilot Purgatory</h3>
                <p className="mt-3 text-gray-700">Series A investors questioned commercialization viability without proof of conversion velocity.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Competitors Winning Contracts</h3>
                <p className="mt-3 text-gray-700">Rivals with weaker technology but sharper GTM funnels were capturing market share.</p>
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
            We re-architected their GTM funnel for conversion velocity, transforming pilots from validation loops into inevitability engines:
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Signal Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Diagnosed where pilots were leaking conversion energy — lack of decision triggers, unclear next steps, no urgency architecture.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Reset</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Shifted positioning from "cost-saving tool" to "default AI infrastructure for compute efficiency."
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Funnel Design</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Architected pilot-to-contract funnels with built-in conversion milestones, decision checkpoints, and urgency mechanisms.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Channel Playbook</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Built repeatable sales collateral, proof decks, and ROI calculators that signaled inevitability at every touchpoint.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 5</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Ownership Transfer</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Trained their sales team to execute the new funnel framework with velocity and precision.
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
                <p className="text-sm text-gray-500 uppercase tracking-wide">Pilot Conversion</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-conversion">10% → 55%</p>
                <p className="mt-2 text-gray-700">Pilot-to-contract conversion rate improvement</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Sales Cycle</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-cycle">15 → 6 Mo</p>
                <p className="mt-2 text-gray-700">Sales cycles compressed from 15 months to 6 months</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">ARR Growth</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-arr">3.2×</p>
                <p className="mt-2 text-gray-700">Annual recurring revenue multiplied within 9 months</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Impact</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-investor">Series B</p>
                <p className="mt-2 text-gray-700">Inbound Series B interest from tier-1 investors</p>
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
              Within 8 months, the company broke free from pilot purgatory. Conversion velocity accelerated, sales cycles compressed, and ARR growth signaled commercial traction to investors. The narrative shifted from "promising technology" to "default cost-saving infrastructure" — and the market responded.
            </p>
            <p>
              They didn't change their product. They re-architected their GTM funnel to transmit inevitability at every stage. And that changed everything — from enterprise adoption to investor confidence to competitive positioning.
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "Instaura showed us that pilots don't convert themselves — you have to architect the funnel for velocity. Once we did, our entire commercial trajectory changed."
            </blockquote>
            <figcaption className="mt-6 text-sm text-gray-500 font-medium">— Founder (redacted)</figcaption>
          </figure>
        </motion.div>
      </section>

            {/* Related Resources */}
      <ResourceCards resources={relatedResources} />

      {/* Final CTA */}
      <section className="bg-black text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            {...caseStudyAnimations.section}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-raleway">Clarity → Movement.</h2>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Your pilots don't need more time. They need funnel architecture designed for conversion velocity. Build the system.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
