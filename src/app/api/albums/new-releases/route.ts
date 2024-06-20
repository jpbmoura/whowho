import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";

export async function GET() {
  const { sessionId } = auth();

  if (!sessionId) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const template = "test";

  const token = await clerkClient.sessions.getToken(sessionId, template);

  return Response.json({ token });
  // const userToken = await userAuth.getToken();
  // const getAlbumUrl = "https://api.spotify.com/v1/browse/new-releases";

  // console.warn("TESTANDOO:", userToken);
  // try {
  //   const response = await fetch(getAlbumUrl, {
  //     headers: {
  //       Authorization: `Bearer ${userToken}`,
  //     },
  //   });
  //   const data = await response.json();
  //   console.log("Spotify API response:", data);
  //   return new Response(JSON.stringify(data), {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // } catch (error) {
  //   console.error("Error fetching Spotify albums:", error);
  // }
}
