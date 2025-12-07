import type { Paragraph, PhrasingContent, Text } from "mdast";
import type { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import type { IconAttributes, TextAttributes } from "../../constants";
import type { TokenIcon, TokenText } from "../classes";
import type { AttributeType, TokenizedNodeNameTypes } from "../constants";

export type TokenMap = Map<Text | IconNode, TokenText[] | TokenIcon>;

// mdast 노드를 확장한 커스텀 타입(자녀 교체 타입 오류 우회)
export type ParagraphNode = Omit<Paragraph, "children"> & {
	children: (PhrasingContent | RemarkNode)[];
};

type RemarkNode = Text | IconNode | TextNode;

// classes에서 반환할 mdast 노드
export type TextNode = MdxJsxFlowElement & {
	name: typeof TokenizedNodeNameTypes.TOKENIZED_TEXT;
	attributes: TokenizedNodeAttribute<typeof TextAttributes>[];
};

export type IconNode = MdxJsxFlowElement & {
	name: typeof TokenizedNodeNameTypes.TOKENIZED_ICON;
	attributes: TokenizedNodeAttribute<typeof IconAttributes>[];
};

type TokenizedNodeAttribute<
	T extends typeof IconAttributes | typeof TextAttributes,
> = {
	type: typeof AttributeType.MDX_JSX_ATTRIBUTE;
	name: T[keyof T];
	value: string;
};
