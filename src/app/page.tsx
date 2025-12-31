import { getAllPosts } from "@/lib/posts";
import Hero from "@/components/Hero";
import Codex from "@/components/Codex";
import Footer from "@/components/Footer";
import Manifesto from "@/components/Manifesto";
import Quote from "@/components/Quote";

export default function Home() {
  const posts = getAllPosts();
  return (
    <main>
      <Hero />
      <Manifesto />
      <Quote />
      <Codex />
    </main>
  );
}
