import type { IconArgs, InjectArgs, TextArgs } from "../../interface";
import { Weight } from "../constants";
import type { IconNode, TextNode } from "../interface";

export abstract class TokenBase<
	T extends (TextArgs | IconArgs) & Partial<InjectArgs>,
	R extends TextNode | IconNode,
> {
	protected args: T;
	protected weight: number;

	constructor(args: T) {
		this.args = args;
		this.weight = Weight.DEFAULT_TOKEN;
	}

	injectAttribute(args: InjectArgs) {
		this.args = {
			...this.args,
			...args,
		};
	}

	getWeight() {
		return this.weight;
	}

	abstract toAST(): R;

	protected validate(attrs: string[]) {
		for (const val of attrs) {
			if (!(val in this.args)) {
				throw new Error(`Missing attribute: ${val}`);
			}
		}
	}
}
