/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // output: 'export',
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
