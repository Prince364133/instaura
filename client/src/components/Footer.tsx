import { Link, useLocation } from "wouter";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Logo from "./Logo";
import footerLogoImage from "@/assets/footer-logo.png";

export default function Footer() {
  const [, setLocation] = useLocation();

  const handleServiceNavigation = (serviceRoute: string) => {
    let route = '';
    switch (serviceRoute) {
      case 'signal-architecture':
        route = '/signal-architecture';
        break;
      case 'gtm-and-funnels':
        route = '/gtm-funnels';
        break;
      case 'fund-raising':
        route = '/fund-raising';
        break;
      case 'strategy-consulting':
        route = '/strategy-consulting';
        break;
      default:
        route = '/services';
    }
    setLocation(route);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleInsightNavigation = (insightId: string) => {
    setLocation('/insights');
    setTimeout(() => {
      const element = document.getElementById(insightId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // If section doesn't exist, just scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 500); // Increased delay for client-side navigation
  };

  const handleAboutNavigation = (sectionId: string) => {
    if (sectionId === 'leadership') {
      // Leadership is a separate page, navigate directly
      setLocation('/about/leadership');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // For other about sections, scroll to them on the about page
      setLocation('/about');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // If section doesn't exist, scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 500); // Increased delay for client-side navigation
    }
  };

  const handlePageNavigation = (path: string) => {
    setLocation(path);
    // Scroll to top of page after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src={footerLogoImage}
              alt="INSTAURA"
              className="h-12 mb-6"
              data-testid="footer-logo"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Strategic consulting firm specializing in signal intelligence and market-driven growth strategies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/instaura-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-red transition-colors duration-300"
                data-testid="footer-linkedin-link"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/instaura_co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-red transition-colors duration-300"
                data-testid="footer-twitter-link"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:mpo@mpo.consultinstaura.com"
                className="text-gray-300 hover:text-brand-red transition-colors duration-300"
                data-testid="footer-email-link"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-raleway font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleServiceNavigation('signal-architecture')}
                  className="text-gray-300 hover:text-brand-red transition-colors duration-300 cursor-pointer text-left"
                  data-testid="footer-service-signal-architecture"
                >
                  Signal Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceNavigation('gtm-and-funnels')}
                  className="text-gray-300 hover:text-brand-red transition-colors duration-300 cursor-pointer text-left"
                  data-testid="footer-service-gtm"
                >
                  GTM & Funnels
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceNavigation('fund-raising')}
                  className="text-gray-300 hover:text-brand-red transition-colors duration-300 cursor-pointer text-left"
                  data-testid="footer-service-fundraising"
                >
                  Fund Raising
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceNavigation('strategy-consulting')}
                  className="text-gray-300 hover:text-brand-red transition-colors duration-300 cursor-pointer text-left"
                  data-testid="footer-service-strategy"
                >
                  Strategy Consulting
                </button>
              </li>
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h3 className="font-raleway font-semibold text-lg mb-6">Insights</h3>
            <ul className="space-y-3">

              <li>
                <button
                  onClick={() => handleInsightNavigation('signals-that-close')}
                  className="text-gray-300 hover:text-brand-red transition-colors duration-300 cursor-pointer text-left"
                  data-testid="footer-insight-signals-close"
                >
                  Signals That Close
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleInsightNavigation('signal-code')}
                  className="text-gray-300 hover:text-brand-red transition-colors duration-300 cursor-pointer text-left"
                  data-testid="footer-insight-signal-code"
                >
                  The Signal Code
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleInsightNavigation('case-studies')}
                  className="text-gray-300 hover:text-brand-red transition-colors duration-300 cursor-pointer text-left"
                  data-testid="footer-case-studies"
                >
                  Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-raleway font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handlePageNavigation('/about')}
                  className="text-gray-300 hover:text-brand-red transition-colors duration-300 cursor-pointer text-left"
                  data-testid="footer-about"
                >
                  About INSTAURA
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAboutNavigation('leadership')}
                  className="text-gray-300 hover:text-brand-red transition-colors duration-300 cursor-pointer text-left"
                  data-testid="footer-leadership"
                >
                  Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNavigation('/verticals')}
                  className="text-gray-300 hover:text-brand-red transition-colors duration-300 cursor-pointer text-left"
                  data-testid="footer-verticals"
                >
                  Verticals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNavigation('/contact')}
                  className="text-gray-300 hover:text-brand-red transition-colors duration-300 cursor-pointer text-left"
                  data-testid="footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 INSTAURA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => window.location.href = "https://instaora.com"}
                className="text-gray-300 hover:text-brand-red text-sm transition-colors duration-300 cursor-pointer text-left font-medium"
                data-testid="footer-signin"
              >
                Sign In
              </button>
              <button
                onClick={() => handlePageNavigation('/legal/terms')}
                className="text-gray-300 hover:text-brand-red text-sm transition-colors duration-300 cursor-pointer text-left"
                data-testid="footer-terms"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handlePageNavigation('/legal/privacy')}
                className="text-gray-300 hover:text-brand-red text-sm transition-colors duration-300 cursor-pointer text-left"
                data-testid="footer-privacy"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handlePageNavigation('/legal/cookie')}
                className="text-gray-300 hover:text-brand-red text-sm transition-colors duration-300 cursor-pointer text-left"
                data-testid="footer-cookies"
              >
                Cookie Policy
              </button>
              <button
                onClick={() => handlePageNavigation('/legal/refund')}
                className="text-gray-300 hover:text-brand-red text-sm transition-colors duration-300 cursor-pointer text-left"
                data-testid="footer-refund"
              >
                Refund Policy
              </button>
              <button
                onClick={() => handlePageNavigation('/legal/disclaimer')}
                className="text-gray-300 hover:text-brand-red text-sm transition-colors duration-300 cursor-pointer text-left"
                data-testid="footer-disclaimer"
              >
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
