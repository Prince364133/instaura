import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy33() {
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
          <span className="text-gray-900 font-medium">Case Study #33</span>
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
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Case Study #33</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight font-raleway">
              Signal Reset for a D2C Brand
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
              D2C brand built online following, but despite strong reviews, sales growth flattened. Competitors with noisier marketing overtaking. Investors saw them as "another lifestyle product."
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
              <p className="mt-2 font-semibold text-white">Signal Architecture</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Stage</p>
              <p className="mt-2 font-semibold text-white">Seed → Pre-Series A</p>
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
              A D2C brand had built a loyal online following and maintained strong reviews across platforms. Customers loved the product. But despite early momentum, sales growth flattened. Competitors with noisier marketing and more aggressive campaigns were overtaking them. Investors saw them as "another lifestyle product" — undifferentiated in a crowded consumer market.
            </p>
            <p>
              The problem wasn't the product or the customers. It was the signal. The brand had love but no leverage. They had retention but no recognition. They had quality but no inevitability.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 py-4 bg-gray-50 rounded-r-xl italic text-gray-700 text-xl">
              "We had love from customers. But beyond that, no one remembered us."
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
                <h3 className="font-semibold text-xl text-gray-900">Risk of Fading Into Noise</h3>
                <p className="mt-3 text-gray-700">Without a distinct signal, they risked becoming invisible in a crowded D2C landscape.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Expansion Would Fail Without Identity</h3>
                <p className="mt-3 text-gray-700">New product lines and market expansion required a strong, recognizable brand identity.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Weak Investor Readiness</h3>
                <p className="mt-3 text-gray-700">Investors needed proof of category ownership, not just customer satisfaction.</p>
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
            <p className="mt-6 text-lg text-gray-700">We rebuilt their Signal Architecture from retention to recognition through strategic positioning:</p>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Signal Diagnostic</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Identified where customer love was failing to translate into market movement and investor credibility.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Narrative Reset</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Reframed positioning from "D2C lifestyle brand" to "consumer inevitability in [specific category]."</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Proof Artifacts</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Built tangible proof points: retention metrics repositioned as loyalty signals, customer stories framed as category leadership.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Market Calibration</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Aligned all external messaging — website, social presence, investor materials — to signal inevitability over capability.</p>
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
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Retention Signal</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">2.8×</p>
                <p className="mt-3 text-gray-700">Repeat purchase rate increase</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Investor Conversion</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">2 Investors</p>
                <p className="mt-3 text-gray-700">Pre-Series A conversations</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Market Signal</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">Default Choice</p>
                <p className="mt-3 text-gray-700">Positioned as category default</p>
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
                Within 6 months, the brand moved from D2C commodity to consumer inevitability. Customers didn't just love the product — they told others it was the obvious choice. Investors stopped seeing them as "another lifestyle brand" and started viewing them as category leaders. The signal reset transformed retention into recognition and love into leverage.
              </p>
              <p>
                The product didn't change. The signal did. And the market responded.
              </p>
            </div>
            
            <figure className="mt-10 p-8 bg-gray-50 border-l-4 border-brand-red rounded-r-2xl">
              <blockquote className="text-xl italic text-gray-800 leading-relaxed">
                "We went from being loved by a few to being remembered by many. Instaura didn't just help us get noticed — they helped us become inevitable."
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
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#7: Outreach as Signal, Not Spam</p>
                  <p className="mt-3 text-gray-700 text-sm">How to turn brand communication into market movement instead of noise.</p>
                </motion.div>
              </Link>
              <Link href="/white-papers">
                <motion.div 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#5: GTM as Signal, Not Execution</p>
                  <p className="mt-3 text-gray-700 text-sm">Understanding how go-to-market strategy creates category inevitability.</p>
                </motion.div>
              </Link>
              <Link href="/white-papers">
                <motion.div 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#8: From Retention to Recognition</p>
                  <p className="mt-3 text-gray-700 text-sm">How to translate customer love into market inevitability.</p>
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
            Brand clarity creates market movement. Build the signal, and recognition follows.
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
