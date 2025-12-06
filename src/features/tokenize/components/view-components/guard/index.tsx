import type { IconProps } from "../../../interface";
import type { TokenVariants } from "../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import GateBody from "./gate.svg?react";
import Portcullis from "./portcullis.svg?react";

const iconCN = "w-full h-full";

export function Guard(props: IconProps) {
	const { isActive } = props;
	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer>
				<TokenIcon.SVGContainer>
					<GateBody className={iconCN} />
				</TokenIcon.SVGContainer>
				<TokenIcon.SVGContainer variants={portcullisVariants}>
					<Portcullis className={iconCN} />
				</TokenIcon.SVGContainer>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

const portcullisVariants: TokenVariants = {
	idle: {
		translateY: "-50%",
		scaleY: 0,
	},
	active: {
		translateY: "0%",
		scaleY: 1,
		transition: {
			duration: 1.2,
			type: "spring",
			stiffness: 80,
			restSpeed: 0.1,
			restDelta: 0.1,
			velocity: 0,
		},
	},
};
