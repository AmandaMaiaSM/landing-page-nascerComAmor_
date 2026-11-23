import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ["192.168.1.14", "192.168.137.1", "192.168.15.18", "172.29.114.100"],
};

export default nextConfig;
