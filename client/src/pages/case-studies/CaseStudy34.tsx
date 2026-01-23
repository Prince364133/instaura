import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy34() {
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
          <span className="text-gray-900 font-medium">Case Study #34</span>
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
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Case Study #34</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight font-raleway">
              Brand Signal Unlocks $8M Growth Raise
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
              Consumer products startup built strong traction in metros through digital channels. Investors dismissed them as "another D2C play" with no defensible edge.
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
              <p className="mt-2 font-semibold text-white">Fund Raising</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Stage</p>
              <p className="mt-2 font-semibold text-white">Series A (Scaling Nationally)</p>
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
              A consumer products startup had built strong traction in metros through digital channels. Their customers loved them. Repeat rates were solid. Social media engagement was impressive. But investors remained skeptical. Every pitch ended with the same question: "Why do you matter in a sea of D2C brands?"
            </p>
            <p>
              The problem wasn't the product. It was the signal. The company spoke about customer love and digital momentum, but investors saw it as another D2C play with no defensible moat. Without clear capital proof, they were stuck in the middle — too big to bootstrap, too generic to raise at scale.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 py-4 bg-gray-50 rounded-r-xl italic text-gray-700 text-xl">
              "We kept saying customers loved us. Investors kept asking why we mattered in a sea of brands."
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
                <h3 className="font-semibold text-xl text-gray-900">Expansion Would Stall Without Capital</h3>
                <p className="mt-3 text-gray-700">National expansion required infrastructure, retail partnerships, and brand-building — all capital-intensive.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Competitors Closing Bigger Rounds</h3>
                <p className="mt-3 text-gray-700">Rival brands were raising at higher valuations with weaker fundamentals.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Perception Keeping Valuation Compressed</h3>
                <p className="mt-3 text-gray-700">Weak capital narrative meant lower valuation caps and dilutive terms.</p>
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
            <p className="mt-6 text-lg text-gray-700">We reframed the raise around brand signal as proof of consumer inevitability:</p>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Capital Signal Diagnostic</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Identified brand velocity metrics that proved consumer inevitability — repeat purchase rates, organic referral growth, NPS depth.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Narrative Core</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Reframed positioning from "growing D2C brand" to "category-defining consumer inevitable" backed by brand signal proof.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Investor Kit</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Designed pitch decks and data rooms showcasing brand momentum as market inevitability, not just customer satisfaction.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
                <h3 className="mt-3 font-bold text-xl text-gray-900">Negotiation Advisory</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">Coached founders to lead with inevitability proof: brand velocity → market dominance → defensible moat.</p>
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
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Capital Raised</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">USD 8M</p>
                <p className="mt-3 text-gray-700">In 100 days</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Valuation Uplift</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">2.1×</p>
                <p className="mt-3 text-gray-700">Higher than initial offers</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Retail Expansion</p>
                <p className="mt-4 text-5xl font-extrabold text-brand-red">2 Major Chains</p>
                <p className="mt-3 text-gray-700">Secured post-raise</p>
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
                Within 100 days, the company successfully raised USD 8M at a 2.1× higher valuation than initial offers. More importantly, they moved from being perceived as "another D2C brand" to a consumer inevitability signal. The capital unlocked national expansion, retail partnerships with two major chains, and market dominance positioning.
              </p>
              <p>
                The product didn't change. The brand signal did. And the market — both investors and retailers — responded.
              </p>
            </div>
            
            <figure className="mt-10 p-8 bg-gray-50 border-l-4 border-brand-red rounded-r-2xl">
              <blockquote className="text-xl italic text-gray-800 leading-relaxed">
                "We thought our metrics spoke for themselves. Instaura showed us that investors don't see metrics — they see signals. Once we fixed the signal, the valuation followed."
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
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#10: The Cost of Wrong Capital</p>
                  <p className="mt-3 text-gray-700 text-sm">Understanding how capital narrative shapes valuation and investor quality.</p>
                </motion.div>
              </Link>
              <Link href="/white-papers">
                <motion.div 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#7: Outreach as Signal, Not Spam</p>
                  <p className="mt-3 text-gray-700 text-sm">How investor outreach communicates market inevitability, not desperation.</p>
                </motion.div>
              </Link>
              <Link href="/white-papers">
                <motion.div 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#8: Brand Velocity vs. Revenue Growth</p>
                  <p className="mt-3 text-gray-700 text-sm">Why brand momentum signals consumer inevitability better than revenue alone.</p>
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
            Brand isn't buzz. It's belief architecture. Signal the inevitability, and the raise follows.
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
