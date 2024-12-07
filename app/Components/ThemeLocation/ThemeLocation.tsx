"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LocateIcon } from "lucide-react";
import { useGlobalContextUpdate } from "@/app/context/globalContext";

function ThemeLocation() {
  const { setActiveCityCoords } = useGlobalContextUpdate();

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setActiveCityCoords([lat, lon]);
        },
        (error) => {
          console.error("Error fetching location:", error.message);
          alert("Unable to fetch location. Please enable location services.");
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="source-code-btn"
          size="icon"
          onClick={getCurrentLocation}
        >
          <LocateIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Get Current Location</span>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}

export default ThemeLocation;
