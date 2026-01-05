import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { ChefHat, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Kitchen Solutions",
  description:
    "Lifecycle support from setup to maintenance. Layout optimization, workflow efficiency, and utility management for commercial kitchens.",
};

export default function CommercialKitchenSolutions() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-emerald-600 mb-4">
              <ChefHat size={48} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Commercial Kitchen Solutions
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              End-to-end kitchen infrastructure support, from design and
              installation to ongoing maintenance and optimization.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Lifecycle Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Kitchen design and layout optimization",
                "Equipment selection and procurement",
                "Installation and commissioning",
                "Preventive maintenance programs",
                "Utility efficiency systems",
                "Workflow optimization",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-[var(--color-secondary)] mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              How We Work
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Site Assessment",
                  description:
                    "Comprehensive evaluation of current setup, workflow, and operational requirements to identify optimization opportunities.",
                },
                {
                  title: "Design Optimization",
                  description:
                    "Layout and workflow redesign to maximize efficiency, reduce bottlenecks, and improve safety standards.",
                },
                {
                  title: "Installation & Commissioning",
                  description:
                    "Professional installation with proper commissioning, testing, and handover to ensure optimal performance.",
                },
                {
                  title: "Ongoing Maintenance",
                  description:
                    "Preventive maintenance programs that reduce downtime, extend equipment life, and maintain peak performance.",
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
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              Business Value
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Reduced downtime through preventive maintenance",
                "Lower utility costs via efficiency optimization",
                "Improved operational efficiency and throughput",
                "Extended equipment lifespan",
                "Enhanced safety and compliance",
                "Scalable solutions for growth",
              ].map((value, idx) => (
                <div key={idx} className="flex items-start">
                  <ArrowRight
                    size={20}
                    className="text-emerald-600 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-neutral-700">{value}</span>
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
                Optimize Your Kitchen Operations
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Start with a site assessment to identify opportunities for
                improvement and efficiency gains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact?type=kitchen-assessment" size="lg">
                  Request Site Assessment
                </Button>
                <Button
                  href="/contact?type=kitchen-specialists"
                  variant="outline"
                  size="lg"
                >
                  Consult Kitchen Specialists
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





