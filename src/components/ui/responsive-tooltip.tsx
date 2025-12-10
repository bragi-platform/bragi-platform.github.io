"use client";

import {
	type ComponentProps,
	type ReactNode,
	useEffect,
	useState,
} from "react";
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
	const { trigger, content } = props;
	const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 768px)");
		setIsDesktop(mediaQuery.matches);

		const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
		mediaQuery.addEventListener("change", handler);

		return () => mediaQuery.removeEventListener("change", handler);
	}, []);

	const PopoverComponent = (
		<Popover>
			<PopoverTrigger>{trigger}</PopoverTrigger>
			<PopoverContent side={"bottom"}>{content}</PopoverContent>
		</Popover>
	);

	const TooltipComponent = (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>{trigger}</TooltipTrigger>
				<TooltipContent side={"bottom"}>{content}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);

	if (isDesktop === null) {
		return PopoverComponent;
	}

	if (isDesktop) {
		return TooltipComponent;
	}

	return PopoverComponent;
}
