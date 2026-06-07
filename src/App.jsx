import { useState, useEffect, useRef } from "react";
import "./index.css";
import "./App.css";

const ORDER_EMAIL = "orders@photostudio.com";

// ─── SCROLL REVEAL HOOK ──────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const services = [
  { id: 1, emoji: "🖼️", name: "Canvas Prints",    sizes: "12×16, 16×20, 24×36 in",       price: "₹599", original: "₹850",  discount: "30% OFF", badge: "Best Seller" },
  { id: 2, emoji: "🌸", name: "Photo Frames",     sizes: "4×6, 5×7, 8×10 in",             price: "₹299", original: null,    discount: null,      badge: null },
  { id: 3, emoji: "📔", name: "Photo Books",      sizes: "A4, A5 — 20 to 60 pages",       price: "₹899", original: "₹1200", discount: "25% OFF", badge: "New" },
  { id: 4, emoji: "🎞️", name: "Film Strips Print", sizes: "4×12, 6×18 in",                price: "₹349", original: "₹499",  discount: "30% OFF", badge: null },
  { id: 5, emoji: "📅", name: "Photo Calendar",   sizes: "A3, A4 — 12 months",            price: "₹649", original: null,    discount: null,      badge: "Seasonal" },
  { id: 6, emoji: "✨", name: "Glitter Prints",   sizes: "5×7, 8×10 in",                  price: "₹449", original: "₹599",  discount: "25% OFF", badge: "Popular" },
  { id: 7, emoji: "🎁", name: "Gift Mugs",        sizes: "11 oz, 15 oz",                  price: "₹399", original: null,    discount: null,      badge: null },
  { id: 8, emoji: "🪞", name: "Acrylic Prints",   sizes: "10×10, 16×16, 20×20 in",        price: "₹799", original: "₹1100", discount: "27% OFF", badge: "Premium" },
];

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = ["home", "about", "services", "contact"];
  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#home" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo("home"); }}>
          <div className="nav-logo-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          </div>
          <span className="nav-logo-text">Pixel<span>Bloom</span></span>
        </a>
        <ul className="nav-links">
          {navLinks.map(id => (
            <li key={id}>
              <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id); }}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {dark ? "☀️" : "🌙"}
          </button>
          <button className={`hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navLinks.map(id => (
          <a key={id} href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id); }}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

// ─── HERO (animates on load, not scroll) ─────────────────────────────────────
function Hero() {
  return (
    <section id="home">
      <div className="hero-bg-blobs">
        <div className="blob blob-1" /><div className="blob blob-2" /><div className="blob blob-3" />
      </div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge hero-reveal">
            <span className="hero-badge-dot" /> Premium Photo Printing
          </div>
          <h1 className="hero-title hero-reveal hero-delay-1">
            Your Memories,<em>Beautifully Printed</em>
          </h1>
          <p className="hero-desc hero-reveal hero-delay-2">
            From cherished portraits to grand canvas art — we bring your photos to life with stunning quality and vibrant detail.
          </p>
          <div className="hero-actions hero-reveal hero-delay-3">
            <button className="btn-primary" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              Explore Prints
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get in Touch
            </button>
          </div>
          <div className="hero-stats hero-reveal hero-delay-4">
            <div className="stat"><div className="stat-num">5k+</div><div className="stat-label">Happy Customers</div></div>
            <div className="stat"><div className="stat-num">50+</div><div className="stat-label">Print Styles</div></div>
            <div className="stat"><div className="stat-num">48h</div><div className="stat-label">Fast Delivery</div></div>
          </div>
        </div>
        <div className="hero-visual hero-reveal hero-delay-2">
          <div className="hero-photo-grid">
            <div className="hero-photo-card tall">
              <div className="hero-photo-placeholder h-tall">🌺
                <div className="photo-overlay-text">Canvas Print</div>
              </div>
            </div>
            <div className="hero-photo-card"><div className="hero-photo-placeholder h-short">🎞️</div></div>
            <div className="hero-photo-card"><div className="hero-photo-placeholder h-short">📔</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About() {
  const features = [
    { icon: "🎨", title: "Professional Quality", desc: "Archival-grade inks and premium paper ensure lasting brilliance." },
    { icon: "🚀", title: "Fast Turnaround",      desc: "Ready in 24–48 hours. Express options available." },
    { icon: "📦", title: "Safe Packaging",        desc: "Rigid mailers and protective wrapping on every order." },
    { icon: "💝", title: "Custom Sizes",          desc: "We print to any dimension — just ask." },
  ];
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-stack reveal">
            <div className="about-badge-float">
              <div className="num">8+</div><div className="lbl">Years of craft</div>
            </div>
            <div className="about-img-main">🌸</div>
            <div className="about-img-accent">📷</div>
          </div>
          <div className="about-text">
            <p className="section-label reveal">About Us</p>
            <h2 className="section-title reveal reveal-delay-1">Crafting prints with <em>heart & precision</em></h2>
            <p className="reveal reveal-delay-2">
              At PixelBloom, we believe every photograph carries a story worth preserving. Since 2016, we've been turning digital moments into tangible keepsakes — from intimate portrait prints to statement wall art.
            </p>
            <p className="reveal reveal-delay-3">
              Our studio uses cutting-edge printing technology paired with the finest materials to ensure every print exceeds expectations. Whether it's a birthday gift or decorating your living space, we print it with love.
            </p>
            <div className="about-features">
              {features.map((f, i) => (
                <div key={i} className={`about-feat reveal reveal-delay-${i + 2}`}>
                  <div className="feat-icon">{f.icon}</div>
                  <div className="feat-text"><h4>{f.title}</h4><p>{f.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────
function ServiceCard({ item, onOrder }) {
  return (
    <div className="service-card">
      <div className="card-image-wrap">
        <div className="card-image-placeholder">{item.emoji}</div>
        {item.badge && <span className="card-badge">{item.badge}</span>}
      </div>
      <div className="card-body">
        <h3 className="card-name">{item.name}</h3>
        {item.sizes && <p className="card-sizes">📐 {item.sizes}</p>}
        <div className="card-price-row">
          <span className="card-price">{item.price}</span>
          {item.original && <span className="card-original">{item.original}</span>}
          {item.discount && <span className="card-discount">{item.discount}</span>}
        </div>
        <button className="btn-order" onClick={() => onOrder(item)}>Order Now</button>
      </div>
    </div>
  );
}

// ─── SERVICES ────────────────────────────────────────────────────────────────
function Services({ showToast }) {
  const handleOrder = (item) => {
    const subject = encodeURIComponent(`Order Enquiry: ${item.name}`);
    const body = encodeURIComponent(
      `Hi PixelBloom Team,\n\nI'd like to order:\n\nProduct: ${item.name}\nSize: ${item.sizes || "Default"}\nPrice: ${item.price}\n\nPlease contact me with further details.\n\nThank you!`
    );
    window.location.href = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
    showToast("📬 Order email opened! We'll contact you soon.");
  };

  return (
    <section id="services">
      <div className="container">
        <div className="services-header">
          <p className="section-label reveal">Our Products</p>
          <h2 className="section-title reveal reveal-delay-1">Print <em>everything</em> you love</h2>
          <p className="reveal reveal-delay-2" style={{ color: "var(--text3)", maxWidth: 480, margin: "0 auto", fontSize: "0.95rem" }}>
            Explore our full range of premium photo products — crafted for every occasion.
          </p>
        </div>
        <div className="services-grid">
          {services.map((item, i) => (
            <div key={item.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <ServiceCard item={item} onOrder={handleOrder} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact({ showToast }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast("⚠️ Please fill in all required fields.");
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`New Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", phone: "", message: "" });
      showToast("✉️ Message sent! We'll get back to you shortly.");
    }, 800);
  };

  const contactItems = [
    { icon: "📍", label: "Location",  value: "123 Bloom Street, Chennai, Tamil Nadu", href: "https://maps.google.com" },
    { icon: "📧", label: "Email",     value: "orders@photostudio.com",                href: `mailto:${ORDER_EMAIL}` },
    { icon: "📸", label: "Instagram", value: "@pixelbloom.studio",                    href: "https://instagram.com" },
  ];

  return (
    <section id="contact">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="section-label reveal">Get In Touch</p>
          <h2 className="section-title reveal reveal-delay-1">Let's create something <em>beautiful</em></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>We'd love to hear from you</h3>
            <p>Have a special project in mind? Custom bulk orders? Or simply want to enquire — we're just a message away. Our team responds within 24 hours.</p>
            <div className="contact-items">
              {contactItems.map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noreferrer" className="contact-item">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-text">
                    <div className="label">{item.label}</div>
                    <div className="value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label>Phone (optional)</label>
              <input type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea name="message" placeholder="Tell us about your project or order..." value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn-submit" disabled={sending}>
              {sending ? "Sending…" : "Send Message ✉️"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── MINI FOOTER ─────────────────────────────────────────────────────────────
function MiniFooter() {
  return (
    <footer className="mini-footer">
      <div className="mini-footer-inner">
        <div className="footer-logo">Pixel<span>Bloom</span></div>
        <p className="footer-copy">© {new Date().getFullYear()} PixelBloom Studio. All rights reserved.</p>
        <div className="footer-links">
          {["home","services","contact"].map(id => (
            <a key={id} href={`#${id}`} onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── TOAST ───────────────────────────────────────────────────────────────────
function Toast({ msg, visible }) {
  return <div className={`toast${visible ? " show" : ""}`}>{msg}</div>;
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(false);
  const [toast, setToast] = useState({ msg: "", visible: false });
  const toastTimer = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  // Boot Intersection Observer after first render
  useScrollReveal();

  const showToast = (msg) => {
    clearTimeout(toastTimer.current);
    setToast({ msg, visible: true });
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), 3500);
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
      <MiniFooter />
      <Toast msg={toast.msg} visible={toast.visible} />
    </>
  );
}
