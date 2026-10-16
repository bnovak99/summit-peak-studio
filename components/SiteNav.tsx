"use client";

// Client Component: needs state (mobile menu open/closed) and usePathname
// (to mark the current page). Everything else in the header stays on the server.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site";

type Tone = "light" | "dark";

const toneStyles: Record<
  Tone,
  { button: string; panel: string; link: string; active: string }
> = {
  light: {
    button: "text-ink hover:text-brand",
    panel: "border-surface bg-white",
    link: "text-ink hover:text-brand",
    active: "text-brand underline underline-offset-4",
  },
  dark: {
    button: "text-mist hover:text-white",
    panel: "border-white/10 bg-night",
    link: "text-mist hover:text-white",
    active: "text-white underline underline-offset-4",
  },
};

export default function SiteNav({ tone }: { tone: Tone }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const styles = toneStyles[tone];

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  function linkClass(href: string) {
    return `rounded-sm px-2 py-1 font-medium ${
      isActive(href) ? styles.active : styles.link
    }`;
  }

  return (
    <nav aria-label="Main">
      <button
        type="button"
        className={`rounded-sm px-3 py-2 font-medium md:hidden ${styles.button}`}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close menu" : "Menu"}
      </button>

      <ul
        id="mobile-menu"
        className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b px-4 py-3 md:hidden ${styles.panel}`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={linkClass(link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="hidden gap-6 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={linkClass(link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
