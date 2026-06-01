import { motion } from "motion/react";
import { ChevronDown, Calendar, ShieldCheck, MapPin, ArrowRight, Phone } from "lucide-react";

interface HeroProps {
  onOpenBooking: (flatType?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const handleExplore = () => {
    const el = document.getElementById("featured-project");
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-forest"
    >
      {/* Background Image - Full bleed with referrerPolicy */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co.com/tpsMPdhF/image.png"
          alt="Premium Architecture in Dhaka"
          className="h-full w-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Deep Forest Overlay Gradient - left 65% fading to 40% on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/85 to-forest/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-forest/90" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex items-center max-w-7xl w-full mx-auto px-6 md:px-8 pt-32 pb-20 md:pb-36">
        <div className="w-full lg:w-[58%] text-left">
          {/* Accent Gold Rule */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6 }}
            className="h-[2px] w-12 bg-gold origin-left mb-6"
          />

          {/* Tagline / Pre-headline */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-cormorant italic text-sm md:text-base text-gold tracking-[0.16em] uppercase block mb-3.5"
          >
            ABASHAN KHATE EK JUGHER PATHCHALA
          </motion.span>

          {/* Main H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-[58px] font-bold text-white leading-[1.12] mb-6 tracking-tight text-balance"
            style={{ fontFamily: "Arial" }}
          >
            Building Dhaka's Most Trusted Addresses for Over a Decade
          </motion.h1>

          {/* Subheadline description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-sans text-base sm:text-lg text-mint/90 leading-relaxed max-w-[520px] mb-10 text-balance"
          >
            Premium residential developments crafted with precision, integrity, and a vision for elevated living across Dhaka.
          </motion.p>

          {/* CTA Buttons stack */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5"
          >
            {/* Primary Pill Button with Shimmer and Gold frame indicator */}
            <button
              onClick={handleExplore}
              id="hero-primary-cta"
              className="relative overflow-hidden group bg-emerald text-white font-sans font-semibold text-[15px] tracking-wide py-4 px-9 rounded-full border-1.5 border-gold/70 hover:border-gold hover:bg-forest transition-all duration-300 shadow-[0_4px_24px_rgba(45,122,69,0.35)] hover:shadow-[0_6px_30px_rgba(45,122,69,0.5)] cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* Refined Shine Sweep Element */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            </button>

            {/* Secondary Frosted Glass Call CTA */}
            <a
              href="tel:01926-869104"
              id="hero-secondary-cta"
              className="bg-white/8 backdrop-blur-[8px] border-1.5 border-white/35 hover:border-white/60 text-white font-sans font-semibold text-[15px] py-4 px-9 rounded-full hover:bg-white/15 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4 shrink-0 text-mint" />
              <span>Call Us Now</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Downward Chevron Scroll Indicator */}
      <div className="absolute bottom-[84px] left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={handleExplore}
          className="text-white hover:text-gold cursor-pointer p-2 flex flex-col items-center"
        >
          <span className="text-[10px] tracking-[0.2em] font-sans text-white/50 uppercase block mb-1">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 opacity-70" />
        </motion.div>
      </div>

      {/* Grounding Trust Bar at the very bottom */}
      <div className="relative z-10 w-full bg-charcoal border-t border-emerald/25 md:h-[76px] flex items-center">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-8 py-4 md:py-0">
          {/* Desktop & Tablet grid layout */}
          <div className="hidden md:grid grid-cols-3 gap-4 md:divide-x md:divide-emerald/40 text-left">
            {/* Stat 1 */}
            <div className="flex md:items-center justify-center md:justify-start gap-3.5">
              <div className="rounded-full h-10 w-10 flex items-center justify-center bg-forest text-gold border border-emerald/30 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-sm md:text-base text-white font-sans">
                  12+ Years Experience
                </div>
                <div className="text-xs text-sage mt-0.5 font-sans">
                  Proven pathchala since 2012
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex md:items-center justify-center md:justify-start gap-3.5 md:pl-8">
              <div className="rounded-full h-10 w-10 flex items-center justify-center bg-forest text-gold border border-emerald/30 shrink-0">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-sm md:text-base text-white font-sans">
                  Multiple Projects Delivered
                </div>
                <div className="text-xs text-sage mt-0.5 font-sans">
                  On-time handover guarantee
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex md:items-center justify-center md:justify-start gap-3.5 md:pl-8">
              <div className="rounded-full h-10 w-10 flex items-center justify-center bg-forest text-gold border border-emerald/30 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-sm md:text-base text-white font-sans">
                  Dhaka's Trusted Developer
                </div>
                <div className="text-xs text-sage mt-0.5 font-sans">
                  Mohammadpur, Chand Udyan & beyond
                </div>
              </div>
            </div>
          </div>

          {/* Mobile ONLY: High density, compact horizontal container preventing unnecessary vertical stack height */}
          <div className="flex md:hidden items-center justify-between gap-1.5 py-0.5">
            <div className="flex items-center gap-1 shrink-0">
              <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
              <span className="text-[11px] font-semibold text-white/90 font-sans">12+ Yrs Exp</span>
            </div>
            <div className="w-[1px] h-3 bg-white/20 shrink-0" />
            <div className="flex items-center gap-1 shrink-0">
              <Calendar className="h-4 w-4 text-gold shrink-0" />
              <span className="text-[11px] font-semibold text-white/90 font-sans">On-Time Handover</span>
            </div>
            <div className="w-[1px] h-3 bg-white/20 shrink-0" />
            <div className="flex items-center gap-1 shrink-0">
              <MapPin className="h-4 w-4 text-gold shrink-0" />
              <span className="text-[11px] font-semibold text-white/90 font-sans">RAJUK Safe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
