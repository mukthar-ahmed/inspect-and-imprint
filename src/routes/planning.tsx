import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import laserImg from "@/assets/effect-laser.jpg";
import { Reveal, Eyebrow } from "@/components/reveal";

export const Route = createFileRoute("/planning")({
  head: () => ({
    meta: [
      { title: "Event Planning — Spectra Events SFX" },
      {
        name: "description",
        content:
          "Full event planning from Spectra Events SFX — concept, decor, venues, vendors, sound, light and special-effects choreography for weddings, college events, parties and corporate shows in Mangalore.",
      },
      { property: "og:title", content: "Event Planning — Spectra Events SFX" },
      {
        property: "og:description",
        content:
          "End-to-end event planning with cinematic special effects built in.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlanningPage,
});

const STEPS = [
  {
    title: "Listen",
    body: "We start with your story, your crowd and your budget — and the one moment you want everyone to remember.",
  },
  {
    title: "Design",
    body: "Concept, theme, decor direction and an effects plan, mapped beat by beat against your programme.",
  },
  {
    title: "Coordinate",
    body: "Venue, vendors, sound, light and logistics — one team runs the moving parts so nothing collides.",
  },
  {
    title: "Rehearse",
    body: "Every effect is tested and timed before the doors open. No first-takes in front of your guests.",
  },
  {
    title: "Run the show",
    body: "On the day, our crew manages the floor and fires every cue — you just live the moment.",
  },
];

function PlanningPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <div className="grid items-end gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <Eyebrow>Event planning</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-5xl font-semibold text-balance md:text-7xl">
              One team. Whole show.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              Effects are our signature, but they're only one instrument. Our planning service
              conducts the whole orchestra — concept, decor, sound, light, vendors and timing —
              so the spectacle feels effortless.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="overflow-hidden">
            <img
              src={laserImg}
              alt="A couple's first dance produced with lasers and low fog"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-20 border-t border-border/50 pt-14">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">How we work</h2>
        </Reveal>
        <ol className="mt-10 grid gap-px overflow-hidden border border-border/50 bg-border/50 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="bg-background">
              <li className="flex h-full flex-col p-6">
                <span className="font-display text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 font-display text-lg font-semibold">{s.title}</span>
                <span className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal>
        <div className="mt-20 border border-border/60 bg-charcoal p-8 text-center md:p-14">
          <h2 className="font-display text-3xl font-semibold text-balance md:text-4xl">
            Hand us the brief. Keep the moment.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Tell us the date, the venue and the feeling you're after — we'll come back with a
            plan.
          </p>
          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-soft"
          >
            Start planning
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
