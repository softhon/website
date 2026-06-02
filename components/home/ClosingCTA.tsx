"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactModal from "@/components/shared/ContactModal";

export default function ClosingCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-blue text-xs font-semibold uppercase tracking-widest mb-6">
            Ready to Build?
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-navy tracking-tight leading-tight mb-5">
            Let&apos;s turn your idea into a product people love.
          </h2>

          <p className="text-lg text-[#64748b] max-w-xl mx-auto mb-10">
            Tell us what you&apos;re building. We&apos;ll help you get there — faster, better, and built to last.
          </p>

          <ContactModal
            trigger={
              <button className="inline-flex items-center gap-2 bg-blue hover:bg-blue/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-sm">
                Speak to Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
