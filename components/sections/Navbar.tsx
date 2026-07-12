"use client";

import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { navigation } from "@/content/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Hlavná navigácia"
      >
        <Logo />

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveSection(item.href)}
              className={`transition-colors duration-300 ${
                activeSection === item.href
                  ? "text-primary"
                  : "text-muted hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            href="#kontakt"
            className="hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            Rezervovať
          </Button>

          <button
            type="button"
            aria-label={isOpen ? "Zatvoriť menu" : "Otvoriť menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary md:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background px-6 py-5 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm font-medium">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href);
                  setIsOpen(false);
                }}
                className={`rounded-lg px-3 py-2 transition-colors duration-300 ${
                  activeSection === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}

            <Button
              href="#kontakt"
              className="mt-2 w-full py-3 text-sm"
            >
              Rezervovať termín
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}