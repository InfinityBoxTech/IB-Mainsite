"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function KineticHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-950 text-white"
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none" />
      
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-6xl mx-auto w-full"
      >
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm text-emerald-400 font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-8 sm:mb-10 md:mb-8"
        >
            The Backbone of Operations
        </motion.p>
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.95] sm:leading-[0.9] mb-8 sm:mb-10 md:mb-8">
          <span className="block overflow-hidden">
             <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
             >
                WE ARE THE
             </motion.span>
          </span>
          <span className="block overflow-hidden">
             <motion.span
                initial={{ y: "100%", color: "#525252" }}
                animate={{
                    y: 0,
                    color: ["#525252", "#ffffff", "#525252"]
                }}
                transition={{
                    y: { duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
                    color: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="block"
             >
                HIDDEN
             </motion.span>
          </span>
          <span className="block overflow-hidden">
             <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
             >
                INFRASTRUCTURE
             </motion.span>
          </span>
        </h1>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 font-normal leading-relaxed max-w-4xl mx-auto px-2"
        >
            A pan-India operations company building long-term cafeteria infrastructure for enterprise clients.
        </motion.p>
      </motion.div>

       {/* Scroll Indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1, duration: 1 }}
         className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
       >
         <span className="text-xs uppercase tracking-widest text-neutral-500">Scroll to Explore</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
       </motion.div>
    </section>
  );
}
