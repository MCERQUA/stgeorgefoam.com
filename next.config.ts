import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: ["*.jam-bot.com"],
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
