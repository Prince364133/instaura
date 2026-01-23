import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Insights() {
  useEffect(() => {
    // Handle anchor navigation on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="pt-16 bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-red-50/30"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-brand-red/10 border border-brand-red/20 rounded-full">
                <span className="text-brand-red text-sm font-semibold uppercase tracking-wider">Coming Soon</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
                Insights by Instaura
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                <span className="font-bold text-gray-900">Signals decoded. Movements explained.</span> We're finalizing the world's first{" "}
                <span className="font-bold text-gray-900">Signal-driven knowledge hub</span> — where case studies, white papers, and clarity drops show how capital moves, GTMs succeed, and strategies scale.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Talk to YAS
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                  Book a Signal Call
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 group bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-white/60 shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500 p-8 max-w-4xl mx-auto">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-gray-700 group-hover:text-brand-red transition-colors duration-300">Preview Access</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                While we finalize the full Insights hub, current clients and partners can access early drafts, case study previews, and strategic frameworks. Ready to see how signal architecture transforms outcomes?
              </p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why This Matters</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Noise is everywhere. Movements happen only on signal. Insights distills 18 years of practice into legible, repeatable frameworks founders and leaders can use immediately.
            </p>
          </div>
          
          {/* Pedigree strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">18</div>
              <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">Years</div>
              <div className="text-xs text-gray-400 mt-1">of Signal practice</div>
              <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
            </div>
            <div className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">2500+</div>
              <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">Clients</div>
              <div className="text-xs text-gray-400 mt-1">across 4 continents</div>
              <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
            </div>
            <div className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">250+</div>
              <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">Movements</div>
              <div className="text-xs text-gray-400 mt-1">breakthrough outcomes</div>
              <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
            </div>
            <div className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">$2B+</div>
              <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">Moved</div>
              <div className="text-xs text-gray-400 mt-1">capital & value</div>
              <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What's coming */}
      <section className="bg-gray-50" id="insights-sections">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold">What's coming</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* Case Studies */}
            <Link href="/case-studies" id="case-studies" className="block scroll-mt-24 group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500 target:ring-2 target:ring-brand-red target:ring-opacity-50" data-testid="link-case-studies">
              <div className="w-10 h-10 rounded-xl bg-brand-red text-white flex items-center justify-center font-bold">CS</div>
              <h3 className="mt-4 font-semibold text-lg group-hover:text-brand-red transition-colors duration-300">Case Studies</h3>
              <p className="mt-2 text-gray-700">
                Lots of signal-rich movements across <span className="font-medium">12 industries × 4 services.</span>{" "}
                How inevitability was designed — not guessed.
              </p>
              <p className="mt-3 text-sm text-brand-red font-semibold">Explore Case Studies →</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
            {/* White Papers */}
            <Link href="/white-papers" id="white-papers" className="block scroll-mt-24 group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500 target:ring-2 target:ring-brand-red target:ring-opacity-50" data-testid="link-white-papers">
              <div className="w-10 h-10 rounded-xl bg-brand-red text-white flex items-center justify-center font-bold">WP</div>
              <h3 className="mt-4 font-semibold text-lg group-hover:text-brand-red transition-colors duration-300">White Papers</h3>
              <p className="mt-2 text-gray-700">
                Frameworks, models, and the Signal Code — long-form essays on capital, GTM, and strategy clarity.
              </p>
              <p className="mt-3 text-sm text-brand-red font-semibold">Explore White Papers →</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
            {/* Clarity Series */}
            <Link href="/clarity-series" id="clarity-series" className="block scroll-mt-24 group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500 target:ring-2 target:ring-brand-red target:ring-opacity-50" data-testid="link-clarity-series">
              <div className="w-10 h-10 rounded-xl bg-brand-red text-white flex items-center justify-center font-bold">CS+</div>
              <h3 className="mt-4 font-semibold text-lg group-hover:text-brand-red transition-colors duration-300">Clarity Series</h3>
              <p className="mt-2 text-gray-700">
                Field notes from founder inflection points — short, sharp, and immediately useful.
              </p>
              <p className="mt-3 text-sm text-brand-red font-semibold">Explore Clarity Series →</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Signal frame */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <figure className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
          <blockquote className="text-xl md:text-2xl leading-relaxed">
            <span className="text-brand-red font-semibold group-hover:text-red-600 transition-colors duration-300">Insights</span> isn't content. It's infrastructure.
            The kind that helps founders and leaders cut through noise and move on signal.
          </blockquote>
          <figcaption className="mt-4 text-sm text-gray-500">Instaura Method</figcaption>
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6">
            <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
          </div>
        </figure>
      </section>

      {/* Launch note */}
      <section className="max-w-7xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
            <p className="text-sm uppercase tracking-wider text-gray-500">Status</p>
            <h3 className="mt-1 font-semibold text-lg group-hover:text-brand-red transition-colors duration-300">Finalizing for launch</h3>
            <p className="mt-2 text-gray-700">
              We're polishing the first drop. Expect the full Insights hub to go live in the next few days.
            </p>
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
              <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
          <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
            <p className="text-sm uppercase tracking-wider text-gray-500">Until then</p>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>• Chat with <span className="font-medium">Yas</span> for previews and guidance</li>
              <li>• Book a <span className="font-medium">Signal Call</span> to start with your own diagnostic</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-5 py-2.5 rounded-full font-semibold hover:opacity-95">
                  Talk to Yas
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-5 py-2.5 rounded-full font-semibold border hover:bg-gray-50">
                  Book a Signal Call
                </Button>
              </Link>
            </div>
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
              <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">Clarity → Movement.</h2>
          <p className="mt-3 md:text-lg text-gray-300 max-w-3xl mx-auto">
            Insights goes live shortly. If you need signal now, Yas and the Signal Call are open.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-red px-6 py-3 rounded-full font-semibold hover:opacity-95">
                Talk to Yas
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
                Book a Signal Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mini footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-wrap items-center justify-between">
          <p>© Instaura Consulting</p>
          <div className="space-x-4">
            <Link href="/legal/privacy" className="hover:text-black">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-black">Terms</Link>
            <Link href="/contact" className="hover:text-black">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}