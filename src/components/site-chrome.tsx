import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/effects", label: "Effects" },
  { to: "/events", label: "Events We Cover" },
  { to: "/gallery", label: "Gallery" },
  { to: "/planning", label: "Event Planning" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" className="group flex items-baseline gap-2" aria-label="Spectra Events SFX — home">
          <span className="font-display text-xl font-semibold tracking-wide text-foreground md:text-2xl">
            SPECTRA
          </span>
          <span className="text-[10px] font-semibold tracking-[0.35em] text-primary uppercase">
            Events SFX
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border border-primary/70 px-5 py-2 text-[13px] font-semibold tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border/60 bg-background px-5 pt-2 pb-6 lg:hidden"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block border-b border-border/40 py-3.5 text-sm font-medium text-foreground/90"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-5 block bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Enquire Now
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-charcoal">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl font-semibold text-foreground">
            SPECTRA <span className="text-sm tracking-[0.3em] text-primary">EVENTS SFX</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Special effects and event planning for weddings, college events, parties, and
            corporate shows — based in Surathkal, serving Mangalore and beyond.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Contact</p>
          <address className="mt-3 text-sm leading-relaxed text-muted-foreground not-italic">
            {BUSINESS.address}
            <br />
            {BUSINESS.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-foreground">
                {p}
              </a>
            ))}
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block hover:text-foreground"
            >
              Instagram: {BUSINESS.instagram}
            </a>
          </address>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Explore</p>
          <nav className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm" aria-label="Footer">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} className="text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}
