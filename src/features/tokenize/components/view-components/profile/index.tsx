import type { IconProps } from "../../../interface";
import TokenIcon from "../../logic-components/icon-wrapper";
import Bear from "./bear.svg";
import Sheep from "./sheep.svg";
import Skull from "./skull.svg";
import TeamMember from "./TeamMembers";

export function Profiles(props: IconProps) {
	const { isActive } = props;
	return (
		<TokenIcon.OuterContainer isActive={isActive}>
			<span className="flex px-1">
				<TeamMember
					Icon={Sheep}
					name="윤재성"
					position="기획자"
					index={0}
				/>
				<TeamMember
					Icon={Bear}
					name="오다연"
					position="디자이너"
					index={1}
				/>
				<TeamMember
					Icon={Skull}
					name="이동주"
					position="엔지니어"
					index={2}
				/>
			</span>
		</TokenIcon.OuterContainer>
	);
}
