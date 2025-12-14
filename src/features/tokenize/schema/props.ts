import z from "zod";

export const TokenIconTypeEnum = [
	"AIRPLANE",
	"DYNAMIC",
	"EAR",
	"FRIENDS",
	"GROWTH",
	"GUARD",
	"LEARNING",
	"MAILBOX",
	"MONEY",
	"OOPS",
	"PROFILES",
	"SEARCHING",
	"SHORTCUT",
	"VOLCANO",
] as const;

export const IconSchema = z.object({
	size: z.enum(["S", "M", "L"]).default('S'),
	iconType: z.enum(TokenIconTypeEnum),
});

export const TextSchema = z.object({
	content: z.string(),
});

export const InjectableSchema = z.object({
	activateAt: z.number(),
	id: z.string(),
});

export const FinalIconSchema = z.intersection(IconSchema, InjectableSchema);
export const FinalTextSchema = z.intersection(TextSchema, InjectableSchema);
