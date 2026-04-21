import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./Button";
import { withBase } from "../utils/url";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function Navbar() {
  const [location, setLocation] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setLocation(BASE && path.startsWith(BASE) ? path.slice(BASE.length) || "/" : path);
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Team",     path: "/team" },
    { name: "Gallery",  path: "/gallery" },
    { name: "About",    path: "/about" },
    { name: "Contact",  path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-cream/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[96px] flex items-center justify-between">
        {/* Logo — official Puppy Style mark (760×444, already trimmed).
            Stacked: logo on top, script tagline centred underneath. */}
        <a href={withBase("/")} className="flex flex-col items-center group leading-none">
          <img
            src={withBase("/images/puppy-style-logo-trimmed.webp")}
            alt="Puppy Style"
            className="h-14 md:h-16 w-auto select-none"
            draggable={false}
          />
          <span className="font-script text-[13px] md:text-[14px] text-teal-deep mt-1 whitespace-nowrap">
            grooming · daycare · boutique
          </span>
        </a>

        {/* Desktop nav — shows at tablet width (md) and up */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={withBase(link.path)}
                  className={`relative text-[14px] lg:text-[15px] font-medium transition-colors ${
                    location === link.path
                      ? "text-teal-deep"
                      : "text-charcoal hover:text-teal-deep"
                  }`}
                >
                  {link.name}
                  {location === link.path && (
                    <span className="absolute left-0 right-0 -bottom-1.5 h-[3px] rounded-full bg-teal-deep" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <Button href="https://wa.me/34650708896" size="sm" external>
            Book on WhatsApp
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-charcoal"
          onClick={() => setIsMobileMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu — pointer-events off when closed so it can't block clicks */}
      <div
        className={`md:hidden absolute top-[96px] left-0 right-0 bg-cream/98 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-5 py-7 flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={withBase(link.path)}
                  className={`block text-lg font-medium transition-colors ${
                    location === link.path
                      ? "text-teal-deep"
                      : "text-charcoal"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <a
              href="tel:+34650708896"
              className="flex items-center justify-center gap-2 w-full px-7 py-3.5 rounded-full text-[15px] font-medium border-2 border-charcoal text-charcoal"
            >
              <Phone className="w-4 h-4" />
              +34 650 70 88 96
            </a>
            <Button href="https://wa.me/34650708896" className="w-full" external>
              Book on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
