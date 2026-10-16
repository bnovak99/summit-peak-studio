import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes and articles from the Summit Peak Studio team.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold text-brand">Blog</h1>
      <p className="mt-4 text-muted">Coming soon.</p>
    </section>
  );
}
