// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   output: 'export',
//   basePath: '/Real-Estate-And-Pirates',
//   // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//   skipTrailingSlashRedirect: true,
//   images: {
//     unoptimized: true,
//   },
// };

/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  reactStrictMode: true,
  output: "export",
    eslint: {
      ignoreDuringBuilds: true,
  },
  basePath: '/Real-Estate-And-Pirates',
  images: {
    loader: "akamai",
    path: "",
  },
  // assetPrefix: "./",
};

export default nextConfig;

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//       ignoreDuringBuilds: true,
//   },
// };

// export default nextConfig;