"use client";

import Image from "next/image";

import { LoaderPinwheel } from "lucide-react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { AiOutlineCaretDown } from "react-icons/ai";
import { usePlayerStore } from "@/store/usePlayerStore";
import { useEffect, useState } from "react";
import { getTodayAlbum } from "@/services/album-service";
import gradient from "@/assets/images/gray-gradient.png";
import type { Album } from "@/interfaces/album";
import WhowhoContainer from "@/components/ui/whowho-container";
import mockImg from "@/assets/images/mock/400x400.png";

const Album = () => {
  const { setVideoId, videoId } = usePlayerStore();
  const [todaysAlbum, setTodaysAlbum] = useState<Album>();

  const searchAlbum = async (albumName: string) => {
    try {
      const response = await fetch(
        `/api/youtube-search?query=${encodeURIComponent(albumName)}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch video: ${response.statusText}`);
      }
      const data = await response.json();
      setVideoId(data.videoId);
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  const handleGetTodayAlbum = async () => {
    const data = await getTodayAlbum();
    setTodaysAlbum(data);
  };

  useEffect(() => {
    handleGetTodayAlbum();
  }, []);

  // useEffect(() => {
  //   searchAlbum(`${todaysAlbum?.title}+${todaysAlbum?.artist}`);

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [videoId]);

  // if (!todaysAlbum) {
  //   return (
  //     <div className="flex justify-center pt-16">
  //       <LoaderPinwheel className="animate-spin" />
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col">
      <div
        style={{
          backgroundImage: `url(${gradient.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-full flex flex-col justify-center items-center md:py-12 py-6"
      >
        <h2 className="font-bold text-3xl">Album of the Day</h2>
        <WhowhoContainer>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-4">
              <Image
                src={todaysAlbum?.albumCover || mockImg}
                alt={"teste"}
                width={200}
                height={200}
                className="shadow-blocked"
              />

              <div className="flex flex-col leading-tight">
                <span>
                  <b>Released: </b>
                  {todaysAlbum?.released}
                </span>
                <span>
                  <b>Genre: </b>
                  {todaysAlbum?.genre}
                </span>
                <span>
                  <b>Subgenre: </b>
                  {todaysAlbum?.subgenre}
                </span>
                <span>
                  <b>Label: </b>
                  {todaysAlbum?.label}
                </span>
              </div>
            </div>

            <div>
              <div className="flex flex-col text-base leading-tight">
                <h4 className="font-bold">{todaysAlbum?.title}</h4>
                <span>{todaysAlbum?.artist}</span>
              </div>
              <div className="text-">{todaysAlbum?.description}</div>
            </div>
          </div>
        </WhowhoContainer>
      </div>
    </div>

    // <div className="flex flex-col w-full items-center justify-center">
    //   <div className="pb-8 flex flex-col justify-center items-center gap-2">
    //     <a
    //       href="https://en.wikipedia.org/wiki/1001_Albums_You_Must_Hear_Before_You_Die"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="font-bold text-2xl underline hover:text-indigo-700 transition-colors gap-1 flex flex-row items-start"
    //     >
    //       <span className="text-center">
    //         1001 Albums You Must Hear Before You Die
    //       </span>

    //       <LiaExternalLinkAltSolid className="size-4 md:block hidden" />
    //     </a>
    //     <h2 className="text-xl font-light ">Today&apos;s Album</h2>
    //     <AiOutlineCaretDown className="m-0 p-0 animate-bounce" />
    //   </div>

    //   <div className="flex m-auto flex-col items-center gap-4 max-w-2xl border border-black py-4 px-6 shadow-blocked dark:border-zinc-800 bg-white mb-12">
    //     <h3 className="font-bold text-xl text-center">
    //       {todaysAlbum.artist} - {todaysAlbum.title}
    //     </h3>
    //     <div className="flex md:flex-row flex-col gap-8">
    //       <div className="space-y-4 w-1/2 m-auto md:m-0">
    //         <Image
    //           src={todaysAlbum.albumCover}
    //           alt={todaysAlbum.title}
    //           width={400}
    //           height={400}
    //           className="shadow-blocked"
    //         />
    //         <div>
    //           <p>
    //             <strong>Released:</strong> {todaysAlbum.released}
    //           </p>

    //           <p>
    //             <strong>Genre:</strong> {todaysAlbum.genre}
    //           </p>
    //           <p>
    //             <strong>Subgenre:</strong> {todaysAlbum.subgenre}
    //           </p>
    //           <p>
    //             <strong>Label:</strong> {todaysAlbum.label}
    //           </p>
    //         </div>
    //       </div>

    //       <div className="w-full flex flex-col justify-between items-end">
    //         <p className="text-justify text-sm">{todaysAlbum.description}</p>

    //         <span className="space-x-2">
    //           <a
    //             href={`https://www.youtube.com/watch?v=${videoId}`}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="underline hover:font-bold hover:text-indigo-700"
    //           >
    //             Youtube
    //           </a>

    //           <a
    //             href={todaysAlbum.wikipediaUrl}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="underline hover:font-bold hover:text-indigo-700"
    //           >
    //             Wikipedia
    //           </a>
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Album;
