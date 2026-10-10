import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import coldSparkImg from "@/assets/effect-cold-spark.jpg";
import foamImg from "@/assets/effect-foam.jpg";
import laserImg from "@/assets/effect-laser.jpg";
import { Reveal, Eyebrow } from "@/components/reveal";
import { BUSINESS } from "@/lib/data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Spectra Events SFX" },
      {
        name: "description",
        content:
          "A look at the effects Spectra Events SFX brings to events — cold sparks, foam, lasers and low fog. Follow @spectra_events_sfx on Instagram for real event footage.",
      },
      { property: "og:title", content: "Gallery — Spectra Events SFX" },
      {
        property: "og:description",
        content: "Cinematic event special effects, in pictures.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { img: heroImg, alt: "Wedding stage with cold sparks and low fog", label: "Cold Sparks + Low Fog", tall: true },
  { img: foamImg, alt: "Foam party crowd under golden lights", label: "Foam Party", tall: false },
  { img: laserImg, alt: "Couple dancing through laser beams and fog", label: "Couples Laser Light", tall: true },
  { img: coldSparkImg, alt: "Cold spark fountains firing at night", label: "Cold Spark Machine", tall: false },
];

function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <Reveal>
        <Eyebrow>Gallery</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold text-balance md:text-7xl">
          The look of a Spectra moment
        </h1>
      </Reveal>
      <Reveal delay={0.18}>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          These images illustrate the effects we bring to events. For real footage from Spectra
          shows, follow us on Instagram — that's where the latest work lives.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal key={item.label} delay={(i % 3) * 0.08} className={item.tall ? "sm:row-span-2" : ""}>
            <figure className="group relative h-full overflow-hidden">
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
                width={1024}
                height={1280}
                className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                  item.tall ? "aspect-[3/4] h-full" : "aspect-[4/3]"
                }`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 pt-12">
                <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  {item.label}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}

        {/* Instagram tile */}
        <Reveal delay={0.1}>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex aspect-[4/3] flex-col items-center justify-center gap-3 border border-primary/40 bg-charcoal p-6 text-center transition-colors hover:border-primary"
          >
            <Instagram className="h-7 w-7 text-primary" />
            <p className="font-display text-xl font-semibold">Real event footage</p>
            <p className="text-sm text-muted-foreground">
              Follow {BUSINESS.instagram} for videos from our latest shows
            </p>
            <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              Open Instagram
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </Reveal>
      </div>

      <p className="mt-10 text-xs text-muted-foreground">
        Photos on this page are illustrative of each effect and do not depict past Spectra events.
      </p>
    </div>
  );
}
