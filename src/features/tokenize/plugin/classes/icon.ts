import z from "zod";
import type { IconArgs } from "../../interface";
import { IconSchema, InjectableSchema } from "../../schema";
import { Weight } from "../constants";
import type { IconNode } from "../interface";
import { validateSchema } from "../util";
import { TokenBase } from "./base";

export class TokenIcon extends TokenBase<
	typeof IconSchema,
	typeof InjectableSchema,
	IconNode
> {
	constructor(args: IconArgs) {
		super(args);
		this.weight =
			args.size === "L" ? Weight.LARGE_TOKEN : Weight.DEFAULT_TOKEN;
	}

	toAST(): IconNode {
		validateSchema(this.args, z.intersection(IconSchema, InjectableSchema));
		return {
			type: "mdxJsxFlowElement",
			name: "TokenIcon",
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
					name: "iconType" as const,
					value: String(this.args.iconType),
				},
				{
					type: "mdxJsxAttribute",
					name: "size" as const,
					value: String(this.args.size),
				},
			],
			children: [],
		};
	}
}
