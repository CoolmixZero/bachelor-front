/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.scdn.co"
      },
      {
        hostname: "m.media-amazon.com"
      }
    ]
  }
};

export default nextConfig;
