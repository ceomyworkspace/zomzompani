import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenBooking: (flatType?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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
    <nav
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-forest border-b border-white/5 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            id="brand-logo-button"
            className="group flex flex-col items-start cursor-pointer select-none text-left"
          >
            <img
              src="https://i.ibb.co.com/7NNw6Xgk/logo.png"
              alt="Zom Zom Builders Logo"
              className="w-[70px] h-[70px] pl-0 pr-0 pt-0 ml-0 mr-0 mt-[-20px] mb-[-19px] object-contain transition-transform duration-300 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("featured-project")}
              className="text-xs lg:text-sm font-medium tracking-wide text-white hover:text-gold transition-colors duration-200 cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about-us")}
              className="text-xs lg:text-sm font-medium tracking-wide text-white hover:text-gold transition-colors duration-200 cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-xs lg:text-sm font-medium tracking-wide text-white hover:text-gold transition-colors duration-200 cursor-pointer"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-xs lg:text-sm font-medium tracking-wide text-white hover:text-gold transition-colors duration-200 cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xs lg:text-sm font-medium tracking-wide text-white hover:text-gold transition-colors duration-200 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Nav CTA Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:01926-869104"
              className="flex items-center gap-1.5 text-xs font-semibold text-mint hover:text-white transition-colors duration-200"
            >
              <PhoneCall className="h-3.5 w-3.5 text-gold" />
              <span>01926-869104</span>
            </a>
            <button
              onClick={() => onOpenBooking("General Inquiry")}
              id="navbar-site-visit-cta"
              className="bg-emerald hover:bg-emerald/90 text-white text-xs font-medium tracking-wide px-5 py-2.5 rounded-full transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
            >
              Book a Site Visit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-forest/98 border-b border-emerald/20 animate-fade-in py-6 px-4 absolute top-full left-0 right-0 z-50">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("featured-project")}
              className="text-left text-sm font-medium text-white hover:text-gold py-2 border-b border-white/5"
            >
              Projects (Galaxy Tower)
            </button>
            <button
              onClick={() => scrollToSection("about-us")}
              className="text-left text-sm font-medium text-white hover:text-gold py-2 border-b border-white/5"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-left text-sm font-medium text-white hover:text-gold py-2 border-b border-white/5"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-left text-sm font-medium text-white hover:text-gold py-2 border-b border-white/5"
            >
              Client Stories
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm font-medium text-white hover:text-gold py-2 border-b border-white/5"
            >
              Contact & Support
            </button>
            <div className="flex flex-col space-y-3 pt-4">
              <span className="text-xs text-mint/80 font-cormorant italic">
                Abashan Khate Ek Jugher Pathchala
              </span>
              <a
                href="tel:01926-869104"
                className="text-sm font-semibold text-gold"
              >
                📞 Call: 01926-869104
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking("General Inquiry");
                }}
                className="w-full bg-emerald hover:bg-emerald/90 text-white text-sm font-semibold py-3 rounded-lg text-center shadow-md cursor-pointer"
              >
                Book a Site Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
