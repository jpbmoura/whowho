"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full bg-vintage-50 border-b-4 border-vintage-700">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center md:py-16 py-8 px-4">
          <div className="text-center mb-8">
            <div className="inline-block border-2 border-vintage-800 bg-vintage-100 p-6 shadow-vintage">
              <h2 className="md:text-5xl text-2xl font-koulen text-vintage-950 tracking-wide mb-3">
                DISCOVER THE CLASSICS
              </h2>
              <div className="h-px bg-vintage-700 my-3"></div>
              <p className="md:text-xl text-sm vintage-text text-vintage-800 font-medium tracking-wide">
                Est. 2024 • Your Guide to Timeless Culture
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center max-w-4xl">
            <h3 className="md:text-3xl text-lg vintage-text text-vintage-950 font-bold">
              1001<span className="text-fox-700">+</span> Cultural Treasures
            </h3>
            <p className="max-w-[700px] mx-auto vintage-text md:text-lg text-sm leading-relaxed text-vintage-800">
              Uncover timeless <strong className="text-fox-700">albums</strong>,
              must-watch <strong className="text-fox-700">movies</strong>, and
              unforgettable <strong className="text-fox-700">moments</strong>{" "}
              that will redefine your cultural journey.
            </p>
          </div>

          <div className="flex md:flex-row flex-col gap-6 md:gap-12 md:mt-16 mt-10">
            <Button
              onClick={() => router.push("/home/album")}
              size="lg"
              variant="primary"
              className="text-xl md:text-2xl px-12 py-6 h-auto font-koulen tracking-wider border-3 border-fox-800 shadow-vintage hover:shadow-paper transition-all"
            >
              Album of the Day
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="text-xl md:text-2xl px-12 py-6 h-auto font-koulen tracking-wider border-3 border-panda-500 shadow-vintage opacity-60"
              disabled
            >
              Movie of the Day
            </Button>
          </div>
        </div>
      </div>

      <div className=" mx-auto flex justify-center fixed bottom-0 w-full mb-4">
        <p className="text-center vintage-text text-vintage-700 text-sm">
          Built with{" "}
          <span role="img" aria-label="heart" className="text-fox-600">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="https://jotape.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:font-bold hover:text-fox-700 transition-colors"
          >
            JP
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
