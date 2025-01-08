import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' 'unsafe-inline'; connect-src 'self' 'unsafe-inline'; object-src 'none'; frame-ancestors 'none'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
