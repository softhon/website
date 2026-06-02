"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const differentiators = [
  {
    title: "Technical Excellence",
    description:
      "We hold our work to the highest standards — clean architecture, thorough testing, and code you'll be proud to maintain.",
  },
  {
    title: "Product-Minded",
    description:
      "We think beyond tickets. Every decision we make is measured against your business goals and user outcomes.",
  },
  {
    title: "Transparent Process",
    description:
      "No black boxes. You'll always know what we're building, why, and what's next — with regular demos and clear communication.",
  },
  {
    title: "Specialist Depth",
    description:
      "From native mobile to AI agents and real-time comms — we have genuine depth across every service we offer.",
  },
];

const technologies = [
  "React", "Next.js", "React Native", "Swift", "Kotlin", "Flutter",
  "Node.js", "Python", "TypeScript", "Go", "PostgreSQL", "Supabase",
  "AWS", "Vercel", "Docker", "Twilio", "WebRTC", "OpenAI",
  "LangChain", "Figma", "Electron", "Tauri",
];

const testimonials = [
  {
    quote:
      "Softhon delivered our platform ahead of schedule and exceeded every technical requirement. The quality of their work is exceptional.",
    name: "Sarah K.",
    title: "Co-founder & CEO",
    company: "TechStart",
  },
  {
    quote:
      "Working with Softhon felt like having a world-class product team embedded in ours. Strategic, fast, and deeply technical.",
    name: "Marcus T.",
    title: "Head of Product",
    company: "ScaleUp SaaS",
  },
  {
    quote:
      "Our voice communication system handles millions of minutes per month — built by Softhon and running flawlessly.",
    name: "Priya M.",
    title: "CTO",
    company: "CallFlow",
  },
];

const steps = [
  { n: "01", title: "Discovery", body: "We start with deep listening — understanding your goals, constraints, and users before writing a single line of code." },
  { n: "02", title: "Strategy & Design", body: "We shape the approach: architecture, design, and a delivery roadmap you can hold us to." },
  { n: "03", title: "Iterative Build", body: "Short sprints, regular demos, and constant feedback loops — you see progress from week one." },
  { n: "04", title: "Ship & Support", body: "We deploy with care and stay close after launch to iterate, fix, and scale." },
];

export default function ProofPoints() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const in1 = useInView(ref1, { once: true, margin: "-60px" });
  const in2 = useInView(ref2, { once: true, margin: "-60px" });
  const in3 = useInView(ref3, { once: true, margin: "-60px" });
  const in4 = useInView(ref4, { once: true, margin: "-60px" });

  return (
    <>
      {/* Why Softhon */}
      <section className="py-24 lg:py-32 bg-[#f8fafc]">
        <div ref={ref1} className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={in1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <SectionHeading
              eyebrow="Why Softhon"
              title="What you get when you choose us"
              description="We're not just a vendor. We're a technical partner who cares about your outcomes."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                animate={in1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 rounded-2xl bg-white border border-[#e2e8f0]"
              >
                <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue" />
                </div>
                <h3 className="font-bold text-navy mb-2">{d.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies marquee */}
      <section className="py-16 bg-white border-y border-[#e2e8f0] overflow-hidden">
        <div ref={ref2} className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={in2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#64748b] text-center"
          >
            Technologies & Platforms
          </motion.p>
        </div>
        <div className="flex">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#e2e8f0] text-sm font-medium text-[#64748b] bg-white shrink-0"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-navy">
        <div ref={ref3} className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={in3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <SectionHeading
              eyebrow="Client Testimonials"
              title="Trusted by builders and founders"
              light
              centered
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                animate={in3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.title}, {t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 lg:py-32 bg-white">
        <div ref={ref4} className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={in4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <SectionHeading
              eyebrow="How We Work"
              title="A process built for clarity and speed"
              description="Every project follows a proven structure — designed to reduce risk and deliver fast."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                animate={in4 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="text-4xl font-bold text-[#e2e8f0] mb-4">{s.n}</div>
                <h3 className="font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
