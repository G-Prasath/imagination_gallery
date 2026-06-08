const FEATURES = [
  { icon: "🎨", title: "Professional Quality", desc: "Archival-grade inks and premium paper ensure lasting brilliance." },
  { icon: "🚀", title: "Fast Turnaround",      desc: "Ready in 24–48 hours. Express options available." },
  { icon: "📦", title: "Safe Packaging",        desc: "Rigid mailers and protective wrapping on every order." },
  { icon: "💝", title: "Custom Sizes",          desc: "We print to any dimension — just ask." },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-100 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ── Image stack ── */}
          <div className="reveal relative max-w-xs lg:max-w-none mx-auto lg:mx-0">
            {/* Floating badge */}
            <div className="absolute top-4 -left-4 z-10 px-4 py-3 rounded-2xl
                            bg-white dark:bg-dark-600
                            border border-pink-200/30 dark:border-pink-600/20
                            shadow-[0_6px_22px_rgba(200,80,100,0.1)]">
              <div className="font-[Cormorant_Garamond] text-2xl font-semibold text-pink-500 leading-none">8+</div>
              <div className="text-[11px] text-pink-900/50 dark:text-pink-400/60 mt-0.5">Years of craft</div>
            </div>
            {/* Main */}
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden flex items-center justify-center text-8xl
                            bg-gradient-to-br from-pink-100 to-pink-200
                            dark:from-dark-700 dark:to-dark-800
                            shadow-[0_20px_60px_rgba(200,80,100,0.16)]">🌸</div>
            {/* Accent */}
            <div className="absolute -bottom-4 -right-4 w-[52%] aspect-square rounded-[20px]
                            bg-gradient-to-br from-pink-400 to-pink-600
                            flex items-center justify-center text-4xl
                            shadow-[0_8px_28px_rgba(232,68,114,0.3)]
                            border-4 border-cream-100 dark:border-dark-800">📷</div>
          </div>

          {/* ── Text ── */}
          <div>
            <p className="reveal font-body text-[11px] font-medium tracking-[3px] uppercase text-pink-500 mb-3">
              About Us
            </p>
            <h2 className="reveal reveal-d1 font-[Cormorant_Garamond] font-light leading-[1.15] mb-5
                           text-[clamp(1.8rem,3vw,2.8rem)] text-dark-900 dark:text-pink-50">
              Crafting prints with <em className="italic text-pink-500">heart & precision</em>
            </h2>
            <p className="reveal reveal-d2 text-sm text-pink-900/60 dark:text-pink-200/65 leading-[1.85] mb-4">
              At PixelBloom, we believe every photograph carries a story worth preserving. Since 2016,
              we've been turning digital moments into tangible keepsakes — from intimate portrait prints
              to statement wall art.
            </p>
            <p className="reveal reveal-d3 text-sm text-pink-900/60 dark:text-pink-200/65 leading-[1.85] mb-8">
              Our studio uses cutting-edge printing technology paired with the finest materials
              to ensure every print exceeds expectations. Whether it's a birthday gift or decorating
              your living space, we print it with love.
            </p>

            <div className="flex flex-col gap-3">
              {FEATURES.map((f, i) => (
                <div key={i}
                     className={`reveal reveal-d${i + 1} flex items-start gap-3.5 p-4 rounded-xl
                                bg-white dark:bg-dark-600
                                border border-pink-200/20 dark:border-pink-600/15
                                transition-all duration-300
                                hover:border-pink-300 dark:hover:border-pink-500/30
                                hover:translate-x-1 hover:shadow-[0_2px_12px_rgba(200,80,100,0.08)]`}>
                  <div className="w-9 h-9 flex-shrink-0 rounded-[10px] flex items-center justify-center text-lg
                                  bg-gradient-to-br from-pink-100 to-pink-200
                                  dark:from-dark-700 dark:to-dark-800">{f.icon}</div>
                  <div>
                    <h4 className="text-sm font-medium text-dark-900 dark:text-pink-50 mb-0.5">{f.title}</h4>
                    <p className="text-xs text-pink-900/50 dark:text-pink-400/60">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
