import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy24() {
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
          <span className="text-gray-900 font-medium">Case Study #24</span>
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
              Case Study #24
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-raleway leading-tight" data-testid="heading-title">
              Strategic Reset for a Stalled Developer
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed" data-testid="text-subtitle">
              Regional developer with multiple mid-scale projects stalled expansion. Cash flows uneven, brand recognition weak, investor confidence slipping.
            </p>
          </motion.div>

          {/* Meta Badges */}
          <motion.div 
            {...caseStudyAnimations.hero.badges}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Sector</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-sector">Real Estate</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Service</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-service">Strategy Consulting</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Stage</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-stage">Series B (Growth Transition)</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Region</p>
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
        <motion.div {...caseStudyAnimations.section}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-conundrum">
            The Conundrum
          </h2>
          <div className="mt-8 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A regional real estate developer had delivered multiple mid-scale residential projects over 15 years, but growth had stalled. They were stuck between small-scale local projects and the capital-heavy expansion they aspired to. Cash flows were uneven, brand recognition weak, and investor confidence slipping. Execution was competent but unremarkable, and the narrative was invisible.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "We were spread thin. Projects were delivered, but our story wasn't moving anyone — not buyers, not investors."
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* Why It Mattered */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...caseStudyAnimations.section}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-why-it-mattered">
              Why It Mattered
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <h3 className="font-semibold text-lg text-gray-900">Risk of Being Stuck as Local Player</h3>
                <p className="mt-3 text-gray-700">Without strategic clarity, they risked permanent stagnation as a regional commodity.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <h3 className="font-semibold text-lg text-gray-900">Weak Investor Interest</h3>
                <p className="mt-3 text-gray-700">Investors didn't see a scalable narrative — just scattered delivery.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <h3 className="font-semibold text-lg text-gray-900">Teams Losing Motivation</h3>
                <p className="mt-3 text-gray-700">Internal teams were demotivated by the lack of direction and momentum.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div {...caseStudyAnimations.section}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-approach">
            Our Approach
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            We engineered a strategic reset through Signal Architecture and execution discipline:
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Signal Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Diagnosed where signal was leaking: invisible brand, scattered messaging, and no investor narrative.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Reset</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Repositioned them from "scattered executor" to "community-first developer with signal-driven growth."
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Quarterly Strategy Sprints</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Installed 90-day execution sprints with clear signal milestones — clarity over chaos.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Investor Narrative Kit</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Built collateral and pitch narrative for investor confidence and fundraising preparation.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 5</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Fractional Strategy Engagement</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Embedded fractional strategic oversight to maintain execution velocity without diluting ownership.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Metrics Dashboard */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-metrics">
              Metrics Dashboard
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Occupancy Signal</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-occupancy">75%</p>
                <p className="mt-2 text-gray-700">Pre-sales on new flagship project</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Confidence</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-investor">$10M</p>
                <p className="mt-2 text-gray-700">Mezzanine financing secured</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Execution Velocity</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-execution">-45%</p>
                <p className="mt-2 text-gray-700">Strategic bottlenecks eliminated</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Market Perception</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-perception">Community-First</p>
                <p className="mt-2 text-gray-700">Known as "the community-first developer"</p>
              </div>
            </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <motion.div {...caseStudyAnimations.section}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-outcome">
            The Outcome
          </h2>
          <div className="mt-8 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Within 6 months, the developer transformed from scattered executor to signal-rich growth story. Their flagship project became a market-leading example of community-first design, investor confidence stabilized, and the team regained strategic momentum.
            </p>
            <p>
              The reset wasn't about working harder — it was about signaling smarter. With clarity came velocity, and with velocity came credibility.
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "Instaura gave us back our narrative. We weren't stuck — we just didn't know how to tell our story. Now, the market is listening."
            </blockquote>
            <figcaption className="mt-6 text-sm text-gray-500 font-medium">— Founder (redacted)</figcaption>
          </figure>
        </motion.div>
      </section>

      {/* Related Resources */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...caseStudyAnimations.section}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-related">
              Related Resources
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <Link href="/white-papers" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #11: Signal Velocity and Market Movement
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    How signal gravity shapes market perception and velocity.
                  </p>
                </div>
              </Link>
              <Link href="/white-papers" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #17: When Storytelling Becomes Noise
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Why narrative without signal creates confusion, not movement.
                  </p>
                </div>
              </Link>
              <Link href="/clarity-series" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <BookOpen className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">Clarity Series</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #15: Strategic Resets That Scale
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    How to architect clarity when expansion stalls and momentum fades.
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
            Stalled growth isn't a lack of effort — it's a lack of signal. Reset your narrative. Regain velocity.
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
