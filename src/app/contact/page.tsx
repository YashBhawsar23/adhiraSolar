import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Adhira Solar for a free solar quote.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Request a free solar quote. Share a few details and our team will get back to you with options and next steps."
      />

      <section className="bg-ocean-900 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="motion-safe:animate-fade-up">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Send us a message
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                We’ll respond within 1–2 business days with a tailored estimate
                and scheduling options.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="motion-safe:animate-fade-up">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Our location
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
              Indore, Madhya Pradesh
              </p>
              <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-ocean-800/60 shadow-sm">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="SunPower Solar location"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.4768817592494!2d75.8752840741832!3d22.673284779420126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5d8d14cf77%3A0xa858bde2df94a66c!2sAdhira%20Solar!5e0!3m2!1sen!2sin!4v1772397295225!5m2!1sen!2sin"
                  />
                </div>
              </div>
              <div className="mt-6 rounded-3xl border border-white/10 bg-ocean-800/70 p-6 shadow-sm">
                <div className="grid gap-3 text-sm text-white/75 sm:grid-cols-2">
                  <p>
                    <span className="font-semibold text-white">Phone:</span>{" "}
                    +91 95222 44453
                  </p>
                  <p>
                    <span className="font-semibold text-white">Email:</span>{" "}
                    hello@sunpowersolar.com
                  </p>
                  <p className="sm:col-span-2">
                    <span className="font-semibold text-white">Hours:</span>{" "}
                    Mon–Sat, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

