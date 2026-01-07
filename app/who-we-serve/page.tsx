import type { Metadata } from "next";
import IndustryCard from "@/components/sections/IndustryCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Tailored solutions for diverse industries: hospitality, corporates, healthcare, education, and industrial sectors across India.",
};

const industries = [
  {
    title: "Hospitality & Food Services",
    challenges: [
      "Multi-location hygiene standardization",
      "Compliance across diverse operations",
      "Waste reduction and sustainability",
      "Guest safety and trust",
    ],
    valueDelivered: [
      "Standardized hygiene protocols",
      "Reduced operational downtime",
      "Enhanced guest safety",
      "Cost optimization",
    ],
    href: "/who-we-serve/hospitality",
  },
  {
    title: "Corporate Offices & IT Parks",
    challenges: [
      "Large-scale facility management",
      "Employee health and safety",
      "Sustainability reporting requirements",
      "Multi-tenant coordination",
    ],
    valueDelivered: [
      "Audit-ready compliance systems",
      "Measurable sustainability impact",
      "Cost optimization",
      "Enhanced workplace safety",
    ],
    href: "/who-we-serve/corporates",
  },
  {
    title: "Healthcare & Institutions",
    challenges: [
      "Critical hygiene standards",
      "Infection control protocols",
      "Regulatory compliance",
      "Patient safety requirements",
    ],
    valueDelivered: [
      "Enhanced patient safety",
      "Healthcare standards compliance",
      "Reliable execution",
      "Risk mitigation",
    ],
    href: "/who-we-serve/healthcare",
  },
  {
    title: "Education Campuses",
    challenges: [
      "Student health and safety",
      "Large-scale operations",
      "Budget constraints",
      "Sustainability education",
    ],
    valueDelivered: [
      "Safe learning environments",
      "Cost-effective solutions",
      "Sustainability integration",
      "Scalable operations",
    ],
    href: "/who-we-serve/education",
  },
  {
    title: "Industrial & Manufacturing",
    challenges: [
      "Heavy-duty cleaning requirements",
      "Safety compliance",
      "Operational efficiency",
      "Environmental regulations",
    ],
    valueDelivered: [
      "Specialized industrial solutions",
      "Safety-first protocols",
      "Reduced downtime",
      "Compliance assurance",
    ],
    href: "/who-we-serve/industrial",
  },
];

export default function WhoWeServe() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Who We Serve
            </h1>
            <p className="text-xl text-neutral-600">
              Tailored solutions for diverse industries, each with unique
              challenges and measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry, idx) => (
              <IndustryCard key={idx} {...industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Not Sure Which Solution Fits Your Industry?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Talk to our industry specialists to understand how InfinityBox can
              address your specific challenges.
            </p>
            <Button href="/contact" size="lg">
              Talk to Industry Specialist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}






