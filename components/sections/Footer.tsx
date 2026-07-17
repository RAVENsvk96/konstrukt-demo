import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import Logo from "@/components/ui/Logo";
import { company } from "@/content/company";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${company.email}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.address,
  )}`;

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 md:grid-cols-[1.35fr_0.75fr_0.9fr] lg:gap-16">
        <div>
          <Logo />

          <p className="mt-6 max-w-md text-sm leading-7 text-muted">
            {company.description}
          </p>

          <a
            href={site.cta.href}
            className="mt-7 inline-flex items-center gap-2 rounded-button bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
          >
            {site.cta.label}

            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
            Navigácia
          </h3>

          <nav
            aria-label="Navigácia v pätičke"
            className="mt-6 flex flex-col items-start gap-3 text-sm text-muted"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
            Kontakt
          </h3>

          <div className="mt-6 flex flex-col items-start gap-4 text-sm leading-6 text-muted">
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 transition-colors duration-300 hover:text-primary"
            >
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />

              <span>{company.address}</span>
            </a>

            <a
              href={phoneHref}
              className="group flex items-center gap-3 transition-colors duration-300 hover:text-primary"
            >
              <Phone
                className="h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />

              <span>{company.phone}</span>
            </a>

            <a
              href={emailHref}
              className="group flex min-w-0 items-center gap-3 transition-colors duration-300 hover:text-primary"
            >
              <Mail
                className="h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />

              <span className="break-all">{company.email}</span>
            </a>

            <div className="border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                Otváracie hodiny
              </p>

              <p className="mt-2">{company.openingHours}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>
            © {currentYear} {company.name}. Všetky práva vyhradené.
          </p>

          <p>{company.slogan}</p>
        </div>
      </div>
    </footer>
  );
}