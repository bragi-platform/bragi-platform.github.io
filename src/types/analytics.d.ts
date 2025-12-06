// 임시 타이핑
/** biome-ignore-all lint/suspicious/noExplicitAny: <임시 타이핑> */
declare module "@analytics/google-analytics" {
	type GoogleAnalyticsOptions = {
		measurementIds: string[];
	};

	type AnalyticsPlugin = {
		name: string;
		page?: (...params: any[]) => any;
		track?: (...params: any[]) => any;
		identify?: (...params: any[]) => any;
		loaded?: (...params: any[]) => any;
		ready?: (...params: any[]) => any;
	};

	function GoogleAnalytics(options: GoogleAnalyticsOptions): AnalyticsPlugin;
	export default GoogleAnalytics;
}
