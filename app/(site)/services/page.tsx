import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "The design, development, and marketing services offered by Summit Peak Studio.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold text-brand">Services</h1>
      <p className="mt-4 text-muted">Coming soon.</p>
    </section>
  );
}
