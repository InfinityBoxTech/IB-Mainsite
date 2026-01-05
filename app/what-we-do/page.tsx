import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Droplets, Package, ChefHat, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "InfinityBox delivers integrated solutions across hygiene, packaging, commercial kitchens, and manpower—all designed for scale, compliance, and sustainability.",
};

const solutions = [
  {
    title: "Hygiene Solutions",
    icon: <Droplets size={40} />,
    problem:
      "Inconsistent hygiene standards, compliance gaps, and operational inefficiencies across multi-site operations.",
    deliver: [
      "Right chemical, right dose, right process protocols",
      "Controlled dispensing systems",
      "Audit-ready compliance documentation",
      "Training-backed execution",
    ],
    how: [
      "System-led standardization",
      "Technology-enabled monitoring",
      "Regular audits and reporting",
      "Continuous improvement cycles",
    ],
    value: [
      "Reduced operational costs",
      "Enhanced compliance rates",
      "Improved safety outcomes",
      "Measurable sustainability impact",
    ],
    href: "/what-we-do/hygiene-solutions",
    cta: "Request a Hygiene Audit",
  },
  {
    title: "Packaging Solutions",
    icon: <Package size={40} />,
    problem:
      "Single-use plastic dependency, compliance challenges, and lack of scalable sustainable alternatives.",
    deliver: [
      "Compostable and recyclable alternatives",
      "Institutional-scale deployment",
      "Compliance-focused solutions",
      "Durability for operational needs",
    ],
    how: [
      "Material science expertise",
      "Supply chain integration",
      "Waste stream management",
      "Lifecycle assessment",
    ],
    value: [
      "Reduced environmental impact",
      "Compliance with regulations",
      "Cost optimization",
      "Brand reputation enhancement",
    ],
    href: "/what-we-do/packaging-solutions",
    cta: "Explore Sustainable Packaging",
  },
  {
    title: "Commercial Kitchen Solutions",
    icon: <ChefHat size={40} />,
    problem:
      "Inefficient layouts, high utility costs, maintenance challenges, and workflow bottlenecks.",
    deliver: [
      "Lifecycle support from setup to maintenance",
      "Layout and workflow optimization",
      "Utility efficiency systems",
      "Preventive maintenance programs",
    ],
    how: [
      "Site assessment and planning",
      "Design optimization",
      "Installation and commissioning",
      "Ongoing maintenance support",
    ],
    value: [
      "Reduced downtime",
      "Lower utility costs",
      "Improved operational efficiency",
      "Extended equipment lifespan",
    ],
    href: "/what-we-do/commercial-kitchen-solutions",
    cta: "Request Site Assessment",
  },
  {
    title: "Manpower Solutions",
    icon: <Users size={40} />,
    problem:
      "Untrained workforce, inconsistent execution, compliance gaps, and high turnover.",
    deliver: [
      "Trained, compliant workforce",
      "SOP-driven execution",
      "Supervision and planning",
      "Multi-site coordination",
    ],
    how: [
      "Rigorous training programs",
      "Standardized operating procedures",
      "Real-time supervision",
      "Performance monitoring",
    ],
    value: [
      "Reliable execution",
      "Reduced compliance risks",
      "Lower operational overhead",
      "Scalable workforce model",
    ],
    href: "/what-we-do/manpower-solutions",
    cta: "Discuss Workforce Requirements",
  },
];

export default function WhatWeDo() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              What We Do
            </h1>
            <p className="text-xl text-neutral-600">
              Four integrated pillars, one accountable partner. Built for scale,
              compliance, and measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-emerald-600 mb-4">
                    {solution.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    {solution.title}
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                        The Challenge
                      </h3>
                      <p className="text-neutral-600">{solution.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                        What We Deliver
                      </h3>
                      <ul className="space-y-2 text-neutral-600">
                        {solution.deliver.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-emerald-600 mr-2">
                              →
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                        How We Work
                      </h3>
                      <ul className="space-y-2 text-neutral-600">
                        {solution.how.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-emerald-600 mr-2">
                              →
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                        Business Value
                      </h3>
                      <ul className="space-y-2 text-neutral-600">
                        {solution.value.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[var(--color-secondary)] mr-2">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Button href={solution.href} size="lg">
                        {solution.cta}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 lg:p-12 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-emerald-600 mb-4 flex justify-center">
                        {solution.icon}
                      </div>
                      <p className="text-neutral-500 text-sm">
                        Visual placeholder for {solution.title.toLowerCase()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Talk to our experts about how InfinityBox can deliver integrated
              solutions for your organization.
            </p>
            <Button href="/contact" size="lg">
              Talk to InfinityBox
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}





