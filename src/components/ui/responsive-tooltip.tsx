// ResponsiveTooltip.tsx

import type { ComponentProps, ReactNode } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./tooltip";

type ResponsiveTooltipProps = ComponentProps<
	typeof Popover & typeof Tooltip
> & {
	trigger: string | ReactNode;
	content: string | ReactNode;
};

export function ResponsiveTooltip(props: ResponsiveTooltipProps) {
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const { content, trigger } = props;

	if (isDesktop) {
		return (
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>{trigger}</TooltipTrigger>
					<TooltipContent side="bottom">{content}</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		);
	}

	return (
		<Popover>
			<PopoverTrigger className="cursor-pointer">
				{trigger}
			</PopoverTrigger>
			<PopoverContent side="bottom">{content}</PopoverContent>
		</Popover>
	);
}
