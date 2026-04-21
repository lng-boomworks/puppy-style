import { useState } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Button } from "../Button";
import { PawPrint } from "../PawPrint";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

interface ContactPageProps {
  email?: string;
  phone?: string;
  address?: string;
}

export function ContactPage({
  email = "puppystyle2019@gmail.com",
  phone = "+34 650 70 88 96",
  address = "C/ Mediterráneo 8, C.C. Bahía de las Dunas, La Marina, 03177",
}: ContactPageProps) {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-16 bg-paws overflow-hidden">
        <div className="absolute top-16 -left-16 w-72 h-72 blob-mask bg-teal-pale opacity-90" aria-hidden="true" />
        <div className="absolute bottom-0 -right-12 w-80 h-80 blob-mask-alt bg-lavender-light opacity-80" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-script text-[26px] text-teal-deep mb-2">say hello</p>
          <h1 className="mb-5">Book your dog in</h1>
          <p className="text-[18px] text-text-muted leading-relaxed max-w-2xl mx-auto">
            New customers get a free 10-minute meet-and-greet before their
            first groom. Pop your details in below and we'll be in touch
            within 24 hours — or message us directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact + form */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.3fr] gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-7 border border-border shadow-tactile">
              <div className="flex items-center gap-3 mb-5">
                <PawPrint size={30} color="var(--color-teal-deep)" />
                <h3 className="mb-0 text-charcoal">Visit us</h3>
              </div>
              <ul className="space-y-4 text-[15px] text-text-muted">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-teal-deep flex-shrink-0" />
                  <span>{address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-teal-deep flex-shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-charcoal">
                    {phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 text-teal-deep flex-shrink-0" />
                  <a href={`mailto:${email}`} className="hover:text-charcoal break-all">
                    {email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 text-teal-deep flex-shrink-0" />
                  <span>
                    Tues – Sat · 9am – 6pm<br />
                    Closed Sundays & Mondays
                  </span>
                </li>
              </ul>
              <div className="mt-5 pt-5 border-t border-dashed border-border">
                <Button href="https://wa.me/34650708896" size="sm" className="w-full" external>
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            <div className="bg-charcoal text-white rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute inset-0 bg-paws opacity-15" aria-hidden="true" />
              <div className="relative">
                <p className="font-script text-[22px] text-teal-light mb-1">first-timer?</p>
                <p className="text-[15px] text-white/80 leading-relaxed">
                  New dogs get a free meet-and-greet. We'll sniff each other
                  out, you tell us what your pup needs, and we'll quote you
                  right there. Zero pressure.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-tactile">
            {!sent ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <h3 className="mb-2 text-charcoal">Tell us about your pup</h3>
                <p className="text-[14px] text-text-muted mb-4">
                  The more you can tell us, the better we can prepare. Don't
                  worry if you don't know everything.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Your name" name="name" required />
                  <Field label="Phone or email" name="contact" required />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Dog's name" name="dog" />
                  <Field label="Breed" name="breed" placeholder="e.g. Cockapoo" />
                </div>

                <Select label="Which service?" name="service">
                  <option>Not sure — help me pick</option>
                  <option>Full Groom</option>
                  <option>Bath &amp; Brush</option>
                  <option>Puppy Pamper</option>
                  <option>Daycare drop-in</option>
                  <option>Hand Stripping</option>
                  <option>Ultrasound Teeth Cleaning</option>
                  <option>Boutique question</option>
                </Select>

                <Textarea label="Anything we should know?" name="notes" placeholder="Nervous, rescue, first groom, allergies, preferred style…" />

                <Button type="submit">
                  <Send className="w-4 h-4" />
                  Send it over
                </Button>

                <p className="text-[12px] text-text-muted italic">
                  We'll get back to you within 24 hours (usually much sooner).
                </p>
              </form>
            ) : (
              <div className="py-12 text-center">
                <PawPrint size={60} color="var(--color-teal-deep)" className="mx-auto mb-4 animate-bob" />
                <p className="font-script text-[34px] text-teal-deep mb-1">
                  got it — thank you!
                </p>
                <h3 className="mb-2 text-charcoal">We'll be in touch soon.</h3>
                <p className="text-text-muted">
                  Give your pup a scratch from us.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ---------- tiny form field helpers ---------- */

function Field({
  label, name, required, placeholder, type = "text",
}: { label: string; name: string; required?: boolean; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <span className="block text-[13px] font-medium text-charcoal mb-1.5">
        {label} {required && <span className="text-teal-deep">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-border bg-ivory text-[15px] focus:outline-none focus:border-teal-deep focus:bg-white transition"
      />
    </label>
  );
}

function Textarea({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="block text-[13px] font-medium text-charcoal mb-1.5">{label}</span>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-border bg-ivory text-[15px] focus:outline-none focus:border-teal-deep focus:bg-white transition resize-none"
      />
    </label>
  );
}

function Select({
  label, name, children,
}: { label: string; name: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[13px] font-medium text-charcoal mb-1.5">{label}</span>
      <select
        name={name}
        className="w-full px-4 py-3 rounded-xl border border-border bg-ivory text-[15px] focus:outline-none focus:border-teal-deep focus:bg-white transition"
      >
        {children}
      </select>
    </label>
  );
}
