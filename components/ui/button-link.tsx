import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const buttonLinkVariants = cva("inline-flex items-center no-underline", {
  variants: {
    variant: {
      primary:
        "gap-2.5 rounded-button bg-ink px-[22px] py-[15px] text-[15px] font-medium text-white shadow-button [&>svg]:size-4",
      secondary:
        "gap-2 rounded-button border border-line-soft bg-white px-[22px] py-[15px] text-[15px] text-body",
      inverse: "gap-2 rounded-xl bg-white px-[18px] py-3 text-[14px] font-medium text-ink [&>svg]:size-3.5",
    },
  },
  defaultVariants: { variant: "primary" },
});

type ButtonLinkProps = ComponentProps<"a"> & VariantProps<typeof buttonLinkVariants>;

export function ButtonLink({ variant, className, children, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(buttonLinkVariants({ variant }), className)} {...props}>
      {children}
      {variant !== "secondary" && <ArrowRightIcon />}
    </a>
  );
}

export function LinkEmphasis(props: ComponentProps<"span">) {
  return <span className="font-semibold text-ink" {...props} />;
}
