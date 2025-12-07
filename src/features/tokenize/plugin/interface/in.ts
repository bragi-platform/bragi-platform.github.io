import type {
	AttributeNames,
	AttributeType,
	RemarkNodeTypes,
	TokenizedNodeNameTypes,
} from "../constants";

export type RemarkNode = RawTextNode | IconNode | TextNode;

export type RawTextNode = {
	type: typeof RemarkNodeTypes.TEXT;
	value: string;
	attributes: TokenizedNodeAttribute[];
};

export type TextNode = {
	type: typeof RemarkNodeTypes.MDX_JSX_TEXT_ELEMENT;
	name: typeof TokenizedNodeNameTypes.TOKENIZED_TEXT;
	attributes: TokenizedNodeAttribute[];
};

export type IconNode = {
	type: typeof RemarkNodeTypes.MDX_JSX_TEXT_ELEMENT;
	name: typeof TokenizedNodeNameTypes.TOKENIZED_ICON;
	attributes: TokenizedNodeAttribute[];
};

export type TokenizedNodeAttribute = {
	type: typeof AttributeType.MDX_JSX_ATTRIBUTE;
	name: (typeof AttributeNames)[keyof typeof AttributeNames];
	value?: string | number;
};
