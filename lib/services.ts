export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string;
  process: ServiceProcess[];
}

export const services: Service[] = [
  {
    slug: "application-development",
    name: "Application Development",
    shortName: "App Dev",
    tagline: "Web, mobile, and desktop — built to perform.",
    description:
      "We build high-quality applications across every platform. From responsive web apps to native iOS and Android, cross-platform mobile solutions, and powerful desktop software — we deliver products that are fast, reliable, and built to scale.",
    icon: "Monitor",
    process: [
      { step: 1, title: "Discovery & Scoping", description: "We map your requirements, define success metrics, and scope the project into a clear delivery plan." },
      { step: 2, title: "Architecture & Design", description: "We design the system architecture and UI/UX to ensure scalability, performance, and a great user experience." },
      { step: 3, title: "Iterative Development", description: "We build in short sprints with regular demos so you see progress and can give feedback continuously." },
      { step: 4, title: "QA & Testing", description: "Automated and manual testing across devices and edge cases before anything ships." },
      { step: 5, title: "Launch & Handover", description: "We deploy to production, provide documentation, and ensure a smooth knowledge transfer." },
    ],
  },
  {
    slug: "voice-and-communication-systems",
    name: "Voice & Communication Systems",
    shortName: "Voice & Comms",
    tagline: "Real-time communication infrastructure, engineered for reliability.",
    description:
      "We design and build voice, video, and messaging systems — from VoIP telephony and WebRTC solutions to custom call-centre platforms and real-time collaboration tools. Communication is critical infrastructure; we build it to be dependable at scale.",
    icon: "Phone",
    process: [
      { step: 1, title: "Requirements Analysis", description: "We understand your communication use case, scale, latency requirements, and regulatory constraints." },
      { step: 2, title: "Protocol & Stack Selection", description: "We select the right protocols (SIP, WebRTC, XMPP) and infrastructure (Twilio, FreeSWITCH, Asterisk, custom) for your needs." },
      { step: 3, title: "System Design", description: "Architecture for reliability — load balancing, failover, media server design, and security." },
      { step: 4, title: "Development & Integration", description: "We build the system and integrate with your existing products, CRMs, or third-party services." },
      { step: 5, title: "Load Testing & Go-Live", description: "Stress-tested under realistic traffic before launch, with real-time monitoring from day one." },
    ],
  },
  {
    slug: "product-strategy",
    name: "Product Strategy",
    shortName: "Strategy",
    tagline: "Clarity before code. Direction before delivery.",
    description:
      "Before building, you need to know what to build and why. We help founders and product teams validate ideas, define roadmaps, prioritise ruthlessly, and align technical decisions with business goals — so every development dollar is well spent.",
    icon: "Compass",
    process: [
      { step: 1, title: "Discovery Workshops", description: "We run structured sessions to understand your goals, constraints, users, and competitive landscape." },
      { step: 2, title: "Problem Definition", description: "We sharpen the problem statement and identify the highest-leverage opportunities." },
      { step: 3, title: "Product Roadmap", description: "A prioritised, time-boxed roadmap with clear milestones and success criteria." },
      { step: 4, title: "Technical Strategy", description: "We align architecture and tech choices with your business strategy and team capabilities." },
      { step: 5, title: "Ongoing Advisory", description: "We stay involved as a strategic partner — reviewing decisions, unblocking teams, and keeping the roadmap honest." },
    ],
  },
  {
    slug: "agentic-ai-solutions",
    name: "Agentic AI Solutions",
    shortName: "AI Solutions",
    tagline: "AI that doesn't just respond — it acts.",
    description:
      "We build AI-powered agents and automation systems that take meaningful action on your behalf. From intelligent workflows and autonomous assistants to LLM-integrated products and custom AI tooling — we turn AI capability into real business leverage.",
    icon: "Bot",
    process: [
      { step: 1, title: "Use Case Definition", description: "We identify the highest-value AI opportunities in your workflow and define clear success criteria." },
      { step: 2, title: "Model & Stack Selection", description: "We select the right foundation models, frameworks (LangChain, LlamaIndex, custom), and infrastructure for your use case." },
      { step: 3, title: "Prototype & Evaluate", description: "Rapid prototyping with rigorous evaluation to ensure the agent behaves reliably before scaling." },
      { step: 4, title: "Production Build", description: "We build the full system — tool integrations, memory, orchestration, and safety guardrails." },
      { step: 5, title: "Monitoring & Iteration", description: "AI systems need continuous monitoring. We set up observability and iterate based on real usage." },
    ],
  },
  {
    slug: "product-design-and-interactive-motion",
    name: "Product Design & Interactive Motion",
    shortName: "Design & Motion",
    tagline: "Interfaces that feel as good as they look.",
    description:
      "We design product interfaces that are not just beautiful but purposeful — clear, intuitive, and delightful to use. We bring products to life with interactive motion design that communicates hierarchy, guides attention, and builds emotional connection with users.",
    icon: "Layers",
    process: [
      { step: 1, title: "Research & Audit", description: "We study your users, audit existing interfaces, and identify design opportunities and friction points." },
      { step: 2, title: "Information Architecture", description: "We structure content and flows before touching visuals — navigation, hierarchy, and user journeys first." },
      { step: 3, title: "Visual Design", description: "High-fidelity designs with a cohesive design system — components, typography, colour, and spacing." },
      { step: 4, title: "Motion & Interaction", description: "We layer in motion design — transitions, micro-interactions, and animations that make the product feel alive." },
      { step: 5, title: "Design Handover", description: "Developer-ready specs, component documentation, and design system files for smooth implementation." },
    ],
  },
  {
    slug: "maintenance-and-support",
    name: "Maintenance & Support",
    shortName: "Maintenance",
    tagline: "Your product, always running — always improving.",
    description:
      "Shipping is the beginning, not the end. We offer ongoing maintenance and support plans to keep your product secure, performant, and up-to-date. From bug fixes and dependency updates to feature iterations and proactive monitoring — we keep things running.",
    icon: "Shield",
    process: [
      { step: 1, title: "Onboarding & Audit", description: "We review your codebase, infrastructure, and dependencies to understand what we're taking on." },
      { step: 2, title: "Support Plan Setup", description: "We agree on SLAs, communication channels, and escalation paths that match your needs." },
      { step: 3, title: "Proactive Monitoring", description: "We set up alerting and observability so we catch issues before your users do." },
      { step: 4, title: "Regular Maintenance Cycles", description: "Scheduled dependency updates, security patches, performance audits, and technical debt reduction." },
      { step: 5, title: "Feature Iteration", description: "When you need improvements, we slot them into the support cadence with minimal disruption." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
