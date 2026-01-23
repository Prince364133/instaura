import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { caseStudyAnimations } from "@/lib/animations";

export default function CaseStudy37() {
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
          <span className="text-gray-900 font-medium">Case Study #37</span>
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
              Case Study #37
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight font-raleway">
              Signal Reset for Healthcare Credibility
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
              Healthtech startup developed diagnostic platform with strong clinical results. Despite medical validation, failed to move investors and large hospital chains. Market saw them as "another startup with tech claims."
            </p>
          </motion.div>

          {/* Meta Badges */}
          <motion.div 
            {...caseStudyAnimations.hero.badges}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Sector</p>
              <p className="mt-2 font-semibold text-white" data-testid="text-sector">Healthcare & Pharma</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Service</p>
              <p className="mt-2 font-semibold text-white">Signal Architecture</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Stage</p>
              <p className="mt-2 font-semibold text-white">Pre-Series A (Clinical Validation Stage)</p>
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
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          {...caseStudyAnimations.section}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-red font-raleway" data-testid="heading-conundrum">
            The Conundrum
          </h2>
          <div className="mt-8 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A healthtech startup had developed a diagnostic platform with strong clinical results. The technology worked. The validation was solid. Early trials showed genuine promise. But when they approached investors and large hospital chains, their story fell on deaf ears. The market dismissed them as "another startup with tech claims."
            </p>
            <p>
              The problem wasn't the clinical data — it was the signal. Hospitals wanted proof of widespread adoption, not just technical capability. Investors needed evidence of market inevitability, not just medical validation. The company had the science, but they lacked the credibility architecture to make the market believe.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-800 text-xl my-8" data-testid="quote-conundrum">
              "We thought clinical data was enough. But no one outside the lab believed in us."
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
                <h3 className="font-semibold text-lg text-gray-900">Hospital Adoption Would Stall</h3>
                <p className="mt-3 text-gray-700">Without credibility signals, large hospital chains refused to move past initial conversations.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Investors Hesitated</h3>
                <p className="mt-3 text-gray-700">Clinical validation alone wasn't enough — investors needed market proof before committing capital.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">Competitors Capturing Market Share</h3>
                <p className="mt-3 text-gray-700">Rivals with weaker technology but stronger signals were winning hospital contracts.</p>
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
            We engineered credibility through Signal Architecture, translating clinical validation into market inevitability:
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1</p>
              <h3 className="mt-3 font-bold text-xl text-gray-900">Signal Diagnostic</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Identified where clinical excellence was leaking credibility — the gap between "validated in trials" and "trusted by hospitals."
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Narrative Core</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Reframed positioning from "innovative healthtech startup" to "inevitable diagnostic infrastructure for modern healthcare."
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3</p>
              <h3 className="mt-3 font-bold text-xl text-gray-900">Proof Artifacts</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Built tangible credibility anchors: medical journal publications, physician endorsements, independent clinical certifications.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              whileHover={caseStudyAnimations.card.whileHover}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4</p>
              <h3 className="mt-3 font-bold text-xl text-gray-900">Market Calibration</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Aligned all external messaging — investor decks, hospital presentations, regulatory submissions — to signal clinical inevitability.
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
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Adoption Velocity</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-adoption">3 Hospital Chains</p>
                <p className="mt-2 text-gray-700">Onboarded in 4 months</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Investor Perception</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-investor">2 Early-Stage Funds</p>
                <p className="mt-2 text-gray-700">Term sheets secured</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Credibility Lift</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-credibility">2 Medical Journals</p>
                <p className="mt-2 text-gray-700">Published case studies</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Sales Signal</p>
                <p className="mt-3 text-3xl font-extrabold text-gray-900" data-testid="metric-sales">+40% Conversion</p>
                <p className="mt-2 text-gray-700">From initial conversations to pilots</p>
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
              Within 6 months, the company crossed the credibility threshold that had blocked them for over a year. Hospital administrators stopped viewing them as "risky early-stage tech" and began treating them as "inevitable diagnostic partners." The narrative shifted from clinical validation to market inevitability — and the entire ecosystem responded.
            </p>
            <p>
              They didn't change their technology or their clinical results. They changed their signal. And that shift transformed everything — from hospital adoption velocity to investor confidence to competitive positioning.
            </p>
          </div>
          <figure className="mt-10 bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <blockquote className="text-xl italic text-gray-800 leading-relaxed" data-testid="quote-outcome">
              "Instaura showed us that healthcare doesn't respond to clinical data alone — it responds to credibility architecture. Once we learned to build that signal, everything unlocked."
            </blockquote>
            <figcaption className="mt-6 text-sm text-gray-500 font-medium">— Founder (redacted)</figcaption>
          </figure>
        </motion.div>
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
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#8: Talent as Signal in Early-Stage Growth</p>
                  <p className="mt-3 text-gray-700 text-sm">How strategic hiring communicates market inevitability and attracts capital.</p>
                </motion.div>
              </Link>
              <Link href="/white-papers">
                <motion.div 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">White Paper</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#11: Signal Velocity and Market Movement</p>
                  <p className="mt-3 text-gray-700 text-sm">Understanding how strong signals accelerate adoption and investor confidence.</p>
                </motion.div>
              </Link>
              <Link href="/clarity-series">
                <motion.div 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer"
                  whileHover={caseStudyAnimations.card.whileHover}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Clarity Series</p>
                  <p className="mt-3 font-semibold text-lg group-hover:text-brand-red transition">#9: Why Clinical Validation Alone Isn't Enough</p>
                  <p className="mt-3 text-gray-700 text-sm">The gap between medical proof and market credibility in healthtech.</p>
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
            Your clinical data isn't the problem. Your signal architecture is. Fix the signal, and credibility follows.
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
