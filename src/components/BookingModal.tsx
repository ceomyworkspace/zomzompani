import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Calendar, Phone, Mail, User, ShieldAlert } from "lucide-react";
import { BookingRequest } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultFlatType?: string;
}

export default function BookingModal({ isOpen, onClose, defaultFlatType = "General Inquiry" }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [flatType, setFlatType] = useState(defaultFlatType);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  React.useEffect(() => {
    if (isOpen) {
      setFlatType(defaultFlatType);
      setIsSubmitted(false);
      setError("");
    }
  }, [isOpen, defaultFlatType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    // Simple Bangladesh phone validation: 11 digits
    const cleanPhone = phone.replace(/[-+()\s]/g, "");
    if (cleanPhone.length < 11) {
      setError("Please enter a valid 11-digit phone number (e.g., 01926869104).");
      return;
    }

    const newRequest: BookingRequest = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      phone,
      email,
      preferredDate,
      flatType,
      message,
      createdAt: new Date().toISOString(),
    };

    // Save of booking in local storage
    try {
      const existing = localStorage.getItem("zom_zom_bookings");
      const bookings = existing ? JSON.parse(existing) : [];
      bookings.unshift(newRequest);
      localStorage.setItem("zom_zom_bookings", JSON.stringify(bookings));
      
      // Emit event so other components (like an admin view) can sync
      window.dispatchEvent(new Event("zom_zom_booking_added"));
    } catch (e) {
      console.error("Local storage booking failed", e);
    }

    setIsSubmitted(true);
    setError("");

    // Reset fields
    setName("");
    setPhone("");
    setEmail("");
    setPreferredDate("");
    setMessage("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1A2E1D]/80 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            id="booking-modal-container"
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl border border-mint/20 bg-white p-6 shadow-2xl md:p-8"
          >
            {/* Top Border Accent (Prestige Gold) */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold" />

            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-modal-button"
              className="absolute top-4 right-4 rounded-full p-1.5 text-sage hover:bg-stone hover:text-charcoal transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="mb-6">
                  <span className="font-cormorant text-sm italic text-gold tracking-wider uppercase block mb-1">
                    Direct Booking Portal
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-charcoal">
                    Schedule a Site Visit
                  </h3>
                  <p className="text-sage text-sm mt-1">
                    Experience Zom Zom Builders' craftsmanship first-hand. Our property experts will guide you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 border border-red-100">
                      <ShieldAlert className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Full Name <span className="text-emerald">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sage" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Md. Ashraful Alam"
                        className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Phone Number <span className="text-emerald">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sage" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 01926869104"
                        className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Email Address <span className="text-sage-400 text-xs font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sage" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. ashraf@gmail.com"
                        className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sage" />
                        <input
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full pl-10 p-2.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Flat Config */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                        Interest Focus
                      </label>
                      <select
                        value={flatType}
                        onChange={(e) => setFlatType(e.target.value)}
                        className="w-full p-2.5 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent transition-all"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Type-A (2,164 sqft)">Type-A (2,164 sqft)</option>
                        <option value="Type-B (2,087 sqft)">Type-B (2,087 sqft)</option>
                        <option value="Type-C (1,383 sqft)">Type-C (1,383 sqft)</option>
                        <option value="Type-D (1,437 sqft)">Type-D (1,437 sqft)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Your Message <span className="text-sage-400 text-xs font-normal">(Optional)</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. I am interested to see Galaxy Tower. Please contact me."
                      rows={3}
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Privacy note */}
                  <span className="block text-[11px] text-sage leading-relaxed">
                    🔒 <strong>Privacy Assurance:</strong> Your contact details are stored securely. We will never share or spam your number.
                  </span>

                  {/* Submits */}
                  <button
                    type="submit"
                    id="submit-booking-button"
                    className="w-full bg-emerald hover:bg-emerald/95 text-white py-3 px-4 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Confirm Booking Request
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-garden text-emerald border border-mint">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                  Request Received
                </h3>
                <p className="text-sage text-sm max-w-sm mx-auto mb-6">
                  Thank you, <strong>{name}</strong>! Your site visit request for <strong>{flatType}</strong> has been logged.
                </p>
                <div className="bg-stone/60 rounded-xl p-4 text-left max-w-md mx-auto mb-6 text-xs text-charcoal space-y-2 border border-stone-200">
                  <div className="flex justify-between">
                    <span className="text-sage font-medium">Contact:</span>
                    <span className="font-semibold">{phone}</span>
                  </div>
                  {email && (
                    <div className="flex justify-between">
                      <span className="text-sage font-medium">Email:</span>
                      <span className="font-semibold">{email}</span>
                    </div>
                  )}
                  {preferredDate && (
                    <div className="flex justify-between">
                      <span className="text-sage font-medium">Date:</span>
                      <span className="font-semibold">{new Date(preferredDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-sage font-medium">Logged Time:</span>
                    <span>Just now</span>
                  </div>
                </div>
                <p className="text-xs text-sage mb-6">
                  Our regional property manager will reach out via phone call within 2 hours.
                </p>
                <button
                  onClick={onClose}
                  id="close-confirmation-button"
                  className="bg-forest text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-forest/90 transition-all cursor-pointer"
                >
                  Dismiss
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
