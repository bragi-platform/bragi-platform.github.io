import type { MDXComponents } from "mdx/types";
import { components } from "@/features/tokenize/components";

export function useMDXComponents(): MDXComponents {
	return components;
}
