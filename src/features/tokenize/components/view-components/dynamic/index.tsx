import { useEffect, useState } from "react";
import type { IconProps } from "../../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import { GooeyFilter } from "./GooeyFilter";
import { COLOR_ENUM, type MetaballAtom } from "./interface";
import { Metaball } from "./Metaball";
import { shuffle } from "./shuffle";

export function Dynamic(props: IconProps) {
	const { size, isActive } = props;

	const [gridState, setGridState] = useState(initialGridState);

	useEffect(() => {
		const interval = setInterval(() => {
			setGridState(shuffle(gridState));
		}, 1000);
		return () => clearInterval(interval);
	});

	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer size={size}>
				<GooeyFilter />
				<span className="absolute left-[10%] top-[20%]">
					{Object.values(COLOR_ENUM).map((color) => (
						<span
							className="w-3 h-3 absolute"
							key={color}
							style={{
								filter: "url(#goo)",
							}}
						>
							{gridState.map((item, index) => {
								// 인덱스가 있어야 좌표 계산이 가능하므로 null 반환으로 살림
								if (item[0] !== color) return null;
								return (
									<Metaball
										key={item[1]}
										index={index}
										color={color}
									/>
								);
							})}
						</span>
					))}
				</span>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

const initialGridState: MetaballAtom[] = [
	[COLOR_ENUM.red, 0],
	[COLOR_ENUM.blue, 1],
	[COLOR_ENUM.yellow, 2],
	[COLOR_ENUM.red, 3],
	[COLOR_ENUM.blue, 4],
	[COLOR_ENUM.yellow, 5],
	[COLOR_ENUM.red, 6],
	[COLOR_ENUM.blue, 7],
	[COLOR_ENUM.yellow, 8],
];
