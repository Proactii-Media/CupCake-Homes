"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <Image
        src="/stay1a.avif"
        alt="Cupcake Homes Goa"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/55" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-3xl text-center text-white"
      >
        <h1 className="text-5xl tracking-tight sm:text-6xl md:text-7xl">Welcome to Cupcake Homes</h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/90 sm:text-lg">
          Experience Goa beyond the ordinary
        </p>
        <a
          href="#stays"
          className="mt-9 inline-flex rounded-full bg-[#C2A878] px-7 py-3 text-sm font-medium text-[#2C2C2C] transition duration-300 hover:scale-[1.02] hover:shadow-md"
        >
          Explore Stays
        </a>
      </motion.div>
    </section>
  );
}
