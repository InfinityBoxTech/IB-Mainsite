import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real outcomes from real deployments. Case studies showcasing InfinityBox's impact across industries and solutions.",
};

const caseStudies = [
  {
    title: "Multi-Site Hospitality Chain",
    industry: "Hospitality",
    solution: "Hygiene Solutions",
    description:
      "Standardized hygiene protocols across 25 locations, achieving 100% compliance and reducing operational costs by 22%.",
    results: [
      "100% compliance rate across all locations",
      "22% reduction in operational costs",
      "Standardized protocols deployed",
    ],
    href: "/insights/case-studies/multi-site-hospitality",
  },
  {
    title: "Corporate IT Park",
    industry: "Corporate",
    solution: "Integrated Solutions",
    description:
      "Deployed integrated solutions across 2M sq ft, reducing waste by 35% and achieving LEED certification support.",
    results: [
      "35% waste reduction",
      "LEED certification support",
      "2M sq ft coverage",
    ],
    href: "/insights/case-studies/corporate-it-park",
  },
];

export default function CaseStudies() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-neutral-600">
              Real outcomes from real deployments across India.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {caseStudies.map((study, idx) => (
                <Card key={idx} href={study.href} className="h-full flex flex-col group">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide px-3 py-1 bg-emerald-600/10 rounded">
                      {study.industry}
                    </span>
                    <span className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wide px-3 py-1 bg-[var(--color-secondary)]/10 rounded">
                      {study.solution}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{study.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-2">
                      Key Results:
                    </h4>
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li
                          key={i}
                          className="text-sm text-neutral-600 flex items-start"
                        >
                          <span className="text-[var(--color-secondary)] mr-2">
                            ✓
                          </span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="inline-flex items-center text-emerald-600 font-medium group-hover:underline mt-auto">
                    Read Full Case Study
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

