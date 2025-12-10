import type { IconProps } from "../../../interface";
import type { TokenVariants } from "../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import PlainMailbox from "./mailbox.svg";
import Spider from "./spider.svg";

const iconCN = "w-full h-full";

export function Mailbox(props: IconProps) {
	const { isActive, size } = props;
	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<TokenIcon.SVGPlacer size={size}>
				<TokenIcon.SVGContainer variants={mailboxVariants}>
					<PlainMailbox className={iconCN} />
				</TokenIcon.SVGContainer>
				{/* 거미줄*/}
				<TokenIcon.SVGContainer variants={stringVariants}>
					<span className="absolute bg-black w-[1%] h-[20%] top-[18%] left-[31%]" />
				</TokenIcon.SVGContainer>
				<TokenIcon.SVGContainer variants={spiderContainerVariant}>
					<TokenIcon.SVGContainer variants={spiderVariants}>
						<Spider
							className={
								"absolute w-[42%] h-[42%] left-[11%] top-[14%]"
							}
						/>
					</TokenIcon.SVGContainer>
				</TokenIcon.SVGContainer>
			</TokenIcon.SVGPlacer>
		</TokenIcon.OuterContainer>
	);
}

const mailboxVariants: TokenVariants = {
	idle: {
		scale: 0,
	},
	active: {
		scale: 1,
		transition: {
			duration: 0.3,
			ease: "easeIn",
		},
	},
};

const stringVariants: TokenVariants = {
	idle: {
		scaleY: 0,
	},
	active: {
		scaleY: 1,
		transition: {
			delay: 0.5,
		},
	},
};

const spiderContainerVariant: TokenVariants = {
	idle: {
		opacity: 0,
	},
	active: {
		opacity: 1,
		transition: {
			delay: 0.5,
		},
	},
};

const spiderVariants: TokenVariants = {
	idle: {
		translateY: 0,
	},
	active: {
		translateY: [0, "10%", 0],
		transition: {
			delay: 0.5,
			repeat: Infinity,
			repeatType: "loop",
			duration: 2,
			ease: "easeIn",
		},
	},
};
