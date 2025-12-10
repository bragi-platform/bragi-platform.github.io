import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
	return (
		<header className="flex w-full justify-between font-plex-sans">
			<div className="flex gap-2">
				<Button variant={"ghost"} className="flex h-fit py-2">
					<a href="/" className="flex gap-2">
						<Logo className="min-w-8 min-h-8" />
						<span className="flex gap-2 items-center text-lg font-extrabold">
							브라기
						</span>
					</a>
				</Button>
			</div>

			<div className="flex gap-6 items-center">
				<ThemeToggle />
			</div>
		</header>
	);
}
