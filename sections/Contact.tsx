"use client";

import { motion } from "framer-motion";
import { Phone, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#FAF9F6] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/60 bg-gradient-to-br from-[#E8DFC8]/40 to-[#A7C7D7]/30 p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#2C2C2C]/50">
              Contact
            </p>

            <h2 className="text-4xl leading-tight text-[#2C2C2C] sm:text-5xl">
              Plan your Goa escape
            </h2>

            <p className="mt-5 text-base text-[#2C2C2C]/60 max-w-md">
              Get instant responses and seamless booking support. We’re here to
              make your stay effortless and memorable.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex w-full max-w-[320px] flex-col justify-center gap-4 mx-auto md:ml-auto"
          >
            {/* Phone */}
            <a
              href="tel:+917774048747"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2C2C2C] shadow-sm hover:shadow-md transition"
            >
              <Phone size={16} />
              +91 7774048747
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917774048747"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#C2A878] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-md"
            >
              Chat on WhatsApp
              <Send
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* FLOATING BUTTON */}
      <a
        href="https://wa.me/917774048747"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-lg hover:scale-110 transition"
      >
        <Send size={20} />
      </a>
    </section>
  );
}
