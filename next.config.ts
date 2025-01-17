import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "cdn2.albumoftheyear.org",
      },
    ],
  },

  /* config options here */
};

export default nextConfig;
