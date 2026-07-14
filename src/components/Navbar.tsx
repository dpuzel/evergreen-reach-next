"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navSolid = scrolled || open;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        navSolid
          ? "border-sage/10 bg-[#07150F] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex h-[4.5rem] items-center justify-between">
          <a
            href="#"
            className="group flex items-center gap-3"
            aria-label="Evergreen Reach home"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/assets/logo-dark.png"
              alt="Evergreen Reach"
              width={160}
              height={48}
              className="h-11 w-auto object-contain drop-shadow-[0_0_20px_rgba(168,181,162,0.15)] transition-transform duration-300 group-hover:scale-[1.03] sm:h-12"
              priority
            />
          </a>

          <div className="hidden items-center gap-8 text-[0.875rem] font-medium text-cream-dim lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary !px-5 !py-2.5 !text-sm"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-cream transition-colors hover:bg-forest-800/40 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Solid mobile drawer — no alpha, so page content never bleeds through */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Dim scrim behind the panel */}
        <button
          type="button"
          className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />

        {/* Full-height solid panel */}
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-none flex-col border-l border-sage/10 bg-[#07150F] transition-transform duration-300 ease-out sm:max-w-sm ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Spacer matching navbar height */}
          <div className="h-[4.5rem] shrink-0 border-b border-sage/10" />

          <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-sage/10 py-3.5 text-lg font-medium text-cream-muted transition-colors hover:text-cream"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary mt-8 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
