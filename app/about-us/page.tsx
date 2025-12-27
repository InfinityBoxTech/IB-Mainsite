import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "InfinityBox: Built from operational challenges, delivering integrated solutions across hygiene, packaging, kitchens, and manpower across India.",
};

export default function AboutUs() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              About InfinityBox
            </h1>
            <p className="text-xl text-neutral-600">
              Built from operational challenges. Delivering integrated
              solutions across India.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                InfinityBox was born from recognizing a fundamental gap in
                India's operations infrastructure: the disconnect between hygiene,
                packaging, kitchen management, and workforce enablement. Too
                often, organizations juggle multiple vendors, inconsistent
                standards, and fragmented accountability.
              </p>
              <p>
                We set out to build an integrated ecosystem—one accountable
                partner that could deliver across all four pillars, with
                measurable outcomes, compliance-first execution, and a genuine
                commitment to sustainability.
              </p>
              <p>
                Today, we operate across 50+ cities, serving enterprises,
                institutions, and facilities that demand reliability, scale, and
                measurable impact. Our approach is system-led, audit-ready, and
                built for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "System-Led",
                  description:
                    "Protocols, processes, and technology that ensure consistency and scalability.",
                },
                {
                  title: "Compliance-First",
                  description:
                    "Audit-ready documentation and execution that meets regulatory requirements.",
                },
                {
                  title: "Measurable Impact",
                  description:
                    "Data-driven outcomes that demonstrate value and drive continuous improvement.",
                },
                {
                  title: "Sustainability-Integrated",
                  description:
                    "Circular thinking built into every solution, not added as an afterthought.",
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
              Learn More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/about-us/philosophy"
                className="bg-neutral-50 rounded-lg p-6 border border-neutral-200 hover:border-emerald-600 transition-colors"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Our Philosophy
                </h3>
                <p className="text-neutral-600">
                  Clean That Comes Full Circle—our approach to integrated,
                  sustainable operations.
                </p>
              </Link>
              <Link
                href="/about-us/sustainability"
                className="bg-neutral-50 rounded-lg p-6 border border-neutral-200 hover:border-emerald-600 transition-colors"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Sustainability Commitment
                </h3>
                <p className="text-neutral-600">
                  Action-led sustainability with measurable impact across all
                  operations.
                </p>
              </Link>
              <Link
                href="/about-us/leadership"
                className="bg-neutral-50 rounded-lg p-6 border border-neutral-200 hover:border-emerald-600 transition-colors"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Leadership
                </h3>
                <p className="text-neutral-600">
                  Meet the team driving InfinityBox's mission across India.
                </p>
              </Link>
              <Link
                href="/about-us/careers"
                className="bg-neutral-50 rounded-lg p-6 border border-neutral-200 hover:border-emerald-600 transition-colors"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Careers
                </h3>
                <p className="text-neutral-600">
                  Join us in building India's operations infrastructure.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Partner With Us
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Ready to transform your operations? Get in touch to discuss how
              InfinityBox can deliver integrated solutions for your organization.
            </p>
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

