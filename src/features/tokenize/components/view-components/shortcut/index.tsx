import type { IconProps } from "../../../interface";
import type { TokenVariants } from "../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import Hole from "./hole.svg?react";
import Ladder from "./ladder.svg?react";

const iconCN = "w-full h-full";

export function Shortcut(props: IconProps) {
	const { size, isActive } = props;
	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer size={size}>
				<TokenIcon.SVGContainer variants={holeVariants}>
					<Hole className={iconCN} />
				</TokenIcon.SVGContainer>
				<TokenIcon.SVGContainer variants={ladderVariants}>
					<Ladder className={iconCN} />
				</TokenIcon.SVGContainer>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

const holeVariants: TokenVariants = {
	idle: {
		opacity: 0,
	},
	active: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
};

const ladderVariants: TokenVariants = {
	idle: {
		scaleY: 0,
		translateY: "40%",
	},
	active: {
		scaleY: 1,
		translateY: 0,
		transition: {
			duration: 0.4,
			delay: 0.2,
		},
	},
};
