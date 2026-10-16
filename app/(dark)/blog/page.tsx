import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes and articles from the Summit Peak Studio team.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-heading font-bold text-white">Blog</h1>
      <p className="mt-4 text-mist">Coming soon.</p>
    </section>
  );
}
