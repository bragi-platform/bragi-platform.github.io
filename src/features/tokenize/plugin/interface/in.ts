import type { Paragraph, PhrasingContent, Text } from "mdast";
import type { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import type { z } from "zod";
import type { FinalIconSchema, FinalTextSchema } from "../../schema";

// mdast 노드를 확장한 커스텀 타입(자녀 교체 타입 오류 우회)
export type ParagraphNode = Omit<Paragraph, "children"> & {
	children: (PhrasingContent | RemarkNode)[];
};

type RemarkNode = Text | IconNode | TextNode;

// classes에서 반환할 mdast 노드
export type TextNode = MdxJsxFlowElement & {
	name: "TokenText";
	attributes: TokenizedNodeAttribute<z.infer<typeof FinalTextSchema>>[];
};

export type IconNode = MdxJsxFlowElement & {
	name: "TokenIcon";
	attributes: TokenizedNodeAttribute<z.infer<typeof FinalIconSchema>>[];
};

type TokenizedNodeAttribute<
	T extends z.infer<typeof FinalIconSchema | typeof FinalTextSchema>,
> = {
	type: "mdxJsxAttribute";
	name: keyof T;
	value: string;
};
