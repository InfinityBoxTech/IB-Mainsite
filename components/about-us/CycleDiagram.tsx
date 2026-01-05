"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CircleDashed, Cpu, Maximize2, RefreshCw, ShieldCheck } from "lucide-react";

const phases = [
  {
    title: "01 / Precision Inputs",
    description: "We start with the molecule. Right chemical, right dose, right process. Precision ensures effectiveness from day one."
  },
  {
    title: "02 / System Optimization",
    description: "Technology and protocols work in harmony. We minimize resource consumption while maximizing operational output."
  },
  {
    title: "03 / Closed Loop Reuse",
    description: "Nothing is wasted. Packaging is recovered, resources are circulated, and the lifecycle is extended."
  },
  {
    title: "04 / Compliance Standard",
    description: "Safety isn't checked at the end; it's built in. Audit-ready documentation serves as the backbone of trust."
  }
];

export default function CycleDiagram() {
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: desktopScrollProgress } = useScroll({
    target: desktopContainerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      {/* Mobile View - Full Height Scroll with Phases */}
      <div ref={mobileContainerRef} className="md:hidden relative h-[400vh] bg-white">
        <div className="sticky top-0 flex items-center justify-center min-h-screen overflow-hidden px-4">
          {/* Rotating Background Circle */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
             <motion.div
               style={{ rotate: useTransform(mobileScrollProgress, [0, 1], [0, 360]) }}
               className="w-[80vw] h-[80vw] border-2 border-black rounded-full"
             />
          </div>

          {/* Content - Phases that fade in/out */}
          <div className="relative w-full max-w-lg">
             {phases.map((phase, index) => {
                const range = [index * 0.25, (index + 1) * 0.25];
                return (
                    <MobilePhase
                        key={index}
                        title={phase.title}
                        description={phase.description}
                        range={range}
                        progress={mobileScrollProgress}
                        index={index}
                    />
                )
             })}
          </div>
        </div>
      </div>

      {/* Desktop View - Kinetic Sticky Scroll */}
      <div ref={desktopContainerRef} className="hidden md:block relative h-[400vh] bg-white">
        <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden">
          {/* Kinetic Background Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
             <motion.div
               style={{ rotate: useTransform(desktopScrollProgress, [0, 1], [0, 90]) }}
               className="w-[150vw] h-[150vw] border-[1px] border-black rounded-full flex items-center justify-center"
             >
                <div className="w-[100vw] h-[100vw] border-[1px] border-black rounded-full" />
             </motion.div>
          </div>

          {/* Content Container */}
          <div className="relative w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Left: Interactive Diagram */}
              <div className="hidden md:flex items-center justify-center relative aspect-square">
                 <motion.div
                   style={{ rotate: useTransform(desktopScrollProgress, [0, 1], [0, 360]) }}
                   className="relative w-96 h-96 rounded-full border border-neutral-200"
                 >
                    {/* Central Hub */}
                    <div className="absolute inset-0 m-auto w-32 h-32 bg-neutral-900 rounded-full flex items-center justify-center z-10">
                       <CircleDashed className="text-white w-12 h-12" />
                    </div>

                    {/* Satellite Nodes */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-white p-4 shadow-xl rounded-2xl border border-neutral-100 w-48 text-center">
                       <Cpu className="mx-auto text-blue-500 mb-2" />
                       <span className="font-bold text-sm block">Inputs</span>
                    </div>
                     <div className="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2 bg-white p-4 shadow-xl rounded-2xl border border-neutral-100 w-48 text-center">
                       <Maximize2 className="mx-auto text-purple-500 mb-2" />
                       <span className="font-bold text-sm block">Optimize</span>
                    </div>
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-white p-4 shadow-xl rounded-2xl border border-neutral-100 w-48 text-center">
                       <RefreshCw className="mx-auto text-emerald-500 mb-2" />
                       <span className="font-bold text-sm block">Reuse</span>
                    </div>
                     <div className="absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2 bg-white p-4 shadow-xl rounded-2xl border border-neutral-100 w-48 text-center">
                       <ShieldCheck className="mx-auto text-orange-500 mb-2" />
                       <span className="font-bold text-sm block">Compliance</span>
                    </div>
                 </motion.div>
              </div>

              {/* Right: Scrolling Content */}
              <div className="relative">
                 {phases.map((phase, index) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const range = [index * 0.25, (index + 1) * 0.25];
                    return (
                        <Phase
                            key={index}
                            title={phase.title}
                            description={phase.description}
                            range={range}
                            progress={desktopScrollProgress}
                        />
                    )
                 })}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Phase({ title, description, range, progress }: any) {
    // First phase (range starts at 0) should be visible by default
    const isFirstPhase = range[0] === 0;
    const opacity = useTransform(
        progress,
        [range[0], range[0] + 0.1, range[1] - 0.1, range[1]],
        isFirstPhase ? [1, 1, 1, 0] : [0, 1, 1, 0]
    );
    const y = useTransform(
        progress,
        [range[0], range[0] + 0.1, range[1] - 0.1, range[1]],
        isFirstPhase ? [0, 0, 0, -50] : [50, 0, 0, -50]
    );

    return (
        <motion.div style={{ opacity, y }} className="absolute top-1/2 -translate-y-1/2 left-0 w-full pl-8 border-l-2 border-neutral-200">
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">{title}</h3>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-lg">
                {description}
            </p>
        </motion.div>
    )
}

function MobilePhase({ title, description, range, progress, index }: any) {
    // First phase should be visible by default
    const isFirstPhase = range[0] === 0;
    const opacity = useTransform(
        progress,
        [range[0], range[0] + 0.1, range[1] - 0.1, range[1]],
        isFirstPhase ? [1, 1, 1, 0] : [0, 1, 1, 0]
    );
    const y = useTransform(
        progress,
        [range[0], range[0] + 0.1, range[1] - 0.1, range[1]],
        isFirstPhase ? [0, 0, 0, -30] : [30, 0, 0, -30]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute inset-0 flex flex-col justify-center text-center"
        >
            {/* Number Badge */}
            <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <span className="text-white font-bold text-2xl">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 px-4">
                {title.split('/')[1]?.trim() || title}
            </h3>

            <p className="text-base sm:text-lg text-neutral-500 leading-relaxed px-4">
                {description}
            </p>
        </motion.div>
    )
}
