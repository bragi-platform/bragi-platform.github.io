import CallToActionSection from "@/components/cta";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{children}
			<CallToActionSection />
		</>
	);
}
