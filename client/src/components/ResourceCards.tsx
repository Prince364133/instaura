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
                                    p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col
                                    ${isAskAI
                                        ? 'bg-white border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-red/30 hover:bg-red-50/5'
                                        : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-brand-red/10'}
                                `}>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`
                                            text-xs uppercase tracking-widest font-bold
                                            ${isAskAI ? 'text-brand-red/80' : 'text-gray-400'}
                                        `}>
                                            {isAskAI && (
                                                <span className="inline-block w-2 h-2 rounded-full bg-brand-red animate-pulse mr-2" />
                                            )}
                                            {resource.label || resource.type}
                                        </span>
                                    </div>

                                    <h3 className={`
                                        font-raleway font-bold text-gray-800 text-xl leading-tight mb-4
                                        group-hover:text-brand-red transition-colors
                                    `}>
                                        {resource.title}
                                    </h3>

                                    <div className="mt-auto pt-4 flex items-center text-brand-red text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                        {isAskAI ? 'Ask YAS Intelligence' : 'Read Resource'}
                                        <MoveRight className="ml-2 w-4 h-4" />
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
