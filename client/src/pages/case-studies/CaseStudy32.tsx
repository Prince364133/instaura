import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy32() {
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
          <span className="text-gray-900 font-medium">Case Study #32</span>
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
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Case Study #32</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight font-raleway">
              Strategic Focus for a Scattered SaaS Startup
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
              SaaS startup raised strong Series A, expanded aggressively into three geographies and five product lines. Growth uneven, margins eroding, investors pressed for clarity.
            </p>
          </motion.div>

          {/* Meta Badges */}
          <motion.div 
            {...caseStudyAnimations.hero.badges}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Sector</p>
              <p className="mt-2 font-semibold text-white">Technology</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Service</p>
              <p className="mt-2 font-semibold text-white">Strategy Consulting</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Stage</p>
              <p className="mt-2 font-semibold text-white">Post-Series A → Preparing for Series B</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Region</p>
              <p className="mt-2 font-semibold text-white">India & USA (redacted)</p>
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
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <motion.div {...caseStudyAnimations.section}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway">The Conundrum</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-800">
            <p>
              A SaaS company had just closed a strong Series A. Flush with capital, the leadership team expanded aggressively: three geographies, five product lines, multiple customer segments. The strategy was "try everything and see what works."
            </p>
            <p>
              Within a year, the cracks appeared. Growth was uneven across markets. Product teams were siloed. Customer acquisition costs were rising. Margins were eroding. And the board started asking uncomfortable questions: "What's the core thesis here? What are you actually building toward?"
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 py-4 bg-gray-50 rounded-r-xl italic text-gray-700 text-xl">
              "We were everywhere — product launches, geographies, features. But we weren't inevitable anywhere."
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* Why It Mattered */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...caseStudyAnimations.section}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway">Why It Mattered</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Scattered Strategy Diluted Credibility</h3>
                <p className="mt-3 text-gray-700">Without a clear vertical focus, the brand felt opportunistic, not inevitable.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Teams Lacked Alignment</h3>
                <p className="mt-3 text-gray-700">No single priority meant every team had different goals and metrics.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Valuation Multiple at Risk</h3>
                <p className="mt-3 text-gray-700">Series B conversations were stalling because investors couldn't see a category winner.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...caseStudyAnimations.section}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway">Our Approach</h2>
            <p className="mt-6 text-lg text-gray-700">We installed a strategic reset to move from scattered to focused:</p>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Signal Diagnostic</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Analyzed which vertical showed the strongest inevitability signal — where the company had natural advantages, customer loyalty, and market pull.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Narrative Reset</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Repositioned the company from "multi-product SaaS platform" to "the category leader in [specific vertical]."</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Quarterly Strategy Sprints</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Installed a 90-day execution model focused on one decisive signal per quarter — no scattered priorities.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Investor Kit</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Rebuilt the Series B deck, board updates, and investor narrative around the newly focused thesis.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...caseStudyAnimations.section}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway">Metrics Dashboard</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Vertical Dominance</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">65%</p>
                <p className="mt-3 text-gray-700">Market share in 9 months</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Revenue Impact</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">ARR Doubled</p>
                <p className="mt-3 text-gray-700">Focused GTM compounded growth</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Investor Confidence</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">$18M Series B</p>
                <p className="mt-3 text-gray-700">Raised within 12 months</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...caseStudyAnimations.section}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway">Outcome</h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-800">
              <p>
                Within 12 months, the company shifted from "scattered SaaS startup" to "inevitable category leader in [vertical]." The focused strategy unlocked operational efficiency, improved unit economics, and created a clear narrative for investors.
              </p>
              <p>
                The Series B closed at a 3.5x markup. The board stopped pressing for clarity — they started pressing for scale. And the team, for the first time since the Series A, felt aligned on a single, inevitable trajectory.
              </p>
            </div>
            
            <figure className="mt-10 p-8 bg-gray-50 border-l-4 border-brand-red rounded-r-2xl">
              <blockquote className="text-xl italic text-gray-800 leading-relaxed">
                "Instaura helped us move from 'doing everything' to 'owning one thing.' The moment we focused, the market responded. We went from scattered to inevitable."
              </blockquote>
              <figcaption className="mt-4 text-sm text-gray-500 uppercase tracking-wider font-medium">
                Founder (Redacted)
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...caseStudyAnimations.section}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway">Related Resources</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <Link href="/white-papers">
                <motion.div 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#11: Signal Velocity and Market Movement</p>
                  <p className="mt-3 text-gray-700 text-sm">How strong signals accelerate market adoption and investor confidence.</p>
                </motion.div>
              </Link>
              <Link href="/white-papers">
                <motion.div 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#16: Signal vs. Noise</p>
                  <p className="mt-3 text-gray-700 text-sm">Understanding the difference between scattered execution and focused inevitability.</p>
                </motion.div>
              </Link>
              <Link href="/white-papers">
                <motion.div 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#15: Strategic Focus as Competitive Advantage</p>
                  <p className="mt-3 text-gray-700 text-sm">How to architect focus when everything feels like a priority.</p>
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
            Scattered priorities dilute momentum. Build strategic focus, and growth becomes inevitable.
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
