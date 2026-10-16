import Link from "next/link";
import { siteConfig } from "@/lib/site";
import SiteNav from "@/components/SiteNav";

export default function SiteHeader() {
  return (
    <header className="relative border-b border-surface bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="rounded-sm text-lg font-bold text-brand hover:text-accent"
        >
          {siteConfig.name}
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
