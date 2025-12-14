import z from "zod";
import { IconSchema, InjectableSchema } from "./props";

const iconPropsEnum = z.enum([
	...Object.keys(IconSchema.shape),
	...Object.keys(InjectableSchema.shape),
]);
export const IconNodeSchema = z.object({
	type: z.literal("mdxJsxTextElement"),
	name: z.literal("TokenIcon"),
	attributes: createAttributesListSchema(iconPropsEnum),
});
export const TransformedIconNodeSchema = IconNodeSchema.pipe(
	z.transform((data) => ({
		...data,
		attributes: data.attributes.reduce(
			(acc, attr) => {
				acc[attr.name] = attr.value;
				return acc;
			},
			{} as Record<string, string>,
		),
	})),
);

export const TextNodeSchema = z.object({
	type: z.literal("text"),
	value: z.string(),
});

function createAttributesListSchema<E extends z.ZodEnum>(nameEnum: E) {
	return z.array(createAttributeSchema(nameEnum));
}

function createAttributeSchema<E extends z.ZodEnum>(nameEnum: E) {
	return z.object({
		type: z.literal("mdxJsxAttribute"),
		name: nameEnum,
		value: z.string(),
	});
}
