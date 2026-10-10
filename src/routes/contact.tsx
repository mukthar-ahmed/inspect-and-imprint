import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Reveal, Eyebrow } from "@/components/reveal";
import { BUSINESS, EFFECTS, EVENT_TYPES } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enquiry — Spectra Events SFX" },
      {
        name: "description",
        content:
          "Send an enquiry to Spectra Events SFX — tell us your event type, date, venue and the effects you want. Based in Surathkal, Mangalore.",
      },
      { property: "og:title", content: "Contact & Enquiry — Spectra Events SFX" },
      {
        property: "og:description",
        content: "Tell us the moment you want. We'll build it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const inputCls =
  "w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-7xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-5xl font-semibold text-balance md:text-6xl">
              Tell us the moment you want.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Share a few details about your event and we'll call you back to talk through ideas,
              effects and availability.
            </p>
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
        </div>

        <Reveal delay={0.15}>
          <div className="border border-border/60 bg-charcoal p-6 md:p-10">
            <p className="border border-primary/40 bg-primary/10 px-4 py-3 text-xs leading-relaxed text-primary">
              Prototype form — submissions are not yet sent anywhere. Until our booking system is
              connected, please call or message us on Instagram for a confirmed enquiry.
            </p>

            {sent ? (
              <div className="mt-8 text-center">
                <p className="font-display text-2xl font-semibold">Thanks — noted!</p>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  This prototype didn't send your details anywhere. To reach us right now, call{" "}
                  <a
                    href={`tel:${BUSINESS.phones[0]?.replace(/\s/g, "")}`}
                    className="text-primary"
                  >
                    {BUSINESS.phones[0]}
                  </a>{" "}
                  or DM {BUSINESS.instagram} on Instagram.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold tracking-wide text-foreground/80 uppercase">
                    Name
                  </label>
                  <input id="name" name="name" required className={inputCls} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold tracking-wide text-foreground/80 uppercase">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" required className={inputCls} placeholder="+91 …" />
                </div>
                <div>
                  <label htmlFor="eventType" className="mb-1.5 block text-xs font-semibold tracking-wide text-foreground/80 uppercase">
                    Event type
                  </label>
                  <select id="eventType" name="eventType" required className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select…
                    </option>
                    {EVENT_TYPES.map((t) => (
                      <option key={t.name} value={t.name}>
                        {t.name}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="mb-1.5 block text-xs font-semibold tracking-wide text-foreground/80 uppercase">
                    Event date
                  </label>
                  <input id="date" name="date" type="date" className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="venue" className="mb-1.5 block text-xs font-semibold tracking-wide text-foreground/80 uppercase">
                    Venue / City
                  </label>
                  <input id="venue" name="venue" className={inputCls} placeholder="e.g. Surathkal, Mangalore" />
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="mb-2 text-xs font-semibold tracking-wide text-foreground/80 uppercase">
                    Preferred effects
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {EFFECTS.map((e) => (
                      <label
                        key={e.slug}
                        className="flex cursor-pointer items-center gap-2 border border-border/70 px-3 py-1.5 text-xs text-foreground/80 has-checked:border-primary has-checked:text-primary"
                      >
                        <input type="checkbox" name="effects" value={e.name} className="accent-[oklch(0.79_0.115_85)]" />
                        {e.name}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold tracking-wide text-foreground/80 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={inputCls}
                    placeholder="Tell us about your event and the moment you're imagining…"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-soft sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
