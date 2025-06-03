/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: 'incremental',
    reactCompiler: true
  },
  // Enable static exports for PWA
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true
  }
};

export default nextConfig;
