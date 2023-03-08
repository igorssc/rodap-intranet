/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "flowbite.com",
      "source.unsplash.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
