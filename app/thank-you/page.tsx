"use client";

import { useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    // Fire GA4 lead conversion event
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        event_category: "Contact Form",
        event_label: "Form Submitted",
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f4f6fa] flex flex-col items-center justify-center px-4">
      {/* Card */}
      <div className="bg-white rounded-3xl shadow-lg max-w-lg w-full p-10 text-center">
        {/* Checkmark */}
        <div className="w-20 h-20 bg-[#1a2744] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-[#B8960C]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="font-playfair text-3xl font-bold text-[#1a2744] mb-3">
          Message Received!
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-lg mb-2">
          Thank you for reaching out. Maria will be in touch with you shortly.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          In the meantime, feel free to browse listings or use the mortgage calculator.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-8" />

        {/* Contact info */}
        <p className="text-sm text-gray-500 mb-1">Prefer to call or text?</p>
        <a
          href="tel:+17204011889"
          className="text-[#1a2744] font-bold text-xl hover:text-[#B8960C] transition-colors"
        >
          (720) 401-1889
        </a>

        {/* Back button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-[#1a2744] hover:bg-[#B8960C] text-white font-bold px-8 py-3 rounded-full transition-all shadow hover:shadow-lg text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Branding footer */}
      <p className="mt-8 text-gray-400 text-xs">
        Maria Navin-Lassiter · Century 21 Moore Real Estate · mariacoloradorealty.com
      </p>
    </main>
  );
}
