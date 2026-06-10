import { useState } from "react";

const ORDER_EMAIL = "imaginationgallery2025@gmail.com";

const CONTACT_ITEMS = [
  { icon: "📍", label: "Location",  value: "Chennai, Tamil Nadu", href: "" },
  { icon: "📧", label: "Email",     value: "imaginationgallery2025@gmail.com",                href: `mailto:${ORDER_EMAIL}` },
  { icon: "📸", label: "Instagram", value: "@imaginationgallery",                    href: "https://www.instagram.com/imaginationgallery2026/" },
];

const INPUT_CLS = [
  "w-full bg-white dark:bg-dark-800",
  "border border-pink-200/30 dark:border-pink-600/20",
  "rounded-lg px-4 py-3 text-sm outline-none",
  "text-dark-900 dark:text-pink-50",
  "placeholder:text-pink-900/40 dark:placeholder:text-pink-400/40",
  "transition-all duration-200",
  "focus:border-pink-400 focus:shadow-[0_0_0_3px_rgba(232,68,114,0.1)]",
].join(" ");

export default function Contact({ showToast }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const chg = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast("⚠️ Please fill in all required fields.");
      return;
    }
    setSending(true);
    const sub  = encodeURIComponent(`New Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${ORDER_EMAIL}?subject=${sub}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", phone: "", message: "" });
      showToast("✉️ Message sent! We'll get back to you shortly.");
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-cream-100 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="reveal font-body text-[11px] font-medium tracking-[3px] uppercase text-pink-500 mb-3">
            Let's Connect
          </p>
          <h2 className="reveal reveal-d1 font-[Cormorant_Garamond] font-light
                         text-[clamp(1.8rem,3vw,2.8rem)] text-dark-900 dark:text-pink-50">
            Let's create something <em className="italic text-pink-500">Memorable</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <div className="reveal">
            <h3 className="font-[Cormorant_Garamond] text-2xl font-light mb-3
                           text-dark-900 dark:text-pink-50">
              We'd love to hear your imaginations
            </h3>
            <p className="text-sm leading-[1.85] mb-8 text-pink-900/55 dark:text-pink-200/60">
              Whether it's a personalized gift, a cherished memory, or a unique creation you've imagined, we're here to transform it into something meaningful.
            </p>
            <div className="flex flex-col gap-3">
              {CONTACT_ITEMS.map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noreferrer"
                   className="flex items-center gap-3.5 p-3.5 rounded-xl no-underline
                              bg-white dark:bg-dark-600
                              border border-pink-200/20 dark:border-pink-600/15
                              text-pink-900/70 dark:text-pink-200
                              transition-all duration-200
                              hover:border-pink-300 dark:hover:border-pink-500/30
                              hover:translate-x-1 hover:text-pink-500 dark:hover:text-pink-400">
                  <div className="w-10 h-10 flex-shrink-0 rounded-[10px] flex items-center justify-center
                                  bg-gradient-to-br from-pink-400 to-pink-600 text-white text-base">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[11px] text-pink-900/45 dark:text-pink-400/55 tracking-wide mb-0.5">{c.label}</div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="reveal reveal-d2 flex flex-col gap-4" onSubmit={submit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium tracking-wide uppercase
                                  text-pink-900/60 dark:text-pink-200/70">Name *</label>
                <input className={INPUT_CLS} name="name" placeholder="Your full name"
                       value={form.name} onChange={chg} required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium tracking-wide uppercase
                                  text-pink-900/60 dark:text-pink-200/70">Email *</label>
                <input className={INPUT_CLS} type="email" name="email" placeholder="your@email.com"
                       value={form.email} onChange={chg} required />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium tracking-wide uppercase
                                text-pink-900/60 dark:text-pink-200/70">Phone (optional)</label>
              <input className={INPUT_CLS} type="tel" name="phone" placeholder="+91 12345 12345"
                     value={form.phone} onChange={chg} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium tracking-wide uppercase
                                text-pink-900/60 dark:text-pink-200/70">Message *</label>
              <textarea className={`${INPUT_CLS} min-h-[120px] resize-y`}
                        name="message" placeholder="Tell us about your idea, special occasion, or dream gift..."
                        value={form.message} onChange={chg} required />
            </div>
            <button type="submit" disabled={sending}
                    className="self-start px-9 py-3.5 rounded-full text-sm font-medium text-white cursor-pointer
                               bg-gradient-to-br from-pink-400 to-pink-600 border-none
                               shadow-[0_6px_24px_rgba(232,68,114,0.32)]
                               transition-all duration-300
                               hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(232,68,114,0.44)]
                               disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0">
              {sending ? "Sending…" : "Send Message ✉️"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
