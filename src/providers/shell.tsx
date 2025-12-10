"use client";

import type { PropsWithChildren } from "react";
import AnalyticsProvider from "./analytics";
import ThemeContextProvider from "./dark-mode";

export default function Shell({ children }: PropsWithChildren) {
	return (
		<AnalyticsProvider>
			<ThemeContextProvider>{children}</ThemeContextProvider>
		</AnalyticsProvider>
	);
}
