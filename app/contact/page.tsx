import type { Metadata } from "next";
import { Mail } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Softhon team. Tell us about your project and let's start a conversation.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue/40 text-blue text-xs font-semibold uppercase tracking-widest mb-6 bg-blue/10">
            Contact
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight max-w-2xl mb-5">
            Let&apos;s build something great.
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Tell us about your project. We&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-10">
              <div>
                <h2 className="font-bold text-navy mb-4">Get in touch</h2>
                <p className="text-sm text-muted-text leading-relaxed">
                  Whether you have a detailed brief or just an idea — we&apos;re happy to have a conversation. Fill in the form and we&apos;ll respond promptly.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hello@softhon.com"
                  className="flex items-center gap-3 text-sm text-navy hover:text-blue transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-light flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-blue" />
                  </div>
                  hello@softhon.com
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-navy hover:text-blue transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-light flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                  LinkedIn
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-navy hover:text-blue transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-light flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </div>
                  GitHub
                </a>
              </div>

              <div className="p-5 rounded-xl bg-soft border border-border-subtle">
                <p className="text-xs font-semibold text-muted-text uppercase tracking-wider mb-2">
                  Response Time
                </p>
                <p className="text-sm text-navy font-medium">Within 1 business day</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
