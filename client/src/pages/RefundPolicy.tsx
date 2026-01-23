import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import { useEffect } from 'react';

export default function RefundPolicy() {
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
                        Refund Policy
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
                                    Thank you for doing business with Instaura Consulting. We strive to provide exceptional consulting services. However, due to the nature of our strategic advisory and consulting work, our refund policy reflects the committed time and resources allocated to each project.
                                </p>
                            </div>

                            {/* Section 1 - General Refund Policy */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                                    1. General Refund Policy
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    As a general rule, fees paid for consulting services, retainers, and strategic advisory sessions are non-refundable once the service has commenced or the scheduled time has been reserved.
                                </p>
                            </div>

                            {/* Section 2 - Cancellation by Client */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                                    2. Cancellation by Client
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    If you wish to cancel a scheduled engagement:
                                </p>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        • Cancellations made more than 7 business days before the start date may be eligible for a partial refund or credit towards future services, less any administrative costs incurred.
                                    </p>
                                    <p>
                                        • Cancellations made within 7 business days of the start date are generally non-refundable.
                                    </p>
                                </div>
                            </div>

                            {/* Section 3 - Cancellation by Instaura */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                                    3. Cancellation by Instaura Consulting
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    In the unlikely event that we must cancel or reschedule a service, you will be offered a full refund or the option to reschedule at a mutually convenient time.
                                </p>
                            </div>

                            {/* Section 4 - Disputes */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                                    4. Disputes
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    If you are unsatisfied with the service provided, please contact us immediately to discuss your concerns. We are committed to finding a fair and equitable resolution.
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
                                        <span>billing@consultinstaura.com</span>
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
                                <li>• General Refund Policy</li>
                                <li>• Cancellation by Client</li>
                                <li>• Cancellation by Instaura Consulting</li>
                                <li>• Disputes</li>
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
