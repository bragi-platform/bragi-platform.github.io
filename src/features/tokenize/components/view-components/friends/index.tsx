import type { IconProps } from "../../../interface";
import type { TokenVariants } from "../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import Boots from "./boots.svg";
import Runner from "./runner.svg";

const iconCN = "w-full h-full";

export function Friends(props: IconProps) {
	const { size, isActive } = props;
	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer size={size}>
				<TokenIcon.SVGContainer variants={runnerVariants}>
					<Runner className={iconCN} />
				</TokenIcon.SVGContainer>
				<TokenIcon.SVGContainer variants={bootsVariants}>
					<Boots className={iconCN} />
				</TokenIcon.SVGContainer>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

const runnerVariants: TokenVariants = {
	idle: {
		top: "-33%",
		left: "-10%",
		rotate: 20,
	},
	active: {
		top: "0%",
		left: "0%",
		rotate: 0,
	},
};

const bootsVariants: TokenVariants = {
	idle: {
		top: "-32%",
		left: "-20%",
		rotate: 40,
	},
	active: {
		top: "0%",
		left: "0%",
		rotate: 0,
	},
};
