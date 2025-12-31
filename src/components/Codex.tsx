import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

// Define the interface so TypeScript knows what data to expect
interface PostFrontmatter {
  title: string;
  date: string;
  description?: string; // Matches your markdown key
  coverImage?: string; // Matches your markdown key
  tag?: string;
  readTime?: string;
}

export default function Codex() {
  const posts = getAllPosts();

  return (
    // ID="codex" is the anchor for the scroll navigation
    <section id="codex" className="py-24 px-4 md:px-8 bg-paper min-h-screen">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <span className="inline-block py-1 px-3 rounded-full bg-tengri-blue/10 text-tengri-blue text-xs font-sans font-bold tracking-widest uppercase">
          The Codex
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-ink">
          Latest Reflections
        </h2>
      </div>

      {/* The Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {posts.map((post) => {
          // Force TypeScript to treat the generic data as our specific shape
          const fm = post.frontmatter as PostFrontmatter;

          return (
            <article key={post.slug} className="group flex flex-col h-full">
              {/* Cover Image */}
              <Link
                href={`/blog/${post.slug}`}
                className="block overflow-hidden rounded-lg mb-6 shadow-sm"
              >
                <div
                  className="h-64 w-full bg-gray-200 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  // Use the frontmatter image, or a fallback color if missing
                  style={{
                    backgroundImage: fm.coverImage
                      ? `url(${fm.coverImage})`
                      : undefined,
                  }}
                >
                  {!fm.coverImage && (
                    <div className="h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
              </Link>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs font-sans text-gray-500 mb-3">
                  <span className="font-semibold text-tengri-blue uppercase tracking-wide">
                    {fm.tag || "Essay"}
                  </span>
                  <span>•</span>
                  <time>{fm.date}</time>
                  {fm.readTime && <span>• {fm.readTime}</span>}
                </div>

                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="font-serif text-2xl text-ink font-bold leading-tight mb-3 group-hover:text-tengri-blue transition-colors">
                    {fm.title}
                  </h3>
                </Link>

                <p className="font-sans text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {fm.description}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-bold text-ink group-hover:text-tengri-blue transition-colors mt-auto"
                >
                  Read Reflection →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
