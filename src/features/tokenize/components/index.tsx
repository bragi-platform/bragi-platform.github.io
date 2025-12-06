import TokenText from "./logic-components/paragraph/TokenText";
import { type ComponentProps } from "react";
import TokenIcon from "./logic-components/paragraph/TokenIcon";


const ParagraphWrapper = (props: ComponentProps<"p">) => {
    return <p className="block pb-8" {...props } />;
}

export const components = {
    p: ParagraphWrapper,
    TokenText,
    TokenIcon,
};
