import type { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "@/components/ui/copy";
import { cn } from "@/lib/utils";
import IBM from "./ibm.svg?react";
import Reboot from "./reboot.svg?react";

export default function Footer() {
	return (
		<footer className="flex w-full flex-col gap-1 h-auto font-gothic text-gray-400">
			<span>
				궁금한 게 있나요?{" "}
				<Copy
					text={"bragi.platform@gmail.com"}
					className="text-gray-400 hover:text-gray-600 translate-y-[10%]"
				/>
				에 뭐든지 물어보세요.
			</span>
			<span>
				페이지의 전체적인 디자인은{" "}
				<Link href={"https://reboot.studio"}>
					<Reboot />
					reboot.studio
				</Link>
				를 많이 참고했어요.
			</span>
			<span>
				글꼴은{" "}
				<Link href={"https://www.ibm.com/plex/"}>
					<IBM />
					IBM Plex Sans KR
				</Link>
				을 사용하고 있어요.
			</span>
		</footer>
	);
}

function Link({ href, children }: PropsWithChildren & { href: string }) {
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
