import type { IconProps } from "../../../interface";
import type { TokenVariants } from "../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import LeftMessage from "./leftMessage.svg";
import LightBulb from "./lightBulb.svg";
import RightMessage from "./rightMessage.svg";

const iconCN = "w-full h-full";

export function Learning(props: IconProps) {
	const { size, isActive } = props;
	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer size={size}>
				<TokenIcon.SVGContainer variants={leftMessageVariants}>
					<LeftMessage className={iconCN} />
				</TokenIcon.SVGContainer>
				<TokenIcon.SVGContainer variants={rightMessageVariants}>
					<RightMessage className={iconCN} />
				</TokenIcon.SVGContainer>
				<TokenIcon.SVGContainer variants={lightBulbVarinats}>
					<LightBulb className={iconCN} />
				</TokenIcon.SVGContainer>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

const leftMessageVariants: TokenVariants = {
	idle: {
		translateX: "-30%",
		opacity: 0,
	},
	active: {
		opacity: 1,
		translateX: "0%",
		transition: {
			duration: 0.3,
		},
	},
};

const rightMessageVariants: TokenVariants = {
	idle: {
		translateX: "30%",
		opacity: 0,
	},
	active: {
		translateX: "0%",
		opacity: 1,
		transition: {
			delay: 0.3,
			duration: 0.3,
		},
	},
};

const lightBulbVarinats: TokenVariants = {
	idle: {
		opacity: 0,
		translateY: "-20%",
	},
	active: {
		opacity: 1,
		translateY: ["-20%", "-40%", "0%"],
		scaleY: [0, 1.8, 1],
		transition: {
			delay: 0.3,
			duration: 0.8,
			ease: "circInOut",
		},
	},
};
