import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Мы убрали ключ eslint, который вызывал ошибку в логах
};

export default nextConfig;
