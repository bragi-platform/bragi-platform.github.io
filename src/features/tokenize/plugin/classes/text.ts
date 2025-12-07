import { TextAttributes } from "../../constants";
import type { InjectArgs, TextArgs } from "../../interface";
import {
	AttributeType,
	RemarkNodeTypes,
	TokenizedNodeNameTypes,
} from "../constants";
import type { TextNode } from "../interface";
import { TokenBase } from "./base";

export class TokenText extends TokenBase<
	TextArgs & Partial<InjectArgs>,
	TextNode
> {
	constructor(args: TextArgs) {
		super(args);
		this.weight = args.content.length;
	}

	toAST() {
		this.validate(Object.values(TextAttributes));
		return {
			type: RemarkNodeTypes.MDX_JSX_FLOW_ELEMENT,
			name: TokenizedNodeNameTypes.TOKENIZED_TEXT,
			attributes: [
				{
					type: AttributeType.MDX_JSX_ATTRIBUTE,
					name: TextAttributes.ID,
					value: String(this.args.id),
				},
				{
					type: AttributeType.MDX_JSX_ATTRIBUTE,
					name: TextAttributes.ACTIVATE_AT,
					value: String(this.args.activateAt),
				},
				{
					type: AttributeType.MDX_JSX_ATTRIBUTE,
					name: TextAttributes.CONTENT,
					value: String(this.args.content),
				},
			],
			children: [],
		};
	}
}
