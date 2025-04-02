import type { NextConfig } from "next";
import { ContentSecurityPolicy } from "@shared/interfaces";
import {
  DEFAULT_SRC,
  SCRIPT_SRC,
  STYLE_SRC,
  IMG_SRC,
  CONNECT_SRC,
  OBJECT_SRC,
  FRAME_ANCESTORS,
} from "@shared/constants";

function concatPolicy(item: ContentSecurityPolicy): string {
  return `${item.item} ${item.values.join(" ")};`;
}

function uniteContentSecurityPolicy(): string {
  const defaultSrc = concatPolicy(DEFAULT_SRC);
  const scriptSrc = concatPolicy(SCRIPT_SRC);
  const styleSrc = concatPolicy(STYLE_SRC);
  const imgSrc = concatPolicy(IMG_SRC);
  const connectSrc = concatPolicy(CONNECT_SRC);
  const objectSrc = concatPolicy(OBJECT_SRC);
  const frameAncestors = concatPolicy(FRAME_ANCESTORS);
  const result = `${defaultSrc} ${scriptSrc} ${styleSrc} ${imgSrc} ${connectSrc} ${objectSrc} ${frameAncestors}`;

  return result;
}

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: uniteContentSecurityPolicy(),
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
