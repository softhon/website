import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagVariants = cva("rounded-full px-3 py-1.5 text-[13px]", {
  variants: {
    tone: {
      light: "border border-line-faint bg-white text-ink-soft",
      dark: "bg-ink text-white",
      night: "border border-night-line bg-night-raised text-white",
    },
  },
  defaultVariants: { tone: "light" },
});

type TagProps = ComponentProps<"span"> & VariantProps<typeof tagVariants>;

export function Tag({ tone, className, ...props }: TagProps) {
  return <span className={cn(tagVariants({ tone }), className)} {...props} />;
}
