import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("mx-auto w-full max-w-[1280px]", {
  variants: {
    variant: {
      // Sits directly on the page background.
      plain: "flex flex-col gap-10 px-[clamp(8px,3vw,40px)] pt-18 pb-6",
      // Raised light panel with large rounded corners.
      panel: "rounded-section bg-surface p-[clamp(28px,5vw,64px)]",
      // Dark panel, e.g. the philosophy section.
      night: "relative overflow-hidden rounded-section bg-ink p-[clamp(28px,6vw,88px)] text-white",
    },
  },
  defaultVariants: { variant: "plain" },
});

type SectionProps = ComponentProps<"section"> & VariantProps<typeof sectionVariants>;

export function Section({ variant, className, ...props }: SectionProps) {
  return <section className={cn(sectionVariants({ variant }), className)} {...props} />;
}
