export default function Hero() {
  const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16
                 bg-gradient-to-br from-cream-50 via-pink-50 to-cream-100
                 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700">

      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{ animation: "float 6s ease-in-out infinite" }}
             className="absolute w-[480px] h-[480px] rounded-full opacity-30
                        bg-gradient-radial from-pink-200 to-transparent
                        blur-[80px] -top-32 -right-20 dark:opacity-50 dark:from-pink-500/20"/>
        <div style={{ animation: "float 6s 2s ease-in-out infinite" }}
             className="absolute w-72 h-72 rounded-full opacity-25
                        bg-gradient-radial from-cream-200 to-transparent
                        blur-[80px] -bottom-10 -left-14 dark:opacity-40 dark:from-pink-600/15"/>
        <div style={{ animation: "float 6s 4s ease-in-out infinite" }}
             className="absolute w-48 h-48 rounded-full opacity-20
                        bg-gradient-radial from-pink-100 to-transparent
                        blur-[60px] top-1/3 left-[42%]"/>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full
                      grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">

        {/* ── Left text ── */}
        <div>
          {/* Badge */}
          <div className="hero-anim inline-flex items-center gap-2 mb-6
                          bg-pink-100 dark:bg-pink-500/15
                          border border-pink-200 dark:border-pink-500/25
                          text-pink-600 dark:text-pink-300
                          px-4 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase">
            <span className="pulse-dot"/>
            Premium Photo Printing
          </div>

          <h1 className="hero-anim hero-d1 font-[Cormorant_Garamond] font-light leading-[1.1] mb-5
                         text-[clamp(2.6rem,5vw,4.4rem)]
                         text-dark-900 dark:text-pink-50">
            Your Memories,
            <em className="block italic text-pink-500">Beautifully Printed</em>
          </h1>

          <p className="hero-anim hero-d2 text-base leading-[1.8] mb-9 max-w-md
                        text-pink-900/60 dark:text-pink-200/70">
            From cherished portraits to grand canvas art — we bring your photos to life
            with stunning quality and vibrant detail.
          </p>

          <div className="hero-anim hero-d3 flex flex-wrap gap-3.5 mb-10">
            <button onClick={() => goto("services")}
                    className="px-8 py-3.5 rounded-full text-sm font-medium text-white cursor-pointer
                               bg-gradient-to-br from-pink-400 to-pink-600 border-none
                               shadow-[0_6px_24px_rgba(232,68,114,0.38)]
                               transition-all duration-300
                               hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(232,68,114,0.5)]">
              Explore Prints
            </button>
            <button onClick={() => goto("contact")}
                    className="px-7 py-3.5 rounded-full text-sm cursor-pointer bg-transparent
                               text-pink-900/70 dark:text-pink-200
                               border border-pink-200/50 dark:border-pink-600/30
                               transition-all duration-300
                               hover:border-pink-400 hover:text-pink-500
                               hover:bg-pink-50 dark:hover:bg-dark-700">
              Get in Touch
            </button>
          </div>

          <div className="hero-anim hero-d4 flex flex-wrap gap-7">
            {[["5k+","Happy Customers"],["50+","Print Styles"],["48h","Fast Delivery"]].map(([n,l]) => (
              <div key={l}>
                <div className="font-[Cormorant_Garamond] text-[2rem] font-semibold text-pink-500 leading-none">{n}</div>
                <div className="text-xs text-pink-900/50 dark:text-pink-400/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right photo grid ── */}
        <div className="hero-anim hero-d2 flex justify-center">
          <div className="grid grid-cols-2 gap-3 w-full max-w-[340px]">
            {/* Tall card */}
            <div className="row-span-2 rounded-2xl overflow-hidden
                            bg-white dark:bg-dark-600
                            border border-pink-200/20 dark:border-pink-600/15
                            shadow-[0_8px_32px_rgba(200,80,100,0.12)]
                            transition-transform duration-300 hover:-translate-y-1">
              <div className="h-64 flex items-center justify-center text-5xl relative
                              bg-gradient-to-br from-pink-100 to-cream-200
                              dark:from-dark-700 dark:to-dark-800">
                🌺
                <div className="absolute bottom-2.5 left-2.5 right-2.5
                                bg-white/85 dark:bg-dark-900/85 backdrop-blur-sm
                                rounded-lg px-2.5 py-1.5 text-[11px] font-medium
                                text-pink-900/70 dark:text-pink-300">
                  Canvas Print
                </div>
              </div>
            </div>
            {["🎞️","📔"].map((e,i) => (
              <div key={i}
                   className="rounded-2xl overflow-hidden
                              bg-white dark:bg-dark-600
                              border border-pink-200/20 dark:border-pink-600/15
                              shadow-[0_8px_32px_rgba(200,80,100,0.12)]
                              transition-transform duration-300 hover:-translate-y-1">
                <div className="h-[122px] flex items-center justify-center text-4xl
                                bg-gradient-to-br from-pink-100 to-cream-200
                                dark:from-dark-700 dark:to-dark-800">{e}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
