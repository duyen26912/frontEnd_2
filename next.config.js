/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hanoilarosahotel.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig 