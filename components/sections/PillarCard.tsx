import Card from "@/components/ui/Card";
import { ReactNode } from "react";

interface PillarCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href: string;
}

export default function PillarCard({
  title,
  description,
  icon,
  href,
}: PillarCardProps) {
  return (
    <Card href={href} className="h-full flex flex-col">
      {icon && <div className="mb-5 sm:mb-6 text-emerald-600">{icon}</div>}
      <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-3 sm:mb-4 leading-tight">{title}</h3>
      <p className="text-neutral-600 leading-relaxed flex-grow">{description}</p>
    </Card>
  );
}

