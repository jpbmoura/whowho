"use client";

import { usePlayerStore } from "@/store/usePlayerStore";

const YoutubeIframe = () => {
  const { videoId } = usePlayerStore();

  return (
    <>
      <div className="border-black shadow-blocked self-center">
        <iframe
          width={280}
          height={157.5}
          src={`https://www.youtube.com/watch?v=${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default YoutubeIframe;
