import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.s3.amazonaws.com", 'images.unsplash.com'],
  },
};

export default withNextVideo(nextConfig);