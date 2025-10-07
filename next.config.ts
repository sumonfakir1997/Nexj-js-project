import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  staticMode: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};

export default nextConfig;
