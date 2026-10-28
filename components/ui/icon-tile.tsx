import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconTileVariants = cva("inline-flex flex-none items-center justify-center", {
  variants: {
    tone: {
      dark: "bg-linear-to-b from-[#3a3a3a] to-[#0e0e0e] text-white",
      accent: "bg-accent text-white",
      light: "bg-white text-ink",
    },
    size: {
      md: "size-10 rounded-xl [&>svg]:size-[18px]",
      lg: "size-12 rounded-[14px] [&>svg]:size-[22px]",
      inline: "size-[0.8em] rounded-[0.22em] align-middle [&>svg]:size-[55%]",
    },
  },
  compoundVariants: [
    { tone: "dark", size: "md", className: "shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]" },
    {
      tone: "dark",
      size: "lg",
      className: "shadow-[0_8px_16px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]",
    },
    {
      tone: "dark",
      size: "inline",
      className: "shadow-[0_6px_14px_-4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]",
    },
    { tone: "accent", size: "md", className: "shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]" },
    {
      tone: "accent",
      size: "lg",
      className: "shadow-[0_8px_16px_-8px_rgba(35,145,238,0.6),inset_0_1px_0_rgba(255,255,255,0.3)]",
    },
    {
      tone: "accent",
      size: "inline",
      className: "shadow-[0_6px_14px_-4px_rgba(35,145,238,0.5),inset_0_2px_0_rgba(255,255,255,0.3)]",
    },
    { tone: "light", size: ["md", "lg"], className: "shadow-[inset_0_-2px_0_rgba(0,0,0,0.08)]" },
    {
      tone: "light",
      size: "inline",
      className: "shadow-[0_6px_14px_-4px_rgba(0,0,0,0.2),inset_0_-2px_0_rgba(0,0,0,0.06)]",
    },
  ],
  defaultVariants: { tone: "dark", size: "md" },
});

type IconTileProps = ComponentProps<"span"> & VariantProps<typeof iconTileVariants>;

export function IconTile({ tone, size, className, ...props }: IconTileProps) {
  return <span className={cn(iconTileVariants({ tone, size }), className)} {...props} />;
}
