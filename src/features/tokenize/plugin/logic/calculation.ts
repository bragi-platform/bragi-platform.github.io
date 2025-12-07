import { AttributeNames, Height, Weight } from "../constants";
import { isIconNode, isRawTextNode, isTextNode } from "../util";

export function getWeightFromNode(node: unknown): number {
	if (isRawTextNode(node)) {
		return node.value.length;
	}

	if (isTextNode(node)) {
		const v = node.attributes?.find(
			(attr) => attr.name === AttributeNames.CONTENT,
		)?.value;
		return v ? v.toString().length : 1;
	}

	if (isIconNode(node)) {
		const weightAttr = node.attributes?.find(
			(attr) => attr.name === AttributeNames.WEIGHT,
		);
		if (weightAttr?.value) {
			if (typeof weightAttr.value === "string") {
				return weightAttr.value === "L"
					? Weight.LARGE_TOKEN
					: Weight.DEFAULT_TOKEN;
			}
		}
		return Weight.DEFAULT_TOKEN;
	}

	return 0;
}

export function getActivateAt(
	progress: number,
	initialActivatedWeight: number,
	totalWeight: number,
	heightEndsAt: number = Height.ENDS_AT,
): number {
	if (totalWeight <= 0) return 0;
	if (initialActivatedWeight >= progress) return 0;
	return (progress / totalWeight) * heightEndsAt;
}
