import { useRoute } from "wouter";
import { Link } from "wouter";
import NotFound from "./not-found";
import { Button } from "@/components/ui/button";
import { claritySeriesData } from "@/data/claritySeries";

export default function ClaritySeriesDetail() {
    const [match, params] = useRoute("/clarity-series/:slug");
    const slug = params?.slug;

    const paper = claritySeriesData.find((p) => p.slug === slug);

    if (!paper) {
        return <NotFound />;
    }

    return (
        <div className="bg-white text-gray-900 font-sans">
            {/* HEADER / NAV */}
            <header className="sticky top-0 z-40 bg-white/90 backdrop-filter backdrop-blur border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="font-extrabold tracking-tight text-xl cursor-pointer">
                        INSTAURA<span className="text-brand-red">.</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <Link href="/services" className="hover:text-black text-gray-600">Services</Link>
                        <Link href="/verticals" className="hover:text-black text-gray-600">Verticals</Link>
                        <Link href="/insights" className="hover:text-black text-gray-600">INsights</Link>
                        <Link href="/about" className="hover:text-black text-gray-600">About</Link>
                        <Link href="/contact" className="hover:text-black text-gray-600">Contact</Link>
                    </nav>
                    <div className="hidden md:flex items-center gap-2">
                        <Link href="/contact">
                            <Button variant="outline" className="hidden sm:inline-flex rounded-full text-xs h-8">
                                Book a Signal Call
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button className="bg-brand-red text-white hover:bg-red-700 rounded-full text-xs h-8">
                                Talk to Yas
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* BREADCRUMB */}
            <div className="bg-gray-50 px-6 py-3 text-sm">
                <div className="max-w-7xl mx-auto text-gray-600">
                    <Link href="/" className="hover:underline">Home</Link> /{" "}
                    <Link href="/insights" className="hover:underline">INsights</Link> /{" "}
                    <Link href="/clarity-series" className="hover:underline">Clarity Series</Link> /{" "}
                    <span className="text-gray-900 font-medium">{paper.title}</span>
                </div>
            </div>

            {/* HERO */}
            <section className="px-6 pt-12 pb-8 bg-gray-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight font-raleway">
                            {paper.title}
                        </h1>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link href="/contact">
                                <Button className="bg-brand-red text-white px-8 py-6 rounded-full text-lg hover:bg-red-700">
                                    Talk to Yas
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="border-gray-900 px-8 py-6 rounded-full text-lg hover:bg-gray-100">
                                    Book a Signal Call
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <aside className="lg:col-span-4 group bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 hover:bg-white hover:border-brand-red hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <div className="text-xs uppercase text-gray-500 font-medium">Theme</div>
                                <div className="font-semibold">{paper.category}</div>
                            </div>
                            <div>
                                <div className="text-xs uppercase text-gray-500 font-medium">Published</div>
                                <div className="font-semibold">Aug 2025</div>
                            </div>
                            <div>
                                <div className="text-xs uppercase text-gray-500 font-medium">Author</div>
                                <div className="font-semibold">Instaura Consulting</div>
                            </div>
                            <div>
                                <div className="text-xs uppercase text-gray-500 font-medium">Format</div>
                                <div className="font-semibold">Digital • Short-form</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* CONTENT BODY */}
            {paper.content}

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
