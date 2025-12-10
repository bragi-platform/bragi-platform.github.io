"use client";

import {
	createContext,
	type PropsWithChildren,
	useCallback,
	useEffect,
	useState,
} from "react";
import { DARK_MODE_THEME, LOCAL_STORAGE_KEY, MEDIA_QUERY } from "./constants";
import type { Theme } from "./types";

const DarkModeContext = createContext({
	theme: DARK_MODE_THEME.system as Theme,
	setTheme: (_theme: Theme) => {},
});

export default function DarkModeContextProvider(props: PropsWithChildren) {
	const { children } = props;
	const [theme, setThemeState] = useState<Theme>(DARK_MODE_THEME.system);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(DARK_MODE_THEME.light, DARK_MODE_THEME.dark);

		if (theme === DARK_MODE_THEME.system) {
			const systemTheme = window.matchMedia(MEDIA_QUERY).matches
				? DARK_MODE_THEME.dark
				: DARK_MODE_THEME.light;

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);

	const setTheme = useCallback((newTheme: Theme) => {
		setThemeState(newTheme);
		localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
	}, []);

	return (
		<DarkModeContext.Provider
			value={{
				theme,
				setTheme,
			}}
		>
			{children}
		</DarkModeContext.Provider>
	);
}

export { DARK_MODE_THEME, DarkModeContext };
