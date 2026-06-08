const ORDER_EMAIL = "orders@photostudio.com";

const SERVICES = [
  { id:1, emoji:"🖼️", name:"Canvas Prints",     sizes:"12×16, 16×20, 24×36 in",  price:"₹599", original:"₹850",  discount:"30% OFF", badge:"Best Seller" },
  { id:2, emoji:"🌸", name:"Photo Frames",      sizes:"4×6, 5×7, 8×10 in",        price:"₹299", original:null,    discount:null,      badge:null },
  { id:3, emoji:"📔", name:"Photo Books",       sizes:"A4, A5 — 20 to 60 pages",  price:"₹899", original:"₹1200", discount:"25% OFF", badge:"New" },
  { id:4, emoji:"🎞️", name:"Film Strips Print", sizes:"4×12, 6×18 in",            price:"₹349", original:"₹499",  discount:"30% OFF", badge:null },
  { id:5, emoji:"📅", name:"Photo Calendar",    sizes:"A3, A4 — 12 months",       price:"₹649", original:null,    discount:null,      badge:"Seasonal" },
  { id:6, emoji:"✨", name:"Glitter Prints",    sizes:"5×7, 8×10 in",             price:"₹449", original:"₹599",  discount:"25% OFF", badge:"Popular" },
  { id:7, emoji:"🎁", name:"Gift Mugs",         sizes:"11 oz, 15 oz",             price:"₹399", original:null,    discount:null,      badge:null },
  { id:8, emoji:"🪞", name:"Acrylic Prints",    sizes:"10×10, 16×16, 20×20 in",   price:"₹799", original:"₹1100", discount:"27% OFF", badge:"Premium" },
];

function ServiceCard({ item, onOrder }) {
  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden
                    bg-white dark:bg-dark-600
                    border border-pink-200/20 dark:border-pink-600/15
                    transition-all duration-300
                    hover:-translate-y-1.5
                    hover:shadow-[0_20px_60px_rgba(200,80,100,0.16)]
                    hover:border-pink-200 dark:hover:border-pink-500/30">
      {/* Image */}
      <div className="relative bg-gradient-to-br from-pink-50 to-cream-200
                      dark:from-dark-700 dark:to-dark-800">
        <div className="h-44 flex items-center justify-center text-[3.5rem]">{item.emoji}</div>
        {item.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold
                           tracking-wider uppercase text-white bg-pink-500">
            {item.badge}
          </span>
        )}
      </div>
      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-[Cormorant_Garamond] text-xl font-normal mb-1.5
                       text-dark-900 dark:text-pink-50">{item.name}</h3>
        {item.sizes && (
          <p className="text-xs text-pink-900/50 dark:text-pink-400/60 mb-3">📐 {item.sizes}</p>
        )}
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <span className="text-lg font-semibold text-pink-500">{item.price}</span>
          {item.original && (
            <span className="text-sm line-through text-pink-900/40 dark:text-pink-400/50">{item.original}</span>
          )}
          {item.discount && (
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full
                             bg-pink-100 dark:bg-pink-500/15
                             text-pink-600 dark:text-pink-300">{item.discount}</span>
          )}
        </div>
        <button
          onClick={() => onOrder(item)}
          className="mt-auto w-full py-2.5 rounded-xl text-sm font-medium text-white cursor-pointer
                     bg-gradient-to-br from-pink-400 to-pink-600 border-none
                     transition-all duration-200
                     hover:opacity-90 hover:-translate-y-px
                     hover:shadow-[0_6px_18px_rgba(232,68,114,0.38)]">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default function Services({ showToast }) {
  const handleOrder = (item) => {
    const sub  = encodeURIComponent(`Order Enquiry: ${item.name}`);
    const body = encodeURIComponent(
      `Hi PixelBloom Team,\n\nI'd like to order:\n\nProduct: ${item.name}\nSize: ${item.sizes || "Default"}\nPrice: ${item.price}\n\nPlease contact me with further details.\n\nThank you!`
    );
    window.location.href = `mailto:${ORDER_EMAIL}?subject=${sub}&body=${body}`;
    showToast("📬 Order email opened! We'll contact you soon.");
  };

  return (
    <section id="services" className="py-24 bg-cream-50 dark:bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="reveal font-body text-[11px] font-medium tracking-[3px] uppercase text-pink-500 mb-3">
            Our Products
          </p>
          <h2 className="reveal reveal-d1 font-[Cormorant_Garamond] font-light mb-4
                         text-[clamp(1.8rem,3vw,2.8rem)] text-dark-900 dark:text-pink-50">
            Print <em className="italic text-pink-500">everything</em> you love
          </h2>
          <p className="reveal reveal-d2 text-sm max-w-md mx-auto text-pink-900/55 dark:text-pink-200/60">
            Explore our full range of premium photo products — crafted for every occasion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((item, i) => (
            <div key={item.id} className={`reveal reveal-d${(i % 4) + 1}`}>
              <ServiceCard item={item} onOrder={handleOrder} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
