import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        primary:
          "border-transparent bg-badge-primary text-badge-primary",
        success:
          "border-transparent bg-badge-success text-badge-success",
        warning:
          "border-transparent bg-badge-warning text-badge-warning",
        error:
          "border-transparent bg-badge-error text-badge-error",
        active:
          "border-transparent bg-badge-active text-badge-active",
        inactive:
          "border-transparent bg-badge-inactive text-badge-inactive",
        inperson:
          "border-transparent bg-badge-inperson text-badge-inperson",
        online:
          "border-transparent bg-badge-online text-badge-online",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        base: "px-2.5 py-0.5 text-xs sm:text-sm",
        md: "px-3 py-1 text-sm",
        lg: "px-3.5 py-1.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
