import Logo from "@/components/ui/Logo";
import { company } from "@/content/company";
import { navigation } from "@/content/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${company.email}`;

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <Logo />

          <p className="mt-6 max-w-md text-sm leading-7 text-muted">
            {company.description}
          </p>

          <a
            href="#kontakt"
            className="mt-6 inline-flex text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Rezervovať termín
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

          <div className="mt-6 flex flex-col items-start gap-3 text-sm leading-6 text-muted">
            <p>{company.address}</p>

            <a
              href={phoneHref}
              className="transition-colors duration-300 hover:text-primary"
            >
              {company.phone}
            </a>

            <a
              href={emailHref}
              className="break-all transition-colors duration-300 hover:text-primary"
            >
              {company.email}
            </a>

            <p>{company.openingHours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>
            © {currentYear} {company.name}. Všetky práva vyhradené.
          </p>

          <p>Krása, ktorá rozkvitá.</p>
        </div>
      </div>
    </footer>
  );
}