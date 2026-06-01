import React from "react";
import { motion } from "motion/react";
import { MapPin, Compass, ShieldCheck, CheckCircle, HeartHandshake } from "lucide-react";

interface BentoCard {
  id: string;
  title: string;
  body: string;
  icon: React.ElementType;
}

const BENTO_CARDS: BentoCard[] = [
  {
    id: "locations",
    title: "Prime Dhaka Locations",
    body: "We carefully select site coordinates in sought-after neighborhoods like Mohammadpur and Chand Udyan to ensure elevated accessibility, safety, and rapid land valuation growth.",
    icon: MapPin,
  },
  {
    id: "architecture",
    title: "Modern Architectural Facades",
    body: "Collaborating with Dhaka's finest architects to build spacious, south-facing residential apartments that offer maximum natural airflow, modern layouts, and visual elegance.",
    icon: Compass,
  },
  {
    id: "legal",
    title: "100% Legal Transparency",
    body: "All titles, mutation deeds, and building approvals (Rajuk) are kept structurally clear and verified.",
    icon: ShieldCheck,
  },
  {
    id: "delivery",
    title: "On-Time Handover",
    body: "We respect your time. Backed by solid project management tools, your home is delivered exactly when promised.",
    icon: CheckCircle,
  },
  {
    id: "support",
    title: "Dedicated After-Sales Care",
    body: "Our relationship is a promise. From keys-handover to post-move maintenance, we remain beside your family.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative bg-garden py-14 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Background Microtexture - Soft diagonal lines at 3% opacity */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="diag-stripes" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="40" x2="40" y2="0" stroke="#1A3D22" strokeWidth="2.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diag-stripes)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans font-medium text-xs text-emerald tracking-[0.15em] uppercase block mb-3.5">
            WHY ZOM ZOM BUILDERS
          </span>
          <h2 className="font-serif text-3xl sm:text-[36px] font-semibold text-charcoal leading-[1.2] mb-4">
            Why Dhaka's Families Choose Us
          </h2>
          
          {/* Prestige Gold center underline */}
          <div className="h-[2px] w-10 bg-gold mx-auto mb-5" />

          <p className="font-cormorant italic text-lg sm:text-[19px] text-emerald">
            We don't just build structures — we build trust, comfort, and lasting value.
          </p>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 items-stretch">
          
          {/* Top Two Flagship Cards (lg:col-span-3 each) */}
          {BENTO_CARDS.slice(0, 2).map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="lg:col-span-3 bg-white rounded-2xl p-5 sm:p-8 border border-mint/25 hover:border-emerald shadow-sm hover:shadow-[0_12px_32px_rgba(45,122,69,0.1)] transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Visual Icon Halo container */}
                <div className="rounded-full bg-garden p-4 shrink-0 text-leaf group-hover:scale-110 transition-transform duration-300 border border-mint/40">
                  <Icon className="h-7 w-7 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-[17px] text-charcoal mb-3 tracking-snug">
                    {card.title}
                  </h3>
                  <p className="font-sans text-sm text-sage leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Bottom Three Pillar Cards (lg:col-span-2 each) */}
          {BENTO_CARDS.slice(2).map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.12 }}
                className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-8 border border-mint/20 hover:border-emerald shadow-sm hover:shadow-[0_12px_32px_rgba(45,122,69,0.08)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Visual Icons */}
                  <div className="rounded-xl bg-garden p-3 inline-block shrink-0 text-leaf group-hover:scale-105 transition-transform duration-300 border border-mint/30 mb-6">
                    <Icon className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  
                  <h3 className="font-sans font-semibold text-[16px] text-charcoal mb-2.5 tracking-snug">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-sage leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
