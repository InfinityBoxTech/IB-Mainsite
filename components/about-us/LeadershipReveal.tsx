"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { useState } from "react";

const leaders = [
  {
    name: "Shashwat Gangwal",
    role: "Co-Founder & CEO",
    image: "/images/profilePics/Shashwat.jpeg",
    gradient: "from-emerald-500 to-teal-500",
    cardText: "Leads InfinityBox's long-term vision and platform strategy, grounded in global sustainability investing and operational accountability.",
    expandedProfile: "Shashwat co-founded InfinityBox with the belief that sustainability must be embedded into real operating systems to work at scale. Prior to InfinityBox, he worked closely with global climate and sustainability investors, including Sagana and Circulate Capital, evaluating and supporting companies focused on preventing plastic waste from entering oceans and landfills across geographies. This exposure shaped InfinityBox's approach — grounding environmental intent in commercially viable, operationally rigorous models. As CEO, Shashwat focuses on long-term partnerships, platform thinking, and building trust through predictable execution and measurable impact.",
    expertise: ["Strategy", "Platform Thinking", "Sustainability"],
    linkedin:"https://www.linkedin.com/in/shashwat-gangwal-infinitybox/",
    email: "shashwat@getinfinitybox.com"
  },
  {
    name: "Keshav Godala",
    role: "Co-Founder & VP – Operations",
    image: "/images/profilePics/Keshav.jpeg",
    gradient: "from-blue-500 to-cyan-500",
    cardText: "Owns multi-city execution, compliance readiness, and operational consistency across InfinityBox facilities.",
    expandedProfile: "An alumnus of IIT Kharagpur, Keshav is responsible for building and scaling InfinityBox's operational backbone. He leads on-site and off-site operations, SOP standardisation, training-to-execution frameworks, compliance readiness, and performance management across cities. His mandate is to ensure InfinityBox operates predictably at scale — delivering consistent outcomes across facilities, clients, and operating conditions.",
    expertise: ["Operations", "Compliance", "Scaling"],
    linkedin:"https://www.linkedin.com/in/keshavgodala/",
    email: "keshav@getinfinitybox.com"
  },
  {
    name: "Harsh Jain",
    role: "On-Site Operations Head",
    image: "/images/profilePics/Harsh.jpg",
    gradient: "from-purple-500 to-pink-500",
    cardText: "Leads on-site execution across enterprise campuses with a founder-operator mindset.",
    expandedProfile: "Harsh brings a strong founder mindset shaped by having co-founded and run a company for several years before joining InfinityBox. His experience building teams and managing execution at ground level informs his leadership of on-site operations. At InfinityBox, Harsh owns execution across enterprise client locations, ensuring hygiene standards, manpower discipline, and SOP adherence are maintained consistently across sites.",
    expertise: ["On-Site Operations", "Team Building", "Execution"],
    linkedin:"https://www.linkedin.com/in/hj-50357a61/",
    email: "harsh@getinfinitybox.com"
  },
  {
    name: "Sneha Barnawal",
    role: "Head of Procurement",
    image: "/images/profilePics/Sneha.jpg",
    gradient: "from-orange-500 to-red-500",
    cardText: "Leads procurement as a strategic function across internal operations and client-facing procurement services.",
    expandedProfile: "Sneha owns procurement end-to-end at InfinityBox. She manages all internal procurement for on-site and off-site operations and leads the procurement services vertical, where InfinityBox supports enterprise clients with sourcing of serviceware, smallware, and kitchen equipment. Her role spans supplier strategy, SKU standardisation, pricing discipline, quality assurance, and procurement-led revenue growth. She operates with a strong founder mindset, treating procurement as a core driver of reliability, cost control, and client trust.",
    expertise: ["Procurement", "Supply Chain", "Cost Control"],
    linkedin:"https://www.linkedin.com/in/sneha-barnawal-780693123/",
    email: "sneha@getinfinitybox.com"
  },
  {
    name: "Yasaswini Rallabandi",
    role: "Head of Sales",
    image: "/images/profilePics/Yashaswini.jpg",
    gradient: "from-indigo-500 to-purple-500",
    cardText: "Leads enterprise partnerships with experience across Compass Group, Chai Point, and B2B food services.",
    expandedProfile: "Yasaswini brings experience from organisations including Compass Group and Chai Point, with a strong understanding of enterprise sales cycles, stakeholder management, and operationally complex accounts. At InfinityBox, she focuses on building long-term partnerships aligned to reliability, compliance, and measurable operational outcomes.",
    expertise: ["Enterprise Sales", "Partnerships", "Client Relations"],
    linkedin:"https://www.linkedin.com/in/yasaswini-r-610827113/",
    email: "yasaswini@getinfinitybox.com"
  },
  {
    name: "Shreyas Ananth",
    role: "Head of Technology",
    image: "/images/profilePics/Shreyas.jpeg",
    gradient: "from-cyan-500 to-blue-500",
    cardText: "Builds the technology backbone that enables visibility, standardisation, and operational control.",
    expandedProfile: "Shreyas brings nearly a decade of experience at ANZ, working in large, regulated, high-reliability environments. At InfinityBox, he leads systems that support operational visibility, workflow standardisation, reporting, and performance tracking — ensuring technology strengthens execution rather than adding complexity.",
    expertise: ["Technology", "Systems Architecture", "Operational Control"],
    linkedin:"https://www.linkedin.com/in/shreyas-ananth-23b0b62b/",
    email: "shreyas@getinfinitybox.com"
  },
  {
    name: "Jerry Jacob",
    role: "Regional Operations Head",
    image: "/images/profilePics/Jerry.jpeg",
    gradient: "from-teal-500 to-emerald-500",
    cardText: "Leads regional execution with deep experience in logistics-led, multi-location operations.",
    expandedProfile: "Jerry spent nearly a decade at Let's Transport, managing distributed operations, manpower-intensive execution, and service reliability at scale. At InfinityBox, he oversees regional execution, focusing on SOP adherence, training quality, and service continuity across client sites.",
    expertise: ["Regional Operations", "Logistics", "Service Reliability"],
    linkedin:"https://www.linkedin.com/in/jerry-jacob-6154a515/",
    email: "jerry@getinfinitybox.com"
  },
  {
    name: "Nilesh Mokal",
    role: "Regional Operations Head",
    image: "/images/profilePics/Nilesh.jpeg",
    gradient: "from-amber-500 to-orange-500",
    cardText: "Drives operational stability and process discipline across multi-site deployments.",
    expandedProfile: "Nilesh brings experience from operations-led organisations including NinjaCart, where he managed multi-site execution and workforce coordination in fast-moving environments. At InfinityBox, he focuses on stabilising operations, reducing escalations, and embedding repeatable routines.",
    expertise: ["Multi-Site Operations", "Process Discipline", "Operational Stability"],
    linkedin:"https://www.linkedin.com/in/nileshmokal/",
    email: "nilesh@getinfinitybox.com"
  },
  {
    name: "Piyush Kumar Khan",
    role: "Finance & Operations Controller",
    image: "/images/profilePics/Piyush.jpeg",
    gradient: "from-violet-500 to-purple-500",
    cardText: "Leads financial governance and cost discipline across InfinityBox operations.",
    expandedProfile: "Piyush brings experience from large organisations such as Amazon, where he worked on cost optimisation and operational efficiency at scale. At InfinityBox, he leads financial planning, cost controls, and operational analytics, ensuring growth is supported by discipline, transparency, and predictable unit economics.",
    expertise: ["Finance", "Cost Control", "Analytics"],
    linkedin:"https://www.linkedin.com/in/piyush-k-11803934/",
    email: "financecontroller@getinfinitybox.com"
  },
];

export default function LeadershipReveal() {
  const founders = leaders.slice(0, 2);
  const coreTeam = leaders.slice(2); // Harsh, Sneha, Yasaswini, Shreyas, Jerry, Nilesh, Piyush

  return (
    <section className="section-padding pt-10 xl:pt-0 pb-10 xl:pb-14 bg-gradient-to-b from-white to-neutral-50">
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
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${leader.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
            
            {/* Profile Image */}
            {leader.image && (
              <img
                src={leader.image}
                alt={leader.name}
                className="absolute inset-0 w-full h-full object-contain object-center"
                onError={(e) => {
                  // Hide image if it fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="h-1/4 p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors duration-300 mb-1">
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
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-white">
                {leader.name}
              </h3>
              <div className="flex items-center gap-2 ml-auto">
                <a
                  href={`mailto:${leader.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors group/icon"
                  title="Email"
                >
                  <Mail className="w-4 h-4 text-white group-hover/icon:text-emerald-400 transition-colors" />
                </a>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors group/icon"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-white group-hover/icon:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>
            <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent`}>
              {leader.role}
            </p>

            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              {leader.cardText}
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              {leader.expandedProfile}
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

        </div>
      </div>
    </motion.div>
  );
}
