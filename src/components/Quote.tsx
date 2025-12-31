"use client"; // Required for state & animation

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. The Collection of Wisdom
const quotes = [
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    text: "We are not human beings having a spiritual experience; we are spiritual beings having a human experience.",
    author: "Pierre Teilhard de Chardin",
  },
  {
    text: "He who has a why to live for can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius",
  },
];

export default function Quote() {
  const [index, setIndex] = useState(0);

  // 2. The Timer Logic (Change every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000); // Change this to 3000 for 3 seconds if you prefer

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-paper py-32 px-4 border-y border-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 min-h-[300px] flex flex-col justify-center">
        {/* Static Icon */}
        <div className="text-tengri-blue text-6xl font-serif opacity-20">"</div>

        {/* 3. The Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index} // Changing the key triggers the animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="space-y-8"
          >
            <blockquote className="font-serif text-3xl md:text-4xl text-ink leading-tight">
              {quotes[index].text}
            </blockquote>

            <div className="flex items-center justify-center gap-4 pt-2">
              <div className="h-px w-8 bg-gray-300"></div>
              <cite className="font-sans text-sm font-bold tracking-widest uppercase text-gray-500 not-italic">
                {quotes[index].author}
              </cite>
              <div className="h-px w-8 bg-gray-300"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Optional: Progress Dots to show rotation */}
        <div className="flex justify-center gap-2 pt-8">
          {quotes.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-tengri-blue" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
