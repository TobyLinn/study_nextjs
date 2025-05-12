/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'], // 允许从 picsum.photos 加载图片
  },
};

module.exports = nextConfig;
