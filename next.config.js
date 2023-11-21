/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
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
