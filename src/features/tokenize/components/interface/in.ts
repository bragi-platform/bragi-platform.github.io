import type { Variants } from "motion/react";

// 컴포넌트
export const TokenVariantEnum = {
    idle: "idle",
    active: "active",
} as const;

export type TokenVariantLabel =
    (typeof TokenVariantEnum)[keyof typeof TokenVariantEnum];
export type TokenVariants = Variants &
    Record<TokenVariantLabel, Variants[string]>;
