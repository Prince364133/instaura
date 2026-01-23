import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import { useEffect } from 'react';

export default function Disclaimer() {
    const [, setLocation] = useLocation();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl lg:text-5xl font-raleway font-bold text-gray-900 mb-4">
                        Disclaimer
                    </h1>
                    <p className="text-lg text-gray-600">
                        Effective Date: August 1, 2025
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-lg shadow-sm p-8">
                            {/* Introduction */}
                            <div className="mb-10">
                                <p className="text-gray-700 leading-relaxed">
                                    The information provided by Instaura Consulting ("we," "us," or "our") on our website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                                </p>
                            </div>

                            {/* Section 1 - Professional Advice Disclaimer */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                                    1. Professional Advice Disclaimer
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The Site cannot and does not contain legal, financial, or other professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of legal or financial advice.
                                </p>
                            </div>

                            {/* Section 2 - External Links Disclaimer */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                                    2. External Links Disclaimer
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                                </p>
                            </div>

                            {/* Section 3 - Errors and Omissions Disclaimer */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                                    3. Errors and Omissions Disclaimer
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Instaura Consulting is not responsible for any errors or omissions, or for the results obtained from the use of this information.
                                </p>
                            </div>

                            {/* Section 4 - Fair Use Disclaimer */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                                    4. Fair Use Disclaimer
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
                                </p>
                            </div>

                            {/* Contact Us Section */}
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                                    Contact Us
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-start text-gray-700">
                                        <span className="mr-3 mt-1">📧</span>
                                        <span>info@consultinstaura.com</span>
                                    </div>
                                    <div className="flex items-start text-gray-700">
                                        <span className="mr-3 mt-1">🏢</span>
                                        <span>Instaura Consulting</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                            <h3 className="text-lg font-raleway font-semibold mb-6">Contents</h3>
                            <ul className="space-y-3 text-gray-700 text-sm">
                                <li>• Professional Advice Disclaimer</li>
                                <li>• External Links Disclaimer</li>
                                <li>• Errors and Omissions Disclaimer</li>
                                <li>• Fair Use Disclaimer</li>
                            </ul>

                            <button
                                onClick={() => setLocation('/')}
                                className="w-full flex items-center justify-center bg-brand-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 mt-8"
                                data-testid="back-to-home"
                            >
                                <ArrowLeft size={20} className="mr-2" />
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
