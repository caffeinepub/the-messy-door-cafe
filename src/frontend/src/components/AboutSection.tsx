import { motion } from "motion/react";

const FEATURES = [
  {
    emoji: "☕",
    title: "Artisan Coffee",
    description:
      "Single-origin beans roasted in-house, brewed with precision and passion.",
  },
  {
    emoji: "🛋️",
    title: "Cozy Vibes",
    description:
      "Warm wood, soft light, and spaces designed for lingering conversation.",
  },
  {
    emoji: "❤️",
    title: "Made with Love",
    description:
      "Every bite and sip is crafted by hands that genuinely care about your experience.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full py-24 bg-[oklch(0.985_0.008_60)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Two-column */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-warm row-span-2 h-80">
                <img
                  src="/assets/generated/about-collage.dim_800x600.jpg"
                  alt="Cafe interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card h-36">
                <img
                  src="/assets/generated/menu-latte.dim_600x400.jpg"
                  alt="Latte art"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card h-36">
                <img
                  src="/assets/generated/menu-pastry.dim_600x400.jpg"
                  alt="Pastry"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[oklch(0.72_0.13_72/0.15)] rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[oklch(0.35_0.07_42/0.1)] rounded-full -z-10" />
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xs tracking-[0.4em] text-[oklch(0.35_0.07_42)] uppercase">
              Our Story
            </p>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-[oklch(0.22_0.052_42)] leading-tight">
              A Door That's Always Open
            </h2>
            <div className="w-16 h-0.5 bg-[oklch(0.72_0.13_72)]" />
            <p className="text-[oklch(0.45_0.04_42)] leading-relaxed">
              The Messy Door started as a dream between two friends who believed
              that the best cafes are the ones that feel like home — a little
              imperfect, always warm, and full of life.
            </p>
            <p className="text-[oklch(0.45_0.04_42)] leading-relaxed">
              We opened our doors on a rainy Tuesday in 2019, with a handwritten
              menu, mismatched chairs, and a single espresso machine. Today, The
              Messy Door is a beloved neighborhood gathering spot where locals
              come not just for coffee, but for community.
            </p>
            <p className="text-[oklch(0.45_0.04_42)] leading-relaxed">
              Every cup is pulled with intention. Every pastry is baked before
              dawn. And every guest is welcomed like a regular — because
              eventually, you will be.
            </p>
            <a
              href="#contact"
              data-ocid="about.primary_button"
              className="inline-block mt-4 px-7 py-3 bg-[oklch(0.22_0.052_42)] text-[oklch(0.97_0.012_60)] font-sans font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-[oklch(0.35_0.07_42)] transition-all duration-300"
            >
              Visit Us
            </a>
          </motion.div>
        </div>

        {/* Feature tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f, idx) => (
            <motion.div
              key={f.title}
              data-ocid={`about.item.${idx + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[oklch(0.97_0.012_60)] rounded-2xl p-8 text-center shadow-card border border-[oklch(0.92_0.025_58)] hover:shadow-warm transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{f.emoji}</div>
              <h3 className="font-serif font-semibold text-lg text-[oklch(0.22_0.052_42)] mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-[oklch(0.45_0.04_42)] leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
