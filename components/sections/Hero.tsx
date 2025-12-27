"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Droplets, Package, ChefHat, ArrowDown } from "lucide-react";

interface HeroProps {
  headline: string;
  subhead: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export default function Hero({
  headline,
  subhead,
  primaryCTA = { text: "Get in Touch", href: "/contact" },
  secondaryCTA = { text: "Explore Solutions", href: "/what-we-do" },
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 pb-20">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #059669 1px, transparent 1px),
                             linear-gradient(to bottom, #059669 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} 
        />
      </div>

      {/* Floating Icons with Connecting Lines - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <svg className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
          
          {/* Connecting Lines */}
          <line x1="20%" y1="40%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1.5" />
          <line x1="50%" y1="50%" x2="80%" y2="45%" stroke="url(#lineGrad)" strokeWidth="1.5" />
          <line x1="50%" y1="50%" x2="60%" y2="70%" stroke="url(#lineGrad)" strokeWidth="1.5" />
        </svg>

        {/* Floating Icon Circles */}
        <motion.div
          className="absolute top-[35%] left-[15%] w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Droplets className="w-5 h-5 lg:w-6 lg:h-6" />
        </motion.div>

        <motion.div
          className="absolute top-[40%] right-[20%] w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
            ease: "easeInOut",
          }}
        >
          <Package className="w-5 h-5 lg:w-6 lg:h-6" />
        </motion.div>

        <motion.div
          className="absolute bottom-[30%] left-[55%] w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut",
          }}
        >
          <ChefHat className="w-5 h-5 lg:w-6 lg:h-6" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight"
          >
            <span className="text-neutral-900 whitespace-nowrap">Hygiene Made</span>
            <br className="hidden sm:block" />
            <span className="text-emerald-600 whitespace-nowrap">Sustainable</span>
            <br />
            <span className="text-emerald-600 whitespace-nowrap">Operations Made Simple</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 mb-4 sm:mb-6 md:mb-8"
          >
            Full India Operations Partner
          </motion.p>

          {/* Descriptive Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
          >
            <Button href={primaryCTA.href} size="lg" className="w-full sm:w-auto min-w-[180px]">
              {primaryCTA.text}
            </Button>
            <Button href={secondaryCTA.href} variant="outline" size="lg" className="w-full sm:w-auto min-w-[180px]">
              {secondaryCTA.text}
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto pt-6 sm:pt-8 border-t border-neutral-200"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-1">
                50+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-neutral-600">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-1">
                1000+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-neutral-600">Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-1">
                99%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-neutral-600">Compliance</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-2"
          >
            <span className="text-xs sm:text-sm text-emerald-600 font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center justify-center"
            >
              <ArrowDown className="w-5 h-5 text-emerald-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
