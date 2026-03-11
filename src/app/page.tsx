import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { InfoCard, TestimonialCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { benefits, services, testimonials } from "@/lib/site";
import { SunLogo } from "@/components/Icons";
import { TrustedBy } from "@/components/TrustedBy";
import { FAQSection } from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ocean-900 solar-grid">
        <Container className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center motion-safe:animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/70 shadow-sm ring-1 ring-white/10">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-solar-500/20 text-solar-300 ring-1 ring-solar-400/40">
                <SunLogo className="h-3.5 w-3.5" />
              </span>
              India&apos;s trusted solar partner
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Power your home with{" "}
              <span className="text-solar-400">clean sunlight</span>
            </h1>
            <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg">
              Expert solar panel installation for homes and businesses across
              India. Cut electricity bills, go green, and enjoy long-term energy
              independence—starting today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="/contact" variant="primary" className="min-w-[170px]">
                Get Free Quote
              </Button>
              <Button href="/services" variant="secondary" className="min-w-[170px]">
                Explore Services
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl border-t border-white/10 pt-6 text-center text-sm text-white/80">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="px-2 py-2">
                <p className="text-xl font-semibold text-white">5,000+</p>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-white/60">
                  Homes powered
                </p>
              </div>
              <div className="px-2 py-2">
                <p className="text-xl font-semibold text-white">₹0</p>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-white/60">
                  Down payment options
                </p>
              </div>
              <div className="px-2 py-2">
                <p className="text-xl font-semibold text-white">30 Yr</p>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-white/60">
                  Panel warranty
                </p>
              </div>
              <div className="px-2 py-2">
                <p className="text-xl font-semibold text-white">98%</p>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-white/60">
                  Customer satisfaction
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustedBy />

      <section className="bg-ocean-900 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Everything you need for solar—end to end"
            description="From design and installation to ongoing performance checks, we deliver dependable solar energy with a clean, modern process."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <InfoCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                className="motion-safe:animate-fade-up"
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ocean-800/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title="Solar that pays off—today and long-term"
            description="Lower bills, cleaner energy, and peace of mind with reliable equipment and smart monitoring."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <InfoCard
                key={b.title}
                icon={b.icon}
                title={b.title}
                description={b.description}
                className="motion-safe:animate-fade-up"
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-solar-50 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl motion-safe:animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-solar-500">
              Customer stories
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ocean-900 sm:text-4xl">
              Real homes. Real savings.
            </h2>
          </div>
          {/* Mobile carousel */}
          <div className="mt-10 md:hidden">
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="snap-center shrink-0 basis-[85%] motion-safe:animate-fade-up"
                >
                  <TestimonialCard quote={t.quote} name={t.name} role={t.role} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="mt-10 hidden gap-6 md:grid md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="motion-safe:animate-fade-up">
                <TestimonialCard quote={t.quote} name={t.name} role={t.role} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection />

      <CTASection />
    </>
  );
}
