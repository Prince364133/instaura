import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";
import { ResourceCards, RelatedResource } from "../../components/ResourceCards";

export default function CaseStudy18() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const relatedResources: RelatedResource[] = [
    {
        "href": "/",
        "type": "White Paper",
        "title": "#9: Decoding Investor Language as Signal",
        "label": "White Paper"
    },
    {
        "href": "/white-papers/why-vc-deal-flow-depends-on-signal",
        "type": "White Paper",
        "title": "#19: Why VC Deal Flow Depends on Signal",
        "label": "White Paper"
    },
    {
        "href": "/contact?ask_ai=Tell%20me%20about%20%2310%3A%20Why%20Regulatory%20Progress%20Is%20a%20Capital%20Artifact",
        "type": "Clarity Series",
        "title": "#10: Why Regulatory Progress Is a Capital Artifact",
        "label": "Clarity Series"
    }
];

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
          <span className="text-gray-900 font-medium">Case Study #18</span>
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
              Case Study #18
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-raleway leading-tight" data-testid="heading-title">
              Compliance as Credibility — The Raise
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed" data-testid="text-subtitle">
              Robust adoption in retail and SME segments. But Series B investors hesitated—doubted ability to remain compliant in heavily regulated sector.
            </p>
          </motion.div>

          {/* Meta Badges */}
          <motion.div
            {...caseStudyAnimations.hero.badges}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Sector</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-sector">BFSI (Banking, Financial Services & Insurance)</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Service</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-service">Fund Raising</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Stage</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-stage">Series B</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Ticket Size</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-ticket">USD 20M</p>
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
              A digital lending platform had robust adoption in retail and SME segments. However, when they attempted to raise a Series B round, investors hesitated. Their question was not about the market opportunity but about the company's ability to remain compliant in a heavily regulated sector.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "We had traction. We had numbers. But investors doubted our ability to withstand regulatory scrutiny."
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
              <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Capital Needed for Scale</h3>
                <p className="mt-3 text-gray-700">Without fresh capital, the platform risked stalling at a scale threshold.</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Valuation Drag</h3>
                <p className="mt-3 text-gray-700">Compliance concerns created valuation drag — every conversation was discounted for perceived risk.</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.card} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Competitive Disadvantage</h3>
                <p className="mt-3 text-gray-700">Competing platforms with weaker adoption but stronger compliance narratives were moving ahead in investor interest.</p>
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
            We reframed the raise around compliance as the lead capital signal:
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Capital Signal Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Identified proof artifacts regulators had already cleared.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Core</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Repositioned the company as "compliance-first fintech," inevitable in a regulated sector.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Investor Kit</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Built decks and briefs that led with licenses, audits, regulator engagement, and compliance velocity.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Negotiation Advisory</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Anchored valuation discussions around trust signal, not just growth metrics.
              </p>
            </motion.div>
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
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Conversion</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-conversion">3 VCs</p>
                <p className="mt-2 text-gray-700">Withdrew initial skepticism after compliance-first pitch</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Valuation Uplift</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-valuation">+25%</p>
                <p className="mt-2 text-gray-700">Higher valuation compared to initial offers</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Capital Raised</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-capital">USD 20M</p>
                <p className="mt-2 text-gray-700">Series B successfully closed</p>
              </motion.div>
              <motion.div {...caseStudyAnimations.metricCard} className="bg-white rounded-2xl p-8 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Market Perception</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-perception">Trust-First</p>
                <p className="mt-2 text-gray-700">Inevitability signal established</p>
              </motion.div>
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
              The company closed its Series B by turning compliance — once a liability — into an inevitability signal. Investors reframed the platform from "risk-prone fintech" to "regulated growth infrastructure."
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "We used to bury compliance slides at the end of our deck. Instaura made them our opening — and that won the round."
            </blockquote>
            <figcaption className="mt-6 text-sm text-gray-500 font-medium">— Founder (redacted)</figcaption>
          </figure>
        </motion.div>
      </section>

            {/* Related Resources */}
      <ResourceCards resources={relatedResources} />

      {/* Final CTA */}
      <section className="bg-black text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold font-raleway">Clarity → Movement.</h2>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            Your compliance is not paperwork. It's your capital signal. Architect it to win trust and valuation.
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
