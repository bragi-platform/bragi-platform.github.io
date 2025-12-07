import type { Text } from "mdast";
import { TokenIconTypeKeys } from "../../constants";
import type { TokenIconTypeKey } from "../../interface";
import { RemarkNodeTypes, TokenizedNodeNameTypes } from "../constants";
import type { IconNode } from "../interface";

export function isRawTextNode(node: unknown): node is Text {
	if (!node) return false;
	if (typeof node !== "object") return false;
	if (!("type" in node)) return false;
	if (node.type !== RemarkNodeTypes.TEXT) return false;
	return true;
}

export function isIconNode(node: unknown): node is IconNode {
	if (!node) return false;
	if (typeof node !== "object") return false;
	if (!("type" in node)) return false;
	if (node.type !== RemarkNodeTypes.MDX_JSX_TEXT_ELEMENT) return false;

	if (!("name" in node)) return false;
	if (node.name !== TokenizedNodeNameTypes.TOKENIZED_ICON) return false;
	return true;
}

const iconKeySet = new Set<string>(Object.values(TokenIconTypeKeys));
export function isIconKey(key: string): key is TokenIconTypeKey {
	return iconKeySet.has(key);
}
