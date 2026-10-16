import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Summit Peak Studio team.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold text-brand">Contact</h1>
      <p className="mt-4 text-muted">Coming soon.</p>
    </section>
  );
}
