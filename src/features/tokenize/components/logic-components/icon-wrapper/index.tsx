import { LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import type { TokenVariants } from "../../interface";
import { TokenVariantEnum } from "../../interface";

type PropsWithSize = {
	size?: "S" | "M" | "L";
};

type SVGParentProps = PropsWithChildren & PropsWithSize;

function SVGParent(props: SVGParentProps) {
	const { children, size = "S" } = props;
	return (
		<span
			className={cn([
				"relative",
				size === "S" && "w-8 h-8",
				size === "L" && "w-12 h-12",
			])}
		>
			{children}
		</span>
	);
}

type SVGContainerProps = PropsWithChildren & {
	variants?: TokenVariants;
};

function SVGContainer(props: SVGContainerProps) {
	const { variants, children } = props;
	return (
		<m.span className={cn(["absolute w-full h-full"])} variants={variants}>
			{children}
		</m.span>
	);
}

type WrapperProps = PropsWithChildren & {
	isActive: boolean;
};

const loadFeatures = await import("motion/react").then(
	(res) => res.domAnimation,
);

function OuterContainer(props: WrapperProps) {
	const { isActive } = props;
	return (
		<LazyMotion features={loadFeatures}>
			<m.span
				variants={variants}
				initial={TokenVariantEnum.idle}
				animate={
					isActive ? TokenVariantEnum.active : TokenVariantEnum.idle
				}
				className="inline-flex align-middle pb-2"
			>
				{props.children}
			</m.span>
		</LazyMotion>
	);
}

const variants: TokenVariants = {
	idle: {
		display: "none",
		width: 0,
		opacity: 0,
	},
	active: {
		display: "inline-flex",
		width: "auto",
		height: "auto",
		opacity: 100,
	},
};

export default { OuterContainer, SVGPlacer: SVGParent, SVGContainer };
