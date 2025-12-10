export function GooeyFilter() {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <필터임>
		<svg style={{ position: "absolute" }}>
			<defs>
				<filter id="goo">
					<feGaussianBlur
						in="SourceGraphic"
						stdDeviation="1"
						result="blur"
					/>
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 18 -7"
						result="goo"
					/>
					<feBlend in="SourceGraphic" in2="goo" />
				</filter>
			</defs>
		</svg>
	);
}
