import Image from "next/image";
import Link from "next/link";
import backgroundImage from "@/public/peak-2.webp";

export default function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Decorative background: empty alt so screen readers skip it */}
      <Image
        src={backgroundImage}
        alt=""
        placeholder="blur"
        sizes="100vw"
        className="-z-10 object-cover"
        fill
      />
      <div className="absolute inset-0 -z-10 bg-brand/90" aria-hidden="true" />

      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 md:flex-row md:items-center md:justify-between">
        <h2 className="max-w-xl text-3xl font-bold text-white">
          Ready to plan your next project?
        </h2>
        <Link
          href="/contact"
          className="rounded-sm bg-white px-6 py-3 font-semibold text-brand hover:bg-surface"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
