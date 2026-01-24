import { Link } from "wouter";
import { useEffect } from "react";

export default function CaseStudies() {
    const caseStudies = Array.from({ length: 48 }, (_, i) => i + 1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 px-6 max-w-7xl mx-auto min-h-screen pb-20">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-black mb-6">Case Studies</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Explore our signal-driven movements across industries.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((id) => (
                    <Link key={id} href={`/case-studies/${id}`} className="block group">
                        <div className="p-6 border rounded-2xl hover:shadow-xl transition-all duration-300 bg-white h-full hover:-translate-y-1">
                            <div className="w-12 h-12 bg-red-50 text-brand-red rounded-lg flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                                {id}
                            </div>
                            <h2 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Case Study {id}</h2>
                            <p className="text-gray-600">
                                Detailed analysis of strategic signal architecture and implementation.
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
