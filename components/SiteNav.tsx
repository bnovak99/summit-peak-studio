"use client";

// Client Component: needs state (mobile menu open/closed) and usePathname
// (to mark the current page). Everything else in the header stays on the server.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  function linkClass(href: string) {
    return `rounded-sm px-2 py-1 font-medium hover:text-brand ${
      isActive(href) ? "text-brand underline underline-offset-4" : "text-ink"
    }`;
  }

  return (
    <nav aria-label="Main">
      <button
        type="button"
        className="rounded-sm px-3 py-2 font-medium text-ink hover:text-brand md:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close menu" : "Menu"}
      </button>

      <ul
        id="mobile-menu"
        className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b border-surface bg-white px-4 py-3 md:hidden`}
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
