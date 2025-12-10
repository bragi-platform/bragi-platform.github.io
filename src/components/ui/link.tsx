"use client";

import type { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Link({ href, children }: PropsWithChildren & { href: string }) {
	return (
		<Button
			variant={"link"}
			className={cn([
				"inline-flex gap-2 text-gray-400 p-0",
				"text-gray-400 hover:text-gray-700 stroke-gray-400 hover:stroke-gray-700 fill-gray-400 hover:fill-gray-700",
				"dark:hover:text-gray-200 dark:hover:stroke-gray-200 dark:hover:fill-gray-200",
			])}
		>
			<a href={href} className="flex gap-1">
				{children}
			</a>
		</Button>
	);
}
