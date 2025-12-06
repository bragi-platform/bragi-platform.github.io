import { Suspense } from "react";
import { TokenIconLoader } from "../loader";
import { useIsActive } from "./hooks/useScrollProgress";
import type { IconWrapperProps } from "../../../interface";

export default function TokenIcon(props: IconWrapperProps) {
	const { activateAt, iconType } = props;
	const isActive = useIsActive(activateAt);

	const Component = TokenIconLoader[iconType];

	return (
		<Suspense>
			<Component isActive={isActive} />
		</Suspense>
	);
}
