import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface ContentSecurityPolicy {
  item: string;
  values: string[];
}

const DEFAULT_SRC: ContentSecurityPolicy = {
  item: "default-src 'self'",
  values: [],
};

const SCRIPT_SRC: ContentSecurityPolicy = {
  item: "script-src 'self' 'strict-dynamic' 'nonce-{{NONCE}}'",
  values: [
    process.env.NODE_ENV === "development" ? "'unsafe-eval'" : "", // react-server-dom
    "'sha256-Dk4eREd32Z8RottwjvdH3S2Ex9yMOJ9pcxg4KtWklNs='",
    "'sha256-raF8KPQi3hx7mdtvrDU3gXTfUVFYzmUslAA8WWBIcPM='",
  ],
};

const STYLE_SRC: ContentSecurityPolicy = {
  item: "style-src 'self'",
  values: [
    "'sha256-sHwQzC2ZsVrt1faUYCjF/eo8aIoBlQbGjVstzanL9CU='", // react-tooltip
    "'sha256-GIdE8trY6laGTlkS1nFVb1KoN/xCPpLTIeDxl/w5xQE='",
    "'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='",
    "'sha256-MS3Bkw67Fu+i00IBlIAUpnyosoWlWm7wrbOgRX4FwWY='",
    "'sha256-Ylx4sWaDgn6RRamxe7jevX4yDhNtiSG3CQWrPAdPh6A='", // react-dom-client
    "'sha256-TkUgajJ946/xb1R0Vfeuzb73k2VAKoEIF3sRGeX4aBU='",
    "'sha256-rZot9UVcdtXL99KiVSLfpDfxS3VtOsOY1PXjNX1ntxg='",
    "'sha256-k1m9MgjuV56OVgoQq43A5vLIpdJFJrlq/3ANCGJD4es='",
    "'sha256-m8dEh7VmKFRCO8jEWPbmkeO1mq4SIx8omtyx50rrS/M='",
    "'sha256-fNQvmabDUct/Q8bVROR2oAMzjWD2CYHGuJj7V7Sxgfc='",
  ],
};

const IMG_SRC: ContentSecurityPolicy = {
  item: "img-src 'self'",
  values: [],
};

const FONT_SRC: ContentSecurityPolicy = {
  item: "font-src 'self'",
  values: [],
};

const OBJECT_SRC: ContentSecurityPolicy = {
  item: "object-src 'none'",
  values: [],
};

const FRAME_ANCESTORS: ContentSecurityPolicy = {
  item: "frame-ancestors 'none'",
  values: [],
};

const FORM_ACTION: ContentSecurityPolicy = {
  item: "form-action 'self'",
  values: [],
};

const BASE_URI: ContentSecurityPolicy = {
  item: "base-uri 'self'",
  values: [],
};

const UPGRADE_INSECURE_REQUEST: ContentSecurityPolicy = {
  item: "upgrade-insecure-requests",
  values: [],
};

const CONNECT_SRC: ContentSecurityPolicy = {
  item: "connect-src 'self'",
  values: ["localhost:7289"],
};

function concatPolicy(item: ContentSecurityPolicy): string {
  return `${item.item} ${item.values.join(" ")};`;
}

function uniteContentSecurityPolicy(): string {
  const policies = [
    DEFAULT_SRC,
    SCRIPT_SRC,
    STYLE_SRC,
    IMG_SRC,
    FONT_SRC,
    OBJECT_SRC,
    FRAME_ANCESTORS,
    FORM_ACTION,
    BASE_URI,
    UPGRADE_INSECURE_REQUEST,
    CONNECT_SRC,
  ];

  return policies.map(concatPolicy).join("");
}

export function middleware(request: NextRequest) {
  const nonce: string = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = uniteContentSecurityPolicy().replace(/{{NONCE}}/g, nonce);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Content-Security-Policy", cspHeader);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
