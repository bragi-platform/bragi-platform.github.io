"use client";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { PropsWithChildren } from "react";

export default function AnalyticsProvider(props: PropsWithChildren) {
	return (
		<>
			<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
			<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
			{props.children}
		</>
	);
}
