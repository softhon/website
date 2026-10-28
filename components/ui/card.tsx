import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("flex min-w-0 flex-col rounded-card p-7", {
  variants: {
    tone: {
      light: "bg-surface",
      night: "bg-ink text-white",
    },
  },
  defaultVariants: { tone: "light" },
});

type CardProps = ComponentProps<"div"> & VariantProps<typeof cardVariants>;

export function Card({ tone, className, ...props }: CardProps) {
  return <div className={cn(cardVariants({ tone }), className)} {...props} />;
}
