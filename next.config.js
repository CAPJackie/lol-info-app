/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ddragon.leagueoflegends.com", "cdn.lolskill.net"],
  },
};

module.exports = nextConfig;
