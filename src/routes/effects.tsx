import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import coldSparkImg from "@/assets/effect-cold-spark.jpg";
import foamImg from "@/assets/effect-foam.jpg";
import laserImg from "@/assets/effect-laser.jpg";
import { Reveal, Eyebrow } from "@/components/reveal";
import { EFFECTS } from "@/lib/data";

export const Route = createFileRoute("/effects")({
  head: () => ({
    meta: [
      { title: "Special Effects — Spectra Events SFX" },
      {
        name: "description",
        content:
          "Cold spark machines, foam parties, couples laser light, low fog, fog & smoke bubbles, paper blast, butterfly, petal shot, CO2 jets and CO2 guns — event special effects in Mangalore.",
      },
      { property: "og:title", content: "Special Effects — Spectra Events SFX" },
      {
        property: "og:description",
        content:
          "Eleven cinematic special effects for weddings, college events, parties and corporate shows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EffectsPage,
});

const IMAGES: Record<string, string> = {
  "cold-spark-machine": coldSparkImg,
  "foam-party": foamImg,
  "couples-laser-light": laserImg,
};

function EffectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <Reveal>
        <Eyebrow>Our effects</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold text-balance md:text-7xl">
          Eleven ways to make a moment unforgettable
        </h1>
      </Reveal>
      <Reveal delay={0.18}>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Every effect is operated by our trained crew, timed to your music and your moment. Tap
          any effect to learn where it shines.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {EFFECTS.map((effect, i) => {
          const img = IMAGES[effect.slug];
          return (
            <Reveal key={effect.slug} delay={(i % 3) * 0.08}>
              <Link
                to="/effects/$slug"
                params={{ slug: effect.slug }}
                className="group block"
              >
                {img ? (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img}
                      alt={`${effect.name} special effect`}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div
                    className="flex aspect-[4/3] items-end border border-border/60 bg-charcoal p-5"
                    aria-hidden
                  >
                    <span className="font-display text-6xl font-semibold text-primary/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary">
                      {effect.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">{effect.tagline}</p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-12 text-xs text-muted-foreground">
        Imagery shown is illustrative of each effect, not photographs of past Spectra events.
      </p>
    </div>
  );
}
