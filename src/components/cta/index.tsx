import { useAnalytics } from "use-analytics";
import { Button } from "@/components/ui/button";
import CalDotCom from "./calcom.svg?react";
import { BOOKING_LINK } from "./constants";

export default function CallToActionSection() {
	const analytics = useAnalytics();

	const onClick = () => {
		analytics.track("reservation-button-click", {
			category: "reservation",
			action: "click",
			label: "reservation-button-click",
		});
	};

	return (
		<Button
			variant="secondary"
			className="font-gothic text-xl h-18 bg-green-300 hover:bg-green-400 dark:bg-green-700 dark:hover:bg-green-600"
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
