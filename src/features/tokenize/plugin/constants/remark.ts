export const RemarkNodeTypes = {
	PARAGRAPH: "paragraph",
	MDX_JSX_TEXT_ELEMENT: "mdxJsxTextElement",
	MDX_JSX_FLOW_ELEMENT: "mdxJsxFlowElement",
	TEXT: "text",
} as const;

export const TokenizedNodeNameTypes = {
	TOKENIZED_TEXT: "TokenText",
	TOKENIZED_ICON: "TokenIcon",
} as const;

export const AttributeType = {
	MDX_JSX_ATTRIBUTE: "mdxJsxAttribute",
} as const;
