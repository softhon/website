import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const eyebrowVariants = cva(
  "self-start rounded-md border px-2 py-1 font-mono text-[11px] tracking-[0.06em] uppercase",
  {
    variants: {
      tone: {
        light: "border-line text-ink-label",
        night: "border-night-edge text-[#bdbdbd]",
      },
    },
    defaultVariants: { tone: "light" },
  },
);

type EyebrowProps = ComponentProps<"span"> & VariantProps<typeof eyebrowVariants>;

/** Small uppercase label above a section heading, e.g. "Studio". */
export function Eyebrow({ tone, className, ...props }: EyebrowProps) {
  return <span className={cn(eyebrowVariants({ tone }), className)} {...props} />;
}
