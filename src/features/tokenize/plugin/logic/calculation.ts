import type { Root } from "mdast";
import { visit } from "unist-util-visit";
import { isTextNode } from "../util";
import type { TokenMap } from "./interface";

export function calculateInitialActivatedWeight(tree: Root): number {
	let initialActivatedWeight = 0;

	visit(tree, "paragraph", (paragraphNode) => {
		if (initialActivatedWeight !== 0) return;
		const sentences = paragraphNode.children.filter((child: unknown) =>
			isTextNode(child),
		);
		if (sentences.length === 0) return;
		const firstSentence = sentences[0].value.split(".")[0];

		initialActivatedWeight = firstSentence.length + 1;
	});
	return initialActivatedWeight;
}

export function calculateTotalWeight(tokenMap: TokenMap): number {
	let totalWeight = 0;
	for (const token of tokenMap.values()) {
		if (Array.isArray(token)) {
			totalWeight += token.reduce((acc, cur) => acc + cur.getWeight(), 0);
		} else {
			totalWeight += token.getWeight();
		}
	}
	return totalWeight;
}
