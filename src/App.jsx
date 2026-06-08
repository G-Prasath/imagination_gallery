import { useState, useEffect, useRef } from "react";
import "./index.css";

import Navbar   from "./components/Navbar.jsx";
import Hero     from "./components/Hero.jsx";
import About    from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact  from "./components/Contact.jsx";
import Footer   from "./components/Footer.jsx";
import Toast    from "./components/Toast.jsx";

/* Scroll-reveal: adds .is-visible when element enters viewport (once) */
function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  // Default = light mode (false)
  const [dark, setDark] = useState(false);
  const [toast, setToast] = useState({ msg: "", visible: false });
  const timer = useRef(null);

  // Apply / remove "dark" class on <html> — this drives Tailwind's dark: variants
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  useScrollReveal();

  const showToast = (msg) => {
    clearTimeout(timer.current);
    setToast({ msg, visible: true });
    timer.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), 3500);
  };

  return (
    <>
      <Navbar dark={dark} toggleTheme={() => setDark(d => !d)} />
      <main>
        <Hero />
        <About />
        <Services showToast={showToast} />
        <Contact showToast={showToast} />
      </main>
      <Footer />
      <Toast msg={toast.msg} visible={toast.visible} />
    </>
  );
}
