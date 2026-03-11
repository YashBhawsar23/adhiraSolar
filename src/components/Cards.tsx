import Image from "next/image";
import { cn } from "@/lib/cn";

export function InfoCard({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-3xl border border-white/10 bg-ocean-800/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-ocean-800 hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-solar-500/15 text-solar-400 ring-1 ring-solar-500/25 transition-colors group-hover:bg-solar-500/20">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="break-words text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 break-words text-sm leading-6 text-white/70">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <figure className="flex h-full flex-col rounded-3xl border border-solar-100 bg-solar-50/80 p-7 shadow-sm">
      <div className="text-xl text-solar-400">“</div>
      <blockquote className="mt-2 flex-1 text-sm leading-7 text-ocean-700">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-solar-400 text-xs font-semibold text-ocean-900">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-ocean-900">{name}</p>
          <p className="text-xs text-ocean-700/70">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function ProjectCard({
  title,
  location,
  imageSrc,
  stats,
}: {
  title: string;
  location: string;
  imageSrc: string;
  stats: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-ocean-800/70 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-ocean-800 hover:shadow-md">
      <div className="relative aspect-[16/10] bg-ocean-900/60">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold tracking-wide text-solar-400">
          {location}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{stats}</p>
      </div>
    </div>
  );
}

