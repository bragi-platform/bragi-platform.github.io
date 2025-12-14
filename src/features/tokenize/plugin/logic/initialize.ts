import type { Text } from "mdast";
import { TokenIcon, TokenText } from "../classes";
import type { ParagraphNode } from "../interface";
import { getIconNodeAttr, isIconNode, isTextNode } from "../util";
import type { TokenMap } from "./interface";

export function createTokens(paragraphs: ParagraphNode[]): TokenMap {
	const tokenMap: TokenMap = new Map();
	for (const paragraph of paragraphs) {
		for (const node of paragraph.children) {
			updateTokenMap(node, tokenMap);
		}
	}
	return tokenMap;
}

function updateTokenMap(
	node: ParagraphNode["children"][number],
	tokenMap: TokenMap,
) {
	if (isIconNode(node)) {
		const iconNode = getIconNodeAttr(node);
		if (!iconNode) return;
		const token = new TokenIcon({
			iconType: iconNode.iconType,
			size: iconNode.size,
		});
		tokenMap.set(node, token);
	} else if (isTextNode(node)) {
		const words = splitWords(node);
		const tokens = words.map((word) => new TokenText({ content: word }));
		tokenMap.set(node, tokens);
	}
}

function splitWords(node: Text): string[] {
	const words = node.value.split(" ");
	return words.map((word, idx) =>
		idx === words.length - 1 ? word : `${word} `,
	);
}
