import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Updates",
  description:
    "Latest news, regulatory updates, and industry trends affecting operations infrastructure across India.",
};

const updates = [
  {
    title: "New Packaging Regulations: What You Need to Know",
    excerpt:
      "Overview of recent regulatory changes and their implications for operations infrastructure.",
    href: "/insights/industry-updates/packaging-regulations-2024",
    date: "2024-01-20",
  },
  {
    title: "Sustainability Reporting Requirements: A Guide",
    excerpt:
      "Understanding ESG reporting requirements and how to prepare your operations data.",
    href: "/insights/industry-updates/sustainability-reporting-guide",
    date: "2024-01-12",
  },
];

export default function IndustryUpdates() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Industry Updates
            </h1>
            <p className="text-xl text-neutral-600">
              Latest news, regulatory updates, and industry trends.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {updates.map((update, idx) => (
                <Card key={idx} href={update.href} className="h-full flex flex-col group">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {update.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow">{update.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">
                      {new Date(update.date).toLocaleDateString("en-IN", {
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

