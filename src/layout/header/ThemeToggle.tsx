import { Eclipse, Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { THEME, ThemeContext } from "@/providers/Theme";

export default function DropdownMenuCheckboxes() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild={true}>
				<Button variant="outline" className="cursor-pointer">
					{theme === THEME.dark ? (
						<Moon />
					) : theme === THEME.system ? (
						<Eclipse />
					) : (
						<Sun />
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-min min-w-0">
				{Array.from(Object.values(THEME)).map((v) => (
					<DropdownMenuCheckboxItem
						key={v}
						checked={theme === v}
						onCheckedChange={() => setTheme(v)}
					>
						{v === THEME.dark ? (
							<Moon />
						) : v === THEME.system ? (
							<Eclipse />
						) : (
							<Sun />
						)}
					</DropdownMenuCheckboxItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
