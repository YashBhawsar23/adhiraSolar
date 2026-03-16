import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import {
  blogPosts,
  getPostBySlug,
  formatDate,
  type ContentBlock,
} from "@/lib/blog";
import { siteName } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function ContentRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-base leading-7 text-white/75">{block.text}</p>
      );
    case "heading":
      return (
        <h2 className="mt-4 text-xl font-semibold text-white">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul className="space-y-2 pl-1">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-7 text-white/70">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-solar-400" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="rounded-2xl border border-solar-400/20 bg-solar-400/5 px-6 py-5">
          <p className="text-sm leading-7 text-solar-100/80">{block.text}</p>
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: "https://adhirasolarpower.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="solar-grid bg-ocean-900">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl motion-safe:animate-fade-up">
            <nav className="mb-6 flex items-center gap-2 text-sm text-white/40">
              <Link
                href="/blog"
                className="transition-colors hover:text-white"
              >
                Blog
              </Link>
              <span>›</span>
              <span className="text-white/60">{post.category}</span>
            </nav>

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
                {formatDate(post.date)}
              </span>
              <span className="text-xs text-white/40">•</span>
              <span className="text-xs text-white/40">{post.readTime}</span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-white/60">
              {post.excerpt}
            </p>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="bg-ocean-900 pb-20">
        <Container>
          <article className="mx-auto max-w-3xl space-y-6">
            {post.content.map((block, i) => (
              <ContentRenderer key={i} block={block} />
            ))}
          </article>

          {/* Author / CTA */}
          <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-white/10 bg-ocean-800/70 p-8">
            <p className="text-sm font-semibold text-solar-400">
              Written by {post.author}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Have questions about this topic? Our solar specialists can provide
              personalized guidance for your specific situation.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-solar-500 px-5 py-2.5 text-sm font-semibold text-ocean-900 shadow-md shadow-solar-500/20 transition-all hover:bg-solar-400"
              >
                Get Free Consultation
              </Link>
              <Link
                href="tel:+919522244453"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Call Us Now
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mx-auto mt-16 max-w-3xl">
              <h2 className="text-2xl font-semibold text-white">
                More Articles
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group rounded-2xl border border-white/10 bg-ocean-800/70 p-5 transition-all hover:-translate-y-0.5 hover:bg-ocean-800"
                  >
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                      style={{
                        color: rp.categoryColor,
                        background: `${rp.categoryColor}18`,
                        border: `1px solid ${rp.categoryColor}35`,
                      }}
                    >
                      {rp.category}
                    </span>
                    <h3 className="mt-3 text-sm font-semibold leading-snug text-white transition-colors group-hover:text-solar-400">
                      {rp.title}
                    </h3>
                    <p className="mt-2 text-xs text-white/40">
                      {formatDate(rp.date)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
