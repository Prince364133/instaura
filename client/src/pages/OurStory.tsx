import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function OurStory() {
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
          <span className="text-gray-900 font-medium">Our Story</span>
        </div>
      </div>

      {/* HERO */}
      <section className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              From Mumbai to <span className="text-brand-red">Markets Worldwide</span>.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700">
              Born in adversity. Forged through movement. Evolved into the world's first and only
              <span className="font-semibold"> Signal-Driven Consulting Firm</span>.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-6 py-3 rounded-full">Talk to Yas</Button>
              </Link>
              <a href="#origins">
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

      {/* ORIGINS */}
      <section id="origins" className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold">Origins</h2>
          <p className="mt-4 text-gray-800">
            Instaura's story begins long before the company itself — with its founder, <span className="font-semibold">Gaurav Shah</span>,
            a Mumbai-born polio survivor who started his professional journey at 12 as a trainee software engineer.
            Early adversity built resilience. Global exposure at Micron, Netcore, TAS, and JP Morgan sharpened business acumen.
            One insight remained constant: <span className="font-semibold">no move matters unless the market believes in it.</span>
          </p>
          <p className="mt-4 text-gray-800">
            Those early years taught us that excellence without belief stalls. Market belief isn't a slogan — it's engineered through clear signal,
            calibrated narrative, and precise sequencing.
          </p>
          <p className="mt-4 text-gray-800">
            That insight would become the basis of everything Instaura stands for today.
          </p>
        </div>
      </section>

      {/* 2007 BREAKTHROUGH */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold">2007 — The Breakthrough</h2>
          <p className="mt-4 text-gray-800">
            When Instaura launched in 2007, consulting meant reports, decks, and advice. We saw the flaw:
            companies weren't failing for lack of ideas — they were failing because their <span className="font-semibold">signals didn't land</span>.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">What We Changed</h3>
              <ul className="mt-2 list-disc ml-5 text-gray-700 space-y-1">
                <li>Replaced "deliverables" with decisive movements</li>
                <li>Designed narratives that created inevitability</li>
                <li>Made belief the prerequisite to action</li>
              </ul>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">Early Proof</h3>
              <ul className="mt-2 list-disc ml-5 text-gray-700 space-y-1">
                <li>Fundraising that closed because belief was architected</li>
                <li>Launches that landed with signal, not spend</li>
                <li>Boards aligned by clarity — not volume</li>
              </ul>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVOLUTION INTO SIGNAL ARCHITECTURE */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold">Evolution into Signal Architecture</h2>
          <p className="mt-4 text-gray-800">
            Over 18 years, Instaura engineered more than <span className="font-semibold">250+ decisive movements</span> across sectors — SaaS,
            consumer tech, healthcare, defense, real estate, and beyond. We moved <span className="font-semibold">$2B+</span> in capital and served
            <span className="font-semibold"> 2500+ clients</span>. The pattern was undeniable: success wasn't random. Success followed a discipline we
            pioneered — <span className="font-semibold">Signal Architecture</span>.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-3xl font-extrabold text-brand-red group-hover:text-red-600 transition-colors duration-300">250+</div>
              <div className="text-xs uppercase text-gray-500 mt-1">Movements</div>
              <div className="w-6 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
            </div>
            <div className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-3xl font-extrabold text-brand-red group-hover:text-red-600 transition-colors duration-300">2500+</div>
              <div className="text-xs uppercase text-gray-500 mt-1">Clients</div>
              <div className="w-6 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
            </div>
            <div className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-3xl font-extrabold text-brand-red group-hover:text-red-600 transition-colors duration-300">$2B+</div>
              <div className="text-xs uppercase text-gray-500 mt-1">Capital Moved</div>
              <div className="w-6 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
            </div>
            <div className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-3xl font-extrabold text-brand-red group-hover:text-red-600 transition-colors duration-300">18</div>
              <div className="text-xs uppercase text-gray-500 mt-1">Years</div>
              <div className="w-6 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">Signal Architecture: the invisible architecture of belief that turns strategy into inevitability.</p>
        </div>
      </section>

      {/* TODAY */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold">Today</h2>
          <p className="mt-4 text-gray-800">
            What began as fundraising consulting has evolved into a category-defining practice.
            Instaura is the <span className="font-semibold">first and only Signal-Driven Consulting Firm</span> — a global partner for founders and
            businesses who want clarity before they move.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold group-hover:text-brand-red transition-colors duration-300">Clarity before capital</h3>
              <p className="mt-2 text-gray-700">Terms improve when belief improves. We design for conviction first.</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold group-hover:text-brand-red transition-colors duration-300">Signal before scale</h3>
              <p className="mt-2 text-gray-700">Scale sticks when the market reads inevitability, not noise.</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold group-hover:text-brand-red transition-colors duration-300">Belief before execution</h3>
              <p className="mt-2 text-gray-700">Execution compounds when the room is aligned to a single signal.</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION BLOCK */}
      <section className="px-6 py-14 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold">Every story is noise until it becomes signal.</h3>
          <p className="text-gray-300 mt-2">
            Our story isn't about the past. It's why we built Instaura as the first and only Signal-Driven Consulting Firm —
            and why every real outcome you seek begins with signal. Clarity creates inevitability. Signal makes markets move.
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
            <Link href="/about/vision" className="group block rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Vision • Philosophy • Mission</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Signal is the Only Basis</h3>
              <p className="mt-2 text-sm text-gray-700">Why inevitability is designed — not declared.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Explore →</span>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
            <Link href="/about/leadership" className="group block rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Leadership</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Gaurav & Hiasmine Shah</h3>
              <p className="mt-2 text-sm text-gray-700">Profiles, philosophy, and founder voices.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Meet Leadership →</span>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
            <Link href="/about/yas" className="group block rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">YAS — Our AI Pillar</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Not a Bot. Strategic Infrastructure.</h3>
              <p className="mt-2 text-sm text-gray-700">Signal-trained AI for founders, teams, partners, and everyone who needs clarity.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Learn About Yas →</span>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
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