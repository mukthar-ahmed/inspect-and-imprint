import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { useRef } from "react";

import heroImg from "@/assets/hero.jpg";
import coldSparkImg from "@/assets/effect-cold-spark.jpg";
import foamImg from "@/assets/effect-foam.jpg";
import laserImg from "@/assets/effect-laser.jpg";
import { Reveal, Eyebrow } from "@/components/reveal";
import { EFFECTS, EVENT_TYPES, BUSINESS } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spectra Events SFX — Cinematic Event Special Effects in Mangalore" },
      {
        name: "description",
        content:
          "Cold sparks, low fog, lasers, CO2 jets, foam parties and full event planning for weddings, college events, parties and corporate shows — Surathkal, Mangalore.",
      },
      { property: "og:title", content: "Spectra Events SFX — Cinematic Event Special Effects" },
      {
        property: "og:description",
        content:
          "Special effects and event planning that turn moments into scenes. Based in Surathkal, Mangalore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const FEATURED = [
  { img: coldSparkImg, slug: "cold-spark-machine", label: "Cold Spark Machine" },
  { img: laserImg, slug: "couples-laser-light", label: "Couples Laser Light" },
  { img: foamImg, slug: "foam-party", label: "Foam Party" },
];

function HomePage() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section ref={heroRef} className="relative flex min-h-svh items-end overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src={heroImg}
            alt="A wedding stage at night with cold spark fountains, low fog and golden light"
            className="h-full w-full object-cover"
            width={1920}
            height={1088}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/25" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative mx-auto w-full max-w-7xl px-5 pb-24 md:px-8 md:pb-32"
        >
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xs font-semibold tracking-[0.35em] text-primary uppercase"
          >
            Special Effects · Event Planning · Mangalore
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] font-semibold text-balance md:text-7xl lg:text-8xl"
          >
            We turn moments into <span className="gold-gradient-text italic">scenes.</span>
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg"
          >
            Cold sparks, low fog, lasers, CO2 and foam — cinematic special effects and full event
            planning for weddings, college events, parties and corporate shows.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-gold-soft"
            >
              Plan Your Event
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/effects"
              className="inline-flex items-center gap-2 border border-foreground/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Explore Effects
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <ChevronDown className="h-5 w-5 animate-bounce text-foreground/50" />
        </motion.div>
      </section>

      {/* ── Intro statement ──────────────────────────────── */}
      <section className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl font-display text-2xl leading-snug font-medium text-foreground/90 md:text-4xl">
              Spectra Events SFX is a special-effects and event-planning studio from Surathkal,
              Mangalore. We design the ten seconds everyone remembers — and everything around
              them.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-border/50 bg-border/50 md:grid-cols-4">
              {EVENT_TYPES.map((t) => (
                <div key={t.name} className="bg-background p-6 md:p-8">
                  <p className="font-display text-lg font-semibold text-foreground md:text-xl">
                    {t.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Featured effects ─────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <Eyebrow>Signature effects</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display text-4xl font-semibold text-balance md:text-6xl">
                  The effects that steal the show
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <Link
                to="/effects"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                All {EFFECTS.length} effects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURED.map((f, i) => (
              <Reveal key={f.slug} delay={i * 0.12}>
                <Link
                  to="/effects/$slug"
                  params={{ slug: f.slug }}
                  className="group relative block overflow-hidden"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={f.img}
                      alt={`${f.label} special effect at an event`}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.25em] text-primary uppercase">
                        Effect {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 font-display text-2xl font-semibold text-foreground">
                        {f.label}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Imagery shown is illustrative of each effect, not photographs of past Spectra events.
          </p>
        </div>
      </section>

      {/* ── Planning strip ───────────────────────────────── */}
      <section className="border-y border-border/50 bg-charcoal">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <Reveal>
              <Eyebrow>Beyond effects</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl font-semibold text-balance md:text-5xl">
                Full event planning, end to end
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                From venue and decor to sound, light, and the perfect effect at the perfect second
                — our planning team runs the whole show so you can be in the moment.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <Link
                to="/planning"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                About our planning service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <ul className="divide-y divide-border/60 border-y border-border/60">
              {[
                "Concept, theme & decor direction",
                "Venue, vendor & logistics coordination",
                "Sound, lighting & stage production",
                "Special-effects choreography & timing",
                "On-day show management",
              ].map((item, i) => (
                <li key={item} className="flex items-baseline gap-5 py-4">
                  <span className="font-display text-sm text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-background/80" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-36">
          <Reveal>
            <Eyebrow>
              <span className="mx-auto">Let's talk</span>
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-semibold text-balance md:text-6xl">
              Tell us the moment you want. We'll build it.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-gold-soft"
              >
                Send an Enquiry
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${BUSINESS.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 border border-foreground/25 px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.phones[0]}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
