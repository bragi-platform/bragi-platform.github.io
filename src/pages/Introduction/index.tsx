import { MDXProvider } from "@mdx-js/react";
import { useEffect } from "react";
import { useAnalytics } from "use-analytics";
import CallToActionSection from "@/components/cta";
import { components } from "@/features/tokenize/components";
import Content from "./content.mdx";

export default function IntroductionPage() {
	const analytics = useAnalytics();
	useEffect(() => {
		if (!analytics) return;
		analytics.page();
	});

	return (
		<MDXProvider components={components}>
			<Content />
			<CallToActionSection />
		</MDXProvider>
	);
}
