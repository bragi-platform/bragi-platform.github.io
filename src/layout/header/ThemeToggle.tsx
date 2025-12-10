"use client";

import { Eclipse, Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DARK_MODE_THEME, DarkModeContext } from "@/providers/dark-mode";

export default function DropdownMenuCheckboxes() {
	const { theme, setTheme } = useContext(DarkModeContext);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild={true}>
				<Button variant="outline" className="cursor-pointer">
					<ThemeIcon theme={theme} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-min min-w-0">
				{Array.from(Object.values(DARK_MODE_THEME)).map((v) => (
					<DropdownMenuCheckboxItem
						key={v}
						checked={theme === v}
						onCheckedChange={() => setTheme(v)}
					>
						<ThemeIcon theme={v} />
					</DropdownMenuCheckboxItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function ThemeIcon({
	theme,
}: {
	theme: (typeof DARK_MODE_THEME)[keyof typeof DARK_MODE_THEME];
}) {
	if (theme === DARK_MODE_THEME.dark) {
		return <Moon />;
	} else if (theme === DARK_MODE_THEME.system) {
		return <Eclipse />;
	} else {
		return <Sun />;
	}
}
