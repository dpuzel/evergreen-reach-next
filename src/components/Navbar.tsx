"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

function linkIsCurrent(href: string, pathname: string) {
  if (href === "/notes") return pathname.startsWith("/notes");
  if (href === "/porch") return pathname.startsWith("/porch");
  return false;
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

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

  const navSolid = scrolled || open || !onHome;

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
          <Link
            href="/"
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
          </Link>

          <div className="hidden items-center gap-5 text-[0.875rem] font-medium text-cream-dim lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const current = linkIsCurrent(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-cream ${
                    current ? "text-cream" : ""
                  }`}
                  aria-current={current ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              className="btn-primary !px-5 !py-2.5 !text-sm"
            >
              Let&apos;s Talk
            </Link>
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
            {navLinks.map((link) => {
              const current = linkIsCurrent(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b border-sage/10 py-3.5 text-lg font-medium transition-colors hover:text-cream ${
                    current ? "text-cream" : "text-cream-muted"
                  }`}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              className="btn-primary mt-8 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
