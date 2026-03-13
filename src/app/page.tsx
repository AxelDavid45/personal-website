export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      {/* Floating glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-purple-500/20 top-[10%] left-[5%] animate-pulse-slow fixed" />
      <div className="glow-orb w-[400px] h-[400px] bg-sky-500/15 bottom-[10%] right-[10%] animate-pulse-slow fixed" style={{ animationDelay: "2s" }} />

      <div className="w-full max-w-lg">
        {/* Avatar + Name */}
        <div className="flex flex-col items-center mb-10 opacity-0 animate-fade-in-up">
          {/* Animated avatar ring */}
          <div className="relative mb-6">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-sky-400 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-br from-violet-400 to-sky-400 bg-clip-text text-transparent">
                  AE
                </span>
              </div>
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-[3px] border-[#0a0a0f]" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Axel Espinosa
          </h1>
          <p className="text-lg text-white/50 font-light mb-4">
            Developer Advocate at AWS for LATAM
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {["AWS", "Serverless", "Node.js", "React"].map((tech) => (
              <span key={tech} className="tech-badge px-3 py-1 rounded-full text-xs text-white/40">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="glass-card rounded-2xl p-5 mb-6 opacity-0 animate-fade-in-up stagger-2">
          <p className="text-sm text-white/50 leading-relaxed text-center">
            Ex software engineer turned Developer Advocate at AWS. Passionate about
            empowering the LATAM developer community through content, talks, and
            building with cloud-native technologies.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
          {/* Instagram */}
          <a
            href="https://instagram.com/fromchiapasdev"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link glass-card rounded-2xl p-4 flex items-center gap-4 opacity-0 animate-fade-in-up stagger-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">Instagram</p>
              <p className="text-xs text-white/40">@fromchiapasdev</p>
            </div>
            <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Blog */}
          <a
            href="https://blog.ademapps.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link glass-card rounded-2xl p-4 flex items-center gap-4 opacity-0 animate-fade-in-up stagger-4"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">Blog</p>
              <p className="text-xs text-white/40">blog.ademapps.dev</p>
            </div>
            <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/axelespinosa"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link glass-card rounded-2xl p-4 flex items-center gap-4 opacity-0 animate-fade-in-up stagger-5"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">LinkedIn</p>
              <p className="text-xs text-white/40">Axel Espinosa</p>
            </div>
            <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AxelDavid45"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link glass-card rounded-2xl p-4 flex items-center gap-4 opacity-0 animate-fade-in-up stagger-6"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">GitHub</p>
              <p className="text-xs text-white/40">AxelDavid45</p>
            </div>
            <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/im_not_ajscoder"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link glass-card rounded-2xl p-4 flex items-center gap-4 opacity-0 animate-fade-in-up stagger-7"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">X (Twitter)</p>
              <p className="text-xs text-white/40">@im_not_ajscoder</p>
            </div>
            <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center opacity-0 animate-fade-in-up stagger-7">
          <p className="text-xs text-white/20">
            From Chiapas, Mexico
          </p>
        </div>
      </div>
    </main>
  );
}
