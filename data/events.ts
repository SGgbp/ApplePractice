export type Event = { id: string; name: string; date: string; time: string; dj: string; genre: string; category: "This Week" | "Weekend" | "Special Events"; image: string; cta: string };
export const eventFilters = ["This Week", "Weekend", "Special Events"] as const;
export const events: Event[] = [
  { id: "neon-friday", name: "Neon Friday Sessions", date: "Friday 10 July", time: "10PM - 4AM", dj: "DJ Nova & MC Kairo", genre: "Hip-Hop / R&B / Afrobeats", category: "Weekend", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80", cta: "Tickets & Tables" },
  { id: "velvet-vault", name: "The Velvet Vault", date: "Saturday 11 July", time: "9PM - 4AM", dj: "Mia Sol", genre: "House / Commercial", category: "Special Events", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80", cta: "Reserve VIP" },
  { id: "after-dark", name: "After Dark Thursdays", date: "Thursday 16 July", time: "10PM - 3AM", dj: "Jay Vibe", genre: "R&B / Hip-Hop", category: "This Week", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80", cta: "Join Guestlist" },
];
