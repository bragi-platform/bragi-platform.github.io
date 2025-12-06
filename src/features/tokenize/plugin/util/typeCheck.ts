import { TokenizedNodeNameTypes, RemarkNodeTypes } from "../constants";
import type { IconNode, RawTextNode, TextNode } from "../interface";

export function isRawTextNode(node: unknown): node is RawTextNode {
    if (!node) return false;
    if (typeof node !== 'object') return false;
    if (!('type' in node)) return false;
    if (node.type !== RemarkNodeTypes.TEXT) return false;
    return true;
}

export function isTextNode(node: unknown): node is TextNode {
    if (!node) return false;
    if (typeof node !== 'object') return false;
    if (!('type' in node)) return false;
    if (node.type !== RemarkNodeTypes.MDX_JSX_TEXT_ELEMENT) return false;

    if (!('name' in node)) return false;
    if (node.name !== TokenizedNodeNameTypes.TOKENIZED_TEXT) return false;
    return true
}

export function isIconNode(node: unknown): node is IconNode {
    if (!node) return false;
    if (typeof node !== 'object') return false;
    if (!('type' in node)) return false;
    if (node.type !== RemarkNodeTypes.MDX_JSX_TEXT_ELEMENT) return false;

    if (!('name' in node)) return false;
    if (node.name !== TokenizedNodeNameTypes.TOKENIZED_ICON) return false;
    return true
}

