import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";
import { ResourceCards, RelatedResource } from "../../components/ResourceCards";

export default function CaseStudy47() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const relatedResources: RelatedResource[] = [
    {
        "href": "/",
        "type": "White Paper",
        "title": "#19: Why VC Deal Flow Depends on Signal",
        "label": "White Paper"
    },
    {
        "href": "/white-papers/gtm-as-signal-not-execution",
        "type": "White Paper",
        "title": "#5: GTM as Signal, Not Execution",
        "label": "White Paper"
    },
    {
        "href": "/contact?ask_ai=Tell%20me%20about%20%2315%3A%20The%20Signal%20Economy%20of%20Institutional%20Sales",
        "type": "Clarity Series",
        "title": "#15: The Signal Economy of Institutional Sales",
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
          <span className="text-gray-900 font-medium">Case Study #47</span>
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
              Case Study #47
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-raleway leading-tight" data-testid="heading-title">
              Funnel Architecture That Won Institutional Partners
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed" data-testid="text-subtitle">
              Fintech company with regulatory clearance and strong technology struggling to scale integrations with banks and insurers. GTM looked like startup sales engine — cold outreach, product demos.
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
              <p className="mt-2 font-semibold text-white" data-testid="text-service">GTM & Funnels</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Stage</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-stage">Pre-Series B (Scaling Partnerships)</p>
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
              A fintech company had secured regulatory clearance and built strong technology for bank and insurer integrations. The product worked. Compliance was solid. But scaling partnerships proved impossible. Integration discussions stalled at 12–18 months, while competitors with weaker tech were onboarding faster.
            </p>
            <p>
              The problem wasn't capability—it was credibility. Their GTM funnel looked like a startup sales engine: cold outreach, feature demos, trial requests. Banks and insurers weren't looking for "another fintech experiment." They needed signals of inevitability, compliance maturity, and institutional readiness.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "We kept knocking with demos. They kept asking if we were inevitable."
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
                <h3 className="font-semibold text-lg text-gray-900">Integrations Stalled 12–18 Months</h3>
                <p className="mt-3 text-gray-700">Without trust signals, enterprise partnerships never progressed beyond pilot discussions.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Competitors Onboarding Banks Faster</h3>
                <p className="mt-3 text-gray-700">Rivals with inferior technology but stronger institutional signals were winning partnerships.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Investors Flagged Slow GTM Velocity</h3>
                <p className="mt-3 text-gray-700">Venture investors questioned whether the company could achieve institutional scale.</p>
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
            We redesigned the funnel architecture to signal institutional readiness, not startup hustle:
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Signal Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Mapped the existing funnel to identify where credibility signals were missing or diluted in the partner journey.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Reset</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Shifted positioning from "fintech platform" → "compliance-ready infrastructure partner for institutional finance."
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Funnel Design</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Rebuilt the funnel to lead with compliance credentials, institutional proof points, and regulatory readiness—not feature lists.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Artifacts</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Created institutional-grade proof artifacts: compliance whitepapers, integration case studies, and regulatory validation decks.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 5</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Ownership Transfer</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Trained the team to execute the new funnel and maintain trust signal consistency across all partner touchpoints.
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
                <p className="text-sm text-gray-500 uppercase tracking-wide">Sales Cycle</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-sales-cycle">18→9 Months</p>
                <p className="mt-2 text-gray-700">Partnership cycle time cut in half</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Institutional Wins</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-wins">4 New Banks</p>
                <p className="mt-2 text-gray-700">Integrated in 12 months</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Impact</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-investor">Inbound Capital</p>
                <p className="mt-2 text-gray-700">Attracted institutional investor interest</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Revenue Signal</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-revenue">3.1× Volume</p>
                <p className="mt-2 text-gray-700">Transaction volume growth</p>
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
              The company successfully shifted from "startup pushing demos" to "compliance-ready partner banks couldn't ignore." The funnel no longer optimized for speed—it transmitted institutional trust at every stage. Banks engaged, integration cycles collapsed, and investors took notice.
            </p>
            <p>
              The technology didn't change. The regulatory status didn't change. What changed was the signal architecture—and that unlocked everything else: partnership velocity, investor confidence, and competitive positioning.
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "Instaura showed us that banks don't respond to features—they respond to inevitability. Once we redesigned our funnel around that, everything accelerated."
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
          <motion.div
            {...caseStudyAnimations.section}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-raleway">Clarity → Movement.</h2>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Institutional partners don't buy features—they buy inevitability. Design your funnel to signal that, and the partnerships will follow.
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
