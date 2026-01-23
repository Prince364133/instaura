export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export const slideInVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleOnHover = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

export const liftOnHover = {
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 }
  }
};

// Case Study Specific Animations - Matches Main Website Standards
export const caseStudyAnimations = {
  // Hero section animations with staggered delays
  hero: {
    section: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    title: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { delay: 0.2, duration: 0.6, ease: "easeOut" }
    },
    badges: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { delay: 0.4, duration: 0.6, ease: "easeOut" }
    },
    cta: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { delay: 0.6, duration: 0.6, ease: "easeOut" }
    }
  },
  // Scroll-based section reveals
  section: {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  // Card animations with hover effects
  card: {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
    whileHover: { 
      y: -8, 
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  },
  // Metric cards with stagger
  metricCard: {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
