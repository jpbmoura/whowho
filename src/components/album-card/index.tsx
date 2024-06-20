"use client";

import Image, { StaticImageData } from "next/image";
import StarRating from "../ui/start-rating";
import { Album, Artist } from "@/types/types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { getAlbumTracks } from "@/utils/actions";
import React from "react";
import { redirect } from "next/navigation";

type AlbumCardProps = {
  album: Album;
  rating?: number;
  size?: "small" | "medium" | "large";
  session: any;
};

const AlbumCard = ({
  session,
  album,
  rating,
  size = "medium",
}: AlbumCardProps) => {
  const albumSize = () => {
    switch (size) {
      case "small":
        return 150;
      case "medium":
        return 250;
      case "large":
        return 300;
      default:
        return 250;
    }
  };

  const [albumTracks, setAlbumTracks] = React.useState<Album>();

  const handleGetAlbumTracks = async (albumId: string) => {
    if (!session) {
      console.error("No session found");
      return redirect("/");
    }
    setAlbumTracks(await getAlbumTracks(session, albumId));
  };

  console.log(albumTracks);

  return (
    <Sheet>
      <SheetTrigger onClick={() => handleGetAlbumTracks(album.id)}>
        <div className="flex flex-col items-start text-left hover:outline rounded-lg p-2 transition-transform">
          <Image
            className="mb-2"
            width={albumSize()}
            height={albumSize()}
            alt={`${album.name} Album Cover`}
            src={album.images[0].url}
          />
          <span>{rating && <StarRating rating={rating} />}</span>
          <span className="font-thin">{album.name}</span>
          <span className="font-medium text-sm">{album.artists[0].name}</span>
          <span className="font-thin text-sm">{album.release_date}</span>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-neutral-900 border-none text-white">
        <SheetHeader>
          <SheetTitle className="text-white">{album.name}</SheetTitle>
          <SheetDescription className="space-y-4">
            <span className="">
              {album.artists.map((artist) => artist.name).join(", ")}
            </span>
            <div className="w-full flex flex-col justify-center items-center">
              <Image
                className="mb-2"
                width={200}
                height={200}
                alt={`${album.name} Album Cover`}
                src={album.images[0].url}
              />
            </div>

            <ScrollArea className="rounded-md">
              {albumTracks?.tracks?.items.map((track, index) => (
                <div key={index} className="flex flex-row justify-between">
                  <span>
                    {index + 1} - {track.name}
                  </span>
                </div>
              ))}
            </ScrollArea>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AlbumCard;
