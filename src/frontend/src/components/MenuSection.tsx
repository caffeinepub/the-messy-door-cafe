import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const MENU_IMAGES = [
  {
    src: "/assets/uploads/20260310121721-4.jpg",
    label: "Sizzlers, Pasta & Pizzas",
  },
  {
    src: "/assets/uploads/20260310121732-1.jpg",
    label: "Fondue, Bowls & Bread Affairs",
  },
  { src: "/assets/uploads/20260310121727-3.jpg", label: "Beverages & Coffee" },
  {
    src: "/assets/uploads/20260310121739-2.jpg",
    label: "Mocktails & Desserts",
  },
];

export function MenuSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? MENU_IMAGES.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === MENU_IMAGES.length - 1 ? 0 : c + 1));

  return (
    <section id="menu" className="w-full py-24 bg-[oklch(0.97_0.012_60)]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.4em] text-[oklch(0.35_0.07_42)] uppercase mb-3">
            What We Serve
          </p>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-[oklch(0.22_0.052_42)] tracking-wide">
            EXPLORE OUR MENU
          </h2>
          <div className="w-24 h-0.5 bg-[oklch(0.72_0.13_72)] mx-auto mt-6" />
        </motion.div>

        {/* Thumbnail tabs */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {MENU_IMAGES.map((img) => (
            <button
              key={img.label}
              type="button"
              onClick={() => setCurrent(MENU_IMAGES.indexOf(img))}
              className={`px-4 py-2 rounded-full text-xs font-sans font-medium tracking-widest uppercase transition-all duration-200 ${
                current === MENU_IMAGES.indexOf(img)
                  ? "bg-[oklch(0.22_0.052_42)] text-[oklch(0.97_0.012_60)] shadow"
                  : "bg-[oklch(0.92_0.025_58)] text-[oklch(0.35_0.07_42)] hover:bg-[oklch(0.86_0.025_55)]"
              }`}
            >
              {img.label}
            </button>
          ))}
        </div>

        {/* Main image viewer */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-[oklch(0.92_0.025_58)]">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={MENU_IMAGES[current].src}
              alt={MENU_IMAGES[current].label}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="w-full object-contain max-h-[70vh]"
            />
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm border border-[oklch(0.86_0.025_55)] flex items-center justify-center hover:bg-white shadow transition-all"
          >
            <ChevronLeft size={22} className="text-[oklch(0.22_0.052_42)]" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm border border-[oklch(0.86_0.025_55)] flex items-center justify-center hover:bg-white shadow transition-all"
          >
            <ChevronRight size={22} className="text-[oklch(0.22_0.052_42)]" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {MENU_IMAGES.map((img) => (
              <button
                key={img.label}
                type="button"
                onClick={() => setCurrent(MENU_IMAGES.indexOf(img))}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === MENU_IMAGES.indexOf(img)
                    ? "bg-[oklch(0.22_0.052_42)] scale-125"
                    : "bg-[oklch(0.72_0.13_72)/0.5]"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-[oklch(0.45_0.04_42)] mt-5 font-serif italic">
          Simply request, and we'll happily prepare your dish Jain-style!
        </p>
      </div>
    </section>
  );
}
