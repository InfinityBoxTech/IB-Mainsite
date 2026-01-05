"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "How to Standardize Hygiene Across Multi-Site Operations",
    excerpt:
      "Practical strategies for maintaining consistent hygiene standards across multiple locations, with system-led approaches and compliance frameworks.",
    href: "/insights/blogs/standardize-hygiene-multi-site",
    date: "2024-01-15",
    category: "Hygiene",
    readTime: "8 min read",
    gradient: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    title: "Packaging Compliance in India: Practical Pathways",
    excerpt:
      "Navigating India's evolving packaging regulations with actionable steps for compliance and sustainable alternatives.",
    href: "/insights/blogs/packaging-compliance-india",
    date: "2024-01-10",
    category: "Packaging",
    readTime: "6 min read",
    gradient: "from-purple-500 to-pink-500",
    featured: false,
  },
  {
    title: "Commercial Kitchen Optimization: Reducing Downtime",
    excerpt:
      "Strategies for minimizing kitchen downtime through preventive maintenance, workflow optimization, and efficient operations.",
    href: "/insights/blogs/kitchen-optimization-downtime",
    date: "2024-01-05",
    category: "Kitchen Solutions",
    readTime: "7 min read",
    gradient: "from-orange-500 to-red-500",
    featured: false,
  },
  {
    title: "Manpower Reliability: SOPs, Training and Audit Readiness",
    excerpt:
      "Building reliable workforce operations through standardized procedures, comprehensive training, and audit-ready documentation.",
    href: "/insights/blogs/manpower-reliability-sops",
    date: "2023-12-28",
    category: "Manpower",
    readTime: "9 min read",
    gradient: "from-emerald-500 to-teal-500",
    featured: false,
  },
  {
    title: "Hygiene and Sustainability: Moving from Claims to Systems",
    excerpt:
      "How to build genuine sustainability into hygiene operations, with measurable outcomes and circular thinking.",
    href: "/insights/blogs/hygiene-sustainability-systems",
    date: "2023-12-20",
    category: "Sustainability",
    readTime: "10 min read",
    gradient: "from-teal-500 to-emerald-500",
    featured: false,
  },
  {
    title: "The Future of Integrated Operations Management",
    excerpt:
      "Exploring emerging trends in operations infrastructure and how technology is reshaping facility management.",
    href: "/insights/blogs/future-integrated-operations",
    date: "2023-12-15",
    category: "Innovation",
    readTime: "12 min read",
    gradient: "from-indigo-500 to-purple-500",
    featured: false,
  },
];

export default function Blogs() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
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
              <Sparkles className="w-4 h-4" />
              Insights & Perspectives
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Knowledge That <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Drives Action</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Deep dives into operations infrastructure, sustainability practices, and industry trends shaping India's facility management landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Featured Article</h2>
              </div>
            </motion.div>

            <Link href={featuredPost.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredPost.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${featuredPost.gradient} text-white text-xs font-semibold uppercase tracking-wider`}>
                        <Tag className="w-3 h-3" />
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 md:mb-6 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>

                    <p className="text-lg text-neutral-600 leading-relaxed mb-6 md:mb-8">
                      {featuredPost.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all duration-300">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="hidden md:flex items-center justify-center relative">
                    <div className={`w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br ${featuredPost.gradient} opacity-20 blur-3xl absolute`} />
                    <div className={`relative w-48 h-48 lg:w-64 lg:h-64 rounded-2xl bg-gradient-to-br ${featuredPost.gradient} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Sparkles className="w-24 h-24 lg:w-32 lg:h-32 text-white opacity-80" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-neutral-600">Expert insights and actionable strategies for modern operations.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {regularPosts.map((post, index) => (
              <Link key={index} href={post.href}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group h-full bg-white rounded-2xl border border-neutral-200 hover:border-emerald-500/50 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Card Header with Gradient */}
                  <div className={`relative h-48 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Tag className="w-16 h-16 text-white opacity-20 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" />
                    </div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-300">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Stay Updated with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Latest Insights</span>
              </h2>
              <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                Get expert perspectives, industry updates, and actionable strategies delivered to your inbox.
              </p>

              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-white text-emerald-950 hover:bg-emerald-50 border-none rounded-full px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Subscribe to Updates
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
