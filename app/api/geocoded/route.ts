import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

// Use environment variable for API key
export async function GET(req: NextRequest) {
  try {
    // Use environment variable instead of hardcoded key
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

    // Get the city name from the request parameters
    const searchParams = req.nextUrl.searchParams;
    const city = searchParams.get("search");

    // Construct the API URL
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    // Make the API request using axios
    const res = await axios.get(url);

    // Return the geocoded data
    return NextResponse.json(res.data);
  } catch (error) {
    console.log("Error fetching geocoded data");
    return new Response("Error fetching geocoded data", { status: 500 });
  }
}
