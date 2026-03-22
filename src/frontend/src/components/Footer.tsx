import { SiFacebook, SiInstagram } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer className="w-full bg-[oklch(0.185_0.055_42)] text-[oklch(0.93_0.022_60)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <p className="font-serif font-bold text-2xl tracking-widest text-[oklch(0.97_0.012_60)] mb-3">
              THE MESSY DOOR
            </p>
            <p className="text-xs tracking-widest text-[oklch(0.72_0.13_72)] uppercase mb-4">
              Cafe
            </p>
            <p className="text-sm text-[oklch(0.65_0.030_58)] leading-relaxed">
              Artisan coffee, warm spaces, and stories brewed with love.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.instagram.link"
                className="w-9 h-9 rounded-full border border-[oklch(0.35_0.07_42)] flex items-center justify-center hover:border-[oklch(0.72_0.13_72)] hover:text-[oklch(0.72_0.13_72)] transition-colors"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.facebook.link"
                className="w-9 h-9 rounded-full border border-[oklch(0.35_0.07_42)] flex items-center justify-center hover:border-[oklch(0.72_0.13_72)] hover:text-[oklch(0.72_0.13_72)] transition-colors"
              >
                <SiFacebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.13_72)] mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {["HOME", "THE EXPERIENCE", "MENU", "ABOUT US", "CONTACT"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      data-ocid={`footer.${item.toLowerCase().replace(/\s+/g, "_")}.link`}
                      className="text-sm text-[oklch(0.65_0.030_58)] hover:text-[oklch(0.93_0.022_60)] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.13_72)] mb-5">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-[oklch(0.65_0.030_58)]">
              <li>Mon–Fri: 7:00 AM – 8:00 PM</li>
              <li>Saturday: 8:00 AM – 9:00 PM</li>
              <li>Sunday: 8:00 AM – 9:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.13_72)] mb-5">
              Visit
            </h4>
            <p className="text-sm text-[oklch(0.65_0.030_58)] leading-relaxed">
              Ground Floor, Shop No. 1,
              <br />
              Gala Business Centre,
              <br />
              2, HL College Road,
              <br />
              Near Reliance Fresh,
              <br />
              Navrangpura, Ahmedabad,
              <br />
              Gujarat 380006
            </p>
            <a
              href="tel:+918511123254"
              className="text-sm text-[oklch(0.65_0.030_58)] hover:text-[oklch(0.72_0.13_72)] transition-colors mt-3 block"
            >
              +91 85111 23254
            </a>
          </div>
        </div>

        <div className="border-t border-[oklch(0.28_0.05_42)] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[oklch(0.50_0.030_58)]">
            © {year} The Messy Door Cafe. All rights reserved.
          </p>
          <p className="text-xs text-[oklch(0.50_0.030_58)]">
            Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[oklch(0.72_0.13_72)] transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
