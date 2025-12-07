import type { TokenIconTypeKeys } from "../constants";

export type TokenIconTypeKey =
	(typeof TokenIconTypeKeys)[keyof typeof TokenIconTypeKeys];
