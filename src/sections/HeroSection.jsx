export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#f3fdff] via-[#f0d9ff] to-[#e2fbff] px-6 text-center">
      {/* Decorative background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[42rem] w-[42rem] animate-blob1 rounded-[50%] bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.7),transparent_60%)] blur-3xl will-change-transform" />
        <div className="absolute right-[-8%] top-[5%] h-[36rem] w-[36rem] animate-blob2 rounded-[50%] bg-[radial-gradient(circle_at_70%_30%,rgba(244,114,182,0.7),transparent_60%)] blur-3xl will-change-transform" />
        <div className="absolute bottom-[-12%] left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 animate-blob3 rounded-[50%] bg-[radial-gradient(circle_at_50%_60%,rgba(34,197,94,0.6),transparent_60%)] blur-3xl will-change-transform" />

        {/* soft vignette to improve text contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_30%,transparent,rgba(255,255,255,0.6))]" />
      </div>

      {/* Content */}
      <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl text-gray-900">
        Building Reliable Software. <br />
        Delivering Lasting Impact.
      </h1>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-700">
        We design, build, and scale products your users can trust.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          className="rounded-2xl bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-black/10 transition hover:scale-[1.02] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40"
        >
          Start a project
        </a>
        <a
          href="#work"
          className="rounded-2xl border border-gray-900/10 bg-white/70 px-6 py-3 text-base font-semibold text-gray-900 backdrop-blur-sm transition hover:scale-[1.02] hover:border-gray-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20"
        >
          See our work
        </a>
      </div>

      {/* Keyframes + reduced motion */}
      <style>{`
        @keyframes blobFloat1 { 0% { transform: translate3d(0,0,0) scale(1); } 33% { transform: translate3d(10%, -5%, 0) scale(1.05); } 66% { transform: translate3d(-6%, 8%, 0) scale(0.97); } 100% { transform: translate3d(0,0,0) scale(1); } }
        @keyframes blobFloat2 { 0% { transform: translate3d(0,0,0) scale(1); } 33% { transform: translate3d(-8%, 6%, 0) scale(1.08); } 66% { transform: translate3d(6%, -6%, 0) scale(0.95); } 100% { transform: translate3d(0,0,0) scale(1); } }
        @keyframes blobFloat3 { 0% { transform: translate3d(-50%,0,0) scale(1); } 33% { transform: translate3d(-43%, -6%, 0) scale(1.07); } 66% { transform: translate3d(-57%, 4%, 0) scale(0.96); } 100% { transform: translate3d(-50%,0,0) scale(1); } }

        .animate-blob1 { animation: blobFloat1 20s ease-in-out infinite; }
        .animate-blob2 { animation: blobFloat2 22s ease-in-out infinite; }
        .animate-blob3 { animation: blobFloat3 26s ease-in-out infinite; }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-blob1, .animate-blob2, .animate-blob3 { animation: none; }
        }
      `}</style>
    </section>
  );
}
