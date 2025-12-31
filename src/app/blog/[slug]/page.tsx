import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";

// 1. Define the props. In Next.js App Router, params is where the slug lives.
interface PageProps {
  params: { slug: string };
}

// 2. The Page Component
export default async function PostPage({ params }: PageProps) {
  // Fetch the data
  // Wrap in try/catch to handle 404s gracefully
  let post;
  try {
    post = await getPostBySlug(params.slug);
  } catch (error) {
    return notFound();
  }

  // 3. Render the Renaissance Layout
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-tengri-blue/20">
      {/* NAVIGATION: Simple Back Button */}
      <nav className="max-w-3xl mx-auto pt-12 px-6">
        <Link
          href="/#codex"
          className="group inline-flex items-center text-sm font-sans text-gray-500 hover:text-tengri-blue transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to the Codex
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* HEADER: Title & Meta */}
        <header className="mb-12 text-center space-y-6">
          <div className="flex items-center justify-center gap-3 text-sm font-sans text-gray-500 uppercase tracking-widest">
            <span className="text-tengri-blue font-bold">
              {post.frontmatter.tag || "Reflection"}
            </span>
            <span>•</span>
            <time>{post.frontmatter.date}</time>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-ink">
            {post.frontmatter.title}
          </h1>

          {/* Optional: Cover Image (Only renders if you added one in markdown) */}
          {post.frontmatter.coverImage && (
            <div className="relative mt-8 w-full aspect-video overflow-hidden rounded-lg shadow-sm">
              <img
                src={post.frontmatter.coverImage}
                alt={post.frontmatter.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </header>

        {/* CONTENT: The Prose Wrapper 
            This 'prose' class comes from the @tailwindcss/typography plugin you installed.
            It automatically styles the raw HTML from markdown (H1, H2, p, lists).
        */}
        <div
          className="prose prose-lg prose-slate mx-auto
            prose-headings:font-serif prose-headings:text-ink 
            prose-p:font-sans prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-tengri-blue prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-tengri-blue prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:not-italic"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* FOOTER: Signature */}
      <footer className="max-w-3xl mx-auto px-6 pb-24 border-t border-gray-200 mt-16 pt-8 text-center">
        <p className="font-serif italic text-gray-500">— Société de Sapiens</p>
      </footer>
    </main>
  );
}
