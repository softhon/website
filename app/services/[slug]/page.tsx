import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Monitor, Phone, Compass, Bot, Layers, Shield, ArrowLeft } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services";
import ContactModal from "@/components/shared/ContactModal";

interface Props {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Phone,
  Compass,
  Bot,
  Layers,
  Shield,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Monitor;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-xl bg-blue/20 flex items-center justify-center shrink-0 mt-1">
              <Icon className="w-6 h-6 text-blue" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                {service.name}
              </h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue mb-4">
              Overview
            </p>
            <p className="text-lg text-[#64748b] leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue mb-4">
            Our Process
          </p>
          <h2 className="text-3xl font-bold text-navy mb-12">
            How we deliver {service.shortName}
          </h2>

          <div className="space-y-6">
            {service.process.map((step, i) => (
              <div
                key={step.step}
                className="flex gap-6 p-7 rounded-2xl bg-white border border-[#e2e8f0] group hover:border-blue/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue/10 group-hover:bg-blue transition-colors flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue group-hover:text-white transition-colors">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1.5">{step.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to start your {service.shortName} project?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Tell us what you&apos;re building. We&apos;ll come back to you within one business day.
          </p>
          <ContactModal
            trigger={
              <button className="bg-blue hover:bg-blue/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-sm">
                Start a Project
              </button>
            }
          />
        </div>
      </section>
    </>
  );
}
