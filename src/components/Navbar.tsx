"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/site";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SunLogo } from "@/components/Icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ocean-900/75 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-solar-500/15 text-solar-400 shadow-sm ring-1 ring-solar-500/25">
            <SunLogo className="h-6 w-6" />
          </span>
          <span className="font-semibold tracking-tight text-white">
            Adhira <span className="text-solar-400">Solar</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="secondary">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-white/80 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solar-400/70 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </Container>

      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <Container className="pb-5">
          <div className="mt-2 rounded-2xl border border-white/10 bg-ocean-900/95 p-2 shadow-sm">
            <div className="flex flex-col">
              {navLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-white/10 text-white"
                        : "text-white/75 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <div className="p-2">
                <Button
                  href="/contact"
                  variant="secondary"
                  className="w-full"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

