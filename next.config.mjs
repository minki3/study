/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        //"https://cdn2.thedogapi.com/"
        protocol: 'https',
        hostname: 'cdn2.thedogapi.com',
      },
    ],
  },
}

export default nextConfig
