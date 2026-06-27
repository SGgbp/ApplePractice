"use client";

import { motion } from "framer-motion";
import { CloudSun, Loader2, MapPin, ThermometerSun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type WeatherState = {
  temperature_2m?: number;
  apparent_temperature?: number;
  weather_code?: number;
  wind_speed_10m?: number;
};

const codeLabels: Record<number, string> = {
  0: "Clear",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Cloudy",
  45: "Foggy",
  48: "Foggy",
  51: "Light drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  80: "Showers",
  95: "Stormy",
};

export function LiveSignal() {
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=37.323&longitude=-122.0322&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Weather request failed");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data.current);
        setStatus("ready");
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  const condition = useMemo(() => {
    if (!weather?.weather_code && weather?.weather_code !== 0) {
      return "Live signal";
    }
    return codeLabels[weather.weather_code] ?? "Fresh air";
  }, [weather]);

  return (
    <motion.aside
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
      className="glass mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 rounded-[2rem] p-4 sm:grid-cols-3 sm:p-5"
      aria-label="Live Cupertino weather signal"
    >
      <div className="flex items-center gap-3 rounded-3xl bg-white/55 px-4 py-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-black text-white">
          <MapPin size={18} />
        </span>
        <div>
          <p className="text-sm font-medium text-neutral-500">Signal source</p>
          <p className="text-base font-semibold text-neutral-950">Cupertino, CA</p>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-3xl bg-white/55 px-4 py-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-sky-100 text-sky-700">
          {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : <ThermometerSun size={18} />}
        </span>
        <div>
          <p className="text-sm font-medium text-neutral-500">Live comfort</p>
          <p className="text-base font-semibold text-neutral-950">
            {status === "ready" && weather?.temperature_2m
              ? `${Math.round(weather.temperature_2m)}F, feels ${Math.round(weather.apparent_temperature ?? weather.temperature_2m)}F`
              : status === "error"
                ? "Offline demo mode"
                : "Checking now"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-3xl bg-white/55 px-4 py-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-100 text-amber-700">
          <CloudSun size={18} />
        </span>
        <div>
          <p className="text-sm font-medium text-neutral-500">Mood engine</p>
          <p className="text-base font-semibold text-neutral-950">{condition}</p>
        </div>
      </div>
    </motion.aside>
  );
}
