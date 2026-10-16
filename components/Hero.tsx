import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/peak.webp";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-night">
      {/* Decorative photo behind a dark gradient, so the white text stays readable */}
      <Image
        src={heroImage}
        alt=""
        placeholder="blur"
        priority
        sizes="100vw"
        className="-z-10 object-cover"
        fill
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-night via-night/85 to-night/40"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[80svh] max-w-6xl flex-col justify-center px-4 py-24 md:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-glow">
          Summit Peak Studio
        </p>
        <h1 className="mt-4 max-w-4xl text-display font-bold text-white">
          Digital work built on solid ground.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-mist md:text-xl">
          We design and build websites for businesses that want to be found,
          understood, and remembered.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex w-fit items-center rounded-sm bg-accent px-7 py-3.5 font-semibold text-white hover:opacity-90"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
