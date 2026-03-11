// "use client";

// import Link from "next/link";

// export function FloatingWhatsApp() {
//   return (
//     <div className="pointer-events-none fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
//       <Link
//         href="https://wa.me/919522244453"
//         target="_blank"
//         rel="noreferrer"
//         className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 ring-2 ring-white/10 transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solar-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
//         aria-label="Chat with us on WhatsApp"
//       >
//         <svg
//           viewBox="0 0 32 32"
//           aria-hidden="true"
//           className="h-7 w-7"
//           fill="currentColor"
//         >
//           <path d="M16 3C9.9 3 5 7.8 5 13.8c0 2.3.8 4.4 2.1 6.1L5 27l7.3-2.1c1.6.9 3.4 1.3 5.2 1.3 6.1 0 11-4.8 11-10.8C28.5 7.8 22.6 3 16 3zm0 18.8c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-4.3 1.2 1.2-4.1-.3-.4A8 8 0 0 1 8 13.8C8 9.5 11.6 6 16 6s8 3.5 8 7.8-3.6 7.9-8 7.9z" />
//           <path d="M20.7 17.6c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.3-1.6-1.4-1.9-.1-.3 0-.4.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.2.1-.3.2-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.4s1 2.7 1.1 2.9c.1.2 2 3.2 4.9 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.3-.3-.4-.6-.5z" />
//         </svg>
//       </Link>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex items-center justify-end gap-3">
      {/* Tooltip label */}
      <div
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered
            ? "translateX(0) scale(1)"
            : "translateX(8px) scale(0.95)",
          transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
          pointerEvents: "none",
          background: "linear-gradient(135deg, #111 0%, #1a1a1a 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "10px",
          padding: "8px 14px",
          whiteSpace: "nowrap",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#e8f5e9",
            letterSpacing: "0.01em",
          }}
        >
          Chat with us
        </span>
        <div
          style={{
            position: "absolute",
            right: "-5px",
            top: "50%",
            transform: "translateY(-50%) rotate(45deg)",
            width: "10px",
            height: "10px",
            background: "#1a1a1a",
            border: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "none",
            borderBottom: "none",
          }}
        />
      </div>

      {/* Button */}
      <Link
        href="https://wa.me/919522244453?text=Hi!%20I'm%20interested%20in%20solar%20panel%20installation%20for%20my%20home.%20Can%20you%20help%3F"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="pointer-events-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          background: "linear-gradient(145deg, #25D366 0%, #128C7E 100%)",
          boxShadow: hovered
            ? "0 0 0 8px rgba(37,211,102,0.15), 0 12px 40px rgba(37,211,102,0.45)"
            : "0 0 0 0px rgba(37,211,102,0), 0 8px 24px rgba(37,211,102,0.35)",
          transition:
            "box-shadow 0.3s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          outline: "none",
          textDecoration: "none",
        }}
      >
        {/* Ping animation ring */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "rgba(37,211,102,0.4)",
            animation: "wa-ping 2s ease-out infinite",
          }}
        />

        {/* WhatsApp SVG */}
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          style={{
            width: "28px",
            height: "28px",
            fill: "white",
            position: "relative",
            zIndex: 1,
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
          }}
        >
          <path d="M16 3C9.9 3 5 7.8 5 13.8c0 2.3.8 4.4 2.1 6.1L5 27l7.3-2.1c1.6.9 3.4 1.3 5.2 1.3 6.1 0 11-4.8 11-10.8C28.5 7.8 22.6 3 16 3zm0 18.8c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-4.3 1.2 1.2-4.1-.3-.4A8 8 0 0 1 8 13.8C8 9.5 11.6 6 16 6s8 3.5 8 7.8-3.6 7.9-8 7.9z" />
          <path d="M20.7 17.6c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.3-1.6-1.4-1.9-.1-.3 0-.4.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.2.1-.3.2-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.4s1 2.7 1.1 2.9c.1.2 2 3.2 4.9 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.3-.3-.4-.6-.5z" />
        </svg>
      </Link>

      <style>{`
        @keyframes wa-ping {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
