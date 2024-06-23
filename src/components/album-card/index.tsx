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
import { getAlbumDetails } from "@/utils/actions";
import React from "react";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import SpotifyImage from "@/assets/spotify/icons/02_CMYK/02_PNG/Spotify_Icon_CMYK_White.png";
import { Badge } from "../ui/badge";
import { Span } from "next/dist/trace";

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

  const [albumDetails, setAlbumDetails] = React.useState<Album>();

  const handleGetAlbumDetails = async (albumId: string) => {
    if (!session) {
      console.error("No session found");
      return redirect("/");
    }
    setAlbumDetails(await getAlbumDetails(session, albumId));
  };

  console.log(albumDetails, "albumDetails");

  return (
    <Sheet>
      <SheetTrigger onClick={() => handleGetAlbumDetails(album.id)}>
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
        <SheetHeader className="h-full">
          <SheetDescription className="flex flex-col gap-4 h-full">
            <div className="w-full flex flex-col justify-center items-center">
              <Image
                className="mb-2"
                width={250}
                height={250}
                alt={`${album.name} Album Cover`}
                src={album.images[0].url}
              />
              <span>
                <StarRating rating={2} />
              </span>
            </div>

            <div>
              <SheetTitle className="text-white text-center">
                {album.name}
              </SheetTitle>

              <span className="flex justify-center text-white text-center font-thin">
                {album.artists.map((artist) => artist.name).join(", ")}
              </span>

              <span>
                {albumDetails?.genres?.length != 0 ? (
                  albumDetails?.genres?.map((genre) => (
                    <span key={genre}>
                      <Badge className="mr-2" variant={"outline"}>
                        {genre}
                      </Badge>
                    </span>
                  ))
                ) : (
                  <Badge className="mr-2" variant={"outline"}>
                    No Genre
                  </Badge>
                )}
              </span>
            </div>

            <div className="h-full flex flex-col justify-between flex-grow">
              <ScrollArea className="rounded-md flex-grow md:max-h-[230px] max-h-180px">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Plays</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {albumDetails?.tracks?.items.map((track, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell className="flex flex-row items-center gap-2">
                          {track.name}
                          {track.explicit && (
                            <Badge className="" variant={"purple"}>
                              EXPLICT
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{track.duration_ms}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="text-white text-end font-thin text-[0.6rem] flex flex-col mt-6">
                  {albumDetails?.copyrights?.map((copy) => (
                    <span key={copy.type}>{copy.text} </span>
                  ))}
                </div>
              </ScrollArea>

              <Button
                className="w-full bg-green-500 hover:bg-green-600 transition-colors"
                onClick={() => window.open(album.external_urls.spotify)}
              >
                <Image
                  className="mr-2"
                  alt="Spotify Logo"
                  width={20}
                  height={20}
                  src={SpotifyImage}
                />
                Listen on Spotify
              </Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AlbumCard;
