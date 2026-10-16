import Link from "next/link";

// Placeholder posts. Replace with the newest MDX posts from /content/blog/ in the blog step.
const placeholderPosts = [
  { title: "Placeholder article one", excerpt: "A short summary of the post goes here." },
  { title: "Placeholder article two", excerpt: "A short summary of the post goes here." },
  { title: "Placeholder article three", excerpt: "A short summary of the post goes here." },
];

export default function FeaturedPosts() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-bold text-brand">From the blog</h2>
        <Link
          href="/blog"
          className="rounded-sm font-medium text-ink underline underline-offset-4 hover:text-brand"
        >
          All posts
        </Link>
      </div>
      <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {placeholderPosts.map((post) => (
          <li key={post.title} className="flex flex-col rounded-lg border border-surface p-6">
            <h3 className="text-xl font-semibold text-ink">{post.title}</h3>
            <p className="mt-3 flex-1 text-muted">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
