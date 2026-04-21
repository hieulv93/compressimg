/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compress: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
}

export default nextConfig
