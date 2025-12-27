"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ContactForm from "@/components/forms/ContactForm";

function ContactContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  let formType: "sales" | "partnership" | "careers" = "sales";
  if (type === "partnership" || type === "partner") {
    formType = "partnership";
  } else if (type === "careers" || type === "career") {
    formType = "careers";
  }

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Get in touch to discuss how InfinityBox can transform your
              operations infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Ways to Reach Us
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Sales Enquiries
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Discuss solutions for your operations needs
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Partnerships
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Explore partnership opportunities
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Careers
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Join the InfinityBox team
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <ContactForm formType={formType} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="pt-20 min-h-screen flex items-center justify-center">Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}

