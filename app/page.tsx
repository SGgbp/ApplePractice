import { AnimatedSection } from "@/components/AnimatedSection";
import { DJCard } from "@/components/DJCard";
import { EventCard } from "@/components/EventCard";
import { Hero } from "@/components/Hero";
import { VIPPackageCard } from "@/components/VIPPackageCard";
import { djs } from "@/data/djs";
import { events } from "@/data/events";
import { vipPackages } from "@/data/vipPackages";
import Link from "next/link";

export default function Home() {
  return <main className="overflow-hidden text-white"><Hero /><AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="font-bold uppercase tracking-[.35em] text-fuchsia-300">The club</p><h2 className="mt-4 text-4xl font-black sm:text-6xl">Dark luxury, elite sound, unforgettable nights.</h2></div><p className="text-lg leading-8 text-white/65">Nocturne is a placeholder premium Nottingham nightlife brand built for conversion: high-impact events, fast VIP enquiries, mobile-first browsing and API-ready data modules for future ticketing, booking and social integrations.</p></div></AnimatedSection><AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-8 flex items-end justify-between gap-4"><h2 className="text-3xl font-black sm:text-5xl">Upcoming Events</h2><Link href="/events" className="text-sm font-bold text-cyan-200">View all</Link></div><div className="grid gap-6 md:grid-cols-3">{events.map(e=><EventCard key={e.id} event={e}/>)}</div></div></AnimatedSection><AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-black sm:text-5xl">VIP Tables</h2><div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{vipPackages.map(p=><VIPPackageCard key={p.name} pkg={p}/>)}</div></div></AnimatedSection><AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">{djs.map(d=><DJCard key={d.name} dj={d}/>)}</div></AnimatedSection></main>;
}
