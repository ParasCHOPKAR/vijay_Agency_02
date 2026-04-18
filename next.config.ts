import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export and creates the 'out' folder
  
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    unoptimized: true, // Required to be 'true' for static exports
  },

  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;