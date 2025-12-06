import type { MetaballAtom } from "./interface";

export function shuffle(grid: MetaballAtom[]): MetaballAtom[] {
	return [...grid].sort(() => Math.random() - 0.5);
}
