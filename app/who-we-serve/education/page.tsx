import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Education Campuses",
  description:
    "Safe learning environments, cost-effective solutions, and sustainability integration for schools, colleges, and educational institutions.",
};

export default function Education() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Education Campuses
            </h1>
            <p className="text-xl text-neutral-600">
              Safe, sustainable, and cost-effective solutions for schools,
              colleges, and educational institutions.
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
                "Student health and safety",
                "Large-scale operations",
                "Budget constraints",
                "Sustainability education",
                "Multi-building coordination",
                "Compliance requirements",
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
                    "Standardized cleaning protocols across campuses, ensuring student health and safety.",
                },
                {
                  solution: "Packaging Solutions",
                  description:
                    "Sustainable cafeteria packaging that supports environmental education initiatives.",
                },
                {
                  solution: "Commercial Kitchen Solutions",
                  description:
                    "Efficient kitchen operations for cafeterias and dining halls.",
                },
                {
                  solution: "Manpower Solutions",
                  description:
                    "Trained workforce with SOPs for consistent execution across large campuses.",
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
                "Safe learning environments",
                "Cost-effective solutions",
                "Sustainability integration",
                "Scalable operations",
                "Compliance assurance",
                "Educational value alignment",
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
                "Schools requiring standardized hygiene",
                "Colleges seeking cost-effective operations",
                "Educational institutions prioritizing sustainability",
                "Large campuses needing coordinated services",
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
                Support Your Educational Mission
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Connect with our education specialists to discuss solutions for
                your campus.
              </p>
              <Button href="/contact?type=education" size="lg">
                Talk to Education Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

