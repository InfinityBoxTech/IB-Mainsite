"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const content = [
  {
    title: "The Fragmented Reality",
    description: (
       <>
        Before InfinityBox, facility management was a chaos of isolated vendors.
        <br /><br />
        <span className="text-neutral-900 font-semibold">Hygiene was disconnected from packaging.</span> Kitchens operated in silos. Workforce management was an afterthought. The result? Waste, inefficiency, and compromised safety.
       </>
    ),
    year: "The Problem",
    color: "bg-red-500"
  },
  {
    title: "The Integrated Solution",
    description: (
      <>
        We saw the gap and built the bridge.
        <br /><br />
        We created a <span className="text-emerald-600 font-semibold">Unified Operations Platform</span>. One partner accountable for the entire lifecycle—from the chemical inputs in your cleaning closet to the compostable packaging in your cafeteria.
      </>
    ),
    year: "The Solution",
    color: "bg-emerald-500"
  },
  {
    title: "Impact at Scale",
    description: (
      <>
        Today, we power the infrastructure of India's leading enterprises.
        <br /><br />
        Our systems process millions of touchpoints daily, ensuring that <span className="text-emerald-600 font-semibold">safety is standard</span>, not a luxury. We are the silent engine behind seamless operations.
      </>
    ),
    year: "The Impact",
    color: "bg-blue-500"
  }
];

export default function StickyScrollNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="bg-white">
      {content.map((item, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const targetScale = 1 - ( (content.length - index) * 0.05); 
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const range = [index * 0.25, 1];
        
        return (
          <ScrollSection key={index} i={index} {...item} progress={scrollYProgress} range={range} targetScale={targetScale} />
        )
      })}
    </section>
  );
}

function ScrollSection({ i, title, description, year, color, progress, range, targetScale }: any) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className={`h-screen flex ${i === 0 ? 'items-start pt-12 md:pt-24' : 'items-center'} justify-center sticky top-0`}> 
       <motion.div 
        style={{ scale, top: i === 0 ? 0 : `calc(-10vh + ${i * 25}px)` }} 
        className="relative flex flex-col md:flex-row h-[500px] w-full max-w-[1000px] rounded-[30px] bg-neutral-50 border border-neutral-100 shadow-2xl overflow-hidden origin-top"
       >
          <div className="flex flex-col justify-center p-12 md:w-1/2">
             <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-bold text-white mb-6 uppercase tracking-wider ${color}`}>
               {year}
             </span>
             <h2 className="text-4xl font-bold text-neutral-900 mb-6">{title}</h2>
             <div className="text-lg text-neutral-600 leading-relaxed">
               {description}
             </div>
          </div>
          <div className="hidden md:flex items-center justify-center w-1/2 p-8 bg-neutral-100">
             {/* Abstract Visual Representation */}
             <div className={`w-64 h-64 rounded-full opacity-20 blur-3xl ${color}`} />
             <div className="absolute text-[200px] font-black text-neutral-300 leading-none select-none">
                0{i + 1}
             </div>
          </div>
       </motion.div>
    </div>
  )
}
