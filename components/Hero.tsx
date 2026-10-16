import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/peak.webp";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
      <div>
        <h1 className="text-4xl font-bold leading-tight text-brand md:text-5xl">
          Digital work built on solid ground.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-muted">
          Summit Peak Studio is a small team that designs and builds websites
          for businesses that want to be found, understood, and remembered.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center rounded-sm bg-accent px-6 py-3 font-semibold text-white hover:bg-brand"
        >
          Start a project
        </Link>
      </div>

      <Image
        src={heroImage}
        alt="Snow-capped mountain peak rising above a green forest under cloud"
        placeholder="blur"
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
        className="aspect-[4/3] w-full rounded-lg object-cover"
      />
    </section>
  );
}
