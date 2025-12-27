import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability Commitment",
  description:
    "Action-led sustainability with measurable impact. InfinityBox's commitment to reducing waste, optimizing resources, and creating circular systems.",
};

export default function Sustainability() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Sustainability Commitment
            </h1>
            <p className="text-xl text-neutral-600">
              Action-led sustainability with measurable impact across all
              operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Sustainability isn't an add-on at InfinityBox—it's integrated
              into every solution we design and deploy. We focus on measurable
              outcomes: waste reduction, resource optimization, and circular
              systems that create lasting impact.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              Key Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Waste Reduction",
                  description:
                    "Average 30% reduction in waste through optimized processes and circular packaging solutions.",
                },
                {
                  title: "Resource Optimization",
                  description:
                    "Precise chemical dosing and utility efficiency systems reduce resource consumption.",
                },
                {
                  title: "Circular Packaging",
                  description:
                    "Compostable and recyclable alternatives that support closed-loop systems.",
                },
                {
                  title: "Compliance & Reporting",
                  description:
                    "Audit-ready documentation that supports ESG reporting and sustainability goals.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-neutral-200"
                >
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Measurable Impact
            </h2>
            <div className="space-y-4">
              {[
                "30% average waste reduction across deployments",
                "Compliance-ready documentation for ESG reporting",
                "Circular systems that reduce single-use dependency",
                "Resource optimization through system-led efficiency",
              ].map((impact, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-[var(--color-secondary)] mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-neutral-700">{impact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Partner for Sustainable Operations
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Learn how InfinityBox can help your organization achieve
              sustainability goals with measurable impact.
            </p>
            <Button href="/contact" size="lg">
              Discuss Sustainability Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

