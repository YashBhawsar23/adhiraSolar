"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

function clampNumber(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

export function SolarCostCalculator({ className }: { className?: string }) {
  const [bill, setBill] = useState<string>("3000");

  const { monthlyBill, recommendedKw, subsidy, installCost, netCost } =
    useMemo(() => {
      const numeric = Number(String(bill).replace(/[^\d.]/g, ""));
      const monthlyBill = Number.isFinite(numeric) ? clampNumber(numeric, 0, 1e7) : 0;

      // Assume 1 kW per ₹1000 monthly bill. Round up to ensure coverage.
      const recommendedKwRaw = monthlyBill / 1000;
      const recommendedKw = recommendedKwRaw <= 0 ? 0 : Math.max(1, Math.ceil(recommendedKwRaw));

      const subsidy =
        recommendedKw >= 3 ? 78000 : recommendedKw === 2 ? 60000 : recommendedKw === 1 ? 30000 : 0;

      const installCost = recommendedKw * 55000;
      const netCost = Math.max(0, installCost - subsidy);

      return { monthlyBill, recommendedKw, subsidy, installCost, netCost };
    }, [bill]);

  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-ocean-800/70 p-6 shadow-sm sm:p-8",
        className
      )}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-solar-400">
            Calculator
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Solar Cost Calculator
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Enter your monthly electricity bill to estimate the recommended solar system size,
            subsidy, and installation cost.
          </p>

          <label className="mt-6 block text-xs font-semibold tracking-wide text-white/70">
            Monthly electricity bill (INR)
          </label>
          <div className="mt-2 flex items-center gap-3">
            <div className="relative w-full max-w-sm">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/50">
                ₹
              </span>
              <input
                inputMode="numeric"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="e.g., 3000"
                className="w-full rounded-2xl border border-white/10 bg-ocean-900/60 py-3 pr-4 pl-9 text-sm text-white shadow-sm outline-none transition placeholder:text-white/35 focus:border-solar-400/70 focus:ring-4 focus:ring-solar-400/15"
              />
            </div>
            <button
              type="button"
              onClick={() => setBill("3000")}
              className="hidden rounded-full bg-white/0 px-4 py-2 text-sm font-semibold text-white/70 ring-1 ring-white/15 transition hover:bg-white/5 hover:text-white sm:inline-flex"
            >
              Reset
            </button>
          </div>

          <p className="mt-3 text-xs text-white/50">
            Assumption: <span className="text-white/70">1 kW per ₹1000</span> monthly bill. Cost:
            <span className="text-white/70"> ₹55,000 per kW</span>.
          </p>
        </div>

        <div className="w-full lg:max-w-md">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Stat
              label="Monthly bill"
              value={monthlyBill > 0 ? formatINR(monthlyBill) : "—"}
            />
            <Stat
              label="Recommended system size"
              value={recommendedKw > 0 ? `${recommendedKw} kW` : "—"}
              highlight
            />
            <Stat
              label="Estimated installation cost"
              value={recommendedKw > 0 ? formatINR(installCost) : "—"}
            />
            <Stat
              label="Estimated subsidy"
              value={recommendedKw > 0 ? formatINR(subsidy) : "—"}
            />
            <Stat
              label="Estimated net cost (after subsidy)"
              value={recommendedKw > 0 ? formatINR(netCost) : "—"}
              highlight
            />
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-ocean-900/50 p-4 text-xs leading-5 text-white/60">
            <p className="font-semibold text-white/75">Subsidy tiers</p>
            <ul className="mt-2 space-y-1">
              <li>1 kW: ₹30,000</li>
              <li>2 kW: ₹60,000</li>
              <li>3 kW or above: ₹78,000 (maximum)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-ocean-900/45 p-4",
        highlight ? "ring-1 ring-solar-500/25" : ""
      )}
    >
      <p className="text-xs font-semibold tracking-wide text-white/60">{label}</p>
      <p
        className={cn(
          "mt-2 text-lg font-semibold tracking-tight",
          highlight ? "text-solar-400" : "text-white"
        )}
      >
        {value}
      </p>
    </div>
  );
}

