export default function Footer() {
  const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="py-6 px-6 border-t border-pink-200/30 dark:border-pink-600/20
                       bg-cream-200 dark:bg-dark-700">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="font-[Cormorant_Garamond] text-xl text-pink-900/70 dark:text-pink-200">
          Imagination<span className="text-pink-500">Gallery</span>
        </div>
        <p className="text-xs text-pink-900/45 dark:text-pink-400/55">
          © {new Date().getFullYear()} Imagination Gallery. All rights reserved.
        </p>
        <div className="flex gap-5">
          {["home","services","contact"].map(id => (
            <a key={id} href={`#${id}`}
               onClick={e => { e.preventDefault(); goto(id); }}
               className="text-xs no-underline cursor-pointer
                          text-pink-900/45 dark:text-pink-400/55
                          transition-colors duration-200 hover:text-pink-500">
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
