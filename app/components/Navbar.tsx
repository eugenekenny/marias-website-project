"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  activePage?: "home" | "listings" | "calculator" | "contact";
}

export default function Navbar({ activePage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", id: "home" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/listings", label: "Listings", id: "listings" },
    { href: "/mortgage-calculator", label: "Calculator", id: "calculator" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a2744] text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-wide">Maria Navin-Lassiter</span>
          <span className="text-xs text-[#B8960C] tracking-widest uppercase">Century 21 Real Estate</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`transition-colors ${
                activePage === link.id
                  ? "text-[#B8960C]"
                  : "hover:text-[#B8960C]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Phone Button */}
        <a
          href="tel:7204011889"
          className="hidden md:block bg-[#B8960C] hover:bg-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
        >
          (720) 401-1889
        </a>

        {/* Mobile: Phone + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:7204011889"
            className="bg-[#B8960C] hover:bg-yellow-600 text-white text-xs font-semibold px-3 py-2 rounded-full transition-colors"
          >
            Call Now
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#162035] border-t border-blue-800 px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 border-b border-blue-900 text-sm font-medium transition-colors ${
                activePage === link.id
                  ? "text-[#B8960C]"
                  : "text-blue-100 hover:text-[#B8960C]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:7204011889"
            className="mt-3 text-center bg-[#B8960C] hover:bg-yellow-600 text-white font-bold py-3 rounded-full transition-colors text-sm"
          >
            📞 (720) 401-1889
          </a>
        </div>
      </div>
    </nav>
  );
}
