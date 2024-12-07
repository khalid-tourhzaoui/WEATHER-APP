"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { thermometer } from "@/app/utils/Icons";
import { kelvinToCelsius } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function FeelsLike() {
  const { forecast } = useGlobalContext();

  if (!forecast || !forecast?.main || !forecast?.main?.feels_like) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const { feels_like, temp_min, temp_max } = forecast?.main;

  const feelsLikeText = (
    feelsLike: number,
    minTemo: number,
    maxTemp: number
  ) => {
    const avgTemp = (minTemo + maxTemp) / 2;

    if (feelsLike < avgTemp - 5) {
      return "Colder than actual temperature.";
    }
    if (feelsLike > avgTemp - 5 && feelsLike <= avgTemp + 5) {
      return "Feels close to the actual temperature.";
    }
    if (feelsLike > avgTemp + 5) {
      return "Warmer than actual temperature.";
    }

    return "Temperature feeling is typical for this range.";
  };

  const feelsLikeDescription = feelsLikeText(feels_like, temp_min, temp_max);

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border-2 border-white font-bold rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none"
    style={{background:"url('https://c1.wallpaperflare.com/preview/195/577/292/starfield-stars-space-universe-thumbnail.jpg')"}}>
      <div className="top">
        <h2 className="flex items-center gap-2">
          {thermometer} Feels Like
        </h2>
        <p className="pt-3 text-2xl">{kelvinToCelsius(feels_like)}°</p>
        <p className="pt-2 text-sm">{feelsLikeDescription}</p>
      </div>

    </div>
  );
}

export default FeelsLike;
