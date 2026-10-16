import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import SiteNav from "@/components/SiteNav";
import logo from "@/public/SummitPeakStudioLogo-01.webp";

export default function SiteHeader() {
  return (
    <header className="relative border-b border-surface bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="rounded-sm">
          <Image
            src={logo}
            alt={`${siteConfig.name} home`}
            priority
            className="h-16 w-auto md:h-20"
          />
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
