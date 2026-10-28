import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";

export function Products() {
  return (
    <Section id="products" className="pt-24">
      <SectionHeader
        eyebrow="Products"
        title={
          <>
            <span className="text-muted">Software built to</span>
            <br />
            solve real problems.
          </>
        }
      >
        <p className="max-w-[560px] text-base leading-[1.55] text-body">
          We develop our own products to address problems we believe are worth solving. Each product starts with
          an idea, takes shape through engineering and design, and evolves through real-world use.
        </p>
      </SectionHeader>

      <ProductsShowcase />

      <p className="max-w-[620px] text-[18px] leading-[1.5] tracking-[-0.01em]">
        Our portfolio reflects what we believe software can do{" "}
        <span className="text-muted">when thoughtful problem-solving meets good engineering.</span>
      </p>
    </Section>
  );
}
