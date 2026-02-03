"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="min-h-screen flex items-center bg-[#050505] overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-0">
        {/* Left side - Imagery (Night) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative min-h-[500px] md:min-h-[700px] bg-black"
        >
          <img
            src="/images/Vangogh.jpg"
            alt="A light in the darkness"
            // CHANGED: Removed opacity-90 so it glows fully
            className="w-full h-full object-cover"
          />

          {/* DELETED: The gradient overlay div is gone. Image is now clear. */}

          {/* Decorative Gold Circles (Kept these as they are nice accents) */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-500/20 rounded-full animate-pulse" />
          <div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-yellow-500/10 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </motion.div>

        {/* Right side - Text (Gold/White Theme) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center p-8 md:p-16"
        >
          <div className="max-w-xl">
            {/* The Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/20">
                <span className="font-sans text-sm text-yellow-500 font-semibold tracking-wider">
                  THE MANIFESTO
                </span>
              </div>
            </motion.div>

            {/* The Headline */}
            <motion.h2
              className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              A Circle of
              <br />
              <span className="text-yellow-500">Rational Dreamers</span>
            </motion.h2>

            {/* The Body Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-sans space-y-4 text-gray-300 text-lg leading-relaxed mb-8"
            >
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
            </motion.div>

            {/* The Button */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 group font-sans font-medium"
            >
              Read the Full Manifesto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
