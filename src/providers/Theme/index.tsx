"use client";

import {
	createContext,
	type PropsWithChildren,
	useCallback,
	useEffect,
	useState,
} from "react";
import { LOCAL_STORAGE_KEY, MEDIA_QUERY, THEME } from "./constants";
export type Theme = (typeof THEME)[keyof typeof THEME];

export const ThemeContext = createContext({
	theme: THEME.system as Theme,
	setTheme: (_theme: Theme) => {},
});

export default function ThemeContextProvider(props: PropsWithChildren) {
	const { children } = props;
	const [theme, setThemeState] = useState<Theme>(THEME.system);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(THEME.light, THEME.dark);

		if (theme === THEME.system) {
			const systemTheme = window.matchMedia(MEDIA_QUERY).matches
				? THEME.dark
				: THEME.light;

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
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}
