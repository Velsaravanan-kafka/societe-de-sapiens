import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* 1. The Eternal Blue Sky Background */}
      <div className="absolute inset-0 bg-eternal-sky" />

      {/* 2. The Grain Overlay (Texture) - This makes it look like 'Atmosphere' not 'CSS' */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      />

      {/* 3. The Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        {/* The Badge */}
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-sans tracking-widest uppercase mb-4">
          Est. 2025
        </span>

        {/* The Headline - Serif & Commanding */}
        <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight drop-shadow-sm">
          We have to think <br />
          <span className="italic opacity-90">as a species.</span>
        </h1>

        {/* The Subtext - Honest about the 'Community' aspect */}
        <p className="font-sans text-lg md:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
          A digital renaissance for the contemplative mind. Join the circle of
          rational dreamers building the philosophy of the future.
        </p>

        {/* The Actions */}
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

      {/* Optional: Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
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
