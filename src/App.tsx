/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedProject from "./components/FeaturedProject";
import Testimonials from "./components/Testimonials";
import ContactFooter from "./components/ContactFooter";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingFlatType, setBookingFlatType] = useState("General Inquiry");

  const handleOpenBooking = (flatType: string = "General Inquiry") => {
    setBookingFlatType(flatType);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-charcoal">
      {/* Floating Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Orchestrators */}
      <main>
        {/* Section 1: Hero first impression and grounding Trust Bar */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Section 2: Trust and Brand Story */}
        <AboutUs />

        {/* Section 4: Flagship Project display Galaxy Tower */}
        <FeaturedProject onOpenBooking={handleOpenBooking} />

        {/* Section 3: Why Choose Us differentiators */}
        <WhyChooseUs />

        {/* Section 5: Dramatic Social Proof block */}
        <Testimonials />

        {/* Section 6: Contact and Footer CTA matrix */}
        <ContactFooter onOpenBooking={handleOpenBooking} />
      </main>

      {/* Persistent global interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultFlatType={bookingFlatType}
      />
    </div>
  );
}

