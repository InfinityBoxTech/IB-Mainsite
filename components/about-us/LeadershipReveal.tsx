"use client";

import { motion } from "framer-motion";
import { User, Mail, Linkedin, ArrowRight } from "lucide-react";
import { useState } from "react";

const leaders = [
  {
    name: "Shashwath Gangwal",
    role: "CEO, Founder",
    image: "/leaders/shashwath.jpg",
    gradient: "from-emerald-500 to-teal-500",
    bio: "Visionary leader with 10+ years driving operational excellence and sustainable growth across India's infrastructure landscape.",
    expertise: ["Strategy", "Operations", "Innovation"]
  },
  {
    name: "Keshav Godala",
    role: "Business and Operations Head, Co-Founder",
    image: "/leaders/keshav.jpg",
    gradient: "from-blue-500 to-cyan-500",
    bio: "Expert in scaling operations and building high-performance teams that deliver consistent, measurable results.",
    expertise: ["Scaling", "Process Design", "Team Building"]
  },
  {
    name: "Yashashwini",
    role: "Head of Sales",
    image: "/leaders/yashashwini.jpg",
    gradient: "from-purple-500 to-pink-500",
    bio: "Strategic sales leader focused on building lasting client partnerships and driving revenue growth through value-driven solutions.",
    expertise: ["Sales Strategy", "Client Relations", "Growth"]
  },
  {
    name: "Sneha Barnawal",
    role: "Head of Procurement",
    image: "/leaders/sneha.jpg",
    gradient: "from-orange-500 to-red-500",
    bio: "Procurement specialist optimizing supply chains and vendor relationships to ensure quality, efficiency, and cost-effectiveness.",
    expertise: ["Supply Chain", "Vendor Management", "Cost Optimization"]
  },
  {
    name: "Jerry",
    role: "City Head, Bengaluru",
    image: "/leaders/jerry.jpg",
    gradient: "from-indigo-500 to-purple-500",
    bio: "Leading InfinityBox's Bengaluru operations with a focus on local market expertise and operational excellence.",
    expertise: ["Regional Operations", "Market Strategy", "Team Leadership"]
  },
  {
    name: "Nilesh",
    role: "City Head, Mumbai & Gurgaon",
    image: "/leaders/nilesh.jpg",
    gradient: "from-teal-500 to-emerald-500",
    bio: "Managing multi-city operations across Mumbai and Gurgaon, ensuring consistent service delivery and client satisfaction.",
    expertise: ["Multi-City Management", "Client Success", "Operations"]
  },
  {
    name: "Shreyas Ananth",
    role: "Head of Tech & Systems Architecture",
    image: "/leaders/shreyas.jpg",
    gradient: "from-cyan-500 to-blue-500",
    bio: "Technology architect building scalable systems that power InfinityBox's operational infrastructure and digital transformation.",
    expertise: ["Systems Architecture", "Tech Strategy", "Innovation"]
  },
];

export default function LeadershipReveal() {
  const founders = leaders.slice(0, 2);
  const coreTeam = leaders.slice(2);

  return (
    <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Visionaries & Founders
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            The originators of the InfinityBox mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-32">
          {founders.map((leader, index) => (
            <LeaderCard key={index} leader={leader} index={index} />
          ))}
        </div>

        {/* Core Team Section */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Core Leadership
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            The experts driving execution and operational excellence.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreTeam.map((leader, index) => (
            <LeaderCard key={index + 2} leader={leader} index={index} />
            ))}
        </div>

      </div>
    </section>
  );
}

function LeaderCard({ leader, index }: { leader: typeof leaders[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="relative h-[500px] preserve-3d transition-transform duration-700" style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-white shadow-lg overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
          {/* Image Container */}
          <div className="relative h-3/4 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
            {/* Placeholder with gradient background and icon */}
            <div className={`absolute inset-0 bg-gradient-to-br ${leader.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${leader.gradient} opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                <User className="w-16 h-16 text-white opacity-50" />
              </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="h-1/4 p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
              {leader.name}
            </h3>
            <p className="text-sm text-neutral-600">
              {leader.role}
            </p>
          </div>

          {/* Hover Indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${leader.gradient} flex items-center justify-center`}>
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl overflow-hidden p-8 flex flex-col justify-between" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          {/* Gradient Accent */}
          <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${leader.gradient} opacity-20 blur-3xl rounded-full -translate-y-10 translate-x-10`} />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              {leader.name}
            </h3>
            <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent`}>
              {leader.role}
            </p>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {leader.bio}
            </p>

            <div className="space-y-2">
              <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-2">Expertise</p>
              <div className="flex flex-wrap gap-2">
                {leader.expertise.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Icons */}
          <div className="relative z-10 flex gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <Linkedin className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
