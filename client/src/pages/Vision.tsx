import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Vision() {
  return (
    <div className="bg-white text-gray-900">
      {/* HEADER / NAV */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-filter backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-extrabold tracking-tight text-xl">
            INSTAURA<span className="text-brand-red">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/services" className="hover:text-black text-gray-600">Services</Link>
            <Link href="/verticals" className="hover:text-black text-gray-600">Verticals</Link>
            <Link href="/insights" className="hover:text-black text-gray-600">INsights</Link>
            <Link href="/about" className="text-black font-semibold">About</Link>
            <Link href="/contact" className="hover:text-black text-gray-600">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Link href="/contact" className="hidden sm:inline-block border border-gray-200 px-3 py-1.5 rounded-full text-xs">
              Book a Signal Call
            </Link>
            <Link href="/contact" className="bg-brand-red text-white rounded-full px-4 py-2 text-sm">
              Talk to Yas
            </Link>
          </div>
          <button className="md:hidden border border-gray-200 px-3 py-1.5 rounded-full text-xs">Menu</button>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="bg-gray-50 px-6 py-3 text-sm">
        <div className="max-w-7xl mx-auto text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> /
          <Link href="/about" className="hover:underline">About</Link> /
          <span className="text-gray-900 font-medium">Vision, Philosophy & Mission</span>
        </div>
      </div>

      {/* HERO */}
      <section id="hero" className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Signal is the <span className="text-brand-red">Only Basis</span>.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700">
              Not strategy, not vision, not execution alone. Without signal, every move is fragile.
              With it, every move is inevitable.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-6 py-3 rounded-full">Talk to Yas</Button>
              </Link>
              <a href="#vision">
                <Button variant="outline" className="border-gray-900 px-6 py-3 rounded-full">
                  Start Reading
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

      {/* VISION */}
      <section id="vision" className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold">Vision</h2>
          <p className="mt-4 text-gray-800">
            To make <span className="font-semibold">signal the foundation of every business move</span> — capital, clarity, growth, and scale.
            We see a world where founders, investors, boards, and teams don't gamble on noise — they move with inevitability because signal is clear.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="px-6 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold">Philosophy</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">Signal over Features</h3>
              <p className="mt-2 text-gray-700">Markets don't move because of features. They move when belief is architected.</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">Invisible Architecture</h3>
              <p className="mt-2 text-gray-700">Signal is not storytelling or branding. It is the <span className="font-semibold">invisible architecture of belief</span>.</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">Rarity</h3>
              <p className="mt-2 text-gray-700">Noise is universal. Signal is rare. We exist to create it.</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">Sequence & Inevitability</h3>
              <p className="mt-2 text-gray-700">Once signal is aligned and sequenced, capital, talent, and markets follow.</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold">Mission</h2>
          <ul className="mt-4 list-disc ml-6 text-gray-800 space-y-2">
            <li>Equip founders and businesses with <span className="font-semibold">Signal Architecture</span> before they raise, scale, or pivot.</li>
            <li>Embed clarity and conviction into every GTM, funnel, and strategy.</li>
            <li>Train ecosystems — investors, boards, teams — to recognize and act on signal.</li>
            <li>Continue building the world's first and only <span className="font-semibold">Signal-Driven Consulting Firm</span>.</li>
          </ul>
        </div>
      </section>

      {/* CONCLUSION BLOCK */}
      <section className="px-6 py-14 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold">Without Signal, every move is fragile. With Signal, every move is inevitable.</h3>
          <p className="text-gray-300 mt-3">
            Our vision is not aspirational — it's architectural. Our philosophy is not rhetoric — it's the framework of belief.
            Our mission is not growth — it's clarity that multiplies growth. We exist so that every founder, every business,
            and every ecosystem move begins with signal, not noise.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact">
              <Button className="bg-brand-red text-white px-6 py-3 rounded-full">Talk to Yas</Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-white text-black px-6 py-3 rounded-full">Book a Signal Call</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPLORE MORE ABOUT INSTAURA */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Explore More About Instaura</h2>
            <Link href="/about" className="text-sm text-brand-red font-semibold hover:underline">
              Back to About
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/about/leadership" className="group block rounded-2xl border p-6 bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Leadership</div>
              <h3 className="mt-2 font-semibold group-hover:underline">Gaurav & Hiasmine Shah</h3>
              <p className="mt-2 text-sm text-gray-700">Profiles, philosophy, founder voices, and testimonies.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Meet Leadership →</span>
            </Link>
            <Link href="/about/yas" className="group block rounded-2xl border p-6 bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">YAS — Our AI Pillar</div>
              <h3 className="mt-2 font-semibold group-hover:underline">Not a Bot. Strategic Infrastructure.</h3>
              <p className="mt-2 text-sm text-gray-700">Signal-trained AI for founders, teams, partners, and more.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Learn About Yas →</span>
            </Link>
            <Link href="/about/media" className="group block rounded-2xl border p-6 bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Media</div>
              <h3 className="mt-2 font-semibold group-hover:underline">Print • Digital • Television</h3>
              <p className="mt-2 text-sm text-gray-700">Coverage and appearances — the outside world reading our signal.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Visit Media →</span>
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