import { getWeatherData } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getWeatherData();
  return NextResponse.json(data);
}

// Cache for 60 seconds on the server-side
export const revalidate = 60;
