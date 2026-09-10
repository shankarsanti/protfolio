import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "primary" | "secondary" | "tertiary";
}

const backgroundClasses = {
  primary: "bg-bg-primary",
  secondary: "bg-bg-secondary",
  tertiary: "bg-bg-tertiary",
};

export function Section({
  id,
  children,
  className,
  background = "primary",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32",
        backgroundClasses[background],
        className,
      )}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div
      className={cn("mb-8 sm:mb-12 md:mb-16 max-w-3xl", alignClasses[align], className)}
    >
      {subtitle && (
        <span className="mb-1.5 sm:mb-2 inline-block text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider text-accent-blue">
          {subtitle}
        </span>
      )}
      <h2 className="mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
