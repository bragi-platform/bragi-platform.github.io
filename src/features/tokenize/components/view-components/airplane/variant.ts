import type { TokenVariants } from "@/features/tokenize/components/interface";

const UNIT = "80%";
const MINUS_UNIT = `-${UNIT}`;
const FINAL_TRANSLATE = "0%";
// rotate
const INITIAL_ANGLE = -45;
const ANGLE_UNIT = -90;
// opacity
const INITIAL_OPACITY = 0;
const FINAL_OPACITY = 1;

export const airplaneVariants: TokenVariants = {
	idle: {
		opacity: INITIAL_OPACITY,
		translateX: MINUS_UNIT,
		translateY: UNIT,
	},
	active: {
		translateX: [
			UNIT,
			UNIT,
			UNIT,
			MINUS_UNIT,
			MINUS_UNIT,
			MINUS_UNIT,
			MINUS_UNIT,
			FINAL_TRANSLATE,
		],
		translateY: [
			UNIT,
			MINUS_UNIT,
			MINUS_UNIT,
			MINUS_UNIT,
			MINUS_UNIT,
			UNIT,
			UNIT,
			FINAL_TRANSLATE,
		],
		opacity: [
			INITIAL_OPACITY,
			FINAL_OPACITY,
			FINAL_OPACITY,
			FINAL_OPACITY,
			FINAL_OPACITY,
			FINAL_OPACITY,
			FINAL_OPACITY,
			FINAL_OPACITY,
		],
		rotate: [
			INITIAL_ANGLE,
			INITIAL_ANGLE,
			INITIAL_ANGLE + ANGLE_UNIT,
			INITIAL_ANGLE + ANGLE_UNIT,
			INITIAL_ANGLE + ANGLE_UNIT * 2,
			INITIAL_ANGLE + ANGLE_UNIT * 2,
			ANGLE_UNIT * 4,
			ANGLE_UNIT * 4,
		],
		transition: {
			duration: 2,
			ease: "easeInOut",
		},
	},
};
