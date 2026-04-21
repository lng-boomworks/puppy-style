import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Button } from "../Button";
import { PawPrint, PawTrail } from "../PawPrint";
import {
  Scissors, Sparkles, Heart, Smile, Ear, Wand, Check,
} from "lucide-react";

const serviceGroups = [
  {
    title: "Grooming",
    blurb: "The full suite — from splash & dash to the red-carpet works.",
    color: "var(--color-teal-deep)",
    services: [
      {
        icon: Scissors,
        name: "The Full Works",
        tag: "Full Groom",
        desc: "Bath, blow-dry, breed-appropriate trim, tidy, nails, pads, ears, eyes. Head-to-tail gorgeous.",
        price: "from €45",
        time: "2 – 3 hrs",
      },
      {
        icon: Sparkles,
        name: "Splash & Dash",
        tag: "Bath & Brush",
        desc: "Warm bath, gentle shampoo, conditioner, deep brush-out, fluff blow-dry, ears & nails check.",
        price: "from €28",
        time: "60 – 90 min",
      },
      {
        icon: Heart,
        name: "Puppy's First Spa Day",
        tag: "Puppy Pamper (under 6 months)",
        desc: "A calm introduction to the salon — gentle handling, tiny splash, soft dryer, many treats, zero pressure.",
        price: "from €25",
        time: "45 – 60 min",
      },
    ],
  },
  {
    title: "Specialist Care",
    blurb: "Extras and specialist treatments — add to any groom or book standalone.",
    color: "var(--color-charcoal)",
    services: [
      {
        icon: Ear,
        name: "Ear Cleaning",
        tag: "Add-on or standalone",
        desc: "Gentle ear check, clean, and pluck if needed. Calm, careful, and treat-stocked.",
        price: "€12",
        time: "15 min",
      },
      {
        icon: Wand,
        name: "Hand Stripping",
        tag: "Terriers & wire coats",
        desc: "Traditional hand stripping for terriers and wire-coated breeds — keeps the coat in top condition.",
        price: "from €55",
        time: "2 – 3 hrs",
      },
      {
        icon: Smile,
        name: "Dental Dates",
        tag: "Ultrasound Teeth Cleaning",
        desc: "Modern, no-anaesthetic ultrasound cleaning. Brighter smile, better breath, happy vet checks.",
        price: "€35",
        time: "45 min",
      },
    ],
  },
];

export function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-20 bg-paws overflow-hidden">
        <div className="absolute top-20 -left-16 w-72 h-72 blob-mask bg-lavender-light opacity-80" aria-hidden="true" />
        <div className="absolute top-40 -right-12 w-80 h-80 blob-mask-alt bg-teal-pale opacity-90" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-script text-[26px] text-teal-deep mb-2">the menu</p>
          <h1 className="mb-5">Services & prices</h1>
          <p className="text-[18px] text-text-muted leading-relaxed max-w-2xl mx-auto">
            Every groom is one-on-one, unhurried, and tailored to your dog's
            breed, coat, and temperament. Prices are a guide — huskies and
            hairy monsters may nudge upward. We'll always confirm before we start.
          </p>
        </div>
      </section>

      {/* Services grid */}
      {serviceGroups.map((group, gi) => (
        <section key={group.title} className={gi % 2 === 0 ? "py-20" : "py-20 bg-ivory"}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${group.color}22`, color: group.color }}
                  >
                    <PawPrint size={20} color={group.color} />
                  </span>
                  <h2 className="mb-0">{group.title}</h2>
                </div>
                <p className="text-[16px] text-text-muted max-w-xl">{group.blurb}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {group.services.map((s) => (
                <div
                  key={s.name}
                  className="bg-white rounded-3xl p-7 border border-border hover:-translate-y-1 hover:shadow-tactile transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 rotate-[-4deg]"
                    style={{ backgroundColor: `${group.color}22`, color: group.color }}
                  >
                    <s.icon className="w-6 h-6" />
                  </div>
                  <p className="font-script text-[18px] text-teal-deep mb-1">{s.tag}</p>
                  <h3 className="mb-3 text-charcoal">{s.name}</h3>
                  <p className="text-[14.5px] text-text-muted leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-dashed border-border">
                    <span className="text-[17px] font-semibold text-charcoal">{s.price}</span>
                    <span className="text-[12px] text-text-muted uppercase tracking-wider">{s.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Add-on band */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-script text-[26px] text-teal-light mb-2">the little extras</p>
          <h2 className="text-white mb-8">Quick add-ons</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              { item: "Blueberry facial",    price: "€6"  },
              { item: "De-shed treatment",   price: "€12" },
              { item: "Nail file (Dremel)",  price: "€8"  },
              { item: "Teeth brush",         price: "€6"  },
              { item: "Pawdicure & balm",    price: "€10" },
              { item: "Bows, bandanas & co.",price: "free" },
              { item: "Flea shampoo",        price: "€8"  },
              { item: "Colour-safe conditioner", price: "€5" },
            ].map((a) => (
              <div key={a.item} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <span className="flex items-center gap-2 text-[14px]">
                  <Check className="w-4 h-4 text-teal-light" />
                  {a.item}
                </span>
                <span className="text-[14px] font-semibold text-teal-light">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PawTrail color="var(--color-teal-deep)" count={9} className="my-12" />

      {/* CTA */}
      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Not sure which to pick?</h2>
          <p className="text-[17px] text-text-muted mb-7">
            Drop us a quick note about your dog and we'll recommend the right
            option — no upsell, promise.
          </p>
          <Button href="https://wa.me/34650708896" size="lg" external>Get a recommendation</Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
