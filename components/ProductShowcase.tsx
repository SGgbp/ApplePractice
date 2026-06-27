"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BatteryCharging, Camera, Sparkles, Waves } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Sparkles,
    title: "Adaptive glass",
    text: "A luminous shell that shifts softly with the light around it.",
  },
  {
    icon: Camera,
    title: "Quiet capture",
    text: "A camera bar designed for focus, depth, and calmer everyday shooting.",
  },
  {
    icon: BatteryCharging,
    title: "All-day rhythm",
    text: "Power visuals and motion made to feel effortless from morning to night.",
  },
  {
    icon: Waves,
    title: "Spatial sound",
    text: "A practice landing page detail section with premium editorial pacing.",
  },
];

export function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-7, 0, 7]);

  return (
    <section ref={ref} id="design" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="mb-4 text-sm font-semibold text-neutral-500"
          >
            Luma One
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.08 }}
            className="max-w-xl text-4xl font-semibold leading-[1.02] text-neutral-950 sm:text-6xl"
          >
            Built for practice. Styled for precision.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-8 text-neutral-600"
          >
            A fictional product page focused on restraint, motion, responsive spacing, and a live public API touch.
          </motion.p>
        </div>

        <motion.div style={{ y, rotate }} className="mx-auto w-full max-w-md">
          <div className="device-shine relative aspect-[0.72] overflow-hidden rounded-[3rem] border border-white/80 shadow-glow">
            <div className="noise absolute inset-0 opacity-40" />
            <div className="absolute left-1/2 top-5 h-7 w-28 -translate-x-1/2 rounded-full bg-neutral-950/90" />
            <div className="absolute inset-x-8 top-24 h-44 rounded-[2rem] bg-gradient-to-br from-neutral-950 via-neutral-800 to-neutral-600 shadow-2xl">
              <div className="absolute left-5 top-5 h-16 w-16 rounded-full border border-white/15 bg-white/10" />
              <div className="absolute bottom-5 right-5 h-12 w-12 rounded-full bg-white/20" />
            </div>
            <div className="absolute bottom-10 left-8 right-8">
              <div className="mb-3 h-3 w-28 rounded-full bg-neutral-950/20" />
              <div className="h-3 w-44 rounded-full bg-neutral-950/12" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[1.7rem] border border-white/70 bg-white/62 p-6 shadow-sm backdrop-blur"
          >
            <feature.icon className="mb-6 text-neutral-950" size={24} />
            <h3 className="text-lg font-semibold text-neutral-950">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{feature.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
