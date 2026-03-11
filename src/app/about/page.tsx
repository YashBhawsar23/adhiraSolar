import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { InfoCard } from "@/components/Cards";
import { Bolt, Leaf, Shield } from "@/components/Icons";
import { CTASection } from "@/components/CTASection";
import { SolarCostCalculator } from "@/components/SolarCostCalculator";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Adhira Solar—our mission, values, and approach to modern solar energy solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Adhira Solar"
        subtitle="We help families and businesses switch to clean energy with modern system design, quality components, and a smooth end-to-end experience."
      />

      <section className="bg-ocean-900 py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="motion-safe:animate-fade-up">
              <SectionHeading
                eyebrow="Our mission"
                title="Make solar simple, transparent, and impactful"
                description="We focus on high-quality installs, honest recommendations, and long-term performance. Our team handles the details—permits, approvals, and setup—so you can enjoy clean energy sooner."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <InfoCard
                  icon={<Bolt className="h-6 w-6" />}
                  title="Performance"
                  description="Optimized layouts for your roof and usage."
                />
                <InfoCard
                  icon={<Shield className="h-6 w-6" />}
                  title="Quality"
                  description="Reliable components and strong warranties."
                />
                <InfoCard
                  icon={<Leaf className="h-6 w-6" />}
                  title="Sustainability"
                  description="Cleaner energy with measurable impact."
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-solar-500/20 via-transparent to-eco-600/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-ocean-800/60 shadow-sm">
                <div className="relative aspect-[4/3] bg-ocean-900/60">
                  <Image
                    src="/projects/commercial-array.svg"
                    alt="Solar array"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-white">
                    A people-first process
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    You’ll get a clear quote, realistic timelines, and a team
                    that keeps you informed at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ocean-800/60 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl motion-safe:animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-solar-400">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              From enquiry to{" "}
              <span className="bg-gradient-to-r from-solar-400 via-eco-500 to-solar-500 bg-clip-text text-transparent">
                clean energy
              </span>{" "}
              in 6 steps
            </h2>
          </div>

          <div className="mt-10 rounded-3xl border border-white/8 bg-ocean-900/60 p-4 sm:p-6 lg:p-8 shadow-sm">
            <div className="grid gap-px rounded-2xl bg-white/5 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Free Consultation",
                  text: "Call us or fill the form. We discuss your energy needs, site type, and budget—no commitment required.",
                },
                {
                  step: "02",
                  title: "Site Survey",
                  text: "Our engineer visits your site, assesses the structure, measures shading, and determines the optimal configuration.",
                },
                {
                  step: "03",
                  title: "Custom Proposal",
                  text: "You receive a detailed quote with system specs, expected savings, subsidy eligibility, and ROI timeline.",
                },
                {
                  step: "04",
                  title: "Installation",
                  text: "Our certified crew installs your system efficiently. We handle all safety checks and leave your site spotless.",
                },
                {
                  step: "05",
                  title: "Commissioning & Handover",
                  text: "We test the full system, connect monitoring, walk you through the dashboard, and hand over all documents.",
                },
                {
                  step: "06",
                  title: "Ongoing Support",
                  text: "From subsidy follow-up to annual maintenance, we stay with you for the entire life of your solar system.",
                },
              ].map((x) => (
                <div
                  key={x.step}
                  className="relative flex flex-col gap-3 bg-ocean-900/80 px-5 py-6 sm:px-6 sm:py-7"
                >
                  <p className="text-3xl font-semibold tracking-tight text-white/5">
                    {x.step}
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-white">
                      {x.title}
                    </p>
                    <p className="text-xs leading-6 text-white/65 sm:text-sm">
                      {x.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ocean-900 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl motion-safe:animate-fade-up">
            <SectionHeading
              eyebrow="Estimate"
              title="Estimate your solar journey"
              description="Use our solar cost calculator to understand the right system size, subsidy tier, and indicative investment for your property."
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

