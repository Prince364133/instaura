import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy36() {
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
          <span className="text-gray-900 font-medium">Case Study #36</span>
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
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Case Study #36</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight font-raleway">
              Strategic Reset to Escape the Commodity Trap
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
              Consumer products startup built traction online and was raising attention from retailers. But growth began stalling. They chased too many SKUs, entered multiple geographies.
            </p>
          </motion.div>

          {/* Meta Badges */}
          <motion.div 
            {...caseStudyAnimations.hero.badges}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Sector</p>
              <p className="mt-2 font-semibold text-white">Consumer Products (D2C)</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Service</p>
              <p className="mt-2 font-semibold text-white">Strategy Consulting</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Stage</p>
              <p className="mt-2 font-semibold text-white">Series B (Growth Transition)</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Region</p>
              <p className="mt-2 font-semibold text-white">India & Middle East (redacted)</p>
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
              A consumer products startup had built strong online traction and was attracting attention from major retailers. Their growth looked promising on paper. But beneath the surface, momentum was stalling. They had chased expansion in multiple directions — too many SKUs across too many geographies. Every quarter brought new product launches and new market entries. But instead of clarity, it created noise.
            </p>
            <p>
              The problem wasn't ambition. It was dilution. The company was moving, but not in one coherent direction. Retailers saw them as scattered. Investors saw them as unfocused. Customers saw them as inconsistent. The team was exhausted, chasing growth that wasn't compounding. They had momentum, but it wasn't aligned.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 py-4 bg-gray-50 rounded-r-xl italic text-gray-700 text-xl">
              "We were moving, but not in one direction. Everyone saw us as noise."
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
                <h3 className="font-semibold text-xl text-gray-900">Valuation Multiples Compressed</h3>
                <p className="mt-3 text-gray-700">Investors valued them as a commodity D2C brand, not a category leader — limiting Series B potential.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Brand Loyalty Leaking</h3>
                <p className="mt-3 text-gray-700">Scattered SKUs and inconsistent positioning were eroding customer retention and repeat purchase rates.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Talent Demotivated</h3>
                <p className="mt-3 text-gray-700">The team was burnt out from chasing growth without a unifying strategy or clear wins to celebrate.</p>
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
            <p className="mt-6 text-lg text-gray-700">We implemented a Strategic Reset to escape the commodity trap and realign around inevitability:</p>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Signal Diagnostic</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Identified where expansion was creating noise instead of signal — SKU bloat, geographic fragmentation, and brand dilution.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Narrative Reset</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Reframed positioning from "multi-category D2C player" to "community-first brand inevitability in [specific category]."</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Quarterly Strategy Sprints</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Implemented focused 90-day strategy cycles — ruthlessly prioritizing hero SKUs, core geographies, and community engagement.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Investor Alignment</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Communicated the reset to existing investors as "strategic focus to unlock Series B inevitability" — not retreat, but precision.</p>
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
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">SKU Reset</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">-40% Catalogue</p>
                <p className="mt-3 text-gray-700">Doubled down on hero SKUs</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Retention</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">2.2×</p>
                <p className="mt-3 text-gray-700">Repeat purchase rate increase</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Investor Outcome</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">USD 10M</p>
                <p className="mt-3 text-gray-700">Series B closed in 120 days</p>
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
                Within 120 days, the company successfully closed a USD 10M Series B — at a valuation that reflected category leadership, not commodity positioning. More importantly, they shifted from scattered D2C brand to community inevitability. Customer retention doubled. The team regained focus and energy. Retailers began viewing them as a strategic partner rather than just another supplier.
              </p>
              <p>
                The product line didn't expand. It contracted. The strategy didn't chase more. It focused on less. And the market — investors, customers, and partners — responded to the clarity.
              </p>
            </div>
            
            <figure className="mt-10 p-8 bg-gray-50 border-l-4 border-brand-red rounded-r-2xl">
              <blockquote className="text-xl italic text-gray-800 leading-relaxed">
                "We thought more meant growth. Instaura showed us that clarity — ruthless focus on what signals inevitability — was the real unlock. The Series B wasn't about our revenue. It was about our signal."
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
              <Link href="/white-papers/signal-velocity-and-market-movement">
                <motion.div 
                  className="group bg-white border border-gray-300 shadow-md hover:shadow-xl bg-white rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#11: Signal Velocity and Market Movement</p>
                  <p className="mt-3 text-gray-700 text-sm">Understanding how strategic focus accelerates market perception and investor confidence.</p>
                </motion.div>
              </Link>
              <Link href="/contact?ask_ai=Tell%20me%20about%20%2316%3A%20Signal%20vs.%20Noise%20in%20Growth%20Strategy">
                <motion.div 
                  className="group bg-white border border-gray-300 shadow-md hover:shadow-xl bg-white rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#16: Signal vs. Noise in Growth Strategy</p>
                  <p className="mt-3 text-gray-700 text-sm">Why more expansion creates commodity perception while focus creates inevitability.</p>
                </motion.div>
              </Link>
              <Link href="/contact?ask_ai=Tell%20me%20about%20%238%3A%20From%20Retention%20to%20Recognition">
                <motion.div 
                  className="group bg-white border border-gray-300 shadow-md hover:shadow-xl bg-white rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#8: From Retention to Recognition</p>
                  <p className="mt-3 text-gray-700 text-sm">How strategic reset transforms scattered brands into community inevitabilities.</p>
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
            Strategic reset builds market clarity. Architect focus, and momentum becomes inevitable.
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
