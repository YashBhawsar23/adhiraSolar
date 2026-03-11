import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-solar-500 text-ocean-900 hover:bg-solar-400 shadow-sm shadow-solar-500/25",
  secondary:
    "bg-white/0 text-white ring-1 ring-solar-500/35 hover:bg-white/5 hover:ring-solar-400/55",
  ghost:
    "bg-white/0 text-white ring-1 ring-white/20 hover:bg-white/5 hover:ring-white/35",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solar-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

