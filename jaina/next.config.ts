import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // For GitHub Pages deployment with custom domain or repo name
  // Uncomment and set basePath if deploying to username.github.io/repo-name
  // basePath: '/jaina-beaute',
};

export default nextConfig;
