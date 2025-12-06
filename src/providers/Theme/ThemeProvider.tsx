import {
	createContext,
	type PropsWithChildren,
	useCallback,
	useEffect,
	useState,
} from "react";
import { LOCAL_STORAGE_KEY, MEDIA_QUERY, THEME } from "./constants";
import type { Theme } from "./interface";

export const ThemeContext = createContext({
	theme: THEME.system as Theme,
	setTheme: (_theme: Theme) => {},
});

export function ThemeContextProvider(props: PropsWithChildren) {
	const { children } = props;
	const [theme, setThemeState] = useState<Theme>(
		() =>
			(localStorage.getItem(LOCAL_STORAGE_KEY) as Theme) || THEME.system,
	);

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
