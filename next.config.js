/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos', 'giphy.com','media1.giphy.com', 'media3.giphy.com', 'media2.giphy.com', 'media4.giphy.com'],
  },
}

module.exports = nextConfig
