import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy21() {
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
          <span className="text-gray-900 font-medium">Case Study #21</span>
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
              Case Study #21
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-raleway leading-tight" data-testid="heading-title">
              From Commodity to Credibility — The Real Estate Signal
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed" data-testid="text-subtitle">
              Mid-sized real estate developer had completed multiple residential projects but struggled to stand out. Buyers saw them as "one of many."
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
              <p className="mt-2 font-semibold text-white" data-testid="text-service">Signal Architecture</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Stage</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-stage">Pre-Series A (Scaling Residential Projects)</p>
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
              A mid-sized real estate developer had completed multiple residential projects but struggled to stand out in a crowded market. Buyers saw them as "one of many," and investors compared them to bigger incumbents with deeper brand equity. Despite timely delivery and high-quality construction, the developer's projects lacked a unique market identity.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "We delivered well, but we weren't remembered. Our signal was invisible."
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
                <h3 className="font-semibold text-lg text-gray-900">Weak Pricing Power</h3>
                <p className="mt-3 text-gray-700">Without brand signal, pricing power was weak — projects were sold on discounts, not credibility.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <h3 className="font-semibold text-lg text-gray-900">Investors Questioned Scalability</h3>
                <p className="mt-3 text-gray-700">Investors questioned scalability, citing lack of differentiation.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                whileHover={caseStudyAnimations.card.whileHover}
              >
                <h3 className="font-semibold text-lg text-gray-900">Commercial Expansion Stalled</h3>
                <p className="mt-3 text-gray-700">Expansion into commercial projects stalled due to weak recognition.</p>
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
            We rebuilt their Signal Architecture with clarity and inevitability:
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Identified that "timely delivery" was an invisible signal — expected, not valued.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Core</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Reframed the developer as "community creators" rather than just builders.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Visual Signal Design</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Built proof artifacts — project storytelling, resident testimonials, and sustainability highlights.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Market Calibration</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Crafted collateral for investors and buyers leading with "credibility signal" rather than price.
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
                <p className="text-sm text-gray-500 uppercase tracking-wide">Pricing Power</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-pricing">+18%</p>
                <p className="mt-2 text-gray-700">Increased with fewer discounts</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Sales Velocity</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-sales">70%</p>
                <p className="mt-2 text-gray-700">Of a new project sold within 3 months</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Outcome</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-investor">Secured</p>
                <p className="mt-2 text-gray-700">Mezzanine financing for expansion</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Perception Shift</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-perception">Community-First</p>
                <p className="mt-2 text-gray-700">Market refers to them as "the community-first developer"</p>
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
              The developer successfully shifted perception from commodity supplier to credible community builder. Their projects began to carry brand inevitability instead of being "one among many."
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "We thought our delivery record spoke for itself. Instaura showed us that delivery wasn't our signal — community was."
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
              <Link href="/contact?ask_ai=Tell%20me%20about%20%237%3A%20Why%20Design%20Without%20Signal%20is%20Decoration" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white  hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #7: Why Design Without Signal is Decoration
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Understanding how visual design without signal architecture fails to create market movement.
                  </p>
                </div>
              </Link>
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
                    How signal gravity shapes market perception and velocity.
                  </p>
                </div>
              </Link>
              <Link href="/contact?ask_ai=Tell%20me%20about%20%2316%3A%20Why%20Real%20Estate%20is%20More%20About%20Perception%20Than%20Brick" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white  hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <BookOpen className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">Clarity Series</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #16: Why Real Estate is More About Perception Than Brick
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    How perception architecture drives real estate value beyond physical assets.
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
            Your projects aren't just assets. They're signals. Architect them to move buyers, investors, and markets.
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
