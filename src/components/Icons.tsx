import { cn } from "@/lib/cn";

type IconProps = { className?: string };

export function SunLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("h-7 w-7", className)}
      fill="none"
    >
      <circle cx="24" cy="24" r="9" fill="currentColor" opacity="0.95" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M24 4v6" />
        <path d="M24 38v6" />
        <path d="M4 24h6" />
        <path d="M38 24h6" />
        <path d="M9.7 9.7l4.2 4.2" />
        <path d="M34.1 34.1l4.2 4.2" />
        <path d="M38.3 9.7l-4.2 4.2" />
        <path d="M13.9 34.1l-4.2 4.2" />
      </g>
    </svg>
  );
}

export function Bolt({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
      fill="none"
    >
      <path
        d="M13 2L4 14h7l-1 8 10-14h-7l0-6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wrench({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
      fill="none"
    >
      <path
        d="M21 7a6 6 0 0 1-7.8 5.7L7.2 18.7a2 2 0 1 1-2.9-2.9l6-6A6 6 0 0 1 17 3l-3 3 4 4 3-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Chat({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
      fill="none"
    >
      <path
        d="M21 12a8 8 0 0 1-8 8H7l-4 3 1.5-4.5A8 8 0 1 1 21 12z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h.01M12 12h.01M16 12h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Leaf({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
      fill="none"
    >
      <path
        d="M20 4c-7 0-12 3-14 7-2.5 5 1.5 9 7 9 8 0 10-9 7-16z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 20c2-5 7-10 14-14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Shield({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
      fill="none"
    >
      <path
        d="M12 2l8 4v7c0 5-3.5 9-8 9s-8-4-8-9V6l8-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

