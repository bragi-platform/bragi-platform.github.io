import type { IconProps } from "../../../interface";
import type { TokenVariants } from "../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import Arrow from "./arrow.svg";
import Compass from "./compass.svg";

export function Searching(props: IconProps) {
	const { size, isActive } = props;
	const CN = "absolute h-8 w-8 top-0 left-0";

	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer size={size}>
				<TokenIcon.SVGContainer>
					<Compass className={CN} />
				</TokenIcon.SVGContainer>
				<TokenIcon.SVGContainer variants={arrowVariants}>
					<Arrow />
				</TokenIcon.SVGContainer>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

const arrowVariants: TokenVariants = {
	idle: {
		rotate: 0,
	},
	active: {
		rotate: [0, 180, 360, 180, 0, 360],
		transition: {
			duration: 3,
			ease: "backInOut",
		},
	},
};
