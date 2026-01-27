import { useRoute, Link } from "wouter";
import NotFound from "./not-found";
import { Button } from "@/components/ui/button";
import { claritySeriesData } from "@/data/claritySeries";
import { ResourceCards } from "../components/ResourceCards";

export default function ClaritySeriesDetail() {
    const [match, params] = useRoute("/clarity-series/:slug");
    const slug = params?.slug;

    const paper = claritySeriesData.find((p) => p.slug === slug);

    if (!paper) {
        return <NotFound />;
    }

    return (
        <div className="bg-white text-gray-900 font-sans">
            {/* ... rest of the component exists ... */}
            {/* CONTENT BODY */}
            {paper.content}

            {/* RELATED RESOURCES */}
            {paper.relatedResources && (
                <ResourceCards resources={paper.relatedResources} />
            )}

            {/* FOOTER CTA */}
            <section className="px-6 py-14 bg-black text-white text-center mt-12">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-semibold font-raleway">Clarity multiplies. Move with Signal.</h3>
                    <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
                        If you want to recalibrate price as a market signal — not just a number — let’s design the proof and the frame.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link href="/contact">
                            <Button className="bg-brand-red text-white px-8 py-6 rounded-full text-lg hover:bg-red-700">
                                Talk to Yas
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="secondary" className="bg-white text-black px-8 py-6 rounded-full text-lg hover:bg-gray-100">
                                Book a Signal Call
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
