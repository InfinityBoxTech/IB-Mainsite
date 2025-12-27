"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface ContactFormProps {
  formType?: "sales" | "partnership" | "careers";
}

export default function ContactForm({ formType = "sales" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    honeypot: "", // Spam protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      return; // Bot detected
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          honeypot: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formLabels = {
    sales: {
      title: "Get in Touch",
      description: "Tell us about your operations needs and we'll connect you with the right team.",
    },
    partnership: {
      title: "Partner With Us",
      description: "Interested in partnering with InfinityBox? Let's discuss opportunities.",
    },
    careers: {
      title: "Careers Enquiry",
      description: "Share your details and we'll get back to you about opportunities.",
    },
  };

  const labels = formLabels[formType];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 mb-2">
          {labels.title}
        </h2>
        <p className="text-neutral-600">{labels.description}</p>
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">
            Thank you! We've received your message and will get back to you
            soon.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">
            Something went wrong. Please try again or contact us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
          />
        </div>

        {formType !== "careers" && (
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
          </div>
        )}

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
          />
        </div>

        <div>
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>

      <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
        <h3 className="font-semibold text-neutral-900 mb-2">
          What happens next?
        </h3>
        <ul className="text-sm text-neutral-600 space-y-1">
          <li>• We'll review your enquiry within 24 hours</li>
          <li>• A team member will reach out to discuss your needs</li>
          <li>• We'll schedule a consultation if there's a fit</li>
        </ul>
      </div>
    </div>
  );
}

