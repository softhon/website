import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
  titleClassName?: string;
  asideClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  aside,
  children,
  titleClassName,
  asideClassName,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="flex min-w-0 flex-[1_1_540px] flex-col gap-[18px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          className={cn(
            "text-[clamp(34px,4.4vw,60px)] leading-[1.06] font-medium tracking-[-0.04em]",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {children}
      </div>
      {aside && (
        <p className={cn("shrink grow-0 basis-[320px] text-base leading-[1.55] text-body", asideClassName)}>
          {aside}
        </p>
      )}
    </div>
  );
}
