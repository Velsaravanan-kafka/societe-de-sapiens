import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paper border-t border-gray-200 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand & Manifesto (Span 6 columns) */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              {/* The "S" Logo Badge */}
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-paper font-serif font-bold text-xl shadow-sm">
                S
              </div>
              <div>
                <h3 className="font-serif text-xl text-ink font-bold">
                  Société de Sapiens
                </h3>
                <p className="font-sans text-xs text-gray-500 uppercase tracking-widest">
                  Cognitio est libertas
                </p>
              </div>
            </div>

            <p className="font-sans text-gray-600 leading-relaxed max-w-sm">
              A digital renaissance of creators and thinkers. Where ideas are
              born, refined, and shared with those who seek meaning in the
              modern age.
            </p>

            <div className="pt-2">
              <span className="font-serif italic text-tengri-blue font-medium">
                Knowledge is Freedom
              </span>
            </div>
          </div>

          {/* Column 2: The Archive (Span 3 columns) */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-lg text-ink font-bold mb-6">
              The Archive
            </h4>
            <ul className="space-y-4 font-sans text-gray-600">
              <li>
                <Link
                  href="#manifesto"
                  className="hover:text-tengri-blue transition-colors"
                >
                  Manifesto
                </Link>
              </li>
              <li>
                <Link
                  href="/#codex"
                  className="hover:text-tengri-blue transition-colors"
                >
                  The Codex
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-tengri-blue transition-colors"
                >
                  Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-tengri-blue transition-colors"
                >
                  Essays
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect (Span 3 columns) */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-lg text-ink font-bold mb-6">
              Connect
            </h4>
            <ul className="space-y-4 font-sans text-gray-600">
              <li>
                <Link
                  href="#"
                  className="hover:text-tengri-blue transition-colors"
                >
                  Join the Circle
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-tengri-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contact@societe.com"
                  className="hover:text-tengri-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-tengri-blue transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Socials */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 font-sans text-sm text-gray-500">
            <span>© {currentYear} Société de Sapiens.com.</span>
            <span className="hidden md:inline">•</span>
            <span>
              Founded by{" "}
              <span className="text-ink font-medium">Vel Saravanan</span>.
            </span>
          </div>

          {/* Social Icons (SVGs) */}
          <div className="flex gap-4">
            {/* Twitter / X */}
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-tengri-blue hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-tengri-blue hover:text-white transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </a>

            {/* Mail */}
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-tengri-blue hover:text-white transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
