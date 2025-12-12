"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { Button } from "@/components/ui/button";
import CalDotCom from "./calcom.svg";

const BOOKING_LINK = process.env.NEXT_PUBLIC_BOOKING_LINK || "";

export default function CallToActionSection() {
	const onClick = () => {
		sendGAEvent("event", "reservation-button-click");
	};

	return (
		<Button
			variant="secondary"
			className="font-plex-sans text-xl h-18 bg-green-300 hover:bg-green-400 dark:bg-green-700 dark:hover:bg-green-600"
		>
			<a
				className="flex w-full h-full items-center justify-center gap-2"
				href={BOOKING_LINK}
				onClick={onClick}
			>
				<CalDotCom className="size-8" />
				에서 인터뷰 예약하기
			</a>
		</Button>
	);
}
