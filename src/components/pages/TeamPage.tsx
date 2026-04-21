import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Button } from "../Button";
import { PawPrint, PawTrail } from "../PawPrint";
import { Scissors, Heart, Sparkles } from "lucide-react";

const team = [
  {
    name: "Nina",
    role: "Founder · Master Groomer",
    caption: "treats for everyone",
    bio: "Trained across the UK and Europe. Fifteen years of scissors in hand, still learning every week. Mum to two lurchers and a very opinionated chihuahua.",
    fave: "Doodles & terriers",
    rotate: "polaroid-rotate-l",
    icon: Scissors,
  },
  {
    name: "Elena",
    role: "Senior Groomer",
    caption: "puppy whisperer",
    bio: "Specialises in nervous dogs and puppy first-groom days. Endless patience. Carries liver treats in every pocket.",
    fave: "Puppies & rescues",
    rotate: "",
    icon: Heart,
  },
  {
    name: "Marco",
    role: "Groomer · Daycare",
    caption: "ear-check expert",
    bio: "Joined us from a veterinary background — leads our specialist ear-cleaning and dental services, plus keeps the daycare room running calmly.",
    fave: "Wire-coats & poodles",
    rotate: "polaroid-rotate-r",
    icon: Sparkles,
  },
];

export function TeamPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-16 bg-paws overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 blob-mask bg-lavender-light opacity-80" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-script text-[26px] text-teal-deep mb-2">the humans</p>
          <h1 className="mb-5">Meet the pack</h1>
          <p className="text-[18px] text-text-muted leading-relaxed max-w-2xl mx-auto">
            A tiny team who love dogs more than is strictly professional.
            Between us we've groomed everything from chihuahuas to Great
            Danes — and we still get excited every time.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((t) => (
              <div
                key={t.name}
                className={`polaroid ${t.rotate} hover:rotate-0 transition-transform duration-300`}
              >
                <div className="aspect-square bg-ivory rounded-sm flex items-center justify-center mb-4 overflow-hidden">
                  <PawPrint size={80} color="var(--color-teal-deep)" />
                </div>
                <div className="text-center px-2">
                  <h3 className="mb-0 text-charcoal text-[28px]">
                    {t.name}
                  </h3>
                  <p className="text-[12px] text-text-muted uppercase tracking-wider">
                    {t.role}
                  </p>
                  <p className="font-script text-[22px] text-teal-deep mt-2 mb-3">
                    "{t.caption}"
                  </p>
                  <p className="text-[14px] text-text-muted leading-relaxed text-left">
                    {t.bio}
                  </p>
                  <p className="text-[12px] text-charcoal mt-3 flex items-center justify-center gap-1.5">
                    <t.icon className="w-3.5 h-3.5 text-teal-deep" />
                    Favourite: {t.fave}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PawTrail color="var(--color-teal-deep)" count={9} className="mb-14" />

      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-script text-[28px] text-teal-deep mb-2">come say hi</p>
          <h2 className="mb-5">Want to meet us before booking?</h2>
          <p className="text-[17px] text-text-muted mb-7">
            First visits always start with a free meet-and-greet. No scissors,
            no pressure — just a chat, some treats, and getting comfortable.
          </p>
          <Button href="https://wa.me/34650708896" size="lg" external>Book a meet-and-greet</Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
