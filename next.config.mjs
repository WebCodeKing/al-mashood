// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: "export", // Enables static site export
//   images: {
//     unoptimized: true, // Prevents Next.js from optimizing images (needed for static sites)
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: "/", // Use a leading slash ("/") instead of "./"
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

