import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import coldSparkImg from "@/assets/effect-cold-spark.jpg";
import foamImg from "@/assets/effect-foam.jpg";
import laserImg from "@/assets/effect-laser.jpg";
import { Reveal, Eyebrow } from "@/components/reveal";
import { EFFECTS } from "@/lib/data";

export const Route = createFileRoute("/effects/$slug")({
  loader: ({ params }) => {
    const effect = EFFECTS.find((e) => e.slug === params.slug);
    if (!effect) throw notFound();
    return { effect };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.effect.name ?? "Effect"} — Spectra Events SFX` },
      { name: "description", content: loaderData?.effect.description ?? "" },
      {
        property: "og:title",
        content: `${loaderData?.effect.name ?? "Effect"} — Spectra Events SFX`,
      },
      { property: "og:description", content: loaderData?.effect.description ?? "" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EffectDetailPage,
});

const IMAGES: Record<string, string> = {
  "cold-spark-machine": coldSparkImg,
  "foam-party": foamImg,
  "couples-laser-light": laserImg,
};

function EffectDetailPage() {
  const { effect } = Route.useLoaderData();
  const img = IMAGES[effect.slug];
  const others = EFFECTS.filter((e) => e.slug !== effect.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <Reveal>
        <Link
          to="/effects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> All effects
        </Link>
      </Reveal>

      <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <Eyebrow>Special effect</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-5xl font-semibold text-balance md:text-6xl">
              {effect.name}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-3 font-display text-xl text-primary italic">{effect.tagline}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              {effect.description}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8">
              <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                Best for
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {effect.bestFor.map((b) => (
                  <li
                    key={b}
                    className="border border-border/70 px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-soft"
            >
              Enquire about {effect.name}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          {img ? (
            <div className="overflow-hidden">
              <img
                src={img}
                alt={`${effect.name} special effect`}
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
              <p className="mt-3 text-xs text-muted-foreground">
                Illustrative image of the effect, not a photograph of a past Spectra event.
              </p>
            </div>
          ) : (
            <div className="flex aspect-[4/5] items-center justify-center border border-border/60 bg-charcoal">
              <p className="max-w-xs px-6 text-center text-sm text-muted-foreground">
                Photos of {effect.name} in action coming soon — ask us for a video demo on your
                enquiry call.
              </p>
            </div>
          )}
        </Reveal>
      </div>

      <div className="mt-24 border-t border-border/50 pt-12">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold">More effects</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/effects/$slug"
              params={{ slug: o.slug }}
              className="group border border-border/60 p-5 transition-colors hover:border-primary/60"
            >
              <p className="font-display text-lg font-semibold group-hover:text-primary">
                {o.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{o.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
