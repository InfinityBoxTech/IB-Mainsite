"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Bell, TrendingUp, FileText, Newspaper, AlertCircle } from "lucide-react";
import Link from "next/link";

const updates = [
  {
    title: "New Packaging Regulations: What You Need to Know",
    excerpt:
      "Overview of recent regulatory changes and their implications for operations infrastructure.",
    content: "Comprehensive analysis of the latest packaging compliance requirements and actionable steps for implementation across your facilities.",
    href: "/insights/industry-updates/packaging-regulations-2024",
    date: "2024-01-20",
    category: "Regulatory",
    priority: "high",
    icon: AlertCircle,
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Sustainability Reporting Requirements: A Guide",
    excerpt:
      "Understanding ESG reporting requirements and how to prepare your operations data.",
    content: "Step-by-step guide to meeting new ESG reporting standards with practical frameworks for data collection and documentation.",
    href: "/insights/industry-updates/sustainability-reporting-guide",
    date: "2024-01-12",
    category: "Compliance",
    priority: "medium",
    icon: FileText,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "FSSAI Guidelines Update: Food Safety Standards",
    excerpt:
      "Latest updates to food safety and hygiene standards affecting commercial kitchen operations.",
    content: "Detailed breakdown of revised FSSAI guidelines and their impact on food service operations and compliance requirements.",
    href: "/insights/industry-updates/fssai-guidelines-2024",
    date: "2024-01-05",
    category: "Food Safety",
    priority: "high",
    icon: AlertCircle,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Workplace Safety Protocols: New Standards",
    excerpt:
      "Updated workplace safety requirements for facility management and workforce operations.",
    content: "Comprehensive overview of new workplace safety standards and implementation strategies for compliance.",
    href: "/insights/industry-updates/workplace-safety-standards",
    date: "2023-12-28",
    category: "Safety",
    priority: "medium",
    icon: FileText,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Waste Management Policy Changes in Major Cities",
    excerpt:
      "New waste segregation and management policies rolling out across metropolitan areas.",
    content: "Analysis of updated waste management regulations in major Indian cities and practical compliance strategies.",
    href: "/insights/industry-updates/waste-management-policy",
    date: "2023-12-15",
    category: "Environmental",
    priority: "medium",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Digital Documentation Requirements for Facility Management",
    excerpt:
      "New digital record-keeping mandates and audit trail requirements coming into effect.",
    content: "Guide to implementing digital documentation systems that meet new regulatory requirements.",
    href: "/insights/industry-updates/digital-documentation",
    date: "2023-12-08",
    category: "Technology",
    priority: "low",
    icon: Newspaper,
    gradient: "from-purple-500 to-violet-500",
  },
];

const priorityConfig = {
  high: {
    label: "Urgent",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  medium: {
    label: "Important",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
  },
  low: {
    label: "Info",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
};

export default function IndustryUpdates() {
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

        {/* Floating Notification Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Bell className="w-4 h-4 text-emerald-400" />
            </motion.div>
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
              <Newspaper className="w-4 h-4" />
              Latest Updates
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Updates</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Stay informed with the latest regulatory changes, compliance requirements, and industry trends affecting operations infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Updates Timeline */}
      <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-500 transform -translate-x-1/2" />

              {/* Updates */}
              <div className="space-y-12 md:space-y-16">
                {updates.map((update, index) => {
                  const Icon = update.icon;
                  const priority = priorityConfig[update.priority as keyof typeof priorityConfig];
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative"
                    >
                      <Link href={update.href}>
                        <div className={`md:grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                          {/* Content */}
                          <div className={`${isEven ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}`}>
                            <div className="group relative bg-white rounded-2xl border border-neutral-200 hover:border-emerald-500/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8">
                              {/* Gradient Accent */}
                              <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-1 h-full bg-gradient-to-b ${update.gradient}`} />

                              {/* Header */}
                              <div className={`flex flex-wrap items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${priority.bgColor} border ${priority.borderColor} ${priority.color} text-xs font-semibold uppercase tracking-wider`}>
                                  {priority.label}
                                </span>
                                <span className="px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium">
                                  {update.category}
                                </span>
                              </div>

                              {/* Date */}
                              <div className={`flex items-center gap-2 text-sm text-neutral-500 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                                <Calendar className="w-4 h-4" />
                                {new Date(update.date).toLocaleDateString("en-IN", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </div>

                              {/* Title */}
                              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                                {update.title}
                              </h3>

                              {/* Excerpt */}
                              <p className="text-neutral-600 leading-relaxed mb-4">
                                {update.excerpt}
                              </p>

                              {/* Content Preview */}
                              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                                {update.content}
                              </p>

                              {/* CTA */}
                              <div className={`inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-300 ${isEven ? 'md:ml-auto' : ''}`}>
                                <span>Read Full Update</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </div>
                            </div>
                          </div>

                          {/* Timeline Node */}
                          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${update.gradient} flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                          </div>

                          {/* Empty Column for Spacing */}
                          <div className={`hidden md:block ${isEven ? 'md:col-start-2' : ''}`} />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Browse by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Category</span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Explore updates organized by topic to stay informed on what matters most to your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Regulatory", icon: AlertCircle, gradient: "from-red-500 to-orange-500" },
              { name: "Compliance", icon: FileText, gradient: "from-emerald-500 to-teal-500" },
              { name: "Food Safety", icon: AlertCircle, gradient: "from-orange-500 to-amber-500" },
              { name: "Safety", icon: FileText, gradient: "from-blue-500 to-indigo-500" },
              { name: "Environmental", icon: TrendingUp, gradient: "from-green-500 to-emerald-500" },
              { name: "Technology", icon: Newspaper, gradient: "from-purple-500 to-violet-500" },
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/10"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {category.name}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 uppercase tracking-widest text-xs md:text-sm mb-6">
                <Bell className="w-4 h-4" />
                Never Miss an Update
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Get Alerts for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Critical Updates</span>
              </h2>
              <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                Subscribe to receive timely notifications about regulatory changes, compliance requirements, and industry developments.
              </p>

              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-white text-emerald-950 hover:bg-emerald-50 border-none rounded-full px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Subscribe to Alerts
                  <Bell className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
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
