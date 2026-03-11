"use client";

import Link from "next/link";

export function FloatingWhatsApp() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <Link
        href="https://wa.me/915550123456"
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 ring-2 ring-white/10 transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solar-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-7 w-7"
          fill="currentColor"
        >
          <path d="M16 3C9.9 3 5 7.8 5 13.8c0 2.3.8 4.4 2.1 6.1L5 27l7.3-2.1c1.6.9 3.4 1.3 5.2 1.3 6.1 0 11-4.8 11-10.8C28.5 7.8 22.6 3 16 3zm0 18.8c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-4.3 1.2 1.2-4.1-.3-.4A8 8 0 0 1 8 13.8C8 9.5 11.6 6 16 6s8 3.5 8 7.8-3.6 7.9-8 7.9z" />
          <path d="M20.7 17.6c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.3-1.6-1.4-1.9-.1-.3 0-.4.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.2.1-.3.2-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.4s1 2.7 1.1 2.9c.1.2 2 3.2 4.9 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.3-.3-.4-.6-.5z" />
        </svg>
      </Link>
    </div>
  );
}

