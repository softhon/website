import Image from "next/image";
import { LongArrowRightIcon } from "@/components/icons";
import { LinkEmphasis } from "@/components/ui/button-link";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Products", href: "#products" },
  { label: "Philosophy", href: "#philosophy" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-4 px-2 py-3">
      <a href="#top" className="flex items-center gap-2.5 no-underline">
        <Image
          src="/softhon-icon.png"
          alt=""
          width={38}
          height={38}
          loading="eager"
          className="block rounded-[11px] shadow-[0_6px_14px_-4px_rgba(35,145,238,0.55)]"
        />
        <span className="text-[19px] font-semibold tracking-[-0.02em]">Softhon</span>
      </a>

      <nav
        aria-label="Main"
        className="flex flex-wrap items-center gap-1.5 rounded-full bg-surface p-[5px] shadow-hairline"
      >
        {navLinks.map(({ label, href }) => (
          <a key={href} href={href} className="rounded-full px-4 py-2.5 text-[14px] text-ink-soft no-underline">
            {label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="flex items-center gap-2 px-1 py-2.5 text-[14px] text-body no-underline">
        Get in <LinkEmphasis>touch</LinkEmphasis>
        <LongArrowRightIcon className="h-3 w-[22px] text-ink" />
      </a>
    </header>
  );
}
