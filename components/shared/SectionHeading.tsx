import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-widest mb-3",
            light ? "text-blue-mid" : "text-blue"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl lg:text-4xl font-bold tracking-tight leading-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base lg:text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/70" : "text-[#64748b]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
