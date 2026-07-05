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
    <header className="sticky top-0 z-50 border-b border-[#E6DED2] bg-[#F7F5F2]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Logo />

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveSection(item.href)}
              className={`transition-colors duration-300 ${
                activeSection === item.href
                  ? "text-[#A7865A]"
                  : "text-[#666666] hover:text-[#A7865A]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button href="#kontakt" className="px-5 py-2.5 text-sm">
            Rezervovať
          </Button>

          <button
            type="button"
            aria-label={isOpen ? "Zatvoriť menu" : "Otvoriť menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-[#E6DED2] bg-white p-2 text-[#111111] md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-[#E6DED2] bg-[#F7F5F2] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
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
                    ? "text-[#A7865A]"
                    : "text-[#666666] hover:text-[#A7865A]"
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