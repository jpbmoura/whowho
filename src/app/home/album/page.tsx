import Image from "next/image";

import mockImage from "@/assets/images/mock/bobdylan.png";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { AiOutlineCaretDown } from "react-icons/ai";

const albumOfTheDayMock = {
  title: "The Freewheelin' Bob Dylan",
  artist: "Bob Dylan",
  albumCover: mockImage,
  released: "1964",
  genre: "Folk",
  subgenre: "Folk",
  label: "Columbia",
  description: `"The Freewheelin' Bob Dylan," released in 1963, is Bob Dylan's second studio album and a landmark in the folk music genre. Featuring a blend of original compositions and traditional folk songs, the album showcases Dylan's poetic lyricism and distinctive voice. It includes iconic tracks such as "Blowin' in the Wind" and "Girl from the North Country," which address social issues and personal introspection. The album's raw, acoustic sound and powerful storytelling helped to redefine the boundaries of popular music, establishing Dylan as a leading figure in the folk revival and influencing countless artists in the years to come.`,
  spotifyUrl:
    "https://open.spotify.com/album/3GmwKB1tgPZgXeRJZSm9WX?si=SG9Q-hr8RiaFl_dbZk3wlQ",
  wikipediaUrl: "https://en.wikipedia.org/wiki/The_Freewheelin%27_Bob_Dylan",
};

const Album = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="pb-8 flex flex-col justify-center items-center gap-2">
        <a
          href="https://en.wikipedia.org/wiki/1001_Albums_You_Must_Hear_Before_You_Die"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-2xl underline hover:text-indigo-700 transition-colors gap-1 flex flex-row items-start"
        >
          <span className="text-center">
            1001 Albums You Must Hear Before You Die
          </span>

          <LiaExternalLinkAltSolid className="size-4 md:block hidden" />
        </a>
        <h2 className="text-xl font-light ">Today&apos;s Album</h2>
        <AiOutlineCaretDown className="m-0 p-0 animate-bounce" />
      </div>

      <div className="flex m-auto flex-col items-center gap-4 max-w-2xl border border-black py-4 px-6 shadow-blocked dark:border-zinc-800 bg-white mb-12">
        <h3 className="font-bold text-xl text-center">
          {albumOfTheDayMock.artist} - {albumOfTheDayMock.title}
        </h3>
        <div className="flex md:flex-row flex-col gap-8">
          <div className="space-y-4 w-1/2 m-auto md:m-0">
            <Image
              src={albumOfTheDayMock.albumCover}
              alt={albumOfTheDayMock.title}
              width={200}
              height={200}
              className="shadow-blocked"
            />
            <div>
              <p>
                <strong>Released:</strong> {albumOfTheDayMock.released}
              </p>

              <p>
                <strong>Genre:</strong> {albumOfTheDayMock.genre}
              </p>
              <p>
                <strong>Subgenre:</strong> {albumOfTheDayMock.subgenre}
              </p>
              <p>
                <strong>Label:</strong> {albumOfTheDayMock.label}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-between items-end">
            <p className="text-justify text-sm">
              {albumOfTheDayMock.description}
            </p>

            <span className="space-x-2">
              <a
                href={albumOfTheDayMock.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:font-bold hover:text-indigo-700"
              >
                Spotify
              </a>

              <a
                href={albumOfTheDayMock.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:font-bold hover:text-indigo-700"
              >
                Wikipedia
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
