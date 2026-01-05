import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { Package, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Packaging Solutions",
  description:
    "Compostable and recyclable packaging alternatives at institutional scale. Compliance-focused solutions with durability for operational needs.",
};

export default function PackagingSolutions() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-emerald-600 mb-4">
              <Package size={48} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Packaging Solutions
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Sustainable packaging alternatives that meet compliance
              requirements while maintaining operational durability and
              performance.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Sustainable Packaging Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Compostable food service packaging",
                "Recyclable containers and wraps",
                "Biodegradable alternatives",
                "Reusable system integration",
                "Waste stream optimization",
                "Compliance documentation support",
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
              Compliance + Durability
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Regulatory Compliance",
                  description:
                    "All solutions meet or exceed current regulations, with documentation support for audits and reporting.",
                },
                {
                  title: "Operational Durability",
                  description:
                    "Packaging designed for real-world use, maintaining performance standards while reducing environmental impact.",
                },
                {
                  title: "Institutional Scale",
                  description:
                    "Deployment capabilities across large facilities, with supply chain integration and consistent quality.",
                },
                {
                  title: "Lifecycle Management",
                  description:
                    "End-to-end support from procurement to waste stream management, ensuring circular outcomes.",
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
                "Reduced environmental impact and waste",
                "Compliance with evolving regulations",
                "Cost optimization through efficient sourcing",
                "Brand reputation enhancement",
                "Support for sustainability reporting",
                "Scalable deployment model",
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
                Explore Sustainable Packaging Options
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Connect with our packaging team to discuss solutions tailored to
                your operational needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact?type=packaging" size="lg">
                  Explore Options
                </Button>
                <Button
                  href="/contact?type=packaging-team"
                  variant="outline"
                  size="lg"
                >
                  Speak to Packaging Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





