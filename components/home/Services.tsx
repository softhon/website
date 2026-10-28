import type { ComponentType, ReactNode, SVGProps } from "react";
import {
  CodeIcon,
  CodeSlashIcon,
  CompassIcon,
  GearIcon,
  LayoutIcon,
  LightbulbSimpleIcon,
  PulseIcon,
  RocketIcon,
} from "@/components/icons";
import { Card } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  description: ReactNode;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconTone: "dark" | "accent" | "light";
  night?: boolean;
  wide?: boolean;
};

const services: Service[] = [
  {
    title: "Product Strategy",
    description:
      "We identify problems worth solving, explore opportunities, and define what a product needs to do before we build it.",
    icon: CompassIcon,
    iconTone: "dark",
  },
  {
    title: "Product Design",
    description:
      "We shape ideas into clear, intuitive experiences. Every interaction, screen, and workflow serves a purpose.",
    icon: LayoutIcon,
    iconTone: "dark",
  },
  {
    title: "Software Engineering",
    description:
      "We build the systems that bring our products to life, choosing the right technologies for the problem at hand.",
    icon: CodeSlashIcon,
    iconTone: "accent",
  },
  {
    title: "Launch & Growth",
    description:
      "We take products from development to release, learn from real-world use, and improve them based on what we discover.",
    icon: RocketIcon,
    iconTone: "dark",
    wide: true,
  },
  {
    title: "Ongoing Operations",
    description: (
      <>
        We maintain, monitor, and evolve our products as needs change.{" "}
        <span className="text-white">Launching is a milestone, not the finish line.</span>
      </>
    ),
    icon: PulseIcon,
    iconTone: "light",
    night: true,
    wide: true,
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
            <span className="text-muted">From</span> idea{" "}
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
            </span>{" "}
            <span className="text-muted">to</span> operation.
          </>
        }
      />

      <div className="flex flex-wrap gap-4">
        {services.map(({ title, description, icon: Icon, iconTone, night, wide }, index) => (
          <Card
            key={title}
            tone={night ? "night" : "light"}
            className={cn("gap-14", wide ? "flex-[1_1_536px]" : "flex-[1_1_376px]")}
          >
            <div className="flex items-center justify-between">
              <IconTile tone={iconTone} size="lg">
                <Icon />
              </IconTile>
              <span className={cn("font-mono text-[11px]", night ? "text-on-night-muted" : "text-caption-light")}>
                /{String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              <h3 className="text-[24px] font-medium tracking-[-0.02em]">{title}</h3>
              <p
                className={cn(
                  "text-[15px] leading-[1.55]",
                  night ? "text-on-night-body" : "text-body",
                  wide && "max-w-[460px]",
                )}
              >
                {description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
