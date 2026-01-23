import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Careers() {
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
          <span className="text-gray-900 font-medium">Careers</span>
        </div>
      </div>

      {/* HERO */}
      <section id="hero" className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Work Where <span className="text-brand-red">Signal</span> Becomes Movement.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700">
              Instaura is not a place for jobs. It's where you learn to architect clarity, precision, and inevitability.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#roles">
                <Button className="bg-brand-red text-white px-6 py-3 rounded-full">View Open Roles</Button>
              </a>
              <a href="mailto:careers@hr.consultinstaura.com">
                <Button variant="outline" className="border-gray-900 px-6 py-3 rounded-full">
                  Apply Now
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

      {/* WHY JOIN */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold">Why Join Instaura?</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">Engineer Movements</h3>
              <p className="mt-2 text-gray-700">We don't do performance theater. We architect signal and deliver outcomes across fundraising, GTM, funnels, and strategy.</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">High-Impact Roles</h3>
              <p className="mt-2 text-gray-700">Every role carries real ownership. You will be trusted with precision and held to high standards.</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">Global Exposure</h3>
              <p className="mt-2 text-gray-700">Work across India, SEA, Middle East, and the US — learn how signal crosses markets and cultures.</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
            <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <h3 className="font-semibold text-brand-red group-hover:text-red-600 transition-colors duration-300">Learn Signal</h3>
              <p className="mt-2 text-gray-700">Train directly in Signal Architecture — the invisible architecture of belief that makes execution inevitable.</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="roles" className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Open Roles</h2>
            <a href="mailto:careers@hr.consultinstaura.com" className="text-sm text-brand-red font-semibold hover:underline">Send Your CV →</a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Role: Inside Sales Associates */}
            <div className="rounded-2xl border p-6 bg-white shadow-sm flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Sales</div>
              <h3 className="mt-1 font-semibold text-lg">Inside Sales Associates</h3>
              <p className="mt-2 text-gray-700 flex-1">
                Build and nurture high-intent pipelines. Position Signal as the decisive edge and qualify mandates with precision.
              </p>
              <ul className="mt-3 list-disc ml-5 text-sm text-gray-700 space-y-1">
                <li>Signal-first discovery</li>
                <li>Pipeline ownership & reporting</li>
                <li>Collaboration with Yas routing</li>
              </ul>
              <a href="mailto:careers@hr.consultinstaura.com?subject=Inside%20Sales%20Associate%20Application"
                 className="mt-5 bg-brand-red text-white px-4 py-2 rounded-full text-sm text-center">Apply</a>
            </div>

            {/* Role: Signal Researchers */}
            <div className="rounded-2xl border p-6 bg-white shadow-sm flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Intelligence</div>
              <h3 className="mt-1 font-semibold text-lg">Signal Researchers</h3>
              <p className="mt-2 text-gray-700 flex-1">
                Decode sectors, investors, and market dynamics into tight signal briefs that shape movements.
              </p>
              <ul className="mt-3 list-disc ml-5 text-sm text-gray-700 space-y-1">
                <li>Primary & secondary research</li>
                <li>Narrative calibration inputs</li>
                <li>Sector & service mappings</li>
              </ul>
              <a href="mailto:careers@hr.consultinstaura.com?subject=Signal%20Researcher%20Application"
                 className="mt-5 bg-brand-red text-white px-4 py-2 rounded-full text-sm text-center">Apply</a>
            </div>

            {/* Role: Documentation Assistants */}
            <div className="rounded-2xl border p-6 bg-white shadow-sm flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Execution</div>
              <h3 className="mt-1 font-semibold text-lg">Documentation Assistants</h3>
              <p className="mt-2 text-gray-700 flex-1">
                Support in building decks, notes, and primers that align with signal — no fluff, only clarity.
              </p>
              <ul className="mt-3 list-disc ml-5 text-sm text-gray-700 space-y-1">
                <li>Decks & briefs production</li>
                <li>Editorial precision</li>
                <li>Version control & hygiene</li>
              </ul>
              <a href="mailto:careers@hr.consultinstaura.com?subject=Documentation%20Assistant%20Application"
                 className="mt-5 bg-brand-red text-white px-4 py-2 rounded-full text-sm text-center">Apply</a>
            </div>

            {/* Role: Executive Assistants */}
            <div className="rounded-2xl border p-6 bg-white shadow-sm flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Leadership Ops</div>
              <h3 className="mt-1 font-semibold text-lg">Executive Assistants</h3>
              <p className="mt-2 text-gray-700 flex-1">
                Keep leadership sharp and focused. Manage calendars, prep, and cross-functional execution cadences.
              </p>
              <ul className="mt-3 list-disc ml-5 text-sm text-gray-700 space-y-1">
                <li>Rhythm & ritual management</li>
                <li>Briefings & follow-through</li>
                <li>Confidentiality & discretion</li>
              </ul>
              <a href="mailto:careers@hr.consultinstaura.com?subject=Executive%20Assistant%20Application"
                 className="mt-5 bg-brand-red text-white px-4 py-2 rounded-full text-sm text-center">Apply</a>
            </div>

            {/* Role: Systeme.io & GHL Experts */}
            <div className="rounded-2xl border p-6 bg-white shadow-sm flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Funnels</div>
              <h3 className="mt-1 font-semibold text-lg">Systeme.io & GHL Experts</h3>
              <p className="mt-2 text-gray-700 flex-1">
                Design and maintain funnels that run on our frameworks. Integrations, tracking, optimization — end to end.
              </p>
              <ul className="mt-3 list-disc ml-5 text-sm text-gray-700 space-y-1">
                <li>Funnel strategy & build</li>
                <li>CRM & automation integration</li>
                <li>Conversion monitoring</li>
              </ul>
              <a href="mailto:careers@hr.consultinstaura.com?subject=Systeme.io%20%26%20GHL%20Expert%20Application"
                 className="mt-5 bg-brand-red text-white px-4 py-2 rounded-full text-sm text-center">Apply</a>
            </div>

            {/* Generic: Proactive Applications */}
            <div className="rounded-2xl border p-6 bg-white shadow-sm flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Proactive</div>
              <h3 className="mt-1 font-semibold text-lg">Don't See Your Role?</h3>
              <p className="mt-2 text-gray-700 flex-1">
                If you live and breathe signal — write to us. Share your edge and how you'll build movement here.
              </p>
              <ul className="mt-3 list-disc ml-5 text-sm text-gray-700 space-y-1">
                <li>1-page "Why Signal" note</li>
                <li>Best 2 work samples</li>
                <li>Earliest start date</li>
              </ul>
              <a href="mailto:careers@hr.consultinstaura.com?subject=Proactive%20Application"
                 className="mt-5 bg-brand-red text-white px-4 py-2 rounded-full text-sm text-center">Apply</a>
            </div>
          </div>

          {/* Apply strip */}
          <div className="mt-8 rounded-2xl border p-6 bg-white shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-xs uppercase text-gray-500">Application Email</div>
              <div className="mt-1 font-semibold">careers@hr.consultinstaura.com</div>
              <p className="text-sm text-gray-700 mt-1">Send your CV + a 1-page note on why you believe in Signal.</p>
            </div>
            <a href="mailto:careers@hr.consultinstaura.com" className="bg-brand-red text-white px-6 py-3 rounded-full">Apply Now</a>
          </div>
        </div>
      </section>

      {/* LIFE AT INSTAURA */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold">Life at Instaura</h2>
          <div className="mt-6 grid md:grid-cols-4 gap-6">
            <div className="rounded-2xl border p-6 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold text-brand-red">Flat, Precise</h3>
              <p className="mt-2 text-gray-700">Clarity over hierarchy. Ownership over optics.</p>
            </div>
            <div className="rounded-2xl border p-6 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold text-brand-red">Global Work</h3>
              <p className="mt-2 text-gray-700">India • SEA • Middle East • USA — real markets, real outcomes.</p>
            </div>
            <div className="rounded-2xl border p-6 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold text-brand-red">Signal-First Training</h3>
              <p className="mt-2 text-gray-700">Embed the architecture of belief into everything you ship.</p>
            </div>
            <div className="rounded-2xl border p-6 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold text-brand-red">High Standards</h3>
              <p className="mt-2 text-gray-700">Exactness, speed, and accountability — no compromise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION BLOCK */}
      <section className="px-6 py-14 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold">If you believe in signal, you belong here.</h3>
          <p className="text-gray-300 mt-3">
            We don't hire for resumes. We hire for clarity, resilience, and the ability to build signal where others spread noise.
            Join us if you want more than a career — if you want to shape inevitability.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact">
              <Button className="bg-brand-red text-white px-6 py-3 rounded-full">Talk to YAS</Button>
            </Link>
            <a href="mailto:careers@hr.consultinstaura.com">
              <Button className="bg-white text-black px-6 py-3 rounded-full">Apply Now</Button>
            </a>
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