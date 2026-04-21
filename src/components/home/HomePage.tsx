import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Button } from "../Button";
import { PawPrint, PawTrail } from "../PawPrint";
import { withBase } from "../../utils/url";
import {
  Scissors, Sparkles, Heart, Smile,
  Star, MapPin, Clock, Stamp, ArrowRight,
} from "lucide-react";

/* ----------------------------------------------------------------
   Home page — Puppy Style, La Marina
   Hero, services, why us, team polaroids, speech-bubble
   testimonials, loyalty stamp card, final CTA.
   ---------------------------------------------------------------- */

const services = [
  {
    icon: Scissors,
    title: "The Full Works",
    sub: "Full Groom",
    desc: "Bath, blow-dry, breed-appropriate trim, tidy, nails, ears. Head-to-tail gorgeous — tail wag guaranteed.",
    price: "from €45",
    accent: "var(--color-teal-deep)",
  },
  {
    icon: Sparkles,
    title: "Splash & Dash",
    sub: "Bath & Brush",
    desc: "Warm bath, gentle shampoo, deep brush-out, fluff blow-dry. For the low-maintenance lovely.",
    price: "from €28",
    accent: "var(--color-teal-mid)",
  },
  {
    icon: Heart,
    title: "Day at the Club",
    sub: "Daycare Drop-in",
    desc: "Supervised play and naps in our dog-first daycare room. Full day or half day — pick-up smelling like a fresh pup.",
    price: "from €18 / day",
    accent: "var(--color-charcoal)",
  },
  {
    icon: Smile,
    title: "The Boutique",
    sub: "Retail & Treats",
    desc: "Hand-picked collars, leads, treats and coats. Curated in-salon — add any extras to your groom.",
    price: "browse in salon",
    accent: "var(--color-teal-deep)",
  },
];

const testimonials = [
  {
    dog: "Luna",
    breed: "Cockapoo, 3",
    quote:
      "I went in a scruffball and came out a literal princess. Ten bonks out of ten. Mum cried.",
  },
  {
    dog: "Biscuit",
    breed: "Jack Russell, 7",
    quote:
      "They called me 'handsome' twelve times. I'll be back. The chicken treats were elite.",
  },
  {
    dog: "Maple",
    breed: "Golden Retriever, 5",
    quote:
      "My coat has NEVER been this fluffy. Walked home like I was on a runway. No notes.",
  },
];

const loyaltyStamps = [1, 2, 3, 4, 5];

export function HomePage() {
  return (
    <>
      <Navbar />

      {/* ============================== HERO ============================== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-paws">
        <div
          className="absolute top-24 -right-20 w-[420px] h-[420px] blob-mask bg-[var(--color-lavender-light)] opacity-80"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -left-16 w-[340px] h-[340px] blob-mask-alt bg-[var(--color-teal-pale)] opacity-90"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-border text-[13px] font-medium text-charcoal mb-7">
              <MapPin className="w-3.5 h-3.5 text-teal-deep" />
              Boutique dog grooming · La Marina, Alicante · EN / ES
            </span>

            <h1 className="mb-6">
              Where every dog{" "}
              <span className="relative inline-block">
                <span className="squiggle">leaves happy</span>
              </span>
              .
            </h1>

            <p className="text-[19px] leading-[1.65] text-text-muted max-w-xl mb-8">
              Welcome to Puppy Style — a warm, unhurried salon in La Marina
              that doubles as a daycare and boutique. One dog at a time, all
              the cuddles, none of the assembly line.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button href="https://wa.me/34650708896" size="lg" external>
                Book on WhatsApp
              </Button>
              <Button href="/services" variant="ghost" size="lg">
                See the menu <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-teal-pale flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <PawPrint size={18} color="var(--color-teal-deep)" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-teal-deep">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-[13px] text-text-muted mt-0.5">
                  Loved by <strong className="text-charcoal">400+</strong> local dogs (and their humans)
                </p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="relative blob-mask overflow-hidden bg-ivory aspect-[4/5] shadow-[0_30px_80px_-30px_rgba(26,26,26,0.3)]">
              <img
                src={withBase("/images/puppy-dog.jpg")}
                alt="A happy, well-groomed puppy in the Puppy Style salon"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating script label */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl px-5 py-3 shadow-tactile rotate-[-6deg] animate-wobble">
              <span className="font-script text-[26px] text-teal-deep">
                woof!
              </span>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-charcoal text-white rounded-2xl px-5 py-4 shadow-tactile rotate-[4deg]">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-teal-light fill-current" />
                <div>
                  <div className="text-[17px] font-bold leading-tight">One dog at a time</div>
                  <div className="text-[12px] text-white/70">never rushed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PawTrail color="var(--color-teal-deep)" count={9} className="my-6" />

      {/* ============================== SERVICES ============================== */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-script text-[24px] text-teal-deep mb-2">
              the menu
            </p>
            <h2 className="mb-5">Treats for every tail</h2>
            <p className="text-text-muted text-lg">
              From a quick splash to the full red-carpet works — plus daycare
              and a curated boutique. Every groom is one-on-one in a calm,
              cuddle-friendly space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative bg-white rounded-3xl p-7 border border-border hover:-translate-y-1.5 hover:shadow-tactile transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 rotate-[-4deg] group-hover:rotate-0 transition-transform"
                  style={{ backgroundColor: `${s.accent}22`, color: s.accent }}
                >
                  <s.icon className="w-7 h-7" />
                </div>
                <p className="font-script text-[18px] text-teal-deep leading-none mb-1">
                  {s.sub}
                </p>
                <h3 className="mb-3 text-charcoal">{s.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed mb-5">
                  {s.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-semibold text-charcoal">
                    {s.price}
                  </span>
                  <a
                    href="/services"
                    className="text-[13px] font-medium text-teal-deep hover:underline"
                  >
                    more →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/services" variant="ghost">
              See every service & price
            </Button>
          </div>
        </div>
      </section>

      {/* ============================== WHY CHOOSE ============================== */}
      <section className="relative py-24 md:py-32 bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-paws-dense opacity-80" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-script text-[24px] text-teal-deep mb-2">
                why us?
              </p>
              <h2 className="mb-6">
                Boutique, not{" "}
                <span className="italic text-teal-deep">conveyor belt</span>
                .
              </h2>
              <p className="text-[17px] text-text-muted leading-relaxed mb-8">
                Chains move fast. We don't. Your dog gets our full attention
                from arrival to pickup — in a warm, unhurried, treat-stocked
                space that smells like eucalyptus and happy pups.
              </p>

              <div className="space-y-5">
                {[
                  { title: "Bilingual Spanish & English",            desc: "The whole team speaks both. Drop-off and pickup without the translation app." },
                  { title: "One dog at a time, start to finish",    desc: "No kennels, no cage dryers, no shuffle. Just calm, 1-to-1 care." },
                  { title: "Gentle with the nervous ones",          desc: "We specialise in rescues, puppies, and dogs who've had bad experiences." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-deep text-white flex items-center justify-center">
                      <PawPrint size={18} color="#fff" />
                    </div>
                    <div>
                      <h4 className="text-[19px] font-bold text-charcoal mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[15px] text-text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dog of the Month card */}
            <div className="relative">
              <div className="bg-white rounded-[32px] p-8 shadow-tactile rotate-[-1.5deg] border border-border">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-pale">
                    <Star className="w-6 h-6 text-teal-deep fill-current" />
                  </span>
                  <div>
                    <p className="font-script text-[22px] text-teal-deep leading-none">
                      dog of the month
                    </p>
                    <p className="text-[12px] text-text-muted uppercase tracking-wider">
                      April 2026
                    </p>
                  </div>
                </div>

                <div className="aspect-square rounded-2xl bg-ivory flex items-center justify-center mb-5 overflow-hidden">
                  <div className="text-center text-text-muted text-sm">
                    <PawPrint size={70} color="var(--color-teal-deep)" className="mx-auto mb-2" />
                    photo of this month's pup
                  </div>
                </div>

                <h3 className="mb-1 text-charcoal">Mango</h3>
                <p className="text-[14px] text-text-muted mb-3">
                  Cavapoo · Age 2 · Favourite treat: cheese
                </p>
                <p className="text-[14px] text-text-muted italic leading-relaxed">
                  "Mango trotted in, struck a pose, and frankly stole the
                  entire afternoon. A vision in apricot."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== MEET THE GROOMERS ============================== */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-script text-[24px] text-teal-deep mb-2">
              your humans
            </p>
            <h2 className="mb-5">Meet the groomers</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              A small, warm team who'd rather give your dog an extra ten
              minutes than rush you out of the door.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { name: "Nina",  role: "Founder · Master Groomer", caption: "treats for everyone", rotate: "polaroid-rotate-l" },
              { name: "Elena", role: "Senior Groomer",           caption: "puppy whisperer",      rotate: "" },
              { name: "Marco", role: "Groomer · Daycare",        caption: "ear-check expert",     rotate: "polaroid-rotate-r" },
            ].map((p) => (
              <div key={p.name} className={`polaroid ${p.rotate} hover:rotate-0 transition-transform duration-300`}>
                <div className="aspect-square bg-ivory rounded-sm flex items-center justify-center mb-4 overflow-hidden">
                  <PawPrint size={72} color="var(--color-teal-deep)" />
                </div>
                <div className="text-center">
                  <h3 className="mb-0 text-charcoal text-[26px]">
                    {p.name}
                  </h3>
                  <p className="text-[13px] text-text-muted mb-2">{p.role}</p>
                  <p className="font-script text-[20px] text-teal-deep">
                    "{p.caption}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button href="/team" variant="ghost">
              Meet the whole pack
            </Button>
          </div>
        </div>
      </section>

      {/* ============================== DOG TESTIMONIALS ============================== */}
      <section className="relative py-24 md:py-32 bg-teal-pale overflow-hidden">
        <PawTrail color="var(--color-teal-deep)" count={8} className="absolute top-6 left-0 right-0" opacity={0.3} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-script text-[24px] text-teal-deep mb-2">
              straight from the dogs' mouths
            </p>
            <h2 className="mb-5">Reviews from the floof</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.dog} className="relative">
                <div className="relative bg-white rounded-3xl p-7 shadow-tactile">
                  <div className="flex items-center gap-0.5 text-teal-deep mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-[16px] leading-relaxed text-charcoal mb-4 italic">
                    "{t.quote}"
                  </p>
                  <div
                    className="absolute -bottom-3 left-10 w-6 h-6 bg-white rotate-45"
                    style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex items-center gap-3 mt-6 pl-4">
                  <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center">
                    <PawPrint size={22} color="var(--color-teal-deep)" />
                  </div>
                  <div>
                    <p className="text-[20px] font-bold text-charcoal leading-none">
                      {t.dog}
                    </p>
                    <p className="text-[12px] text-text-muted mt-1">{t.breed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== LOYALTY STAMP CARD ============================== */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-script text-[24px] text-teal-deep mb-2">
              our little thank you
            </p>
            <h2 className="mb-4">The loyalty stamp card</h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Five grooms with us and the sixth visit we'll thank you with a{" "}
              <strong className="text-charcoal">free ultrasound dental clean (worth €35)</strong>.
              No app, no fuss — just a real card.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white rounded-[28px] p-8 md:p-10 border-2 border-dashed border-teal-deep shadow-tactile">
              <div className="flex items-center justify-between mb-7">
                <div>
                  <p className="font-script text-[26px] text-teal-deep leading-none">
                    loyalty card
                  </p>
                  <p className="text-[12px] text-text-muted uppercase tracking-wider mt-1">
                    Puppy Style · La Marina
                  </p>
                </div>
                <PawPrint size={48} color="var(--color-teal-deep)" />
              </div>

              <div className="grid grid-cols-5 gap-3 md:gap-5">
                {loyaltyStamps.map((n) => (
                  <div
                    key={n}
                    className="relative aspect-square rounded-full border-2 border-dashed border-charcoal/30 flex items-center justify-center bg-cream"
                  >
                    <span className="absolute top-1 left-2 text-[11px] font-semibold text-text-muted">
                      {n}
                    </span>
                    {n <= 3 && (
                      <div className="rotate-[-12deg] opacity-90">
                        <Stamp className="w-7 h-7 text-teal-deep" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-dashed border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-[14px] text-text-muted">
                  5 stamps = <strong className="text-charcoal">free dental clean</strong> on your next visit.
                </p>
                <Button href="https://wa.me/34650708896" size="sm" external>Start your card</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== FINAL CTA ============================== */}
      <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
        <div className="absolute top-10 left-10 blob-mask w-48 h-48 bg-lavender-light opacity-70" aria-hidden="true" />
        <div className="absolute bottom-10 right-10 blob-mask-alt w-60 h-60 bg-teal-pale opacity-80" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PawPrint size={56} color="var(--color-teal-deep)" className="mx-auto mb-4 animate-bob" />
          <p className="font-script text-[28px] text-teal-deep mb-2">
            ready when you are
          </p>
          <h2 className="mb-5">Let's get that tail wagging.</h2>
          <p className="text-[17px] text-text-muted mb-8">
            New here? First visits include a free meet-and-greet so your
            dog can suss us out before the scissors come out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="https://wa.me/34650708896" size="lg" external>
              Book on WhatsApp
            </Button>
            <Button href="tel:+34650708896" variant="ghost" size="lg">
              Call the salon
            </Button>
          </div>
          <p className="text-[13px] text-text-muted mt-6 flex items-center justify-center gap-2">
            <Clock className="w-3.5 h-3.5" /> Tues – Sat, 9am – 6pm
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
