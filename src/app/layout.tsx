import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import MainLayout from "@/layout/MainLayout";
import Shell from "@/providers/shell";
import "./globals.css";

export const metadata: Metadata = {
	title: "브라기 | 시인 중심 세상",
	description: "위대한 작품이 세상에 배달되도록, 시인을 돕고 연결합니다.",
	metadataBase: new URL("https://bragi-platform.github.io/"),
	openGraph: {
		type: "website",
		title: "시인 중심, 브라기",
		description: "위대한 작품이 세상에 배달되도록, 시인을 돕고 연결합니다.",
		images: [{ url: "/logo.png" }],
	},
	twitter: {
		card: "summary_large_image",
		title: "시인 중심, 브라기",
		description: "위대한 작품이 세상에 배달되도록, 시인을 돕고 연결합니다.",
		images: [{ url: "/logo.png" }],
	},
	icons: {
		icon: "/favicon.ico",
	},
};

const ibmSans = IBM_Plex_Sans_KR({
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-plex-sans",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className={ibmSans.className}>
				<Shell>
					<MainLayout>{children}</MainLayout>
				</Shell>
			</body>
		</html>
	);
}
