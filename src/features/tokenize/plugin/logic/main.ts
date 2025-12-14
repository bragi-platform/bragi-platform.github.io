import type { Root } from "mdast";
import type { Pluggable } from "unified";
import type { ParagraphNode } from "../interface";
import { isIconNode, isTextNode } from "../util";
import {
	calculateInitialActivatedWeight,
	calculateTotalWeight,
} from "./calculation";
import { createTokens } from "./initialize";
import { injectAttributes } from "./inject";
import type { TokenMap } from "./interface";

export const remarkTokenize: Pluggable = () => {
	return (tree: Root) => {
		// 초기화
		const paragraphs = tree.children.filter(
			(node) => node.type === "paragraph",
		);
		const tokenMap = createTokens(paragraphs);

		// 계산
		const initialActivatedWeight = calculateInitialActivatedWeight(tree);
		const totalWeight = calculateTotalWeight(tokenMap);

		// 주입
		injectAttributes(
			paragraphs,
			tokenMap,
			initialActivatedWeight,
			totalWeight,
		);

		// ast 교체
		replaceParagraphChildren(paragraphs, tokenMap);
	};
};

function replaceParagraphChildren(
	paragraphs: ParagraphNode[],
	tokenMap: TokenMap,
) {
	for (const paragraph of paragraphs) {
		const newChildren: ParagraphNode["children"] = [];
		for (const node of paragraph.children) {
			if (isIconNode(node)) {
				const token = tokenMap.get(node);
				if (!token) continue;
				if (Array.isArray(token)) continue;
				newChildren.push(token.toAST());
			} else if (isTextNode(node)) {
				const tokens = tokenMap.get(node);
				if (!Array.isArray(tokens)) continue;
				for (const token of tokens) {
					newChildren.push(token.toAST());
				}
			}
		}
		paragraph.children = newChildren;
	}
}
