import type { HTMLMotionProps } from "motion/react";
import type { z } from "zod";
import type { IconSchema, InjectableSchema, TextSchema } from "../schema";

// 플러그인에서 사용하는 *아규먼츠*와 컴포넌트의 *프롭*을 *연동*하기 위함
// 상수 폴더에 있는 속성 전체가 존재하지 않으면 *컴파일 에러 발생*
// 둘이 하나의 인터페이스로 묶여 있지 않으면 이후 관리 곤란

// plugin
export type IconArgs = z.infer<typeof IconSchema>;
export type TextArgs = z.infer<typeof TextSchema>;
export type InjectableArgs = z.infer<typeof InjectableSchema>;

// components
export type TextProps = HTMLMotionProps<"span"> & TextArgs & InjectableArgs;

export type IconWrapperProps = HTMLMotionProps<"span"> &
	IconArgs &
	InjectableArgs;

export type IconProps = HTMLMotionProps<"span"> & {
	isActive: boolean;
} & IconArgs &
	InjectableArgs;
