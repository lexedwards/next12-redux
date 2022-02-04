/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/fe/robots',
      },
      {
        source: '/sitemap.xml',
        destination: '/api/fe/sitemap',
      },
    ]
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
}

module.exports = nextConfig
