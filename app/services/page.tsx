import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, Phone, Compass, Bot, Layers, Shield, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Softhon offers application development, voice systems, product strategy, agentic AI, product design, and maintenance services.",
};

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Phone,
  Compass,
  Bot,
  Layers,
  Shield,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue/40 text-blue text-xs font-semibold uppercase tracking-widest mb-6 bg-blue/10">
            Services
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight max-w-3xl mb-6">
            Everything you need to ship great software
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Six specialised service areas, one unified team. Whether you need a full product built from scratch or a specific capability bolted in — we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Monitor;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col p-8 rounded-2xl border border-[#e2e8f0] hover:border-blue/40 hover:shadow-xl hover:shadow-blue/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#eff6ff] group-hover:bg-blue transition-colors flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-blue group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-lg font-bold text-navy mb-3">{service.name}</h2>
                  <p className="text-sm text-[#64748b] leading-relaxed flex-1 mb-5">
                    {service.description}
                  </p>
                  <span className="flex items-center gap-2 text-sm font-semibold text-blue group-hover:gap-3 transition-all">
                    View service <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
