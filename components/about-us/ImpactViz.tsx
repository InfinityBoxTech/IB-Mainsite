"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ImpactViz() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="py-10 md:py-16 bg-neutral-950 text-emerald-400 flex items-center justify-center overflow-hidden section-padding">
      <div className="container w-full mx-auto relative">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <motion.div style={{ y }} className="space-y-12 md:space-y-24 order-2 md:order-1">
               <div>
                  <span className="block text-6xl md:text-[8rem] font-bold leading-none text-white">30<span className="text-emerald-500">%</span></span>
                  <p className="text-xl md:text-2xl mt-4 text-neutral-400">Average waste reduction in first 90 days.</p>
               </div>
               <div>
                  <span className="block text-6xl md:text-[8rem] font-bold leading-none text-white">10<span className="text-emerald-500">K</span>+</span>
                  <p className="text-xl md:text-2xl mt-4 text-neutral-400">Employee hours saved annually per site.</p>
               </div>
                <div>
                  <span className="block text-6xl md:text-[8rem] font-bold leading-none text-white">Zero</span>
                  <p className="text-xl md:text-2xl mt-4 text-neutral-400">Compliance failures in 50+ audits.</p>
               </div>
            </motion.div>
            
            <div className="block md:sticky top-32 h-auto md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20 bg-neutral-900 border border-neutral-800 order-1 md:order-2 mb-10 md:mb-0">
               {/* Abstract Data Visualization Area */}
               <motion.div style={{ scale }} className="w-full h-full flex flex-col justify-between p-8 md:p-12 relative min-h-[400px]">
                  <div className="absolute inset-0 bg-[url('/grid-noise.png')] opacity-10" />
                  {/* Metric 1 */}
                  <div className="mb-10">
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-neutral-400 font-medium tracking-wide">Waste Diversion</span>
                        <span className="text-emerald-400 font-bold">78%</span>
                     </div>
                     <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "78%" }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           className="h-full bg-emerald-500" 
                        />
                     </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="mb-10">
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-neutral-400 font-medium tracking-wide">Energy Efficiency</span>
                        <span className="text-teal-400 font-bold">92%</span>
                     </div>
                     <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "92%" }}
                           transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                           className="h-full bg-teal-500" 
                        />
                     </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="mb-0">
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-neutral-400 font-medium tracking-wide">Compliance Score</span>
                        <span className="text-green-400 font-bold">100%</span>
                     </div>
                     <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "100%" }}
                           transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                           className="h-full bg-green-500" 
                        />
                     </div>
                  </div>
                  
                  <div className="mt-auto pt-12">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="relative">
                            <span className="block w-3 h-3 bg-red-500 rounded-full animate-ping absolute opacity-75"></span>
                            <span className="block w-3 h-3 bg-red-500 rounded-full relative"></span>
                        </div>
                        <h3 className="text-3xl font-bold text-white">Live Metrics</h3>
                     </div>
                     <p className="text-neutral-500">Real-time tracking of operational efficiency.</p>
                  </div>
               </motion.div>
            </div>
         </div>
      </div>
    </section>
  );
}
