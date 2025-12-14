import type { Text } from "mdast";
import type { TokenIcon, TokenText } from "../classes";
import type { IconNode } from "../interface";

export type TokenMap = Map<Text | IconNode, TokenText[] | TokenIcon>;
