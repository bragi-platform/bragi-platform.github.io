import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_GA_ID: z.string().min(1),
		NEXT_PUBLIC_GTM_ID: z.string().min(1),
		NEXT_PUBLIC_BOOKING_LINK: z.url(),
	},
	runtimeEnv: {
		NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
		NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
		NEXT_PUBLIC_BOOKING_LINK: process.env.NEXT_PUBLIC_BOOKING_LINK,
	},
	onValidationError: (error) => {
		// biome-ignore lint/suspicious/noConsole: <빌드 타임에 에러 확인 용도>
		console.log(error);
		throw error;
	},
});
