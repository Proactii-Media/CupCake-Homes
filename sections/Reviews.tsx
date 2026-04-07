"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    category: "Benaulim Beach",
    name: "Aman",
    rating: 5,
    text: "Valentine's place was the perfect pick for our Goa vacation. Close to the beach and a lot of nice spots to chill. The gated community is secure and has a nice and clean pool for you to take a dip when needed. The house is well maintained and had everything we needed for our stay.",
  },
  {
    category: "Benaulim Beach",
    name: "Michele",
    rating: 5,
    text: "We love it at Valentines place. It's the second time we have stayed here, and will not be the last.",
  },
  {
    category: "Benaulim Beach",
    name: "Matthew",
    rating: 5,
    text: "Great place to stay, really close to the beach and in a gated complex so nice and secure.",
  },
  {
    category: "Miramar",
    name: "Nikhil",
    rating: 5,
    text: "Peaceful and amazing place with everything you need.",
  },
  {
    category: "Miramar",
    name: "Ananya",
    rating: 4,
    text: "Cosy stay with peaceful lake view. Helpful host.",
  },
];

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [cardsToShow, setCardsToShow] = useState(3);

  // ✅ FIXED TYPE
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // RESPONSIVE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = reviews.length - cardsToShow;

  // AUTOPLAY
  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [index, cardsToShow]);

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const next = () => {
    stopAutoSlide();
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    stopAutoSlide();
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="bg-gradient-to-b from-[#FAF9F6] to-[#EEF4F8] px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 sm:mb-12 text-2xl sm:text-3xl md:text-4xl text-center text-[#2C2C2C]">
          What our guests say
        </h2>

        <div
          className="relative"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* LEFT */}
          <button
            onClick={prev}
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md"
          >
            <ChevronLeft />
          </button>

          {/* SLIDER */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{ x: `-${(index * 100) / cardsToShow}%` }}
              transition={{ duration: 0.5 }}
            >
              {reviews.map((review, i) => {
                const isExpanded = expanded === i;

                return (
                  <div
                    key={i}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-100 shadow-sm"
                  >
                    <p className="text-xs text-gray-500 mb-2">
                      {review.category}
                    </p>

                    {/* STARS */}
                    <div className="flex gap-1 text-[#C2A878] mb-2">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <Star key={idx} size={14} fill="currentColor" />
                      ))}
                    </div>

                    {/* TEXT */}
                    <p
                      className={`text-sm text-gray-700 mb-2 ${
                        isExpanded ? "" : "line-clamp-3 sm:line-clamp-4"
                      }`}
                    >
                      {review.text}
                    </p>

                    {/* READ MORE */}
                    {review.text.length > 100 && (
                      <button
                        onClick={() =>
                          setExpanded(isExpanded ? null : i)
                        }
                        className="text-xs text-[#C2A878] font-medium hover:underline"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}

                    <p className="mt-3 text-sm font-semibold">
                      — {review.name}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT */}
          <button
            onClick={next}
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md"
          >
            <ChevronRight />
          </button>
        </div>

        {/* MOBILE DOTS */}
        <div className="flex justify-center mt-6 gap-2 sm:hidden">
          {reviews.slice(0, maxIndex + 1).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-[#C2A878]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
