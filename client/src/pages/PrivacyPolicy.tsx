import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
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
            Privacy Policy
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
                  At Instaura Consulting ("we", "us", or "our"), your privacy is of utmost importance. This Privacy Policy outlines how we collect, use, disclose, 
                  and safeguard your information in accordance with applicable Indian laws and global standards such as GDPR and CCPA.
                </p>
              </div>

              {/* Section 1 - Information We Collect */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect the following types of information:
                </p>
                <div className="space-y-4 text-gray-700">
                  <p>
                    • <strong>Personal Information:</strong> Name, email, phone number, organization details, and other contact data voluntarily provided via forms or 
                    communications.
                  </p>
                  <p>
                    • <strong>Usage Data:</strong> Information on how you interact with our website including IP address, device type, browser type, and time spent on 
                    pages.
                  </p>
                  <p>
                    • <strong>Cookies:</strong> We use cookies to manage session continuity, analyze performance, and personalize your experience. You can disable cookies 
                    via browser settings.
                  </p>
                </div>
              </div>

              {/* Section 2 - How We Use Your Information */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                  2. How We Use Your Information
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>To provide access to services and respond to inquiries.</p>
                  <p>To improve site performance and user experience.</p>
                  <p>To send important updates or announcements.</p>
                  <p>To comply with legal obligations or enforce rights.</p>
                </div>
              </div>

              {/* Section 3 - Information Sharing */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                  3. Information Sharing
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, rent, or share your personal data with third parties for marketing purposes. Information may be disclosed to our trust...
                </p>
              </div>

              {/* Section 4 - Data Security */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                  4. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate physical, electronic, and managerial safeguards to secure your information. However, no digital transmission...
                </p>
              </div>

              {/* Section 5 - Your Rights */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                  5. Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Subject to applicable laws, you have the right to access, correct, delete, or restrict use of your personal data. To request data access...
                </p>
              </div>

              {/* Section 6 - Children's Privacy */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                  6. Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website is not intended for children under the age of 13. We do not knowingly collect personal data from children.
                </p>
              </div>

              {/* Section 7 - Changes to This Policy */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                  7. Changes to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this policy periodically. Updates will be posted with the revised effective date. We encourage users to review this poli...
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
                    <span>info@legal.consultinstaura.com</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <span className="mr-3 mt-1">🏢</span>
                    <span>Instaura Consulting</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <span className="mr-3 mt-1">📍</span>
                    <span>Mumbai, Maharashtra, India</span>
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
                <li>• Information We Collect</li>
                <li>• How We Use Your Information</li>
                <li>• Information Sharing</li>
                <li>• Data Security</li>
                <li>• Your Rights</li>
                <li>• Children's Privacy</li>
                <li>• Changes to This Policy</li>
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