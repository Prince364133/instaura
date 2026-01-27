import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy7() {
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
          <span className="text-gray-900 font-medium">Case Study #7</span>
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
              Case Study #7
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-raleway leading-tight" data-testid="heading-title">
              Drop-Based Scarcity That Doubled LTV
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed" data-testid="text-subtitle">
              Loyal buyers, but retention curves flattening. We designed a Signal-first funnel with drop-based scarcity, doubling LTV and transforming the brand into insider culture.
            </p>
          </motion.div>

          {/* Meta Badges */}
          <motion.div
            {...caseStudyAnimations.hero.badges}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Sector</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-sector">Consumer Products & D2C</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Service</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-service">GTM & Funnels</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Stage</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-stage">Pre-Series B</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Region</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-region">Middle East (redacted)</p>
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
              The D2C fashion brand had loyal buyers online, but retention curves flattened after 2–3 purchases. Growth depended on constantly acquiring new customers, and CAC was rising. The funnel looked efficient on paper, but no true signal of inevitability was being transmitted to investors or customers.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "We're chasing new customers every month instead of moving our core believers deeper."
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
              <motion.div 
                {...caseStudyAnimations.card}
                whileHover={caseStudyAnimations.card.whileHover}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm will-change-transform"
              >
                <h3 className="font-semibold text-lg text-gray-900">Capital Efficiency</h3>
                <p className="mt-3 text-gray-700">Without a retention-led GTM model, the brand would burn capital inefficiently.</p>
              </motion.div>
              <motion.div 
                {...caseStudyAnimations.card}
                whileHover={caseStudyAnimations.card.whileHover}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm will-change-transform"
              >
                <h3 className="font-semibold text-lg text-gray-900">Investor Skepticism</h3>
                <p className="mt-3 text-gray-700">Investors were questioning unit economics at scale.</p>
              </motion.div>
              <motion.div 
                {...caseStudyAnimations.card}
                whileHover={caseStudyAnimations.card.whileHover}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm will-change-transform"
              >
                <h3 className="font-semibold text-lg text-gray-900">Thin Margins</h3>
                <p className="mt-3 text-gray-700">CAC/LTV ratios were too thin to justify valuation uplift.</p>
              </motion.div>
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
            We designed and installed a Signal-first Funnel + GTM Model:
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Funnel Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Identified the leak after purchase #3.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Drop-Based Scarcity Play</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Designed limited product releases ("drops") every quarter to activate exclusivity.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Community Funnel</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Built a private member loop for early access buyers, gamified with social proof.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Signal</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Positioned the brand as "scarce, inevitable, insider-owned."
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
                <p className="text-sm text-gray-500 uppercase tracking-wide">LTV Growth</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-ltv">2× Doubled</p>
                <p className="mt-2 text-gray-700">In 6 months</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">CAC/LTV Ratio</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-cac">2.1× → 4.5×</p>
                <p className="mt-2 text-gray-700">Improved economics</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Churn Reduction</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-churn">-38%</p>
                <p className="mt-2 text-gray-700">Customer retention up</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Signal</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-investor">Series B</p>
                <p className="mt-2 text-gray-700">Inbound interest activated</p>
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
              The brand reframed itself as inevitable insider culture, not just "affordable fashion." The GTM shift created a movement among core buyers, which investors read as inevitability proof.
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "We thought funnels were about ads and discounts. Instaura showed us that scarcity was our real funnel. Everything changed after that."
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
              <Link href="/contact?ask_ai=Tell%20me%20about%20%235%3A%20Funnels%20Without%20Signal%20Leak%20Value" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white  hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #5: Funnels Without Signal Leak Value
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Why conversion optimization without strategic signal creates noise, not movement.
                  </p>
                </div>
              </Link>
              <Link href="/white-papers/the-gtm-sprint-that-reframed-a-market" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white  hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <FileText className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">White Paper</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #15: The GTM Sprint That Reframed a Market
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    How signal-first GTM execution shifts market perception in 90 days.
                  </p>
                </div>
              </Link>
              <Link href="/contact?ask_ai=Tell%20me%20about%20%2313%3A%20Why%20Funnels%20Fail%20to%20Create%20Movement" className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl bg-white  hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-red">
                    <BookOpen className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-wider font-semibold">Clarity Series</p>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    #13: Why Funnels Fail to Create Movement
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Understanding the difference between conversion mechanics and market inevitability.
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
            Funnels aren't about clicks. They're about inevitability. Architect one that moves your brand — and your valuation.
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
