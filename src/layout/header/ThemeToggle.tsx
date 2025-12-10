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
import { ThemeContext } from "@/providers/theme";
import { THEME } from "@/providers/theme/constants";

export default function DropdownMenuCheckboxes() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild={true}>
				<Button variant="outline" className="cursor-pointer">
					<ThemeIcon theme={theme} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-min min-w-0">
				{Array.from(Object.values(THEME)).map((v) => (
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

function ThemeIcon({ theme }: { theme: (typeof THEME)[keyof typeof THEME] }) {
	if (theme === THEME.dark) {
		return <Moon />;
	} else if (theme === THEME.system) {
		return <Eclipse />;
	} else {
		return <Sun />;
	}
}
