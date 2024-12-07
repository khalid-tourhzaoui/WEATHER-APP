"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { eye } from "@/app/utils/Icons";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Visibility() {
  const { forecast } = useGlobalContext();

  if (!forecast || !forecast?.visibility) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const { visibility } = forecast;

  const getVisibilityDescription = (visibility: number) => {
    const visibilityInKm = Math.round(visibility / 1000);

    if (visibilityInKm > 10) return "Excellent: Clear and vast view";
    if (visibilityInKm > 5) return "Good: Easily navigable";
    if (visibilityInKm > 2) return "Moderate: Some limitations";
    if (visibilityInKm <= 2) return "Poor: Restricted and unclear";
    return "Unavailable: Visibility data not available";
  };
  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border-2 border-white font-bold rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none"
    style={{background:"url('https://c1.wallpaperflare.com/preview/195/577/292/starfield-stars-space-universe-thumbnail.jpg')"}}>
      <div className="top">
        <h2 className="flex items-center gap-2">
          {eye} Visibility
        </h2>
        <p className="pt-4 text-2xl">{Math.round(visibility / 1000)} km</p>
        <p className="pt-4 text-sm">{getVisibilityDescription(visibility)}.</p>
      </div>
    </div>
  );
}

export default Visibility;
