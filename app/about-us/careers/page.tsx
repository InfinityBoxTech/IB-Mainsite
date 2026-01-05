import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join InfinityBox in building India's operations infrastructure. Explore career opportunities across operations, solutions, and support roles.",
};

export default function Careers() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Careers at InfinityBox
            </h1>
            <p className="text-xl text-neutral-600">
              Join us in building India's operations infrastructure—one
              integrated solution at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Our Culture
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              At InfinityBox, we're building something different: an integrated
              operations ecosystem that delivers measurable impact. We value
              system-led thinking, compliance-first execution, and a genuine
              commitment to sustainability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "System-led approach to problem-solving",
                "Compliance and quality focus",
                "Sustainability integration",
                "Scale and operational excellence",
                "Continuous learning and development",
                "Collaborative, cross-functional teams",
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
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              Open Roles
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Operations Roles
                </h3>
                <p className="text-neutral-600 mb-4">
                  We're always looking for talented operations professionals
                  across field operations, quality, and compliance.
                </p>
                <p className="text-sm text-neutral-500">
                  Specific roles will be listed here. Currently accepting
                  applications for general operations positions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Solutions & Innovation
                </h3>
                <p className="text-neutral-600 mb-4">
                  Join our solutions team to design and deploy integrated
                  systems across hygiene, packaging, kitchens, and manpower.
                </p>
                <p className="text-sm text-neutral-500">
                  Specific roles will be listed here. Currently accepting
                  applications for solutions and innovation positions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Support Functions
                </h3>
                <p className="text-neutral-600 mb-4">
                  Roles in sales, partnerships, customer success, and corporate
                  functions.
                </p>
                <p className="text-sm text-neutral-500">
                  Specific roles will be listed here. Currently accepting
                  applications for support function positions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-neutral-50 rounded-xl p-8 lg:p-12 text-center border border-neutral-200">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Interested in Joining InfinityBox?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Send us your details and we'll get back to you about
                opportunities that match your profile.
              </p>
              <Button href="/contact?type=careers" size="lg">
                Submit Careers Enquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





