import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Button } from "../Button";
import { PawPrint, PawTrail } from "../PawPrint";
import { Heart, Stamp, Sparkles, Scissors } from "lucide-react";

const values = [
  { icon: Heart,    title: "Dog-first, always",        desc: "If a dog isn't coping, we stop. The groom can wait. Trust can't." },
  { icon: Sparkles, title: "Boutique, not conveyor",   desc: "One dog in the room at a time. No cages, no queues, no rushing." },
  { icon: Scissors, title: "Craft over cut-and-run",   desc: "Qualified, trained and still learning. We care about the work." },
];

export function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-20 bg-paws overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 blob-mask bg-lavender-light opacity-80" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-script text-[26px] text-teal-deep mb-2">
            our story
          </p>
          <h1 className="mb-5">A little salon on the Costa Blanca.</h1>
          <p className="text-[18px] text-text-muted leading-relaxed max-w-2xl mx-auto">
            Hi, we're Puppy Style — a small boutique grooming salon, daycare
            and pet boutique in La Marina. We've been quietly looking after
            the town's dogs since 2019.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="polaroid polaroid-rotate-l">
              <div className="aspect-[4/5] bg-ivory flex items-center justify-center rounded-sm">
                <PawPrint size={80} color="var(--color-teal-deep)" />
              </div>
              <p className="font-script text-[22px] text-teal-deep text-center mt-3">
                the salon + Biscuit, 2024
              </p>
            </div>
          </div>
          <div>
            <h2 className="mb-6">Born out of a very simple idea.</h2>
            <div className="space-y-4 text-[16px] text-text-muted leading-relaxed">
              <p>
                Every dog deserves one calm hour where they feel safe, seen,
                and genuinely looked after. Not squeezed into a 25-minute slot
                between two others. Not parked in a cage. Not rushed.
              </p>
              <p>
                Puppy Style is our answer to that. A warm, light little
                salon where your dog gets our full attention from the moment
                they trot in to the moment they trot out. And because we
                couldn't help ourselves, we added a curated boutique and a
                small daycare room so you can leave your pup with us for
                a full day out.
              </p>
              <p className="font-script text-[24px] text-teal-deep leading-tight pt-2">
                — that's really the whole philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-script text-[24px] text-teal-deep mb-2">what we believe</p>
            <h2 className="mb-3">Three small rules</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-3xl p-8 border border-border hover:-translate-y-1 hover:shadow-tactile transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-pale text-teal-deep flex items-center justify-center mb-5 rotate-[-4deg]">
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="mb-3 text-charcoal">{v.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty explained */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <div className="relative">
            <div className="bg-white rounded-[28px] p-7 border-2 border-dashed border-teal-deep shadow-tactile rotate-[-1.5deg]">
              <p className="font-script text-[26px] text-teal-deep mb-1">loyalty card</p>
              <p className="text-[11px] text-text-muted uppercase tracking-wider mb-5">Puppy Style · La Marina</p>
              <div className="grid grid-cols-5 gap-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="aspect-square rounded-full border-2 border-dashed border-charcoal/30 bg-cream flex items-center justify-center">
                    {n <= 2 && <Stamp className="w-6 h-6 text-teal-deep rotate-[-12deg]" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="font-script text-[24px] text-teal-deep mb-2">a little thank you</p>
            <h2 className="mb-5">Five grooms, one free dental.</h2>
            <p className="text-[17px] text-text-muted leading-relaxed mb-4">
              We quietly stamp your card each visit. When you've had five
              grooms, your next visit includes a <strong className="text-charcoal">free
              ultrasound dental clean (worth €35)</strong> — our way of saying
              thanks for trusting us with your pup.
            </p>
            <p className="text-[15px] text-text-muted italic mb-6">
              (No app. No sign-up. Just a real card, like the good old days.)
            </p>
            <Button href="https://wa.me/34650708896" external>Start your card</Button>
          </div>
        </div>
      </section>

      <PawTrail color="var(--color-teal-deep)" count={9} className="mb-16" />
      <Footer />
    </>
  );
}
