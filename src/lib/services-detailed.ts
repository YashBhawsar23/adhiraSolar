export type DetailedService = {
  id: string;
  icon: string;
  tag: string;
  tagColor: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  stat: { value: string; label: string };
};

export type ServiceCategory = {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
  services: DetailedService[];
};

export const detailedCategories: ServiceCategory[] = [
  {
    id: "residential",
    label: "Residential",
    eyebrow: "For Homes",
    description:
      "Complete solar solutions for homeowners—from installation and battery storage to government subsidies and net metering.",
    services: [
      {
        id: "rooftop-installation",
        icon: "🏡",
        tag: "Most Popular",
        tagColor: "#FBBF24",
        title: "Rooftop Installation",
        shortDesc: "End-to-end installation by MNRE-certified engineers.",
        fullDesc:
          "Our rooftop installation service covers everything—an on-site survey to assess your roof structure and sunlight exposure, a custom system design optimised for your energy needs, procurement of Tier-1 solar panels, physical installation, wiring, inverter setup, and final commissioning with grid synchronisation.",
        highlights: [
          "Free site survey & feasibility check",
          "Custom system design (1 kW – 100 kW)",
          "Tier-1 panel brands (Waaree, Adani, Luminous)",
          "Commissioning within 48 hours of installation",
          "5-year workmanship warranty",
        ],
        stat: { value: "2 days", label: "Avg. install time" },
      },
      {
        id: "battery-storage",
        icon: "🔋",
        tag: "24/7 Power",
        tagColor: "#34D399",
        title: "Battery Storage Systems",
        shortDesc: "Lithium-ion storage for uninterrupted power, day or night.",
        fullDesc:
          "Solar panels produce power during daylight—but your home runs around the clock. Our lithium-ion battery storage systems capture surplus daytime energy and release it at night or during grid outages, ensuring you're never without clean power regardless of conditions.",
        highlights: [
          "LFP (Lithium Iron Phosphate) chemistry—safe & long-lasting",
          "Capacities from 5 kWh to 50 kWh",
          "Seamless solar + grid hybrid integration",
          "Auto-switchover during power cuts (<20ms)",
          "10-year battery warranty",
        ],
        stat: { value: "10 yr", label: "Battery warranty" },
      },
      {
        id: "subsidy-assistance",
        icon: "📋",
        tag: "Save up to 40%",
        tagColor: "#FBBF24",
        title: "Subsidy Assistance",
        shortDesc: "We navigate all government paperwork so you don't have to.",
        fullDesc:
          "The PM Surya Ghar Muft Bijli Yojana scheme offers up to ₹78,000 in direct subsidies for residential solar installations. Claiming it involves multiple government portals, technical approvals, and documentation. Our team manages the entire process—eligibility check, application, inspection coordination, and subsidy disbursement follow-up.",
        highlights: [
          "₹30,000/kW subsidy for first 2 kW",
          "₹18,000/kW for additional capacity up to 3 kW",
          "Full documentation & portal submission handled",
          "DISCOM approval & inspection coordination",
          "Typical disbursement in 30–60 days",
        ],
        stat: { value: "₹78k", label: "Max subsidy" },
      },
      {
        id: "net-metering",
        icon: "⚡",
        tag: "Earn Back",
        tagColor: "#34D399",
        title: "Net Metering Setup",
        shortDesc: "Turn your roof into a micro power plant—and get paid for it.",
        fullDesc:
          "With net metering, surplus electricity your panels generate gets exported to the grid and credited to your account at a regulated rate. Over a year, this can offset your entire electricity bill. We manage the end-to-end application with your DISCOM—from bi-directional meter installation to final approval.",
        highlights: [
          "Bi-directional smart meter installation",
          "DISCOM application & follow-up managed",
          "Typical approval in 4–8 weeks",
          "Credit against future electricity bills",
          "Annual net metering statement support",
        ],
        stat: { value: "₹0", label: "Effective bill" },
      },
    ],
  },
  {
    id: "commercial",
    label: "Commercial & Industrial",
    eyebrow: "For Businesses",
    description:
      "Large-scale solar solutions engineered for factories, warehouses, offices, and industrial complexes—maximising ROI and energy security at scale.",
    services: [
      {
        id: "commercial-industrial-installation",
        icon: "🏭",
        tag: "High Capacity",
        tagColor: "#818CF8",
        title: "Commercial & Industrial Installation",
        shortDesc: "High-capacity solar systems for factories, warehouses & offices.",
        fullDesc:
          "We design and deploy large-scale rooftop and ground-mounted solar systems for commercial and industrial clients. Our engineering team handles load analysis, structural assessment, single-line diagram design, EPC execution, and synchronisation with your existing HT/LT infrastructure—all compliant with CEA regulations and DISCOM requirements.",
        highlights: [
          "System sizes from 100 kW to 10 MW+",
          "Rooftop, ground-mounted & carport structures",
          "HT/LT integration & CEA compliance",
          "Dedicated project manager from survey to handover",
          "Accelerated depreciation benefit guidance",
          "Detailed energy yield reports & financial modelling",
        ],
        stat: { value: "10 MW+", label: "Max capacity" },
      },
      {
        id: "captive-group-captive",
        icon: "🔗",
        tag: "Cost Optimisation",
        tagColor: "#F97316",
        title: "Captive & Group Captive Solutions",
        shortDesc:
          "Dedicated solar generation assets to power your operations at the lowest possible cost.",
        fullDesc:
          "A captive solar plant lets your business generate electricity for its own consumption, bypassing distribution charges and open access surcharges. Group captive structures allow multiple entities to collectively own a solar plant and share generation benefits. We handle the full setup—from regulatory approvals and PPA structuring to plant commissioning and SLDC registration.",
        highlights: [
          "Captive & group captive regulatory structuring",
          "Open access approvals & SLDC/RLDC registration",
          "PPA drafting and off-take agreement support",
          "Wheeling, banking & cross-subsidy surcharge optimisation",
          "Multi-site generation and scheduling management",
          "Long-term O&M and performance monitoring",
        ],
        stat: { value: "40%", label: "Avg. cost reduction" },
      },
    ],
  },
  {
    id: "support",
    label: "Support Services",
    eyebrow: "Ongoing Care",
    description:
      "Long after installation, Adhira Solar stays by your side—with maintenance and technical support to keep your system performing at its best.",
    services: [
      {
        id: "maintenance-repair",
        icon: "🔧",
        tag: "AMC Plans",
        tagColor: "#F97316",
        title: "Maintenance & Repair",
        shortDesc: "Keep your system at peak output for decades.",
        fullDesc:
          "Solar panels are low-maintenance, but not zero-maintenance. Dust, bird droppings, and seasonal grime can reduce output by up to 25%. Our annual maintenance contracts include scheduled panel cleaning, inverter health checks, wiring inspections, performance testing, and priority repair response.",
        highlights: [
          "Bi-annual panel cleaning included",
          "Inverter & MPPT health diagnostics",
          "Priority 24-hour response SLA",
          "OTA firmware updates for smart inverters",
          "Free labour on covered repairs",
        ],
        stat: { value: "24 hr", label: "Response SLA" },
      },
    ],
  },
];

