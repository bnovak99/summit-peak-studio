import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-surface bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-brand">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-muted">{siteConfig.description}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-sm text-ink hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm text-muted">
          <p>
            Email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-sm text-ink underline underline-offset-4 hover:text-brand"
            >
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-2">Phone {siteConfig.phone}</p>
        </div>
      </div>
    </footer>
  );
}
