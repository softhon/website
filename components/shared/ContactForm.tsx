"use client";

import { useState } from "react";
import { services } from "@/lib/services";

interface ContactFormProps {
  onSuccess?: () => void;
}

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  jobTitle: "",
  service: "",
  message: "",
  source: "",
};

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update(field: keyof typeof initialState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialState);
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#eff6ff] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Message Sent</h3>
        <p className="text-[#64748b]">
          Thanks for reaching out. We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="First name" required>
          <input
            type="text"
            required
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className={inputClass}
            placeholder="Jane"
          />
        </Field>
        <Field label="Last name" required>
          <input
            type="text"
            required
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            className={inputClass}
            placeholder="Smith"
          />
        </Field>
      </div>

      <Field label="Company email" required>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
          placeholder="jane@company.com"
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Company name" required>
          <input
            type="text"
            required
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            className={inputClass}
            placeholder="Acme Inc."
          />
        </Field>
        <Field label="Job title">
          <input
            type="text"
            value={form.jobTitle}
            onChange={(e) => update("jobTitle", e.target.value)}
            className={inputClass}
            placeholder="CEO / CTO / Product Lead"
          />
        </Field>
      </div>

      <Field label="Service you require">
        <select
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className={inputClass}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="not-sure">Not sure yet</option>
        </select>
      </Field>

      <Field label="Tell us about your project" required>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClass}
          placeholder="Describe what you're building, your timeline, and any relevant details..."
        />
      </Field>

      <Field label="How did you find us?">
        <select
          value={form.source}
          onChange={(e) => update("source", e.target.value)}
          className={inputClass}
        >
          <option value="">Select an option</option>
          <option value="google">Google</option>
          <option value="linkedin">LinkedIn</option>
          <option value="github">GitHub</option>
          <option value="referral">Referral</option>
          <option value="other">Other</option>
        </select>
      </Field>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-blue hover:bg-blue/90 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-[#e2e8f0] bg-white text-navy text-sm placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-colors";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1.5">
        {label}
        {required && <span className="text-blue ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
