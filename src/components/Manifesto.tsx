"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      // THE FIX: relative + z-10 + bg-[#050505]
      // This makes it slide OVER the sticky hero.
      // Added 'shadow-2xl' to separate the layers visually.
      className="relative z-10 min-h-screen flex items-center bg-[#050505] overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.7)]"
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-0 h-full">
        {/* Left side - Imagery (Night) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative min-h-[500px] md:h-screen w-full bg-black"
        >
          <img
            src="/images/Vangogh.jpg"
            alt="A light in the darkness"
            className="w-full h-full object-cover object-bottom"
          />
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center p-8 md:p-16 h-full relative z-10"
        >
          <div className="max-w-xl">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/20">
              <span className="font-sans text-sm text-yellow-500 font-semibold tracking-wider">
                THE MANIFESTO
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              A Circle of
              <br />
              <span className="text-yellow-500">Rational Dreamers</span>
            </h2>

            <div className="font-sans space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
              <p>
                We are a community of creators and rational dreamers. We believe
                in power balanced by peace, reason refined by imagination.
              </p>
              <p>
                In an age of endless distraction, we choose deep thought. Where
                others scroll, we contemplate. Where chaos reigns, we build.
              </p>
              <p>
                This is not a platform. This is a sanctuary for the curious mind
                — a digital Florence where ideas are reborn and the human spirit
                flourishes.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 group font-sans font-medium"
            >
              Read the Full Manifesto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
