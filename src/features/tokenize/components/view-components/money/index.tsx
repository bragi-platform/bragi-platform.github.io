import type { IconProps } from "../../../interface";
import type { TokenVariants } from "../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import LeftWing from "./leftWing.svg?react";
import Body from "./money.svg?react";
import RightWing from "./rightWing.svg?react";

const iconCN = "w-full h-full";

export function Money(props: IconProps) {
	const { size, isActive } = props;
	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer size={size}>
				<TokenIcon.SVGContainer variants={leftWingVariants}>
					<LeftWing className={iconCN} />
				</TokenIcon.SVGContainer>
				<TokenIcon.SVGContainer variants={rightingVariants}>
					<RightWing className={iconCN} />
				</TokenIcon.SVGContainer>
				<TokenIcon.SVGContainer>
					<Body className={iconCN} />
				</TokenIcon.SVGContainer>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

const leftWingVariants: TokenVariants = {
	idle: {
		rotate: 0,
	},
	active: {
		rotate: [0, 48, 0, 64, 0, 36, 0],
		transition: {
			duration: 1.2,
			ease: "circIn",
		},
	},
};

const rightingVariants: TokenVariants = {
	idle: {
		rotate: 0,
	},
	active: {
		rotate: [0, -48, 0, -64, 0, -36, 0],
		transition: {
			duration: 1.2,
			ease: "circIn",
		},
	},
};
