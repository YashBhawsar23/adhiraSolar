import Link from "next/link";
import { Container } from "@/components/Container";
import { navLinks } from "@/lib/site";

const socials = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ocean-900">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-white">
              Adhira <span className="text-solar-400">Solar</span>
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Clean, reliable solar solutions for homes and businesses. From
              design to installation and ongoing maintenance—we’ve got you
              covered.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:justify-self-center">
            <div>
              <p className="text-sm font-semibold text-white">Menu</p>
              <ul className="mt-3 space-y-2 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      className="text-white/70 hover:text-white"
                      href={l.href}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Social</p>
              <ul className="mt-3 space-y-2 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      className="text-white/70 hover:text-white"
                      href={s.href}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:justify-self-end">
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="mt-3 space-y-2 text-sm text-white/70">
              <p>Phone: +91 95222 44453</p>
              <p>Email: hello@adhirasolarpower.com</p>
              <p>Address: 14 Krishnoday Nagar, Khandwa Naka, Indore, Madhya Pradesh</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© 2026 Adhira Solar. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

