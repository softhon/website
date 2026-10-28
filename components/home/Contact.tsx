import { ButtonLink, LinkEmphasis } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";
import { CONTACT_EMAIL } from "@/lib/site";

export function Contact() {
  return (
    <Section
      id="contact"
      variant="panel"
      className="mt-5 flex flex-col items-center gap-7 px-[clamp(24px,5vw,64px)] py-[clamp(40px,7vw,104px)] text-center"
    >
      <Eyebrow className="self-center">Contact</Eyebrow>

      <h2 className="max-w-[900px] text-[clamp(36px,5.2vw,72px)] leading-[1.08] font-medium tracking-[-0.045em]">
        <span className="text-muted-strong">Interested in</span>{" "}
        <span
          aria-hidden="true"
          className="mx-[0.06em] inline-flex h-[0.66em] w-[1.3em] items-center justify-end rounded-full bg-accent p-[0.07em] align-middle shadow-[0_8px_20px_-6px_rgba(35,145,238,0.55),inset_0_2px_0_rgba(255,255,255,0.3)]"
        >
          <span className="size-[0.52em] rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]" />
        </span>{" "}
        what we&apos;re building?
      </h2>

      <p className="max-w-[560px] text-lg leading-[1.55] text-body">
        Follow our work as we develop and grow our software products. Have a question about one of our products
        or want to learn more about Softhon? We&apos;d like to hear from you.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <ButtonLink href={`mailto:${CONTACT_EMAIL}`} className="px-6">
          Get in touch
        </ButtonLink>
        <ButtonLink href="#products" variant="secondary">
          Follow our <LinkEmphasis>work</LinkEmphasis>
        </ButtonLink>
      </div>
    </Section>
  );
}
