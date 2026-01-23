import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { useChatbot } from "@/context/ChatbotContext";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openChatbot } = useChatbot();

  const navItems = [
    { href: "/services", label: "Services" },
    { href: "/verticals", label: "Verticals" },
    { href: "/insights", label: "Insights" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const handleSignIn = () => {
    window.location.href = "https://instaora.com";
  };

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" data-testid="logo-link">
            <Logo size="sm" data-testid="nav-logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" data-testid="nav-link-home">
                <motion.span
                  className="font-medium text-brand-black hover:text-brand-red transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Home
                </motion.span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`nav-link-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  <motion.span
                    className={`font-medium transition-colors duration-300 ${location === item.href
                        ? "text-brand-red"
                        : "text-brand-black hover:text-brand-red"
                      }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-brand-black hover:text-brand-red font-medium"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button
              className="bg-brand-red text-white hover:bg-red-700 rounded-full px-6 py-3 font-semibold"
              onClick={openChatbot}
              data-testid="cta-talk-to-yas"
            >
              Talk to YAS
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-link-home"
              >
                <div className="block px-3 py-2 text-brand-black hover:text-brand-red transition-colors duration-300">
                  Home
                </div>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  <div className="block px-3 py-2 text-brand-black hover:text-brand-red transition-colors duration-300">
                    {item.label}
                  </div>
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-brand-black hover:text-brand-red font-medium px-0"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleSignIn();
                  }}
                >
                  Sign In
                </Button>
              </div>
              <div className="px-3 pt-2">
                <Button
                  className="w-full bg-brand-red text-white hover:bg-red-700 rounded-full font-semibold"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openChatbot();
                  }}
                >
                  Talk to YAS
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
