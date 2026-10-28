import { CheckIcon } from "@/components/icons";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconTile } from "@/components/ui/icon-tile";
import { Section } from "@/components/ui/section";

export function Philosophy() {
  return (
    <Section id="philosophy" variant="night" className="mt-18 flex flex-wrap gap-14">
      <div className="relative flex min-w-0 flex-[999_1_560px] flex-col gap-6">
        <Eyebrow tone="night">Our Philosophy</Eyebrow>
        <h2 className="text-[clamp(36px,5vw,68px)] leading-[1.04] font-medium tracking-[-0.04em]">
          Good software starts
          <br />
          <span className="text-on-night-heading">
            with a good reason
            <br />
            to build it.
          </span>
        </h2>
        <p className="max-w-[520px] text-[20px] leading-[1.45]">
          We believe the best products solve problems people actually have.
        </p>
      </div>

      <div className="relative flex min-w-0 flex-[1_1_360px] flex-col justify-end gap-5">
        <p className="text-base leading-[1.6] text-on-night-body">
          That means asking the right questions before writing code, making thoughtful decisions throughout
          development, and being willing to change direction when the evidence points somewhere else.
        </p>
        <p className="text-base leading-[1.6] text-on-night-body">
          We value clear thinking, purposeful design, sound engineering, and the discipline to keep improving what
          we build.
        </p>
        <div className="mt-3 flex items-center gap-3.5 rounded-[18px] border border-night-line bg-night-raised p-5">
          <IconTile tone="accent">
            <CheckIcon />
          </IconTile>
          <p className="text-base leading-[1.4]">We don&apos;t build just to ship. We build to make something useful.</p>
        </div>
      </div>
    </Section>
  );
}
