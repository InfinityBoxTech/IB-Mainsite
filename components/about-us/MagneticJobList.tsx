"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from '@/components/ui/Button';

const jobs = [
  {
     role: "Senior Operations Manager",
     location: "Bangalore, India",
     type: "Full-Time",
     dept: "Operations"
  },
  {
     role: "Full Stack Engineer",
     location: "Remote / Bangalore",
     type: "Full-Time",
     dept: "Technology"
  },
  {
     role: "Sustainability Specialist",
     location: "Mumbai, India",
     type: "Full-Time",
     dept: "Compliance"
  },
   {
     role: "Strategic Sales Lead",
     location: "Delhi NCR",
     type: "Full-Time",
     dept: "Growth"
  },
];

export default function MagneticJobList() {
  return (
    <section className="py-20 bg-white min-h-screen">
       <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-end justify-between mb-16">
             <h2 className="text-5xl font-bold text-neutral-900 leading-tight">Current<br/>Openings</h2>
             <p className="text-neutral-500 hidden md:block">We are always looking for exceptional talent.</p>
          </div>

          <div className="space-y-4">
             {jobs.map((job, i) => (
                <motion.div 
                   key={i}
                   whileHover={{ scale: 1.02 }}
                   className="group relative bg-neutral-50 rounded-2xl p-8 border border-neutral-200 hover:bg-neutral-900 hover:border-neutral-900 transition-colors duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                   <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 block">{job.dept}</span>
                      <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-white transition-colors">{job.role}</h3>
                      <p className="text-neutral-500 group-hover:text-neutral-400 transition-colors mt-1">{job.location} • {job.type}</p>
                   </div>
                   
                   <div className="flex items-center gap-4">
                      <Button href="/contact?type=careers" className="bg-white text-neutral-900 hover:bg-emerald-400 hover:text-white border-none rounded-full px-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                         Apply Now
                      </Button>
                      <div className="w-12 h-12 rounded-full border border-neutral-300 group-hover:border-neutral-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                         <ArrowRight className="text-neutral-400 group-hover:text-black" />
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
