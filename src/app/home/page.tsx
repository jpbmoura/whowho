"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="">
      {/* Hero Section */}
      <div className="overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            {/* Main heading */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-7xl font-koulen text-gray-900 tracking-wide mb-6">
                DISCOVER THE CLASSICS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg md:text-xl modern-text text-gray-600 font-medium">
                Est. 2024 • Your Guide to Timeless Culture
              </p>
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6">
                1001<span className="gradient-text">+</span> Cultural Treasures
              </h3>
              <p className="text-lg md:text-xl modern-text text-gray-600 leading-relaxed">
                Uncover timeless{" "}
                <strong className="text-blue-600">albums</strong>, must-watch{" "}
                <strong className="text-purple-600">movies</strong>, and
                unforgettable{" "}
                <strong className="text-indigo-600">moments</strong> that will
                redefine your cultural journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => router.push("/home/album")}
                size="lg"
                variant="primary"
                className="text-xl md:text-2xl px-12 py-6 h-auto font-koulen tracking-wider font-normal"
              >
                Album of the Day
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-xl md:text-2xl px-12 py-6 h-auto font-koulen tracking-wider opacity-60 font-normal"
                disabled
              >
                Movie of the Day
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full mb-4">
        <div className="flex justify-center">
          <div className="glass rounded-full px-6 py-3">
            <p className="text-center modern-text text-gray-600 text-sm">
              Built with{" "}
              <span role="img" aria-label="heart" className="text-red-500">
                ❤️
              </span>{" "}
              by{" "}
              <a
                href="https://jotape.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                JP
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
