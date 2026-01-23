import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import gauravPortrait from "@/assets/gaurav-portrait.jpeg";
import hiasminePortrait from "@/assets/hiasmine-portrait.png";

export default function Leadership() {
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
          <span className="text-gray-900 font-medium">Leadership</span>
        </div>
      </div>

      {/* HERO */}
      <section id="hero" className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              The Architects Behind the <span className="text-brand-red">Signal</span>.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700">
              Instaura is led by Gaurav and Hiasmine Shah — partners in life and in movement.
              Every decisive strategy we build comes from their clarity and conviction.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-6 py-3 rounded-full">Talk to YAS</Button>
              </Link>
              <a href="#gaurav">
                <Button variant="outline" className="border-gray-900 px-6 py-3 rounded-full">
                  Meet Leadership
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

      {/* GAURAV */}
      <section id="gaurav" className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 items-start">
          {/* Photo */}
          <div className="md:col-span-2">
            <div className="w-full h-72 rounded-2xl border overflow-hidden">
              <img
                src={gauravPortrait}
                alt="Gaurav Shah - Managing Partner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Bio */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-extrabold">Gaurav Shah</h2>
              <span className="border border-gray-200 px-3 py-1.5 rounded-full text-xs">Managing Partner</span>
            </div>
            <p className="mt-3 text-gray-700">
              Gaurav began his professional journey at 12 as a trainee software engineer. A Mumbai-born polio survivor,
              he transformed adversity into discipline — bronze medalist in gymnastics, two-time table tennis champion,
              professional cricketer (Shivalkar Club), and an under-19 swimmer.
            </p>
            <p className="mt-3 text-gray-700">
              He worked with Micron, Netcore, TAS, and JP Morgan before founding Instaura in 2007.
              A Kriya Yogi initiated by Shibendu Lahiri (great-grandson of Lahiri Mahasaya, <em>Autobiography of a Yogi</em>),
              Gaurav practices the Zero State for grounded clarity. He dropped out of VJTI (Electronics) and completed his BMS from the University of Mumbai.
            </p>
            <p className="mt-3 text-gray-700">
              Over 18 years, he evolved Instaura from fundraising into the world's first and only Signal-Driven Consulting Firm —
              designing Signal Architecture that has moved markets, capital, and leadership rooms.
            </p>

            {/* Actions */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/gshahph/" target="_blank" rel="noopener" className="border border-gray-900 px-4 py-2 rounded-full text-sm">
                Connect on LinkedIn
              </a>
              <a href="mailto:gshah.degroup@gmail.com" className="bg-brand-red text-white px-4 py-2 rounded-full text-sm">
                Email: Managing Partner's Office
              </a>
            </div>

            {/* Quote */}
            <div className="mt-6 border-l-4 border-gray-200 pl-4">
              <p className="italic text-lg">"Markets don't move on ideas. They move when the signal is clear. That's what I build."</p>
            </div>

            {/* Testimonials */}
            <h3 className="mt-8 text-xl font-bold">What Founders Say About Gaurav</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <blockquote className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <p className="italic">"He didn't just advise us. He rewired how the market saw us."</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-3 text-xs text-gray-500">Founder — DeepTech</div>
              </blockquote>
              <blockquote className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <p className="italic">"Conversations that used to stall started converting."</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-3 text-xs text-gray-500">CEO — SaaS</div>
              </blockquote>
              <blockquote className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <p className="italic">"He engineered inevitability — not reports, movement."</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-3 text-xs text-gray-500">Founder — Consumer</div>
              </blockquote>
              <blockquote className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <p className="italic">"Boardroom clarity in one session — we moved the next day."</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-3 text-xs text-gray-500">Chair — BFSI</div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* HIASMINE */}
      <section id="hiasmine" className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 items-start">
          {/* Bio */}
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-extrabold">Hiasmine Shah</h2>
              <span className="border border-gray-200 px-3 py-1.5 rounded-full text-xs">Partner — Operations & Funnels</span>
            </div>
            <p className="mt-3 text-gray-700">
              Born in a humble background and raised by adversity, Hiasmine funded her education working days and studying nights.
              She made her mark in logistics (DHL, ASLI) — industries where precision isn't optional.
            </p>
            <p className="mt-3 text-gray-700">
              In 2016, after marrying Gaurav, she joined Instaura. A rapid learner, she explored multiple domains,
              mastered operations, and found her edge in GTM and funnel architecture.
              For nine years, many breakthrough movements were only possible because of her diligence and exactness.
            </p>
            <p className="mt-3 text-gray-700">
              Today she leads Operations & Funnels at Instaura — a silent mover with hard principles, cutting away the fluff and making execution inevitable.
            </p>

            {/* Actions */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/hiasmine-gani-shah-0933a0147/" target="_blank" rel="noopener" className="border border-gray-900 px-4 py-2 rounded-full text-sm">
                Connect on LinkedIn
              </a>
              <a href="mailto:icpo@icpo.consultinstaura.com" className="bg-brand-red text-white px-4 py-2 rounded-full text-sm">
                Email: Partner's Office
              </a>
            </div>

            {/* Quote */}
            <div className="mt-6 border-l-4 border-gray-200 pl-4">
              <p className="italic text-lg">"Precision is not a choice. Either it is exact, or it doesn't move."</p>
            </div>

            {/* Testimonials */}
            <h3 className="mt-8 text-xl font-bold">What Founders Say About Hiasmine</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <blockquote className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <p className="italic">"Funnels that worked because they were built on signal, not gimmicks."</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-3 text-xs text-gray-500">Founder — D2C</div>
              </blockquote>
              <blockquote className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <p className="italic">"She cut the noise and made execution flow."</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-3 text-xs text-gray-500">COO — HealthTech</div>
              </blockquote>
              <blockquote className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <p className="italic">"Operations became frictionless. Outcomes accelerated."</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-3 text-xs text-gray-500">CEO — Logistics</div>
              </blockquote>
              <blockquote className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <p className="italic">"Her diligence is the reason the motion kept compounding."</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="mt-3 text-xs text-gray-500">Founder — SaaS</div>
              </blockquote>
            </div>
          </div>
          {/* Photo */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="w-full h-72 rounded-2xl border overflow-hidden">
              <img
                src={hiasminePortrait}
                alt="Hiasmine Shah - Partner Operations & Funnels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION BLOCK */}
      <section className="px-6 py-14 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold">Leadership is not about titles. It's about building inevitability.</h3>
          <p className="text-gray-300 mt-3">
            At Instaura, leadership is lived. Gaurav and Hiasmine don't just guide strategy — they embody resilience, precision,
            and the philosophy that <span className="font-semibold">signal is the only basis</span>. Founders work with leaders who build movements,
            not decks; clarity, not clutter.
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
            <Link href="/about/vision" className="group block rounded-2xl border p-6 bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Vision • Philosophy • Mission</div>
              <h3 className="mt-2 font-semibold group-hover:underline">Signal is the Only Basis</h3>
              <p className="mt-2 text-sm text-gray-700">Why inevitability is designed — not declared.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Explore →</span>
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