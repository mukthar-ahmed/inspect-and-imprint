import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Instagram } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import { Reveal, Eyebrow } from "@/components/reveal";
import { BUSINESS } from "@/lib/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Spectra Events SFX" },
      {
        name: "description",
        content:
          "Spectra Events SFX is a special-effects and event-planning studio based in Surathkal, Mangalore, serving weddings, college events, parties and corporate shows across the region.",
      },
      { property: "og:title", content: "About — Spectra Events SFX" },
      {
        property: "og:description",
        content:
          "A special-effects and event-planning studio from Surathkal, Mangalore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <Eyebrow>About us</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-5xl font-semibold text-balance md:text-6xl">
              The crew behind the moment
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-6 max-w-lg space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Spectra Events SFX began with a simple observation: the part of an event everyone
                remembers is rarely the schedule — it's the ten seconds when the sparks fly, the
                fog rolls in, and the whole room gasps.
              </p>
              <p>
                Based at {BUSINESS.address}, we bring professional-grade special effects and
                full event planning to weddings, college events, parties and corporate shows
                across Mangalore and the surrounding region.
              </p>
              <p>
                Every effect is operated by our own trained crew, rehearsed against your
                programme, and fired on cue — safely, and exactly on the beat.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 space-y-3 border-t border-border/60 pt-8 text-sm">
              <p className="flex items-center gap-3 text-foreground/85">
                <MapPin className="h-4 w-4 shrink-0 text-primary" /> {BUSINESS.address}
              </p>
              {BUSINESS.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-foreground/85 hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" /> {p}
                </a>
              ))}
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-foreground/85 hover:text-primary"
              >
                <Instagram className="h-4 w-4 shrink-0 text-primary" /> {BUSINESS.instagram}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-soft"
            >
              Work with us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="overflow-hidden">
            <img
              src={heroImg}
              alt="A wedding stage produced with cold sparks, low fog and golden lighting"
              loading="lazy"
              width={1920}
              height={1088}
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Illustrative image of the kind of scene we create, not a photograph of a past
              Spectra event.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-24 grid gap-px overflow-hidden border border-border/50 bg-border/50 md:grid-cols-3">
        {[
          {
            title: "Safety first",
            body: "Cold sparks, not fire. Trained operators, venue checks, and effects chosen to suit the space and the crowd.",
          },
          {
            title: "Timed to the beat",
            body: "Effects are rehearsed against your programme and music cues, so the big second lands exactly when it should.",
          },
          {
            title: "One team, whole show",
            body: "Effects and planning under one roof means fewer vendors to coordinate and one crew accountable for the moment.",
          },
        ].map((v, i) => (
          <Reveal key={v.title} delay={i * 0.1} className="bg-background">
            <div className="p-8">
              <p className="font-display text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
