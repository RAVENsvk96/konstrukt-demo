import SectionHeading from "@/components/layout/SectionHeading";
import { whyUs } from "@/content/whyUs";

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
        <SectionHeading
          badge={whyUs.badge}
          title={whyUs.title}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whyUs.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-transparent bg-surface-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
            >
              <h3 className="font-semibold text-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}