import { useState, useEffect } from "react";
import { Phone, MapPin, Facebook, ArrowRight, Trash2, LayoutGrid, Chrome } from "lucide-react";
import { BookingRequest } from "../types";

interface ContactFooterProps {
  onOpenBooking: (flatType?: string) => void;
}

export default function ContactFooter({ onOpenBooking }: ContactFooterProps) {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  const [showSubmissions, setShowSubmissions] = useState(false);

  // Sync bookings from local storage
  const syncBookings = () => {
    try {
      const stored = localStorage.getItem("zom_zom_bookings");
      if (stored) {
        setBookings(JSON.parse(stored));
      } else {
        setBookings([]);
      }
    } catch (e) {
      console.error("Failed to read bookings", e);
    }
  };

  useEffect(() => {
    syncBookings();
    
    // Listen to custom event for real-time update in current session
    window.addEventListener("zom_zom_booking_added", syncBookings);
    return () => window.removeEventListener("zom_zom_booking_added", syncBookings);
  }, []);

  const clearBookings = () => {
    if (window.confirm("Are you sure you want to clear your test bookings?")) {
      localStorage.removeItem("zom_zom_bookings");
      setBookings([]);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="contact" className="relative">
      
      {/* 1. SECTION 6 - ELEVATED FINAL CTA BAND */}
      <div 
        className="relative bg-[#1A3D22] bg-[linear-gradient(135deg,#1A3D22_0%,#2D7A45_50%,#1A3D22_100%)] py-24 overflow-hidden text-center"
      >
        {/* Subtle diagonal geometric line pattern - 4% opacity, 45 degree angle, 40px spacing */}
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none select-none">
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="diagonal-line-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="40" x2="40" y2="0" stroke="#FFFFFF" strokeWidth="1.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#diagonal-line-pattern)" />
          </svg>
        </div>

        {/* Large faint Zom Zom Builders Logo watermark at 3.5% opacity */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
          <img 
            src="https://i.ibb.co.com/7NNw6Xgk/logo.png" 
            alt="Zom Zom Watermark" 
            className="w-[280px] md:w-[450px] h-auto object-contain opacity-[0.5] brightness-0 invert"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Main Headline (Playfair Display Bold, 48px, Pure White) */}
          <h2 className="font-serif text-3xl sm:text-[48px] font-bold text-white leading-tight mb-2 tracking-tight">
            Your Dream Home in Dhaka is Closer Than You Think
          </h2>
          
          {/* Prestige Gold thin centered rule (2px x 60px) */}
          <div className="h-[2px] w-[60px] bg-gold mx-auto mb-6" />

          {/* Subheadline (Cormorant Garamond Italic, 20px, Mint Mist) */}
          <p className="font-cormorant italic text-lg sm:text-[20px] text-mint leading-relaxed max-w-xl mx-auto mb-9">
            Don't wait — speak with our team today and take the first step toward your ideal home.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-6">
            
            {/* Primary - Book a Free Consultation */}
            <button
              onClick={() => onOpenBooking("General Consultation")}
              id="footer-consultation-cta"
              className="group bg-white text-[#1A3D22] font-sans font-semibold text-[15px] h-[54px] px-10 rounded-full hover:bg-garden transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_32px_rgba(0,0,0,0.2)] cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="h-4 w-4 text-[#1A3D22] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            {/* Secondary - WhatsApp Us Now (Frosted, custom WA icon) */}
            <a
              href="https://wa.me/8801926869104?text=Hello%20Zom%20Zom%20Builders,%20I'm%20interested%20in%20a%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-cta"
              className="bg-white/10 backdrop-blur-[10px] border-1.5 border-white/40 hover:border-white text-white font-sans font-semibold text-[15px] h-[54px] px-10 rounded-full hover:bg-white/15 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5"
            >
              {/* Pristine Custom WhatsApp Green Brand Icon SVG */}
              <svg 
                className="h-4 w-4 fill-white" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.51 5.284 3.508 8.49-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 4.933 1.503 5.422 0 9.835-4.404 9.839-9.82.002-2.614-1.013-5.074-2.859-6.924C16.666 2.062 14.212 1.05 11.6 1.05c-5.429 0-9.844 4.414-9.848 9.833-.001 2.012.529 3.98 1.536 5.72s.553 1.135.297 2.07l-.98 3.58 3.684-.966c.961-.252 1.144-.153 1.78.225zm11.758-7.9c-.31-.154-1.829-.9-2.114-1.002-.285-.102-.492-.153-.7.154-.207.31-.8 1.002-.98 1.206-.18.205-.36.23-.67.077-.31-.154-1.309-.483-2.493-1.54-1.129-1.007-1.89-2.251-2.112-2.637-.223-.385-.024-.593.131-.747.14-.138.312-.36.467-.54.155-.18.207-.308.31-.513.103-.206.052-.385-.026-.54-.078-.153-.7-1.685-.959-2.312-.25-.605-.503-.523-.69-.533l-.59-.01c-.205 0-.54.077-.82.385-.282.308-1.077 1.05-1.077 2.564s1.1 2.977 1.25.31c.154.205 2.164 3.31 5.244 4.637.73.315 1.3.504 1.745.645.733.23 1.4.198 1.93.118.58-.088 1.828-.748 2.087-1.434.258-.687.258-1.277.18-1.4-.078-.124-.286-.206-.596-.36z" />
              </svg>
              <span>WhatsApp Us Now</span>
            </a>
          </div>

          {/* Trust Micro-Strip (🔒 No commitment required ...) */}
          <div className="mt-8 font-sans text-[13px] text-mint pointer-events-none select-none opacity-90">
            🔒 No commitment required · Free consultation · Trusted since 2012
          </div>
        </div>
      </div>

      {/* Prestige Gold hairline divider */}
      <div className="h-[1px] bg-gold w-full relative z-10" />

      {/* 2. LOWER FOOTER WITH SOLID BRAND COLOR */}
      <div 
        className="relative pt-18 pb-12 overflow-hidden text-left bg-[#122A18]"
      >

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Top of Footer - Brand Statement Row */}
          <div className="text-center w-full pb-6 pt-2 select-none">
            <h3 className="font-cormorant italic text-[22px] md:text-[23px] text-mint tracking-wide leading-relaxed">
              "Building Dhaka's Most Trusted Addresses — One Family at a Time."
            </h3>
            {/* Prestige Gold hairline */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent w-3/4 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pt-12 mb-14">
            
            {/* Column 1 — Brand */}
            <div className="col-span-12 md:col-span-12 lg:col-span-5 max-w-md">
              <div className="flex flex-col items-start mb-5 justify-start">
                {/* White Tinted Logo using CSS filter for absolute purity */}
                <img 
                  src="https://i.ibb.co.com/7NNw6Xgk/logo.png" 
                  alt="Zom Zom Builders White Logo" 
                  className="h-11 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
                <span className="font-cormorant text-xs italic tracking-widest text-mint mt-3.5 block select-none uppercase">
                  Abashan Khate Ek Jugher Pathchala
                </span>
              </div>
              <p className="font-sans text-[13.5px] text-[#B2C5B7] leading-[1.65] mb-5">
                Our legacy spans over 12 years of developing luxurious and durable multi-family apartment towers. Delivering absolute layout beauty, security framing, and clean paperwork clarity across critical residential hubs in Dhaka.
              </p>
              
              {/* Facebook Icon Leaf Accent */}
              <div className="flex items-center gap-3">
                <a 
                  href="https://facebook.com/ZomZomBuilders" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg bg-[#2D7A45]/30 hover:bg-[#2D7A45]/50 flex items-center justify-center text-[#4CAF72] transition-colors border border-[#4CAF72]/20 shadow-sm hover:scale-105 transform duration-200"
                  aria-label="Visit our official Facebook page"
                >
                  <Facebook className="h-[20px] w-[20px] fill-current" />
                </a>
                <span className="text-xs text-[#B2C5B7] font-sans">Official updates, site visits, & handovers</span>
              </div>
            </div>

            {/* Column 2 — Contact (Leaf Accent icons, Clickable Direct Dialer links) */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <span className="font-sans font-medium text-[11px] text-[#4CAF72] tracking-[0.15em] uppercase block mb-6 select-none">
                GET IN TOUCH
              </span>
              <ul className="space-y-4 font-sans text-[14px]">
                {/* Dial Link 1 */}
                <li className="flex items-center gap-3.5 group">
                  <div className="p-2.5 rounded-full bg-white/[0.04] text-[#4CAF72] border border-[#2D7A45]/20 shrink-0">
                    <Phone className="h-4 w-4 stroke-[1.8]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#B2C5B7]/80 leading-none uppercase tracking-wider mb-1">Corporate Hotline</span>
                    <a 
                      href="tel:+8801712799991" 
                      className="text-mint hover:text-white transition-colors font-medium text-[15px]"
                    >
                      +880 171 279 9991
                    </a>
                  </div>
                </li>

                {/* Dial Link 2 (Hotline) + WhatsApp Row integration */}
                <li className="flex items-center gap-3.5 group">
                  <div className="p-2.5 rounded-full bg-white/[0.04] text-[#4CAF72] border border-[#2D7A45]/20 shrink-0">
                    <Phone className="h-4 w-4 stroke-[1.8]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#B2C5B7]/80 leading-none uppercase tracking-wider mb-1">Office Line / WhatsApp</span>
                    <a 
                      href="tel:01926869104" 
                      className="text-mint hover:text-white transition-colors font-medium text-[15px]"
                    >
                      01926-869104
                    </a>
                  </div>
                </li>

                {/* Location */}
                <li className="flex items-start gap-3.5 text-[#B2C5B7]">
                  <div className="p-2.5 rounded-full bg-white/[0.04] text-[#4CAF72] border border-[#2D7A45]/20 shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 stroke-[1.8]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#B2C5B7]/80 leading-none uppercase tracking-wider mb-1">Office Headquarters</span>
                    <span className="text-[13.5px] text-[#B2C5B7] font-sans mt-0.5 leading-relaxed">
                      Chand Udyan, Mohammadpur, Dhaka-1207
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 3 — Quick Links (Underline animation and prefix arrows) */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <span className="font-sans font-medium text-[11px] text-[#4CAF72] tracking-[0.15em] uppercase block mb-6 select-none">
                QUICK NAVIGATION
              </span>
              <ul className="space-y-4 font-sans text-[14px] text-[#B2C5B7]/90">
                {[
                  { label: "Our Featured Projects", target: "featured-project" },
                  { label: "About Who We Are", target: "about-us" },
                  { label: "Why Choose Our Team", target: "why-us" },
                  { label: "Galaxy Tower Specifications", target: "featured-project" },
                  { label: "Client Testimonials", target: "testimonials" },
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.target)}
                      className="relative flex items-center gap-2 group cursor-pointer text-left hover:text-white transition-colors duration-250 font-medium"
                    >
                      {/* Interactive slide-in arrow */}
                      <ArrowRight 
                        className="h-3.5 w-3.5 text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" 
                      />
                      <span className="relative pb-1">
                        {item.label}
                        {/* Underline draw animation from left to right */}
                        <span 
                          className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full" 
                        />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Real-time Submissions Lead database */}
          {bookings.length > 0 && (
            <div className="mb-8 border border-white/10 rounded-xl bg-stone/5 overflow-hidden relative z-10">
              <button
                onClick={() => setShowSubmissions(!showSubmissions)}
                className="w-full flex items-center justify-between px-5 py-3.5 text-xs font-semibold tracking-wider text-gold bg-white/[0.02] hover:bg-white/[0.04] transition-all"
              >
                <span className="flex items-center gap-2">
                  <LayoutGrid className="h-4 w-4 shrink-0 text-gold" />
                  REAL-TIME MONITOR: {bookings.length} Verified Lead{bookings.length > 1 ? "s" : ""} Submitted
                </span>
                <span className="bg-emerald text-white px-2.5 py-0.5 rounded-full text-[10px]">
                  {showSubmissions ? "Collapse" : "Inspect Database"}
                </span>
              </button>

              {showSubmissions && (
                <div className="p-5 border-t border-white/10 space-y-4 max-h-[300px] overflow-y-auto bg-black/40">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-xs text-[#B2C5B7]">Client-side simulated persistence query</span>
                    <button
                      onClick={clearBookings}
                      className="text-red-400 hover:text-red-300 text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="h-3 w-3" /> Clear Leads Database
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {bookings.map((b) => (
                      <div key={b.id} className="p-3.5 rounded-lg bg-[#1F4A2A] border border-[#2D7A45]/35 text-xs">
                        <div className="flex items-center justify-between text-gold mb-1.5 border-b border-white/5 pb-1 font-medium">
                          <span>{b.flatType || "General Inquiry"}</span>
                          <span className="text-[10px] text-[#B2C5B7]">{new Date(b.createdAt).toLocaleTimeString()}</span>
                        </div>
                        <ul className="space-y-1.5 text-mint/90">
                          <li>👤 <strong>{b.name}</strong></li>
                          <li>📞 {b.phone}</li>
                          {b.email && <li className="truncate">📧 {b.email}</li>}
                          {b.preferredDate && <li>🗓️ Visit Date: {new Date(b.preferredDate).toLocaleDateString()}</li>}
                          {b.message && <li className="italic text-[#B2C5B7] mt-1 border-t border-white/5 pt-1">"{b.message}"</li>}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Bottom bar divider hairline with gold */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/45 to-transparent w-full my-6 relative z-10" />

        {/* Footer Bottom Bar (Copyright with diamond ◆ partition spacing) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B2C5B7] font-sans font-normal py-2 text-center md:text-left">
            <span>© 2012–2026 Zom Zom Builders. All Rights Reserved.</span>
            
            <div className="hidden md:flex items-center text-gold opacity-80 select-none px-4">
              ◆
            </div>

            <div className="flex items-center gap-4 text-[#B2C5B7]/90">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span>·</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms and Disclosures</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
