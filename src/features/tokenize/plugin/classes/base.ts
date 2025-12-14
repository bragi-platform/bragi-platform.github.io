import type { z } from "zod";
import type { IconSchema, InjectableSchema, TextSchema } from "../../schema";
import { Weight } from "../constants";
import type { IconNode, TextNode } from "../interface";

export abstract class TokenBase<
	S extends typeof IconSchema | typeof TextSchema,
	I extends typeof InjectableSchema,
	R extends TextNode | IconNode,
> {
	protected args: Partial<z.infer<S> & z.infer<I>>;
	protected weight: number;

	constructor(args: z.infer<S>) {
		this.args = {
			...args,
			...{}, // 타입 추론을 위해 빈 객체 추가
		};
		this.weight = Weight.DEFAULT_TOKEN;
	}

	injectAttribute(args: z.infer<I>) {
		this.args = {
			...this.args,
			...args,
		};
	}

	getWeight() {
		return this.weight;
	}

	abstract toAST(): R;
}
