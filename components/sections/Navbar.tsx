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
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Logo />

        <div className="hidden items-center gap-8 text-sm md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveSection(item.href)}
              className={`transition-colors duration-300 ${
                activeSection === item.href
                  ? "text-orange-500"
                  : "text-zinc-300 hover:text-orange-500"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            href="#kontakt"
            className="px-5 py-2.5 text-sm"
          >
            Objednať
          </Button>

          <button
            type="button"
            aria-label={isOpen ? "Zatvoriť menu" : "Otvoriť menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-zinc-800 p-2 text-zinc-300 md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href);
                  setIsOpen(false);
                }}
                className={`transition-colors duration-300 ${
                  activeSection === item.href
                    ? "text-orange-500"
                    : "text-zinc-300 hover:text-orange-500"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}