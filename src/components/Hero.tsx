import Link from "next/link";

export default function Hero() {
  return (
    // CHANGED: h-[90vh] -> h-screen (Forces it to cover the FULL screen)
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image.png"
          alt="Eternal Sky"
          className="w-full h-full object-cover"
        />
        {/* Kept the dark overlay for text readability, but you can lower opacity if needed */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 2. Texture Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      />

      {/* 3. Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-sans tracking-widest uppercase mb-4">
          Est. 2025
        </span>

        <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight drop-shadow-sm">
          We have to think <br />
          <span className="italic opacity-90">as a species.</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          A digital renaissance for the contemplative mind. Join the circle of
          rational dreamers building the philosophy of the future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="#manifesto"
            className="px-8 py-3 bg-white text-tengri-blue font-sans font-medium rounded hover:bg-sky-50 transition-colors duration-200"
          >
            Read the Manifesto
          </Link>
          <Link
            href="#codex"
            className="px-8 py-3 border border-white/30 text-white font-sans font-medium rounded hover:bg-white/10 backdrop-blur-sm transition-colors duration-200"
          >
            Explore the Codex
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 z-10">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
