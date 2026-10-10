export interface Effect {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string[];
}

export const EFFECTS: Effect[] = [
  {
    slug: "cold-spark-machine",
    name: "Cold Spark Machine",
    tagline: "Fireworks, reimagined for indoors",
    description:
      "Safe, smoke-free spark fountains that shoot brilliant gold sparks without heat, flame, or smell. Perfect for grand entries, first dances, and stage moments — indoors or out.",
    bestFor: ["Grand entries", "First dance", "Stage reveals"],
  },
  {
    slug: "foam-party",
    name: "Foam Party",
    tagline: "A dance floor like no other",
    description:
      "A high-output foam cannon fills the floor with mountains of soft, skin-safe foam while the music peaks. The ultimate high-energy closer for parties and college events.",
    bestFor: ["College fests", "Birthday parties", "Pool parties"],
  },
  {
    slug: "couples-laser-light",
    name: "Couples Laser Light",
    tagline: "Your first dance, in a tunnel of light",
    description:
      "Programmed laser beams sculpt a tunnel of light around the couple during their special moment, synced to music and combined with low fog for a truly cinematic scene.",
    bestFor: ["First dance", "Couple entry", "Reception highlight"],
  },
  {
    slug: "low-fog",
    name: "Low Fog",
    tagline: "Dancing on clouds",
    description:
      "A dense layer of fog that hugs the floor and never rises, turning any stage or dance floor into a dreamscape. Stunning on its own and magical under lasers.",
    bestFor: ["First dance", "Stage ambiance", "Photo moments"],
  },
  {
    slug: "fog-bubble",
    name: "Fog Bubble",
    tagline: "Smoke-filled bubbles that burst into mist",
    description:
      "Giant bubbles filled with swirling fog float over the crowd and burst into soft mist on touch. A whimsical, unforgettable effect for entries and celebrations.",
    bestFor: ["Bride & groom entry", "Kids' moments", "Reveals"],
  },
  {
    slug: "smoke-bubble",
    name: "Smoke Bubble",
    tagline: "A bubble of drama",
    description:
      "The couple or guest of honour steps inside a giant smoke-filled bubble for a dramatic reveal photograph — a signature moment your guests will talk about.",
    bestFor: ["Couple reveal", "Photo ops", "Stage moments"],
  },
  {
    slug: "paper-blast",
    name: "Paper Blast",
    tagline: "A sky full of celebration",
    description:
      "Confetti and paper cannons timed to the beat shower the crowd in colour. Choose tissue, metallic, or custom-coloured paper to match your theme.",
    bestFor: ["Countdowns", "Finale moments", "Crowd energy"],
  },
  {
    slug: "butterfly",
    name: "Butterfly",
    tagline: "A flutter of magic",
    description:
      "A delicate release-style effect that sends a flutter of butterfly confetti drifting over the couple — elegant, gentle, and deeply photogenic.",
    bestFor: ["Varmala moments", "Receptions", "Romantic entries"],
  },
  {
    slug: "petal-shot",
    name: "Petal Shot",
    tagline: "A shower of rose petals",
    description:
      "A burst of fresh or fabric rose petals rains down over the couple at the exact moment it matters most — the varmala, the entry, the first kiss.",
    bestFor: ["Varmala", "Couple entry", "Ring ceremony"],
  },
  {
    slug: "co2-jet",
    name: "CO2 Jet",
    tagline: "Concert-grade blasts of ice-cold fog",
    description:
      "Stage-mounted CO2 jets fire towering plumes of white fog on cue — the same effect you see at arena concerts, synced to drops and big moments.",
    bestFor: ["DJ nights", "Stage drops", "Grand finales"],
  },
  {
    slug: "co2-gun",
    name: "CO2 Gun",
    tagline: "Handheld crowd-cooling firepower",
    description:
      "A performer roams the crowd with a handheld CO2 gun, blasting refreshing plumes of fog over the dance floor. Interactive, loud, and wildly fun.",
    bestFor: ["Dance floors", "DJ sets", "Crowd interaction"],
  },
];

export const EVENT_TYPES = [
  { name: "Weddings", description: "Entries, varmala, first dance, and reception moments crafted to feel cinematic." },
  { name: "College Events", description: "Fests, DJ nights, and freshers' parties with high-energy crowd effects." },
  { name: "Parties", description: "Birthdays, anniversaries, and private celebrations with a signature wow moment." },
  { name: "Corporate Events", description: "Product launches, award nights, and annual days with polished, brand-safe effects." },
];

export const BUSINESS = {
  name: "Spectra Events SFX",
  address: "HNGC Building, Surathkal, Mangalore",
  phones: ["+91 63606 42171", "+91 96116 04174"],
  instagram: "@spectra_events_sfx",
  instagramUrl: "https://instagram.com/spectra_events_sfx",
};
