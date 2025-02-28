/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.imagekit.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ipfs.io",
      },
      {
        protocol: "http",
        hostname: "ipfs.io",
      },
      {
        protocol: "https",
        hostname: "**.pexels.com",
      },
      {
        protocol: "http",
        hostname: "**.pexels.com",
      },
      {
        protocol: "http",
        hostname: "**.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
