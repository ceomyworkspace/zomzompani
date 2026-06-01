import { ValueCard, DifferentiatorPillar, Testimonial, FlatType } from "./types";

export const VALUE_CARDS: ValueCard[] = [
  {
    id: "legacy",
    title: "12+ Years of Excellence",
    caption: "A proven track record in Dhaka's competitive real estate market.",
    iconName: "Hourglass",
  },
  {
    id: "quality",
    title: "Uncompromising Build Quality",
    caption: "Premium materials, modern architecture, and meticulous attention to detail.",
    iconName: "Shield",
  },
  {
    id: "trust",
    title: "Client-First Approach",
    caption: "Transparent processes and honest communication at every step.",
    iconName: "Handshake",
  },
  {
    id: "vision",
    title: "Elevating Dhaka Living",
    caption: "Developing premium addresses that define modern urban living in Dhaka.",
    iconName: "Building2",
  },
];

export const DIFFERENTIATOR_PILLARS: DifferentiatorPillar[] = [
  {
    id: "locations",
    title: "Prime Dhaka Locations",
    body: "Strategically developed in Dhaka's most accessible and sought-after neighborhoods.",
    iconName: "MapPin",
  },
  {
    id: "architecture",
    title: "Modern Architectural Design",
    body: "Contemporary layouts and facades designed for both beauty and functionality.",
    iconName: "Compass",
  },
  {
    id: "legal",
    title: "100% Legal & Transparent",
    body: "All projects are legally compliant with full documentation and clear title deeds.",
    iconName: "ShieldCheck",
  },
  {
    id: "delivery",
    title: "On-Time Delivery",
    body: "We honor our commitments — your home is delivered when promised, no delays.",
    iconName: "CheckCircle",
  },
  {
    id: "support",
    title: "Dedicated After-Sales Care",
    body: "Our relationship doesn't end at handover — we're with you every step after.",
    iconName: "HeartHandshake",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rafiqul",
    quote: "Zom Zom Builders gave us more than a flat — they gave us a home we're proud of. The quality, the location, and the professionalism throughout the process was exceptional.",
    author: "Md. Rafiqul Islam",
    title: "Homeowner, Chand Udyan",
    stars: 5,
  },
  {
    id: "fatema",
    quote: "After years of searching, we trusted Zom Zom Builders and it was the best decision. Transparent dealings, on-time delivery, and a beautiful finish. Highly recommended.",
    author: "Fatema Begum",
    title: "Galaxy Tower Resident",
    stars: 5,
  },
  {
    id: "karim",
    quote: "The team's commitment to quality is unmatched in Dhaka. From booking to handover, every step was smooth. We are proud to call this our forever home.",
    author: "Engr. Karim Hossain",
    title: "Property Owner, Mohammadpur",
    stars: 5,
  },
];

export const FLAT_TYPES: FlatType[] = [
  { type: "Type-A", orientation: "South-facing", size: "2,164 sqft" },
  { type: "Type-B", orientation: "South-facing", size: "2,087 sqft" },
  { type: "Type-C", orientation: "North-facing", size: "1,383 sqft" },
  { type: "Type-D", orientation: "North-facing", size: "1,437 sqft" },
];
