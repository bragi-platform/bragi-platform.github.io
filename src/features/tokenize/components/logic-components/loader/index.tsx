import { type ComponentType, type LazyExoticComponent, lazy } from "react";
import type { IconProps } from "../../../interface";
import type { TokenIconTypeEnum } from "../../../schema";

export const TokenIconLoader: Record<
	(typeof TokenIconTypeEnum)[number],
	LazyExoticComponent<ComponentType<IconProps>>
> = {
	AIRPLANE: lazy(() =>
		import("../../view-components/airplane").then((module) => ({
			default: module.Airplane,
		})),
	),
	DYNAMIC: lazy(() =>
		import("../../view-components/dynamic").then((module) => ({
			default: module.Dynamic,
		})),
	),
	EAR: lazy(() =>
		import("../../view-components/ear").then((module) => ({
			default: module.Ear,
		})),
	),
	FRIENDS: lazy(() =>
		import("../../view-components/friends").then((module) => ({
			default: module.Friends,
		})),
	),
	GROWTH: lazy(() =>
		import("../../view-components/growth").then((module) => ({
			default: module.Growth,
		})),
	),
	GUARD: lazy(() =>
		import("../../view-components/guard").then((module) => ({
			default: module.Guard,
		})),
	),
	LEARNING: lazy(() =>
		import("../../view-components/learning").then((module) => ({
			default: module.Learning,
		})),
	),
	MAILBOX: lazy(() =>
		import("../../view-components/mailbox").then((module) => ({
			default: module.Mailbox,
		})),
	),
	MONEY: lazy(() =>
		import("../../view-components/money").then((module) => ({
			default: module.Money,
		})),
	),
	OOPS: lazy(() =>
		import("../../view-components/oops").then((module) => ({
			default: module.Oops,
		})),
	),
	PROFILES: lazy(() =>
		import("../../view-components/profile").then((module) => ({
			default: module.Profiles,
		})),
	),
	SEARCHING: lazy(() =>
		import("../../view-components/searching").then((module) => ({
			default: module.Searching,
		})),
	),
	SHORTCUT: lazy(() =>
		import("../../view-components/shortcut").then((module) => ({
			default: module.Shortcut,
		})),
	),
	VOLCANO: lazy(() =>
		import("../../view-components/volcano").then((module) => ({
			default: module.Volcano,
		})),
	),
};
