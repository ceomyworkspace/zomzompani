import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star } from "lucide-react";
// @ts-ignore
import rafiqulPhoto from "../assets/images/regenerated_image_1780241404665.jpg";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  detail: string;
  imageUrl: string;
  bgImageUrl: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "rafiqul",
    quote: "The construction standards, structural steel reinforcement, and layout spaciousness are outstanding. The hand-over process was fully documented and delivered with total clarity on-time.",
    author: "Md. Rafiqul Islam",
    detail: "Mohammadpur Hub · Classic Residence Owner",
    imageUrl: rafiqulPhoto,
    bgImageUrl: "https://i.ibb.co/hqnzq1C/home-photo.png",
  },
  {
    id: "fatema",
    quote: "With Zom Zom Builders, we found absolute confidence. Transparent land mutation titles, Rajuk compliance safeguards, and premium sanitary and masonry finishes throughout our apartment.",
    author: "Fatema Begum",
    detail: "Galaxy Tower · Premium Suite 5A Owner",
    imageUrl: "https://i.ibb.co/Vcx8c0mZ/15258.jpg",
    bgImageUrl: "https://i.ibb.co/bjVZgsgW/kitchen.png",
  },
  {
    id: "karim",
    quote: "Every promise made during our initial site booking was honored precisely. The structural finishes, fire safety integrations, and custom room layout modifications are exceptional.",
    author: "Engr. Karim Hossain",
    detail: "Chand Udyan Residence · G-Block Duplex Owner",
    imageUrl: "https://i.ibb.co/V0TK90HM/13311.jpg",
    bgImageUrl: "https://i.ibb.co/9mjqTWcs/masterbed.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Sync automatic progression over exactly 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 overflow-hidden border-t border-white/5 select-none bg-[#0B0B0C] flex flex-col justify-center min-h-[700px]"
    >
      {/* Smooth transitioning Background Image Layer with subtle blur */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial.bgImageUrl}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[3px]"
            style={{ backgroundImage: `url('${activeTestimonial.bgImageUrl}')` }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
      </div>

      {/* Dark elegant neutral overlay for maximum text contrast and clean image details */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] z-10" />
      
      {/* Subtle radiating neutral glow behind the card for visual depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_65%)] z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full flex flex-col items-center">
        
        {/* Minimalist Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-[12px] border border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_32px_0_rgba(0,0,0,0.2)] mb-5 select-none hover:bg-white/[0.08] hover:border-white/[0.2] transition-colors duration-300">
            <span className="text-[13px] leading-none mb-0.5 filter drop-shadow-[0_0_4px_rgba(253,224,71,0.5)]">✨</span>
            <span className="font-sans font-normal text-[12.5px] text-white/80 tracking-wider uppercase">
              Verified Resident Portraits
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-normal text-white tracking-tight leading-[1.12]">
            Stories of Lasting Confidence
          </h2>
          <div className="h-[2px] w-12 bg-[#C9A84C] mt-5 mx-auto" />
        </div>

        {/* Elegant Immersive Glass Card */}
        <div className="relative w-full max-w-[1000px] min-h-[280px] md:min-h-[380px] lg:h-[340px] rounded-[24px] bg-white/[0.05] backdrop-blur-[25px] border border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_30px_70px_rgba(0,0,0,0.5)] overflow-hidden flex items-center p-6 sm:p-10 md:p-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center w-full"
            >
              {/* Portrait Column - hidden on mobile */}
              <div className="hidden md:flex col-span-12 md:col-span-4 justify-center md:justify-start">
                <motion.div
                  variants={{
                    initial: { opacity: 0, x: 60, rotate: 0 },
                    animate: { 
                      opacity: 1, 
                      x: 0, 
                      rotate: -2,
                      transition: { 
                        duration: 0.7, 
                        ease: [0.22, 1, 0.36, 1] 
                      } 
                    },
                    exit: { 
                      opacity: 0, 
                      x: -60,
                      transition: { 
                        duration: 0.5, 
                        ease: [0.22, 1, 0.36, 1] 
                      } 
                    }
                  }}
                  className="relative w-[180px] h-[225px] rounded-[20px] overflow-hidden bg-stone-900 shadow-[0_25px_60px_rgba(0,0,0,0.45)] border border-white/10 shrink-0 select-none"
                >
                  <img
                    src={activeTestimonial.imageUrl}
                    alt={activeTestimonial.author}
                    className="w-full h-full object-cover pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* Quote Column */}
              <div className="col-span-12 md:col-span-8 flex flex-col justify-center text-left relative md:-ml-8 z-10">
                <motion.div
                  variants={{
                    initial: { opacity: 0, x: 40 },
                    animate: { 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.15,
                        duration: 0.7, 
                        ease: [0.22, 1, 0.36, 1] 
                      } 
                    },
                    exit: { 
                      opacity: 0, 
                      x: -30,
                      transition: { 
                        duration: 0.5, 
                        ease: [0.22, 1, 0.36, 1] 
                      } 
                    }
                  }}
                >
                  {/* Decorative quotation mark behind content (150px, Prestige Gold at 10% opacity) */}
                  <div className="absolute -top-14 -left-8 font-serif text-[150px] text-[#C9A84C]/10 select-none leading-none pointer-events-none z-0">
                    “
                  </div>

                  <div className="relative z-10 flex flex-col">
                    {/* Minimal Star Rating */}
                    <div className="flex items-center gap-[4px] mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#C9A84C] text-[#C9A84C] stroke-[1.2]" />
                      ))}
                    </div>

                    {/* Actual Quote: Cormorant Garamond italic 24px Mint Mist */}
                    <blockquote className="font-cormorant italic text-xl sm:text-[24px] text-[#E3F0E6] leading-relaxed max-w-[540px] mb-5 font-normal">
                      "{activeTestimonial.quote}"
                    </blockquote>

                    {/* Resident Details */}
                    <div className="flex items-center gap-4">
                      {/* Mobile Only Avatar */}
                      <div className="block md:hidden shrink-0 mt-0.5">
                        <img
                          src={activeTestimonial.imageUrl}
                          alt={activeTestimonial.author}
                          className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-md"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans font-semibold text-[16px] sm:text-[18px] text-[#C8E6D0] leading-snug">
                          {activeTestimonial.author}
                        </span>
                        <span className="font-sans font-normal text-xs sm:text-sm text-[#B2C5B7] mt-0.5">
                          {activeTestimonial.detail}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Dynamic Indicators & Micro Details below Card */}
        <div className="flex flex-col items-center gap-5 mt-10 w-full">
          
          {/* Elongated Pill Indicators */}
          <div className="flex items-center gap-3.5">
            {TESTIMONIALS.map((t, idx) => {
              const isActive = index === idx;
              return (
                <button
                  key={t.id}
                  onClick={() => setIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] cursor-pointer ${
                    isActive ? "w-8 bg-[#C9A84C]" : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to story of ${t.author}`}
                />
              );
            })}
          </div>

          {/* Slide Progress Bar (5s auto progression visualizer) */}
          <div className="w-[180px] h-[3px] bg-white/15 rounded-full overflow-hidden relative">
            <motion.div
              key={index} // Force recreate & recreate animation on index state change
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute inset-y-0 left-0 w-full bg-[#C9A84C] origin-left"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
