"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play, ShoppingBag } from "lucide-react";
import { LiveSignal } from "@/components/LiveSignal";
import { ProductShowcase } from "@/components/ProductShowcase";

const navItems = ["Overview", "Design", "Signal", "Compare"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-neutral-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/72 backdrop-blur-2xl">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="text-sm font-semibold tracking-tight">
            ApplePractice
          </a>
          <div className="hidden items-center gap-7 text-xs font-medium text-neutral-600 sm:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-neutral-950">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#compare"
            className="inline-flex h-8 items-center gap-1.5 rounded-full bg-neutral-950 px-3 text-xs font-semibold text-white transition hover:bg-neutral-800"
          >
            <ShoppingBag size={14} />
            Try it
          </a>
        </nav>
      </header>

      <section id="overview" className="relative flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute bottom-8 right-10 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mb-5 text-sm font-semibold text-neutral-500"
            >
              Fictional flagship
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.75, ease: "easeOut" }}
              className="mx-auto max-w-4xl text-6xl font-semibold leading-[0.94] text-neutral-950 sm:text-7xl lg:mx-0 lg:text-8xl"
            >
              Luma One
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.75, ease: "easeOut" }}
              className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-neutral-600 lg:mx-0"
            >
              A clean product story built with Next.js, Tailwind CSS, Framer Motion, and a live no-key weather API.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7, ease: "easeOut" }}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <a
                href="#design"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Explore design
                <ArrowDown size={17} />
              </a>
              <button className="inline-flex h-12 items-center gap-2 rounded-full bg-white/70 px-6 text-sm font-semibold text-neutral-950 shadow-sm backdrop-blur transition hover:bg-white">
                <Play size={17} fill="currentColor" />
                Watch motion
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            <div className="absolute -inset-8 rounded-full bg-white/45 blur-3xl" />
            <div className="device-shine relative aspect-square overflow-hidden rounded-full border border-white/70 shadow-glow">
              <div className="noise absolute inset-0 opacity-35" />
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 h-[72%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-[2.7rem] border border-white/80 bg-gradient-to-br from-white via-slate-100 to-slate-300 shadow-2xl"
              >
                <div className="absolute left-1/2 top-4 h-6 w-24 -translate-x-1/2 rounded-full bg-neutral-950" />
                <div className="absolute inset-x-7 top-20 h-32 rounded-[1.6rem] bg-neutral-950" />
                <div className="absolute bottom-8 left-1/2 h-2 w-24 -translate-x-1/2 rounded-full bg-neutral-400/35" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="signal" className="px-5 py-8 sm:px-8">
        <LiveSignal />
      </section>

      <ProductShowcase />

      <section id="compare" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-neutral-950 p-8 text-white sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold text-white/50">Practice brief</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-6xl">
                Premium layout, original brand, real frontend stack.
              </h2>
            </div>
            <div className="grid gap-3 text-sm text-white/72 sm:grid-cols-3">
              {["Next.js", "Tailwind", "Framer Motion"].map((item) => (
                <div key={item} className="rounded-3xl bg-white/10 p-5">
                  <p className="font-semibold text-white">{item}</p>
                  <p className="mt-2 leading-6">Used directly in the project.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
