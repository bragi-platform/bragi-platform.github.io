import { AttributeNames, AttributeType, Height } from "../constants";
import type { RemarkNode, TokenizedNodeAttribute } from "../interface";
import { getActivateAt } from "./calculation";

export function injectAttribute<T extends RemarkNode>(node: T, attribute: TokenizedNodeAttribute): T {
    return {
        ...node,
        attributes: [
            ...node.attributes,
            attribute,
        ]
    };
}

export function createIdAttribute(id: number): TokenizedNodeAttribute {
    return {
        type: AttributeType.MDX_JSX_ATTRIBUTE,
        name: AttributeNames.ID,
        value: `T-${id}`
    };
}

export function createActivateAtAttribute(currentProgress: number, initialActivatedWeight: number, totalWeight: number, heightEndsAt: number = Height.ENDS_AT): TokenizedNodeAttribute {
    return {
        type: AttributeType.MDX_JSX_ATTRIBUTE,
        name: AttributeNames.ACTIVATE_AT,
        value: getActivateAt(currentProgress, initialActivatedWeight, totalWeight, heightEndsAt)
    };
}

export function createWeightAttribute(weight: number): TokenizedNodeAttribute {
    return {
        type: AttributeType.MDX_JSX_ATTRIBUTE,
        name: AttributeNames.WEIGHT,
        value: weight
    };
}
