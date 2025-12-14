import type { Text } from "mdast";
import type { z } from "zod";
import {
	IconSchema,
	TextNodeSchema,
	TransformedIconNodeSchema,
} from "../../schema";
import type { IconNode } from "../interface";

export function isTextNode(node: unknown): node is Text {
	const textNode = TextNodeSchema.safeParse(node);
	return textNode.success;
}

export function isIconNode(node: unknown): node is IconNode {
	const transformedNode = TransformedIconNodeSchema.safeParse(node);
	const iconResult = IconSchema.safeParse(transformedNode.data?.attributes);
	return iconResult.success;
}

export function getIconNodeAttr(node: unknown) {
	const transformedNode = TransformedIconNodeSchema.safeParse(node);
	const iconResult = IconSchema.safeParse(transformedNode.data?.attributes);
	return iconResult.data;
}

export function validateSchema<T extends z.ZodTypeAny>(
	arg: unknown,
	schema: T,
): asserts arg is z.infer<T> {
	const result = schema.safeParse(arg);
	if (!result.success) {
		throw new Error(`Invalid arguments: ${result.error.message}`);
	}
}
