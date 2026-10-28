import { TargetIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";

const activities = ["Explore ideas", "Test assumptions", "Design solutions"];

export function Studio() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="Studio"
        titleClassName="leading-[1.04]"
        title={
          <>
            <span className="text-muted">An independent studio.</span>
            <br />
            A product-first mindset.
          </>
        }
        aside="Softhon is a software product studio focused on building and operating its own digital products."
        asideClassName="basis-[360px]"
      />

      <div className="flex flex-wrap gap-4">
        <Card className="flex-[1_1_356px] justify-between gap-10">
          <IconTile size="lg">
            <TargetIcon />
          </IconTile>
          <p className="text-[20px] leading-[1.4] tracking-[-0.01em]">
            We believe good software starts with understanding a problem,{" "}
            <span className="text-muted">not choosing a technology.</span>
          </p>
        </Card>

        <Card className="flex-[1_1_356px] justify-between gap-10">
          <div className="flex flex-wrap gap-1.5">
            {activities.map((activity) => (
              <Tag key={activity}>{activity}</Tag>
            ))}
            <Tag tone="dark">Build products</Tag>
          </div>
          <p className="text-base leading-[1.55] text-body">
            We explore ideas, test assumptions, design solutions, and build products that address real needs.
            Our work doesn&apos;t end at launch. We stay involved, learn from how people use our products, and
            make improvements over time.
          </p>
        </Card>

        <Card tone="night" className="relative flex-[1_1_356px] justify-between gap-10 overflow-hidden">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="#5c5c5c" aria-hidden="true">
            <path d="M0 32V18C0 8 5 2 15 0l2 4C11 6 8 10 8 15h8v17H0zm23 0V18C23 8 28 2 38 0l2 4c-6 2-9 6-9 11h8v17H23z" />
          </svg>
          <svg
            width="220"
            height="140"
            viewBox="0 0 220 140"
            fill="none"
            stroke="#2a2a2a"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="absolute -right-5 bottom-[70px]"
          >
            <path d="M10 130l60-60 40 30 90-90M150 10h50v50" />
          </svg>
          <p className="relative text-[22px] leading-[1.35] tracking-[-0.015em]">
            We own the process from the first idea to the product&apos;s ongoing development.
          </p>
        </Card>
      </div>
    </Section>
  );
}
