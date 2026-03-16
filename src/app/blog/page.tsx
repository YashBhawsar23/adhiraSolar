import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { blogPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Solar energy guides, subsidy updates, maintenance tips, and industry insights from the Adhira Solar team.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="solar-grid bg-ocean-900">
        <Container className="py-14 sm:py-16">
          <div className="max-w-2xl motion-safe:animate-fade-up">
            <p className="text-sm font-semibold tracking-wide text-solar-400">
              Blog & Articles
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Solar Insights & Guides
            </h1>
            <p className="mt-4 text-base leading-7 text-white/70">
              Expert guides on solar installation, government subsidies,
              maintenance best practices, and the latest in clean energy
              technology.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="bg-ocean-900 py-12">
        <Container>
          <Link
            href={`/blog/${featured.slug}`}
            className="group block overflow-hidden rounded-3xl border border-white/10 bg-ocean-800/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ocean-800 hover:shadow-lg"
          >
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    color: featured.categoryColor,
                    background: `${featured.categoryColor}18`,
                    border: `1px solid ${featured.categoryColor}35`,
                  }}
                >
                  {featured.category}
                </span>
                <span className="text-xs text-white/40">
                  {formatDate(featured.date)}
                </span>
                <span className="text-xs text-white/40">•</span>
                <span className="text-xs text-white/40">
                  {featured.readTime}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white transition-colors group-hover:text-solar-400 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-white/60">
                {featured.excerpt}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-solar-400 transition-all group-hover:gap-3">
                Read article
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </Container>
      </section>

      {/* Post Grid */}
      <section className="bg-ocean-900 pb-20 pt-4">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ocean-800/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ocean-800 hover:shadow-lg"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        color: post.categoryColor,
                        background: `${post.categoryColor}18`,
                        border: `1px solid ${post.categoryColor}35`,
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-white/40">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-solar-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-white/60">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-white/40">
                      {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-solar-400 transition-all group-hover:gap-2">
                      Read
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
