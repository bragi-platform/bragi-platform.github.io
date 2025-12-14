"use client";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { PropsWithChildren } from "react";
import { env } from "@/env";

export default function AnalyticsProvider(props: PropsWithChildren) {
	return (
		<>
			<GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
			<GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
			{props.children}
		</>
	);
}
