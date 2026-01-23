import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy40() {
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
          <span className="text-gray-900 font-medium">Case Study #40</span>
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
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
              Case Study #40
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight font-raleway">
              Strategy Reset for Healthcare Scale
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
              Healthcare services company with proven diagnostics platform raised Series A successfully but struggled to convert momentum into scale. Trying to do everything at once — new geographies, product expansions, partnerships.
            </p>
          </motion.div>

          {/* Meta Badges */}
          <motion.div 
            {...caseStudyAnimations.hero.badges}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Sector</p>
              <p className="mt-2 font-semibold text-white">Healthcare & Pharma</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Service</p>
              <p className="mt-2 font-semibold text-white">Strategy Consulting</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Stage</p>
              <p className="mt-2 font-semibold text-white">Series B (Scaling Operations)</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Region</p>
              <p className="mt-2 font-semibold text-white">Middle East & India (redacted)</p>
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
              A healthcare services company had successfully raised a strong Series A on the strength of their diagnostics platform. They had product-market fit, early traction across multiple hospital systems, and ambitious expansion plans. But post-raise, the founder was paralyzed by strategic sprawl. New geographies, product line extensions, partnership channels, regulatory approvals — all happening simultaneously with no clear prioritization. The team was executing in every direction, burning cash quickly, and gaining no clarity on which bets would drive inevitability at scale.
            </p>
            <p>
              Investors began to notice. Board meetings turned into firefighting sessions. Regulatory partners couldn't understand the value proposition. Hospital procurement officers saw a company "trying to be too many things." The momentum from the Series A was evaporating — not because of execution failure, but because of strategic diffusion.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "We had the traction, but it felt like noise. We weren't being seen as inevitable healthcare infrastructure."
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
                <h3 className="font-semibold text-lg text-gray-900">Scaling Without Clarity Risked Burning Cash</h3>
                <p className="mt-3 text-gray-700">Pursuing too many initiatives simultaneously was draining runway without clear ROI signals.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Investors Losing Confidence</h3>
                <p className="mt-3 text-gray-700">Series B conversations stalled because the growth story lacked focus and inevitability.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Regulatory and Hospital Partners Confused</h3>
                <p className="mt-3 text-gray-700">Fragmented positioning made it difficult for stakeholders to understand what the company stood for.</p>
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
            We implemented a Strategic Reset to consolidate execution around clear inevitability anchors:
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Signal Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Identified where strategic sprawl was leaking credibility — 11 parallel initiatives with no coherent market signal.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Core</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Repositioned from "diagnostics startup expanding everywhere" to "inevitable healthcare infrastructure partner in [specific region]."
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Quarterly Strategy Sprint</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Consolidated to 4 focused initiatives that aligned with hospital adoption momentum and Series B narrative.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Investor Kit</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Redesigned pitch deck and board materials to reflect strategic focus, execution alignment, and growth inevitability.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 5</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Fractional Strategy Engagement</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Embedded quarterly strategic sprints to maintain discipline, monitor signal strength, and course-correct before drift happens.
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
                <p className="text-sm text-gray-500 uppercase tracking-wide">Execution Alignment</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-execution">11 → 4 Initiatives</p>
                <p className="mt-2 text-gray-700">Strategic focus restored</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Confidence</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-investor">$20M Series B</p>
                <p className="mt-2 text-gray-700">Closed within 6 months</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Adoption Velocity</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-adoption">3× Hospital Partnerships</p>
                <p className="mt-2 text-gray-700">Focused execution drove faster adoption</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Talent Alignment</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-talent">-30% Attrition</p>
                <p className="mt-2 text-gray-700">Clarity reduced team confusion and churn</p>
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
              Within 6 months, the company shifted from being perceived as "a diagnostics startup trying to do too much" to "the inevitable healthcare infrastructure partner for [region]." The strategic reset didn't just refocus the team — it refocused the market's perception. Investors, hospital partners, and regulatory bodies aligned behind a clear, credible growth story.
            </p>
            <p>
              The company secured a $20M Series B, tripled hospital partnerships, and reduced team attrition by 30%. Most importantly, they regained the inevitability signal they had lost in the strategic sprawl following their Series A. Clarity became their competitive advantage.
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "We had momentum, but no clarity. Instaura gave us the strategic focus we needed to turn traction into inevitability. Once the signal was clear, everything else followed — investors, partners, execution velocity."
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
                    How strong signals create momentum and bend markets toward inevitability.
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
                    #8: Talent as Signal in Early-Stage Growth
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Understanding how strategic clarity attracts and retains top-tier talent.
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
                    #9: Strategic Discipline at Scale
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    How to maintain strategic focus when scaling from Series A to Series B.
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
            Your traction isn't the problem. Your strategic sprawl is. Fix the signal, and scale becomes inevitable.
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
