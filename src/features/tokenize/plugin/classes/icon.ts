import { IconAttributes } from "../../constants";
import type { IconArgs, InjectArgs } from "../../interface";
import {
	AttributeType,
	RemarkNodeTypes,
	TokenizedNodeNameTypes,
	Weight,
} from "../constants";
import type { IconNode } from "../interface";
import { isIconKey } from "../util";
import { TokenBase } from "./base";

export class TokenIcon extends TokenBase<
	IconArgs & Partial<InjectArgs>,
	IconNode
> {
	constructor(args: IconArgs) {
		if (!isIconKey(args.iconType)) {
			throw new Error(`Invalid icon type: ${args.iconType}`);
		}
		super(args);
		this.weight =
			args.size === "L" ? Weight.LARGE_TOKEN : Weight.DEFAULT_TOKEN;
	}

	toAST(): IconNode {
		this.validate(Object.values(IconAttributes));
		return {
			type: RemarkNodeTypes.MDX_JSX_FLOW_ELEMENT,
			name: TokenizedNodeNameTypes.TOKENIZED_ICON,
			attributes: [
				{
					type: AttributeType.MDX_JSX_ATTRIBUTE,
					name: IconAttributes.ID,
					value: String(this.args.id),
				},
				{
					type: AttributeType.MDX_JSX_ATTRIBUTE,
					name: IconAttributes.ACTIVATE_AT,
					value: String(this.args.activateAt),
				},
				{
					type: AttributeType.MDX_JSX_ATTRIBUTE,
					name: IconAttributes.ICON_TYPE,
					value: String(this.args.iconType),
				},
				{
					type: AttributeType.MDX_JSX_ATTRIBUTE,
					name: IconAttributes.SIZE,
					value: String(this.args.size),
				},
			],
			children: [],
		};
	}
}
