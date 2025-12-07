import type { Root } from "mdast";
import { visit } from "unist-util-visit";

import { RemarkNodeTypes, Weight } from "../constants";
import { isRawTextNode } from "../util";
import { getWeightFromNode } from "./calculation";

export function calculateInitialActivatedWeight(tree: Root): number {
	let initialActivatedWeight = 0;

	visit(tree, RemarkNodeTypes.PARAGRAPH, (paragraphNode) => {
		if (initialActivatedWeight !== 0) return;
		const sentences = paragraphNode.children.filter((child: unknown) =>
			isRawTextNode(child),
		);
		const firstSentence = sentences[0].value.split(".")[0];

		initialActivatedWeight = firstSentence.length + 1;
	});
	return initialActivatedWeight;
}

export function calculateTotalWeight(tree: Root): number {
	let totalWeight = 0;

	visit(tree, RemarkNodeTypes.PARAGRAPH, (paragraphNode) => {
		for (const child of paragraphNode.children) {
			totalWeight += getWeightFromNode(child);
		}
		totalWeight += Weight.PARAGRAPH;
	});

	return totalWeight;
}
