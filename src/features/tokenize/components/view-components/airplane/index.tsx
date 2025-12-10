import { cn } from "@/lib/utils";
import type { IconProps } from "../../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import AirplaneSVG from "./airplane.svg";
import { airplaneVariants } from "./variant";

const iconCN = "w-full h-full ";

export function Airplane(props: IconProps) {
	const { size, isActive } = props;
	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer size={size}>
				<TokenIcon.SVGContainer variants={airplaneVariants}>
					<AirplaneSVG
						className={cn([
							iconCN,
							"fill-neutral-700 dark:fill-neutral-300",
						])}
					/>
				</TokenIcon.SVGContainer>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

// translateX, translateY
