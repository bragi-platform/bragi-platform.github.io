import type { IconProps } from "../../../interface";
import type { TokenVariants } from "../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import Listening from "./listening.svg?react";

const iconCN = "w-full h-full";

export function Ear(props: IconProps) {
	const { isActive } = props;
	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer>
				<TokenIcon.SVGContainer variants={earVariants}>
					<Listening className={iconCN} />
				</TokenIcon.SVGContainer>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

const earVariants: TokenVariants = {
	idle: {
		opacity: 0,
	},
	active: {
		opacity: 1,
		translateX: ["-40%", "-15%", 0, 0, 0, 0, 0, 0, 0, 0],
		rotate: [0, 0, 0, 10, -10, 10, -10, 10, -20, 0],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};
