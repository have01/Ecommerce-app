/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "png.pngtree.com",
        port: "",
        pathname: "/background/20210712/original/**",
      }, {
        protocol: "https",
        hostname: "rukminim1.flixcart.com",
        port: "",
        pathname:"fk-p-flap/1688/280/image/**"
      }
    ],
  },
};

module.exports = nextConfig;
