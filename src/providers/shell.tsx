"use client";

import type { PropsWithChildren } from "react";
import AnalyticsProvider from "./analytics";
import ThemeContextProvider from "./theme";

export default function Shell({ children }: PropsWithChildren) {
	return (
		<AnalyticsProvider>
			<ThemeContextProvider>{children}</ThemeContextProvider>
		</AnalyticsProvider>
	);
}
