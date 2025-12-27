"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  href,
  className = "",
  hover = true,
}: CardProps) {
  const baseStyles =
    "bg-white rounded-xl shadow-sm border border-neutral-200 p-6 sm:p-8 transition-all duration-300";
  const hoverStyles = hover
    ? "hover:shadow-lg hover:-translate-y-1 hover:border-neutral-300"
    : "";

  const content = (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        <motion.div
          whileHover={hover ? { y: -4 } : {}}
          transition={{ duration: 0.2 }}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return <motion.div>{content}</motion.div>;
}

