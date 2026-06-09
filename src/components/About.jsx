const FEATURES = [
  {
    icon: "🎨",
    title: "Personalized Creations",
    desc: "Every product is customized to reflect your story, style, and imagination.",
  },
  {
    icon: "✨",
    title: "Thoughtfully Designed",
    desc: "Carefully crafted with attention to detail to make every gift truly special.",
  },
  {
    icon: "🎁",
    title: "Perfect for Every Occasion",
    desc: "Birthdays, anniversaries, farewells, celebrations, or just because",
  },
  {
    icon: "❤️",
    title: "Made with Care",
    desc: "Every order is created with passion, creativity, and a personal touch",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-100 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* ── Image stack ── */}
          <div className="reveal relative max-w-xs lg:max-w-none mx-auto lg:mx-0">
            {/* Floating badge */}
            <div
              className="absolute top-4 -left-4 z-10 px-4 py-3 rounded-2xl
                            bg-white dark:bg-dark-600
                            border border-pink-200/30 dark:border-pink-600/20
                            shadow-[0_6px_22px_rgba(200,80,100,0.1)]"
            >
              <div className="font-[Cormorant_Garamond] text-2xl font-semibold text-pink-500 leading-none">
                2+
              </div>
              <div className="text-[11px] text-pink-900/50 dark:text-pink-400/60 mt-0.5">
                Years of craft
              </div>
            </div>
            {/* Main */}
            <div
              className="w-full aspect-[4/5] rounded-3xl overflow-hidden flex items-center justify-center text-8xl
                            bg-gradient-to-br from-pink-100 to-pink-200
                            dark:from-dark-700 dark:to-dark-800
                            shadow-[0_20px_60px_rgba(200,80,100,0.16)]"
            >
              {/* <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/about_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
               <img src="/about_us.png" alt="logo"  />
            </div>
            {/* Accent */}
            {/* <div
              className="absolute -bottom-4 -right-4 w-[52%] aspect-square rounded-[20px]
                            bg-white dark:bg-dark-600
                            flex items-center justify-center text-4xl
                            shadow-[0_8px_28px_rgba(232,68,114,0.3)]
                            border-4 border-cream-100 dark:border-dark-800"
            >
              <img src="/about_us.png" alt="logo"  />
            </div> */}
          </div>

          {/* ── Text ── */}
          <div>
            <p className="reveal font-body text-[11px] font-medium tracking-[3px] uppercase text-pink-500 mb-3">
              About Us
            </p>
            <h2
              className="reveal reveal-d1 font-[Cormorant_Garamond] font-light leading-[1.15] mb-5
                           text-[clamp(1.8rem,3vw,2.8rem)] text-dark-900 dark:text-pink-50"
            >
              Crafting memories with{" "}
              <em className="italic text-pink-500">
                imagination & creativity from your gallery
              </em>
            </h2>
            <p className="reveal reveal-d2 text-sm text-pink-900/60 dark:text-pink-200/65 leading-[1.85] mb-4">
              At Imagination Gallery, we believe every gift should tell a story.
              What begins as a simple idea, photo, or memory is transformed into
              a personalized keepsake designed to be cherished for years.
            </p>
            <p className="reveal reveal-d3 text-sm text-pink-900/60 dark:text-pink-200/65 leading-[1.85] mb-8">
              From custom Polaroids and aesthetic photo frames to unique
              handcrafted gifts, we help turn your imagination into meaningful
              creations that celebrate life's special moments.
            </p>

            <div className="flex flex-col gap-3">
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className={`reveal reveal-d${i + 1} flex items-start gap-3.5 p-4 rounded-xl
                                bg-white dark:bg-dark-600
                                border border-pink-200/20 dark:border-pink-600/15
                                transition-all duration-300
                                hover:border-pink-300 dark:hover:border-pink-500/30
                                hover:translate-x-1 hover:shadow-[0_2px_12px_rgba(200,80,100,0.08)]`}
                >
                  <div
                    className="w-9 h-9 flex-shrink-0 rounded-[10px] flex items-center justify-center text-lg
                                  bg-gradient-to-br from-pink-100 to-pink-200
                                  dark:from-dark-700 dark:to-dark-800"
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-dark-900 dark:text-pink-50 mb-0.5">
                      {f.title}
                    </h4>
                    <p className="text-xs text-pink-900/50 dark:text-pink-400/60">
                      {f.desc}
                    </p>
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
