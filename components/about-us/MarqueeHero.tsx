"use client";

import { motion } from "framer-motion";

export default function MarqueeHero() {
  return (
    <section className="relative h-[60vh] bg-emerald-500 overflow-hidden flex flex-col justify-center">
       <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />
       
       {/* Marquee 1 */}
       <div className="relative flex overflow-hidden whitespace-nowrap py-4">
          <motion.div 
             initial={{ x: 0 }}
             animate={{ x: "-50%" }}
             transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
             className="flex gap-8"
          >
             {Array(4).fill("BUILD THE FUTURE").map((text, i) => (
                <span key={i} className="text-8xl md:text-[10rem] font-black text-emerald-950 tracking-tighter loading-none">
                   {text}
                </span>
             ))}
          </motion.div>
       </div>

        {/* Marquee 2 (Reverse) */}
       <div className="relative flex overflow-hidden whitespace-nowrap py-4 opacity-50">
          <motion.div 
             initial={{ x: "-50%" }}
             animate={{ x: 0 }}
             transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
             className="flex gap-8"
          >
            {Array(4).fill("JOIN THE MOVEMENT").map((text, i) => (
                <span key={i} className="text-8xl md:text-[10rem] font-black text-white tracking-tighter loading-none stroke-black">
                   {text}
                </span>
             ))}
          </motion.div>
       </div>
    </section>
  );
}
