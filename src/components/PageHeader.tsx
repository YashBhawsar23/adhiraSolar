import { Container } from "@/components/Container";

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="solar-grid bg-ocean-900">
      <Container className="py-14 sm:py-16">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-white/70">{subtitle}</p>
        </div>
      </Container>
    </section>
  );
}

