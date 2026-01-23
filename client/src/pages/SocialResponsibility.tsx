import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function SocialResponsibility() {
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
              Talk to YAS
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
          <span className="text-gray-900 font-medium">Social Responsibility</span>
        </div>
      </div>

      {/* HERO */}
      <section id="hero" className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Building Signals <span className="text-brand-red">Beyond Business</span>.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700">
              Signal isn't only for markets. It's for ecosystems, classrooms, incubators, and the next generation of leaders.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-6 py-3 rounded-full">Talk to YAS</Button>
              </Link>
              <a href="#ecosystems">
                <Button variant="outline" className="border-gray-900 px-6 py-3 rounded-full">
                  See Our Work
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

      {/* ECOSYSTEM CONTRIBUTIONS */}
      <section id="ecosystems" className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold">Our Contribution to Ecosystems</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Programs & Platforms</div>
              <h3 className="mt-2 font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">NEN • NASSCOM • CIIE–IIMA</h3>
              <p className="mt-2 text-gray-700">
                Active involvement in national programs shaping India's entrepreneurial landscape — mentoring founders and sharing signal frameworks.
              </p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Academic Outreach</div>
              <h3 className="mt-2 font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">Lectures Across Asia</h3>
              <p className="mt-2 text-gray-700">
                Delivered sessions at B-Schools and incubators, embedding Signal Architecture into how strategy and execution are taught.
              </p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Founder Mentorship</div>
              <h3 className="mt-2 font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">Clarity Over Noise</h3>
              <p className="mt-2 text-gray-700">
                One-on-one guidance to early teams to avoid common traps — aligning belief, narrative, and motion before scale.
              </p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold">Our Philosophy of Responsibility</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-6 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold">Clarity Multiplies</h3>
              <p className="mt-2 text-gray-700">Ecosystems rise when clarity spreads faster than noise. Our role is to amplify signal where it matters most.</p>
            </div>
            <div className="rounded-2xl border p-6 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold">Beyond Charity</h3>
              <p className="mt-2 text-gray-700">For us, social responsibility isn't optics. It's <span className="font-semibold">architecture for the future</span> — equipping leaders with belief systems that endure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT HIGHLIGHTS (TIMELINE) */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Impact Highlights (Redacted)</h2>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

            {/* item */}
            <div className="md:pl-16 mb-8 flex">
              <div className="hidden md:block mt-1.5 mr-6">
                <div className="h-3 w-3 rounded-full bg-black border-2 border-white shadow"></div>
              </div>
              <div className="flex-1 rounded-2xl border p-6 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="text-xs uppercase text-gray-500">Incubators & Seed Labs</div>
                <h3 className="mt-1 font-semibold text-brand-red">Student Ventures → Scale-Ready</h3>
                <p className="mt-2 text-gray-700">Mentored teams to convert projects into companies with viable GTM and capital signal.</p>
              </div>
            </div>

            {/* item */}
            <div className="md:pl-16 mb-8 flex">
              <div className="hidden md:block mt-1.5 mr-6">
                <div className="h-3 w-3 rounded-full bg-black border-2 border-white shadow"></div>
              </div>
              <div className="flex-1 rounded-2xl border p-6 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="text-xs uppercase text-gray-500">Founder Mentoring</div>
                <h3 className="mt-1 font-semibold text-brand-red">From Pitch to Belief</h3>
                <p className="mt-2 text-gray-700">Helped early teams upgrade from storytelling to signal, improving terms and timelines.</p>
              </div>
            </div>

            {/* item */}
            <div className="md:pl-16 mb-2 flex">
              <div className="hidden md:block mt-1.5 mr-6">
                <div className="h-3 w-3 rounded-full bg-black border-2 border-white shadow"></div>
              </div>
              <div className="flex-1 rounded-2xl border p-6 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="text-xs uppercase text-gray-500">Academic Ecosystems</div>
                <h3 className="mt-1 font-semibold text-brand-red">Signal in the Classroom</h3>
                <p className="mt-2 text-gray-700">Brought practical signal frameworks to courses, changing how strategy is taught and applied.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE / ETHOS */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl font-semibold">
            "When belief becomes clear, potential becomes inevitable. Our responsibility is to make that clarity accessible."
          </blockquote>
        </div>
      </section>

      {/* CONCLUSION BLOCK */}
      <section className="px-6 py-14 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold">True signal must multiply.</h3>
          <p className="text-gray-300 mt-3">
            Our responsibility is not limited to clients. It extends to ecosystems, founders, and the next generation who will carry Signal forward.
            We don't just move markets. We move people, knowledge, and belief.
          </p>
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
            <Link href="/about/story" className="group block rounded-2xl border p-6 bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Our Story</div>
              <h3 className="mt-2 font-semibold group-hover:underline">From Mumbai to Markets Worldwide</h3>
              <p className="mt-2 text-sm text-gray-700">Origins, breakthroughs, and the evolution into Signal Architecture.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Read the Story →</span>
            </Link>
            <Link href="/about/vision" className="group block rounded-2xl border p-6 bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Vision • Philosophy • Mission</div>
              <h3 className="mt-2 font-semibold group-hover:underline">Signal is the Only Basis</h3>
              <p className="mt-2 text-sm text-gray-700">Why inevitability is designed — not declared.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Explore →</span>
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