"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { faqs } from "@/lib/faq";
import { Button } from "@/components/Button";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-ocean-900 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-solar-400">
            Common questions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you need to know
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Have a specific question? Connect with our solar specialists for
            personalized guidance on system sizing, subsidies, or installation.
          </p>
          <div className="mt-4">
            <Button href="tel:+915550123456" variant="secondary">
              Call Us Now
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-ocean-900/80 transition-all duration-200"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-white/90 outline-none transition-colors duration-200 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-solar-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-900"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center text-solar-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 8l5 5 5-5" />
                    </svg>
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid border-t border-white/10 transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 pt-2 text-sm leading-relaxed text-white/65">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

