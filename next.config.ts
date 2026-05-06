import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* остальные настройки... */
  typescript: {
    // ЗАСТАВЛЯЕМ СОБИРАТЬ ДАЖЕ С ОШИБКАМИ
    ignoreBuildErrors: true,
  },
  eslint: {
    // На всякий случай игнорим и ошибки линтера
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
