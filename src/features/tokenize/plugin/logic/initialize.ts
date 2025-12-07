import type { Text } from "mdast";
import { IconAttributes, TokenIconTypeKeys } from "../../constants";
import { TokenIcon, TokenText } from "../classes";
import type { IconNode, ParagraphNode, TokenMap } from "../interface";
import { isIconNode, isRawTextNode } from "../util";

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
	if (isRawTextNode(node)) {
		const words = splitWords(node);
		const tokens = words.map((word) => new TokenText({ content: word }));
		tokenMap.set(node, tokens);
	} else if (isIconNode(node)) {
		const iconType = iconNodeAttrHelper(
			node,
			IconAttributes.ICON_TYPE,
			TokenIconTypeKeys.DYNAMIC,
		);
		const size = iconNodeAttrHelper(node, IconAttributes.SIZE, "S");

		const token = new TokenIcon({
			iconType,
			size,
		});
		tokenMap.set(node, token);
	}
}

function splitWords(node: Text): string[] {
	const words = node.value.split(" ");
	return words.map((word, idx) =>
		idx === words.length - 1 ? word : `${word} `,
	);
}

function iconNodeAttrHelper(
	node: IconNode,
	attr: (typeof IconAttributes)[keyof typeof IconAttributes],
	fallback: string,
): string {
	const v = node.attributes.filter((a) => "name" in a && a.name === attr)[0]
		?.value;
	return v ? String(v) : fallback;
}
