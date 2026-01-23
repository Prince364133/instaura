import { ArrowLeft, Printer } from 'lucide-react';
import { useLocation } from 'wouter';
import { useEffect } from 'react';

export default function TermsOfService() {
  const [, setLocation] = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-brand-red text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-raleway font-bold mb-4">
            Terms of Use
          </h1>
          <p className="text-xl opacity-90">
            Effective Date: August 1, 2025
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* Table of Contents */}
              <div className="mb-12">
                <h2 className="text-xl font-raleway font-semibold mb-6">Table of Contents</h2>
                <ul className="space-y-3 text-gray-700">
                  <li>1. Eligibility</li>
                  <li>2. Use of Website and Services</li>
                  <li>3. AI Assistant Yas</li>
                  <li>4. Confidentiality</li>
                  <li>5. Limitations of Liability</li>
                  <li>6. Changes to Terms</li>
                  <li>7. Governing Law</li>
                  <li>8. Contact Information</li>
                </ul>
              </div>

              {/* Section 1 - Eligibility */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-brand-red mb-4">
                  1. Eligibility
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You must be at least 18 years of age or the age of majority in your jurisdiction to use our services. By using our 
                  website, you confirm that you meet this requirement.
                </p>
              </div>

              {/* Section 2 - Use of Website and Services */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-brand-red mb-4">
                  2. Use of Website and Services
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, tools, features, and materials provided on this website are the intellectual property of Instaura 
                  Consulting. Unauthorized use, copying, distribution, or modification is strictly prohibited without prior written 
                  consent.
                </p>
              </div>

              {/* Section 3 - AI Assistant Yas */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-brand-red mb-4">
                  3. AI Assistant Yas
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Yas is an AI-enabled virtual assistant developed by Instaura to assist users in understanding our services, 
                    processes, and strategic frameworks.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Yas is not a human agent.</li>
                    <li>• It operates based on data, prompts, and training aligned with Instaura's internal systems and strategic thinking.</li>
                    <li>• Yas may provide recommendations, guidance, or clarification based on its programmed knowledge but does 
                    not constitute legal, financial, or professional advice.</li>
                    <li>• By interacting with Yas, you agree that your conversations may be recorded and used for quality, improvement, 
                    and training purposes.</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 - Confidentiality */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-brand-red mb-4">
                  4. Confidentiality
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Do not share sensitive, proprietary, or confidential business information through the website or with Yas unless 
                  covered by a formal agreement with Instaura. Instaura is not liable for any unprotected disclosures made 
                  voluntarily.
                </p>
              </div>

              {/* Section 5 - Limitations of Liability */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-brand-red mb-4">
                  5. Limitations of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Instaura will not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in 
                  connection with the use of this website or any services provided, including Yas.
                </p>
              </div>

              {/* Section 6 - Changes to Terms */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-brand-red mb-4">
                  6. Changes to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Continued use of the website and services after any such 
                  changes constitutes your acceptance of the new Terms.
                </p>
              </div>

              {/* Section 7 - Governing Law */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-brand-red mb-4">
                  7. Governing Law
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by the laws of India, and any disputes arising from or related to these Terms shall 
                  be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                </p>
              </div>

              {/* Section 8 - Contact Information */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-brand-red mb-4">
                  8. Contact Information
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4 font-medium">
                    For questions about these Terms, please contact us at:
                  </p>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <span className="text-brand-red mr-3 mt-1">📧</span>
                      <span>Email: info@legal.consultinstaura.com</span>
                    </div>
                    <p className="ml-6">Company Name: Instaura Consulting</p>
                    <div className="flex items-start">
                      <span className="text-brand-red mr-3 mt-1">📍</span>
                      <span>Address: Mumbai, Maharashtra, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-raleway font-semibold">Actions</h3>
                <button 
                  onClick={handlePrint}
                  className="flex items-center text-gray-500 hover:text-brand-red transition-colors"
                  data-testid="print-terms"
                >
                  <Printer size={20} />
                  <span className="ml-2 text-sm">Print Version</span>
                </button>
              </div>
              
              <button
                onClick={() => setLocation('/')}
                className="w-full flex items-center justify-center bg-brand-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300"
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