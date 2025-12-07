import { Suspense } from "react";
import type { IconWrapperProps } from "../../../interface";
import { TokenIconLoader } from "../loader";
import { useIsActive } from "./hooks/useScrollProgress";

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
