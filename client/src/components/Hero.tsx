import { motion } from "framer-motion";
import { Link } from "wouter";
import { MessageCircle, ArrowDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./animations/ScrollReveal";
import { useChatbot } from "@/context/ChatbotContext";

export default function Hero() {
  const { openChatbot } = useChatbot();
  return (
    <section
      className="relative min-h-screen flex items-center bg-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-raleway font-bold text-gray-900 mb-6 leading-tight">
            Strategic <span className="text-brand-red">Signals</span><br />
            That Drive Results
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We architect winning strategies through signal-first consulting, transforming market insights into competitive advantages for forward-thinking organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-brand-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 animate-float"
                onClick={openChatbot}
                data-testid="hero-cta-talk-to-yas"
              >
                <MessageCircle className="mr-2" size={20} />
                Talk to YAS
              </Button>
            </motion.div>
            <Link href="/services" data-testid="hero-cta-discover-signal">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-2 border-brand-red text-brand-red px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-red hover:text-white bg-transparent"
                >
                  <ArrowDown className="mr-2" size={20} />
                  Discover Our Signal
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
