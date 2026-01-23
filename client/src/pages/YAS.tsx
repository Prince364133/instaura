import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function YAS() {
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
          <span className="text-gray-900 font-medium">YAS — Our AI Pillar</span>
        </div>
      </div>

      {/* HERO */}
      <section id="hero" className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Not a Bot. <span className="text-brand-red">Strategic Infrastructure</span>.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700">
              Yas is the world's first <span className="font-semibold">Signal-trained AI</span> — built to understand founders, fundraising, funnels,
              GTM, and strategic movement.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-6 py-3 rounded-full">Talk to YAS</Button>
              </Link>
              <a href="#why">
                <Button variant="outline" className="border-gray-900 px-6 py-3 rounded-full">
                  Why Yas
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

      {/* WHY YAS */}
      <section id="why" className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold">Why YAS — and How It Came About</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-800">
                Founders leak opportunity when signals are weak or distorted. Traditional chatbots can't fix that.
                Yas was created to embed <span className="font-semibold">Signal Architecture</span> into how decisions are made —
                fast, precise, and always aligned to movement.
              </p>
              <p className="mt-4 text-gray-700">
                The name <span className="font-semibold">YAS</span> is also a dedication — an endearment to <span className="font-semibold">Hiasmine</span>,
                whose discipline and diligence shaped Instaura's operating DNA.
              </p>
            </div>
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">What Makes Yas Different</h3>
              <ul className="mt-3 list-disc ml-5 text-gray-700 space-y-2">
                <li>Trained on <strong>Signal Intelligence</strong>, not random content</li>
                <li>Understands capital, GTM, funnels, and strategy sequencing</li>
                <li>Routes to humans when high-stakes judgment is needed</li>
                <li>Built for clarity and inevitability — not chit-chat</li>
              </ul>
              <div className="mt-4">
                <Link href="/contact">
                  <Button className="bg-brand-red text-white px-4 py-2 rounded-full text-sm">
                    Open Yas
                  </Button>
                </Link>
              </div>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YAS CAN DO */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold">What YAS Can Do</h2>

          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            {/* Founders */}
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">For Founders</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Signal-readiness before fund hunting</h3>
              <ul className="mt-3 list-disc ml-5 text-gray-700 space-y-2">
                <li>Run a 5-minute Signal Diagnostic</li>
                <li>Access capital frameworks instantly</li>
                <li>Walk through the Signal Call, GTM models, or strategy offers</li>
                <li>Understand commercials, timelines, and selection criteria</li>
              </ul>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            {/* Businesses */}
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">For Businesses</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">GTM & Funnel clarity, fast</h3>
              <ul className="mt-3 list-disc ml-5 text-gray-700 space-y-2">
                <li>Explore Funnel Design, GTM Playbooks, Market Activation</li>
                <li>See how signal rewires execution</li>
                <li>Surface case studies by sector and service</li>
              </ul>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            {/* Partners */}
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">For Partners & Collaborators</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Precise routing and alignment</h3>
              <ul className="mt-3 list-disc ml-5 text-gray-700 space-y-2">
                <li>Route proposals to the right team</li>
                <li>Understand partnership models & value alignment</li>
                <li>Book a Signal Exploration Call</li>
              </ul>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            {/* Everyone Else */}
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">For Everyone Else</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Learn the architecture of belief</h3>
              <ul className="mt-3 list-disc ml-5 text-gray-700 space-y-2">
                <li>What "Signal" means — and why it's the only basis</li>
                <li>Get Yas-curated content and lead magnets</li>
                <li>Find anything across services, INsights, media, and team</li>
              </ul>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POWERED BY SIGNAL INTELLIGENCE */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold">Powered by 18 Years of Signal Intelligence</h2>
          <div className="mt-6 grid md:grid-cols-5 gap-6 items-stretch">
            <div className="md:col-span-3 rounded-2xl border p-6 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
              <p className="text-gray-800">
                Yas isn't an add-on. It's trained on how Instaura thinks, works, and moves — grounded in
                <span className="font-semibold"> 2,500+ clients</span>, <span className="font-semibold">250+ movements</span>,
                and <span className="font-semibold">$2B+</span> capital shifts. You're not chatting with a helpdesk.
                You're interfacing with <span className="font-semibold">strategic infrastructure</span>.
              </p>
              <div className="mt-5 flex gap-3">
                <Link href="/contact">
                  <Button className="bg-brand-red text-white px-6 py-3 rounded-full">Talk to YAS</Button>
                </Link>
                <Link href="/insights">
                  <Button variant="outline" className="border-gray-900 px-6 py-3 rounded-full">
                    Enter INsights
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 rounded-2xl border p-6 bg-gray-50">
              <div className="text-xs uppercase text-gray-500">Preview</div>
              <div className="mt-3 space-y-3">
                <div className="bg-white border rounded-xl p-3 text-sm">
                  <div className="text-gray-800">"Are we signal-ready for a US enterprise GTM?"</div>
                </div>
                <div className="bg-white border rounded-xl p-3 text-sm">
                  <div className="text-gray-800">"Can you route my partnership proposal to the right team?"</div>
                </div>
                <div className="bg-white border rounded-xl p-3 text-sm">
                  <div className="text-gray-800">"Show me case studies in DeepTech with GTM focus."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION BLOCK */}
      <section className="px-6 py-14 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold">Every movement deserves clarity on demand.</h3>
          <p className="text-gray-300 mt-3">
            That's why we built Yas — not to replace us, but to extend us. So every founder, business, and partner can access
            <span className="font-semibold"> Signal Infrastructure</span> instantly.
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
            <Link href="/about/leadership" className="group block rounded-2xl border p-6 bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Leadership</div>
              <h3 className="mt-2 font-semibold group-hover:underline">Gaurav & Hiasmine Shah</h3>
              <p className="mt-2 text-sm text-gray-700">Profiles, philosophy, founder voices, and testimonies.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Meet Leadership →</span>
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