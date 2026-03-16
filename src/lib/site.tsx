import type { ReactNode } from "react";
import { Bolt, Chat, Leaf, Shield, Wrench } from "@/components/Icons";

export const siteName = "Adhira Solar";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services: Array<{
  title: string;
  description: string;
  icon: ReactNode;
}> = [
  {
    title: "Rooftop Installation",
    description:
      "Custom rooftop system design, permits, and a clean install—optimized for maximum generation.",
    icon: <Bolt className="h-6 w-6" />,
  },
  {
    title: "Battery Storage",
    description:
      "Add battery backup for resilience, peak shaving, and smarter energy usage.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Maintenance & Repair",
    description:
      "Proactive maintenance, troubleshooting, and repairs to keep your system performing year-round.",
    icon: <Wrench className="h-6 w-6" />,
  },
  {
    title: "Subsidy Assistance",
    description:
      "Guidance on rebates, incentives, and documentation—so you can maximize savings.",
    icon: <Chat className="h-6 w-6" />,
  },
  {
    title: "Net Metering Setup",
    description:
      "End-to-end setup support for net metering so you can earn credits for surplus generation.",
    icon: <Leaf className="h-6 w-6" />,
  },
  {
    title: "Commercial and Industrial Installation",
    description:
      "Scalable C&I solar solutions designed for energy offset, stability, and operational savings.",
    icon: <Bolt className="h-6 w-6" />,
  },
  {
    title: "Captive and Group Captive Solutions",
    description:
      "Structured solar models for organizations and groups looking for shared benefits and optimized costs.",
    icon: <Shield className="h-6 w-6" />,
  },
];

export const benefits: Array<{
  title: string;
  description: string;
  icon: ReactNode;
}> = [
  {
    title: "Save Money",
    description:
      "Lower your monthly bills and lock in predictable energy costs over time.",
    icon: <Bolt className="h-6 w-6" />,
  },
  {
    title: "Eco Friendly",
    description:
      "Reduce carbon emissions and power your life with clean, renewable solar energy.",
    icon: <Leaf className="h-6 w-6" />,
  },
  {
    title: "Reliable Energy",
    description:
      "High-quality components and performance monitoring for dependable power.",
    icon: <Shield className="h-6 w-6" />,
  },
];

export const testimonials = [
  {
    quote:
      "Adhira Solar installed a 5 kW system in just a few days. Our monthly bill dropped from ₹6,800 to under ₹700, and they handled all the subsidy paperwork.",
    name: "Rajesh Sharma",
    role: "Bhopal, MP",
  },
  {
    quote:
      "Excellent service from start to finish. The monitoring app is fantastic—I can see exactly how much power we’re generating and saving every single day.",
    name: "Priya Verma",
    role: "Indore, MP",
  },
  {
    quote:
      "We went solar 3 years ago with Adhira Solar and haven’t looked back. The system has already paid for itself and our electricity bill is essentially zero.",
    name: "Anil Kumar",
    role: "Jabalpur, MP",
  },
];

export const projects = [
  {
    title: "Rooftop Residential System",
    location: "Green City",
    imageSrc: "/projects/roof-home.svg",
    stats: "6.2 kW • 18 panels • Estimated savings: 35%",
  },
  {
    title: "Commercial Solar Array",
    location: "Downtown District",
    imageSrc: "/projects/commercial-array.svg",
    stats: "48 kW • 120 panels • Offset: 60% usage",
  },
  {
    title: "Community Solar Install",
    location: "Sunnyvale",
    imageSrc: "/projects/community-solar.svg",
    stats: "90 kW • Shared credits • 150+ households",
  },
];

