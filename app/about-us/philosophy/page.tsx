import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description:
    "Clean That Comes Full Circle—InfinityBox's approach to integrated, sustainable operations that create measurable impact.",
};

export default function Philosophy() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Our Philosophy: Clean That Comes Full Circle
            </h1>
            <p className="text-xl text-neutral-600">
              Creating closed-loop systems where inputs are optimized, waste is
              minimized, and compliance is built into every process.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  The Circular Approach
                </h2>
                <p className="text-neutral-700 mb-4">
                  Traditional operations infrastructure treats each component in
                  isolation: hygiene separate from packaging, kitchens separate
                  from workforce. This fragmentation creates waste, inefficiency,
                  and accountability gaps.
                </p>
                <p className="text-neutral-700">
                  InfinityBox's philosophy centers on integration and circularity.
                  We design systems where each element connects to the next,
                  creating closed loops that optimize resources, reduce waste,
                  and deliver measurable outcomes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Four Pillars, One System
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      pillar: "Inputs",
                      description:
                        "Right chemical, right dose, right process. We start with precision—ensuring every input is optimized for effectiveness, efficiency, and safety.",
                    },
                    {
                      pillar: "Optimization",
                      description:
                        "System-led efficiency and waste reduction. Technology and protocols work together to minimize resource consumption while maximizing outcomes.",
                    },
                    {
                      pillar: "Reuse",
                      description:
                        "Circular packaging and resource recovery. Where possible, we design for reuse and recovery, closing the loop on materials and resources.",
                    },
                    {
                      pillar: "Compliance",
                      description:
                        "Audit-ready documentation and measurable impact. Every process is designed with compliance in mind, making audits straightforward and outcomes transparent.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-neutral-50 rounded-lg p-6 border border-neutral-200"
                    >
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {item.pillar}
                      </h3>
                      <p className="text-neutral-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Built for Scale, Designed for Impact
                </h2>
                <p className="text-neutral-700 mb-4">
                  Our philosophy isn't theoretical—it's operational. Every
                  solution we deploy is designed to scale across locations,
                  maintain consistency, and deliver measurable impact.
                </p>
                <p className="text-neutral-700">
                  We measure success not just in compliance rates or cost
                  savings, but in the broader impact: reduced waste, improved
                  safety, enhanced sustainability, and reliable execution that
                  organizations can count on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





