import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ocean-900">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-solar-500 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-eco-600 blur-3xl" />
      </div>
      <Container className="relative py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="motion-safe:animate-fade-up">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get Free Solar Quote
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
              Tell us about your property and energy goals. We’ll respond with a
              tailored estimate, system design options, and available incentives.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button href="/contact" variant="primary">
              Request a Quote
            </Button>
            <Button href="/services" variant="ghost">
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

