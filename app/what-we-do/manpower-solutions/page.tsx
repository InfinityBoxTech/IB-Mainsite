import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { Users, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Manpower Solutions",
  description:
    "Trained, compliant workforce with SOPs, supervision, and planning. Reliable execution across multi-site operations.",
};

export default function ManpowerSolutions() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-emerald-600 mb-4">
              <Users size={48} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Manpower Solutions
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Trained, compliant workforce that delivers consistent execution
              across all your locations, backed by SOPs, supervision, and
              strategic planning.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Workforce Enablement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Rigorous training programs",
                "Standardized operating procedures (SOPs)",
                "Real-time supervision and support",
                "Performance monitoring and feedback",
                "Multi-site coordination",
                "Compliance-focused execution",
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
                  title: "Training & Certification",
                  description:
                    "Comprehensive training programs ensure every team member understands protocols, safety requirements, and quality standards.",
                },
                {
                  title: "SOP-Driven Execution",
                  description:
                    "Standardized operating procedures provide clear guidelines for consistent execution across all locations and shifts.",
                },
                {
                  title: "Supervision & Planning",
                  description:
                    "Real-time supervision and strategic planning ensure optimal resource allocation and proactive issue resolution.",
                },
                {
                  title: "Performance Monitoring",
                  description:
                    "Continuous monitoring and feedback loops drive improvement and maintain high standards of execution.",
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
                "Reliable execution across all locations",
                "Reduced compliance risks",
                "Lower operational overhead",
                "Scalable workforce model",
                "Improved quality consistency",
                "Enhanced operational efficiency",
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
                Build Your Reliable Workforce
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Discuss your workforce requirements and explore how InfinityBox
                can deliver trained, compliant teams for your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact?type=manpower" size="lg">
                  Discuss Requirements
                </Button>
                <Button
                  href="/contact?type=partnership"
                  variant="outline"
                  size="lg"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

