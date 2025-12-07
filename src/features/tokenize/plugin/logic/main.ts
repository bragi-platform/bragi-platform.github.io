import type { Paragraph, Root } from "mdast";
import type { Transformer } from "unified";
import {
	AttributeType,
	RemarkNodeTypes,
	TokenizedNodeNameTypes,
	Weight,
} from "../constants";
import type { RawTextNode, RemarkNode, TextNode } from "../interface";
import { isIconNode, isRawTextNode } from "../util";
import { getWeightFromNode } from "./calculation";
import {
	calculateInitialActivatedWeight,
	calculateTotalWeight,
} from "./initialize";
import {
	createActivateAtAttribute,
	createIdAttribute,
	createWeightAttribute,
	injectAttribute,
} from "./node";

export function remarkTokenProcess(): Transformer<Root, Root> {
	return (tree: Root) => {
		const totalWeight = calculateTotalWeight(tree);
		const initialActivatedWeight = calculateInitialActivatedWeight(tree);

		const paragraphs = tree.children.filter(
			(node) => node.type === RemarkNodeTypes.PARAGRAPH,
		);
		injectAttributes(paragraphs, initialActivatedWeight, totalWeight);
	};
}

function injectAttributes(
	paragraphs: Paragraph[],
	initialActivatedWeight: number,
	totalWeight: number,
) {
	let currentWeight = 0;
	for (const paragraph of paragraphs) {
		const newParagraph: RemarkNode[] = [];
		for (const node of paragraph.children) {
			if (isRawTextNode(node)) {
				const [localWeight, wordNodes] = getWordNodes(
					node,
					currentWeight,
					initialActivatedWeight,
					totalWeight,
				);
				newParagraph.push(...wordNodes);
				currentWeight = localWeight;
			} else if (isIconNode(node)) {
				const injected = injectAttribute(
					node,
					createActivateAtAttribute(
						currentWeight,
						initialActivatedWeight,
						totalWeight,
					),
				);
				newParagraph.push(
					injectAttribute(injected, createIdAttribute(currentWeight)),
				);
				currentWeight += getWeightFromNode(node);
			}
		}
		currentWeight += Weight.PARAGRAPH;
		paragraph.children = newParagraph as any;
	}
	return;
}

function getWordNodes(
	node: RawTextNode,
	currentWeight: number,
	initialActivatedWeight: number,
	totalWeight: number,
): [number, TextNode[]] {
	let localWeight = currentWeight;

	const res: TextNode[] = [];
	const words = splitWords(node);
	for (const word of words) {
		const weight = getWeightFromNode(word);
		const injected_activateAt = injectAttribute(
			word,
			createActivateAtAttribute(
				localWeight,
				initialActivatedWeight,
				totalWeight,
			),
		);
		const injected_id = injectAttribute(
			injected_activateAt,
			createIdAttribute(localWeight),
		);
		const injected_weight = injectAttribute(
			injected_id,
			createWeightAttribute(weight),
		);
		localWeight += weight;
		res.push(injected_weight);
	}
	return [localWeight, res];
}

function splitWords(node: RawTextNode): TextNode[] {
	const words = node.value.split(" ");
	return words.map((word, idx) => {
		return {
			type: RemarkNodeTypes.MDX_JSX_TEXT_ELEMENT,
			name: TokenizedNodeNameTypes.TOKENIZED_TEXT,
			attributes: [
				{
					type: AttributeType.MDX_JSX_ATTRIBUTE,
					name: "content",
					value: idx === words.length - 1 ? word : `${word} `,
				},
			],
		};
	});
}
