import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // staticMode: true,
  content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};

export default nextConfig;
