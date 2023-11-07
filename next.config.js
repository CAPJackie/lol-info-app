/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "ddragon.leagueoflegends.com",
      },
      {
        hostname: "cdn.lolskill.net",
      },
    ],
  },
};

module.exports = nextConfig;
