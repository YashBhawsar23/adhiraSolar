export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  author: string;
  content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "pm-surya-ghar-yojana-2025-complete-guide",
    title: "PM Surya Ghar Muft Bijli Yojana — Complete Guide to Solar Subsidies in India",
    excerpt:
      "Everything you need to know about the government's flagship solar subsidy scheme — eligibility, subsidy amounts, application process, and how to claim up to ₹78,000.",
    date: "2026-03-05",
    readTime: "8 min read",
    category: "Subsidies",
    categoryColor: "#FBBF24",
    author: "Adhira Solar Team",
    content: [
      {
        type: "paragraph",
        text: "The PM Surya Ghar Muft Bijli Yojana is India's most ambitious residential solar programme, aiming to install rooftop solar on 1 crore households by 2027. If you've been considering going solar, this scheme can slash your upfront cost by up to ₹78,000. Here's everything you need to know.",
      },
      { type: "heading", text: "What Is PM Surya Ghar Yojana?" },
      {
        type: "paragraph",
        text: "Launched by the Ministry of New and Renewable Energy (MNRE), the scheme provides direct financial subsidies to residential consumers who install rooftop solar systems. The subsidy is credited directly to your bank account after installation and inspection.",
      },
      { type: "heading", text: "Subsidy Amounts" },
      {
        type: "list",
        items: [
          "1 kW system — ₹30,000 subsidy",
          "2 kW system — ₹60,000 subsidy (₹30,000/kW)",
          "3 kW and above — ₹78,000 maximum subsidy",
        ],
      },
      {
        type: "callout",
        text: "The subsidy applies only to residential grid-connected rooftop solar systems. Off-grid and commercial installations are not eligible under this scheme.",
      },
      { type: "heading", text: "Who Is Eligible?" },
      {
        type: "list",
        items: [
          "Any Indian residential electricity consumer with a valid electricity connection",
          "The rooftop must be owned by the applicant (not rented, unless landlord consents)",
          "Only one subsidy per household / electricity connection",
          "The system must be installed by an MNRE-empanelled vendor",
        ],
      },
      { type: "heading", text: "How to Apply — Step by Step" },
      {
        type: "list",
        items: [
          "Step 1: Register on the National Portal (pmsuryaghar.gov.in) using your electricity consumer number",
          "Step 2: Get a feasibility approval from your local DISCOM",
          "Step 3: Choose an empanelled installer (like Adhira Solar) and get the system installed",
          "Step 4: After installation, the DISCOM inspects and commissions the system",
          "Step 5: Submit the commissioning report on the portal",
          "Step 6: Subsidy is credited to your bank account within 30–60 days",
        ],
      },
      { type: "heading", text: "Common Mistakes to Avoid" },
      {
        type: "paragraph",
        text: "Many applicants face delays because of incorrect documentation or choosing non-empanelled vendors. Always verify that your installer is listed on the MNRE portal. At Adhira Solar, we handle the entire paperwork process — from application to subsidy disbursement — so you can focus on enjoying free electricity.",
      },
      { type: "heading", text: "How Adhira Solar Helps" },
      {
        type: "paragraph",
        text: "We are an MNRE-empanelled installer with 5,000+ installations across Madhya Pradesh. Our subsidy assistance service includes eligibility verification, complete documentation, DISCOM coordination, and follow-up until the subsidy lands in your account. Most of our customers receive their subsidy within 45 days of commissioning.",
      },
    ],
  },
  {
    slug: "how-to-choose-right-solar-system-size-home",
    title: "How to Choose the Right Solar System Size for Your Home",
    excerpt:
      "A practical guide to calculating the ideal solar panel capacity based on your monthly electricity bill, roof space, and energy goals.",
    date: "2026-02-20",
    readTime: "6 min read",
    category: "Guide",
    categoryColor: "#34D399",
    author: "Adhira Solar Team",
    content: [
      {
        type: "paragraph",
        text: "Choosing the right solar system size is the single most important decision in your solar journey. Too small, and you won't offset enough of your bill. Too large, and you're paying for capacity you don't need. Here's how to get it right.",
      },
      { type: "heading", text: "The Simple Rule of Thumb" },
      {
        type: "paragraph",
        text: "For most Indian households, 1 kW of solar capacity offsets roughly ₹1,000 of monthly electricity bill. So if your average monthly bill is ₹3,000, a 3 kW system is a good starting point. This assumes average sunlight conditions (4–5 peak sun hours per day) which applies to most of central and western India.",
      },
      { type: "heading", text: "Factors That Affect System Size" },
      {
        type: "list",
        items: [
          "Monthly electricity consumption (check your last 6 bills for average units)",
          "Available shadow-free roof area (roughly 100 sq ft per kW)",
          "Roof orientation — south-facing roofs generate 10–15% more in India",
          "Future electricity needs — EV charging, new appliances, home expansion",
          "Net metering availability — export surplus and earn credits",
        ],
      },
      { type: "heading", text: "Quick Sizing Table" },
      {
        type: "list",
        items: [
          "Monthly bill ₹1,000–₹2,000 → 1–2 kW system",
          "Monthly bill ₹2,000–₹4,000 → 2–4 kW system",
          "Monthly bill ₹4,000–₹7,000 → 4–7 kW system",
          "Monthly bill ₹7,000–₹10,000 → 7–10 kW system",
          "Monthly bill ₹10,000+ → 10 kW+ (requires detailed load analysis)",
        ],
      },
      {
        type: "callout",
        text: "Pro tip: It's better to slightly oversize your system if you plan to add appliances, an EV charger, or an air conditioner in the next 2–3 years. The marginal cost of adding an extra kW during installation is much lower than retrofitting later.",
      },
      { type: "heading", text: "Roof Space Requirements" },
      {
        type: "paragraph",
        text: "A typical 1 kW solar system needs about 100 square feet of shadow-free roof area. Modern high-efficiency panels (like 540W bifacial modules) need less space per kW compared to older 330W panels. During a site survey, our engineers measure exact dimensions, check for shading from water tanks, satellite dishes, and adjacent buildings, and design the optimal layout.",
      },
      { type: "heading", text: "What Adhira Solar Recommends" },
      {
        type: "paragraph",
        text: "Rather than guessing, use our free Solar Cost Calculator on the website or book a free site survey. Our engineers will analyze your actual consumption patterns, roof structure, and local solar irradiance data to recommend the perfect system size — with a detailed savings projection over 25 years.",
      },
    ],
  },
  {
    slug: "net-metering-india-explained",
    title: "Net Metering in India — How It Works and Why It Matters",
    excerpt:
      "Understand how net metering lets you sell surplus solar electricity back to the grid, offset your bills, and potentially earn from your rooftop.",
    date: "2026-02-10",
    readTime: "7 min read",
    category: "Technology",
    categoryColor: "#818CF8",
    author: "Adhira Solar Team",
    content: [
      {
        type: "paragraph",
        text: "Net metering is the mechanism that makes rooftop solar truly economical. It lets you export surplus electricity to the grid during the day and draw from the grid at night — paying only for the 'net' difference. For many homeowners, this brings the electricity bill down to nearly zero.",
      },
      { type: "heading", text: "How Net Metering Works" },
      {
        type: "paragraph",
        text: "When your solar panels produce more electricity than your home is consuming (typically during peak sunlight hours), the excess energy flows back to the grid through a bi-directional meter. Your DISCOM credits you for these exported units. At the end of the billing cycle, you only pay for the net consumption — total units consumed minus total units exported.",
      },
      { type: "heading", text: "Net Metering vs. Gross Metering" },
      {
        type: "list",
        items: [
          "Net metering — You consume solar power first; only surplus is exported. You pay for the net difference. Best for high self-consumption homes.",
          "Gross metering — All solar generation is exported to the grid and you buy all your electricity from the grid separately. Feed-in tariff rates vary by state.",
          "Net billing — Similar to net metering but exported units are credited at a different (usually lower) rate than consumption. Some states are transitioning to this model.",
        ],
      },
      { type: "heading", text: "State-Wise Regulations" },
      {
        type: "paragraph",
        text: "Net metering policies vary by state. Madhya Pradesh allows net metering for systems up to the sanctioned load of the consumer, with annual settlement. Most states allow systems up to 10 kW for residential consumers without additional approvals. For larger systems, open access regulations may apply.",
      },
      {
        type: "callout",
        text: "In Madhya Pradesh, net metering settlement happens annually. Surplus units at the end of the year are typically compensated at the Average Power Purchase Cost (APPC) rate, which is lower than the retail tariff. Sizing your system to match annual consumption (not exceed it) maximizes value.",
      },
      { type: "heading", text: "Application Process" },
      {
        type: "list",
        items: [
          "Apply to your DISCOM for a net metering connection (we handle this)",
          "DISCOM conducts a feasibility study",
          "System is installed and a bi-directional meter is commissioned",
          "DISCOM inspects the installation",
          "Net metering agreement is signed and metering begins",
        ],
      },
      { type: "heading", text: "Maximize Your Net Metering Benefits" },
      {
        type: "paragraph",
        text: "To get the most out of net metering, shift heavy loads (washing machine, water heater, EV charging) to daytime hours when your panels are generating. This increases self-consumption and reduces the amount exported at lower credit rates. A smart energy monitor can help you track and optimize consumption patterns in real time.",
      },
    ],
  },
  {
    slug: "solar-panel-maintenance-tips-india",
    title: "Solar Panel Maintenance — 7 Tips to Keep Your System at Peak Performance",
    excerpt:
      "Solar panels are low-maintenance, but not zero-maintenance. Learn the essential care tips that protect your investment and keep generation high.",
    date: "2026-01-28",
    readTime: "5 min read",
    category: "Maintenance",
    categoryColor: "#F97316",
    author: "Adhira Solar Team",
    content: [
      {
        type: "paragraph",
        text: "One of the biggest advantages of solar energy is its low operating cost. There are no moving parts, no fuel, and very little that can go wrong. But 'low maintenance' doesn't mean 'no maintenance'. Neglected panels can lose 15–25% of their output over time. Here are seven tips to keep your system performing at its best.",
      },
      { type: "heading", text: "1. Clean Your Panels Regularly" },
      {
        type: "paragraph",
        text: "Dust, bird droppings, pollen, and pollution film reduce the amount of sunlight reaching the cells. In dusty regions of India, panels should be cleaned at least once a month during dry seasons. Use plain water and a soft cloth or sponge — avoid abrasive materials, high-pressure washers, or chemical cleaners that can damage the anti-reflective coating.",
      },
      { type: "heading", text: "2. Inspect for Physical Damage" },
      {
        type: "paragraph",
        text: "After storms, heavy rain, or hail, visually inspect your panels for cracks, chips, or discoloration. Even small micro-cracks can reduce output and worsen over time. If you spot damage, contact your installer for a professional assessment.",
      },
      { type: "heading", text: "3. Check for Shading Changes" },
      {
        type: "paragraph",
        text: "Trees grow. New buildings come up. Satellite dishes get installed. Periodically check that no new shadows are falling on your panels, especially during peak generation hours (10 AM – 3 PM). Even partial shading on one panel can reduce the output of an entire string.",
      },
      { type: "heading", text: "4. Monitor Your Inverter" },
      {
        type: "paragraph",
        text: "The inverter is the brain of your solar system. Most modern inverters have indicator lights or app-based monitoring. A flashing red light or error code usually indicates a fault. Don't ignore it — inverter issues can mean your entire system stops generating. Check the inverter display at least once a week.",
      },
      { type: "heading", text: "5. Keep the Area Around Panels Clear" },
      {
        type: "paragraph",
        text: "Ensure there's no debris, leaves, or nesting birds around the panels and mounting structure. Bird nests under panels are common and can cause hot spots. Consider installing bird mesh guards during installation itself — it's a small investment that prevents bigger headaches.",
      },
      { type: "heading", text: "6. Review Your Generation Data" },
      {
        type: "paragraph",
        text: "If your system has a monitoring app (and it should), review the daily and monthly generation data. A sudden drop in output that isn't explained by weather is a red flag. Compare generation against the expected yield for your system size and location. Our monitoring service alerts you automatically if output drops below expected levels.",
      },
      { type: "heading", text: "7. Schedule an Annual Professional Checkup" },
      {
        type: "callout",
        text: "Just like your car needs a service, your solar system benefits from an annual professional inspection. This includes panel cleaning, wiring checks, inverter diagnostics, mounting structure inspection, and performance testing. Adhira Solar offers Annual Maintenance Contracts (AMCs) starting at ₹2,500/year.",
      },
    ],
  },
  {
    slug: "benefits-of-battery-storage-solar-system",
    title: "Why Battery Storage Is the Future of Home Solar in India",
    excerpt:
      "Power cuts, time-of-use tariffs, and rising grid costs make battery storage an increasingly smart addition to rooftop solar. Here's why.",
    date: "2026-01-15",
    readTime: "6 min read",
    category: "Technology",
    categoryColor: "#818CF8",
    author: "Adhira Solar Team",
    content: [
      {
        type: "paragraph",
        text: "Solar panels generate electricity only during daylight hours. But your home consumes power round the clock — lights in the evening, the refrigerator at night, the geyser in the early morning. Battery storage bridges this gap, storing surplus daytime solar energy for use after sunset. And in India, where power cuts are still a reality in many areas, it offers something even more valuable: energy independence.",
      },
      { type: "heading", text: "How Solar Batteries Work" },
      {
        type: "paragraph",
        text: "A solar battery (typically lithium iron phosphate or LFP) sits between your solar panels and the grid. During the day, excess solar energy charges the battery instead of being exported. In the evening or during a power cut, the battery discharges to power your home. Modern hybrid inverters manage this automatically with switchover times under 20 milliseconds — you won't even notice.",
      },
      { type: "heading", text: "Key Benefits" },
      {
        type: "list",
        items: [
          "Power backup during grid outages — no more inverter-UPS hassle",
          "Higher self-consumption of solar energy — use more of what you generate",
          "Protection against future tariff hikes — store cheap solar, avoid expensive peak grid power",
          "Reduced dependence on net metering — important as some states reduce export credit rates",
          "Silent, clean operation — unlike diesel generators",
        ],
      },
      { type: "heading", text: "Battery Sizing for Indian Homes" },
      {
        type: "paragraph",
        text: "For a typical 3 kW solar system powering a medium-sized home, a 5 kWh battery covers essential loads (lights, fans, Wi-Fi, refrigerator, phone charging) for 4–6 hours. For full-home backup including AC and water heater, you'd need 10–15 kWh. The right size depends on your load profile, power cut frequency, and budget.",
      },
      {
        type: "callout",
        text: "Battery prices have dropped over 70% in the last decade and continue to fall. A 5 kWh LFP battery that cost ₹3.5 lakh in 2020 now costs under ₹1.5 lakh. With a lifespan of 10+ years and 6,000+ charge cycles, the economics are compelling.",
      },
      { type: "heading", text: "Is Battery Storage Right for You?" },
      {
        type: "list",
        items: [
          "You experience frequent power cuts (more than 2–3 times per week)",
          "Your area has time-of-use tariffs with expensive evening rates",
          "You want complete energy independence from the grid",
          "Your state is transitioning from net metering to net billing at lower rates",
          "You're installing a new solar system and want future-proofing",
        ],
      },
      {
        type: "paragraph",
        text: "At Adhira Solar, we design hybrid solar + battery systems tailored to your specific needs. Our engineers analyze your load profile, power cut patterns, and budget to recommend the optimal battery capacity. All our battery systems come with a 10-year warranty and remote monitoring.",
      },
    ],
  },
  {
    slug: "commercial-solar-roi-india-business-case",
    title: "The Business Case for Commercial Solar — ROI, Savings, and Tax Benefits",
    excerpt:
      "How Indian businesses are cutting energy costs by 40–70% with rooftop and captive solar installations, plus accelerated depreciation benefits.",
    date: "2026-01-05",
    readTime: "7 min read",
    category: "Commercial",
    categoryColor: "#F97316",
    author: "Adhira Solar Team",
    content: [
      {
        type: "paragraph",
        text: "For Indian businesses, electricity is often the second or third largest operating expense after raw materials and labor. Commercial and industrial (C&I) tariffs range from ₹8 to ₹14 per unit depending on the state and voltage level. Solar energy, on the other hand, costs ₹3–5 per unit over a system's lifetime. The math is simple — and the payback is fast.",
      },
      { type: "heading", text: "Typical ROI for Commercial Solar" },
      {
        type: "paragraph",
        text: "A well-designed commercial rooftop solar system in central India typically pays for itself in 3–4 years. After that, the electricity is essentially free for the remaining 21–22 years of the system's life. For a 100 kW system costing approximately ₹45–50 lakh, annual savings of ₹12–15 lakh are common, translating to a lifetime saving of ₹2.5–3 crore.",
      },
      { type: "heading", text: "Accelerated Depreciation Benefit" },
      {
        type: "paragraph",
        text: "Under Section 32 of the Income Tax Act, businesses can claim 40% accelerated depreciation on solar assets in the first year of installation. For a ₹50 lakh system, this means a tax saving of approximately ₹7–10 lakh (depending on your tax bracket) in the first year alone — dramatically improving the effective ROI.",
      },
      {
        type: "callout",
        text: "Combined with accelerated depreciation, many commercial installations achieve an effective payback period of just 2–2.5 years. Beyond that, every unit of solar electricity is pure savings.",
      },
      { type: "heading", text: "Captive and Group Captive Models" },
      {
        type: "paragraph",
        text: "For businesses with limited rooftop space or very high energy demands (1 MW+), captive solar plants offer an alternative. You set up a solar plant at a separate location and wheel the power to your facility through the grid. Group captive structures allow multiple entities to share a single large plant, splitting the costs and benefits proportionally.",
      },
      { type: "heading", text: "Key Financial Metrics" },
      {
        type: "list",
        items: [
          "Levelized Cost of Energy (LCOE): ₹3–5 per unit over 25 years",
          "Payback period: 3–4 years (2–2.5 years with depreciation)",
          "Internal Rate of Return (IRR): 25–35% depending on tariff and location",
          "System life: 25+ years with 30-year panel warranty",
          "Annual degradation: Less than 0.5% per year with Tier-1 panels",
        ],
      },
      { type: "heading", text: "ESG and Compliance Benefits" },
      {
        type: "paragraph",
        text: "Beyond direct savings, commercial solar installations contribute to ESG (Environmental, Social, and Governance) compliance. With SEBI mandating BRSR (Business Responsibility and Sustainability Reporting) for the top 1,000 listed companies, and growing supply chain pressure from global buyers for carbon footprint reduction, solar adoption is becoming a business imperative, not just a nice-to-have.",
      },
      {
        type: "paragraph",
        text: "Adhira Solar specializes in commercial and industrial solar projects from 50 kW to 10 MW+. Our team handles everything from the initial energy audit and financial modelling to EPC execution, DISCOM approvals, and long-term O&M. Contact us for a free energy assessment and customized ROI projection for your business.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
