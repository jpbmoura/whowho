import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: query,
          type: "video",
          maxResults: 1,
          key: API_KEY,
        },
      }
    );

    const videoId = response.data.items[0]?.id?.videoId;

    if (videoId) {
      return NextResponse.json({ videoId });
    } else {
      return NextResponse.json({ error: "No video found" }, { status: 404 });
    }
  } catch (error) {
    let errorMessage = "Unknown error occurred";

    if (axios.isAxiosError(error)) {
      errorMessage = error.response
        ? `YouTube API error: ${error.response.status} - ${error.response.statusText}`
        : `Axios error: ${error.message}`;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        error: "Failed to fetch video",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
