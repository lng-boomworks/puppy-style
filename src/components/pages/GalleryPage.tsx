import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Button } from "../Button";
import { PawPrint, PawTrail } from "../PawPrint";
import { withBase } from "../../utils/url";

const before_after = [
  { name: "Biscuit", breed: "Cockapoo",         caption: "the transformation arc",     image: "/images/dog-photos/dog-cockapoo.jpg" },
  { name: "Maple",   breed: "Golden Retriever", caption: "fluff level: expert",        image: "/images/dog-photos/dog-1.jpg" },
  { name: "Nacho",   breed: "Schnauzer",        caption: "new haircut, same vibes",    image: "/images/dog-photos/dog-2.jpg" },
  { name: "Willow",  breed: "Yorkie",           caption: "tiny dog, big personality",  image: "/images/dog-photos/dog-3.jpg" },
  { name: "Theo",    breed: "Labradoodle",      caption: "from mop to masterpiece",    image: "/images/dog-photos/dog-4.jpg" },
  { name: "Bean",    breed: "Shih Tzu",         caption: "bow game: strong",           image: "/images/dog-photos/dog-5.jpg" },
];

export function GalleryPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-16 bg-paws overflow-hidden">
        <div className="absolute top-12 -left-10 w-72 h-72 blob-mask bg-lavender-light opacity-80" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-script text-[26px] text-teal-deep mb-2">
            look at these gorgeous pups
          </p>
          <h1 className="mb-5">The Puppy Style Gallery</h1>
          <p className="text-[18px] text-text-muted leading-relaxed max-w-2xl mx-auto">
            Some of our favourite before-and-afters, glow-ups, and genuinely
            smug-looking dogs walking out of the salon.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {before_after.map((g, i) => (
              <div
                key={g.name}
                className="group relative"
                style={{ transform: `rotate(${i % 2 === 0 ? "-1.2deg" : "1.2deg"})` }}
              >
                <div className="polaroid hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-square rounded-sm relative overflow-hidden bg-ivory">
                    <img
                      src={withBase(g.image)}
                      alt={`${g.name} the ${g.breed} after a groom at Puppy Style`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider bg-white/90 px-2 py-0.5 rounded-full">
                      before · after
                    </span>
                  </div>
                  <div className="text-center pt-3">
                    <p className="text-[22px] font-bold text-charcoal leading-none">
                      {g.name}
                    </p>
                    <p className="text-[12px] text-text-muted mb-1">{g.breed}</p>
                    <p className="font-script text-[18px] text-teal-deep">
                      {g.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PawTrail color="var(--color-teal-deep)" count={9} className="mb-14" />

      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PawPrint size={56} color="var(--color-teal-deep)" className="mx-auto mb-3 animate-bob" />
          <h2 className="mb-4">Want your pup in the gallery?</h2>
          <p className="text-[17px] text-text-muted mb-7">
            Book in, look fabulous, end up on the wall. Simple.
          </p>
          <Button href="https://wa.me/34650708896" size="lg" external>Book a groom</Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
