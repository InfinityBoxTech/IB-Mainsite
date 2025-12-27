import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hospitality & Food Services",
  description:
    "Standardized hygiene protocols, reduced operational downtime, and enhanced guest safety for hospitality and food service operations.",
};

export default function Hospitality() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Hospitality & Food Services
            </h1>
            <p className="text-xl text-neutral-600">
              Integrated solutions for hotels, restaurants, cafes, and food
              service operations—ensuring guest safety, operational efficiency,
              and sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Typical Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "Multi-location hygiene standardization",
                "Compliance across diverse operations",
                "Waste reduction and sustainability",
                "Guest safety and trust",
                "Operational cost management",
                "Regulatory compliance",
              ].map((challenge, idx) => (
                <div key={idx} className="flex items-start">
                  <ArrowRight
                    size={20}
                    className="text-emerald-600 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-neutral-700">{challenge}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              InfinityBox Solutions Applied
            </h2>
            <div className="space-y-4 mb-12">
              {[
                {
                  solution: "Hygiene Solutions",
                  description:
                    "Standardized cleaning protocols, controlled chemical dispensing, and audit-ready compliance across all locations.",
                },
                {
                  solution: "Packaging Solutions",
                  description:
                    "Sustainable food service packaging that meets operational needs while reducing environmental impact.",
                },
                {
                  solution: "Commercial Kitchen Solutions",
                  description:
                    "Kitchen optimization, preventive maintenance, and utility efficiency to reduce downtime and costs.",
                },
                {
                  solution: "Manpower Solutions",
                  description:
                    "Trained workforce with SOPs and supervision to ensure consistent execution and guest satisfaction.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 rounded-lg p-6 border border-neutral-200"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {item.solution}
                  </h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Value Delivered
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "Standardized hygiene protocols across locations",
                "Reduced operational downtime",
                "Enhanced guest safety and trust",
                "Cost optimization through efficiency",
                "Compliance with food safety regulations",
                "Measurable sustainability impact",
              ].map((value, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-[var(--color-secondary)] mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-neutral-700">{value}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Use Cases
            </h2>
            <div className="space-y-4">
              {[
                "Multi-location hotel chains requiring standardized hygiene",
                "Restaurant groups seeking operational efficiency",
                "Food service operations needing compliance support",
                "Cafes and quick-service restaurants optimizing costs",
              ].map((useCase, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">
                    •
                  </span>
                  <span className="text-neutral-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 lg:p-12 text-center border border-neutral-200">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Transform Your Hospitality Operations
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Connect with our hospitality specialists to discuss solutions
                tailored to your operations.
              </p>
              <Button href="/contact?type=hospitality" size="lg">
                Talk to Hospitality Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

