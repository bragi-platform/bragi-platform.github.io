import { LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import type { TextProps,} from "../../../interface";
import type { TokenVariants } from '../../interface'
import { useIsActive } from "./hooks/useScrollProgress";
import { TokenVariantEnum } from "../../interface";

const loadFeatures = await import("motion/react").then(
	(res) => res.domAnimation,
);

export default function TokenText(props: TextProps) {
	const { activateAt, content } = props;
	const isActive = useIsActive(activateAt);

	return (
		<LazyMotion features={loadFeatures}>
			<m.span
				className="font-gothic leading-12 text-2xl text-gray-800 dark:text-gray-200"
				initial={TokenVariantEnum.idle}
				animate={
					isActive ? TokenVariantEnum.active : TokenVariantEnum.idle
				}
				variants={variants}
				transition={{
					duration: 0.5,
				}}
			>
				{content}
			</m.span>
		</LazyMotion>
	);
}

const variants: TokenVariants = {
	idle: {
		opacity: 0.25,
	},
	active: {
		opacity: 1,
	},
} as const;
