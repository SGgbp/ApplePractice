export type VIPPackage = { name: string; price: string; accent: string; benefits: string[] };
export const vipPackages: VIPPackage[] = [
  { name: "Bronze", price: "From £150", accent: "from-amber-700 to-yellow-500", benefits: ["Queue jump", "Guestlist for 4", "Reserved booth", "Dedicated host"] },
  { name: "Silver", price: "From £300", accent: "from-slate-300 to-white", benefits: ["Queue jump", "Guestlist for 6", "Premium booth", "Bottle service"] },
  { name: "Gold", price: "From £550", accent: "from-yellow-300 to-amber-500", benefits: ["Priority entry", "Guestlist for 8", "Prime dancefloor booth", "2 premium bottles"] },
  { name: "Platinum", price: "Bespoke", accent: "from-fuchsia-400 to-cyan-300", benefits: ["Concierge arrival", "Guestlist for 12", "Private booth zone", "Custom bottle parade"] },
];
