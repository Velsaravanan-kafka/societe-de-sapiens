"use client"; // Required for animations

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="min-h-screen flex items-center bg-paper overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-0">
        {/* Left side - Renaissance imagery */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative min-h-[500px] md:min-h-[700px] bg-gray-200"
        >
          {/* We use a standard img tag here instead of the missing component */}
          <img
            src="https://images.unsplash.com/photo-1743962789624-8fd69cd135e5?q=80&w=1080&auto=format&fit=crop"
            alt="Renaissance architecture and sketches"
            className="w-full h-full object-cover grayscale-[30%] opacity-80"
          />

          {/* Gradient Overlay to blend into the paper background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-paper" />

          {/* Decorative Gold Circles (Animated) */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-600/30 rounded-full animate-pulse" />
          <div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-yellow-600/20 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </motion.div>

        {/* Right side - Mission text */}
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
              <div className="inline-block mb-4 px-4 py-2 bg-yellow-600/10 rounded-full border border-yellow-600/30">
                <span className="font-sans text-sm text-ink font-semibold">
                  Our Manifesto
                </span>
              </div>
            </motion.div>

            {/* The Headline */}
            <motion.h2
              className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              A Circle of
              <br />
              {/* Used your Tengri Blue here */}
              <span className="text-tengri-blue">Rational Dreamers</span>
            </motion.h2>

            {/* The Body Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-sans space-y-4 text-gray-600 text-lg leading-relaxed mb-8"
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-paper rounded-full hover:bg-tengri-blue transition-all duration-300 group font-sans font-medium"
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
