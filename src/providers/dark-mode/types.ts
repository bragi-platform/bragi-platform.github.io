import type { DARK_MODE_THEME } from "./constants";

export type Theme = (typeof DARK_MODE_THEME)[keyof typeof DARK_MODE_THEME];
