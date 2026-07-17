import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { whyUs } from "@/content/whyUs";

export default function WhyUs() {
  return (
    <section className="bg-background py-20">
      <Container>
        <FadeIn>
          <div className="rounded-card border border-border bg-surface p-8 md:p-10">
            <SectionHeading
              badge={whyUs.badge}
              title={whyUs.title}
            />

            <Stagger
              staggerChildren={0.08}
              className="mt-10 grid gap-6 md:grid-cols-3"
            >
              {whyUs.items.map((item) => (
                <StaggerItem
                  key={item.title}
                  className="rounded-2xl border border-transparent bg-background p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
                >
                  <h3 className="font-semibold text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}