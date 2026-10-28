import type { NextConfig } from "next";

// Pages from the previous version of the site, now folded into the homepage.
const removedRoutes = [
  "/about",
  "/contact",
  "/services",
  "/services/:slug",
  "/insights",
  "/insights/:slug",
];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return removedRoutes.map((source) => ({
      source,
      destination: "/",
      permanent: true,
    }));
  },
};

export default nextConfig;
