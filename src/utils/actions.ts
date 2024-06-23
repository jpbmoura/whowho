import { Album, AuthSession } from "@/types/types";
import { customGet } from "./server-utils";

export const getNewReleases = async (
  session: AuthSession
): Promise<Album[]> => {
  return customGet(
    "https://api.spotify.com/v1/search?limit=24&q=tag%3Anew&type=album&market=US",
    session
  ).then((data) => data.albums.items);
};

export const getRandomAlbum = async (
  session: AuthSession
): Promise<Album[]> => {
  return customGet(
    "https://api.spotify.com/v1/search?limit=20&q=tag%3Anew&type=album",
    session
  ).then((data) => data.albums.items);
};

export const getAlbumDetails = async (
  session: AuthSession,
  albumId: string
) => {
  return customGet(
    `https://api.spotify.com/v1/albums/${albumId}`,
    session
  ).then((data) => {
    console.log("album data: ", data);
    return data;
  });
};
