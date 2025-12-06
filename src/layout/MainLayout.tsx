import type { PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";

export default function MainLayout({ children }: PropsWithChildren) {
	return (
		<div className="flex justify-center w-full">
			<div
				className="flex flex-col items-center justify-center gap-36 my-20"
				style={{
					width: "min(90%, 650px)",
				}}
			>
				<Header />
				<div className="w-full flex flex-col gap-4">{children}</div>
				<Footer />
			</div>
		</div>
	);
}
