import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { SolarCostCalculator } from "@/components/SolarCostCalculator";
import { detailedCategories } from "@/lib/services-detailed";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Solar installation, maintenance, and consultation services from Adhira Solar.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Modern solar solutions for residential and commercial properties—delivered by a local team with a quality-first approach."
      />

      <section className="bg-ocean-900 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Solar services designed for performance"
            description="Choose the support you need—from full installation to long-term care and system improvements."
          />

          <div className="mt-10 space-y-14">
            {detailedCategories.map((cat) => (
              <div key={cat.id}>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-solar-400">
                      {cat.eyebrow}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {cat.label}
                    </h2>
                  </div>
                  <p className="max-w-xl text-sm leading-6 text-white/70">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-8 space-y-8">
                  {cat.services.map((svc) => (
                    <div
                      key={svc.id}
                      className="grid gap-6 rounded-3xl border border-white/10 bg-ocean-800/70 p-6 shadow-sm md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-8"
                    >
                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/10">
                          <span className="text-lg leading-none">{svc.icon}</span>
                          <span>{svc.title}</span>
                        </div>
                        <p className="text-sm font-medium text-white/85">
                          {svc.shortDesc}
                        </p>
                        <div className="inline-flex items-baseline gap-2 rounded-2xl bg-ocean-900/70 px-3 py-2 text-xs">
                          <span
                            className="rounded-full px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em]"
                            style={{
                              color: svc.tagColor,
                              backgroundColor: `${svc.tagColor}22`,
                            }}
                          >
                            {svc.tag}
                          </span>
                          <span className="text-white/65">
                            {svc.stat.value} · {svc.stat.label}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-sm leading-6 text-white/75">
                          {svc.fullDesc}
                        </p>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                            What&apos;s included
                          </p>
                          <ul className="mt-3 space-y-2 text-sm text-white/75">
                            {svc.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2">
                                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-solar-400" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ocean-800/60 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl motion-safe:animate-fade-up">
            <SectionHeading
              eyebrow="Estimate"
              title="Check your solar savings"
              description="Quickly estimate the system size and cost based on your monthly bill so you can choose the right service package."
            />
          </div>
          <div className="mt-10 motion-safe:animate-fade-up">
            <SolarCostCalculator />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

