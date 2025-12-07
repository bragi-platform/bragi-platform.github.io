import type { TokenIcon } from "../classes";
import type { TokenText } from "../classes/text";
import { Height, Weight } from "../constants";
import type { ParagraphNode, TokenMap } from "../interface";
import { isIconNode, isRawTextNode } from "../util";

export function injectAttributes(
	paragraphs: ParagraphNode[],
	tokenMap: TokenMap,
	initialActivatedWeight: number,
	totalWeight: number,
) {
	let currentWeight = 0;

	for (const paragraph of paragraphs) {
		for (const node of paragraph.children) {
			currentWeight = injectAttributeInNode(
				node,
				currentWeight,
				tokenMap,
				initialActivatedWeight,
				totalWeight,
			);
		}
		currentWeight += Weight.PARAGRAPH;
	}
}

function injectAttributeInNode(
	node: ParagraphNode["children"][number],
	currentWeight: number,
	tokenMap: TokenMap,
	initialActivatedWeight: number,
	totalWeight: number,
): number {
	let localWeight = currentWeight;
	if (!isRawTextNode(node) && !isIconNode(node)) return localWeight;

	const tokens = tokenMap.get(node);
	if (Array.isArray(tokens)) {
		for (const token of tokens) {
			injectHelper(
				token,
				localWeight,
				initialActivatedWeight,
				totalWeight,
			);
			localWeight += token.getWeight();
		}
	} else if (tokens) {
		injectHelper(tokens, localWeight, initialActivatedWeight, totalWeight);
		localWeight += tokens.getWeight();
	}
	return localWeight;
}

function injectHelper(
	token: TokenText | TokenIcon,
	currentWeight: number,
	initialActivatedWeight: number,
	totalWeight: number,
) {
	const activateAt = getActivateAt(
		currentWeight,
		initialActivatedWeight,
		totalWeight,
	);
	token.injectAttribute({
		activateAt,
		id: String(currentWeight),
	});
}

function getActivateAt(
	nodeWeight: number,
	initialActivatedWeight: number,
	totalWeight: number,
	heightEndsAt: number = Height.ENDS_AT,
): number {
	if (totalWeight <= 0) return 0;
	if (initialActivatedWeight >= nodeWeight) return 0;
	return (nodeWeight / totalWeight) * heightEndsAt;
}
