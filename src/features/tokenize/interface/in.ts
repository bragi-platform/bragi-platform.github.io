import type { HTMLMotionProps } from "motion/react";
import type { TokenIconTypeKey } from "./out";

export type TextProps = HTMLMotionProps<"span"> & {
    id: string;
    activateAt: number;
    content: string;
};

export type IconWrapperProps = HTMLMotionProps<"span"> & {
    activateAt: number;
    iconType: TokenIconTypeKey;
};

export type IconProps = HTMLMotionProps<"span"> & {
    isActive: boolean;
};

