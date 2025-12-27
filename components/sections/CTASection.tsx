import Button from "@/components/ui/Button";

interface CTASectionProps {
  headline: string;
  description?: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  variant?: "default" | "dark";
}

export default function CTASection({
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "default",
}: CTASectionProps) {
  const bgClass =
    variant === "dark"
      ? "bg-neutral-900 text-white"
      : "bg-neutral-50 text-neutral-900";

  return (
    <section className={`${bgClass} section-padding`}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">{headline}</h2>
          {description && (
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 sm:mb-10 leading-relaxed">{description}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button href={primaryCTA.href} size="lg" variant="primary">
              {primaryCTA.text}
            </Button>
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                size="lg"
                variant={variant === "dark" ? "outline" : "secondary"}
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

