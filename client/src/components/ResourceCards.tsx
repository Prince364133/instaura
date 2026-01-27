
import { motion } from "framer-motion";
import { Link } from "wouter";
import { FileText, BookOpen, MessageSquare } from "lucide-react";

export interface RelatedResource {
    href: string;
    type: string;
    title: string;
    label: string;
}

interface ResourceCardsProps {
    resources: RelatedResource[];
}

export const ResourceCards = ({ resources }: ResourceCardsProps) => {
    if (!resources || resources.length === 0) return null;

    return (
        <section className="bg-white py-16 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-raleway mb-10">
                    Related Resources
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {resources.map((resource, index) => (
                        <Link key={index} href={resource.href}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-200 transition-all hover:bg-white hover:border-brand-red hover:shadow-xl cursor-pointer flex flex-col h-full"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-white border border-gray-100 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                                        {resource.type === "White Paper" ? (
                                            <FileText className="w-5 h-5" />
                                        ) : resource.type === "Clarity Series" ? (
                                            <BookOpen className="w-5 h-5" />
                                        ) : (
                                            <MessageSquare className="w-5 h-5" />
                                        )}
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                        {resource.label}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors mb-4 line-clamp-2">
                                    {resource.title}
                                </h3>
                                <div className="mt-auto flex items-center text-brand-red font-semibold text-sm">
                                    View Resource
                                    <svg
                                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
