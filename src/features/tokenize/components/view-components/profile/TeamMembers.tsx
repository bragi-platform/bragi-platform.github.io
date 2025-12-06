import { LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import type { FunctionComponent, SVGProps } from "react";
import { ResponsiveTooltip } from "@/components/ui/responsive-tooltip";
import { cn } from "@/lib/utils";
import { TokenVariantEnum, type TokenVariants } from "../../interface";

type TeamMemberProps = {
	name: string;
	position: string;
	Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
	index: number;
};

const loadFeatures = await import("motion/react").then(
	(res) => res.domAnimation,
);

export default function TeamMember(props: TeamMemberProps) {
	const { name, position, Icon, index } = props;

	const teamMemberVariants: TokenVariants = {
		idle: {
			translateY: 0,
		},
		active: {
			translateY: [0, -4 * (index + 1), 2 * (index + 1), 0],
		},
	};

	return (
		<ResponsiveTooltip
			trigger={
				<LazyMotion features={loadFeatures}>
					<m.span
						className={cn([
							"inline-flex align-bottom h-8 w-8",
							index !== 0 && "-ml-2",
						])}
						variants={teamMemberVariants}
						initial={TokenVariantEnum.idle}
						whileInView={TokenVariantEnum.active}
					>
						<Icon />
					</m.span>
				</LazyMotion>
			}
			content={
				<>
					<span>{name}</span>
					<span className="text-gray-500"> | </span>
					<span className="text-gray-400">{position}</span>
				</>
			}
		/>
	);
}
