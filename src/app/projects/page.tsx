import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore past solar installations by Adhira Solar.",
};

const showcase = [
  {
    title: "Rooftop Residential System",
    location: "Green City",
    imageSrc: "/projects/roof-home.svg",
    stats: "6.2 kW • 18 panels • Estimated savings: 35%",
  },
  {
    title: "Commercial Solar Array",
    location: "Downtown District",
    imageSrc: "/projects/commercial-array.svg",
    stats: "48 kW • 120 panels • Offset: 60% usage",
  },
  {
    title: "Community Solar Install",
    location: "Sunnyvale",
    imageSrc: "/projects/community-solar.svg",
    stats: "90 kW • Shared credits • 150+ households",
  },
  {
    title: "Modern Home Upgrade",
    location: "Lakeside",
    imageSrc: "/projects/roof-home.svg",
    stats: "7.5 kW • 22 panels • Battery-ready design",
  },
  {
    title: "Warehouse Retrofit",
    location: "Industrial Park",
    imageSrc: "/projects/commercial-array.svg",
    stats: "60 kW • 150 panels • Demand reduction focus",
  },
  {
    title: "Neighborhood Solar Program",
    location: "Oakview",
    imageSrc: "/projects/community-solar.svg",
    stats: "110 kW • Community credits • Local impact",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="A snapshot of our recent solar work across residential rooftops, commercial sites, and community programs."
      />

      <section className="bg-ocean-900 py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {showcase.map((p) => (
              <div key={`${p.title}-${p.location}`} className="motion-safe:animate-fade-up">
                <ProjectCard
                  title={p.title}
                  location={p.location}
                  imageSrc={p.imageSrc}
                  stats={p.stats}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

