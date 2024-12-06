"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { people } from "@/app/utils/Icons";
import { formatNumber } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Population() {
  const { fiveDayForecast } = useGlobalContext();
  const { city } = fiveDayForecast;

  if (!fiveDayForecast || !city) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border-2 border-white rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none"
    style={{background:"url('https://c4.wallpaperflare.com/wallpaper/349/372/16/space-tylercreatesworlds-space-art-digital-art-wallpaper-preview.jpg')"}}>
      <div className="top">
        <h2 className="flex items-center gap-2 font-bold">
          {people} Population
        </h2>
        <p className="pt-2 text-2xl">{formatNumber(city.population)}</p>
      </div>
      <p className="text-sm">Latest UN population data for {city.name}.</p>
    </div>
  );
}

export default Population;
