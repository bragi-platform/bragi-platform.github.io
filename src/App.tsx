import MainLayout from "./layout/MainLayout";
import IntroductionPage from "./pages/Introduction";

import AnalyticsProvider from "./providers/analytics";
import { ThemeContextProvider } from "./providers/Theme";

import "./index.css";

export default function App() {
	return (
		<AnalyticsProvider>
			<ThemeContextProvider>
				<MainLayout>
					<IntroductionPage />
				</MainLayout>
			</ThemeContextProvider>
		</AnalyticsProvider>
	);
}
