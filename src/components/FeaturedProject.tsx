import { MapPin, Phone } from "lucide-react";
import { FLAT_TYPES } from "../data";

interface FeaturedProjectProps {
  onOpenBooking: (flatType?: string) => void;
}

export default function FeaturedProject({ onOpenBooking }: FeaturedProjectProps) {
  return (
    <section
      id="featured-project"
      className="relative bg-white overflow-hidden min-h-screen flex flex-col justify-stretch"
    >
      {/* Mobile Title & Headline Header - visible only on mobile/tablet up to large screens */}
      <div className="block lg:hidden px-4 pt-8 pb-3 bg-white border-b border-stone-100">
        <span className="font-sans font-semibold text-[10px] text-emerald tracking-[0.15em] uppercase block mb-1.5">
          FEATURED PROJECT
        </span>
        <h2 className="font-serif text-xl font-semibold text-charcoal leading-[1.25] mb-2 max-w-xl">
          Galaxy Tower — Luxury Living in the Heart of Mohammadpur
        </h2>
        <div className="flex items-center gap-1.5 text-sage text-xs">
          <MapPin className="h-3.5 w-3.5 text-leaf shrink-0" />
          <span className="line-clamp-2">Plot-11, Road-08, Chand Udyan, Mohammadpur, Dhaka-1207</span>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch flex-1">
        
        {/* Left Side: Images & Badges with elevated modern frame setup */}
        <div className="lg:col-span-6 bg-stone-50/60 p-4 sm:p-6 md:p-12 lg:p-16 flex items-center justify-center relative min-h-[380px] sm:min-h-[450px] lg:min-h-auto">
          {/* Main Image Container with double borders and deep elegant shadows */}
          <div className="relative w-full h-full min-h-[340px] sm:min-h-[380px] lg:min-h-[500px] rounded-[16px] overflow-hidden bg-white shadow-[0_24px_50px_-12px_rgba(0,0,0,0.18)] border border-stone-200/80 group flex items-stretch">
            <img
              src="https://i.ibb.co.com/Nn3tz33Z/image.png"
              alt="Galaxy Tower Luxury Residential Development in Mohammadpur Dhaka"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Elegant double-border frame effect overlay */}
            <div className="absolute inset-3 sm:inset-4 border border-white/10 pointer-events-none rounded-[12px] z-10" />

            {/* Urgency Badge (Compact and right-aligned on mobile, left-aligned on sm screens and up) */}
            <div className="absolute top-4 right-4 sm:right-auto sm:left-6 sm:top-6 z-20">
              <span className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-full bg-charcoal/95 backdrop-blur-md text-gold font-sans font-semibold text-[9px] sm:text-[11px] tracking-wider uppercase shadow-lg border border-gold/30">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 inline-block animate-ping shrink-0" />
                🔴 ONLY 4 UNITS LEFT
              </span>
            </div>

            {/* Translucent Banner at Bottom within Container */}
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-forest/90 backdrop-blur-md z-10 flex flex-col justify-center px-4 sm:px-6 border-t border-white/10">
              <span className="text-[8px] sm:text-[10px] text-gold font-sans tracking-[0.2em] font-semibold uppercase mb-0.5 sm:mb-1">
                PREMIUM ARCHITECTURE
              </span>
              <h3 className="font-serif font-semibold text-sm sm:text-lg md:text-xl text-white tracking-wide uppercase truncate">
                COCONUT GROVES • GALAXY TOWER
              </h3>
            </div>
          </div>
        </div>

        {/* Right Side: Building Specifications (50% -> lg:col-span-6) */}
        <div className="lg:col-span-6 bg-white flex items-center">
          <div className="w-full lg:border-l-3 lg:border-gold py-8 sm:py-16 md:py-20 px-4 sm:px-10 lg:px-16 flex flex-col justify-center h-full">
            
            {/* Project subtitle/label - hidden on mobile, shown on desktop */}
            <span className="hidden lg:block font-sans font-semibold text-[10px] sm:text-xs text-emerald tracking-[0.15em] uppercase block mb-2 sm:mb-3">
              FEATURED PROJECT
            </span>

            {/* Headline - hidden on mobile, shown on desktop */}
            <h2 className="hidden lg:block font-serif text-xl sm:text-2xl md:text-[34px] font-semibold text-charcoal leading-[1.25] mb-2 sm:mb-3 max-w-xl">
              Galaxy Tower — Luxury Living in the Heart of Mohammadpur
            </h2>

            {/* Location Line - hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex items-center gap-1.5 text-sage text-xs sm:text-sm mb-5 sm:mb-8">
              <MapPin className="h-3.5 w-3.5 text-leaf shrink-0" />
              <span className="line-clamp-2 md:line-clamp-none">Plot-11, Road-08, Chand Udyan, Mohammadpur, Dhaka-1207</span>
            </div>

            {/* Specs Grid: 2x2 with leaf accent values and Sage Gray labels */}
            <div className="grid grid-cols-2 gap-4 pb-4 sm:gap-6 sm:pb-6 border-b border-stone-200 mb-4 sm:mb-6">
              <div>
                <div className="font-sans font-bold text-base sm:text-[20px] text-emerald leading-tight">
                  6,010 sqft
                </div>
                <div className="font-sans text-[10px] sm:text-xs text-sage mt-0.5">
                  Total Coverage Area
                </div>
              </div>

              <div>
                <div className="font-sans font-bold text-base sm:text-[20px] text-emerald leading-tight">
                  10 Katha
                </div>
                <div className="font-sans text-[10px] sm:text-xs text-sage mt-0.5">
                  Total Land Area
                </div>
              </div>

              <div>
                <div className="font-sans font-bold text-base sm:text-[20px] text-emerald leading-tight">
                  South & North
                </div>
                <div className="font-sans text-[10px] sm:text-xs text-sage mt-0.5">
                  Flat Orientation
                </div>
              </div>

              <div>
                <div className="font-sans font-bold text-base sm:text-[20px] text-emerald leading-tight">
                  4 Distinct Types
                </div>
                <div className="font-sans text-[10px] sm:text-xs text-sage mt-0.5">
                  Available Configurations
                </div>
              </div>
            </div>

            {/* Flat Configurations Section */}
            <div className="mb-4 sm:mb-6">
              <h4 className="text-[10px] sm:text-xs font-bold text-charcoal tracking-wide uppercase mb-2.5 sm:mb-3">
                Flat Configurations & Layout Sizes
              </h4>
              
              {/* Desktop Table View */}
              <div className="hidden sm:block overflow-x-auto rounded-lg border border-stone-200 bg-white">
                <table className="w-full text-left text-xs sm:text-sm font-sans">
                  <thead>
                    <tr className="bg-stone text-charcoal font-semibold border-b border-stone-200">
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4">Orientation</th>
                      <th className="py-3 px-4 text-right">Size</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200/60">
                    {FLAT_TYPES.map((flat, index) => (
                      <tr
                        key={flat.type}
                        className={index % 2 === 1 ? "bg-stone/55" : "bg-white"}
                      >
                        <td className="py-3 px-4 font-semibold text-emerald">{flat.type}</td>
                        <td className="py-3 px-4 text-sage">{flat.orientation}</td>
                        <td className="py-3 px-4 text-right font-medium text-charcoal">{flat.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile View: Highly elegant vertical list with badges */}
              <div className="flex flex-col gap-2 sm:hidden">
                {FLAT_TYPES.map((flat) => (
                  <div key={flat.type} className="flex items-center justify-between bg-stone/20 px-3 py-2.5 rounded-lg border border-stone-100/80">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-emerald text-xs">{flat.type}</span>
                      <span className="text-[9px] text-sage font-sans px-1.5 py-0.5 rounded bg-white border border-stone-200/30 font-medium">
                        {flat.orientation}
                      </span>
                    </div>
                    <span className="font-semibold text-charcoal text-[13px]">{flat.size}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Amenities */}
            <div className="text-xs sm:text-sm text-sage mb-4 sm:mb-6 flex flex-wrap items-center gap-x-1.5 gap-y-1 leading-relaxed">
              <span className="font-semibold text-charcoal">Nearby Amenities:</span>
              <span>Schools</span>
              <span className="text-leaf/60">•</span>
              <span>Colleges</span>
              <span className="text-leaf/60">•</span>
              <span>Mosques</span>
              <span className="text-leaf/60">•</span>
              <span>Markets</span>
              <span className="text-emerald/20 sm:mx-1">—</span>
              <span className="font-medium text-emerald">All within minutes</span>
            </div>

            {/* Emotional Italic pull quote */}
            <div className="font-cormorant italic text-[15px] sm:text-[17px] text-emerald leading-relaxed border-l-2 border-emerald/20 pl-4.5 py-0.5 mb-5 sm:mb-8">
              "Airy, open, and south-north facing — designed for families who deserve the best."
            </div>

            {/* CTA buttons row on mobile, stacked on desktop */}
            <div className="flex flex-row gap-2.5 sm:flex-col sm:gap-3 mt-auto">
              <button
                onClick={() => onOpenBooking("Galaxy Tower")}
                id="featured-booking-cta"
                className="flex-1 bg-emerald hover:bg-emerald/95 text-white font-sans font-semibold text-xs sm:text-base py-3 sm:py-4 rounded-[6px] transition-all hover:scale-[1.01] shadow-md cursor-pointer flex items-center justify-center outline-none select-none"
              >
                Book Site Visit
              </button>
              
              <a
                href="tel:01926-869104"
                id="featured-call-cta"
                className="flex-1 border-[1.5px] border-emerald text-emerald hover:bg-garden font-sans font-semibold text-xs sm:text-base py-3 sm:py-3.5 rounded-[6px] transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call Developer</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
