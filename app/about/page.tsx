import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactModal from "@/components/shared/ContactModal";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Softhon — who we are, how we work, and what we stand for.",
};

const values = [
  {
    title: "Excellence is the standard",
    description:
      "We don't ship work we're not proud of. Every line of code, every design decision, every interaction is held to the highest bar we know how to set.",
  },
  {
    title: "Clarity before speed",
    description:
      "Moving fast on the wrong thing is expensive. We invest in understanding the problem deeply before we start building — because the right direction matters more than raw pace.",
  },
  {
    title: "Ownership without ego",
    description:
      "We take full responsibility for what we build. And we're secure enough to change our minds when better ideas emerge — whether they come from us or from you.",
  },
  {
    title: "Long-term thinking",
    description:
      "We don't optimise for the end of the engagement. We make decisions that will still make sense a year after we've shipped — because our reputation is what happens after we leave.",
  },
];

const steps = [
  { n: "01", title: "Discovery", body: "We start with deep listening — understanding your goals, constraints, and users before writing a single line of code." },
  { n: "02", title: "Strategy & Design", body: "We shape the approach: architecture, design, and a delivery roadmap you can hold us to." },
  { n: "03", title: "Iterative Build", body: "Short sprints, regular demos, and constant feedback loops — you see progress from week one." },
  { n: "04", title: "Ship & Support", body: "We deploy with care and stay close after launch to iterate, fix, and scale." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue/40 text-blue text-xs font-semibold uppercase tracking-widest mb-6 bg-blue/10">
            About
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight max-w-3xl mb-6">
            We build software that matters.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Softhon is a software agency built for founders, product teams, and companies who care about quality. We exist to close the gap between great ideas and great software.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="A team built for the work that matters"
                description="Softhon brings together engineers, designers, and strategists who have built products across mobile, web, desktop, AI, and real-time communication systems."
              />
              <p className="mt-6 text-[#64748b] leading-relaxed">
                We&apos;re selective about who we work with — because we want to be fully invested in every engagement. When you work with Softhon, you get a team that treats your product like their own.
              </p>
              <p className="mt-4 text-[#64748b] leading-relaxed">
                Our clients range from early-stage founders moving fast to validate a market, to established SaaS companies shipping their next major feature. What they share is a commitment to building something excellent.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] p-10 flex flex-col gap-6">
              {[
                { label: "Founded", value: "2024" },
                { label: "Services", value: "6 specialisms" },
                { label: "Focus", value: "Quality-first delivery" },
                { label: "Clients", value: "Global" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-4 border-b border-[#e2e8f0] last:border-0 last:pb-0 first:pt-0">
                  <span className="text-sm text-[#64748b]">{label}</span>
                  <span className="font-bold text-navy">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="A process you can count on"
            description="Every engagement follows a clear, repeatable process — built to reduce risk and keep you informed at every step."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="p-6 rounded-2xl bg-white border border-[#e2e8f0]">
                <div className="text-4xl font-bold text-[#e2e8f0] mb-4">{s.n}</div>
                <h3 className="font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What we believe about great software"
            light
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-7 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-4">Work with us</h2>
          <p className="text-[#64748b] mb-8">
            If you&apos;re building something ambitious, let&apos;s talk about how we can help.
          </p>
          <ContactModal
            trigger={
              <button className="bg-blue hover:bg-blue/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-sm">
                Get in Touch
              </button>
            }
          />
        </div>
      </section>
    </>
  );
}
