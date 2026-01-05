"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Award, Newspaper, Sparkles, TrendingUp, Lightbulb } from "lucide-react";
import Link from "next/link";

const insightSections = [
  {
    title: "Blogs & Insights",
    description: "Expert perspectives, best practices, and actionable strategies for modern operations infrastructure.",
    href: "/insights/blogs",
    icon: BookOpen,
    gradient: "from-blue-600 to-cyan-600",
    bgColor: "from-blue-950 via-blue-900 to-cyan-950",
    count: "50+ Articles",
    highlights: [
      "Operations Best Practices",
      "Sustainability Strategies",
      "Technology Integration",
      "Compliance Frameworks",
    ],
  },
  {
    title: "Case Studies",
    description: "Real-world success stories showcasing measurable impact across industries and solutions.",
    href: "/insights/case-studies",
    icon: Award,
    gradient: "from-emerald-600 to-teal-600",
    bgColor: "from-emerald-950 via-emerald-900 to-teal-950",
    count: "15+ Success Stories",
    highlights: [
      "Multi-Site Deployments",
      "Cost Optimization Results",
      "Compliance Achievements",
      "Sustainability Wins",
    ],
  },
  {
    title: "Industry Updates",
    description: "Latest regulatory changes, compliance requirements, and industry trends affecting your operations.",
    href: "/insights/industry-updates",
    icon: Newspaper,
    gradient: "from-purple-600 to-pink-600",
    bgColor: "from-purple-950 via-purple-900 to-pink-950",
    count: "Weekly Updates",
    highlights: [
      "Regulatory Changes",
      "Compliance Alerts",
      "Safety Standards",
      "Market Trends",
    ],
  },
];

const featuredTopics = [
  { name: "Hygiene Solutions", icon: Sparkles, color: "text-blue-500" },
  { name: "Sustainability", icon: TrendingUp, color: "text-emerald-500" },
  { name: "Kitchen Operations", icon: Lightbulb, color: "text-orange-500" },
  { name: "Workforce Management", icon: Award, color: "text-purple-500" },
  { name: "Compliance", icon: BookOpen, color: "text-teal-500" },
  { name: "Innovation", icon: Sparkles, color: "text-pink-500" },
];

export default function InsightsHub() {
  return (
    <main className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
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
              <Lightbulb className="w-4 h-4" />
              Knowledge Hub
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Insights That <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Drive Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12">
              Expert perspectives, proven strategies, and real-world outcomes from India's operations infrastructure leaders.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
              {[
                { value: "50+", label: "Articles" },
                { value: "15+", label: "Case Studies" },
                { value: "Weekly", label: "Updates" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20 md:gap-32">
            {insightSections.map((section, index) => {
              const Icon = section.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link href={section.href}>
                    <div className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${section.bgColor} shadow-2xl hover:shadow-3xl transition-all duration-500`}>
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

                      <div className={`relative grid md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 lg:p-16 ${isEven ? '' : 'md:grid-flow-dense'}`}>
                        {/* Content */}
                        <div className={`flex flex-col justify-center ${isEven ? '' : 'md:col-start-2'}`}>
                          {/* Icon & Count */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
                              {section.count}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight group-hover:text-emerald-300 transition-colors duration-300">
                            {section.title}
                          </h2>

                          {/* Description */}
                          <p className="text-lg md:text-xl text-neutral-200 leading-relaxed mb-8">
                            {section.description}
                          </p>

                          {/* Highlights */}
                          <div className="grid grid-cols-2 gap-3 mb-8">
                            {section.highlights.map((highlight, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm text-neutral-300"
                              >
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${section.gradient}`} />
                                {highlight}
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="inline-flex items-center gap-3 text-white font-semibold group-hover:gap-5 transition-all duration-300">
                            <span className="text-lg">Explore {section.title}</span>
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>

                        {/* Visual Element */}
                        <div className={`hidden md:flex items-center justify-center relative ${isEven ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`}>
                          <div className={`absolute w-80 h-80 bg-gradient-to-br ${section.gradient} opacity-20 blur-3xl rounded-full`} />
                          <div className={`relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br ${section.gradient} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                            <Icon className="w-32 h-32 lg:w-40 lg:h-40 text-white opacity-80" />
                          </div>
                        </div>
                      </div>

                      {/* Decorative Element */}
                      <div className={`absolute ${isEven ? 'top-0 right-0' : 'bottom-0 left-0'} w-64 h-64 bg-gradient-to-br ${section.gradient} opacity-20 blur-3xl rounded-full transform ${isEven ? 'translate-x-32 -translate-y-32' : '-translate-x-32 translate-y-32'} group-hover:scale-150 transition-transform duration-700`} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Explore Topics
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Browse insights by topic to find exactly what you need for your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {featuredTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-white border-2 border-neutral-200 hover:border-emerald-500 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-neutral-100 group-hover:bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                    <Icon className={`w-6 h-6 ${topic.color} group-hover:text-emerald-600 transition-colors duration-300`} />
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {topic.name}
                  </div>
                </motion.button>
              );
            })}
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
                Transform Insights into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Action</span>
              </h2>
              <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                Ready to apply these strategies to your operations? Let's discuss how InfinityBox can help you achieve your goals.
              </p>

              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-white text-emerald-950 hover:bg-emerald-50 border-none rounded-full px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
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
