import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    frontmatter: data,
    content: contentHtml,
  };
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  console.log(fileNames);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileContents = fs.readFileSync(
      path.join(postsDirectory, fileName),
      "utf8"
    );
    const { data } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
    };
  });
}
