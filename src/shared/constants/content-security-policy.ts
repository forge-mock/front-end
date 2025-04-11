import { ContentSecurityPolicy } from "../interfaces";

export const DEFAULT_SRC: ContentSecurityPolicy = {
  item: "default-src 'self' 'unsafe-inline'",
  values: [],
};

export const SCRIPT_SRC: ContentSecurityPolicy = {
  item: "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  values: [],
};

export const STYLE_SRC: ContentSecurityPolicy = {
  item: "style-src 'self' 'unsafe-inline'",
  values: [],
};

export const IMG_SRC: ContentSecurityPolicy = {
  item: "img-src 'self' 'unsafe-inline'",
  values: [],
};

export const CONNECT_SRC: ContentSecurityPolicy = {
  item: "connect-src 'self' 'unsafe-inline' https://localhost:7289",
  values: [],
};

export const OBJECT_SRC: ContentSecurityPolicy = {
  item: "object-src 'none'",
  values: [],
};

export const FRAME_ANCESTORS: ContentSecurityPolicy = {
  item: "frame-ancestors 'none'",
  values: [],
};
