"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, TrendingUp, CheckCircle2, Award, Target, Zap } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Multi-Site Hospitality Chain",
    industry: "Hospitality",
    solution: "Hygiene Solutions",
    description:
      "Standardized hygiene protocols across 25 locations, achieving 100% compliance and reducing operational costs by 22%.",
    challenge: "Inconsistent hygiene standards across 25 properties leading to compliance risks and operational inefficiencies.",
    approach: "Deployed centralized protocol management with real-time monitoring and staff training programs.",
    results: [
      { metric: "100%", label: "Compliance Rate", icon: CheckCircle2 },
      { metric: "22%", label: "Cost Reduction", icon: TrendingUp },
      { metric: "25", label: "Locations Standardized", icon: Building2 },
    ],
    impact: "Achieved complete compliance across all properties while significantly reducing costs through systematic standardization.",
    href: "/insights/case-studies/multi-site-hospitality",
    gradient: "from-blue-600 to-cyan-600",
    bgColor: "from-blue-950 via-blue-900 to-cyan-950",
  },
  {
    title: "Corporate IT Park",
    industry: "Corporate",
    solution: "Integrated Solutions",
    description:
      "Deployed integrated solutions across 2M sq ft, reducing waste by 35% and achieving LEED certification support.",
    challenge: "Complex 2M sq ft facility requiring comprehensive waste management and sustainability compliance.",
    approach: "Implemented integrated hygiene, packaging, and waste management systems with circular economy principles.",
    results: [
      { metric: "35%", label: "Waste Reduction", icon: TrendingUp },
      { metric: "LEED", label: "Certification Support", icon: Award },
      { metric: "2M", label: "Sq Ft Coverage", icon: Building2 },
    ],
    impact: "Transformed facility operations to achieve sustainability goals while maintaining operational excellence.",
    href: "/insights/case-studies/corporate-it-park",
    gradient: "from-emerald-600 to-teal-600",
    bgColor: "from-emerald-950 via-emerald-900 to-teal-950",
  },
  {
    title: "Healthcare Facility Network",
    industry: "Healthcare",
    solution: "Compliance Systems",
    description:
      "Established audit-ready documentation and protocols across 12 healthcare facilities, achieving zero compliance violations.",
    challenge: "Critical need for stringent hygiene compliance and audit-ready documentation across medical facilities.",
    approach: "Developed comprehensive compliance framework with digital tracking and automated reporting systems.",
    results: [
      { metric: "0", label: "Compliance Violations", icon: CheckCircle2 },
      { metric: "12", label: "Facilities Covered", icon: Building2 },
      { metric: "100%", label: "Audit Success Rate", icon: Award },
    ],
    impact: "Created a robust compliance infrastructure ensuring patient safety and regulatory adherence.",
    href: "/insights/case-studies/healthcare-network",
    gradient: "from-purple-600 to-pink-600",
    bgColor: "from-purple-950 via-purple-900 to-pink-950",
  },
  {
    title: "Manufacturing Complex",
    industry: "Industrial",
    solution: "Workforce & Kitchen Solutions",
    description:
      "Optimized workforce management and kitchen operations for 5,000+ employees, improving efficiency by 40%.",
    challenge: "Managing large-scale workforce operations and cafeteria services for industrial facility.",
    approach: "Integrated manpower solutions with commercial kitchen optimization and real-time monitoring.",
    results: [
      { metric: "40%", label: "Efficiency Improvement", icon: Zap },
      { metric: "5,000+", label: "Employees Served", icon: Target },
      { metric: "98%", label: "Service Uptime", icon: TrendingUp },
    ],
    impact: "Streamlined operations delivering consistent service quality while maximizing workforce productivity.",
    href: "/insights/case-studies/manufacturing-complex",
    gradient: "from-orange-600 to-red-600",
    bgColor: "from-orange-950 via-orange-900 to-red-950",
  },
];

export default function CaseStudies() {
  return (
    <main className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-8"
            >
              <Award className="w-4 h-4" />
              Success Stories
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Real Impact, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Real Results</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Discover how InfinityBox transforms operations infrastructure across industries with measurable, sustainable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20 md:gap-32">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={study.href}>
                  <div className="group relative block">
                    {/* Main Card */}
                    <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${study.bgColor} shadow-2xl hover:shadow-3xl transition-all duration-500`}>
                      {/* Grid Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                            backgroundSize: '30px 30px',
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative p-8 md:p-12 lg:p-16">
                        {/* Header */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                          <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r ${study.gradient} text-white text-sm font-semibold uppercase tracking-wider shadow-lg`}>
                            <Building2 className="w-4 h-4" />
                            {study.industry}
                          </span>
                          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                            {study.solution}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-emerald-300 transition-colors duration-300">
                          {study.title}
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-neutral-200 leading-relaxed mb-8 max-w-3xl">
                          {study.description}
                        </p>

                        {/* Challenge & Approach Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                              <Target className="w-4 h-4" />
                              Challenge
                            </h3>
                            <p className="text-neutral-300 leading-relaxed">
                              {study.challenge}
                            </p>
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <h3 className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                              <Zap className="w-4 h-4" />
                              Approach
                            </h3>
                            <p className="text-neutral-300 leading-relaxed">
                              {study.approach}
                            </p>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="mb-8">
                          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-emerald-400" />
                            Key Results
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {study.results.map((result, idx) => {
                              const Icon = result.icon;
                              return (
                                <div
                                  key={idx}
                                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors duration-300"
                                >
                                  <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {result.metric}
                                  </div>
                                  <div className="text-sm text-neutral-300">
                                    {result.label}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Impact */}
                        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-emerald-400" />
                            Impact
                          </h3>
                          <p className="text-neutral-200 leading-relaxed text-lg">
                            {study.impact}
                          </p>
                        </div>

                        {/* CTA */}
                        <div className="inline-flex items-center gap-3 text-white font-semibold group-hover:gap-5 transition-all duration-300">
                          <span className="text-lg">Read Full Case Study</span>
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${study.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>

                      {/* Decorative Element */}
                      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${study.gradient} opacity-20 blur-3xl rounded-full transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-neutral-900 relative overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Proven Track Record of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Excellence</span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Our solutions deliver measurable impact across diverse industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "50+", label: "Success Stories" },
              { value: "15+", label: "Industries Served" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "10M+", label: "Sq Ft Managed" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-neutral-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 relative overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Write Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Success Story?</span>
              </h2>
              <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how InfinityBox can transform your operations infrastructure with proven, scalable solutions.
              </p>

              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-white text-emerald-950 hover:bg-emerald-50 border-none rounded-full px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
