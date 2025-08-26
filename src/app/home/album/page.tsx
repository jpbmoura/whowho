"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePlayerStore } from "@/store/usePlayerStore";
import { useEffect, useState } from "react";
import { getTodayAlbum } from "@/services/album-service";
import type { Album } from "@/interfaces/album";
import mockImg from "@/assets/images/mock/400x400.png";
import Link from "next/link";
import VintageLoading from "@/components/ui/vintage-loading";

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

  useEffect(() => {
    if (todaysAlbum) {
      searchAlbum(`${todaysAlbum?.title}+${todaysAlbum?.artist}`);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todaysAlbum]);

  if (!todaysAlbum) {
    return (
      <VintageLoading
        title="📀 ALBUM DISCOVERY IN PROGRESS"
        subtitle="Excavating today's musical treasure"
        loadingSteps={[
          "Dusting off vinyl collections",
          "Consulting the musical archives",
          "Preparing your auditory journey",
        ]}
      />
    );
  }

  return (
    <div className="min-h-screen bg-vintage-100">
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 pb-12">
          <div className="text-center">
            <div className="inline-block border-3 border-vintage-800 bg-vintage-100 p-6 shadow-vintage mb-8 transform rotate-1">
              <h1 className="font-koulen text-4xl md:text-6xl text-vintage-950 tracking-wider mb-3">
                📀 ALBUM OF THE DAY
              </h1>
              <div className="h-1 bg-vintage-700 my-3"></div>
              <p className="vintage-text text-vintage-800 font-semibold text-lg tracking-wide">
                <Link
                  href="https://en.wikipedia.org/wiki/1001_Albums_You_Must_Hear_Before_You_Die"
                  target="_blank"
                  className="underline hover:font-bold hover:text-fox-700 transition-colors"
                >
                  From the 1001 Albums Collection • Est. 2005
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-vintage-50 border-3 border-vintage-700 shadow-vintage p-8 md:p-12 transform rotate-0">
            <div className="text-center mb-12">
              <h2 className="font-koulen text-3xl md:text-5xl text-vintage-950 tracking-wide mb-3">
                {todaysAlbum.title}
              </h2>
              <div className="inline-block border-2 border-fox-600 bg-fox-100 px-6 py-2 shadow-vintage">
                <p className="vintage-text text-xl md:text-2xl text-fox-800 font-bold">
                  by {todaysAlbum.artist}
                </p>
              </div>
              <div className="mt-6 h-px bg-vintage-600"></div>
            </div>

            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-2">
                <div className="relative group">
                  <div className="border-4 border-vintage-700 shadow-vintage bg-vintage-200 p-3 transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                    <Image
                      src={todaysAlbum.albumCover || mockImg}
                      alt={todaysAlbum.title}
                      width={400}
                      height={400}
                      className="w-full shadow-paper"
                    />
                  </div>

                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-vintage-950 rounded-full border-4 border-fox-600 shadow-vintage flex items-center justify-center">
                    <div className="w-4 h-4 bg-vintage-100 rounded-full"></div>
                  </div>
                </div>

                <div className="mt-8 bg-vintage-100 border-2 border-vintage-600 p-6 shadow-paper">
                  <h3 className="font-koulen text-xl text-vintage-950 mb-4 tracking-wide border-b border-vintage-400 pb-2">
                    📄 ALBUM ARCHIVES
                  </h3>
                  <div className="space-y-3 vintage-text">
                    <div className="flex justify-between border-b border-vintage-300 pb-2">
                      <strong className="text-vintage-950">Released:</strong>
                      <span className="text-vintage-800">
                        {todaysAlbum.released || "Unknown"}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-vintage-300 pb-2">
                      <strong className="text-vintage-950">Genre:</strong>
                      <span className="text-vintage-800">
                        {todaysAlbum.genre || "Various"}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-vintage-300 pb-2">
                      <strong className="text-vintage-950">Subgenre:</strong>
                      <span className="text-vintage-800">
                        {todaysAlbum.subgenre || "N/A"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <strong className="text-vintage-950">Label:</strong>
                      <span className="text-vintage-800">
                        {todaysAlbum.label || "Independent"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="bg-vintage-100 border-2 border-vintage-600 p-8 shadow-paper h-full">
                  <div className="border-2 border-fox-500 bg-fox-50 p-4 mb-6 shadow-vintage">
                    <h3 className="font-koulen text-lg text-fox-800 tracking-wide text-center">
                      🎼 MUSICAL HERITAGE NOTES 🎼
                    </h3>
                  </div>

                  <div className="vintage-text text-vintage-800 leading-relaxed space-y-4">
                    <p className="text-justify text-base md:text-lg first-letter:text-4xl first-letter:font-bold first-letter:text-fox-700 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                      {todaysAlbum.description ||
                        "This album represents a significant contribution to the musical landscape, offering listeners a journey through carefully crafted compositions that have stood the test of time. Each track tells a story, weaving together melodies and rhythms that continue to inspire artists and music lovers alike. A true testament to the enduring power of musical artistry."}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t-2 border-vintage-400">
                    <div className="text-center mb-4">
                      <div className="inline-block border border-vintage-600 bg-vintage-200 px-4 py-1 shadow-vintage">
                        <span className="vintage-text text-vintage-800 font-bold text-sm tracking-wider uppercase">
                          ► Explore This Masterpiece ◄
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        variant="primary"
                        className="font-koulen text-lg px-8 py-4 h-auto border-3 border-fox-800 shadow-vintage hover:shadow-paper transform hover:-rotate-1 transition-all"
                        onClick={() =>
                          window.open(
                            `https://www.youtube.com/watch?v=${videoId}`,
                            "_blank"
                          )
                        }
                      >
                        🎵 Listen on YouTube
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="font-koulen text-lg px-8 py-4 h-auto border-3 border-vintage-700 shadow-vintage hover:shadow-paper transform hover:rotate-1 transition-all"
                        onClick={() =>
                          window.open(todaysAlbum.wikipediaUrl, "_blank")
                        }
                      >
                        📖 Wikipedia Article
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block border-2 border-vintage-700 bg-vintage-200 px-6 py-3 shadow-vintage">
              <p className="vintage-text text-vintage-800 font-semibold text-sm tracking-wider">
                ♫ Discover • Listen • Appreciate • Repeat ♫
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
