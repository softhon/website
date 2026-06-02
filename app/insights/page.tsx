import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/insights";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspectives on software, product, and technology from the Softhon team.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue/40 text-blue text-xs font-semibold uppercase tracking-widest mb-6 bg-blue/10">
            Insights
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl mb-5">
            Perspectives from the team
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Thinking on software, product design, AI, and what it takes to build things that last.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-[#64748b]">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-[#e2e8f0] overflow-hidden hover:border-blue/40 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300"
                >
                  {/* Placeholder cover */}
                  <div className="h-48 bg-gradient-to-br from-navy to-blue/60 flex items-center justify-center">
                    <div className="w-16 h-1 bg-white/20 rounded-full" />
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-xs text-[#64748b] mb-3">{formatDate(post.date)}</p>
                    <h2 className="font-bold text-navy text-base leading-snug mb-3 group-hover:text-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#64748b] leading-relaxed flex-1 mb-5">
                      {post.excerpt}
                    </p>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-blue group-hover:gap-2.5 transition-all">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
