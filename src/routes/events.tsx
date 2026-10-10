import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import foamImg from "@/assets/effect-foam.jpg";
import laserImg from "@/assets/effect-laser.jpg";
import coldSparkImg from "@/assets/effect-cold-spark.jpg";
import { Reveal, Eyebrow } from "@/components/reveal";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events We Cover — Spectra Events SFX" },
      {
        name: "description",
        content:
          "Weddings, college events, parties and corporate events — special effects and planning tailored to each kind of celebration in Mangalore.",
      },
      { property: "og:title", content: "Events We Cover — Spectra Events SFX" },
      {
        property: "og:description",
        content: "Weddings, college events, parties and corporate events, done cinematically.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

const EVENTS = [
  {
    name: "Weddings",
    img: heroImg,
    alt: "A wedding stage with cold sparks and low fog",
    blurb:
      "The varmala under a petal shot, the first dance on low fog, the entry through cold sparks. We choreograph every effect to your ceremony's biggest beats.",
    effects: ["Cold Spark Machine", "Low Fog", "Petal Shot", "Couples Laser Light", "Butterfly"],
  },
  {
    name: "College Events",
    img: foamImg,
    alt: "A foam party crowd at night",
    blurb:
      "Fests, DJ nights and freshers' parties built for energy — foam cannons, CO2 guns in the crowd, and paper blasts timed to the drop.",
    effects: ["Foam Party", "CO2 Gun", "CO2 Jet", "Paper Blast"],
  },
  {
    name: "Parties",
    img: coldSparkImg,
    alt: "Cold spark fountains at a night celebration",
    blurb:
      "Birthdays, anniversaries and private celebrations get a signature moment — a spark-lit cake entry, a fog-bubble reveal, a confetti countdown.",
    effects: ["Cold Spark Machine", "Fog Bubble", "Smoke Bubble", "Paper Blast"],
  },
  {
    name: "Corporate Events",
    img: laserImg,
    alt: "Laser light beams at a formal event",
    blurb:
      "Product launches, award nights and annual days with polished, brand-safe production — lasers, low fog and CO2 jets, run to a tight show flow.",
    effects: ["Couples Laser Light", "Low Fog", "CO2 Jet", "Cold Spark Machine"],
  },
];

function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <Reveal>
        <Eyebrow>Events we cover</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold text-balance md:text-7xl">
          Every celebration has a moment. We amplify it.
        </h1>
      </Reveal>

      <div className="mt-16 space-y-20">
        {EVENTS.map((event, i) => (
          <article
            key={event.name}
            className={`grid items-center gap-10 md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <div className="overflow-hidden">
                <img
                  src={event.img}
                  alt={event.alt}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p className="font-display text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-4xl font-semibold">{event.name}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  {event.blurb}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-6 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                  Popular effects
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {event.effects.map((e) => (
                    <li
                      key={e}
                      className="border border-border/70 px-3 py-1.5 text-xs font-medium text-foreground/80"
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </article>
        ))}
      </div>

      <Reveal>
        <div className="mt-24 border border-border/60 bg-charcoal p-8 text-center md:p-14">
          <h2 className="font-display text-3xl font-semibold text-balance md:text-4xl">
            Planning something different?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            If your event doesn't fit a label, even better. Tell us the idea and we'll design the
            effects around it.
          </p>
          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-soft"
          >
            Tell us about your event
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
