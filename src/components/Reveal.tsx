"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Delay = 0 | 1 | 2 | 3 | 4;

const delayClass: Record<Delay, string> = {
  0: "",
  1: "reveal-delay-1",
  2: "reveal-delay-2",
  3: "reveal-delay-3",
  4: "reveal-delay-4",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: Delay;
  as?: "div" | "article" | "blockquote" | "p" | "span";
  /** Skip scroll observer — animate in on mount (hero) */
  immediate?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (immediate) {
      const t = window.setTimeout(
        () => el.classList.add("visible"),
        80 + delay * 90,
      );
      return () => window.clearTimeout(t);
    }

    if (!("IntersectionObserver" in window)) {
      el.classList.add("visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, immediate]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${delayClass[delay]} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
