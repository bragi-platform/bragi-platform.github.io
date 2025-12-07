import { type ComponentType, type LazyExoticComponent, lazy } from "react";
import { TokenIconTypeKeys } from "../../../constants";
import type { IconProps, TokenIconTypeKey } from "../../../interface";

export const TokenIconLoader: Record<
	TokenIconTypeKey,
	LazyExoticComponent<ComponentType<IconProps>>
> = {
	[TokenIconTypeKeys.AIRPLANE]: lazy(() =>
		import("../../view-components/airplane").then((module) => ({
			default: module.Airplane,
		})),
	),
	[TokenIconTypeKeys.DYNAMIC]: lazy(() =>
		import("../../view-components/dynamic").then((module) => ({
			default: module.Dynamic,
		})),
	),
	[TokenIconTypeKeys.EAR]: lazy(() =>
		import("../../view-components/ear").then((module) => ({
			default: module.Ear,
		})),
	),
	[TokenIconTypeKeys.FRIENDS]: lazy(() =>
		import("../../view-components/friends").then((module) => ({
			default: module.Friends,
		})),
	),
	[TokenIconTypeKeys.GROWTH]: lazy(() =>
		import("../../view-components/growth").then((module) => ({
			default: module.Growth,
		})),
	),
	[TokenIconTypeKeys.GUARD]: lazy(() =>
		import("../../view-components/guard").then((module) => ({
			default: module.Guard,
		})),
	),
	[TokenIconTypeKeys.LEARNING]: lazy(() =>
		import("../../view-components/learning").then((module) => ({
			default: module.Learning,
		})),
	),
	[TokenIconTypeKeys.MAILBOX]: lazy(() =>
		import("../../view-components/mailbox").then((module) => ({
			default: module.Mailbox,
		})),
	),
	[TokenIconTypeKeys.MONEY]: lazy(() =>
		import("../../view-components/money").then((module) => ({
			default: module.Money,
		})),
	),
	[TokenIconTypeKeys.OOPS]: lazy(() =>
		import("../../view-components/oops").then((module) => ({
			default: module.Oops,
		})),
	),
	[TokenIconTypeKeys.PROFILES]: lazy(() =>
		import("../../view-components/profile").then((module) => ({
			default: module.Profiles,
		})),
	),
	[TokenIconTypeKeys.SEARCHING]: lazy(() =>
		import("../../view-components/searching").then((module) => ({
			default: module.Searching,
		})),
	),
	[TokenIconTypeKeys.SHORTCUT]: lazy(() =>
		import("../../view-components/shortcut").then((module) => ({
			default: module.Shortcut,
		})),
	),
	[TokenIconTypeKeys.VOLCANO]: lazy(() =>
		import("../../view-components/volcano").then((module) => ({
			default: module.Volcano,
		})),
	),
};
