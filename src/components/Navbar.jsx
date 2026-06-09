import { useState, useEffect } from "react";

const NAV_LINKS = ["home", "about", "services", "contact"];

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const goto = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={[
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      "bg-cream-50/90 dark:bg-dark-900/92 backdrop-blur-lg",
      "border-b border-pink-200/40 dark:border-pink-600/20",
      scrolled ? "shadow-[0_8px_32px_rgba(200,80,100,0.13)]" : "",
    ].join(" ")}>

      {/* Main bar */}
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#home" onClick={e => { e.preventDefault(); goto("home"); }}
           className="flex items-center gap-y-2.5 gap-x-2 no-underline group">
         <img src="/ImaginationGalleryLogos.png" alt="logo" className="w-10" />
          <span className="font-[Cormorant_Garamond] text-2xl font-semibold
                           text-dark-900 dark:text-pink-50 transition-colors">
            <span className="text-pink-500">Imagination Gallery</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map(id => (
            <li key={id}>
              <a href={`#${id}`}
                 onClick={e => { e.preventDefault(); goto(id); }}
                 className="relative px-3.5 py-2 text-sm text-pink-900/70 dark:text-pink-200
                            no-underline rounded-lg transition-colors duration-200
                            hover:text-pink-500 dark:hover:text-pink-400
                            after:content-[''] after:absolute after:bottom-1 after:left-1/2
                            after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-pink-400
                            after:rounded-full after:transition-all after:duration-300
                            hover:after:w-1/2">
                {id[0].toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full cursor-pointer text-lg
                       border border-pink-200/40 dark:border-pink-600/25
                       bg-cream-100 dark:bg-dark-700
                       text-pink-900/60 dark:text-pink-200
                       flex items-center justify-center
                       transition-all duration-200
                       hover:bg-pink-100 dark:hover:bg-dark-600
                       hover:border-pink-400 hover:text-pink-500">
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            className={`md:hidden flex flex-col gap-[5px] p-1.5 bg-transparent border-none cursor-pointer ${open ? "ham-open" : ""}`}>
            <span className="bar1 block w-[22px] h-0.5 bg-dark-900 dark:bg-pink-50 rounded-sm transition-all duration-300"/>
            <span className="bar2 block w-[22px] h-0.5 bg-dark-900 dark:bg-pink-50 rounded-sm transition-all duration-300"/>
            <span className="bar3 block w-[22px] h-0.5 bg-dark-900 dark:bg-pink-50 rounded-sm transition-all duration-300"/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col px-6 py-2
                        bg-cream-50 dark:bg-dark-900
                        border-t border-pink-200/30 dark:border-pink-600/15">
          {NAV_LINKS.map(id => (
            <a key={id} href={`#${id}`}
               onClick={e => { e.preventDefault(); goto(id); }}
               className="py-3 text-base no-underline
                          text-pink-900/70 dark:text-pink-200
                          border-b border-pink-200/20 dark:border-pink-600/15 last:border-0
                          transition-colors duration-200 hover:text-pink-500">
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
