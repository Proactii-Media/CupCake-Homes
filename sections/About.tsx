"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#FAF9F6] to-[#F5F2EA] px-6 py-24 md:px-10"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#2C2C2C]/55">
              About
            </p>
            <h2 className="text-4xl text-[#2C2C2C] sm:text-5xl">
              A softer way to experience Goa
            </h2>
          </div>

          <div className="space-y-4 text-[#2C2C2C]/85">
            <h3 className="text-2xl text-[#2C2C2C]">Vision</h3>
            <p>
              Cupcake Homes is a product of the vision and dedication of Mr.
              Valentine Pereira, who wanted people to experience the best of Goa
              in even the smallest cupcake-sized holiday home.
            </p>
            <p>
              He wanted to introduce a Goa that carried{" "}
              <em>softness, stillness, and unspoken beauty</em>, not simply a
              party destination but a place for wellbeing and family
              reconnection.
            </p>
          </div>

          <div className="space-y-4 text-[#2C2C2C]/85">
            <h3 className="text-2xl text-[#2C2C2C]">
              Story of Valentine Pereira
            </h3>
            <p>
              Valentine, an aviation professional, has had homes in Dubai,
              London, and Goa and has holidayed extensively in luxury hotels as
              well as holiday homes.
            </p>
            <p>
              His passion for his hometown Goa and the standards he expects
              wherever he is in the world inspired him to create Cupcake Homes:{" "}
              <em>truly Goan and truly international</em>.
            </p>
          </div>

          <div className="space-y-4 text-[#2C2C2C]/85">
            <h3 className="text-2xl text-[#2C2C2C]">
              Philosophy of Cupcake Homes
            </h3>
            <p>
              The idea is simple: enjoy the beauty of not rushing, of not
              needing plans for every hour, and of allowing a place to reveal
              itself instead of trying to consume it.
            </p>
            <p>
              Come experience Cupcake Homes and the hosting of what Goa truly
              is. We hope our graceful holiday homes bring out the best in you,
              and we look forward to welcoming you.
            </p>
          </div>

          <blockquote className="rounded-2xl border border-[#C2A878]/35 bg-white/70 px-6 py-5 italic text-[#2C2C2C] shadow-sm">
            &quot;You will be our personal guest, not just another
            check-in.&quot;
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="sticky top-24 overflow-hidden rounded-3xl border border-white/50 shadow-[0_8px_40px_rgba(0,0,0,0.05)]"
        >
          <Image
            src="/stay2e.avif"
            alt="Calm Goa coast view"
            width={900}
            height={1100}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </motion.div>
      </div>
    </section>
  );
}
