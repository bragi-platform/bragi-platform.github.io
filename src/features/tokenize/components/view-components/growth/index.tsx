import type { IconProps } from "../../../interface";
import type { TokenVariants } from "../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import Tamagochi from "./tamagochi.svg";

const iconCN = "w-full h-full";

export function Growth(props: IconProps) {
	const { size, isActive } = props;
	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer size={size}>
				<TokenIcon.SVGContainer variants={tamagochiVariants}>
					<Tamagochi className={iconCN} />
				</TokenIcon.SVGContainer>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

const tamagochiVariants: TokenVariants = {
	idle: {
		rotate: 0,
	},
	active: {
		translateX: [0, "-5%", 0, "5%", 0],
		transition: {
			duration: 0.2,
			repeat: 3,
			ease: "backInOut",
		},
	},
};
