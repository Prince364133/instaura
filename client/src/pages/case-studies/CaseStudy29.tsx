import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy29() {
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
          <span className="text-gray-900 font-medium">Case Study #29</span>
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
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Case Study #29</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight font-raleway">
              From Features to Framework — Tech as Signal
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
              B2B technology platform with strong engineering and rich feature set. But customers saw it as "just another SaaS tool." Investors lumped them with commodity players.
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
              <p className="mt-2 font-semibold text-white">Signal Architecture</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Stage</p>
              <p className="mt-2 font-semibold text-white">Pre-Series A (Early Adoption Stage)</p>
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
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <motion.div {...caseStudyAnimations.section}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway">The Conundrum</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-800">
            <p>
              A B2B technology platform had built a rich feature set and strong engineering foundation. The product worked. The team was talented. But in a market full of SaaS tools, they sounded identical to everyone else. Customers treated them as "another option." Investors saw them as a commodity player in a crowded category.
            </p>
            <p>
              The problem wasn't the technology. It was the signal. Their positioning was feature-led, not framework-led. They sold capabilities, not inevitability.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 py-4 bg-gray-50 rounded-r-xl italic text-gray-700 text-xl">
              "We had the tech. But we sounded like everyone else."
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* Why It Mattered */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...caseStudyAnimations.section}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway">Why It Mattered</h2>
            <p className="mt-6 text-lg text-gray-700">Without credibility signals, the company risked:</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Risk of Being Commoditized</h3>
                <p className="mt-3 text-gray-700">Without differentiation in signal, they'd become price-driven and replaceable.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Feature-Driven Pitches Diluted Attention</h3>
                <p className="mt-3 text-gray-700">Long feature lists overwhelmed prospects instead of creating clarity.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Customers Churned Mid-Funnel</h3>
                <p className="mt-3 text-gray-700">Prospects got confused by complexity and defaulted to safer, simpler choices.</p>
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
            <p className="mt-6 text-lg text-gray-700">We transformed their positioning from feature-heavy to signal-heavy through Strategic Signal Architecture:</p>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Signal Diagnostic</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Mapped how the market perceived them vs. how they wanted to be perceived — identified the gap between "tool" and "platform."</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Narrative Core</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Reframed positioning from "feature-rich SaaS tool" to "infrastructure framework for [specific use case]."</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Proof Artifacts</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Designed ecosystem proof points: integrations, partner logos, case studies positioned as inevitability anchors.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Market Calibration</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Shifted all external messaging — pitch decks, website, sales collateral — to lead with framework inevitability, not feature lists.</p>
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
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Customer Conversion</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">+35%</p>
                <p className="mt-3 text-gray-700">Trial-to-paid uplift</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Investor Response</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">2 Term Sheets</p>
                <p className="mt-3 text-gray-700">Unsolicited inbound interest</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Retention Signal</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">Doubled</p>
                <p className="mt-3 text-gray-700">Customers doubled commitments</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Perception Shift</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">Platform</p>
                <p className="mt-3 text-gray-700">Ecosystem platform vs. commodity</p>
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
                Within 5 months, the company transformed from feature-heavy to signal-heavy. They stopped listing what they could do and started demonstrating what was inevitable. Customers began treating them as infrastructure, not an option. Investors stopped comparing them to commodity SaaS and started viewing them as a category framework.
              </p>
              <p>
                The features didn't change. The signal did. And the market responded.
              </p>
            </div>
            
            <figure className="mt-10 p-8 bg-gray-50 border-l-4 border-brand-red rounded-r-2xl">
              <blockquote className="text-xl italic text-gray-800 leading-relaxed">
                "We stopped competing on features and started owning the framework. Instaura showed us how to make inevitability our story — not capability."
              </blockquote>
              <figcaption className="mt-4 text-sm text-gray-500 uppercase tracking-wider font-medium">
                Founder (redacted)
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
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#16: Signal vs. Noise</p>
                  <p className="mt-3 text-gray-700 text-sm">Understanding the difference between feature lists and framework inevitability.</p>
                </motion.div>
              </Link>
              <Link href="/white-papers">
                <motion.div 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#5: GTM as Signal, Not Execution</p>
                  <p className="mt-3 text-gray-700 text-sm">How go-to-market strategy communicates market inevitability.</p>
                </motion.div>
              </Link>
              <Link href="/clarity-series">
                <motion.div 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Clarity Series</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#6: When Feature Lists Become Noise</p>
                  <p className="mt-3 text-gray-700 text-sm">Why more capabilities can dilute credibility instead of building it.</p>
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
            Technology alone doesn't create market inevitability. Signal architecture does. Build the framework.
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
