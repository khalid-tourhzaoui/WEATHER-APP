// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   try {
//     const searchParams = req.nextUrl.searchParams;

//     const lat = searchParams.get("lat");
//     const lon = searchParams.get("lon");

//     const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`;

//     const res = await fetch(url, {
//       next: { revalidate: 900 },
//     });

//     const uvData = await res.json();

//     return NextResponse.json(uvData);
//   } catch (error) {
//     console.log("Error Getting Uv Data");

//     return new Response("Error getting Uv Data", { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from "next/server";

// This function handles getting UV data from Open-Meteo API
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;

    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");


    // Construct URL for Open-Meteo request (without needing API key)
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`;

    // Fetch data from Open-Meteo API
    const res = await fetch(url, {
      next: { revalidate: 900 }, // Cache data for 15 minutes
    });

    const uvData = await res.json();

    // Return the UV data as a JSON response
    return NextResponse.json(uvData);
  } catch (error) {
    console.log("Error Getting UV Data");

    // Return an error response if something goes wrong
    return new Response("Error getting UV Data", { status: 500 });
  }
}
