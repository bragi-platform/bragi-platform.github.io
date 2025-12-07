import type { IconProps } from "../../../interface";
import type { TokenVariants } from "../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import Character from "./character.svg?react";
import Hand from "./hand.svg?react";

const iconCN = "w-full h-full";

export function Oops(props: IconProps) {
	const { size, isActive } = props;
	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer size={size}>
				<TokenIcon.SVGContainer>
					<Character className={iconCN} />
				</TokenIcon.SVGContainer>
				<TokenIcon.SVGContainer variants={handVariants}>
					<Hand className={iconCN} />
				</TokenIcon.SVGContainer>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

const handVariants: TokenVariants = {
	idle: {
		translateY: "30%",
		opacity: 0,
	},
	active: {
		opacity: 1,
		translateY: "0%",
		transition: {
			delay: 0.2,
			duration: 0.4,
			ease: "circInOut",
		},
	},
};
