import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Offices & IT Parks",
  description:
    "Audit-ready compliance systems, measurable sustainability impact, and cost optimization for corporate facilities and IT parks.",
};

export default function Corporates() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Corporate Offices & IT Parks
            </h1>
            <p className="text-xl text-neutral-600">
              Enterprise-grade solutions for large-scale facilities, ensuring
              employee health, sustainability reporting, and operational
              efficiency.
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
                "Large-scale facility management",
                "Employee health and safety",
                "Sustainability reporting requirements",
                "Multi-tenant coordination",
                "Cost optimization",
                "ESG compliance",
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
                    "Standardized protocols across facilities, audit-ready documentation, and compliance systems.",
                },
                {
                  solution: "Packaging Solutions",
                  description:
                    "Sustainable alternatives for cafeterias and common areas, supporting ESG reporting.",
                },
                {
                  solution: "Manpower Solutions",
                  description:
                    "Trained workforce with SOPs and supervision for consistent execution across large facilities.",
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
                "Audit-ready compliance systems",
                "Measurable sustainability impact",
                "Cost optimization through standardization",
                "Enhanced workplace safety",
                "ESG reporting support",
                "Scalable operations model",
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
                "IT parks requiring standardized facility management",
                "Corporate headquarters seeking ESG compliance",
                "Multi-tenant office buildings",
                "Large-scale corporate campuses",
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
                Optimize Your Corporate Facilities
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Connect with our corporate solutions team to discuss your
                facility management needs.
              </p>
              <Button href="/contact?type=corporate" size="lg">
                Talk to Corporate Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





