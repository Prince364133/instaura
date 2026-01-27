import { Link } from "wouter";
import { MoveRight } from "lucide-react";

export interface RelatedResource {
    type: 'White Paper' | 'Clarity Post' | 'Case Study' | 'Ask AI' | string;
    title: string;
    href: string;
    label?: string;
}

interface ResourceCardsProps {
    resources: RelatedResource[];
}

export const ResourceCards = ({ resources }: ResourceCardsProps) => {
    if (!resources || resources.length === 0) return null;

    return (
        <section className="px-6 py-12 bg-gray-50/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold font-raleway text-brand-red mb-8">Related Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources.map((resource, index) => {
                        const isAskAI = resource.type === 'Ask AI' || resource.href.includes('ask_ai=');

                        return (
                            <Link key={index} href={resource.href} className="block group h-full">
                                <div className={`
                                    p-8 rounded-3xl border-2 transition-all duration-500 h-full flex flex-col relative overflow-hidden
                                    ${isAskAI
                                        ? 'bg-gradient-to-br from-brand-red/[0.03] to-white border-brand-red/10 shadow-sm hover:shadow-2xl hover:shadow-brand-red/10 hover:border-brand-red/30'
                                        : 'bg-gradient-to-br from-gray-50 to-white border-white shadow-xl hover:shadow-2xl hover:border-brand-red/10 hover:bg-white'}
                                `}>
                                    {/* Decorative background element for Ask AI */}
                                    {isAskAI && (
                                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-colors duration-500" />
                                    )}

                                    <div className="flex items-center justify-between mb-6 relative z-10">
                                        <span className={`
                                            px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border
                                            ${isAskAI
                                                ? 'text-brand-red border-brand-red/20 bg-brand-red/5'
                                                : 'text-gray-500 border-gray-200 bg-gray-100/50'}
                                        `}>
                                            {isAskAI && (
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse mr-2" />
                                            )}
                                            {resource.label || resource.type}
                                        </span>
                                    </div>

                                    <h3 className={`
                                        font-raleway font-bold text-gray-900 text-2xl leading-tight mb-4 relative z-10
                                        group-hover:text-brand-red transition-colors duration-300
                                    `}>
                                        {resource.title}
                                    </h3>

                                    <div className="mt-auto pt-6 flex items-center text-brand-red text-sm font-bold relative z-10">
                                        <span className="group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                                            {isAskAI ? 'Engage YAS Intelligence' : 'Explore Resource'}
                                            <MoveRight className="ml-2 w-5 h-5" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
