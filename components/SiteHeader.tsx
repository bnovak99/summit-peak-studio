import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import SiteNav from "@/components/SiteNav";
import logoDark from "@/public/SummitPeakStudioLogo-02.webp";
import logoLight from "@/public/SummitPeakStudioLogo-01.webp";

type Tone = "light" | "dark";

const headerStyles: Record<Tone, string> = {
  light: "border-surface bg-white",
  dark: "border-white/10 bg-night",
};

// The dark logo has a night background built in, so it blends into the dark header
export default function SiteHeader({ tone }: { tone: Tone }) {
  return (
    <header className={`relative border-b ${headerStyles[tone]}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="rounded-sm">
          <Image
            src={tone === "dark" ? logoDark : logoLight}
            alt={`${siteConfig.name} home`}
            priority
            className="h-32 w-auto md:h-40"
          />
        </Link>
        <SiteNav tone={tone} />
      </div>
    </header>
  );
}
