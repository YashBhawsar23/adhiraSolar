"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initial: FormState = { name: "", email: "", phone: "", message: "" };

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function ContactForm() {
  const [state, setState] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!state.name.trim()) e.name = "Please enter your name.";
    if (!isEmail(state.email)) e.email = "Please enter a valid email.";
    if (!state.phone.trim()) e.phone = "Please enter your phone number.";
    if (!state.message.trim()) e.message = "Please enter a message.";
    return e;
  }, [state]);

  const canSubmit = Object.keys(errors).length === 0;

  function onChange<K extends keyof FormState>(key: K, value: string) {
    setStatus("idle");
    setState((s) => ({ ...s, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (!canSubmit) return;
    setStatus("success");
    setState(initial);
    setSubmitted(false);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/10 bg-ocean-800/70 p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          value={state.name}
          onChange={(v) => onChange("name", v)}
          error={submitted ? errors.name : undefined}
          placeholder="Your full name"
        />
        <Field
          label="Email"
          value={state.email}
          onChange={(v) => onChange("email", v)}
          error={submitted ? errors.email : undefined}
          placeholder="you@example.com"
        />
        <Field
          label="Phone"
          value={state.phone}
          onChange={(v) => onChange("phone", v)}
          error={submitted ? errors.phone : undefined}
          placeholder="+91 95222 44453"
        />
        <div className="sm:col-span-2">
          <Label>Message</Label>
          <textarea
            value={state.message}
            onChange={(e) => onChange("message", e.target.value)}
            rows={5}
            placeholder="Tell us about your property and your energy goals…"
            className={cn(
              "mt-2 w-full resize-none rounded-2xl border bg-ocean-900/60 px-4 py-3 text-sm text-white shadow-sm outline-none transition placeholder:text-white/40 focus:border-solar-400/70 focus:ring-4 focus:ring-solar-400/15",
              submitted && errors.message ? "border-red-400/70" : "border-white/10"
            )}
          />
          {submitted && errors.message ? (
            <p className="mt-2 text-xs font-medium text-red-600">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={!canSubmit}
          className={cn(
            "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solar-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            canSubmit
              ? "bg-solar-500 text-ocean-900 hover:bg-solar-400 shadow-sm shadow-solar-500/25"
              : "cursor-not-allowed bg-white/10 text-white/40"
          )}
        >
          Send Message
        </button>

        {status === "success" ? (
          <p className="text-sm font-medium text-eco-500">
            Thanks! We’ll reach out shortly.
          </p>
        ) : (
          <p className="text-xs text-white/50">
            By submitting, you agree to be contacted about your solar quote.
          </p>
        )}
      </div>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-semibold tracking-wide text-white/70">
      {children}
    </label>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "mt-2 w-full rounded-2xl border bg-ocean-900/60 px-4 py-3 text-sm text-white shadow-sm outline-none transition placeholder:text-white/40 focus:border-solar-400/70 focus:ring-4 focus:ring-solar-400/15",
          error ? "border-red-400/70" : "border-white/10"
        )}
      />
      {error ? (
        <p className="mt-2 text-xs font-medium text-red-600">{error}</p>
      ) : null}
    </div>
  );
}

