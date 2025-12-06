import { Check, Copy as CopyIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CopyProps = React.ComponentProps<"button"> & {
	text: string;
};

export function Copy(props: CopyProps) {
	const { className, text, ...restProps } = props;
	const [copied, setCopied] = React.useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<Button
			{...restProps}
			variant="link"
			onClick={copyToClipboard}
			className={cn([
				className,
				"p-0 px-0 has-[>svg]:px-0 transition-all gap-0.5",
				"dark:text-gray-400 dark:hover:text-gray-200",
				copied === true &&
					"text-blue-600 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-300",
			])}
		>
			{copied && <Check className="h-4 w-4" />}
			{!copied && <CopyIcon className="h-4 w-4" />}
			{text}
		</Button>
	);
}
