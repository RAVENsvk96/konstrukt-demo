import Button from "@/components/ui/Button";
import { company } from "@/content/company";

export default function CTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 text-center shadow-2xl shadow-black/40">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Objednajte sa
        </span>

        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Potrebujete servis alebo diagnostiku?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Zavolajte nám alebo nám napíšte. Ozveme sa čo najskôr a dohodneme
          termín, ktorý vám bude vyhovovať.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#kontakt">
            Objednať termín
          </Button>

          <Button href={`tel:${company.phone.replace(/\s/g, "")}`}>
            {company.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}