import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy45() {
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
          <span className="text-gray-900 font-medium">Case Study #45</span>
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
              Case Study #45
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-raleway leading-tight" data-testid="heading-title">
              Signal Reset for BFSI Trust
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed" data-testid="text-subtitle">
              Fintech startup developed payments solution with strong tech fundamentals and compliance approvals. Yet adoption lagged. Banks saw them as "just another wallet," investors considered them risky and redundant.
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
              <p className="mt-2 font-semibold text-white" data-testid="text-service">Signal Architecture</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Stage</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-stage">Seed → Pre-Series A</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Region</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-region">Southeast Asia (redacted)</p>
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
              A fintech startup in Southeast Asia had built a payments solution with impressive technical fundamentals. They had secured the necessary compliance approvals, built a robust platform, and achieved regulatory certifications that took competitors years to obtain. Yet despite these credentials, adoption lagged. Banks saw them as "just another wallet" in an overcrowded market. Institutional investors dismissed them as risky and redundant — too similar to dozens of other fintech plays competing for the same space.
            </p>
            <p>
              The problem wasn't their technology or their licenses. It was their signal. They had the proof of compliance, but they weren't signaling trust and inevitability. In BFSI, regulatory approvals alone don't win markets — they're table stakes. What wins is being seen as the inevitable compliance infrastructure that banks and investors can't afford to ignore.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "We had all the licenses, but no one believed we'd survive the noise."
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
                <h3 className="font-semibold text-lg text-gray-900">BFSI Partners Delayed Integrations</h3>
                <p className="mt-3 text-gray-700">Banks kept the startup in evaluation mode, unconvinced they would outlast the crowded fintech landscape.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Investors Dismissed Them as Commoditized</h3>
                <p className="mt-3 text-gray-700">Capital conversations stalled because the value proposition felt indistinguishable from dozens of other payment platforms.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Regulatory Approvals Buried in Documents</h3>
                <p className="mt-3 text-gray-700">Their strongest asset — compliance credibility — was hidden in dense technical documentation that no one read.</p>
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
            We architected a Signal Reset to transform compliance from paperwork into a trust signal that defined market inevitability:
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Signal Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Identified where compliance credibility was leaking — buried in technical docs instead of being surfaced as the core trust signal.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Core</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Repositioned from "fintech payment wallet" to "compliance-first infrastructure for BFSI partners."
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Proof Artifacts</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Designed visual proof systems — regulatory timelines, approval dashboards, and certification showcases — that turned licenses into lead signals.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Market Calibration</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Realigned all market-facing materials — pitch decks, sales collateral, and investor narratives — to signal inevitability through compliance and trust.
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
                <p className="text-sm text-gray-500 uppercase tracking-wide">Adoption</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-adoption">3 Institutional Partners</p>
                <p className="mt-2 text-gray-700">In 6 months</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Perception</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-perception">Compliance Infrastructure</p>
                <p className="mt-2 text-gray-700">Shifted from "commoditized wallet"</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Traction Signal</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-traction">2.4× Daily Transactions</p>
                <p className="mt-2 text-gray-700">Institutional trust drove usage velocity</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Market Credibility</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-credibility">Approvals = Lead Message</p>
                <p className="mt-2 text-gray-700">Compliance became the differentiation signal</p>
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
              Within 6 months, the fintech startup crossed the credibility chasm that had kept them in evaluation limbo. By transforming compliance from buried documentation into a front-and-center trust signal, they shifted market perception from "just another wallet" to "inevitable compliance infrastructure for BFSI." Institutional partners stopped delaying integrations and started treating them as strategic infrastructure partners. Investors stopped comparing them to commodity payment platforms and started seeing them as the regulatory-backed inevitability in the Southeast Asian BFSI market.
            </p>
            <p>
              The company secured 3 institutional partnerships that had previously stalled for over a year. Daily transaction volume increased 2.4× as institutional trust accelerated adoption. Most importantly, they stopped competing on features and started winning on trust — the only signal that matters in BFSI.
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "We had the licenses, but Instaura showed us how to turn them into a signal. Once compliance became our lead message instead of buried proof, everything changed — banks, investors, adoption velocity. Trust became our moat."
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
                    #19: Why VC Deal Flow Depends on Signal
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    How trust signals unlock institutional investment and transform investor perception.
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
                    #11: Signal Velocity and Market Movement
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    Understanding how strong compliance signals create market momentum and adoption velocity.
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
                    #15: Why Compliance Is a Signal, Not a Checkbox
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    How regulatory approvals transform from buried credentials into market-defining trust signals.
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
          <motion.div
            {...caseStudyAnimations.section}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-raleway">Clarity → Movement.</h2>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              In BFSI, compliance isn't a checkbox — it's a signal. Turn your approvals into inevitability, and the market will follow.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
