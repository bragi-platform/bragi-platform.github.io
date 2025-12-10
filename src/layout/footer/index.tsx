import { Copy } from "@/components/ui/copy";
import { Link } from "@/components/ui/link";
import IBM from "./ibm.svg";
import Reboot from "./reboot.svg";

export default function Footer() {
	return (
		<footer className="flex w-full flex-col gap-1 h-auto font-plex-sans text-gray-400">
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
