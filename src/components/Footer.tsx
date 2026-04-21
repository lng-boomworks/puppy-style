import { PawTrail } from "./PawPrint";
import { MapPin, Phone, Mail } from "lucide-react";
import { withBase } from "../utils/url";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  );
}
function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.2-1.5 1.5-1.5h1.6V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8.3v3h2.4v7h2.8z"/>
    </svg>
  );
}
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.5 14.3c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.9 1.2 3c.1.1 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-white/80 overflow-hidden">
      {/* Decorative curved top — echoes the salon's soft shapes */}
      <div className="absolute top-0 left-0 right-0 bg-cream h-10 rounded-b-[60%_20px]" aria-hidden="true" />
      <div className="relative pt-20">
        <PawTrail className="mb-10" color="#CDBCE6" count={7} opacity={0.5} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand — logo on transparent bg. `invert + hue-rotate 180°` flips
                black linework to white for readability on the dark footer
                while preserving the purple "Style" script's hue. */}
            <div className="lg:col-span-2">
              <a
                href={withBase("/")}
                className="inline-block mb-5"
                aria-label="Puppy Style — home"
              >
                <img
                  src={withBase("/images/puppy-style-logo-trimmed.webp")}
                  alt="Puppy Style"
                  className="h-14 md:h-16 w-auto select-none"
                  style={{ filter: "invert(1) hue-rotate(180deg)" }}
                  draggable={false}
                />
              </a>
              <p className="text-[15px] leading-relaxed mb-5 max-w-sm text-white/70">
                Premium yet welcoming pet services in La Marina — grooming,
                daycare, and a curated boutique. Bilingual EN / ES. One dog
                at a time, all the cuddles, none of the assembly line.
              </p>
              <p className="font-script text-[22px] text-teal-light">
                tail wags guaranteed
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white text-[20px] font-bold mb-5">Visit</h4>
              <ul className="flex flex-col gap-2.5 text-[15px]">
                <li><a href={withBase("/")} className="hover:text-white transition-colors">Home</a></li>
                <li><a href={withBase("/services")} className="hover:text-white transition-colors">Services</a></li>
                <li><a href={withBase("/team")} className="hover:text-white transition-colors">Meet the Team</a></li>
                <li><a href={withBase("/gallery")} className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href={withBase("/about")} className="hover:text-white transition-colors">About</a></li>
                <li><a href={withBase("/contact")} className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-[20px] font-bold mb-5">Say hello</h4>
              <ul className="flex flex-col gap-3 text-[15px]">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-teal-light" />
                  <span>
                    C/ Mediterráneo 8<br />
                    C.C. Bahía de las Dunas<br />
                    La Marina, 03177
                  </span>
                </li>
                <li>
                  <a href="tel:+34650708896" className="flex items-center gap-2.5 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-teal-light" />
                    +34 650 70 88 96
                  </a>
                </li>
                <li>
                  <a href="mailto:puppystyle2019@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors break-all">
                    <Mail className="w-4 h-4 text-teal-light flex-shrink-0" />
                    puppystyle2019@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 pt-2">
                  <a href="https://wa.me/34650708896" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal-deep transition-colors flex items-center justify-center">
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal-deep transition-colors flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal-deep transition-colors flex items-center justify-center">
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[13px] text-white/60">
              &copy; {new Date().getFullYear()} Puppy Style La Marina. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Bilingual EN / ES", "Dog-led", "WhatsApp bookings", "Grooming · Daycare · Boutique"].map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[12px] font-medium text-white/80"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
