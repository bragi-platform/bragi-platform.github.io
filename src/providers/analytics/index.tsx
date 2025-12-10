import googleAnalytics from "@analytics/google-analytics";
import Analytics from "analytics";
import type { PropsWithChildren } from "react";
import { AnalyticsProvider as AP } from "use-analytics";

export default function AnalyticsProvider(props: PropsWithChildren) {
	const analytics = Analytics({
		plugins: [
			googleAnalytics({
				measurementIds: [process.env.NEXT_PUBLIC_GA_ID || ""],
			}),
		],
	});
	return <AP instance={analytics}>{props.children}</AP>;
}
