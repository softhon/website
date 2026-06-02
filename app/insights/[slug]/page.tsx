import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/insights";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function InsightPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Insights
          </Link>
          <p className="text-xs text-white/50 mb-4">{formatDate(post.date)} · {post.author}</p>
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-navy prose-a:text-blue prose-a:no-underline hover:prose-a:underline">
            <MDXRemote source={post.content} />
          </article>
        </div>
      </section>
    </>
  );
}
