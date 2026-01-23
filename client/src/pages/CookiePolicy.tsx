import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import { useEffect } from 'react';

export default function CookiePolicy() {
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
            Cookie Policy
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
                  This Cookie Policy explains how Instaura Consulting ("we", "us", or "our") uses cookies and similar identifying technologies when you visit our website. This policy explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
              </div>

              {/* Section 1 - What are cookies? */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                  1. What are cookies?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
              </div>

              {/* Section 2 - Why do we use cookies? */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                  2. Why do we use cookies?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
                </p>
              </div>

              {/* Section 3 - Types of Cookies We Use */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                  3. Types of Cookies We Use
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    • <strong>Essential Cookies:</strong> These are strictly necessary to provide you with services available through our Website and to use some of its features.
                  </p>
                  <p>
                    • <strong>Performance and Functionality Cookies:</strong> These usage cookies are used to enhance the performance and functionality of our Website but are non-essential to their use.
                  </p>
                  <p>
                    • <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.
                  </p>
                </div>
              </div>

              {/* Section 4 - How can I control cookies? */}
              <div className="mb-10">
                <h2 className="text-2xl font-raleway font-semibold text-gray-900 mb-6">
                  4. How can I control cookies?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
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
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-raleway font-semibold mb-6">Contents</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>• What are cookies?</li>
                <li>• Why do we use cookies?</li>
                <li>• Types of Cookies We Use</li>
                <li>• How can I control cookies?</li>
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
