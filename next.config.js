/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow images from other domains
  images: {
    domains: ["dummyimage.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
