/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'studylzl.oss-cn-beijing.aliyuncs.com',
      },
    ],
  },
  output: 'standalone',
};

module.exports = nextConfig;
