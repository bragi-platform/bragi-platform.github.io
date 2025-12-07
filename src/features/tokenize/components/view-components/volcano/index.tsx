import type { IconProps } from "../../../interface";
import type { TokenVariants } from "../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import Fume from "./fume.svg?react";
import Magma from "./magma.svg?react";
import Mountain from "./mountain.svg?react";

const iconCN = "w-full h-full";

export function Volcano(props: IconProps) {
	const { size, isActive } = props;
	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer size={size}>
				<TokenIcon.SVGContainer>
					<Mountain className={iconCN} />
				</TokenIcon.SVGContainer>
				<TokenIcon.SVGContainer variants={magmaVariants}>
					<Magma className={iconCN} />
				</TokenIcon.SVGContainer>
				<TokenIcon.SVGContainer variants={fumeVariants}>
					<Fume className={iconCN} />
				</TokenIcon.SVGContainer>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

const magmaVariants: TokenVariants = {
	idle: {
		scale: 0,
		opacity: 0,
	},
	active: {
		scale: [1, 1.3, 1],
		opacity: 1,
		transition: {
			delay: 0.25,
		},
	},
};

const fumeVariants: TokenVariants = {
	idle: {
		translateY: "30%",
		opacity: 0,
		scale: 0,
	},
	active: {
		translateY: "0%",
		opacity: 1,
		scale: [0, 1.8, 1],
		transition: {
			delay: 0.25,
		},
	},
};
