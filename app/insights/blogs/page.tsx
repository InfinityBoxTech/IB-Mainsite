import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Insights, best practices, and industry updates on hygiene, packaging, kitchen operations, and workforce management.",
};

const blogPosts = [
  {
    title: "How to Standardize Hygiene Across Multi-Site Operations",
    excerpt:
      "Practical strategies for maintaining consistent hygiene standards across multiple locations, with system-led approaches and compliance frameworks.",
    href: "/insights/blogs/standardize-hygiene-multi-site",
    date: "2024-01-15",
    category: "Hygiene",
  },
  {
    title: "Packaging Compliance in India: Practical Pathways",
    excerpt:
      "Navigating India's evolving packaging regulations with actionable steps for compliance and sustainable alternatives.",
    href: "/insights/blogs/packaging-compliance-india",
    date: "2024-01-10",
    category: "Packaging",
  },
  {
    title: "Commercial Kitchen Optimization: Reducing Downtime",
    excerpt:
      "Strategies for minimizing kitchen downtime through preventive maintenance, workflow optimization, and efficient operations.",
    href: "/insights/blogs/kitchen-optimization-downtime",
    date: "2024-01-05",
    category: "Kitchen Solutions",
  },
  {
    title: "Manpower Reliability: SOPs, Training and Audit Readiness",
    excerpt:
      "Building reliable workforce operations through standardized procedures, comprehensive training, and audit-ready documentation.",
    href: "/insights/blogs/manpower-reliability-sops",
    date: "2023-12-28",
    category: "Manpower",
  },
  {
    title: "Hygiene and Sustainability: Moving from Claims to Systems",
    excerpt:
      "How to build genuine sustainability into hygiene operations, with measurable outcomes and circular thinking.",
    href: "/insights/blogs/hygiene-sustainability-systems",
    date: "2023-12-20",
    category: "Sustainability",
  },
];

export default function Blogs() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Insights & Blog
            </h1>
            <p className="text-xl text-neutral-600">
              Best practices, industry updates, and actionable insights on
              operations infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogPosts.map((post, idx) => (
                <Card key={idx} href={post.href} className="h-full flex flex-col group">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <div className="inline-flex items-center text-emerald-600 font-medium group-hover:underline">
                      Read More
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
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

