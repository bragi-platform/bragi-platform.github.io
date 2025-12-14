import z from "zod";
import type { TextArgs } from "../../interface";
import { InjectableSchema, TextSchema } from "../../schema";
import type { TextNode } from "../interface";
import { validateSchema } from "../util";
import { TokenBase } from "./base";

export class TokenText extends TokenBase<
	typeof TextSchema,
	typeof InjectableSchema,
	TextNode
> {
	constructor(args: TextArgs) {
		super(args);
		this.weight = args.content.length;
	}

	toAST(): TextNode {
		validateSchema(this.args, z.intersection(TextSchema, InjectableSchema));
		return {
			type: "mdxJsxFlowElement",
			name: "TokenText",
			attributes: [
				{
					type: "mdxJsxAttribute",
					name: "id" as const,
					value: String(this.args.id),
				},
				{
					type: "mdxJsxAttribute",
					name: "activateAt" as const,
					value: String(this.args.activateAt),
				},
				{
					type: "mdxJsxAttribute",
					name: "content" as const,
					value: String(this.args.content),
				},
			],
			children: [],
		};
	}
}
