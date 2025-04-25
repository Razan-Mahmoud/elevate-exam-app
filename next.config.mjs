// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'standalone' | 'export',
//   distDir: "dist",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "exam.elevateegy.com",
        pathname: "/uploads/**",
      },
    ],
  },
};
export default nextConfig;

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: "export",

//   distDir: "dist",
//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;
