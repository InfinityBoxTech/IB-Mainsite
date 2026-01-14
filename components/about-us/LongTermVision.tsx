"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Infinity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function LongTermVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background pulse animation
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          scale: 1.2,
          opacity: 0.15,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      }

      // Icon entrance
      if (iconRef.current) {
        gsap.from(iconRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: iconRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      // Label entrance
      if (labelRef.current) {
        gsap.from(labelRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          scrollTrigger: {
            trigger: labelRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      // Heading entrance
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      // Description entrance
      if (descRef.current) {
        gsap.from(descRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      // Dots animation
      if (dotsRef.current) {
        const dots = dotsRef.current.children;
        Array.from(dots).forEach((dot, i) => {
          gsap.to(dot, {
            y: -10,
            duration: 2,
            delay: i * 0.2,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
          });
        });
      }

      // Stats entrance
      if (statsRef.current) {
        gsap.fromTo(statsRef.current.children,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-transparent overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={bgRef}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-200/10 rounded-full blur-3xl"
          style={{ opacity: 0.1, scale: 1 }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Icon */}
          <div ref={iconRef} className="flex justify-center mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-500/40">
              <Infinity className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Label */}
          <div ref={labelRef} className="text-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs md:text-sm font-bold uppercase tracking-widest">
              Our Commitment
            </span>
          </div>

          {/* Heading */}
          <h2 ref={headingRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 text-center mb-8 leading-[1.1]">
            Built for the{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Long Term
            </span>
          </h2>

          {/* Description */}
          <p ref={descRef} className="text-lg sm:text-xl md:text-2xl text-neutral-600 text-center leading-relaxed max-w-4xl mx-auto">
            InfinityBox is building durable infrastructure for enterprise cafeterias across India with a focus on repeatable execution and long-term partnerships.
          </p>

          {/* Decorative elements */}
          <div ref={dotsRef} className="flex justify-center gap-2 mt-8 sm:mt-10">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600"
              />
            ))}
          </div>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12 md:mt-14 opacity-100">
            <StatCard value="Pan-India" label="Operational Footprint" />
            <StatCard value="Enterprise" label="Client Focus" />
            <StatCard value="Long-Term" label="Partnership Model" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="relative p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
          {value}
        </div>
        <div className="text-xs sm:text-sm md:text-base text-neutral-600 font-semibold uppercase tracking-wider">
          {label}
        </div>
      </div>

      {/* Border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
