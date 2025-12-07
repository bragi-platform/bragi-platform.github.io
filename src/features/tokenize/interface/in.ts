import type { HTMLMotionProps } from "motion/react";
import type { IconAttributes, TextAttributes } from "../constants";
import type { TokenIconTypeKey } from "./out";

// 플러그인에서 사용하는 *아규먼츠*와 컴포넌트의 *프롭*을 *연동*하기 위함
// 상수 폴더에 있는 속성 전체가 존재하지 않으면 *컴파일 에러 발생*
// 둘이 하나의 인터페이스로 묶여 있지 않으면 이후 관리 곤란

// plugin
export type IconArgs = {
	size?: string;
	iconType: string;
};

export type TextArgs = {
	content: string;
};

export type InjectArgs = {
	activateAt: number;
	id: string;
};

// components
export type TextProps = HTMLMotionProps<"span"> &
	Record<
		(typeof TextAttributes)[keyof typeof TextAttributes],
		string | number
	> &
	TextArgs &
	InjectArgs;

export type IconWrapperProps = HTMLMotionProps<"span"> &
	Record<
		(typeof IconAttributes)[keyof typeof IconAttributes],
		string | number
	> &
	InjectArgs &
	IconAdditionalProps;

export type IconProps = HTMLMotionProps<"span"> & {
	isActive: boolean;
} & IconAdditionalProps;

type IconAdditionalProps = {
	size?: "S" | "M" | "L";
	iconType: TokenIconTypeKey;
};
