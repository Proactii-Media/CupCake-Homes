"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CircleCheck, CircleX, ExternalLink } from "lucide-react";

type StayCardProps = {
  title: string;
  link: string;
  images: string[];
  amenities: string[];
  unavailable: string[];
};

export default function StayCard({ title, link, images, amenities, unavailable }: StayCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4800);
    return () => clearInterval(interval);
  }, [images.length]);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="grid overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-[0_8px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm lg:grid-cols-[1.15fr_1fr]"
    >
      <div className="relative min-h-[20rem]">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
          <div className="flex gap-2 rounded-full bg-white/70 px-3 py-2 backdrop-blur-md">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-[#2C2C2C] w-4" : "bg-[#2C2C2C]/35"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous image"
              onClick={goPrev}
              className="rounded-full bg-white/75 p-2 text-[#2C2C2C] backdrop-blur-md transition hover:bg-white"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={goNext}
              className="rounded-full bg-white/75 p-2 text-[#2C2C2C] backdrop-blur-md transition hover:bg-white"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6 md:p-8">
        <h3 className="text-3xl text-[#2C2C2C]">{title}</h3>
        <p className="text-sm text-[#2C2C2C]/75">What this place offers:</p>

        <ul className="grid gap-2 text-sm text-[#2C2C2C]/85">
          {amenities.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CircleCheck size={16} className="mt-0.5 text-[#C2A878]" />
              <span>{item}</span>
            </li>
          ))}

          {unavailable.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[#2C2C2C]/65">
              <CircleX size={16} className="mt-0.5 text-[#2C2C2C]/35" />
              <span>Unavailable: {item}</span>
            </li>
          ))}
        </ul>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#2C2C2C] px-5 py-2.5 text-sm text-white transition duration-300 hover:scale-[1.02] hover:shadow-md"
        >
          View on Airbnb
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.article>
  );
}
