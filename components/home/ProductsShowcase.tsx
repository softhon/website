"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, GridIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { IconTile } from "@/components/ui/icon-tile";

const products = [
  {
    name: "Product 01",
    description: "In development. Details to follow at launch.",
    preview: "list",
  },
  {
    name: "Product 02",
    description: "In early development. More to share soon.",
    preview: "grid",
  },
] as const;

export function ProductsShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2.5 rounded-card bg-surface p-2.5">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="products-panel"
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-4 rounded-2xl bg-white py-3.5 pr-3.5 pl-5 text-left shadow-hairline"
      >
        <span className="flex min-w-0 items-center gap-3.5">
          <IconTile tone="accent">
            <GridIcon />
          </IconTile>
          <span className="flex min-w-0 flex-col gap-0.5">
            <span className="text-[18px] font-medium tracking-[-0.02em]">Explore our products</span>
            <span className="font-mono text-[11px] text-caption">In development · first releases coming soon</span>
          </span>
        </span>
        <span className="inline-flex size-10 flex-none items-center justify-center rounded-full bg-ink text-white">
          {open ? <ChevronUpIcon className="size-4" /> : <ChevronDownIcon className="size-4" />}
        </span>
      </button>

      <div id="products-panel" hidden={!open} className="flex flex-wrap gap-2.5">
        {products.map(({ name, description, preview }) => (
          <div key={name} className="flex min-w-0 flex-[1_1_344px] flex-col gap-3.5 rounded-2xl bg-white p-3">
            <ProductPreview layout={preview} />
            <div className="flex flex-col gap-1.5 px-2 pt-0.5 pb-2">
              <span className="self-start rounded-full bg-[#efefef] px-2 py-1 font-mono text-[10px] tracking-[0.06em] text-ink-label uppercase">
                Coming soon
              </span>
              <span className="text-[18px] font-medium tracking-[-0.02em]">{name}</span>
              <span className="text-[14px] leading-[1.5] text-body">{description}</span>
            </div>
          </div>
        ))}

        <div className="flex min-w-0 flex-[1_1_368px] flex-col justify-between gap-8 rounded-2xl bg-ink p-6 text-white">
          <span className="font-mono text-[11px] tracking-[0.06em] text-on-night-muted uppercase">
            Stay in the loop
          </span>
          <p className="text-[20px] leading-[1.35] tracking-[-0.015em]">
            Our first products are in development. Follow our work to see them as they launch.
          </p>
          <ButtonLink href="#contact" variant="inverse" className="self-start">
            Get in touch
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function ProductPreview({ layout }: { layout: "list" | "grid" }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-[220px] items-center justify-center rounded-xl bg-[repeating-linear-gradient(135deg,#ededed_0_12px,#f4f4f4_12px_24px)]"
    >
      <div className="flex h-[150px] w-[72%] flex-col gap-2.5 rounded-[10px] bg-white p-3 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)]">
        <div className="flex gap-1">
          <span className="size-1.5 rounded-full bg-[#dadada]" />
          <span className="size-1.5 rounded-full bg-[#dadada]" />
          <span className="size-1.5 rounded-full bg-[#dadada]" />
        </div>
        {layout === "list" ? (
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="h-2 w-[40%] rounded bg-[#dadada]" />
            <span className="h-2 w-[72%] rounded bg-[#e4e4e4]" />
            <span className="h-2 w-[58%] rounded bg-[#e4e4e4]" />
            <span className="mt-auto h-[22px] w-[34%] rounded-md bg-ink" />
          </div>
        ) : (
          <div className="grid flex-1 grid-cols-3 gap-1.5">
            <span className="col-span-2 rounded-md bg-accent" />
            <span className="rounded-md bg-[#e4e4e4]" />
            <span className="rounded-md bg-[#e4e4e4]" />
            <span className="col-span-2 rounded-md bg-[#f0f0f0]" />
          </div>
        )}
      </div>
    </div>
  );
}
