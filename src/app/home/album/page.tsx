"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePlayerStore } from "@/store/usePlayerStore";
import { useEffect, useState } from "react";
import { getTodayAlbum } from "@/services/album-service";
import type { Album } from "@/interfaces/album";
import mockImg from "@/assets/images/mock/400x400.png";
import { useRouter } from "next/navigation";

const Album = () => {
  const { setVideoId, videoId } = usePlayerStore();
  const [todaysAlbum, setTodaysAlbum] = useState<Album>();
  const router = useRouter();

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
      <div className="mt-36 flex items-center justify-center ">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl md:text-3xl font-koulen text-gray-900 mb-4">
            📀 ALBUM DISCOVERY IN PROGRESS
          </h2>
          <p className="modern-text text-gray-600">
            Excavating today&apos;s musical treasure
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass rounded-2xl p-8 md:p-12 relative">
            {/* Back Arrow */}
            <button
              onClick={() => router.push("/home")}
              className="border-2 border-gray-200 absolute top-6 left-6 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="text-center mb-12">
              <h2 className="font-koulen text-3xl md:text-5xl text-gray-900 tracking-wide mb-2">
                {todaysAlbum.title}
              </h2>
              <div className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg">
                <p className="text-lg md:text-xl font-semibold">
                  by {todaysAlbum.artist}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-2">
                <div className="relative group">
                  <div className="bg-white rounded-2xl p-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 card-hover">
                    <Image
                      src={todaysAlbum.albumCover || mockImg}
                      alt={todaysAlbum.title}
                      width={400}
                      height={400}
                      className="w-full rounded-xl"
                    />
                  </div>

                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="mt-8 glass rounded-xl p-6">
                  <h3 className="font-koulen text-xl text-gray-900 mb-6 tracking-wide border-b border-gray-200 pb-3">
                    📄 ALBUM DETAILS
                  </h3>
                  <div className="space-y-4 modern-text">
                    <div className="flex justify-between items-center py-2">
                      <strong className="text-gray-700">Released:</strong>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {todaysAlbum.released || "Unknown"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <strong className="text-gray-700">Genre:</strong>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {todaysAlbum.genre || "Various"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <strong className="text-gray-700">Subgenre:</strong>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {todaysAlbum.subgenre || "N/A"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <strong className="text-gray-700">Label:</strong>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {todaysAlbum.label || "Independent"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="glass rounded-xl p-8 h-full">
                  <div className="bg-blue-600 text-white p-6 mb-8 rounded-xl text-center">
                    <h3 className="font-koulen text-lg tracking-wide">
                      ALBUM LEGACY & IMPACT
                    </h3>
                  </div>

                  <div className="modern-text text-gray-700 leading-relaxed space-y-4">
                    <p className="text-justify text-base md:text-lg first-letter:text-4xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                      {todaysAlbum.description ||
                        "This album represents a significant contribution to the musical landscape, offering listeners a journey through carefully crafted compositions that have stood the test of time. Each track tells a story, weaving together melodies and rhythms that continue to inspire artists and music lovers alike. A true testament to the enduring power of musical artistry."}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-center mb-6">
                      <div className="inline-block bg-gray-100 px-6 py-2 rounded-full">
                        <span className="modern-text text-gray-700 font-semibold text-sm tracking-wider uppercase">
                          ► Explore This Masterpiece ◄
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        variant="primary"
                        className="font-koulen text-lg font-normal px-8 py-4 h-auto"
                        onClick={() =>
                          window.open(
                            `https://www.youtube.com/watch?v=${videoId}`,
                            "_blank"
                          )
                        }
                      >
                        Listen on YouTube
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="font-koulen text-lg px-8 py-4 h-auto font-normal"
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
            <div className="glass rounded-full px-8 py-4">
              <p className="modern-text text-gray-600 font-semibold text-sm tracking-wider">
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
