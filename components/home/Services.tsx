import type { ComponentType, SVGProps } from "react";
import {
  CodeIcon,
  CodeSlashIcon,
  CompassIcon,
  GearIcon,
  LayoutIcon,
  LightbulbSimpleIcon,
  PulseIcon,
} from "@/components/icons";
import { Card } from "@/components/ui/card";
import { CollapsedSpace } from "@/components/ui/collapsed-space";
import { IconTile } from "@/components/ui/icon-tile";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  focus: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconTone: "dark" | "accent" | "light";
  night?: boolean;
};

const services: Service[] = [
  {
    title: "Product Strategy",
    focus: ["Research", "Validation", "Product direction"],
    icon: CompassIcon,
    iconTone: "dark",
  },
  {
    title: "Product Design",
    focus: ["User experience", "Interfaces", "Interaction design"],
    icon: LayoutIcon,
    iconTone: "dark",
  },
  {
    title: "Software Engineering",
    focus: ["Mobile apps", "Web applications", "Backend systems", "AI integrations"],
    icon: CodeSlashIcon,
    iconTone: "accent",
  },
  {
    title: "Product Operations",
    focus: ["Monitoring", "Maintenance", "Performance", "Iteration"],
    icon: PulseIcon,
    iconTone: "light",
    night: true,
  },
];

export function Services() {
  return (
    <Section>
      <SectionHeader
        eyebrow="What we do"
        titleClassName="leading-[1.1]"
        title={
          <>
            <span className="text-muted">From</span> idea
            <CollapsedSpace />
            <span className="mx-[0.08em] inline-flex gap-1 align-middle">
              <IconTile tone="light" size="inline" className="-rotate-8">
                <LightbulbSimpleIcon strokeWidth={2.2} />
              </IconTile>
              <IconTile tone="accent" size="inline">
                <CodeIcon strokeWidth={2.2} />
              </IconTile>
              <IconTile tone="dark" size="inline" className="rotate-8">
                <GearIcon strokeWidth={2.2} />
              </IconTile>
            </span>
            <CollapsedSpace />
            <span className="text-muted">to</span> operation.
          </>
        }
      />

      <div className="flex flex-wrap gap-4">
        {services.map(({ title, focus, icon: Icon, iconTone, night }, index) => (
          <Card key={title} tone={night ? "night" : "light"} className="flex-[1_1_536px] gap-13">
            <div className="flex items-center justify-between">
              <IconTile tone={iconTone} size="lg">
                <Icon />
              </IconTile>
              <span className={cn("font-mono text-[11px]", night ? "text-on-night-muted" : "text-caption-light")}>
                /{String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[24px] font-medium tracking-[-0.02em]">{title}</h3>
              <span
                className={cn(
                  "font-mono text-[11px] tracking-[0.06em] uppercase",
                  night ? "text-on-night-muted" : "text-caption",
                )}
              >
                Focus
              </span>
              <div className="flex flex-wrap gap-1.5">
                {focus.map((item) => (
                  <Tag key={item} tone={night ? "night" : "light"} className="px-3.5 py-[7px] text-[14px]">
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
