import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="pt-16 bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* HERO */}
      <section className="relative px-6 pt-8 pb-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-red-50/30"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
                Who We Are. <span className="text-brand-red bg-gradient-to-r from-brand-red to-red-600 bg-clip-text text-transparent">Why We Exist.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
                Instaura is the first and only <span className="font-bold text-gray-900">Signal-Driven Consulting Firm</span>.
                We don't sell noise. We architect signal — the decisive basis for every real outcome.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Talk to YAS
                </Button>
              </Link>
              <a href="#our-story">
                <Button variant="outline" className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-900 hover:text-white hover:scale-105 transition-all duration-300">
                  Explore Our Story
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PEDIGREE */}
      <section className="px-6 py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">PEDIGREE</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group text-center rounded-3xl border-2 border-white/40 p-8 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 hover:border-brand-red/40 hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">
                  18
                </div>
                <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">
                  YEARS
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  of Signal practice
                </div>
                <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
              </div>
            </div>
            <div className="group text-center rounded-3xl border-2 border-white/40 p-8 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 hover:border-brand-red/40 hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">
                  2500+
                </div>
                <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">
                  CLIENTS
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  across 4 continents
                </div>
                <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
              </div>
            </div>
            <div className="group text-center rounded-3xl border-2 border-white/40 p-8 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 hover:border-brand-red/40 hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">
                  250+
                </div>
                <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">
                  MOVEMENTS
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  breakthrough outcomes
                </div>
                <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
              </div>
            </div>
            <div className="group text-center rounded-3xl border-2 border-white/40 p-8 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 hover:border-brand-red/40 hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">
                  $2B+
                </div>
                <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">
                  MOVED
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  capital & value
                </div>
                <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY (PREVIEW) */}
      <section id="our-story" className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Story</h2>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 md:p-12">
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              From a single founder's journey in 2007 to a global practice today, Instaura has always believed one thing:
              <span className="font-bold text-gray-900"> signal creates movement, not slides.</span> Over 18 years, we've moved $2B+ in capital,
              designed 250+ decisive movements, and guided founders through pivots, scale, and survival — across sectors and geographies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We remain rooted in clarity, driven by conviction, and designed for inevitability. That's our DNA — and your advantage.
            </p>
            <Link href="/about/story" className="inline-flex items-center text-brand-red text-lg font-bold hover:text-red-600 transition-colors duration-300 group">
              Read Full Story
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US YOUR PERFECT PARTNER */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">What Makes Us Your Perfect Partner</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Four pillars that separate signal-driven consulting from traditional approaches.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors duration-300">Signal Architecture</h3>
                <p className="text-gray-600 leading-relaxed">We pioneered it. The foundation behind capital, GTM, and strategy that actually moves markets.</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
            
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors duration-300">250+ Movements</h3>
                <p className="text-gray-600 leading-relaxed">Not advice for slides. Architecture that turned into outcomes across sectors.</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
            
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors duration-300">Clarity → Movement</h3>
                <p className="text-gray-600 leading-relaxed">We align boards, founders, teams — so decisions accelerate and belief compounds.</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
            
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors duration-300">Embedded, Not Distant</h3>
                <p className="text-gray-600 leading-relaxed">We walk with you till the move lands. Precision over performance theater.</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBPAGE PORTAL GRID */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Explore the Pillars of Instaura</h2>
            <Link href="/about" className="text-sm text-brand-red font-semibold hover:underline">
              Back to Top
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Vision */}
            <Link href="/about/vision#hero" className="group block rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Vision • Philosophy • Mission</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Signal is the Only Basis</h3>
              <p className="mt-2 text-sm text-gray-700">How we see the world, and why inevitability is designed — not declared.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Explore →</span>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
            {/* Leadership */}
            <Link href="/about/leadership#hero" className="group block rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Leadership</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Gaurav & Hiasmine Shah</h3>
              <p className="mt-2 text-sm text-gray-700">Profiles, philosophy, founder quotes, and what makes their partnership inevitable.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Meet Leadership →</span>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
            {/* YAS */}
            <Link href="/about/yas#hero" className="group block rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">YAS — Our AI Pillar</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Not a Bot. Strategic Infrastructure.</h3>
              <p className="mt-2 text-sm text-gray-700">Signal-trained AI for founders, teams, partners, and everyone who needs clarity.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Learn About Yas →</span>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
            {/* Media */}
            <Link href="/about/media#hero" className="group block rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Media</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Print • Digital • Television</h3>
              <p className="mt-2 text-sm text-gray-700">Coverage and appearances — the outside world reading our signal.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Visit Media →</span>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
            {/* Social Responsibility */}
            <Link href="/about/social-responsibility#hero" className="group block rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Social Responsibility</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Beyond Boardrooms</h3>
              <p className="mt-2 text-sm text-gray-700">NEN, NASSCOM, CIIE-IIMA, academic lectures — building ecosystems of clarity.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">See Contributions →</span>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
            {/* Careers */}
            <Link href="/about/careers#hero" className="group block rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Careers</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Join the Movement</h3>
              <p className="mt-2 text-sm text-gray-700">Precision, clarity, movement. If that's you, you'll fit right in.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Open Roles →</span>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-6 py-14 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold">We are not different. We are inevitable.</h3>
          <p className="text-gray-300 mt-2">The world's first and only Signal-Driven Consulting Firm.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact">
              <Button className="bg-brand-red text-white px-6 py-3 rounded-full">Talk to YAS</Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-white text-black px-6 py-3 rounded-full">Book a Signal Call</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Instaura Consulting</div>
          <div className="flex gap-5 text-sm">
            <Link href="/legal/privacy" className="text-gray-600 hover:text-black">Privacy</Link>
            <Link href="/legal/terms" className="text-gray-600 hover:text-black">Terms</Link>
            <Link href="/legal/disclaimers" className="text-gray-600 hover:text-black">Disclaimers</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}