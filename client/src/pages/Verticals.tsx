import { useState, useEffect } from "react";
import { Link } from "wouter";
import { MessageCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Verticals() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const verticals = [
    {
      title: "Technology",
      subtitle: "SaaS, AI/ML, Cybersecurity, Cloud, and more",
      description: "Technology doesn't scale on features—it scales when markets see inevitability. We architect GTM and capital signals that turn breakthroughs into movements.",
      href: "/verticals/technology"
    },
    {
      title: "Consumer Products & D2C",
      subtitle: "FMCG, Lifestyle, Retail, Digital Brands, and more",
      description: "In crowded markets, product isn't enough. We decode consumer signal to cut through noise—making brands believable, investable, and scalable.",
      href: "/verticals/consumer-products"
    },
    {
      title: "Healthcare & Pharma",
      subtitle: "MedTech, Pharma, Digital Health, Biotech, and more",
      description: "Healthcare markets demand trust and traction. We design signals that move regulators, investors, and patients—turning research into reality.",
      href: "/verticals/healthcare-pharma"
    },
    {
      title: "DeepTech & AI",
      subtitle: "Semiconductors, Quantum, Robotics, Advanced AI, and more",
      description: "Frontier tech doesn't raise on specs—it raises on signal. We frame deep tech as inevitable, not experimental.",
      href: "/verticals/deeptech-ai"
    },
    {
      title: "BFSI",
      subtitle: "Fintech, Neobanks, Lending, Insurtech, and more",
      description: "In BFSI, credibility is the only currency. We shape investor and market signal that transforms fintech bets into bankable plays.",
      href: "/verticals/bfsi"
    },
    {
      title: "Real Estate & PropTech",
      subtitle: "Smart Buildings, RE Funds, Housing Platforms, and more",
      description: "Real estate moves slow—until the signal changes. We architect investor and market signals that unlock capital and accelerate adoption.",
      href: "/verticals/real-estate-proptech"
    },
    {
      title: "Defense & Security",
      subtitle: "Defense Tech, Dual-Use Systems, Security Infra, and more",
      description: "Defense markets run on trust, not noise. We engineer credibility signals that open doors to governments, primes, and capital.",
      href: "/verticals/defense-security"
    },
    {
      title: "Manufacturing & Industrial",
      subtitle: "Industry 4.0, Robotics, Process Automation, and more",
      description: "Manufacturing scale depends on trust in execution. We recode industrial narratives into signals that move capital, buyers, and partners.",
      href: "/verticals/manufacturing-industrial"
    },
    {
      title: "Energy & CleanTech",
      subtitle: "Renewables, Grid Tech, Carbon Solutions, and more",
      description: "Climate plays need more than purpose—they need signal that capitalizes urgency. We craft investor belief that drives adoption and funding.",
      href: "/verticals/energy-cleantech"
    },
    {
      title: "Logistics & Mobility",
      subtitle: "Supply Chain, EVs, Fleet, Mobility Platforms, and more",
      description: "Moving goods or people means little if markets don't move with you. We design signals that unlock adoption, capital, and partnerships.",
      href: "/verticals/logistics-mobility"
    },
    {
      title: "Education & EdTech",
      subtitle: "Online Learning, Skilling, Institutional Tech, and more",
      description: "Education ventures fail when the story feels soft. We craft signals that make learning plays investable, scalable, and credible.",
      href: "/verticals/education-edtech"
    },
    {
      title: "Consumer Internet & Media",
      subtitle: "Marketplaces, Content, Creator Economy, Gaming, and more",
      description: "Virality doesn't equal value. We engineer investor and user signals that convert traffic into traction—and traction into scale.",
      href: "/verticals/consumer-internet-media"
    }
  ];

  const metrics = [
    { value: "18", label: "Years", sublabel: "of Signal practice" },
    { value: "2500+", label: "Clients", sublabel: "across 4 continents" },
    { value: "250+", label: "Movements", sublabel: "breakthrough outcomes" },
    { value: "$2B+", label: "Moved", sublabel: "capital & value" }
  ];

  const filteredVerticals = verticals.filter(vertical =>
    vertical.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vertical.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToVerticals = () => {
    const verticalsSection = document.getElementById('verticals');
    if (verticalsSection) {
      verticalsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 bg-white text-gray-800">
      {/* HERO */}
      <section className="px-6 pt-14 pb-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-brand-red">Vertical</span> Intelligence. Signal-First Outcomes.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              We apply 18 years of Signal Intelligence across sectors—so your market doesn't just notice; it moves. Browse the cores below or ask Yas where to start.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-6 py-3 rounded-full hover:bg-red-700">
                  Talk to Yas
                </Button>
              </Link>
              <Button 
                onClick={scrollToVerticals}
                variant="outline" 
                className="border border-gray-900 px-6 py-3 rounded-full hover:bg-gray-50"
              >
                Explore Verticals
              </Button>
            </div>
          </div>
          <div className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
            <label className="block text-sm font-semibold mb-2">Find a vertical</label>
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Type: Fintech, DeepTech, Logistics…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <Button 
                onClick={scrollToVerticals}
                className="bg-brand-red text-white px-5 py-3 rounded-xl hover:bg-red-700"
              >
                Search
              </Button>
            </div>
            <p className="mt-2 text-xs text-gray-500">Tip: start typing, then scroll to the grid below.</p>
          </div>
        </div>
      </section>

      {/* CORE METRICS */}
      <section className="px-6 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="group text-center rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-4xl font-extrabold text-brand-red group-hover:text-red-700 transition-colors duration-300">{metric.value}</div>
              <div className="text-xs uppercase text-gray-500 mt-1 group-hover:text-gray-700 transition-colors duration-300">{metric.label}</div>
              <div className="text-xs text-gray-400 mt-1">{metric.sublabel}</div>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VERTICAL CARDS */}
      <section id="verticals" className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">12 Core Verticals</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVerticals.map((vertical, index) => (
              <article key={index} className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
                <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">{vertical.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{vertical.subtitle}</p>
                <p className="mt-3 text-gray-700">{vertical.description}</p>
                <div className="mt-5">
                  <Link href={vertical.href}>
                    <Button className="bg-brand-red text-white px-4 py-2 rounded-full text-sm hover:bg-red-700">
                      Explore {vertical.title.split(' &')[0]}
                    </Button>
                  </Link>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-6">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-16 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your vertical ready for signal?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every sector has patterns. We decode them into movements that matter.
          </p>
          <Link href="/contact">
            <Button className="bg-brand-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700">
              <MessageCircle className="mr-2" size={20} />
              Start Your Vertical Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}