import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the story, team, and values behind Summit Peak Studio.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold text-brand">About</h1>
      <p className="mt-4 text-muted">Coming soon.</p>
    </section>
  );
}
