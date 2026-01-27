import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy44() {
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
          <span className="text-gray-900 font-medium">Case Study #44</span>
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
              Case Study #44
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-raleway leading-tight" data-testid="heading-title">
              Strategic Reset for AI Infrastructure Scale
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed" data-testid="text-subtitle">
              AI infrastructure startup achieved strong early traction with enterprise pilots and $6M Series A. However, growth plateaued. They were chasing multiple use cases — telecom, finance, logistics — without dominance in any vertical.
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
              <p className="mt-2 font-semibold text-white" data-testid="text-service">Strategy Consulting</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Stage</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-stage">Series B (Scaling Phase)</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Region</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-region">USA & India (redacted)</p>
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
              An AI infrastructure startup had achieved strong early traction with enterprise pilots and successfully raised a $6M Series A. Their technology was impressive, and they had early customers across telecom, finance, and logistics. But growth plateaued. They were chasing multiple use cases across different verticals without achieving dominance in any single one. Investors flagged the lack of strategic focus. Teams burned resources on scattered opportunities that never converted to category leadership.
            </p>
            <p>
              The problem wasn't capability — it was clarity. They had movement everywhere, but no inevitability anywhere. Without vertical focus, they couldn't compound credibility, build network effects, or position themselves as the inevitable infrastructure choice for any single market.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "We had movement everywhere, but no inevitability anywhere."
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
                <h3 className="font-semibold text-lg text-gray-900">Lack of Clarity Diluted Investor Confidence</h3>
                <p className="mt-3 text-gray-700">Series B investors questioned whether the company could become a category leader anywhere.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Teams Burned Resources</h3>
                <p className="mt-3 text-gray-700">Engineering, sales, and marketing resources spread thin across too many verticals without achieving depth.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Competitors Overtaking with Narrower Focus</h3>
                <p className="mt-3 text-gray-700">Specialized competitors with vertical focus were gaining traction faster in telecom, finance, and logistics individually.</p>
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
            We executed a Strategic Reset to architect vertical focus and rebuild inevitability:
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Signal Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Analyzed where the strongest market signal resided — telecom emerged as the vertical with the highest adoption velocity and network effect potential.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Reset</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Repositioned from "AI infrastructure for multiple industries" to "inevitable infrastructure for telecom AI transformation."
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Strategy Sprint</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Designed a 90-day sprint to consolidate all efforts around telecom — product roadmap, sales focus, case study development, and thought leadership.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Investor Alignment</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Rebuilt the Series B narrative around vertical dominance, showcasing telecom adoption metrics and category inevitability.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 5</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Fractional Strategy Engagement</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Embedded quarterly strategic reviews to maintain focus discipline, prevent vertical drift, and ensure execution aligned with telecom inevitability.
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
                <p className="text-sm text-gray-500 uppercase tracking-wide">Vertical Focus</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-vertical">4× Telecom</p>
                <p className="mt-2 text-gray-700">Adoption velocity in 6 months</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Series B Success</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-series-b">$22M at 2.3×</p>
                <p className="mt-2 text-gray-700">Valuation multiple vs. initial projection</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Execution Efficiency</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-efficiency">-30%</p>
                <p className="mt-2 text-gray-700">Engineering costs through focused roadmap</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Market Perception</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-perception">Category Inevitable</p>
                <p className="mt-2 text-gray-700">In telecom AI infrastructure</p>
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
              Within 6 months, the company transitioned from scattered opportunity seeker to inevitable telecom infrastructure partner. Telecom adoption accelerated 4× as they compounded credibility within a single vertical. They raised $22M in Series B at a 2.3× higher valuation than initially projected, with investors citing vertical dominance as the key signal. Engineering efficiency improved by 30% as the roadmap consolidated around telecom-specific features.
            </p>
            <p>
              Most importantly, they stopped being compared to "other AI infrastructure plays" and started being seen as the category-defining infrastructure for telecom AI transformation. Strategic focus didn't limit their ambition — it amplified their inevitability.
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "We thought vertical focus would limit us. Instaura showed us that focus creates inevitability. Once we stopped chasing everything, telecom adopted us everywhere."
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
              <Link href="/white-papers/signal-velocity-and-market-movement" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white  hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #11: Signal Velocity and Market Movement
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Understanding how vertical focus creates compounding credibility and market gravity.
                  </p>
                </div>
              </Link>
              <Link href="/contact?ask_ai=Tell%20me%20about%20%2316%3A%20Signal%20vs.%20Noise%20%E2%80%94%20Why%20Belief%20Beats%20Performance" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white  hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #16: Signal vs. Noise — Why Belief Beats Performance
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    How strategic clarity transforms perception from scattered player to category inevitable.
                  </p>
                </div>
              </Link>
              <Link href="/contact?ask_ai=Tell%20me%20about%20%2312%3A%20The%20Focus%20Paradox" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white  hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <BookOpen className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">Clarity Series</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #12: The Focus Paradox
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Why vertical specialization amplifies market opportunity instead of limiting it.
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
          <motion.div
            {...caseStudyAnimations.section}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-raleway">Clarity → Movement.</h2>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Your technology isn't the problem. Your strategic scatter is. Focus creates inevitability. Let's architect yours.
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
