import { motion } from "motion/react";

interface EditorialCard {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
}

const EDITORIAL_CARDS: EditorialCard[] = [
  {
    id: "legacy",
    title: "12+ Years of Excellence",
    caption: "A proven track record in Dhaka's competitive real estate market.",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600",
  },
  {
    id: "quality",
    title: "Uncompromising Build Quality",
    caption: "Premium materials, modern architecture, and meticulous attention.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
  },
  {
    id: "trust",
    title: "Client-First Approach",
    caption: "Transparent processes and honest communication at every step.",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
  },
  {
    id: "vision",
    title: "Elevating Dhaka Living",
    caption: "Developing premium addresses defining modern urban living.",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative bg-white py-14 sm:py-20 md:py-28 border-t-3 border-gold overflow-hidden"
    >
      {/* Accent dot matrix in background (top-right) at 4% opacity */}
      <div className="absolute top-0 right-0 h-[400px] w-[450px] opacity-[0.04] pointer-events-none select-none z-0">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#C8E6D0" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Since 2012 Watermark Text - Playfair Display Bold, 180px, Forest Authority at 4% opacity */}
      <div 
        className="absolute bottom-[-10px] right-[-40px] font-serif font-bold text-[140px] md:text-[180px] text-forest/[0.04] select-none pointer-events-none z-0 whitespace-nowrap leading-none tracking-tighter"
      >
        SINCE 2012
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (45% -> lg:col-span-5) */}
          <div className="lg:col-span-12 xl:col-span-5 relative max-w-xl z-10 text-left">
            
            {/* Section Subtitle Label */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-sans font-medium text-xs text-emerald tracking-[0.15em] uppercase block mb-3"
            >
              WHO WE ARE
            </motion.span>

            {/* Headline with Fade Up */}
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl sm:text-[38px] font-semibold text-charcoal leading-[1.25] mb-5"
            >
              A Decade of Trust, Built One Home at a Time
            </motion.h2>

            {/* Redesigned Pullquote with Gold vertical drawing line */}
            <div className="relative flex items-start gap-5 my-6">
              {/* Prestige Gold vertical rule */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="w-[3px] bg-gold shrink-0 self-stretch rounded-full"
              />
              <motion.blockquote
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-cormorant italic text-lg sm:text-[20px] text-emerald leading-relaxed pl-1 py-1"
              >
                "Abashan khate ek jugher pathchala — a journey of trust, beauty, and promise."
              </motion.blockquote>
            </div>

            {/* Body Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-sm sm:text-base text-sage leading-[1.7]"
            >
              Since 2012, Zom Zom Builders has been one of Dhaka's most trusted names in residential real estate development. With over a decade of experience, we've built homes that go beyond four walls — spaces where families grow, memories are made, and futures are secured. Our commitment to quality construction, transparent dealings, and client satisfaction has made us the developer Dhaka relies on.
            </motion.p>
          </div>

          {/* Right Column Grid (55% -> lg:col-span-7) with Image Cards */}
          <div className="lg:col-span-12 xl:col-span-7 w-full z-10 overflow-hidden">
            <div className="flex sm:grid flex-nowrap sm:grid-cols-2 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 gap-5 sm:gap-6 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] -mx-6 px-6 sm:mx-0 sm:px-0">
              {EDITORIAL_CARDS.map((card, idx) => {
                const delays = [0.2, 0.35, 0.5, 0.65];
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: delays[idx] || 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="group bg-white rounded-[12px] overflow-hidden flex flex-col h-[260px] cursor-pointer shadow-sm hover:shadow-[0_12px_40px_rgba(26,61,34,0.12)] transition-all duration-400 snap-center shrink-0 w-[280px] sm:w-auto sm:shrink"
                  >
                    {/* Image Area - 60% height */}
                    <div className="h-[60%] min-h-[156px] overflow-hidden relative">
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-forest/10 group-hover:bg-transparent transition-colors duration-450" />
                    </div>

                    {/* Content Area - 40% height with Left Border Accent */}
                    <div className="h-[40%] bg-white p-4 flex flex-col justify-center border-l-3 border-emerald group-hover:border-leaf transition-colors duration-300">
                      <h4 className="font-sans font-semibold text-[15px] text-charcoal mb-1 tracking-tight">
                        {card.title}
                      </h4>
                      <p className="font-sans text-[12px] sm:text-[13px] text-sage line-clamp-2 leading-relaxed">
                        {card.caption}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
