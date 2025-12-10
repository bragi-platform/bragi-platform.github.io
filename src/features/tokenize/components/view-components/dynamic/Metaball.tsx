import { motion } from "motion/react";
import { Suspense } from "react";
import type { COLOR_ENUM } from "./interface";

const verticalPosition = [0, "50%", "100%"] as const;
const horizontalPosition = [0, "50%", "100%"] as const;

type MetaballProps = {
	index: number;
	color: (typeof COLOR_ENUM)[keyof typeof COLOR_ENUM];
};

export function Metaball(props: MetaballProps) {
	const { index, color } = props;

	return (
		<Suspense fallback={null}>
			<motion.span
				className="absolute w-2/3 h-2/3 rounded-[40%]"
				layout={true}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
				}}
				style={{
					backgroundColor: color,
					left: verticalPosition[index % 3],
					top: horizontalPosition[Math.floor(index / 3)],
				}}
			/>
		</Suspense>
	);
}
