import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-4 px-2 pt-6 pb-2">
      <span className="flex items-center gap-2.5">
        <Image src="/softhon-icon.png" alt="" width={26} height={26} className="block rounded-lg" />
        <span className="text-[15px] font-semibold tracking-[-0.02em]">Softhon</span>
      </span>
      <span className="font-mono text-[11px] text-caption">
        © {new Date().getFullYear()} Softhon · Software product studio
      </span>
    </footer>
  );
}
