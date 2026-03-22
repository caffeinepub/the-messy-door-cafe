import { motion } from "motion/react";
import { Suspense } from "react";
import { CafeScene } from "./CafeScene";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/cafe-hero-bg.dim_1920x1080.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[oklch(0.12_0.04_42/0.65)]" />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Suspense fallback={null}>
          <CafeScene />
        </Suspense>
      </div>

      {/* Hero text overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs md:text-sm font-sans font-medium tracking-[0.4em] text-[oklch(0.80_0.10_72)] uppercase mb-4"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-[oklch(0.97_0.012_60)] leading-tight mb-4"
        >
          The Messy Door
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-serif italic text-xl md:text-2xl text-[oklch(0.85_0.030_60)] mb-3"
        >
          Cafe
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-sm md:text-base font-sans text-[oklch(0.80_0.025_60)] max-w-md mb-10 tracking-wide"
        >
          Artisan coffee, warm spaces, and stories brewed with love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex gap-4"
        >
          <a
            href="#menu"
            data-ocid="hero.primary_button"
            className="px-8 py-3.5 bg-[oklch(0.72_0.13_72)] text-[oklch(0.15_0.04_42)] font-sans font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-[oklch(0.80_0.10_72)] transition-all duration-300 shadow-warm hover:shadow-lg hover:scale-105"
          >
            Explore the Cafe
          </a>
          <a
            href="#about"
            data-ocid="hero.secondary_button"
            className="px-8 py-3.5 border border-[oklch(0.80_0.10_72/0.6)] text-[oklch(0.93_0.022_60)] font-sans font-medium text-sm tracking-widest uppercase rounded-full hover:border-[oklch(0.80_0.10_72)] hover:text-[oklch(0.80_0.10_72)] transition-all duration-300"
          >
            Our Story
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[oklch(0.75_0.025_60)] text-xs tracking-widest">
            SCROLL
          </span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-[oklch(0.72_0.13_72)] to-transparent animate-float" />
        </motion.div>
      </div>
    </section>
  );
}
