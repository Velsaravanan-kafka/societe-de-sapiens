import Link from "next/link";

export default function Hero() {
  return (
    // THE FIX: sticky top-0 + -z-10
    // This makes the hero "freeze" while the next section slides over it.
    <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden -z-10">
      {/* 1. BACKGROUND IMAGE (Pure, No Shadows) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/images.png"
          alt="Eternal Sky"
          className="w-full h-full object-cover"
        />
        {/* Light overlay for text readability only */}
        <div className="absolute inset-0 bg-black/10" />
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
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-sans tracking-widest uppercase mb-4 shadow-lg">
          Est. 2025
        </span>

        <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight drop-shadow-lg">
          We have to think <br />
          <span className="italic opacity-90">as a species.</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          A digital renaissance for the contemplative mind. Join the circle of
          rational dreamers building the philosophy of the future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="#manifesto"
            className="px-8 py-3 bg-white text-tengri-blue font-sans font-medium rounded hover:bg-sky-50 transition-colors duration-200 shadow-xl"
          >
            Read the Manifesto
          </Link>
          <Link
            href="#codex"
            className="px-8 py-3 border border-white/30 text-white font-sans font-medium rounded hover:bg-white/10 backdrop-blur-sm transition-colors duration-200 shadow-lg"
          >
            Explore the Codex
          </Link>
        </div>
      </div>
    </section>
  );
}
