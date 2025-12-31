"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // 1. Detect Scroll to toggle background transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Dynamic Styles
  // If scrolled or NOT on home page -> Solid Paper Background
  // If at top of Home page -> Transparent Glass
  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
    scrolled || !isHome
      ? "bg-paper/80 backdrop-blur-md border-gray-200 py-4 shadow-sm"
      : "bg-transparent border-transparent py-6"
  }`;

  const textClasses = scrolled || !isHome ? "text-ink" : "text-white";

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`h-10 w-10 rounded-full flex items-center justify-center font-serif font-bold text-lg transition-colors ${
              scrolled || !isHome
                ? "bg-gradient-to-br from-gray-700 to-gray-900 text-paper"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30"
            }`}
          >
            S
          </div>
          <span
            className={`font-serif text-xl font-bold tracking-tight ${textClasses}`}
          >
            Société de Sapiens
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          <Link
            href="#manifesto"
            className={`${textClasses} hover:opacity-70 transition-opacity`}
          >
            Manifesto
          </Link>
          <Link
            href="/#codex"
            className={`${textClasses} hover:opacity-70 transition-opacity`}
          >
            The Codex
          </Link>
          <Link
            href="#"
            className={`${textClasses} hover:opacity-70 transition-opacity`}
          >
            Join
          </Link>

          {/* CTA Button */}
          <Link
            href="#"
            className={`px-5 py-2 rounded-full border transition-all ${
              scrolled || !isHome
                ? "border-gray-300 text-ink hover:bg-ink hover:text-white"
                : "border-white/30 text-white hover:bg-white hover:text-tengri-blue"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* MOBILE MENU BUTTON (Simple Hamburger) */}
        <button className={`md:hidden p-2 ${textClasses}`}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
