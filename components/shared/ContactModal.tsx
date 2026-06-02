"use client";

import { useState } from "react";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";

interface ContactModalProps {
  trigger: React.ReactNode;
}

export default function ContactModal({ trigger }: ContactModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </span>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-[#e2e8f0] px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
              <div>
                <h2 className="text-lg font-bold text-navy">Let&apos;s Talk</h2>
                <p className="text-sm text-[#64748b]">Tell us about your project</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-[#64748b]"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-6">
              <ContactForm onSuccess={() => setTimeout(() => setOpen(false), 3000)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
