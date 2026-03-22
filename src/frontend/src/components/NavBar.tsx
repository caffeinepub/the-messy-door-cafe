import { motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "THE EXPERIENCE", href: "#experience" },
  { label: "MENU", href: "#menu" },
  { label: "ABOUT US", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export function NavBar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.185_0.055_42/0.97)] shadow-lg backdrop-blur-md"
          : "bg-[oklch(0.185_0.055_42/0.88)] backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav
          className="hidden md:flex items-center gap-6"
          data-ocid="nav.section"
        >
          {NAV_LINKS.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
              onClick={() => setActive(link.href)}
              className={`relative text-xs font-sans font-medium tracking-widest transition-colors duration-200 px-3 py-1.5 rounded-full ${
                active === link.href
                  ? "bg-[oklch(0.72_0.13_72)] text-[oklch(0.15_0.04_42)]"
                  : "text-[oklch(0.93_0.022_60)] hover:text-[oklch(0.80_0.10_72)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#home" className="flex-1 md:flex-none text-center">
          <span className="font-serif font-bold text-lg md:text-xl tracking-widest text-[oklch(0.93_0.022_60)] hover:text-[oklch(0.80_0.10_72)] transition-colors">
            THE MESSY DOOR
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.slice(2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
              onClick={() => setActive(link.href)}
              className={`text-xs font-sans font-medium tracking-widest transition-colors duration-200 px-3 py-1.5 rounded-full ${
                active === link.href
                  ? "bg-[oklch(0.72_0.13_72)] text-[oklch(0.15_0.04_42)]"
                  : "text-[oklch(0.93_0.022_60)] hover:text-[oklch(0.80_0.10_72)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open navigation menu"
          className="md:hidden text-[oklch(0.93_0.022_60)] p-2"
          data-ocid="nav.toggle"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <title>Menu</title>
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
