import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import logo from "@/public/SummitPeakStudioLogo-02.webp";

export default function SiteFooter() {
  return (
    <footer className="bg-night text-mist">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <Image
            src={logo}
            alt={siteConfig.name}
            className="h-auto w-44"
          />
          <p className="mt-4 text-sm">{siteConfig.description}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-sm text-mist hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p>
            Email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-sm text-white underline underline-offset-4 hover:text-mist"
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
