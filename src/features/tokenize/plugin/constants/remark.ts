export const RemarkNodeTypes = {
    PARAGRAPH: "paragraph",
    MDX_JSX_TEXT_ELEMENT: "mdxJsxTextElement",
    TEXT: "text",
} as const;

export const TokenizedNodeNameTypes = {
    TOKENIZED_TEXT: "TokenText",
    TOKENIZED_ICON: "TokenIcon",
} as const;

export const AttributeNames = {
    ACTIVATE_AT: "activateAt",
    ID: "id",
    WEIGHT: "weight",
    CHILDREN: "children",
    CONTENT: "content",
    ICON_TYPE: 'iconType',
} as const;

export const AttributeType = {
    MDX_JSX_ATTRIBUTE: 'mdxJsxAttribute',
}