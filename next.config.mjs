/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { protocol: "https", hostname: "assets.aceternity.com" },
          { protocol: "https", hostname: "aceternity.com" },
          { protocol: "https", hostname: "pbs.twimg.com" },
        ],
        domains: [
          "api.microlink.io", // Microlink Image Preview
        ],
      },
};

export default nextConfig;
