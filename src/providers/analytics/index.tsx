import googleAnalytics from "@analytics/google-analytics";
import Analytics from "analytics";
import type { PropsWithChildren } from "react";
import { AnalyticsProvider as AP } from "use-analytics";

const analytics = Analytics({
	plugins: [
		googleAnalytics({
			measurementIds: [import.meta.env.VITE_GA_ID],
		}),
	],
});

export default function AnalyticsProvider(props: PropsWithChildren) {
	return <AP instance={analytics}>{props.children}</AP>;
}
