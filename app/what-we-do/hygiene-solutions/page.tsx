import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { Droplets, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hygiene Solutions",
  description:
    "Right chemical, right dose, right process. Controlled dispensing, audit-ready compliance, and training-backed execution for multi-site operations.",
};

export default function HygieneSolutions() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-emerald-600 mb-4">
              <Droplets size={48} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Hygiene Solutions
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              System-led hygiene protocols that ensure consistency, compliance,
              and measurable outcomes across all your locations.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              The Hygiene Ecosystem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Chemical management and dispensing systems",
                "Surface cleaning and sanitization protocols",
                "Restroom hygiene and maintenance",
                "Waste management integration",
                "Air quality and ventilation support",
                "Pest control coordination",
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

      {/* How We Work */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              How We Work: Right Chemical, Right Dose, Right Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Controlled Dispensing",
                  description:
                    "Automated systems ensure precise chemical dosing, reducing waste and ensuring consistency across all locations.",
                },
                {
                  title: "Audit-Ready Documentation",
                  description:
                    "Complete traceability from chemical selection to application, with real-time compliance reporting.",
                },
                {
                  title: "Training-Backed Execution",
                  description:
                    "Comprehensive training programs ensure your team understands protocols and can execute them reliably.",
                },
                {
                  title: "Continuous Monitoring",
                  description:
                    "Technology-enabled monitoring tracks compliance, identifies issues early, and drives continuous improvement.",
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

      {/* Business Value */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              Business Value Delivered
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Reduced operational costs through optimized chemical usage",
                "Enhanced compliance rates with audit-ready documentation",
                "Improved safety outcomes and reduced health risks",
                "Measurable sustainability impact through waste reduction",
                "Standardized protocols across multi-site operations",
                "Lower TCO through system-led efficiency",
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

      {/* CTAs */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 lg:p-12 text-center border border-neutral-200">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Ready to Standardize Your Hygiene Operations?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Start with a comprehensive hygiene audit to understand your
                current state and identify optimization opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact?type=hygiene-audit" size="lg">
                  Request a Hygiene Audit
                </Button>
                <Button
                  href="/contact?type=hygiene-experts"
                  variant="outline"
                  size="lg"
                >
                  Talk to Hygiene Experts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

