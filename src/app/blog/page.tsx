import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
