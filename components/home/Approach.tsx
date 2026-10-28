import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Find the problem.",
    description: "We start by understanding the problem, who experiences it, and why it matters.",
  },
  {
    title: "Shape the solution.",
    description:
      "We explore possible approaches and define a product that addresses the problem without adding unnecessary complexity.",
  },
  {
    title: "Build and launch.",
    description:
      "We turn the product into working software, test our assumptions, and release it into the real world.",
  },
  {
    title: "Learn and evolve.",
    description:
      "We pay attention to how the product performs and how people use it. We use what we learn to guide future improvements.",
  },
];

export function Approach() {
  return (
    <Section id="approach" variant="panel" className="mt-18 flex flex-col gap-14">
      <SectionHeader
        eyebrow="Approach"
        title={
          <>
            Build with purpose.
            <br />
            <span className="text-muted-strong">Ship with intent.</span>
            <br />
            Keep improving.
          </>
        }
        aside="We take a practical approach to software product development."
      />

      <ol className="flex flex-wrap gap-4">
        {steps.map(({ title, description }, index) => {
          const last = index === steps.length - 1;
          return (
            <li
              key={title}
              className={cn(
                "flex min-w-0 flex-[1_1_240px] flex-col gap-[18px]",
                last ? "border-t-2 border-ink pt-[19px]" : "border-t border-line-rule pt-5",
              )}
            >
              <span className="font-mono text-[13px] font-medium">{String(index + 1).padStart(2, "0")}.</span>
              <h3 className="text-[22px] font-medium tracking-[-0.02em]">{title}</h3>
              <p className="text-[15px] leading-[1.55] text-body">{description}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
