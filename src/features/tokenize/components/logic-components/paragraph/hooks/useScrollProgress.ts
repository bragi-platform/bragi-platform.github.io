import { useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useState } from "react";

export function useIsActive(activateAt: number) {
	const { scrollYProgress } = useScroll();
	const [isActive, setIsActive] = useState<boolean>(
		scrollYProgress.get() >= activateAt,
	);

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	useMotionValueEvent(smoothProgress, "change", (latest) => {
		setIsActive(latest >= activateAt);
	});

	return isActive;
}
