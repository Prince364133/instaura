import { useState, useEffect } from "react";
import { Link } from "wouter";
import { caseStudies, CaseStudy } from "@/data/caseStudies";

export default function CaseStudies() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSector, setSelectedSector] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [filteredStudies, setFilteredStudies] = useState<CaseStudy[]>(caseStudies);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const filtered = caseStudies.filter((study) => {
            const matchesSearch =
                !searchQuery ||
                study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                study.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
                study.service.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesSector = !selectedSector || study.sector === selectedSector;
            const matchesService = !selectedService || study.service === selectedService;

            return matchesSearch && matchesSector && matchesService;
        });

        setFilteredStudies(filtered);
    }, [searchQuery, selectedSector, selectedService]);

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedSector("");
        setSelectedService("");
    };

    // Get unique sectors and services for dropdowns
    const sectors = Array.from(new Set(caseStudies.map(s => s.sector))).sort();
    const services = Array.from(new Set(caseStudies.map(s => s.service))).sort();

    return (
        <div className="pt-16 bg-white min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-gray-50 px-6 py-3 text-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto text-gray-600">
                    <Link href="/" className="hover:underline" data-testid="link-home">
                        Home
                    </Link>{" "}
                    /{" "}
                    <Link href="/insights" className="hover:underline" data-testid="link-insights">
                        INsights
                    </Link>{" "}
                    / <span className="text-gray-900 font-medium">Case Studies</span>
                </div>
            </div>

            {/* Hero */}
            <section className="px-6 pt-16 pb-12 bg-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight font-raleway text-black">
                        Signals in Action. <span className="text-brand-red">Movements Delivered.</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Redacted for confidentiality. Clear for learning. Filter by sector, service, or outcome to see how signal reshaped trajectories.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link href="/contact">
                            <button
                                className="bg-brand-red text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition shadow-lg shadow-red-100"
                                data-testid="button-talk-yas"
                            >
                                Talk to Yas
                            </button>
                        </Link>
                        <a
                            href="#featured"
                            className="bg-white text-black border border-black px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition"
                            data-testid="button-browse-library"
                        >
                            Browse Library
                        </a>
                    </div>

                    {/* Pedigree Section */}
                    <div className="mt-20">
                        <h2 className="text-2xl font-bold font-raleway text-black">Our Pedigree</h2>
                        <p className="text-gray-500 mt-2 font-medium">
                            First & only <span className="font-bold text-gray-900">Signal-Driven Consulting Firm.</span>
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                <div className="text-3xl md:text-4xl font-extrabold text-brand-red font-raleway">18</div>
                                <div className="text-xs font-bold text-gray-400 mt-1 tracking-wider uppercase">Years</div>
                            </div>
                            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                <div className="text-3xl md:text-4xl font-extrabold text-brand-red font-raleway">2500+</div>
                                <div className="text-xs font-bold text-gray-400 mt-1 tracking-wider uppercase">Clients</div>
                            </div>
                            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                <div className="text-3xl md:text-4xl font-extrabold text-brand-red font-raleway">250+</div>
                                <div className="text-xs font-bold text-gray-400 mt-1 tracking-wider uppercase">Movements</div>
                            </div>
                            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                <div className="text-3xl md:text-4xl font-extrabold text-brand-red font-raleway">$2B+</div>
                                <div className="text-xs font-bold text-gray-400 mt-1 tracking-wider uppercase">Moved</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Container for sticky behavior */}
            <div className="relative">

                {/* Filter Header */}
                <div className="bg-white px-6 pt-12">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold font-raleway">Browse Case Studies</h2>
                    </div>
                </div>

                {/* Sticky Filter Bar */}
                <section className="sticky top-16 z-30 bg-white py-6 border-b border-gray-200 shadow-sm">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Search Input */}
                            <div>
                                <label htmlFor="cs-search-input" className="text-xs uppercase text-gray-500 font-medium">
                                    Search
                                </label>
                                <input
                                    id="cs-search-input"
                                    type="search"
                                    placeholder="Search by title, sector, or service..."
                                    className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    data-testid="input-search"
                                />
                            </div>
                            {/* Sector Select */}
                            <div>
                                <label htmlFor="cs-sector-select" className="text-xs uppercase text-gray-500 font-medium">
                                    Sector
                                </label>
                                <select
                                    id="cs-sector-select"
                                    className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                    value={selectedSector}
                                    onChange={(e) => setSelectedSector(e.target.value)}
                                    data-testid="select-sector"
                                >
                                    <option value="">All Sectors</option>
                                    {sectors.map(sector => (
                                        <option key={sector} value={sector}>{sector}</option>
                                    ))}
                                </select>
                            </div>
                            {/* Service Select */}
                            <div>
                                <label htmlFor="cs-service-select" className="text-xs uppercase text-gray-500 font-medium">
                                    Service
                                </label>
                                <select
                                    id="cs-service-select"
                                    className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                    value={selectedService}
                                    onChange={(e) => setSelectedService(e.target.value)}
                                    data-testid="select-service"
                                >
                                    <option value="">All Services</option>
                                    {services.map(service => (
                                        <option key={service} value={service}>{service}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-gray-600">
                                <span className="font-semibold" data-testid="text-results-count">{filteredStudies.length}</span> results
                            </div>
                            <button
                                onClick={clearFilters}
                                className="text-sm text-gray-600 hover:text-black border border-gray-300 rounded-full px-4 py-1 transition"
                                data-testid="button-clear-filters"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section id="featured" className="px-6 py-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        {filteredStudies.length > 0 ? (
                            <div className="grid md:grid-cols-3 gap-6">
                                {filteredStudies.map((study) => (
                                    <Link key={study.id} href={`/case-studies/${study.id}`}>
                                        <div
                                            className="group bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col"
                                            data-testid={`card-case-study-${study.id}`}
                                        >
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="w-8 h-8 bg-red-50 text-brand-red rounded-lg flex items-center justify-center font-bold text-sm group-hover:bg-brand-red group-hover:text-white transition-colors">
                                                    {study.id}
                                                </div>
                                                <div className="text-xs uppercase text-gray-500 font-medium truncate flex-1">
                                                    {study.sector}
                                                </div>
                                            </div>

                                            <h3 className="mt-2 text-lg font-semibold group-hover:text-brand-red transition-colors" data-testid={`text-title-${study.id}`}>
                                                {study.title}
                                            </h3>
                                            <p className="mt-2 text-sm text-gray-700 flex-grow line-clamp-3">{study.description}</p>

                                            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                                                <span className="text-xs font-medium text-gray-500 truncate max-w-[70%]">{study.service}</span>
                                                <span className="text-sm text-brand-red font-semibold whitespace-nowrap">
                                                    Read →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-gray-600 py-12" data-testid="text-no-results">
                                <h3 className="text-xl font-semibold">No case studies found</h3>
                                <p className="mt-2 text-gray-500">Try adjusting your search filters.</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            {/* Final CTA */}
            <section className="px-6 py-14 bg-black text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-semibold font-raleway">Ready to architect your signal?</h3>
                    <p className="text-gray-300 mt-3">
                        See how these strategies can be applied to your business.
                    </p>
                    <div className="mt-6 flex justify-center gap-3">
                        <Link href="/contact">
                            <button
                                className="bg-brand-red text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                                data-testid="button-cta-talk-yas"
                            >
                                Talk to Yas
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button
                                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                                data-testid="button-cta-signal-call"
                            >
                                Book a Signal Call
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
