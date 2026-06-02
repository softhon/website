"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Phone, Compass, Bot, Layers, Shield, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import SectionHeading from "@/components/shared/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Phone,
  Compass,
  Bot,
  Layers,
  Shield,
};

export default function ServicesSnapshot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-end software expertise"
            description="From product strategy to deployment — we cover every layer of the modern software stack."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Monitor;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full p-7 rounded-2xl border border-[#e2e8f0] hover:border-blue/40 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300 bg-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#eff6ff] group-hover:bg-blue transition-colors flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-navy text-base mb-2">{service.name}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed flex-1 mb-4">
                    {service.tagline}
                  </p>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-blue group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
