import type { ComponentType, SVGProps } from "react";
import { CodeIcon, LightbulbIcon, PenIcon, RefreshIcon, SearchIcon } from "@/components/icons";
import { ButtonLink, LinkEmphasis } from "@/components/ui/button-link";
import { CollapsedSpace } from "@/components/ui/collapsed-space";
import { IconTile } from "@/components/ui/icon-tile";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type LifecycleStep = {
  title: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  indented?: boolean;
  highlighted?: boolean;
};

const lifecycle: LifecycleStep[] = [
  { title: "Find the problem", label: "01 · Strategy", icon: SearchIcon },
  { title: "Shape the solution", label: "02 · Design", icon: PenIcon, indented: true },
  { title: "Build and launch", label: "03 · Engineering", icon: CodeIcon, highlighted: true },
  { title: "Learn and evolve", label: "04 · Operations", icon: RefreshIcon, indented: true },
];

export function Hero() {
  return (
    <Section
      id="top"
      variant="panel"
      className="flex flex-wrap items-center gap-12 shadow-panel"
    >
      <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-7">
        <span className="inline-flex items-center gap-2 self-start rounded-full border border-[#dadada] bg-surface-pill px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] text-ink-label uppercase">
          <span className="size-[7px] rounded-full bg-accent" />
          Software product studio
        </span>

        <h1 className="text-[clamp(44px,6.6vw,92px)] leading-[1.02] font-medium tracking-[-0.045em]">
          Ideas
          <CollapsedSpace />
          <IconTile
            tone="accent"
            size="inline"
            className="mx-[0.06em] size-[0.78em] -rotate-6 shadow-[0_10px_22px_-6px_rgba(35,145,238,0.55),inset_0_2px_0_rgba(255,255,255,0.35),inset_0_-3px_0_rgba(0,0,0,0.15)] [&>svg]:size-[56%]"
          >
            <LightbulbIcon />
          </IconTile>
          <CollapsedSpace />
          are
          <br />
          <span className="text-muted-strong">just the beginning.</span>
        </h1>

        <p className="max-w-[520px] text-lg leading-[1.55] text-body">
          We build software products that solve real problems. From concept to launch and beyond, we take
          each product from an idea to something people can use.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href="#products">Explore our work</ButtonLink>
          <ButtonLink href="#approach" variant="secondary">
            See how we <LinkEmphasis>work</LinkEmphasis>
          </ButtonLink>
        </div>
      </div>

      <div className="flex min-w-0 flex-[1_1_376px] flex-col gap-2.5 rounded-card bg-surface-sunken p-[18px]">
        <span className="px-1.5 py-1 font-mono text-[11px] tracking-[0.06em] text-caption uppercase">
          Idea → Operation
        </span>
        <ol aria-label="Product lifecycle" className="flex flex-col gap-2.5">
          {lifecycle.map(({ title, label, icon: Icon, indented, highlighted }) => (
            <li
              key={title}
              className={cn(
                "flex flex-col gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-hairline",
                indented && "ml-[18px]",
              )}
            >
              <div className="flex items-center gap-3.5">
                <IconTile tone={highlighted ? "accent" : "dark"}>
                  <Icon />
                </IconTile>
                <div className="flex min-w-0 flex-col gap-[3px]">
                  <span className="text-[15px] font-semibold">{title}</span>
                  <span className="font-mono text-[11px] text-caption-light">{label}</span>
                </div>
              </div>
              {highlighted && <ScreenSketch />}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function ScreenSketch() {
  return (
    <div
      aria-hidden="true"
      className="flex h-24 flex-col gap-1.5 rounded-[10px] border border-[#e6e6e6] bg-[#f3f3f3] p-2.5"
    >
      <span className="h-2 w-[40%] rounded bg-[#dadada]" />
      <span className="h-2 w-[72%] rounded bg-[#e4e4e4]" />
      <span className="h-2 w-[58%] rounded bg-[#e4e4e4]" />
      <span className="mt-auto h-[22px] w-[34%] rounded-md bg-ink" />
    </div>
  );
}
